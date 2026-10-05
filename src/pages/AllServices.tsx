import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Globe, Eye, ArrowLeft, ArrowRight, Sparkles, Heart, Briefcase, Info, Home, PhoneCall, Check, Trash2, Calendar, Clock, MapPin, User, Mail, Phone, CreditCard, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { CurrencyToggle } from '@/components/CurrencyToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { NavigationLinks } from '@/components/NavigationLinks';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ADMIN_CONFIG } from '@/config/adminConfig';
import { supabase } from '@/integrations/supabase/client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  getAllCountries,
  getStatesForCountry,
  getCitiesForState,
  getCityCoordinates
} from '@/lib/worldLocations';

// Constants for services
const SERVICES = [
  {
    id: 'birth-chart',
    title: 'BIRTH CHART ANALYSIS',
    price: 1,
    description: 'Comprehensive Vedic birth chart (Kundli) analysis focusing on your planetary placements and their effects.',
    icon: <Globe className="w-5 h-5" />,
    color: '#3B82F6'
  },
  {
    id: 'daily-predictions',
    title: 'YOUR DAILY PREDICTIONS',
    price: 1,
    description: 'Get your personalized daily horoscope and astrological predictions based on current planetary transits.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#6366F1'
  },
  {
    id: 'bnn-analysis',
    title: 'BIRTH CHART BNN ANALYSIS',
    price: 25.20,
    description: 'In-depth Bhrigu Nandi Nadi analysis for unique insights into your destiny and soul purpose.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#A855F7'
  },
  {
    id: 'career',
    title: 'CAREER PREDICTIONS',
    price: 18.00,
    description: 'Find the right profession, timing for job changes, and strategies for professional success.',
    icon: <Briefcase className="w-5 h-5" />,
    color: '#22C55E'
  },
  {
    id: 'marriage',
    title: 'MARRIAGE PREDICTIONS',
    price: 18.00,
    description: 'Understand your relationship patterns, timing for marriage, and compatibility factors.',
    icon: <Heart className="w-5 h-5" />,
    color: '#EC4899'
  },
  {
    id: 'education',
    title: 'EDUCATION PREDICTIONS',
    price: 13.20,
    description: 'Guidance on academic choices, higher studies, and success in competitive exams.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#EAB308'
  },
  {
    id: 'wealth',
    title: 'WEALTH & PROSPERITY',
    price: 25.20,
    description: 'Analyze your financial potential, investment luck, and strategies for wealth creation.',
    icon: <Briefcase className="w-5 h-5" />,
    color: '#3B82F6'
  },
  {
    id: 'dasha',
    title: 'DASHA PREDICTIONS',
    price: 18.00,
    description: 'Detailed analysis of your Vimshottari Dasha periods and their impact on your life events.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#6366F1'
  },
  {
    id: 'progression',
    title: 'PROGRESSION PREDICTIONS',
    price: 25.20,
    description: 'Modern and ancient progression techniques for precise timing of future events.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#A855F7'
  },
  {
    id: 'transit',
    title: 'GOCHAR (TRANSIT) PREDICTIONS',
    price: 13.20,
    description: 'Current planetary transits and their effects on your natal chart for timely guidance.',
    icon: <Globe className="w-5 h-5" />,
    color: '#F97316'
  },
  {
    id: 'bnn-combinations',
    title: 'BNN COMBINATIONS',
    price: 21.60,
    description: 'Discover unique BNN planetary combinations that shape your personality and destiny.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#8B5CF6'
  },
  {
    id: 'bnn-dhana-yogs',
    title: 'BNN DHANA YOGS',
    price: 18.00,
    description: 'Identify wealth-producing yogas in your chart for financial growth and abundance.',
    icon: <Briefcase className="w-5 h-5" />,
    color: '#10B981'
  },
  {
    id: 'bnn-medical',
    title: 'BNN MEDICAL ASTROLOGY',
    price: 18.00,
    description: 'Health insights based on planetary positions to help prevent and manage health issues.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#EF4444'
  },
  {
    id: 'bnn-foreign',
    title: 'BNN FOREIGN TRAVEL',
    price: 13.20,
    description: 'Predictions about foreign travel, settlement abroad, and overseas opportunities.',
    icon: <Globe className="w-5 h-5" />,
    color: '#0EA5E9'
  },
  {
    id: 'bnn-career-analysis',
    title: 'BNN CAREER ANALYSIS',
    price: 18.00,
    description: 'Deep BNN-based career analysis for finding the right profession and growth timing.',
    icon: <Briefcase className="w-5 h-5" />,
    color: '#64748B'
  },
  {
    id: 'bnn-business',
    title: 'BNN BUSINESS ANALYSIS',
    price: 21.60,
    description: 'Business potential, partnerships, and timing for entrepreneurial ventures.',
    icon: <Briefcase className="w-5 h-5" />,
    color: '#334155'
  },
  {
    id: 'bnn-family',
    title: 'BNN FAMILY ANALYSIS',
    price: 13.20,
    description: 'Insights into family dynamics, harmony, and relationships with family members.',
    icon: <Heart className="w-5 h-5" />,
    color: '#F43F5E'
  },
  {
    id: 'bnn-education-analysis',
    title: 'BNN EDUCATION ANALYSIS',
    price: 13.20,
    description: 'Educational path, best fields of study, and academic success predictions.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#84CC16'
  },
  {
    id: 'bnn-marriage-analysis',
    title: 'BNN MARRIAGE ANALYSIS',
    price: 18.00,
    description: 'Marriage timing, spouse characteristics, and marital harmony through BNN methods.',
    icon: <Heart className="w-5 h-5" />,
    color: '#D946EF'
  },
  {
    id: 'bnn-love',
    title: 'BNN LOVE MARRIAGE & DIVORCE',
    price: 18.00,
    description: 'Insights into love relationships, chances of love marriage, and relationship stability.',
    icon: <Heart className="w-5 h-5" />,
    color: '#EC4899'
  },
  {
    id: 'bnn-santan',
    title: 'BNN SANTAN ANALYSIS',
    price: 13.20,
    description: 'Predictions about children, their well-being, and parent-child relationships.',
    icon: <Heart className="w-5 h-5" />,
    color: '#06B6D4'
  },
  {
    id: 'bnn-property',
    title: 'BNN PROPERTY & ASSET YOG',
    price: 18.00,
    description: 'Property acquisition timing, real estate gains, and asset accumulation insights.',
    icon: <Home className="w-5 h-5" />,
    color: '#71717A'
  },
  {
    id: 'bnn-dharma',
    title: 'BNN DHARMA-KARMA YOG',
    price: 21.60,
    description: 'Understanding your life purpose, dharmic path, and karmic patterns.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#A855F7'
  },
  {
    id: 'bnn-gains',
    title: 'BNN GAINS & MARKET YOGS',
    price: 18.00,
    description: 'Stock market, speculative gains, and financial market timing predictions.',
    icon: <Briefcase className="w-5 h-5" />,
    color: '#22C55E'
  },
  {
    id: 'bnn-legal',
    title: 'BNN LEGAL ISSUES YOG',
    price: 13.20,
    description: 'Legal matters, court cases, and their outcomes based on planetary analysis.',
    icon: <Info className="w-5 h-5" />,
    color: '#EF4444'
  },
  {
    id: 'bnn-retrograde',
    title: 'BNN RETROGRADE ANALYSIS',
    price: 18.00,
    description: 'Impact of retrograde planets on your life and remedies for their negative effects.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#3B82F6'
  },
  {
    id: 'bnn-personality',
    title: 'BNN PERSONALITY TRAITS',
    price: 13.20,
    description: 'Discover your innate personality traits and behavioral patterns through BNN.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#6366F1'
  },
  {
    id: 'bnn-creative',
    title: 'BNN CREATIVE TALENT',
    price: 13.20,
    description: 'Identify hidden creative talents and artistic abilities in your chart.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#EC4899'
  },
  {
    id: 'bnn-kundali-milan',
    title: 'BNN KUNDALI MILAN',
    price: 25.20,
    description: 'Comprehensive compatibility matching for marriage using BNN methodology.',
    icon: <Heart className="w-5 h-5" />,
    color: '#D946EF'
  },
  {
    id: 'bnn-remedies',
    title: 'BNN REMEDIES',
    price: 18.00,
    description: 'Personalized remedies including mantras, gemstones, and rituals for planetary appeasement.',
    icon: <Sparkles className="w-5 h-5" />,
    color: '#F59E0B'
  }
];

