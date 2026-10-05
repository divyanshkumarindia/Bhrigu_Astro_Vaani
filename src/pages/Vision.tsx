import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Globe, Eye, ChevronDown, CheckCircle2, ArrowRight, Target, Lightbulb, TrendingUp, Handshake, Home, Info, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { cn } from '@/lib/utils';

const Vision = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();

  const values = [
    {
      title: t('Authenticity', 'प्रामाणिकता'),
      description: t('Preserving the sacred purity of Bhrigu Nandi Nadi scriptural wisdom.', 'भृगु नंदी नाड़ी के शास्त्रीय ज्ञान की पवित्र शुद्धता का संरक्षण।'),
      icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />,
    },
    {
      title: t('Global Reach', 'वैश्विक पहुंच'),
      description: t('Bringing ancient Vedic science to modern seekers across all borders.', 'सभी सीमाओं के पार आधुनिक साधकों के लिए प्राचीन वैदिक विज्ञान लाना।'),
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: t('Clarity', 'स्पष्टता'),
      description: t('Empowering individuals with actionable insights for a brighter future.', 'उज्जवल भविष्य के लिए व्यक्तियों को क्रियाशील अंतर्दृष्टि के साथ सशक्त बनाना।'),
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: t('Growth', 'विकास'),
      description: t('Guiding your journey towards spiritual and material prosperity.', 'आध्यात्मिक और भौतिक समृद्धि की ओर आपकी यात्रा का मार्गदर्शन करना।'),
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950">
      <StarField count={100} />

      <div className={cn(
        "relative z-10 w-full transition-all duration-300 ease-in-out",
        isDesktopView ? "max-w-6xl px-4 sm:px-8 py-10 sm:py-16" : "max-w-md px-4 py-8"
      )}>
        <div className={cn(
          "glass-card flex flex-col rounded-3xl border border-blue-300 border-opacity-50 bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl shadow-blue-400 shadow-opacity-30 relative overflow-hidden transition-all duration-300",
          isDesktopView ? "p-8 sm:p-14 space-y-12 rounded-[2.5rem]" : "p-4 sm:p-8"
        )}>

          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-[#EA580C] to-red-500 opacity-80" />

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
              "bg-[#4272e8] w-full flex items-center border-b-[3px] border-white border-opacity-90 shadow-lg overflow-x-auto no-scrollbar transition-all",
              isDesktopView ? "py-4 px-8 justify-center" : "py-2.5 px-3 sm:px-5 space-x-2 sm:justify-between"
            )}>
              <div className={cn(
                "flex text-white font-bold tracking-wide whitespace-nowrap",
                isDesktopView ? "gap-10 sm:gap-14 text-base sm:text-lg" : "gap-4 sm:gap-5 text-[11px] sm:text-[13px]"
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
                  className="flex items-center gap-2 text-yellow-300 border-b-2 border-yellow-300 transition-colors uppercase sm:capitalize"
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

            {/* Language, View Mode and Currency Toggles Row */}
            <div className={cn(
              "w-full flex flex-wrap items-center justify-center transition-all",
              isDesktopView ? "py-5 px-6 gap-4" : "py-3 px-3 sm:px-5 gap-2.5 sm:gap-3"
            )}>
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

            <div className="w-full px-4 mt-8 text-center">
              <h1 className={cn(
                "font-display font-bold text-[#4272e8] tracking-tight text-center drop-shadow-sm uppercase transition-all",
                isDesktopView ? "text-3xl sm:text-4xl mb-4" : "text-2xl sm:text-3xl"
              )}>
                {t('Our Future Vision', 'हमारा भविष्य का दृष्टिकोण')}
              </h1>

              {/* Both Sacred Pictures Sized According to Page View */}
              <div className={cn(
                "w-full px-4",
                isDesktopView 
                  ? "grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto items-center my-10" 
                  : "flex flex-col items-center gap-6 mt-8"
              )}>
                <div className="flex flex-col items-center group w-full">
                  <div className={cn(
                    "overflow-hidden rounded-3xl shadow-2xl border-4 border-orange-200/70 bg-white/60 backdrop-blur-sm transition-all duration-500 group-hover:shadow-orange-500/20 group-hover:border-orange-400 mx-auto",
                    isDesktopView ? "w-full max-w-md aspect-square" : "w-64 sm:w-72 aspect-square"
                  )}>
                    <img
                      src="/maharishi_bhrigu.png"
                      alt="Maharishi Bhrigu"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3.5 text-sm sm:text-base text-orange-700 font-bold uppercase tracking-widest">
                    {t('Maharishi Bhrigu', 'महर्षि भृगु')}
                  </p>
                </div>
                
                <div className="flex flex-col items-center group w-full">
                  <div className={cn(
                    "overflow-hidden rounded-3xl shadow-2xl border-4 border-orange-200/70 bg-white/60 backdrop-blur-sm transition-all duration-500 group-hover:shadow-orange-500/20 group-hover:border-orange-400 mx-auto",
                    isDesktopView ? "w-full max-w-md aspect-square" : "w-64 sm:w-72 aspect-square"
                  )}>
                    <img
                      src="/ancient_book.png"
                      alt="Bhrigu Nandi Nadi Astrology Book"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3.5 text-sm sm:text-base text-orange-700 font-bold uppercase tracking-widest">
                    {t('Sacred Ancient Manuscript', 'पवित्र प्राचीन पांडुलिपि')}
                  </p>
                </div>
              </div>

              <div className={cn(
                "space-y-10 text-left",
                isDesktopView ? "my-12 max-w-4xl mx-auto" : "mt-10"
              )}>
                <section className={cn(
                  "transition-all",
                  isDesktopView ? "p-8 sm:p-12 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-orange-200/50 shadow-md" : ""
                )}>
                  <h3 className={cn("font-bold text-slate-800 mb-3 flex items-center gap-2.5", isDesktopView ? "text-xl sm:text-2xl text-orange-800" : "text-lg")}>
                    <Sparkles className={cn(isDesktopView ? "w-6 h-6 text-orange-500" : "w-5 h-5 text-orange-500")} />
                    {t('Our Vision', 'हमारा दृष्टिकोण')}
                  </h3>
                  <p className={cn("leading-relaxed font-medium", isDesktopView ? "text-base sm:text-lg text-slate-700" : "text-slate-600 text-sm")}>
                    {t('To democratize access to the profound wisdom of Bhrigu Nandi Nadi Astrology, enabling every individual to navigate life\'s complexities with divine clarity and cosmic confidence.', 'भृगु नंदी नाड़ी ज्योतिष के गहन ज्ञान तक पहुंच को लोकतांत्रिक बनाना, जिससे प्रत्येक व्यक्ति ईश्वरीय स्पष्टता और ब्रह्मांडीय आत्मविश्वास के साथ जीवन की जटिलताओं को नेविगेट कर सके।')}
                  </p>
                </section>

                <section className={cn(
                  "bg-orange-50/70 p-6 rounded-3xl border border-orange-100/80 shadow-sm",
                  isDesktopView ? "p-8 sm:p-12 rounded-[2.5rem]" : "p-6 rounded-2xl"
                )}>
                  <h3 className={cn("font-bold text-orange-800 mb-6 uppercase tracking-wider", isDesktopView ? "text-xl sm:text-2xl" : "text-lg")}>
                    {t('Core Strategic Goals', 'मुख्य रणनीतिक लक्ष्य')}
                  </h3>
                  <div className={cn("grid gap-6", isDesktopView ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
                    {values.map((val, idx) => (
                      <div key={idx} className={cn(
                        "bg-white/90 rounded-2xl shadow-sm border border-orange-100 flex items-start",
                        isDesktopView ? "p-6 gap-4" : "p-4 gap-3"
                      )}>
                        <div className="shrink-0 mt-1">{val.icon}</div>
                        <div>
                          <h4 className={cn("font-black text-slate-800 uppercase tracking-wide", isDesktopView ? "text-sm sm:text-base" : "text-xs sm:text-sm")}>
                            {val.title}
                          </h4>
                          <p className={cn("text-slate-600 mt-1.5 leading-relaxed font-medium", isDesktopView ? "text-xs sm:text-sm" : "text-[11px] sm:text-xs")}>
                            {val.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={cn(
                  "transition-all",
                  isDesktopView ? "p-8 sm:p-12 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-blue-200/50 shadow-md" : "pb-10"
                )}>
                  <h3 className={cn("font-bold text-slate-800 mb-3 flex items-center gap-2.5", isDesktopView ? "text-xl sm:text-2xl text-blue-700" : "text-lg")}>
                    <Handshake className={cn(isDesktopView ? "w-6 h-6 text-blue-500" : "w-5 h-5 text-blue-500")} />
                    {t('Commitment to You', 'आपके प्रति प्रतिबद्धता')}
                  </h3>
                  <p className={cn("leading-relaxed font-medium", isDesktopView ? "text-base sm:text-lg text-slate-700" : "text-slate-600 text-sm")}>
                    {t('We envision a world where astrology is not used for fear-mongering, but as a sophisticated tool for personal empowerment, self-discovery, and strategic life planning.', 'हम एक ऐसी दुनिया की कल्पना करते हैं जहाँ ज्योतिष का उपयोग भय फैलाने के लिए नहीं, बल्कि व्यक्तिगत सशक्तिकरण, आत्म-खोज और रणनीतिक जीवन योजना के लिए एक परिष्कृत उपकरण के रूप में किया जाता है।')}
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className={cn("w-full mb-8", isDesktopView ? "px-8 mt-12" : "px-16 mt-8")}>
            <Button
              onClick={() => navigate('/')}
              className={cn(
                "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-2xl transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-3 active:scale-95",
                isDesktopView ? "h-16 text-base sm:text-lg" : "h-11 text-sm rounded-lg"
              )}
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              {t('Back to Home', 'होम पर वापस जाएं')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
