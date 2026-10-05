import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { LogIn, Eye, Sparkles, Globe, ChevronDown, CheckCircle2, ArrowRight, Home, Info, PhoneCall, Monitor, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false);
      toast.success(t('Successfully logged in!', 'सफलतापूर्वक लॉग इन किया गया!'));
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950">
      <StarField count={100} />

      <div className={cn(
        "relative z-10 w-full transition-all duration-300 ease-in-out",
        isDesktopView ? "max-w-6xl px-4 sm:px-8 py-10 sm:py-16" : "max-w-md px-4 py-8"
      )}>
        <div className={cn(
          "glass-card flex flex-col justify-center rounded-3xl border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 text-center relative overflow-hidden transition-all duration-300",
          isDesktopView ? "p-8 sm:p-12 space-y-10" : "p-4"
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
                isDesktopView ? "gap-10 sm:gap-14 text-base sm:text-lg" : "gap-4 sm:gap-5 text-[11px] sm:text-[13px]"
              )}>
                <button
                  onClick={() => navigate('/')}
                  type="button"
                  className="flex items-center gap-2 text-yellow-300 border-b-2 border-yellow-300 transition-colors uppercase sm:capitalize"
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

            {/* Language, View and Currency Toggles Row */}
            <div className={cn(
              "w-full flex flex-wrap items-center justify-center transition-all",
              isDesktopView ? "py-5 px-6 gap-4" : "py-3 px-3 sm:px-5 gap-2.5 sm:gap-3"
            )}>
              {/* Toggle button placed before language dropdown menu */}
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

            {/* Home Page Content - Strictly Vertical Above-and-Below Pattern with Enlarged Elements */}
            <div className={cn(
              "w-full transition-all flex flex-col items-center",
              isDesktopView ? "space-y-16 py-10 px-4 sm:px-8" : "space-y-10 py-6 px-2"
            )}>
              {/* Article 1: Hero Header & Introduction */}
              <div className="w-full text-center space-y-6">
                <h1 className={cn(
                  "font-serif font-extrabold text-blue-700 tracking-tight leading-tight uppercase mx-auto transition-all drop-shadow-sm",
                  isDesktopView ? "text-4xl sm:text-5xl lg:text-6xl max-w-4xl" : "text-2xl sm:text-3xl"
                )}>
                  {t('KNOW YOUR DESTINY With Bhrigu Nandi Astrology', 'भृगु नंदी ज्योतिष के साथ अपना भाग्य जानें')}
                </h1>

                <p className={cn(
                  "text-slate-700 leading-relaxed font-semibold mx-auto transition-all",
                  isDesktopView ? "text-xl sm:text-2xl max-w-3xl" : "text-sm sm:text-base max-w-md"
                )}>
                  {t(
                    'Expert guidance specializing in Bhrigu Nandi Nadi (BNN) and authentic Vedic Astrology. Discover clarity for your career, marriage, health, and future life path.',
                    'भृगु नंदी नाड़ी (बीएनएन) और प्रामाणिक वैदिक ज्योतिष में विशेषज्ञ मार्गदर्शन। अपने करियर, शादी, स्वास्थ्य और भविष्य के लिए स्पष्टता खोजें।'
                  )}
                </p>
              </div>

              {/* Primary CTA Box - Vertically Stacked */}
              <div className="w-full flex justify-center">
                <form onSubmit={handleLogin} className="w-full max-w-2xl">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className={cn(
                      "w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-3xl transition-all shadow-[0_12px_40px_rgba(234,88,12,0.4)] hover:shadow-[0_16px_50px_rgba(234,88,12,0.6)] flex items-center justify-between active:scale-[0.98] cursor-pointer border border-white/20",
                      isDesktopView ? "h-24 sm:h-28 px-8 sm:px-12" : "h-20 px-6"
                    )}
                  >
                    {isLoading ? (
                      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                    ) : (
                      <div className="flex items-center justify-between w-full gap-4">
                        <div className="flex flex-col text-left">
                          <span className={cn(
                            "font-black tracking-wide drop-shadow-sm",
                            isDesktopView ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                          )}>
                            {t('Generate Your Kundali', 'अपनी कुंडली बनाएं')}
                          </span>
                          <span className={cn(
                            "font-semibold text-white/95 drop-shadow-sm mt-1",
                            isDesktopView ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                          )}>
                            {t('& Know Your Daily Horoscope', '& अपना दैनिक राशिफल जानें')}
                          </span>
                        </div>
                        <ArrowRight className={cn(
                          "text-white shrink-0",
                          isDesktopView ? "w-8 h-8" : "w-6 h-6"
                        )} />
                      </div>
                    )}
                  </Button>
                </form>
              </div>

              {/* Action Buttons - Stacked Vertically in an Above and Below Pattern */}
              <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto">
                <button
                  onClick={() => navigate('/services')}
                  type="button"
                  className={cn(
                    "w-full bg-orange-400 hover:bg-orange-500 text-white rounded-2xl font-bold shadow-lg transition-all active:scale-95 uppercase tracking-wider cursor-pointer",
                    isDesktopView ? "py-5 px-8 text-lg" : "py-3.5 px-6 text-sm"
                  )}
                >
                  {t('Explore Our Services', 'हमारी सेवाएँ देखें')}
                </button>
                <button
                  onClick={() => navigate('/services')}
                  type="button" 
                  className={cn(
                    "w-full bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-400 rounded-2xl font-bold shadow-lg transition-all active:scale-95 uppercase tracking-wider cursor-pointer",
                    isDesktopView ? "py-5 px-8 text-lg" : "py-3.5 px-6 text-sm"
                  )}
                >
                  {t('Book Astro Services', 'एस्ट्रो सेवाएं बुक करें')}
                </button>
              </div>

              {/* Image 1: Maharishi Bhrigu (Enlarged & Vertically Centered) */}
              <div className={cn(
                "w-full max-w-2xl mx-auto flex flex-col items-center text-center bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/60 shadow-xl transition-all hover:shadow-2xl",
                isDesktopView ? "p-10 sm:p-14" : "p-6"
              )}>
                <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-300/50 bg-white/50 group">
                  <img
                    src="/maharishi_bhrigu.png"
                    alt="Maharishi Bhrigu"
                    className={cn(
                      "aspect-square object-cover group-hover:scale-105 transition-transform duration-500",
                      isDesktopView ? "w-[340px] sm:w-[420px]" : "w-[240px] sm:w-[280px]"
                    )}
                  />
                </div>
                <h3 className={cn(
                  "font-serif font-bold text-blue-800 uppercase tracking-wider",
                  isDesktopView ? "text-2xl sm:text-3xl mt-6" : "text-lg sm:text-xl mt-4"
                )}>
                  Maharishi Bhrigu
                </h3>
                <p className={cn(
                  "text-slate-600 font-medium",
                  isDesktopView ? "text-base sm:text-lg mt-2 max-w-md" : "text-xs sm:text-sm mt-1"
                )}>
                  {t('Father of Hindu Astrology & Sage of Bhrigu Samhita', 'वैदिक ज्योतिष के प्रवर्तक एवं भृगु संहिता के रचयिता')}
                </p>
              </div>

              {/* Image 2: The Sacred Scripture of BNN (Directly Below Image 1, NOT side by side) */}
              <div className={cn(
                "w-full max-w-2xl mx-auto flex flex-col items-center text-center bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/60 shadow-xl transition-all hover:shadow-2xl",
                isDesktopView ? "p-10 sm:p-14" : "p-6"
              )}>
                <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-300/50 bg-white/50 group">
                  <img
                    src="/ancient_book.png"
                    alt="Bhrigu Nandi Nadi Astrology Book"
                    className={cn(
                      "aspect-square object-cover group-hover:scale-105 transition-transform duration-500",
                      isDesktopView ? "w-[340px] sm:w-[420px]" : "w-[240px] sm:w-[280px]"
                    )}
                  />
                </div>
                <h3 className={cn(
                  "font-serif font-bold text-blue-800 uppercase tracking-wider",
                  isDesktopView ? "text-2xl sm:text-3xl mt-6" : "text-lg sm:text-xl mt-4"
                )}>
                  {t('The Sacred Scripture of BNN', 'बीएनएन का पवित्र ग्रंथ')}
                </h3>
                <p className={cn(
                  "text-slate-600 font-medium",
                  isDesktopView ? "text-base sm:text-lg mt-2 max-w-md" : "text-xs sm:text-sm mt-1"
                )}>
                  {t('Ancient manuscript embodying the timeless secrets of planetary transits', 'ग्रहों के गोचर और नियति के शाश्वत रहस्यों को समाहित करने वाला प्राचीन ग्रंथ')}
                </p>
              </div>

              {/* Article 2: Meet The Visionary Astrologer (Directly Below, Vertically Aligned) */}
              <div className={cn(
                "w-full max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/60 shadow-xl text-center flex flex-col items-center transition-all hover:shadow-2xl",
                isDesktopView ? "p-10 sm:p-14 space-y-8" : "p-6 sm:p-8 space-y-6"
              )}>
                <h2 className={cn(
                  "font-serif font-extrabold text-blue-700 tracking-tight uppercase leading-tight",
                  isDesktopView ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl sm:text-3xl"
                )}>
                  MEET THE VISIONARY ASTROLOGER
                </h2>

                <p className={cn(
                  "text-slate-700 leading-relaxed font-semibold max-w-2xl mx-auto",
                  isDesktopView ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                )}>
                  {t(
                    'With over 10 years of experience in Vedic Astrology Sciences, Acharya Dr. S.K. has dedicated his life to helping individuals find their true path. His mastery over Bhrigu Nandi Nadi (BNN) allows for exceptionally detailed and accurate predictions that go beyond traditional methods.',
                    'वैदिक ज्योतिष विज्ञान में 10 से अधिक वर्षों के अनुभव के साथ, आचार्य डॉ. एस.के. ने व्यक्तियों को उनके सच्चे मार्ग को खोजने में मदद करने के लिए अपना जीवन समर्पित किया है। भृगु नंदी नाड़ी (बीएनएन) पर उनकी महारत असाधारण रूप से विस्तृत और सटीक भविष्यवाणियों की अनुमति देती है।'
                  )}
                </p>

                {/* 4 Feature/Credential Boxes - Placed One Below The Other Vertically */}
                <div className="w-full space-y-4">
                  {[
                    t("Master of BNN / Vedic Astrology & Philosophy", "बीएनएन / वैदिक ज्योतिष और दर्शन के विशेषज्ञ"),
                    t("Expert in Bhrigu Nandi Nadi (BNN) Analysis", "भृगु नंदी नाड़ी (बीएनएन) विश्लेषण में विशेषज्ञ"),
                    t("Specialist in Career & Financial Growth", "करियर और वित्तीय विकास में विशेषज्ञ"),
                    t("Helping clients Globally with Most Accurate Remedies", "सटीक उपायों के साथ वैश्विक स्तर पर ग्राहकों का मार्गदर्शन")
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-full bg-white/90 rounded-2xl border border-blue-100 shadow-md flex items-center gap-4 text-left transition-all hover:border-blue-300 hover:shadow-lg",
                        isDesktopView ? "p-6 sm:p-7" : "p-4"
                      )}
                    >
                      <CheckCircle2 className={cn(
                        "text-[#4272e8] shrink-0",
                        isDesktopView ? "w-8 h-8" : "w-5 h-5"
                      )} />
                      <span className={cn(
                        "text-slate-900 font-bold leading-snug",
                        isDesktopView ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                      )}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA to start Kundali */}
              <div className="w-full max-w-2xl mx-auto pb-4">
                <Button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className={cn(
                    "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer",
                    isDesktopView ? "h-20 text-xl" : "h-16 text-base"
                  )}
                >
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <span>{t('Begin Your Astrological Journey Now', 'अपनी ज्योतिषीय यात्रा अभी शुरू करें')}</span>
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
