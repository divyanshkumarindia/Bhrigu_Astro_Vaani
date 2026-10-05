import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Globe, Eye, ChevronDown, CheckCircle2, ArrowRight, Target, Lightbulb, TrendingUp, Handshake, Home, Info, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { NavigationLinks } from '@/components/NavigationLinks';
import { cn } from '@/lib/utils';

const Vision = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();

  const values = [
    {
      title: t('Authenticity', 'प्रामाणिकता'),
      description: t('Preserving the sacred purity of Bhrigu Nandi Nadi scriptural wisdom.', 'भृगु नंदी नाड़ी के शास्त्रीय ज्ञान की पवित्र शुद्धता का संरक्षण।'),
      icon: <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
    },
    {
      title: t('Global Reach', 'वैश्विक पहुंच'),
      description: t('Bringing ancient Vedic science to modern seekers across all borders.', 'सभी सीमाओं के पार आधुनिक साधकों के लिए प्राचीन वैदिक विज्ञान लाना।'),
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500" />,
    },
    {
      title: t('Clarity', 'स्पष्टता'),
      description: t('Empowering individuals with actionable insights for a brighter future.', 'उज्जवल भविष्य के लिए व्यक्तियों को क्रियाशील अंतर्दृष्टि के साथ सशक्त बनाना।'),
      icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
    },
    {
      title: t('Growth', 'विकास'),
      description: t('Guiding your journey towards spiritual and material prosperity.', 'आध्यात्मिक और भौतिक समृद्धि की ओर आपकी यात्रा का मार्गदर्शन करना।'),
      icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-x-hidden bg-slate-950">
      <StarField count={100} />

      {/* Unified Main Container - Header and Page Card in Perfect Symmetry */}
      <div className={cn(
        "relative z-10 w-full transition-all duration-300 ease-in-out flex flex-col items-center pt-4 sm:pt-6",
        isDesktopView ? "max-w-6xl px-4 sm:px-8 pb-12 sm:pb-16" : "max-w-md px-4 pb-8"
      )}>
        {/* Top Header Group - Reduced width matching card width in symmetry */}
        <header className="w-full relative z-20 flex flex-col items-center bg-white/95 backdrop-blur-xl border border-b-0 border-blue-200/70 rounded-t-3xl sm:rounded-t-[2.5rem] overflow-hidden shadow-xl">
          {/* Top Heading with matching amber-orange gradient and font size/bold matching KNOW YOUR DESTINY */}
          <div className={cn("w-full transition-all text-center", isDesktopView ? "py-6 sm:py-8" : "py-4 sm:py-5")}>
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
              triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3.5 py-2 rounded-xl flex items-center gap-2 text-blue-700 text-xs sm:text-sm font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
            />
            <button 
              onClick={() => navigate('/contact')}
              type="button" 
              className="flex-shrink-0 bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3.5 py-2 rounded-xl flex items-center gap-2 text-blue-700 text-xs sm:text-sm font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Contact</span>
            </button>
          </div>
        </header>

        {/* Main Content Area - Joined directly to the header with 0 gap */}
        <div className={cn(
          "glass-card flex flex-col rounded-b-3xl sm:rounded-b-[2.5rem] rounded-t-none border-t-0 border border-blue-300 border-opacity-50 bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl shadow-blue-400 shadow-opacity-30 relative overflow-hidden transition-all duration-300 w-full",
          isDesktopView ? "p-8 sm:p-14 space-y-12" : "p-4 sm:p-8"
        )}>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-[#EA580C] to-red-500 opacity-80" />

          {/* Vision Page Content - Strictly Vertical Above-and-Below Pattern with Enlarged Elements */}
          <div className={cn(
            "w-full transition-all flex flex-col items-center",
            isDesktopView ? "space-y-16 py-6 px-4 sm:px-8" : "space-y-10 py-4 px-2"
          )}>
              {/* Article 1: Heading */}
              <div className="w-full text-center space-y-6">
                <h1 className={cn(
                  "font-serif font-extrabold text-[#4272e8] tracking-tight leading-tight uppercase mx-auto transition-all drop-shadow-sm",
                  isDesktopView ? "text-4xl sm:text-5xl lg:text-6xl max-w-4xl" : "text-2xl sm:text-3xl"
                )}>
                  {t('Our Future Vision', 'हमारा भविष्य का दृष्टिकोण')}
                </h1>
                <p className={cn(
                  "text-slate-700 leading-relaxed font-semibold mx-auto transition-all",
                  isDesktopView ? "text-xl sm:text-2xl max-w-3xl" : "text-sm sm:text-base max-w-md"
                )}>
                  {t(
                    'Empowering lives through timeless astrological wisdom and personalized cosmic clarity.',
                    'कालातीत ज्योतिषीय ज्ञान और व्यक्तिगत ब्रह्मांडीय स्पष्टता के माध्यम से जीवन को सशक्त बनाना।'
                  )}
                </p>
              </div>

              {/* Image 1 Card: Maharishi Bhrigu - Vertically Stacked */}
              <div className="flex flex-col items-center group w-full max-w-2xl bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-orange-200/60 shadow-md">
                <div className={cn(
                  "overflow-hidden rounded-3xl shadow-2xl border-4 border-orange-200/80 bg-white/60 backdrop-blur-sm transition-all duration-500 group-hover:shadow-orange-500/30 group-hover:border-orange-400 mx-auto",
                  "w-[300px] sm:w-[400px] aspect-square"
                )}>
                  <img
                    src="/maharishi_bhrigu.png"
                    alt="Maharishi Bhrigu"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xl sm:text-2xl text-orange-700 font-serif font-bold uppercase tracking-widest text-center">
                  {t('Maharishi Bhrigu', 'महर्षि भृगु')}
                </p>
              </div>

              {/* Image 2 Card: Sacred Ancient Manuscript - Directly Below Image 1 */}
              <div className="flex flex-col items-center group w-full max-w-2xl bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-orange-200/60 shadow-md">
                <div className={cn(
                  "overflow-hidden rounded-3xl shadow-2xl border-4 border-orange-200/80 bg-white/60 backdrop-blur-sm transition-all duration-500 group-hover:shadow-orange-500/30 group-hover:border-orange-400 mx-auto",
                  "w-[300px] sm:w-[400px] aspect-square"
                )}>
                  <img
                    src="/ancient_book.png"
                    alt="Bhrigu Nandi Nadi Astrology Book"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xl sm:text-2xl text-orange-700 font-serif font-bold uppercase tracking-widest text-center">
                  {t('Sacred Ancient Manuscript', 'पवित्र प्राचीन पांडुलिपि')}
                </p>
              </div>

              {/* Section 1: Our Vision Article Box - Vertically Stacked Below Images */}
              <section className={cn(
                "w-full max-w-3xl bg-white/60 backdrop-blur-md rounded-3xl border border-orange-200/60 shadow-lg text-left transition-all",
                isDesktopView ? "p-10 sm:p-14 space-y-6" : "p-6 space-y-4"
              )}>
                <h3 className={cn(
                  "font-serif font-extrabold text-orange-800 flex items-center gap-3 uppercase tracking-tight",
                  isDesktopView ? "text-3xl sm:text-4xl md:text-5xl" : "text-xl sm:text-2xl"
                )}>
                  <Sparkles className={cn(isDesktopView ? "w-8 h-8 sm:w-10 sm:h-10 text-orange-500" : "w-6 h-6 text-orange-500")} />
                  {t('Our Vision', 'हमारा दृष्टिकोण')}
                </h3>
                <p className={cn(
                  "leading-relaxed font-semibold text-slate-700",
                  isDesktopView ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
                )}>
                  {t(
                    'To democratize access to the profound wisdom of Bhrigu Nandi Nadi Astrology, enabling every individual to navigate life\'s complexities with divine clarity and cosmic confidence.',
                    'भृगु नंदी नाड़ी ज्योतिष के गहन ज्ञान तक पहुंच को लोकतांत्रिक बनाना, जिससे प्रत्येक व्यक्ति ईश्वरीय स्पष्टता और ब्रह्मांडीय आत्मविश्वास के साथ जीवन की जटिलताओं को नेविगेट कर सके।'
                  )}
                </p>
              </section>

              {/* Section 2: Core Strategic Goals - Vertically Stacked with No Side-by-Side Items */}
              <section className={cn(
                "w-full max-w-3xl bg-orange-50/80 rounded-3xl border border-orange-200/70 shadow-lg transition-all",
                isDesktopView ? "p-10 sm:p-14 space-y-8" : "p-6 space-y-6"
              )}>
                <h3 className={cn(
                  "font-serif font-extrabold text-orange-800 uppercase tracking-wide text-left",
                  isDesktopView ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl"
                )}>
                  {t('Core Strategic Goals', 'मुख्य रणनीतिक लक्ष्य')}
                </h3>
                
                {/* 4 Strategic Goals Stacked Purely Vertically Above and Below */}
                <div className="flex flex-col items-center gap-6 w-full">
                  {values.map((val, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "w-full bg-white/90 rounded-3xl shadow-md border border-orange-100 flex items-center transition-all hover:shadow-xl hover:border-orange-300",
                        isDesktopView ? "p-8 sm:p-10 gap-8" : "p-5 gap-4"
                      )}
                    >
                      <div className={cn(
                        "bg-orange-50 rounded-2xl flex-shrink-0 flex items-center justify-center",
                        isDesktopView ? "p-5" : "p-3.5"
                      )}>
                        {val.icon}
                      </div>
                      <div className="text-left space-y-1 sm:space-y-2">
                        <h4 className={cn(
                          "font-bold text-slate-800 uppercase tracking-wide",
                          isDesktopView ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                        )}>
                          {val.title}
                        </h4>
                        <p className={cn(
                          "text-slate-600 leading-relaxed font-medium",
                          isDesktopView ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                        )}>
                          {val.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Commitment to You - Vertically Stacked Below Goals */}
              <section className={cn(
                "w-full max-w-3xl bg-white/60 backdrop-blur-md rounded-3xl border border-blue-200/60 shadow-lg text-left transition-all",
                isDesktopView ? "p-10 sm:p-14 space-y-6" : "p-6 space-y-4"
              )}>
                <h3 className={cn(
                  "font-serif font-extrabold text-blue-700 flex items-center gap-3 uppercase tracking-tight",
                  isDesktopView ? "text-3xl sm:text-4xl md:text-5xl" : "text-xl sm:text-2xl"
                )}>
                  <Handshake className={cn(isDesktopView ? "w-8 h-8 sm:w-10 sm:h-10 text-blue-500" : "w-6 h-6 text-blue-500")} />
                  {t('Commitment to You', 'आपके प्रति प्रतिबद्धता')}
                </h3>
                <p className={cn(
                  "leading-relaxed font-semibold text-slate-700",
                  isDesktopView ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
                )}>
                  {t(
                    'We envision a world where astrology is not used for fear-mongering, but as a sophisticated tool for personal empowerment, self-discovery, and strategic life planning.',
                    'हम एक ऐसी दुनिया की कल्पना करते हैं जहाँ ज्योतिष का उपयोग भय फैलाने के लिए नहीं, बल्कि व्यक्तिगत सशक्तिकरण, आत्म-खोज और रणनीतिक जीवन योजना के लिए एक परिष्कृत उपकरण के रूप में किया जाता है।'
                  )}
                </p>
              </section>

              {/* Explore Sacred Services Button - Vertically Stacked Below */}
              <div className="w-full max-w-3xl">
                <button
                  onClick={() => navigate('/services')}
                  type="button"
                  className={cn(
                    "w-full bg-[#4272e8] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-wider active:scale-[0.99] cursor-pointer",
                    isDesktopView ? "h-20 sm:h-24 text-lg sm:text-xl" : "py-4 px-6 text-sm"
                  )}
                >
                  {t('Explore Our Sacred Services', 'हमारी पवित्र सेवाओं का लाभ उठाएं')} <ArrowRight className="w-6 h-6" />
                </button>
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
        </div>
      </div>
  );
};

export default Vision;
