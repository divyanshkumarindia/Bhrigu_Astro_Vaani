import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Globe, ArrowLeft, Eye, ChevronDown, CheckCircle2, ArrowRight, Sparkles, Heart, Briefcase, Shield, Zap, Info, Home, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { CurrencyToggle } from '@/components/CurrencyToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { cn } from '@/lib/utils';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950">
      <StarField count={100} />

      <div className={cn(
        "relative z-10 w-full transition-all duration-300 ease-in-out",
        isDesktopView ? "max-w-6xl px-4 sm:px-8 py-6 sm:py-10" : "max-w-md px-4 py-8"
      )}>
        <div className={cn(
          "glass-card flex flex-col rounded-3xl border border-blue-300 border-opacity-50 bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl shadow-blue-400 shadow-opacity-30 relative overflow-hidden transition-all duration-300",
          isDesktopView ? "p-6 sm:p-8" : ""
        )}>
          {/* Header Group matching Home Page */}
          <div className="relative z-20 flex flex-col">
            <div className="py-3 w-full">
              <h2 className={cn(
                "text-blue-700 text-center font-serif font-bold tracking-wider drop-shadow-md px-2 transition-all",
                isDesktopView ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl md:text-2xl"
              )}>
                BHRIGU NANDI ASTROLOGY
              </h2>
            </div>

            {/* Navigation links */}
            <div className={cn(
              "bg-[#4272e8] w-full py-2.5 px-3 sm:px-5 flex items-center border-b-[3px] border-white border-opacity-90 shadow-lg overflow-x-auto no-scrollbar",
              isDesktopView ? "justify-center" : "space-x-2 sm:justify-between"
            )}>
              <div className={cn(
                "flex text-white font-bold tracking-wide whitespace-nowrap",
                isDesktopView ? "gap-8 sm:gap-12 text-sm sm:text-base" : "gap-4 sm:gap-6 text-[11px] sm:text-[13px]"
              )}>
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

            {/* Language, View Mode and Currency Toggles Row */}
            <div className="w-full py-3 px-3 sm:px-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <ViewModeToggle />
              <LanguageToggle
                className="flex-shrink-0"
                triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
              />
              <CurrencyToggle
                className="flex-shrink-0"
                triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
              />
              <button 
                onClick={() => navigate('/contact')}
                type="button" 
                className="flex-shrink-0 bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          <div className="w-full px-4 pb-10 mt-8">
            <div className="flex flex-col mb-4">
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center gap-4 mb-8">
                  <button
                    onClick={() => navigate('/all-services')}
                    className="bg-[#FB923C] hover:bg-orange-500 text-white px-8 py-3 rounded-2xl flex items-center gap-2 text-[14px] font-black transition-all active:scale-95 uppercase tracking-widest w-full justify-center group"
                  >
                    {t('Explore & Book Services', 'सेवाओं का अन्वेषण करें')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight drop-shadow-sm uppercase text-center">
                {t('Our Sacred Services', 'हमारी पवित्र सेवाएँ')}
              </h1>
            </div>

            <p className="text-slate-600 mt-1 text-center text-[11px] sm:text-sm leading-relaxed font-medium mb-8 px-2">
              {t('Comprehensive astrological solutions tailored to your unique planetary signature.', 'आपकी अद्वितीय ग्रहों की स्थिति के अनुसार व्यापक ज्योतिषीय समाधान।')}
            </p>

            <div className={cn(
              isDesktopView ? "grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0" : "space-y-6"
            )}>
              {[
                {
                  title: 'BIRTH CHART ANALYSIS',
                  titleHi: 'जन्म कुंडली विश्लेषण',
                  description: 'Get detailed insights and time-bound predictions for your birth chart analysis.',
                  descriptionHi: 'अपनी जन्म कुंडली विश्लेषण के लिए विस्तृत अंतर्दृष्टि और समयबद्ध भविष्यवाणियां प्राप्त करें।',
                  color: '#3B82F6',
                },
                {
                  title: 'CAREER PREDICTIONS',
                  titleHi: 'करियर भविष्यवाणियां',
                  description: 'Get detailed insights and time-bound predictions for your career predictions.',
                  descriptionHi: 'अपने करियर की भविष्यवाणियों के लिए विस्तृत अंतर्दृष्टि और समयबद्ध भविष्यवाणियां प्राप्त करें।',
                  color: '#22C55E',
                },
                {
                  title: 'MARRIAGE & RELATIONSHIP',
                  titleHi: 'विवाह और संबंध',
                  description: 'Get detailed insights and time-bound predictions for your marriage & relationship.',
                  descriptionHi: 'अपने विवाह और संबंधों के लिए विस्तृत अंतर्दृष्टि और समयबद्ध भविष्यवाणियां प्राप्त करें।',
                  color: '#EC4899',
                },
                {
                  title: 'WEALTH & PROSPERITY',
                  titleHi: 'धन और समृद्धि',
                  description: 'Get detailed insights and time-bound predictions for your wealth & prosperity.',
                  descriptionHi: 'अपने धन और समृद्धि के लिए विस्तृत अंतर्दृष्टि और समयबद्ध भविष्यवाणियां प्राप्त करें।',
                  color: '#10B981',
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl border border-slate-200 border-opacity-60 shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: service.color }}
                  />
                  <div className="p-6 flex flex-col items-start text-left">
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base tracking-wide mb-3">
                      {t(service.title, service.titleHi)}
                    </h3>
                    <p className="text-slate-500 text-[11px] sm:text-[13px] leading-relaxed mb-5">
                      {t(service.description, service.descriptionHi)}
                    </p>
                    <button 
                      onClick={() => navigate('/all-services')}
                      className="text-blue-600 font-extrabold text-[10px] sm:text-[11px] tracking-widest hover:text-blue-700 transition-colors uppercase"
                    >
                      {t('Learn More', 'और जानें')}
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-12 w-full text-center pb-8 px-2">
                <div className="bg-orange-400 rounded-2xl p-6 border border-white border-opacity-20">
                  <h2 className="text-white font-bold text-lg sm:text-xl uppercase tracking-wide leading-tight">
                    {t('Explore and Book Our Astrological Services', 'हमारी ज्योतिषीय सेवाओं का अन्वेषण करें')}
                  </h2>
                </div>
                <button 
                  onClick={() => navigate('/all-services')}
                  type="button" 
                  className="mt-8 bg-orange-400 text-white font-bold py-3.5 px-8 rounded-full hover:bg-orange-500 transition-all inline-flex items-center justify-center gap-2 active:scale-95 uppercase text-xs tracking-widest border border-white border-opacity-10 w-full"
                >
                  {t('Explore & Book Services', 'हमारी सेवाओं को बुक करें')} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-12 mt-12 pb-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-slate-500 text-[11px] font-bold tracking-widest uppercase text-center">
              {t('Trusted by 10,000+ Seekers', '10,000+ साधकों द्वारा भरोसेमंद')}
            </p>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center shadow-sm overflow-hidden transform hover:scale-110 transition-transform cursor-pointer">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#4272e8] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                +9k
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Services;