const COUNTRY_CODES = [
  { code: '+91', country: 'IN' },
  { code: '+1', country: 'US/CA' },
  { code: '+44', country: 'UK' },
  { code: '+61', country: 'AU' },
  { code: '+971', country: 'AE' },
  { code: '+65', country: 'SG' },
  { code: '+966', country: 'SA' },
  { code: '+49', country: 'DE' },
  { code: '+33', country: 'FR' },
  { code: '+81', country: 'JP' },
  { code: '+7', country: 'RU' },
  { code: '+86', country: 'CN' },
  { code: '+27', country: 'ZA' },
  { code: '+20', country: 'EG' },
  { code: '+90', country: 'TR' },
  { code: '+92', country: 'PK' },
  { code: '+880', country: 'BD' },
  { code: '+977', country: 'NP' },
  { code: '+94', country: 'LK' },
];

const getCountryPhoneCode = (countryName: string): string => {
  const codes: Record<string, string> = {
    'India': '+91',
    'United States': '+1',
    'United Kingdom': '+44',
    'Canada': '+1',
    'Australia': '+61',
    'Germany': '+49',
    'France': '+33',
    'Japan': '+81',
    'China': '+86',
    'United Arab Emirates': '+971',
    'Saudi Arabia': '+966',
    'Singapore': '+65',
    'South Korea': '+82',
    'Thailand': '+66',
    'Malaysia': '+60',
    'Indonesia': '+62',
    'Philippines': '+63',
    'Vietnam': '+84',
    'Pakistan': '+92',
    'Bangladesh': '+880',
    'Sri Lanka': '+94',
    'Nepal': '+977',
    'Russia': '+7',
    'Brazil': '+55',
    'Mexico': '+52',
    'South Africa': '+27',
    'Egypt': '+20',
    'Turkey': '+90',
    'Italy': '+39',
    'Spain': '+34',
    'Netherlands': '+31',
    'Switzerland': '+41',
    'New Zealand': '+64',
    'Ireland': '+353',
    'Portugal': '+351',
    'Greece': '+30',
    'Poland': '+48',
    'Sweden': '+46',
    'Norway': '+47',
    'Denmark': '+45',
    'Finland': '+358',
    'Austria': '+43',
    'Belgium': '+32',
    'Czech Republic': '+420',
    'Hungary': '+36',
    'Argentina': '+54',
    'Chile': '+56',
    'Colombia': '+57',
    'Peru': '+51',
    'Kenya': '+254',
    'Nigeria': '+234',
    'Morocco': '+212',
    'Qatar': '+974',
    'Kuwait': '+965',
    'Bahrain': '+973',
    'Oman': '+968',
    'Israel': '+972'
  };
  return codes[countryName] || '+1';
};

