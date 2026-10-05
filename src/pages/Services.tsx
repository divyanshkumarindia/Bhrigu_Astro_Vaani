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
        isDesktopView ? "max-w-6xl px-4 sm:px-8 py-10 sm:py-16" : "max-w-md px-4 py-8"
      )}>
        <div className={cn(
          "glass-card flex flex-col rounded-3xl border border-blue-300 border-opacity-50 bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl shadow-blue-400 shadow-opacity-30 relative overflow-hidden transition-all duration-300",
          isDesktopView ? "p-8 sm:p-14 space-y-12" : ""
        )}>
          {/* Header Group matching Home Page */}
          <div className="relative z-20 flex flex-col">
            <div className={cn(
              "w-full transition-all",
              isDesktopView ? "py-4 sm:py-6" : "py-3"
            )}>
              <h2 className={cn(
                "text-blue-700 text-center font-serif font-bold tracking-wider drop-shadow-md px-2 transition-all",
                isDesktopView ? "text-3xl sm:text-4xl md:text-5xl" : "text-lg sm:text-xl md:text-2xl"
              )}>
                BHRIGU NANDI ASTROLOGY
              </h2>
            </div>

            {/* Navigation links */}
            <div className={cn(
              "bg-[#4272e8] w-full flex items-center border-b-[3px] border-white border-opacity-90 shadow-lg overflow-x-auto no-scrollbar transition-all",
              isDesktopView 
                ? "py-4 px-8 justify-center gap-10 sm:gap-14 text-base sm:text-lg" 
                : "py-2.5 px-3 sm:px-5 space-x-2 sm:justify-between"
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
                  <Home className={isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => navigate('/about')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Info className={isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  <span>About</span>
                </button>
                <button
                  onClick={() => navigate('/vision')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Eye className={isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  <span>Vision</span>
                </button>
                <button
                  onClick={() => navigate('/services')}
                  type="button"
                  className="flex items-center gap-2 text-yellow-300 border-b-2 border-yellow-300 transition-colors uppercase sm:capitalize"
                >
                  <Sparkles className={isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  <span>Astro Services</span>
                </button>
              </div>
            </div>

            {/* Language, View Mode and Currency Toggles Row */}
            <div className={cn(
              "w-full flex flex-wrap items-center justify-center transition-all",
              isDesktopView ? "py-6 px-6 gap-4" : "py-3 px-3 sm:px-5 gap-2.5 sm:gap-3"
            )}>
              <ViewModeToggle />
              <LanguageToggle
                className="flex-shrink-0"
                triggerClassName={cn(
                  "bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm rounded-xl flex items-center gap-2 text-blue-700 font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm",
                  isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
                )}
              />
              <CurrencyToggle
                className="flex-shrink-0"
                triggerClassName={cn(
                  "bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm rounded-xl flex items-center gap-2 text-blue-700 font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm",
                  isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
                )}
              />
              <button 
                onClick={() => navigate('/contact')}
                type="button" 
                className={cn(
                  "flex-shrink-0 bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm rounded-xl flex items-center gap-2 text-blue-700 font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm",
                  isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
                )}
              >
                <PhoneCall className={isDesktopView ? "w-4 h-4" : "w-3.5 h-3.5"} />
                <span>Contact</span>
              </button>
            </div>
          </div>

          <div className="w-full px-4 pb-10 mt-6 text-center">
            <div className="flex flex-col mb-4">
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center gap-4 mb-4 w-full max-w-md mx-auto">
                  <button
                    onClick={() => navigate('/all-services')}
                    className={cn(
                      "bg-[#FB923C] hover:bg-orange-500 text-white rounded-2xl flex items-center gap-3 font-black transition-all active:scale-95 uppercase tracking-widest w-full justify-center group shadow-lg shadow-orange-500/20 cursor-pointer",
                      isDesktopView ? "h-16 text-base sm:text-lg px-10" : "py-3 px-8 text-[14px]"
                    )}
                  >
                    {t('Explore & Book Services', 'सेवाओं का अन्वेषण करें')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <h1 className={cn(
                "font-serif font-bold text-blue-700 tracking-tight drop-shadow-sm uppercase text-center transition-all",
                isDesktopView ? "text-3xl sm:text-4xl md:text-5xl my-4" : "text-xl sm:text-2xl"
              )}>
                {t('Our Sacred Services', 'हमारी पवित्र सेवाएँ')}
              </h1>
            </div>

            <p className={cn(
              "text-slate-600 text-center leading-relaxed font-medium mx-auto transition-all",
              isDesktopView ? "text-base sm:text-lg max-w-2xl mb-12 px-4" : "text-[11px] sm:text-sm mb-8 px-2"
            )}>
              {t('Comprehensive astrological solutions tailored to your unique planetary signature.', 'आपकी अद्वितीय ग्रहों की स्थिति के अनुसार व्यापक ज्योतिषीय समाधान।')}
            </p>

            <div className={cn(
              "transition-all",
              isDesktopView ? "grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-left" : "space-y-6 text-left"
            )}>
              {[
                {
                  title: 'BIRTH CHART ANALYSIS',
                  titleHi: 'जन्म कुंडली विश्लेषण',
                  description: 'Get detailed insights and time-bound predictions for your birth chart analysis based on authentic Vedic planetary positions.',
                  descriptionHi: 'प्रामाणिक वैदिक ग्रहों की स्थिति के आधार पर अपनी जन्म कुंडली विश्लेषण के लिए विस्तृत अंतर्दृष्टि और समयबद्ध भविष्यवाणियां प्राप्त करें।',
                  color: '#3B82F6',
                },
                {
                  title: 'CAREER PREDICTIONS',
                  titleHi: 'करियर भविष्यवाणियां',
                  description: 'Identify the ideal profession, promotion timelines, and strategic windows for professional and business success.',
                  descriptionHi: 'अपने करियर, पदोन्नति के समय और पेशेवर तथा व्यावसायिक सफलता के लिए सही रणनीतिक अवसरों की पहचान करें।',
                  color: '#22C55E',
                },
                {
                  title: 'MARRIAGE & RELATIONSHIP',
                  titleHi: 'विवाह और संबंध',
                  description: 'Deep compatibility matching, auspicious timing for marriage, and holistic harmony predictions.',
                  descriptionHi: 'गहन अनुकूलता मिलान, विवाह के लिए शुभ समय और समग्र दांपत्य सुख की भविष्यवाणियां।',
                  color: '#EC4899',
                },
                {
                  title: 'WEALTH & PROSPERITY',
                  titleHi: 'धन और समृद्धि',
                  description: 'Analyze wealth yogas, asset accumulation timelines, and financial prosperity throughout life phases.',
                  descriptionHi: 'धन योग, संपत्ति संचय के समय और जीवन के विभिन्न चरणों में वित्तीय समृद्धि का विश्लेषण करें।',
                  color: '#10B981',
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/60 shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5",
                    isDesktopView ? "p-8 sm:p-10 min-h-[240px]" : "p-6"
                  )}
                >
                  <div>
                    <div
                      className="h-2 w-full -mt-2 mb-4 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    <h3 className={cn(
                      "font-bold text-slate-800 tracking-wide",
                      isDesktopView ? "text-xl sm:text-2xl mb-3" : "text-sm sm:text-base mb-2"
                    )}>
                      {t(service.title, service.titleHi)}
                    </h3>
                    <p className={cn(
                      "text-slate-500 leading-relaxed",
                      isDesktopView ? "text-sm sm:text-base mb-6" : "text-[11px] sm:text-[13px] mb-4"
                    )}>
                      {t(service.description, service.descriptionHi)}
                    </p>
                  </div>
                  <button 
                    onClick={() => navigate('/all-services')}
                    className={cn(
                      "text-blue-600 font-extrabold tracking-widest hover:text-blue-700 transition-colors uppercase self-start cursor-pointer",
                      isDesktopView ? "text-xs sm:text-sm" : "text-[10px] sm:text-[11px]"
                    )}
                  >
                    {t('Learn More & Book →', 'और जानें और बुक करें →')}
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Full-Width Explore Banner */}
            <div className={cn(
              "w-full text-center transition-all",
              isDesktopView ? "mt-14 mb-8" : "mt-12 pb-8 px-2"
            )}>
              <div className={cn(
                "bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl border border-white/20 shadow-xl",
                isDesktopView ? "p-10 sm:p-14" : "p-6"
              )}>
                <h2 className={cn(
                  "text-white font-bold uppercase tracking-wide leading-tight drop-shadow-sm",
                  isDesktopView ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl"
                )}>
                  {t('Explore and Book Our Astrological Services', 'हमारी ज्योतिषीय सेवाओं का अन्वेषण करें')}
                </h2>
                <p className={cn(
                  "text-orange-50 mt-3 max-w-xl mx-auto font-medium",
                  isDesktopView ? "text-base sm:text-lg mb-8" : "text-xs mb-6"
                )}>
                  {t(
                    'Browse our full catalogue of 20+ specialized Bhrigu Nandi astrology readings with instant online checkout.',
                    'ऑनलाइन त्वरित चेकआउट के साथ हमारी 20+ विशेष भृगु नंदी ज्योतिष सेवाओं की पूरी सूची देखें।'
                  )}
                </p>
                <button 
                  onClick={() => navigate('/all-services')}
                  type="button" 
                  className={cn(
                    "bg-white text-orange-600 hover:bg-orange-50 font-black rounded-2xl shadow-xl transition-all inline-flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest cursor-pointer",
                    isDesktopView ? "h-16 sm:h-18 px-12 text-base sm:text-lg" : "py-3.5 px-8 rounded-full text-xs w-full"
                  )}
                >
                  {t('Explore & Book Services', 'हमारी सेवाओं को बुक करें')} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Footer Section */}
        <div className={cn(
          "w-full transition-all",
          isDesktopView ? "mt-16 pb-12" : "mt-12 pb-8"
        )}>
          <div className="flex flex-col items-center gap-5">
            <p className={cn(
              "text-slate-400 font-bold tracking-widest uppercase text-center",
              isDesktopView ? "text-sm sm:text-base" : "text-[11px]"
            )}>
              {t('Trusted by 10,000+ Seekers Worldwide', 'विश्व भर में 10,000+ साधकों द्वारा भरोसेमंद')}
            </p>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div 
                  key={i} 
                  className={cn(
                    "rounded-full border-2 border-slate-900 bg-slate-200 flex items-center justify-center shadow-lg overflow-hidden transform hover:scale-110 transition-transform cursor-pointer",
                    isDesktopView ? "w-14 h-14" : "w-10 h-10"
                  )}
                >
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className={cn(
                "rounded-full border-2 border-slate-900 bg-[#4272e8] flex items-center justify-center text-white font-bold shadow-lg",
                isDesktopView ? "w-14 h-14 text-sm" : "w-10 h-10 text-[10px]"
              )}>
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
