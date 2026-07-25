import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Globe, Eye, ArrowLeft, ArrowRight, Sparkles, Heart, Briefcase, Info, Home, PhoneCall, Check, Trash2, Calendar, Clock, MapPin, User, Mail, Phone, CreditCard, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { CurrencyToggle } from '@/components/CurrencyToggle';
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
    <div className="flex items-center justify-center w-full mb-12 mt-4 px-2">
      {[
        { step: 1, label: 'Select' },
        { step: 2, label: 'Details' },
        { step: 3, label: 'Pay' }
      ].map((item, index) => (
        <React.Fragment key={item.step}>
          <div className="flex flex-col items-center relative">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300",
              currentStep >= item.step ? "bg-blue-600 text-white shadow-lg" : "bg-slate-200 text-slate-500"
            )}>
              {currentStep > item.step ? <Check className="w-4 h-4" /> : item.step}
            </div>
            <span className={cn(
              "absolute -bottom-6 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider",
              currentStep >= item.step ? "text-blue-600" : "text-slate-400"
            )}>
              {t(item.label, item.label)}
            </span>
          </div>
          {index < 2 && (
            <div className={cn(
              "h-[2px] flex-1 mx-2 transition-all duration-300",
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
    <div className="min-h-screen relative flex flex-col items-center py-8 overflow-x-hidden bg-slate-950">
      <StarField count={100} />

      <div className="relative z-10 w-full max-w-md px-4 py-4">
        <div className="glass-card flex flex-col rounded-[2.5rem] border border-blue-400 border-opacity-30 bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl shadow-blue-500 shadow-opacity-20 overflow-hidden min-h-[700px] h-auto">
          
          {/* Header Block with better positioning to avoid overlap */}
          <div className="bg-[#4272e8] border-b-[3px] border-white py-4 shadow-md w-full relative z-20">
            <div className="px-4 flex items-center justify-between">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center justify-center p-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all shadow-sm"
              >
                <Home className="w-4 h-4" />
              </button>
              
              <h1 className="text-white font-serif text-[15px] sm:text-lg font-bold tracking-[0.15em] drop-shadow-md text-center flex-1 px-2">
                CONSULTATION BOOKING
              </h1>

              <div className="w-8" />
            </div>
          </div>

          {/* Subheader bar for consistency with Index page */}
          <div className="bg-[#4272e8] w-full py-2.5 px-3 sm:px-5 flex items-center space-x-2 sm:justify-between border-b-[3px] border-white border-opacity-90 shadow-lg overflow-x-auto no-scrollbar">
            <div className="flex gap-4 sm:gap-6 text-white text-[11px] sm:text-[13px] font-bold tracking-wide whitespace-nowrap">
              <button
                onClick={() => navigate('/')}
                type="button"
                className="flex items-center gap-1.5 hover:text-blue-200 transition-colors uppercase sm:capitalize"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <button
                onClick={() => navigate('/about')}
                type="button"
                className="flex items-center gap-1.5 hover:text-blue-200 transition-colors uppercase sm:capitalize"
              >
                <Info className="w-3.5 h-3.5" />
                <span>About</span>
              </button>
              <button
                onClick={() => navigate('/vision')}
                type="button"
                className="flex items-center gap-1.5 hover:text-blue-200 transition-colors uppercase sm:capitalize"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vision</span>
              </button>
              <button
                onClick={() => navigate('/services')}
                type="button"
                className="flex items-center gap-1.5 text-yellow-300 border-b-2 border-yellow-300 transition-colors uppercase sm:capitalize"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Astro Services</span>
              </button>
            </div>
          </div>

          {/* New Toggle Row for consistency */}
          <div className="w-full py-3 px-3 sm:px-5 flex flex-wrap items-center justify-center gap-3">
            <LanguageToggle
              className="flex-shrink-0"
              triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0"
            />
            <CurrencyToggle
              className="flex-shrink-0"
              triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0"
            />
            <button 
              onClick={() => navigate('/contact')}
              type="button" 
              className="flex-shrink-0 bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Increased space to shift content downward as requested */}
          <div className="w-full px-6 py-12">
            {renderStepper()}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 pt-0 flex flex-col">
            {!isSuccess ? (
              <>
                {currentStep === 1 && (
                  <div className="flex flex-col gap-6 flex-1">
                    <div className="flex justify-center -mt-4 mb-2">
                      <button
                        onClick={() => navigate('/services')}
                        className="bg-orange-50 text-orange-700 border border-orange-200 px-6 py-2 rounded-xl flex items-center gap-2 text-[11px] font-bold transition-all hover:bg-orange-100 shadow-sm"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        {t('Back to Services Page', 'सेवाओं के पेज पर वापस जाएं')}
                      </button>
                    </div>
                    {/* Services List */}
                    <div className="space-y-4">
                      <div className="text-center mb-6">
                        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
                          {t('Select Services', 'सेवाएं चुनें')}
                        </h2>
                        <p className="text-slate-500 text-xs mt-1">
                          {t('Pick one or more astrology services.', 'एक या अधिक ज्योतिष सेवाएं चुनें।')}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {SERVICES.map((s) => (
                          <div 
                            key={s.id} 
                            onClick={() => toggleService(s.id)}
                            className={cn(
                              "cursor-pointer rounded-2xl border p-4 transition-all duration-300 group relative",
                              selectedServiceIds.includes(s.id) 
                                ? "bg-blue-50 border-blue-400 shadow-md ring-2 ring-blue-400 ring-opacity-20" 
                                : "bg-white border-slate-100 hover:border-blue-300"
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <div className={cn(
                                "p-2 rounded-xl shrink-0",
                                selectedServiceIds.includes(s.id) ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                              )}>
                                {s.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-bold text-slate-800 text-[13px] uppercase leading-none mt-1">
                                    {t(s.title, s.title)}
                                  </h3>
                                  <div className={cn(
                                    "w-4 h-4 rounded-full border shrink-0",
                                    selectedServiceIds.includes(s.id) ? "bg-blue-600 border-blue-600" : "border-slate-300"
                                  )}>
                                    {selectedServiceIds.includes(s.id) && <Check className="w-3 h-3 text-white" />}
                                  </div>
                                </div>
                                <p className="text-blue-600 font-bold text-xs my-1">
                                  {s.price === 0 ? t('Free', 'निःशुल्क') : `${currencyInfo.symbol}${s.price.toFixed(2)}`}
                                </p>
                                <p className="text-slate-400 text-[10px] leading-tight">
                                  {t(s.description, s.description)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Summary at bottom for vertical stacking */}
                    <div className="mt-auto pt-8">
                      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                        <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-3">
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          <h3 className="font-bold text-slate-800 text-sm uppercase">{t('Order Summary', 'आदेश सारांश')}</h3>
                        </div>

                        <div className="p-4 space-y-3 min-h-[100px]">
                          {selectedServices.length === 0 ? (
                            <p className="text-slate-400 text-xs italic text-center py-4">{t('No services selected.', 'कोई सेवा नहीं चुनी गई।')}</p>
                          ) : (
                            selectedServices.map(s => (
                              <div key={s.id} className="flex justify-between items-center text-xs">
                                <span className="font-bold text-slate-700 uppercase pr-2 truncate">{t(s.title, s.title)}</span>
                                <span className="font-bold text-blue-600 shrink-0">{currencyInfo.symbol}{s.price.toFixed(2)}</span>
                              </div>
                            ))
                          )}
                        </div>

                        <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-slate-800 text-lg uppercase">{t('Total', 'कुल')}</span>
                            <span className="font-black text-blue-600 text-2xl">{currencyInfo.symbol}{totalPrice.toFixed(2)}</span>
                          </div>
                          <Button 
                            disabled={selectedServices.length === 0}
                            onClick={() => setCurrentStep(2)}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 rounded-2xl shadow-lg transition-all active:scale-95 group"
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
                  <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-500">
                    <div className="text-center mb-4">
                      <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
                        {t('Your Birth Details', 'आपका जन्म विवरण')}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{t('Full Name', 'पूरा नाम')}</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                          <input 
                            name="fullName"
                            value={userDetails.fullName}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                            placeholder="Rahul Sharma"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{t('Email', 'ईमेल')}</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                          <input 
                            name="email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                            placeholder="rahul@example.com"
                          />
                        </div>
                      </div>

                      {/* Row 1: Birth Date & Time */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{t('Birth Date', 'जन्म तिथि')}</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                            <input 
                              type="date"
                              name="dob"
                              value={userDetails.dob}
                              onChange={handleInputChange}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-semibold"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{t('Time', 'समय')}</label>
                          <input 
                            type="time"
                            name="tob"
                            value={userDetails.tob}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-semibold"
                          />
                        </div>
                      </div>

                      {/* Row 2: Country & State */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{t('Country', 'देश')}</label>
                          <Select value={selectedCountry} onValueChange={handleCountryChange}>
                            <SelectTrigger className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-semibold h-[48px] text-left">
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
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{t('State', 'राज्य')}</label>
                          <Select value={selectedState} onValueChange={handleStateChange} disabled={!selectedCountry}>
                            <SelectTrigger className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-semibold h-[48px] text-left">
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
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{t('City', 'शहर')}</label>
                          <Select value={selectedCity} onValueChange={handleCityChange} disabled={!selectedState}>
                            <SelectTrigger className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-semibold h-[48px] text-left">
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
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">{t('Phone', 'फ़ोन')}</label>
                          <div className="flex items-center w-full bg-slate-50 border border-slate-200 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:bg-white transition-all h-[48px] overflow-hidden">
                            <div className="flex items-center pl-4 gap-1 shrink-0 border-r border-slate-200 pr-2.5 h-full">
                              <span className="text-sm font-bold text-slate-600">{getCountryPhoneCode(selectedCountry)}</span>
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
                              className="w-full bg-transparent px-3 py-3.5 text-sm outline-none font-semibold text-slate-800 placeholder:text-slate-400 h-full border-0 focus:ring-0"
                              placeholder="98XXXXXXXX"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 pt-6">
                        <Button 
                          onClick={() => {
                            if (validateDetailsForm()) {
                              setCurrentStep(3);
                            }
                          }} 
                          className="w-full bg-blue-600 text-white font-bold h-14 rounded-2xl shadow-lg border-b-4 border-blue-800 uppercase text-xs tracking-widest"
                        >
                          {t('Continue to Review', 'समीक्षा के लिए जारी रखें')}
                        </Button>
                        <Button 
                          onClick={() => setCurrentStep(1)} 
                          className="w-full h-12 rounded-xl bg-orange-50 text-orange-700 border border-orange-200 font-bold uppercase text-[10px] tracking-widest hover:bg-orange-100 flex items-center justify-center gap-2 shadow-sm"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          {t('Back to Booking Page', 'बुकिंग पेज पर वापस जाएं')}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="flex flex-col gap-6 animate-in zoom-in-95 duration-500">
                    <div className="text-center mb-2">
                      <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">{t('Confirmation', 'पुष्टि')}</h2>
                    </div>

                    <div className="space-y-4">
                       <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-6">
                          <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">{t('Review Details', 'विवरण की समीक्षा')}</h3>
                          <div className="space-y-3">
                             <div className="flex flex-col">
                                <span className="text-[9px] text-slate-400 font-bold uppercase">{t('Package Total', 'कुल मूल्य')}</span>
                                <span className="text-xl font-black text-slate-800">{currencyInfo.symbol}{totalPrice.toFixed(2)}</span>
                             </div>
                             <div className="p-4 bg-white rounded-2xl border border-slate-100 flex flex-col gap-2">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t('Selected Services', 'चुनी गई सेवाएँ')}</span>
                                <div className="flex flex-col gap-1.5">
                                   {selectedServices.map(s => (
                                     <div key={s.id} className="text-[12px] font-bold text-slate-700 capitalize leading-relaxed border-b border-slate-50 pb-1 last:border-0 uppercase tracking-tight">
                                       • {t(s.title, s.title)}
                                     </div>
                                   ))}
                                </div>
                             </div>
                          </div>
                       </div>

                       <div className="bg-white rounded-[2rem] border border-blue-200 shadow-xl p-6 text-center">
                          <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                          <h3 className="text-sm font-bold text-slate-800 uppercase mb-6">{t('Secure Checkout', 'सुरक्षित चेकआउट')}</h3>
                          
                          <div className="grid grid-cols-2 gap-2 mb-8">
                             {['UPI', 'Card', 'PayPal', 'Net'].map(m => (
                                <div key={m} className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all text-[11px] font-bold text-slate-600">{m}</div>
                             ))}
                          </div>

                          <Button 
                            onClick={handleBooking}
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black h-16 rounded-2xl shadow-2xl shadow-blue-500/30 text-lg uppercase active:scale-95 transition-all flex items-center justify-center gap-2"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>{t('Processing...', 'प्रक्रिया जारी है...')}</span>
                              </div>
                            ) : (
                              <>
                                {t('Pay Now & Confirm', 'अभी भुगतान करें और पुष्टि करें')}
                                <ArrowRight className="w-5 h-5" />
                              </>
                            )}
                          </Button>
                       </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentStep(1)} 
                        className="w-full h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-100 flex items-center justify-center gap-2 shadow-sm"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        {t('Back to Booking Page', 'बुकिंग पेज पर वापस जाएं')}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setCurrentStep(2)} 
                        className="w-full h-10 rounded-xl bg-slate-50 text-slate-600 border border-slate-200 font-extrabold uppercase text-[9px] tracking-[0.2em] hover:bg-white flex items-center justify-center gap-2 transition-all mt-2"
                      >
                        <Star className="w-3 h-3" />
                        {t('Edit My Information', 'मेरी जानकारी बदलें')}
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-8 py-12 animate-in zoom-in duration-500 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center shadow-inner">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">
                    {t('Booking Confirmed!', 'बुकिंग की पुष्टि हो गई!')}
                  </h2>
                  <p className="text-slate-600 text-sm max-w-[280px] mx-auto">
                    {t('Thank you for choosing Bhrigu Nandi Astrology. Your birth details have been sent to our expert.', 'भृगु नंदी ज्योतिष चुनने के लिए धन्यवाद। आपके जन्म का विवरण हमारे विशेषज्ञ को भेज दिया गया है।')}
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl w-full">
                  <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">{t('Summary', 'सारांश')}</h3>
                  <div className="text-left space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold">{t('Client', 'क्लाइंट')}</span>
                      <span className="text-slate-800 font-bold uppercase">{userDetails.fullName}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-bold">{t('Services', 'सेवाएं')}</span>
                      <span className="text-slate-800 font-bold uppercase text-right max-w-[150px] truncate">{selectedServices.map(s => s.title).join(', ')}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => navigate('/')}
                  className="w-full bg-blue-600 text-white font-bold h-14 rounded-2xl shadow-lg border-b-4 border-blue-800 uppercase text-xs tracking-widest mt-4"
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
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold h-14 rounded-2xl shadow-lg border-b-4 border-orange-800 uppercase text-xs tracking-widest mt-3 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {t('View Your Daily Predictions', 'अपनी दैनिक भविष्यवाणियां देखें')}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Footer Sections */}
        <div className="mt-12 space-y-12 pb-12">
            <section className="text-center px-4">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{t('Why Trust Us?', 'हम पर भरोसा क्यों?')}</h2>
              <div className="grid grid-cols-2 gap-3">
                 {[
                   { t: 'Expert', i: <Sparkles className="w-4 h-4" /> },
                   { t: 'Secure', i: <Briefcase className="w-4 h-4" /> },
                   { t: 'Global', i: <Globe className="w-4 h-4" /> },
                   { t: '24/7', i: <Clock className="w-4 h-4" /> }
                 ].map((item, idx) => (
                    <div key={idx} className="bg-white bg-opacity-5 p-4 rounded-2xl border border-white border-opacity-10 backdrop-blur-sm flex flex-col items-center gap-2">
                       <div className="text-blue-400">{item.i}</div>
                       <span className="text-white text-[10px] font-bold uppercase">{item.t}</span>
                    </div>
                 ))}
              </div>
            </section>

            <section className="bg-gradient-to-b from-blue-600 bg-opacity-20 to-transparent p-8 rounded-[3rem] border border-blue-400 border-opacity-20 text-center mx-4">
              <h2 className="text-xl font-bold text-white uppercase mb-4">{t('Get In Touch', 'संपर्क करें')}</h2>
              <div className="flex flex-col gap-4 text-sm text-blue-300 font-bold">
                 <span>info@bnnastrology.com</span>
                 <span className="text-xs opacity-50">+91 98XXX XXXXX</span>
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
