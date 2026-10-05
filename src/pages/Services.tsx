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
import { NavigationLinks } from '@/components/NavigationLinks';
import { cn } from '@/lib/utils';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();

  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-x-hidden bg-white">
      {/* Unified Main Container */}
      <div className={cn(
        "relative z-10 w-full transition-all duration-300 ease-in-out flex flex-col items-center",
        isDesktopView ? "w-full pt-0 pb-16" : "max-w-md px-4 pt-4 pb-8"
      )}>
        {/* Top Header Group */}
        <header className={cn(
          "w-full relative z-20 flex flex-col items-center bg-white/95 backdrop-blur-xl border-blue-200/70 rounded-none overflow-hidden transition-all",
          isDesktopView ? "border-x-0 border-t-0 border-b shadow-sm" : "border border-b-0 shadow-xl"
        )}>
          {/* Top Heading with matching amber-orange gradient and font size/bold matching KNOW YOUR DESTINY */}
          <div className={cn("w-full transition-all text-center", isDesktopView ? "py-6 sm:py-8 max-w-7xl mx-auto px-4" : "py-4 sm:py-5 px-2")}>
            <h1 className={cn(
              "text-center font-display font-black tracking-tight leading-tight drop-shadow-md px-2 transition-all uppercase",
              "bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 bg-clip-text text-transparent",
              isDesktopView ? "text-4xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-3xl"
            )}>
              BHRIGU NANDI ASTROLOGY
            </h1>
          </div>

          {/* Navigation Blue Strip - 100% Full Width of Page */}
          <div className="w-full">
            <NavigationLinks className="w-full" />
          </div>

          {/* Language, View Mode and Currency Toggles Row */}
          <div className={cn(
            "w-full flex flex-wrap items-center justify-center transition-all bg-gradient-to-b from-blue-50/50 to-white/40 border-b border-blue-100/60",
            isDesktopView ? "py-4 px-6 gap-4" : "py-2.5 px-3 gap-2.5"
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
              <PhoneCall className={isDesktopView ? "w-4 h-4 text-blue-600" : "w-3.5 h-3.5 text-blue-600"} />
              <span>Contact</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <div className={cn(
          "flex flex-col rounded-none relative overflow-hidden transition-all duration-300 w-full",
          isDesktopView
            ? "border-0 shadow-none bg-white p-8 sm:p-14 space-y-12 max-w-6xl mx-auto"
            : "glass-card border-t-0 border border-blue-300 border-opacity-50 bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl shadow-blue-400 shadow-opacity-30 p-4 sm:p-6 space-y-8"
        )}>

            {/* Astro Services Page Content - Strictly Vertical Above-and-Below Pattern with Enlarged Elements */}
            <div className={cn(
              "w-full transition-all flex flex-col items-center",
              isDesktopView ? "space-y-16 py-10 px-4 sm:px-8" : "space-y-10 py-6 px-2"
            )}>
              {/* Article 1: Heading */}
              <div className="w-full text-center space-y-6">
                <h1 className={cn(
                  "font-serif font-extrabold text-blue-700 tracking-tight leading-tight uppercase mx-auto transition-all drop-shadow-sm",
                  isDesktopView ? "text-4xl sm:text-5xl lg:text-6xl max-w-4xl" : "text-2xl sm:text-3xl"
                )}>
                  {t('Our Sacred Services', 'हमारी पवित्र सेवाएँ')}
                </h1>
                <p className={cn(
                  "text-slate-700 leading-relaxed font-semibold mx-auto transition-all",
                  isDesktopView ? "text-xl sm:text-2xl max-w-3xl" : "text-sm sm:text-base max-w-md"
                )}>
                  {t(
                    'Comprehensive astrological solutions tailored to your unique planetary signature.',
                    'आपकी अद्वितीय ग्रहों की स्थिति के अनुसार व्यापक ज्योतिषीय समाधान।'
                  )}
                </p>
              </div>

              {/* Top CTA Button - Vertically Stacked */}
              <div className="w-full max-w-3xl">
                <button
                  onClick={() => navigate('/all-services')}
                  className={cn(
                    "w-full bg-[#FB923C] hover:bg-orange-500 text-white rounded-3xl flex items-center justify-center gap-3 font-black transition-all active:scale-95 uppercase tracking-widest group shadow-xl shadow-orange-500/25 cursor-pointer",
                    isDesktopView ? "h-20 sm:h-24 text-lg sm:text-xl px-10" : "py-4 px-6 text-sm"
                  )}
                >
                  {t('Explore & Book Services', 'सेवाओं का अन्वेषण करें')}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

              {/* Image 1 Card: Maharishi Bhrigu - Vertically Stacked */}
              <div className="flex flex-col items-center group w-full max-w-2xl bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-blue-200/50 shadow-md">
                <div className={cn(
                  "overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-200/80 bg-white/60 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/30 group-hover:border-blue-300 mx-auto",
                  "w-[300px] sm:w-[400px] aspect-square"
                )}>
                  <img
                    src="/maharishi_bhrigu.png"
                    alt="Maharishi Bhrigu"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xl sm:text-2xl text-blue-700 font-serif font-bold uppercase tracking-widest text-center">
                  {t('Maharishi Bhrigu', 'महर्षि भृगु')}
                </p>
              </div>

              {/* Image 2 Card: Sacred Ancient Manuscript - Directly Below Image 1 */}
              <div className="flex flex-col items-center group w-full max-w-2xl bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-blue-200/50 shadow-md">
                <div className={cn(
                  "overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-200/80 bg-white/60 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/30 group-hover:border-blue-300 mx-auto",
                  "w-[300px] sm:w-[400px] aspect-square"
                )}>
                  <img
                    src="/ancient_book.png"
                    alt="Bhrigu Nandi Nadi Astrology Book"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xl sm:text-2xl text-blue-700 font-serif font-bold uppercase tracking-widest text-center">
                  {t('Sacred Ancient Manuscript', 'पवित्र प्राचीन पांडुलिपि')}
                </p>
              </div>

              {/* Service Cards - Strictly Vertical Above-and-Below Pattern (No Left-Right Layout) */}
              <div className="flex flex-col items-center gap-8 w-full max-w-3xl">
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
                      "w-full bg-white/85 backdrop-blur-md rounded-3xl border border-slate-200/70 shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 text-left",
                      isDesktopView ? "p-10 sm:p-12 space-y-6" : "p-6 space-y-4"
                    )}
                  >
                    <div>
                      <div
                        className="h-2.5 w-full -mt-2 mb-6 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      <h3 className={cn(
                        "font-serif font-extrabold text-slate-800 tracking-wide uppercase",
                        isDesktopView ? "text-2xl sm:text-3xl mb-4" : "text-base sm:text-lg mb-2"
                      )}>
                        {t(service.title, service.titleHi)}
                      </h3>
                      <p className={cn(
                        "text-slate-600 leading-relaxed font-semibold",
                        isDesktopView ? "text-lg sm:text-xl mb-6" : "text-xs sm:text-sm mb-4"
                      )}>
                        {t(service.description, service.descriptionHi)}
                      </p>
                    </div>
                    <button 
                      onClick={() => navigate('/all-services')}
                      className={cn(
                        "text-blue-600 font-extrabold tracking-widest hover:text-blue-700 transition-colors uppercase self-start cursor-pointer flex items-center gap-2",
                        isDesktopView ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                      )}
                    >
                      {t('Learn More & Book →', 'और जानें और बुक करें →')}
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom Full-Width Explore Banner - Vertically Stacked Below */}
              <div className="w-full max-w-3xl">
                <div className={cn(
                  "bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl border border-white/20 shadow-2xl text-center space-y-6",
                  isDesktopView ? "p-10 sm:p-14" : "p-6"
                )}>
                  <h2 className={cn(
                    "text-white font-serif font-extrabold uppercase tracking-wide leading-tight drop-shadow-sm",
                    isDesktopView ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl"
                  )}>
                    {t('Explore and Book Our Astrological Services', 'हमारी ज्योतिषीय सेवाओं का अन्वेषण करें')}
                  </h2>
                  <p className={cn(
                    "text-orange-50 font-medium leading-relaxed max-w-xl mx-auto",
                    isDesktopView ? "text-lg sm:text-xl mb-6" : "text-xs mb-4"
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
                      "w-full bg-white text-orange-600 hover:bg-orange-50 font-black rounded-2xl shadow-xl transition-all inline-flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest cursor-pointer",
                      isDesktopView ? "h-20 sm:h-24 px-12 text-lg sm:text-xl" : "py-4 px-8 text-sm"
                    )}
                  >
                    {t('Explore & Book Services', 'हमारी सेवाओं को बुक करें')} <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Back to Home Button - Vertically Stacked Below */}
              <div className="w-full max-w-3xl">
                <Button
                  onClick={() => navigate('/')}
                  className={cn(
                    "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 active:scale-95 cursor-pointer",
                    isDesktopView ? "h-18 sm:h-20 text-lg sm:text-xl" : "h-12 text-sm rounded-lg"
                  )}
                >
                  <ArrowRight className="w-6 h-6 rotate-180" />
                  {t('Back to Home', 'होम पर वापस जाएं')}
                </Button>
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
