import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StarField } from '@/components/StarField';

// Import logo


import { BirthDetailsForm } from '@/components/BirthDetailsForm';
import { BirthChartSummary } from '@/components/BirthChartSummary';
import { PanchangDisplay } from '@/components/PanchangDisplay';
import { NorthIndianChart } from '@/components/NorthIndianChart';
import { ChalitChart } from '@/components/ChalitChart';
import { PlanetTable } from '@/components/PlanetTable';


import { BNNDailyHoroscope } from '@/components/BNNDailyHoroscope';

import { CollapsibleSection } from '@/components/CollapsibleSection';

import { ProfileList } from '@/components/ProfileList';
import { profileService, UserProfile, BirthDetails as BirthDetailsType } from '@/lib/profileService';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { LanguageToggle } from '@/components/LanguageToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { useViewMode } from '@/contexts/ViewModeContext';
import { getCityCoordinates } from '@/lib/worldLocations';
import { generateMockKundali } from '@/lib/mockKundali';
import { KundaliReport, Panchang, RASHI_SANSKRIT } from '@/types/astrology';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { ArrowLeft, Eye, MapPin, Download, Share2, Printer, FileText, FileType, Sparkles, Users, Combine, Star, Coins, Stethoscope, Plane, Heart, HeartHandshake, BookOpen, Gem, Calendar, BookMarked, Clock, Compass, Moon, Menu, Building2, Baby, Home, Waypoints, Scale, TrendingUp, Gavel, RotateCcw, User, Palette, Zap, Save, Globe, ChevronDown, Info, PhoneCall, Monitor, Smartphone, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';


const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDesktopView } = useViewMode();
  const [isLoading, setIsLoading] = useState(false);

  const [report, setReport] = useState<KundaliReport | null>(null);
  const reportRef = useRef<HTMLDivElement>(null);
  const lagnaChartRef = useRef<HTMLDivElement>(null);
  const chalitChartRef = useRef<HTMLDivElement>(null);
  const birthChartSummaryRef = useRef<HTMLDivElement>(null);
  const panchangRef = useRef<HTMLDivElement>(null);
  const planetTableRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  const [showDailyHoroscope, setShowDailyHoroscope] = useState(false);
  const [isDailyLoading, setIsDailyLoading] = useState(false);

  const [selectedProfileDetails, setSelectedProfileDetails] = useState<BirthDetailsType | undefined>(undefined);
  const [isProfileSheetOpen, setIsProfileSheetOpen] = useState(false);

  // Hoisted state from BirthDetailsForm for persistence
  const [formDetails, setFormDetails] = useState<BirthDetailsType>({
    name: 'RAHUL SHARMA',
    dateOfBirth: '1990-05-15',
    timeOfBirth: '06:30',
    placeOfBirth: 'Delhi, Delhi, India',
    latitude: 28.6139,
    longitude: 77.2090,
    gender: 'male',
  });
  const [formCountry, setFormCountry] = useState<string>('India');
  const [formState, setFormState] = useState<string>('Delhi');
  const [formCity, setFormCity] = useState<string>('Delhi');


  const handleGenerateKundali = async (details: {
    name: string;
    dateOfBirth: string;
    timeOfBirth: string;
    placeOfBirth: string;
    latitude: number;
    longitude: number;
    gender: 'male' | 'female';
  }) => {
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('calculate-kundali', {
        body: {
          name: details.name,
          dateOfBirth: details.dateOfBirth,
          timeOfBirth: details.timeOfBirth,
          placeOfBirth: details.placeOfBirth,
          latitude: details.latitude,
          longitude: details.longitude
        }
      });

      if (error) {
        console.error('Kundali backend function error:', error);

        const kundali = generateMockKundali(
          details.name,
          details.dateOfBirth,
          details.timeOfBirth,
          details.placeOfBirth,
          details.latitude,
          details.longitude
        );
        setReport(kundali);

        toast.warning(
          t(
            'High-precision engine unavailable — using local calculation',
            'उच्च परिशुद्धता इंजन उपलब्ध नहीं — स्थानीय गणना उपयोग हो रही है'
          ),
          {
            description:
              (error as unknown as { message?: string })?.message ||
              t('Please try again in a moment.', 'कृपया थोड़ी देर बाद पुनः प्रयास करें।'),
          }
        );
      } else {
        const kundali: KundaliReport = {
          id: data.id,
          name: data.name,
          dateOfBirth: data.dateOfBirth,
          timeOfBirth: data.timeOfBirth,
          placeOfBirth: data.placeOfBirth,
          latitude: data.latitude,
          longitude: data.longitude,
          timezone: data.timezone,
          ascendant: data.ascendant,
          planets: data.planets,
          houses: data.houses,
          panchang: data.panchang as Panchang,
          ayanamsha: data.ayanamsha,
          createdAt: data.createdAt
        };
        setReport(kundali);
        toast.success(t('Kundali generated with high precision!', 'उच्च परिशुद्धता के साथ कुंडली बनाई गई!'), {
          description: `${t('Ascendant', 'लग्न')}: ${kundali.ascendant.sign} at ${kundali.ascendant.degree.toFixed(2)}°`,
        });
      }

    } catch (err) {
      console.error('Error calling Kundali backend function:', err);

      const kundali = generateMockKundali(
        details.name,
        details.dateOfBirth,
        details.timeOfBirth,
        details.placeOfBirth,
        details.latitude,
        details.longitude
      );
      setReport(kundali);

      toast.warning(
        t(
          'High-precision engine unavailable — using local calculation',
          'उच्च परिशुद्धता इंजन उपलब्ध नहीं — स्थानीय गणना उपयोग हो रही है'
        ),
        {
          description:
            (err as unknown as { message?: string })?.message ||
            t('Please try again in a moment.', 'कृपया थोड़ी देर बाद पुनः प्रयास करें।'),
        }
      );
    }

    setIsLoading(false);
  };


  const handleSaveProfile = () => {
    if (!formDetails.name) {
      toast.error(t('Please enter a name for the profile', 'कृपया प्रोफ़ाइल के लिए एक नाम दर्ज करें'));
      return;
    }
    const saved = profileService.saveProfile(formDetails.name, formDetails as BirthDetailsType);
    if (saved) {
      toast.success(t(`Profile for ${formDetails.name} saved successfully!`, `${formDetails.name} की प्रोफ़ाइल सफलतापूर्वक सहेजी गई!`));
    }
  };

  const handleBack = () => {
    setReport(null);
    setShowDailyHoroscope(false);
    setSelectedProfileDetails(undefined);
  };

  const handleLogout = () => {
    setReport(null);
    setShowDailyHoroscope(false);
    setSelectedProfileDetails(undefined);
    // Reset form details
    setFormDetails({
      name: '',
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: '',
      latitude: 0,
      longitude: 0,
      gender: 'male',
    });
    setFormCountry('');
    setFormState('');
    setFormCity('');
    toast.info(t('Logged out successfully', 'सफलतापूर्वक लॉग आउट किया गया'));
    navigate('/');
  };

  const handleSelectProfile = (profile: UserProfile) => {
    setFormDetails(profile.details);
    // Try to parse the place name to set selectors
    const parts = profile.details.placeOfBirth.split(', ');
    if (parts.length >= 3) {
      setFormCity(parts[0]);
      setFormState(parts[1]);
      setFormCountry(parts[2]);
    }
    setIsProfileSheetOpen(false);
    toast.success(t(`Loaded profile: ${profile.name}`, `प्रोफ़ाइल लोड की गई: ${profile.name}`));
  };

  const handleDailyHoroscope = async (details: {
    name: string;
    dateOfBirth: string;
    timeOfBirth: string;
    placeOfBirth: string;
    latitude: number;
    longitude: number;
    gender: 'male' | 'female';
  }) => {
    setIsDailyLoading(true);

    // Use today's date with user's birth time/place for daily horoscope
    const todayStr = new Date().toISOString().split('T')[0];

    try {
      const { data, error } = await supabase.functions.invoke('calculate-kundali', {
        body: {
          name: details.name,
          dateOfBirth: details.dateOfBirth,
          timeOfBirth: details.timeOfBirth,
          placeOfBirth: details.placeOfBirth,
          latitude: details.latitude,
          longitude: details.longitude
        }
      });

      if (error) {
        const kundali = generateMockKundali(
          details.name, details.dateOfBirth, details.timeOfBirth,
          details.placeOfBirth, details.latitude, details.longitude
        );
        setReport(kundali);
      } else {
        const kundali: KundaliReport = {
          id: data.id, name: data.name, dateOfBirth: data.dateOfBirth,
          timeOfBirth: data.timeOfBirth, placeOfBirth: data.placeOfBirth,
          latitude: data.latitude, longitude: data.longitude, timezone: data.timezone,
          ascendant: data.ascendant, planets: data.planets, houses: data.houses,
          panchang: data.panchang as Panchang, ayanamsha: data.ayanamsha, createdAt: data.createdAt
        };
        setReport(kundali);
      }
      setShowDailyHoroscope(true);
    } catch (err) {
      const kundali = generateMockKundali(
        details.name, details.dateOfBirth, details.timeOfBirth,
        details.placeOfBirth, details.latitude, details.longitude
      );
      setReport(kundali);
      setShowDailyHoroscope(true);
    }

    setIsDailyLoading(false);
  };

  useEffect(() => {
    if (location.state && location.state.autoGenerateDaily && location.state.birthDetails) {
      const details = location.state.birthDetails;
      let lat = details.latitude || 0;
      let lng = details.longitude || 0;
      if (lat === 0 && lng === 0 && details.city) {
        const coords = getCityCoordinates(details.city);
        if (coords) {
          lat = coords.lat;
          lng = coords.lng;
        } else {
          lat = 20.5937;
          lng = 78.9629;
        }
      }

      const updatedDetails = {
        name: details.name,
        dateOfBirth: details.dateOfBirth,
        timeOfBirth: details.timeOfBirth,
        placeOfBirth: details.placeOfBirth,
        latitude: lat,
        longitude: lng,
        gender: details.gender || 'male',
      };

      setFormDetails(updatedDetails);
      if (details.city) setFormCity(details.city);
      if (details.state) setFormState(details.state);
      if (details.country) setFormCountry(details.country);

      handleDailyHoroscope(updatedDetails);

      // Clear the state so it doesn't trigger again on reload/back
      navigate('/dashboard', { replace: true, state: {} });
    }
  }, [location.state]);



  const handleShare = async () => {
    if (!report) return;

    const shareData = {
      title: `${report.name}'s Kundali`,
      text: `Vedic Birth Chart for ${report.name}\nBorn: ${report.dateOfBirth} at ${report.timeOfBirth}\nPlace: ${report.placeOfBirth}\nAscendant: ${report.ascendant.sign} at ${report.ascendant.degree.toFixed(2)}°`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast.success(t('Shared successfully!', 'सफलतापूर्वक साझा किया गया!'));
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    if (!report) return;
    const text = `${report.name}'s Kundali - Born: ${report.dateOfBirth} at ${report.timeOfBirth}, ${report.placeOfBirth}. Ascendant: ${report.ascendant.sign} at ${report.ascendant.degree.toFixed(2)}°`;
    navigator.clipboard.writeText(text);
    toast.success(t('Copied to clipboard!', 'क्लिपबोर्ड पर कॉपी किया गया!'));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950 print:bg-white">
      <StarField count={100} />

      <div className={cn(
        "relative z-10 w-full transition-all duration-300 ease-in-out",
        isDesktopView ? "max-w-6xl px-4 sm:px-8 py-10 sm:py-16" : "max-w-md px-4 py-8"
      )}>
        <div className={cn(
          "glass-card flex flex-col rounded-3xl border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 relative overflow-hidden transition-all duration-300",
          isDesktopView ? "p-8 sm:p-12 space-y-10 rounded-[2.5rem]" : "p-4"
        )}>

          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-80" />

          {/* Header Group */}
          <div className="relative z-10 flex flex-col">
            <div className={cn("w-full transition-all", isDesktopView ? "py-6" : "py-3")}>
              <h2 className={cn(
                "text-blue-700 text-center font-serif font-bold tracking-wider drop-shadow-md px-2 transition-all",
                isDesktopView ? "text-3xl sm:text-4xl md:text-5xl" : "text-lg sm:text-xl md:text-2xl"
              )}>
                BHRIGU NANDI ASTROLOGY
              </h2>
            </div>

            {/* Navigation links */}
            <div className={cn(
              "bg-[#4272e8] w-full flex items-center border-b-[3px] border-white/90 shadow-lg overflow-x-auto no-scrollbar transition-all",
              isDesktopView ? "py-4 px-8 justify-center" : "py-2.5 px-3 sm:px-5 space-x-2 sm:justify-between"
            )}>
              <div className={cn(
                "flex text-white font-bold tracking-wide whitespace-nowrap",
                isDesktopView ? "gap-10 sm:gap-14 text-base sm:text-lg" : "gap-4 sm:gap-6 text-[11px] sm:text-[13px]"
              )}>
                <button
                  onClick={() => navigate('/')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Home className={cn(isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5")} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => navigate('/about')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Info className={cn(isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5")} />
                  <span>About</span>
                </button>
                <button
                  onClick={() => navigate('/vision')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Eye className={cn(isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5")} />
                  <span>Vision</span>
                </button>
                <button
                  onClick={() => navigate('/services')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Sparkles className={cn(isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5")} />
                  <span>Astro Services</span>
                </button>
              </div>
            </div>

            {/* Language, View Mode and Contact Toggles Row */}
            <div className={cn(
              "w-full flex flex-wrap items-center justify-center transition-all",
              isDesktopView ? "py-5 px-6 gap-4" : "py-3 px-3 sm:px-5 gap-2.5 sm:gap-3"
            )}>
              {/* Toggle button on the top of the screen placed before languages dropdown menu */}
              <ViewModeToggle />

              <LanguageToggle 
                className="flex-shrink-0"
                triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3.5 py-2 rounded-xl flex items-center gap-2 text-blue-700 text-xs sm:text-sm font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
              />
              <button 
                onClick={() => navigate('/contact')}
                type="button" 
                className="flex-shrink-0 bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3.5 py-2 rounded-xl flex items-center gap-2 text-blue-700 text-xs sm:text-sm font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          <div className="w-full">
            {/* Main Content Area */}
            <main className="relative z-0 w-full px-0">
              {!report ? (
                <div className="w-full mt-6">
                  <div className="mb-6 px-2">
                    <h1 className={cn(
                      "font-display font-bold text-blue-700 tracking-tight text-center drop-shadow-sm uppercase transition-all",
                      isDesktopView ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
                    )}>
                      {t('Generate Your Kundali & Know Your Daily Horoscope', 'अपनी कुंडली बनाएं और अपना दैनिक राशिफल जानें')}
                    </h1>
                  </div>

                  <div className={cn(
                    "flex bg-white/40 backdrop-blur-md p-3 rounded-2xl border border-blue-200/50 shadow-lg mb-8",
                    isDesktopView 
                      ? "flex-row items-center justify-center gap-4 max-w-xl mx-auto" 
                      : "flex-col gap-2 mx-0"
                  )}>
                    <div className="flex items-center justify-center gap-2 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLogout}
                        className="flex-shrink-0 h-10 px-4 flex items-center justify-center gap-2 border-red-200/30 text-red-600 hover:bg-red-50 bg-white/50 backdrop-blur-sm transition-all"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span className="font-medium whitespace-nowrap">{t('Back to Home', 'होम पर वापस')}</span>
                      </Button>

                      <Sheet open={isProfileSheetOpen} onOpenChange={setIsProfileSheetOpen}>
                        <SheetTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 flex items-center justify-center gap-2 border-blue-400/30 hover:bg-blue-50 bg-white/50 backdrop-blur-sm h-10 px-4"
                          >
                            <Users className="w-4 h-4 text-blue-600" />
                            <span className="font-medium">{t('Profiles', 'प्रोफाइल')}</span>
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[90%] sm:w-[450px] bg-background/95 backdrop-blur-xl border-border/50">
                          <SheetHeader className="mb-6">
                            <SheetTitle className="text-2xl font-display text-primary flex items-center gap-2">
                              <Users className="w-6 h-6" />
                              {t('Saved Profiles', 'सहेजी गई प्रोफ़ाइल')}
                            </SheetTitle>
                            <SheetDescription>
                              {t('View and select your saved birth details alphabetically', 'अपने सहेजे गए जन्म विवरण को वर्णानुक्रम में देखें और चुनें')}
                            </SheetDescription>
                          </SheetHeader>
                          <ProfileList onSelectProfile={handleSelectProfile} />
                        </SheetContent>
                      </Sheet>
                    </div>

                    {!isDesktopView && (
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex-1 h-10 px-2 flex items-center border border-blue-400/20 rounded-md bg-white/50 backdrop-blur-sm hover:bg-blue-50 transition-colors">
                          <LanguageToggle />
                        </div>
                      </div>
                    )}
                  </div>

                  {isDesktopView ? (
                    /* Desktop Layout: Vertically Stacked (Form & Heritage) in an Above-and-Below Pattern */
                    <div className="flex flex-col items-center gap-10 my-8 w-full max-w-3xl mx-auto">
                      {/* Kundali Form Card */}
                      <div className="glass-card p-8 sm:p-14 rounded-[2.5rem] border border-blue-200/60 shadow-2xl w-full flex flex-col justify-center">
                        <BirthDetailsForm
                          onSubmit={handleGenerateKundali}
                          onDailyHoroscope={handleDailyHoroscope}
                          isLoading={isLoading}
                          isDailyLoading={isDailyLoading}
                          initialDetails={formDetails}
                          onDetailsChange={setFormDetails}
                          country={formCountry}
                          onCountryChange={setFormCountry}
                          state={formState}
                          onStateChange={setFormState}
                          city={formCity}
                          onCityChange={setFormCity}
                        />
                      </div>

                      {/* Heritage & Vedic Insights Card (Directly Below, Vertically Aligned) */}
                      <div className="bg-white/70 backdrop-blur-md p-8 sm:p-12 rounded-[2.5rem] border border-blue-200/60 shadow-xl text-center flex flex-col items-center w-full">
                        <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-blue-300/40 bg-white/50 mb-6 group">
                          <img
                            src="/maharishi_bhrigu.png"
                            alt="Maharishi Bhrigu"
                            className="w-[260px] sm:w-[320px] aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-blue-700 mt-2">
                          Maharishi Bhrigu Heritage
                        </h3>
                        <p className="text-base sm:text-lg text-slate-600 mt-2 font-medium">
                          {t('Sacred Bhrigu Nandi Nadi (BNN) Calculations', 'पवित्र भृगु नंदी नाड़ी गणना')}
                        </p>

                        <div className="w-full mt-8 space-y-4 text-left">
                          {[
                            { title: t('Parashari & Lahiri Ayanamsha', 'पाराशरी और लहिरी अयनांश'), desc: t('High-precision astronomical planetary degrees', 'सटीक खगोलीय ग्रह अंश') },
                            { title: t('Lagna & Chalit (D1) Charts', 'लग्न और चलित (D1) चार्ट'), desc: t('Dual chart view for true planetary house occupation', 'सटीक भाव स्थिति के लिए दोहरा चार्ट दृश्य') },
                            { title: t('BNN Daily Transit Insights', 'बीएनएन दैनिक गोचर अंतर्दृष्टि'), desc: t('Personalized daily horoscope and astro remedies', 'व्यक्तिगत दैनिक राशिफल और वैदिक उपाय') }
                          ].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-5 bg-white/90 p-5 sm:p-6 rounded-2xl border border-blue-100 shadow-sm">
                              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-base font-bold text-blue-900">{feature.title}</p>
                                <p className="text-sm text-slate-600 mt-1">{feature.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 p-6 rounded-2xl bg-blue-50/90 border border-blue-200/80 text-left w-full">
                          <p className="text-sm sm:text-base text-blue-800 font-bold flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                            {t('Pro Tip for Accuracy:', 'सटीकता के लिए सुझाव:')}
                          </p>
                          <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                            {t('Accurate birth time ensures precise Lagna (Ascendant) & Bhava Chalit chart calculation.', 'सटीक जन्म समय से सही लग्न एवं भाव चलित चार्ट प्राप्त होता है।')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Mobile Form Layout */
                    <div className="glass-card p-4 rounded-2xl border border-blue-100/50 shadow-inner w-full">
                      <BirthDetailsForm
                        onSubmit={handleGenerateKundali}
                        onDailyHoroscope={handleDailyHoroscope}
                        isLoading={isLoading}
                        isDailyLoading={isDailyLoading}
                        initialDetails={formDetails}
                        onDetailsChange={setFormDetails}
                        country={formCountry}
                        onCountryChange={setFormCountry}
                        state={formState}
                        onStateChange={setFormState}
                        city={formCity}
                        onCityChange={setFormCity}
                      />
                    </div>
                  )}

                  <p className="text-center text-[10px] text-slate-500 mt-6 max-w-sm mx-auto leading-tight italic">
                    {t('Uses Parashari system with Lahiri (Chitra Paksha) Ayanamsha for accurate planetary positions', 'सटीक ग्रह स्थिति के लिए लहिरी (चित्रा पक्ष) अयनांश के साथ पाराशरी प्रणाली का उपयोग करता है')}
                  </p>
                </div>
              ) : showDailyHoroscope ? (
                <div className="mt-6 w-full">
                  <BNNDailyHoroscope report={report} onBack={handleBack} />
                </div>
              ) : (
                <div ref={reportRef} className="mt-6 space-y-8 animate-in fade-in duration-500 w-full">
                  <div className="flex flex-col items-center justify-center text-center w-full gap-6 mb-4">
                    <div className="space-y-2">
                      <h2 className="font-display text-2xl text-blue-700 uppercase tracking-wider">
                        {report.name} {t("'s Kundali", 'की कुंडली')}
                      </h2>
                      <div className="flex flex-col items-center text-slate-500 text-sm space-y-1">
                        <p className="font-medium">
                          {new Date(report.dateOfBirth).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })} at {report.timeOfBirth}
                        </p>
                        <p className="flex items-center gap-1 justify-center">
                          <MapPin className="w-3 h-3 text-blue-600" /> {report.placeOfBirth}
                        </p>
                      </div>
                    </div>

                    <div className={cn(
                      "flex gap-3 bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-blue-200/50 shadow-lg print:hidden w-full",
                      isDesktopView ? "flex-row items-center justify-center max-w-2xl mx-auto flex-wrap" : "flex-col"
                    )}>
                      <div className="flex items-center justify-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleBack}
                          className="flex-1 flex items-center justify-center gap-2 border-blue-400/30 hover:bg-blue-50 bg-white/50 backdrop-blur-sm h-11 px-4"
                        >
                          <ArrowLeft className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-[13px]">{t('Back to Birth Details Dashboard', 'जन्म विवरण डैशबोर्ड पर वापस जाएं')}</span>
                        </Button>

                        <Sheet open={isProfileSheetOpen} onOpenChange={setIsProfileSheetOpen}>
                          <SheetTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-shrink-0 flex items-center justify-center gap-2 border-blue-400/30 hover:bg-blue-50 bg-white/50 backdrop-blur-sm h-11 px-4"
                            >
                              <Users className="w-4 h-4 text-blue-600" />
                              <span className="font-medium">{t('Profiles', 'प्रोफाइल')}</span>
                            </Button>
                          </SheetTrigger>
                          <SheetContent side="right" className="w-[90%] sm:w-[450px] bg-background/95 backdrop-blur-xl border-border/50">
                            <SheetHeader className="mb-6">
                              <SheetTitle className="text-2xl font-display text-primary flex items-center gap-2">
                                <Users className="w-6 h-6" />
                                {t('Saved Profiles', 'सहेजी गई प्रोफ़ाइल')}
                              </SheetTitle>
                              <SheetDescription>
                                {t('View and select your saved birth details alphabetically', 'अपने सहेजे गए जन्म विवरण को वर्णानुक्रम में देखें और चुनें')}
                              </SheetDescription>
                            </SheetHeader>
                            <ProfileList onSelectProfile={handleSelectProfile} />
                          </SheetContent>
                        </Sheet>
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleLogout}
                          className="flex-1 h-11 px-4 flex items-center justify-center gap-2 border-red-200/30 text-red-600 hover:bg-red-50 bg-white/50 backdrop-blur-sm transition-all"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span className="font-medium">{t('Back to Home', 'होम पर वापस')}</span>
                        </Button>

                        <div className="flex-shrink-0 h-11 px-2 flex items-center border border-blue-400/20 rounded-md bg-white/50 backdrop-blur-sm hover:bg-blue-50 transition-colors">
                          <LanguageToggle />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="birth-chart-summary" className="glass-card p-3 sm:p-6 rounded-xl border border-blue-200/50 scroll-mt-20 w-full">
                    <div className="flex items-center gap-2 mb-6">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <h2 className="font-display text-lg text-blue-800">
                          {t('Kundali Summary', 'कुण्डली सारांश')}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div ref={birthChartSummaryRef} className="overflow-x-auto">
                        <BirthChartSummary report={report} />
                      </div>

                      {report.panchang && (
                        <div ref={panchangRef}>
                          <PanchangDisplay panchang={report.panchang} />
                        </div>
                      )}

                      <div className={cn(
                        "w-full",
                        isDesktopView ? "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" : "flex flex-col gap-8 items-center"
                      )}>
                        <div ref={lagnaChartRef} className="w-full">
                          <NorthIndianChart report={report} />
                        </div>
                        <div ref={chalitChartRef} className="w-full">
                          <ChalitChart report={report} />
                        </div>
                      </div>

                      <div className="w-full overflow-x-auto" ref={planetTableRef}>
                        <PlanetTable planets={report.planets} report={report} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>

          <div className="mt-20 w-full" aria-hidden="true" />
        </div>
      </div>

      <style>{`
        @media print {
          body { background: white !important; }
          .glass-card { background: white !important; border: 1px solid #ddd !important; }
          .print\\:hidden { display: none !important; }
          .hidden.print\\:block { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default Index;