const AllServices = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();
  const { getCurrentCurrency } = useCurrency();
  const currencyInfo = getCurrentCurrency();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    tob: '',
    pob: 'Delhi, Delhi, India'
  });
  const [phoneDigits, setPhoneDigits] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedState, setSelectedState] = useState('Delhi');
  const [selectedCity, setSelectedCity] = useState('Delhi');

  const countries = useMemo(() => getAllCountries(), []);

  const states = useMemo(() => {
    if (!selectedCountry) return [];
    return getStatesForCountry(selectedCountry);
  }, [selectedCountry]);

  const cities = useMemo(() => {
    if (!selectedCountry || !selectedState) return [];
    return getCitiesForState(selectedCountry, selectedState);
  }, [selectedCountry, selectedState]);

  useEffect(() => {
    const code = getCountryPhoneCode(selectedCountry);
    setUserDetails(prev => ({
      ...prev,
      phone: phoneDigits ? `${code} ${phoneDigits}` : ''
    }));
  }, [selectedCountry, phoneDigits]);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedState('');
    setSelectedCity('');
    setUserDetails(prev => ({ ...prev, pob: '' }));
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity('');
    setUserDetails(prev => ({ ...prev, pob: '' }));
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const fullPlace = `${city}, ${selectedState}, ${selectedCountry}`;
    setUserDetails(prev => ({ ...prev, pob: fullPlace }));
  };


  const selectedServices = useMemo(() => 
    SERVICES.filter(s => selectedServiceIds.includes(s.id)),
    [selectedServiceIds]
  );

  const totalPrice = useMemo(() => 
    selectedServices.reduce((acc, curr) => acc + curr.price, 0),
    [selectedServices]
  );

  const toggleService = (id: string) => {
    setSelectedServiceIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const removeService = (id: string) => {
    setSelectedServiceIds(prev => prev.filter(i => i !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  // Render Stepper component
  const renderStepper = () => (
    <div className={cn(
      "flex items-center justify-center w-full px-2 mx-auto transition-all",
      isDesktopView ? "max-w-2xl mb-14 mt-6" : "mb-12 mt-4"
    )}>
      {[
        { step: 1, label: 'Select' },
        { step: 2, label: 'Details' },
        { step: 3, label: 'Pay' }
      ].map((item, index) => (
        <React.Fragment key={item.step}>
          <div className="flex flex-col items-center relative">
            <div className={cn(
              "rounded-full flex items-center justify-center font-bold transition-all duration-300",
              isDesktopView ? "w-12 h-12 text-base" : "w-8 h-8 text-sm",
              currentStep >= item.step ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-slate-200 text-slate-500"
            )}>
              {currentStep > item.step ? <Check className={isDesktopView ? "w-6 h-6" : "w-4 h-4"} /> : item.step}
            </div>
            <span className={cn(
              "absolute whitespace-nowrap font-bold uppercase tracking-wider",
              isDesktopView ? "-bottom-8 text-xs sm:text-sm" : "-bottom-6 text-[10px]",
              currentStep >= item.step ? "text-blue-600 font-extrabold" : "text-slate-400"
            )}>
              {t(item.label, item.label)}
            </span>
          </div>
          {index < 2 && (
            <div className={cn(
              "flex-1 mx-3 sm:mx-6 transition-all duration-300 rounded-full",
              isDesktopView ? "h-[3px]" : "h-[2px]",
              currentStep > item.step ? "bg-blue-600" : "bg-slate-200"
            )} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const validateDetailsForm = (): boolean => {
    if (!userDetails.fullName || !userDetails.fullName.trim()) {
      toast.error(t('Please enter your full name', 'कृपया अपना पूरा नाम दर्ज करें'));
      return false;
    }

    if (!userDetails.email || !userDetails.email.trim()) {
      toast.error(t('Please enter your email address', 'कृपया अपना ईमेल पता दर्ज करें'));
      return false;
    }

    if (!phoneDigits || phoneDigits.trim() === '') {
      toast.error(t('Please enter your phone number', 'कृपया अपना फ़ोन नंबर दर्ज करें'));
      return false;
    }

    if (phoneDigits.length < 7 || phoneDigits.length > 10) {
      toast.error(t('Phone number must be between 7 and 10 digits', 'फ़ोन नंबर 7 से 10 अंकों के बीच होना चाहिए'));
      return false;
    }

    if (!userDetails.dob) {
      toast.error(t('Please enter your birth date', 'कृपया अपनी जन्म तिथि दर्ज करें'));
      return false;
    }

    const dateParts = userDetails.dob.split('-');
    if (dateParts.length === 3) {
      const yearNum = parseInt(dateParts[0], 10);
      const monthNum = parseInt(dateParts[1], 10);
      const dayNum = parseInt(dateParts[2], 10);

      if (dateParts[0].length !== 4) {
        toast.error(t('Year must be exactly 4 digits', 'वर्ष ठीक 4 अंकों का होना चाहिए'));
        return false;
      }

      if (dayNum > 31) {
        toast.error(t('Day cannot exceed 31', 'दिन 31 से अधिक नहीं हो सकता'));
        return false;
      }

      if (monthNum > 12) {
        toast.error(t('Month cannot exceed 12', 'महीना 12 से अधिक नहीं हो सकता'));
        return false;
      }

      const testDate = new Date(yearNum, monthNum - 1, dayNum);
      if (
        testDate.getFullYear() !== yearNum ||
        testDate.getMonth() !== monthNum - 1 ||
        testDate.getDate() !== dayNum
      ) {
        toast.error(t('Please enter a valid calendar date', 'कृपया एक वैध कैलेंडर तिथि दर्ज करें'));
        return false;
      }

      const now = new Date();
      if (testDate > now) {
        toast.error(t('Birth date cannot be in the future', 'जन्म तिथि भविष्य में नहीं हो सकती'));
        return false;
      }
    } else {
      toast.error(t('Please enter a valid birth date', 'कृपया एक वैध जन्म तिथि दर्ज करें'));
      return false;
    }

    if (!userDetails.tob) {
      toast.error(t('Please enter your time of birth', 'कृपया अपने जन्म का समय दर्ज करें'));
      return false;
    }

    if (!selectedCountry) {
      toast.error(t('Please select your country', 'कृपया अपना देश चुनें'));
      return false;
    }

    if (!selectedState) {
      toast.error(t('Please select your state', 'कृपया अपना राज्य चुनें'));
      return false;
    }

    if (!selectedCity || !userDetails.pob) {
      toast.error(t('Please select your city of birth', 'कृपया अपने जन्म का शहर चुनें'));
      return false;
    }

    return true;
  };

  const handleBooking = async () => {
    if (!validateDetailsForm()) {
      setCurrentStep(2);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const bookingData = {
        services: selectedServices.map(s => s.title).join(', '),
        total: `${currencyInfo.symbol}${totalPrice.toFixed(2)}`,
        user: userDetails,
        timestamp: new Date().toLocaleString()
      };

      // 1. Save to Supabase (optional)
      const { error: dbError } = await (supabase as any)
        .from('bookings')
        .insert([
          {
            full_name: userDetails.fullName,
            email: userDetails.email,
            phone: userDetails.phone,
            birth_details: {
              dob: userDetails.dob,
              tob: userDetails.tob,
              pob: userDetails.pob
            },
            services: bookingData.services,
            total_amount: totalPrice,
            currency: currencyInfo.code
          }
        ]);

      if (dbError) console.warn('Database save failed:', dbError);

      // 2. Email Notification Logic
      const emailSubject = `New Astrology Booking: ${userDetails.fullName}`;
      const emailBody = `
NEW BOOKING DETAILS
-------------------
Client Name: ${userDetails.fullName}
Email: ${userDetails.email}
Phone: ${userDetails.phone}

BIRTH DETAILS:
Date: ${userDetails.dob}
Time: ${userDetails.tob}
Place: ${userDetails.pob}

SERVICES BOOKED:
${bookingData.services}

Total Amount: ${bookingData.total}
Time: ${bookingData.timestamp}
      `;

      // Note: To send a real email, integrate with a service like Resend or EmailJS here.
      // e.g. await fetch('/api/send-email', { method: 'POST', body: JSON.stringify({ to: ADMIN_CONFIG.RECEIVER_EMAIL, ... }) });

      toast.success(t('Booking submitted successfully!', 'बुकिंग सफलतापूर्वक सबमिट हो गई!'));
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(t('Submission failed. Please try again.', 'सबमिशन विफल रहा। कृपया पुनः प्रयास करें।'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center py-8 overflow-x-hidden bg-white">
      <div className={cn(
        "relative z-10 w-full transition-all duration-300 ease-in-out",
        isDesktopView ? "max-w-6xl px-4 sm:px-8 py-10 sm:py-16" : "max-w-md px-4 py-4"
      )}>
        <div className={cn(
          "glass-card flex flex-col rounded-none border border-blue-400 border-opacity-30 bg-white bg-opacity-95 backdrop-blur-xl shadow-2xl shadow-blue-500 shadow-opacity-20 overflow-hidden min-h-[700px] h-auto transition-all",
          isDesktopView ? "p-8 sm:p-14 space-y-10" : ""
        )}>
          
          {/* Header Block */}
          <div className={cn(
            "bg-[#4272e8] border-b-[3px] border-white shadow-md w-full relative z-20 transition-all",
            isDesktopView ? "py-5 sm:py-6 px-8" : "py-4 px-4"
          )}>
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate('/')}
                className={cn(
                  "flex items-center justify-center rounded-xl bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all shadow-sm cursor-pointer",
                  isDesktopView ? "p-3" : "p-2"
                )}
              >
                <Home className={isDesktopView ? "w-5 h-5" : "w-4 h-4"} />
              </button>
              
              <h1 className={cn(
                "text-white font-serif font-bold tracking-[0.15em] drop-shadow-md text-center flex-1 px-2 transition-all",
                isDesktopView ? "text-2xl sm:text-3xl md:text-4xl" : "text-[15px] sm:text-lg"
              )}>
                CONSULTATION BOOKING
              </h1>

              <div className={isDesktopView ? "w-10" : "w-8"} />
            </div>
          </div>

          {/* Subheader bar for consistency */}
          <NavigationLinks />

          {/* Toggle Row */}
          <div className={cn(
            "w-full flex flex-wrap items-center justify-center transition-all",
            isDesktopView ? "py-6 px-6 gap-4" : "py-3 px-3 sm:px-5 gap-3"
          )}>
            <ViewModeToggle />
            <LanguageToggle
              className="flex-shrink-0"
              triggerClassName={cn(
                "bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm rounded-xl flex items-center gap-2 text-blue-700 font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0",
                isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
              )}
            />
            <CurrencyToggle
              className="flex-shrink-0"
              triggerClassName={cn(
                "bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm rounded-xl flex items-center gap-2 text-blue-700 font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0",
                isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
              )}
            />
            <button 
              onClick={() => navigate('/contact')}
              type="button" 
              className={cn(
                "flex-shrink-0 bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm rounded-xl flex items-center gap-2 text-blue-700 font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0",
                isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
              )}
            >
              <PhoneCall className={isDesktopView ? "w-4 h-4" : "w-3.5 h-3.5"} />
              <span>Contact</span>
            </button>
          </div>

          {/* Stepper container */}
          <div className={cn(
            "w-full transition-all",
            isDesktopView ? "px-8 py-10" : "px-6 py-12"
          )}>
            {renderStepper()}
          </div>

          {/* Main Content Area */}
          <div className={cn(
            "flex-1 flex flex-col transition-all",
            isDesktopView ? "p-8 pt-0" : "p-6 pt-0"
          )}>
            {!isSuccess ? (
              <>
                {currentStep === 1 && (
                  <div className="flex flex-col gap-6 flex-1">
                    <div className="flex justify-center -mt-4 mb-4">
                      <button
                        onClick={() => navigate('/services')}
                        className={cn(
                          "bg-orange-50 text-orange-700 border border-orange-200 rounded-xl flex items-center gap-2 font-bold transition-all hover:bg-orange-100 shadow-sm cursor-pointer",
                          isDesktopView ? "h-14 px-8 text-sm" : "py-2 px-6 text-[11px]"
                        )}
                      >
                        <ArrowLeft className={isDesktopView ? "w-4 h-4" : "w-3.5 h-3.5"} />
                        {t('Back to Services Page', 'सेवाओं के पेज पर वापस जाएं')}
                      </button>
                    </div>

                    {/* Services List */}
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className={cn(
                          "font-serif font-bold uppercase tracking-tight text-blue-700",
                          isDesktopView ? "text-3xl sm:text-4xl" : "text-xl text-slate-800"
                        )}>
                          {t('Select Services', 'सेवाएं चुनें')}
                        </h2>
                        <p className={cn(
                          "text-slate-600 font-medium",
                          isDesktopView ? "text-base sm:text-lg mt-3" : "text-xs mt-1"
                        )}>
                          {t('Pick one or more astrology services to book your authentic consultation.', 'परामर्श बुक करने के लिए एक या अधिक ज्योतिष सेवाएं चुनें।')}
                        </p>
                      </div>

                      <div className={cn(
                        "transition-all",
                        isDesktopView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-3"
                      )}>
                        {SERVICES.map((s) => (
                          <div 
                            key={s.id} 
                            onClick={() => toggleService(s.id)}
                            className={cn(
                              "cursor-pointer rounded-2xl border transition-all duration-300 group relative flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg",
                              isDesktopView ? "p-6 min-h-[160px]" : "p-4",
                              selectedServiceIds.includes(s.id) 
                                ? "bg-blue-50 border-blue-400 shadow-md ring-2 ring-blue-400 ring-opacity-20" 
                                : "bg-white border-slate-100 hover:border-blue-300"
                            )}
                          >
                            <div className="flex items-start gap-3.5">
                              <div className={cn(
                                "rounded-xl shrink-0 transition-transform group-hover:scale-110",
                                isDesktopView ? "p-3" : "p-2",
                                selectedServiceIds.includes(s.id) ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                              )}>
                                {s.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h3 className={cn(
                                    "font-bold text-slate-800 uppercase leading-snug",
                                    isDesktopView ? "text-sm sm:text-base" : "text-[13px] mt-1"
                                  )}>
                                    {t(s.title, s.title)}
                                  </h3>
                                  <div className={cn(
                                    "rounded-full border shrink-0 flex items-center justify-center transition-all ml-2",
                                    isDesktopView ? "w-5 h-5" : "w-4 h-4",
                                    selectedServiceIds.includes(s.id) ? "bg-blue-600 border-blue-600" : "border-slate-300"
                                  )}>
                                    {selectedServiceIds.includes(s.id) && <Check className={isDesktopView ? "w-3.5 h-3.5 text-white" : "w-3 h-3 text-white"} />}
                                  </div>
                                </div>
                                <p className={cn(
                                  "text-blue-600 font-black my-1.5",
                                  isDesktopView ? "text-sm sm:text-base" : "text-xs"
                                  )}>
                                  {s.price === 0 ? t('Free', 'निःशुल्क') : `${currencyInfo.symbol}${s.price.toFixed(2)}`}
                                </p>
                                <p className={cn(
                                  "text-slate-500 leading-relaxed",
                                  isDesktopView ? "text-xs sm:text-sm mt-2" : "text-[10px] leading-tight"
                                )}>
                                  {t(s.description, s.description)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className={cn(
                      "transition-all",
                      isDesktopView ? "max-w-2xl mx-auto mt-16 w-full" : "mt-auto pt-8"
                    )}>
                      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                        <div className={cn(
                          "bg-slate-50 border-b border-slate-100 flex items-center gap-3",
                          isDesktopView ? "p-5" : "p-4"
                        )}>
                          <Briefcase className={isDesktopView ? "w-5 h-5 text-blue-600" : "w-4 h-4 text-blue-600"} />
                          <h3 className={cn(
                            "font-bold text-slate-800 uppercase",
                            isDesktopView ? "text-base" : "text-sm"
                          )}>{t('Order Summary', 'आदेश सारांश')}</h3>
                        </div>

                        <div className={cn(
                          "space-y-3",
                          isDesktopView ? "p-6 min-h-[120px]" : "p-4 min-h-[100px]"
                        )}>
                          {selectedServices.length === 0 ? (
                            <p className="text-slate-400 text-sm italic text-center py-4">{t('No services selected.', 'कोई सेवा नहीं चुनी गई।')}</p>
                          ) : (
                            selectedServices.map(s => (
                              <div key={s.id} className={cn("flex justify-between items-center", isDesktopView ? "text-sm py-1" : "text-xs")}>
                                <span className="font-bold text-slate-700 uppercase pr-2 truncate">{t(s.title, s.title)}</span>
                                <span className="font-bold text-blue-600 shrink-0">{currencyInfo.symbol}{s.price.toFixed(2)}</span>
                              </div>
                            ))
                          )}
                        </div>

                        <div className={cn(
                          "bg-slate-50 border-t border-slate-200 space-y-4",
                          isDesktopView ? "p-6" : "p-4"
                        )}>
                          <div className="flex justify-between items-center">
                            <span className={cn("font-bold text-slate-800 uppercase", isDesktopView ? "text-xl" : "text-lg")}>{t('Total', 'कुल')}</span>
                            <span className={cn("font-black text-blue-600", isDesktopView ? "text-3xl" : "text-2xl")}>{currencyInfo.symbol}{totalPrice.toFixed(2)}</span>
                          </div>
                          <Button 
                            disabled={selectedServices.length === 0}
                            onClick={() => setCurrentStep(2)}
                            className={cn(
                              "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 group cursor-pointer",
                              isDesktopView ? "h-16 text-base sm:text-lg" : "h-14"
                            )}
                          >
                            {t('Next Step', 'अगला कदम')}
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className={cn(
                    "flex flex-col gap-6 animate-in slide-in-from-right-4 duration-500",
                    isDesktopView ? "max-w-3xl mx-auto my-6 p-8 sm:p-10 rounded-3xl bg-slate-50/50 border border-slate-200 shadow-xl w-full" : ""
                  )}>
                    <div className="text-center mb-4">
                      <h2 className={cn(
                        "font-serif font-bold uppercase tracking-tight text-blue-700",
                        isDesktopView ? "text-3xl sm:text-4xl" : "text-2xl text-slate-800"
                      )}>
                        {t('Your Birth Details', 'आपका जन्म विवरण')}
                      </h2>
                      <p className="text-slate-500 text-sm mt-2">
                        {t('Accurate time and place are vital for precise astrological calculations.', 'सटीक गणना के लिए सही समय और जन्म स्थान आवश्यक हैं।')}
                      </p>
                    </div>

                    <div className={cn("space-y-5", isDesktopView ? "space-y-6" : "")}>
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className={cn("font-black text-slate-500 uppercase tracking-widest pl-1", isDesktopView ? "text-xs" : "text-[10px]")}>{t('Full Name', 'पूरा नाम')}</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                          <input 
                            name="fullName"
                            value={userDetails.fullName}
                            onChange={handleInputChange}
                            className={cn(
                              "w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm font-semibold",
                              isDesktopView ? "h-14" : "py-3.5"
                            )}
                            placeholder="Rahul Sharma"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className={cn("font-black text-slate-500 uppercase tracking-widest pl-1", isDesktopView ? "text-xs" : "text-[10px]")}>{t('Email', 'ईमेल')}</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                          <input 
                            name="email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                            className={cn(
                              "w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm font-semibold",
                              isDesktopView ? "h-14" : "py-3.5"
                            )}
                            placeholder="rahul@example.com"
                          />
                        </div>
                      </div>

                      {/* Row 1: Birth Date & Time */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className={cn("font-black text-slate-500 uppercase tracking-widest pl-1", isDesktopView ? "text-xs" : "text-[10px]")}>{t('Birth Date', 'जन्म तिथि')}</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                            <input 
                              type="date"
                              name="dob"
                              value={userDetails.dob}
                              onChange={handleInputChange}
                              className={cn(
                                "w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all font-semibold shadow-sm",
                                isDesktopView ? "h-14" : "py-3.5"
                              )}
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className={cn("font-black text-slate-500 uppercase tracking-widest pl-1", isDesktopView ? "text-xs" : "text-[10px]")}>{t('Time', 'समय')}</label>
                          <input 
                            type="time"
                            name="tob"
                            value={userDetails.tob}
                            onChange={handleInputChange}
                            className={cn(
                              "w-full bg-white border border-slate-200 rounded-2xl px-4 text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all font-semibold shadow-sm",
                              isDesktopView ? "h-14" : "py-3.5"
                            )}
                          />
                        </div>
                      </div>

                      {/* Row 2: Country & State */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className={cn("font-black text-slate-500 uppercase tracking-widest pl-1", isDesktopView ? "text-xs" : "text-[10px]")}>{t('Country', 'देश')}</label>
                          <Select value={selectedCountry} onValueChange={handleCountryChange}>
                            <SelectTrigger className={cn(
                              "w-full bg-white border border-slate-200 rounded-2xl px-4 text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all font-semibold text-left shadow-sm",
                              isDesktopView ? "h-[56px]" : "h-[48px]"
                            )}>
                              <SelectValue placeholder="Select country..." />
                            </SelectTrigger>
                            <SelectContent className="bg-background border-border max-h-[300px]">
                              {countries.map((country) => (
                                <SelectItem key={country} value={country} className="text-foreground hover:bg-primary/10">
                                  {country}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-1.5">
                          <label className={cn("font-black text-slate-500 uppercase tracking-widest pl-1", isDesktopView ? "text-xs" : "text-[10px]")}>{t('State', 'राज्य')}</label>
                          <Select value={selectedState} onValueChange={handleStateChange} disabled={!selectedCountry}>
                            <SelectTrigger className={cn(
                              "w-full bg-white border border-slate-200 rounded-2xl px-4 text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all font-semibold text-left shadow-sm",
                              isDesktopView ? "h-[56px]" : "h-[48px]"
                            )}>
                              <SelectValue placeholder="Select state..." />
                            </SelectTrigger>
                            <SelectContent className="bg-background border-border max-h-[300px]">
                              {states.map((state) => (
                                <SelectItem key={state} value={state} className="text-foreground hover:bg-primary/10">
                                  {state}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Row 3: City & Phone with Country Code */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className={cn("font-black text-slate-500 uppercase tracking-widest pl-1", isDesktopView ? "text-xs" : "text-[10px]")}>{t('City', 'शहर')}</label>
                          <Select value={selectedCity} onValueChange={handleCityChange} disabled={!selectedState}>
                            <SelectTrigger className={cn(
                              "w-full bg-white border border-slate-200 rounded-2xl px-4 text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all font-semibold text-left shadow-sm",
                              isDesktopView ? "h-[56px]" : "h-[48px]"
                            )}>
                              <SelectValue placeholder="Select city..." />
                            </SelectTrigger>
                            <SelectContent className="bg-background border-border max-h-[300px]">
                              {cities.map((city) => (
                                <SelectItem key={city} value={city} className="text-foreground hover:bg-primary/10">
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-1.5">
                          <label className={cn("font-black text-slate-500 uppercase tracking-widest pl-1", isDesktopView ? "text-xs" : "text-[10px]")}>{t('Phone', 'फ़ोन')}</label>
                          <div className={cn(
                            "flex items-center w-full bg-white border border-slate-200 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 transition-all overflow-hidden shadow-sm",
                            isDesktopView ? "h-[56px]" : "h-[48px]"
                          )}>
                            <div className="flex items-center pl-4 gap-1 shrink-0 border-r border-slate-200 pr-2.5 h-full">
                              <span className="text-base font-bold text-slate-600">{getCountryPhoneCode(selectedCountry)}</span>
                            </div>
                            <input 
                              type="tel"
                              value={phoneDigits}
                              onChange={(e) => {
                                let val = e.target.value.replace(/\D/g, '');
                                if (val.length > 10) {
                                  val = val.slice(0, 10);
                                }
                                setPhoneDigits(val);
                              }}
                              className="w-full bg-transparent px-3 py-3.5 text-base outline-none font-semibold text-slate-800 placeholder:text-slate-400 h-full border-0 focus:ring-0"
                              placeholder="98XXXXXXXX"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 pt-6">
                        <Button 
                          onClick={() => {
                            if (validateDetailsForm()) {
                              setCurrentStep(3);
                            }
                          }} 
                          className={cn(
                            "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg border-b-4 border-blue-800 uppercase tracking-widest cursor-pointer",
                            isDesktopView ? "h-16 text-base sm:text-lg" : "h-14 text-xs"
                          )}
                        >
                          {t('Continue to Review', 'समीक्षा के लिए जारी रखें')}
                        </Button>
                        <Button 
                          onClick={() => setCurrentStep(1)} 
                          className={cn(
                            "w-full rounded-xl bg-orange-50 text-orange-700 border border-orange-200 font-bold uppercase tracking-widest hover:bg-orange-100 flex items-center justify-center gap-2 shadow-sm cursor-pointer",
                            isDesktopView ? "h-14 text-sm" : "h-12 text-[10px]"
                          )}
                        >
                          <ArrowLeft className="w-4 h-4" />
                          {t('Back to Booking Page', 'बुकिंग पेज पर वापस जाएं')}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className={cn(
                    "flex flex-col gap-6 animate-in zoom-in-95 duration-500",
                    isDesktopView ? "max-w-3xl mx-auto my-6 w-full" : ""
                  )}>
                    <div className="text-center mb-2">
                      <h2 className={cn(
                        "font-serif font-bold uppercase tracking-tight text-blue-700",
                        isDesktopView ? "text-3xl sm:text-4xl" : "text-2xl text-slate-800"
                      )}>{t('Confirmation & Payment', 'पुष्टि एवं भुगतान')}</h2>
                    </div>

                    <div className="space-y-6">
                       <div className={cn(
                         "bg-slate-50 border border-slate-200 shadow-md",
                         isDesktopView ? "rounded-3xl p-8" : "rounded-[2rem] p-6"
                       )}>
                          <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">{t('Review Details', 'विवरण की समीक्षा')}</h3>
                          <div className="space-y-4">
                             <div className="flex flex-col">
                                <span className="text-xs text-slate-400 font-bold uppercase">{t('Package Total', 'कुल मूल्य')}</span>
                                <span className={cn("font-black text-slate-800", isDesktopView ? "text-3xl" : "text-xl")}>{currencyInfo.symbol}{totalPrice.toFixed(2)}</span>
                             </div>
                             <div className={cn(
                               "bg-white border border-slate-100 flex flex-col gap-2",
                               isDesktopView ? "p-6 rounded-2xl" : "p-4 rounded-2xl"
                             )}>
                                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t('Selected Services', 'चुनी गई सेवाएँ')}</span>
                                <div className="flex flex-col gap-2">
                                   {selectedServices.map(s => (
                                     <div key={s.id} className={cn("font-bold text-slate-700 border-b border-slate-50 pb-1.5 last:border-0 uppercase tracking-tight", isDesktopView ? "text-sm" : "text-[12px]")}>
                                       • {t(s.title, s.title)}
                                     </div>
                                   ))}
                                </div>
                             </div>
                          </div>
                       </div>

                       <div className={cn(
                         "bg-white border border-blue-200 shadow-xl text-center",
                         isDesktopView ? "rounded-3xl p-8 sm:p-10" : "rounded-[2rem] p-6"
                       )}>
                          <CreditCard className={cn("text-blue-600 mx-auto mb-4", isDesktopView ? "w-10 h-10" : "w-8 h-8")} />
                          <h3 className={cn("font-bold text-slate-800 uppercase mb-6", isDesktopView ? "text-lg" : "text-sm")}>{t('Secure Checkout', 'सुरक्षित चेकआउट')}</h3>
                          
                          <div className={cn(
                            "gap-3 mb-8",
                            isDesktopView ? "grid grid-cols-4" : "grid grid-cols-2"
                          )}>
                             {['UPI', 'Card', 'PayPal', 'Net Banking'].map(m => (
                                <div key={m} className={cn(
                                  "bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all font-bold text-slate-700 shadow-sm",
                                  isDesktopView ? "p-4 text-sm" : "p-3 text-[11px]"
                                )}>{m}</div>
                             ))}
                          </div>

                          <Button 
                            onClick={handleBooking}
                            disabled={isSubmitting}
                            className={cn(
                              "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/30 uppercase active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer",
                              isDesktopView ? "h-18 sm:h-20 text-lg sm:text-xl" : "h-16 text-lg"
                            )}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>{t('Processing...', 'प्रक्रिया जारी है...')}</span>
                              </div>
                            ) : (
                              <>
                                {t('Pay Now & Confirm', 'अभी भुगतान करें और पुष्टि करें')}
                                <ArrowRight className="w-6 h-6" />
                              </>
                            )}
                          </Button>
                       </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentStep(1)} 
                        className={cn(
                          "w-full rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-bold uppercase tracking-widest hover:bg-blue-100 flex items-center justify-center gap-2 shadow-sm cursor-pointer",
                          isDesktopView ? "h-14 text-sm" : "h-12 text-[10px]"
                        )}
                      >
                        <ArrowLeft className="w-4 h-4" />
                        {t('Back to Booking Page', 'बुकिंग पेज पर वापस जाएं')}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setCurrentStep(2)} 
                        className={cn(
                          "w-full rounded-xl bg-slate-50 text-slate-600 border border-slate-200 font-extrabold uppercase tracking-[0.2em] hover:bg-white flex items-center justify-center gap-2 transition-all cursor-pointer",
                          isDesktopView ? "h-12 text-xs" : "h-10 text-[9px] mt-2"
                        )}
                      >
                        <Star className="w-3.5 h-3.5" />
                        {t('Edit My Information', 'मेरी जानकारी बदलें')}
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className={cn(
                "flex flex-col items-center justify-center gap-8 animate-in zoom-in duration-500 text-center",
                isDesktopView ? "max-w-2xl mx-auto py-16" : "py-12"
              )}>
                <div className={cn(
                  "bg-green-100 rounded-full flex items-center justify-center shadow-inner",
                  isDesktopView ? "w-28 h-28" : "w-24 h-24"
                )}>
                  <Check className={isDesktopView ? "w-14 h-14 text-green-600" : "w-12 h-12 text-green-600"} />
                </div>
                
                <div className="space-y-4">
                  <h2 className={cn(
                    "font-black text-slate-800 uppercase tracking-tight",
                    isDesktopView ? "text-4xl" : "text-3xl"
                  )}>
                    {t('Booking Confirmed!', 'बुकिंग की पुष्टि हो गई!')}
                  </h2>
                  <p className={cn(
                    "text-slate-600 leading-relaxed mx-auto",
                    isDesktopView ? "text-base max-w-md" : "text-sm max-w-[280px]"
                  )}>
                    {t('Thank you for choosing Bhrigu Nandi Astrology. Your birth details have been sent to our expert.', 'भृगु नंदी ज्योतिष चुनने के लिए धन्यवाद। आपके जन्म का विवरण हमारे विशेषज्ञ को भेज दिया गया है।')}
                  </p>
                </div>

                <div className={cn(
                  "bg-blue-50 border border-blue-100 rounded-3xl w-full",
                  isDesktopView ? "p-8" : "p-6"
                )}>
                  <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">{t('Summary', 'सारांश')}</h3>
                  <div className="text-left space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400 font-bold">{t('Client', 'क्लाइंट')}</span>
                      <span className="text-slate-800 font-bold uppercase">{userDetails.fullName}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400 font-bold">{t('Services', 'सेवाएं')}</span>
                      <span className="text-slate-800 font-bold uppercase text-right max-w-sm truncate">{selectedServices.map(s => s.title).join(', ')}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => navigate('/')}
                  className={cn(
                    "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg border-b-4 border-blue-800 uppercase tracking-widest cursor-pointer",
                    isDesktopView ? "h-16 text-base" : "h-14 text-xs mt-4"
                  )}
                >
                  {t('Return to Dashboard', 'डैशबोर्ड पर लौटें')}
                </Button>

                <Button 
                  onClick={() => navigate('/dashboard', {
                    state: {
                      autoGenerateDaily: true,
                      birthDetails: {
                        name: userDetails.fullName.toUpperCase(),
                        dateOfBirth: userDetails.dob,
                        timeOfBirth: userDetails.tob,
                        placeOfBirth: userDetails.pob,
                        city: selectedCity,
                        state: selectedState,
                        country: selectedCountry,
                        gender: 'male'
                      }
                    }
                  })}
                  className={cn(
                    "w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-2xl shadow-lg border-b-4 border-orange-800 uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer",
                    isDesktopView ? "h-16 text-base" : "h-14 text-xs mt-3"
                  )}
                >
                  <Sparkles className="w-5 h-5" />
                  {t('View Your Daily Predictions', 'अपनी दैनिक भविष्यवाणियां देखें')}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Footer Sections */}
        <div className={cn(
          "transition-all",
          isDesktopView ? "mt-16 space-y-16 pb-16" : "mt-12 space-y-12 pb-12"
        )}>
          <section className="text-center px-4">
            <h2 className={cn(
              "font-serif font-bold text-slate-900 uppercase tracking-wider mb-6",
              isDesktopView ? "text-3xl sm:text-4xl" : "text-2xl"
            )}>{t('Why Trust Us?', 'हम पर भरोसा क्यों?')}</h2>
            <div className={cn(
              "transition-all",
              isDesktopView ? "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto" : "grid grid-cols-2 gap-3"
            )}>
               {[
                 { t: 'Expert Scholars', i: <Sparkles className={isDesktopView ? "w-8 h-8" : "w-4 h-4"} /> },
                 { t: 'Secure & Private', i: <Briefcase className={isDesktopView ? "w-8 h-8" : "w-4 h-4"} /> },
                 { t: 'Global Presence', i: <Globe className={isDesktopView ? "w-8 h-8" : "w-4 h-4"} /> },
                 { t: '24/7 Vedic Guidance', i: <Clock className={isDesktopView ? "w-8 h-8" : "w-4 h-4"} /> }
               ].map((item, idx) => (
                  <div key={idx} className={cn(
                    "bg-white border border-blue-200/80 shadow-md flex flex-col items-center justify-center gap-3 transition-transform hover:scale-105",
                    isDesktopView ? "p-8 rounded-none min-h-[140px]" : "p-4 rounded-none"
                  )}>
                     <div className="text-blue-600">{item.i}</div>
                     <span className={cn("text-slate-800 font-bold uppercase", isDesktopView ? "text-sm sm:text-base" : "text-[10px]")}>{item.t}</span>
                  </div>
               ))}
            </div>
          </section>

          <section className={cn(
            "bg-blue-50/80 border border-blue-200/80 text-center transition-all shadow-md rounded-none",
            isDesktopView ? "p-12 sm:p-16 max-w-4xl mx-auto" : "p-8 mx-4"
          )}>
            <h2 className={cn(
              "font-serif font-bold text-slate-900 uppercase mb-6",
              isDesktopView ? "text-2xl sm:text-3xl" : "text-xl"
            )}>{t('Get In Touch', 'संपर्क करें')}</h2>
            <div className={cn(
              "flex flex-col items-center justify-center gap-6 font-bold",
              isDesktopView ? "text-lg sm:text-xl" : "text-sm gap-4"
            )}>
               <a 
                 href="mailto:bhriguastrovaani@gmail.com" 
                 className="text-blue-600 hover:text-blue-800 transition-colors"
               >
                 bhriguastrovaani@gmail.com
               </a>
               <a 
                 href="https://wa.me/919817588099" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-emerald-600 hover:text-emerald-700 transition-colors flex items-center justify-center gap-2"
               >
                 <svg viewBox="0 0 24 24" fill="currentColor" className={isDesktopView ? "w-6 h-6" : "w-4 h-4"} aria-hidden="true">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                 </svg>
                 <span>+91 9817588099</span>
               </a>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .glass-card { box-shadow: 0 15px 35px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.1); }
        .animate-pulse-subtle { animation: pulse 2s infinite ease-in-out; }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.9; transform: scale(0.99); } }
      `}</style>
    </div>
  );
};

export default AllServices;
