import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { LogIn, Eye, Sparkles, Globe, ChevronDown, CheckCircle2, ArrowRight, Home, Info, PhoneCall, Monitor, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { NavigationLinks } from '@/components/NavigationLinks';
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

          {/* Navigation Blue Strip - 100% Full Width of this symmetric header */}
          <div className="w-full">
            <NavigationLinks className="w-full" />
          </div>

          {/* Language, View and Currency Toggles Row */}
          <div className={cn(
            "w-full flex flex-wrap items-center justify-center transition-all bg-gradient-to-b from-blue-50/50 to-white/40 border-b border-blue-100/60",
            isDesktopView ? "py-4 px-6 gap-4" : "py-2.5 px-3 gap-2.5"
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
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Contact</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <div className={cn(
          "flex flex-col justify-center rounded-none text-center relative overflow-hidden transition-all duration-300 w-full",
          isDesktopView
            ? "border-0 shadow-none bg-white p-8 sm:p-14 space-y-12 max-w-6xl mx-auto"
            : "glass-card border-t-0 border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 p-4"
        )}>

          <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-80", isDesktopView && "hidden")} />

          {/* Home Page Content - Strictly Vertical Above-and-Below Pattern with Artistic Celestial Treatment */}
          <div className={cn(
            "w-full transition-all flex flex-col items-center",
            isDesktopView ? "space-y-20 py-4 px-4 sm:px-8" : "space-y-12 py-3 px-2"
          )}>
              {/* Article 1: Hero Header & Introduction */}
              <div className="w-full text-center flex flex-col items-center space-y-6 max-w-4xl mx-auto">
                {/* Sacred Vedic Tradition Pill Badge */}
                <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-amber-50 via-yellow-100/90 to-amber-50 border border-amber-300/80 shadow-[0_4px_16px_rgba(245,158,11,0.2)]">
                  <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span className="text-amber-800 font-serif font-black tracking-[0.2em] text-xs sm:text-sm uppercase">
                    {t('॥ श्री भृगुवे नमः ॥ • Authentic Vedic Astrology', '॥ श्री भृगुवे नमः ॥ • प्रामाणिक वैदिक ज्योतिष')}
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                </div>

                {/* Majestic Heading */}
                <div className="space-y-3">
                  <h1 className={cn(
                    "font-display font-extrabold tracking-tight leading-tight uppercase mx-auto transition-all",
                    isDesktopView ? "text-4xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-3xl"
                  )}>
                    <span className="block text-blue-900 drop-shadow-sm">
                      {t('KNOW YOUR DESTINY', 'अपना भाग्य जानें')}
                    </span>
                    <span className="block bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-sm mt-1 sm:mt-2">
                      {t('With Bhrigu Nandi Astrology', 'भृगु नंदी ज्योतिष के साथ')}
                    </span>
                  </h1>

                  {/* Sacred Celestial Ornamental Divider */}
                  <div className="flex items-center justify-center gap-3 pt-1">
                    <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-400" />
                    <span className="text-amber-500 font-serif text-lg sm:text-xl">✦ ॐ ✦</span>
                    <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-400" />
                  </div>
                </div>

                {/* Artistic Subtitle Card */}
                <div className="w-full max-w-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-blue-50/70 border border-blue-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
                  <p className={cn(
                    "text-slate-700 leading-relaxed font-semibold mx-auto transition-all",
                    isDesktopView ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
                  )}>
                    {t(
                      'Expert guidance specializing in Bhrigu Nandi Nadi (BNN) and authentic Vedic Astrology. Discover divine clarity for your career, marriage, health, and future life path.',
                      'भृगु नंदी नाड़ी (बीएनएन) और प्रामाणिक वैदिक ज्योतिष में विशेषज्ञ मार्गदर्शन। अपने करियर, शादी, स्वास्थ्य और भविष्य के लिए स्पष्टता खोजें।'
                    )}
                  </p>
                </div>
              </div>

              {/* Primary Master CTA Box - Regal Celestial Portal */}
              <div className="w-full flex justify-center max-w-2xl mx-auto">
                <form onSubmit={handleLogin} className="w-full">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className={cn(
                      "w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-3xl transition-all",
                      "shadow-[0_16px_50px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.7)] ring-4 ring-amber-300/40 hover:ring-amber-300/70",
                      "flex items-center justify-between active:scale-[0.98] cursor-pointer border-2 border-white/40",
                      isDesktopView ? "h-26 sm:h-30 px-8 sm:px-12" : "h-22 px-6"
                    )}
                  >
                    {isLoading ? (
                      <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                    ) : (
                      <div className="flex items-center justify-between w-full gap-4">
                        <div className="flex items-center gap-4 text-left">
                          <div className={cn(
                            "rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shrink-0 shadow-inner",
                            isDesktopView ? "w-14 h-14" : "w-11 h-11"
                          )}>
                            <Sparkles className={cn(isDesktopView ? "w-7 h-7 text-yellow-200" : "w-5 h-5 text-yellow-200")} />
                          </div>
                          <div className="flex flex-col">
                            <span className={cn(
                              "font-display font-black tracking-wide drop-shadow-md text-white uppercase",
                              isDesktopView ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                            )}>
                              {t('Generate Your Kundali', 'अपनी कुंडली बनाएं')}
                            </span>
                            <span className={cn(
                              "font-semibold text-amber-100 drop-shadow-sm mt-0.5",
                              isDesktopView ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                            )}>
                              {t('& Know Your Daily Horoscope (दैनिक राशिफल)', '& अपना दैनिक राशिफल जानें')}
                            </span>
                          </div>
                        </div>
                        <div className={cn(
                          "rounded-full bg-white/25 p-3 shrink-0 transition-transform group-hover:translate-x-1 border border-white/30 shadow-md",
                          isDesktopView ? "p-3.5" : "p-2.5"
                        )}>
                          <ArrowRight className={cn(
                            "text-white",
                            isDesktopView ? "w-7 h-7" : "w-5 h-5"
                          )} />
                        </div>
                      </div>
                    )}
                  </Button>
                </form>
              </div>

              {/* Action Buttons - Stacked Vertically in an Above and Below Pattern with Regal Gradients */}
              <div className="flex flex-col items-center justify-center gap-5 w-full max-w-lg mx-auto">
                <button
                  onClick={() => navigate('/services')}
                  type="button"
                  className={cn(
                    "w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-black shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 border border-white/20 transition-all active:scale-95 uppercase tracking-wider cursor-pointer flex items-center justify-center gap-3",
                    isDesktopView ? "py-5 px-8 text-lg" : "py-4 px-6 text-sm"
                  )}
                >
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span>{t('Explore Our Sacred Services', 'हमारी पवित्र सेवाएँ देखें')}</span>
                  <ArrowRight className="w-5 h-5 text-blue-200" />
                </button>
                <button
                  onClick={() => navigate('/services')}
                  type="button" 
                  className={cn(
                    "w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl font-black shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/40 border border-white/20 transition-all active:scale-95 uppercase tracking-wider cursor-pointer flex items-center justify-center gap-3",
                    isDesktopView ? "py-5 px-8 text-lg" : "py-4 px-6 text-sm"
                  )}
                >
                  <Sparkles className="w-5 h-5 text-yellow-200" />
                  <span>{t('Book Astro Services Now', 'एस्ट्रो सेवाएं अभी बुक करें')}</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Image 1: Maharishi Bhrigu (Artistic Sacred Temple Gallery Portrait Frame) */}
              <div className={cn(
                "w-full max-w-2xl mx-auto flex flex-col items-center text-center relative",
                "bg-gradient-to-b from-amber-50/80 via-white/90 to-blue-50/80 backdrop-blur-xl rounded-[2.5rem]",
                "border-2 border-amber-300/80 shadow-[0_20px_60px_rgba(217,119,6,0.18)] transition-all hover:shadow-[0_25px_70px_rgba(217,119,6,0.28)]",
                isDesktopView ? "p-10 sm:p-14" : "p-6 sm:p-8"
              )}>
                {/* Decorative Golden Corner Flourishes */}
                <span className="absolute top-4 left-5 text-amber-500 font-serif text-lg select-none">✦</span>
                <span className="absolute top-4 right-5 text-amber-500 font-serif text-lg select-none">✦</span>
                <span className="absolute bottom-4 left-5 text-amber-500 font-serif text-lg select-none">✦</span>
                <span className="absolute bottom-4 right-5 text-amber-500 font-serif text-lg select-none">✦</span>

                {/* Sacred Ribbon Tag */}
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 font-serif font-black text-xs sm:text-sm uppercase tracking-widest shadow-xs mb-6">
                  <span>✨ {t('Parampujya Sage', 'परमपूज्य महर्षि')} ✨</span>
                </div>

                {/* Double Golden Ornate Picture Frame */}
                <div className="p-2 sm:p-2.5 rounded-[2.2rem] bg-gradient-to-br from-amber-300 via-yellow-100 to-amber-400 shadow-2xl border border-amber-400/80 group">
                  <div className="overflow-hidden rounded-[1.8rem] bg-white border-2 border-white/80">
                    <img
                      src="/maharishi_bhrigu.png"
                      alt="Maharishi Bhrigu"
                      className={cn(
                        "aspect-square object-cover group-hover:scale-105 transition-transform duration-700",
                        isDesktopView ? "w-[340px] sm:w-[420px]" : "w-[240px] sm:w-[280px]"
                      )}
                    />
                  </div>
                </div>

                {/* Artistic Title & Description */}
                <h3 className={cn(
                  "font-display font-black text-blue-950 uppercase tracking-wider drop-shadow-sm",
                  isDesktopView ? "text-2xl sm:text-3xl mt-7" : "text-xl mt-5"
                )}>
                  Maharishi Bhrigu
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="h-[1px] w-8 bg-amber-400" />
                  <span className="text-amber-500 text-xs">✦ ✦ ✦</span>
                  <div className="h-[1px] w-8 bg-amber-400" />
                </div>
                <p className={cn(
                  "text-slate-700 font-semibold leading-relaxed",
                  isDesktopView ? "text-lg sm:text-xl mt-3 max-w-lg" : "text-xs sm:text-sm mt-2"
                )}>
                  {t(
                    'Revered Father of Hindu Astrology & Divine Author of Bhrigu Samhita',
                    'वैदिक ज्योतिष के प्रवर्तक एवं भृगु संहिता के दिव्य रचयिता'
                  )}
                </p>
              </div>

              {/* Image 2: The Sacred Scripture of BNN (Artistic Sacred Temple Gallery Portrait Frame - Directly Below) */}
              <div className={cn(
                "w-full max-w-2xl mx-auto flex flex-col items-center text-center relative",
                "bg-gradient-to-b from-blue-50/80 via-white/90 to-amber-50/80 backdrop-blur-xl rounded-[2.5rem]",
                "border-2 border-blue-300/80 shadow-[0_20px_60px_rgba(37,99,235,0.18)] transition-all hover:shadow-[0_25px_70px_rgba(37,99,235,0.28)]",
                isDesktopView ? "p-10 sm:p-14" : "p-6 sm:p-8"
              )}>
                {/* Decorative Golden Corner Flourishes */}
                <span className="absolute top-4 left-5 text-blue-500 font-serif text-lg select-none">✦</span>
                <span className="absolute top-4 right-5 text-blue-500 font-serif text-lg select-none">✦</span>
                <span className="absolute bottom-4 left-5 text-blue-500 font-serif text-lg select-none">✦</span>
                <span className="absolute bottom-4 right-5 text-blue-500 font-serif text-lg select-none">✦</span>

                {/* Sacred Ribbon Tag */}
                <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-100/90 border border-blue-300 text-blue-900 font-serif font-black text-xs sm:text-sm uppercase tracking-widest shadow-xs mb-6">
                  <span>✨ {t('Sacred Ancient Scripture', 'पवित्र प्राचीन ग्रंथ')} ✨</span>
                </div>

                {/* Double Golden-Celestial Ornate Picture Frame */}
                <div className="p-2 sm:p-2.5 rounded-[2.2rem] bg-gradient-to-br from-blue-300 via-amber-100 to-indigo-400 shadow-2xl border border-blue-400/80 group">
                  <div className="overflow-hidden rounded-[1.8rem] bg-white border-2 border-white/80">
                    <img
                      src="/ancient_book.png"
                      alt="Bhrigu Nandi Nadi Astrology Book"
                      className={cn(
                        "aspect-square object-cover group-hover:scale-105 transition-transform duration-700",
                        isDesktopView ? "w-[340px] sm:w-[420px]" : "w-[240px] sm:w-[280px]"
                      )}
                    />
                  </div>
                </div>

                {/* Artistic Title & Description */}
                <h3 className={cn(
                  "font-display font-black text-blue-950 uppercase tracking-wider drop-shadow-sm",
                  isDesktopView ? "text-2xl sm:text-3xl mt-7" : "text-xl mt-5"
                )}>
                  {t('The Sacred Scripture of BNN', 'बीएनएन का पवित्र ग्रंथ')}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="h-[1px] w-8 bg-blue-400" />
                  <span className="text-blue-500 text-xs">✦ ✦ ✦</span>
                  <div className="h-[1px] w-8 bg-blue-400" />
                </div>
                <p className={cn(
                  "text-slate-700 font-semibold leading-relaxed",
                  isDesktopView ? "text-lg sm:text-xl mt-3 max-w-lg" : "text-xs sm:text-sm mt-2"
                )}>
                  {t(
                    'Ancient manuscript embodying the timeless secrets of planetary transits and karmic destiny',
                    'ग्रहों के गोचर और नियति के शाश्वत रहस्यों को समाहित करने वाला प्राचीन ग्रंथ'
                  )}
                </p>
              </div>

              {/* Article 2: Meet The Visionary Astrologer (Artistic Regal Certificate Design - Stacked Vertically) */}
              <div className={cn(
                "w-full max-w-3xl mx-auto flex flex-col items-center text-center relative",
                "bg-gradient-to-br from-white/95 via-blue-50/70 to-indigo-50/80 backdrop-blur-xl rounded-[2.5rem]",
                "border-2 border-blue-300/80 shadow-[0_25px_70px_rgba(30,58,138,0.2)] transition-all hover:shadow-[0_30px_80px_rgba(30,58,138,0.3)]",
                isDesktopView ? "p-10 sm:p-14 space-y-8" : "p-6 sm:p-8 space-y-6"
              )}>
                {/* Royal Crest / Award Motif */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/30 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-amber-500" />
                    </div>
                  </div>
                  <span className="text-amber-800 font-serif font-black tracking-[0.2em] text-xs sm:text-sm uppercase">
                    {t('॥ ज्ञानं परमं बलम् ॥ • Decades of Vedic Mastery', '॥ ज्ञानं परमं बलम् ॥ • वैदिक ज्ञान का शिखर')}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className={cn(
                    "font-display font-extrabold text-blue-950 tracking-tight uppercase leading-tight drop-shadow-sm",
                    isDesktopView ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl sm:text-3xl"
                  )}>
                    MEET THE VISIONARY ASTROLOGER
                  </h2>
                  <p className="text-amber-700 font-serif font-bold text-lg sm:text-xl">
                    Acharya Dr. S.K. • BNN Luminary
                  </p>
                </div>

                <p className={cn(
                  "text-slate-700 leading-relaxed font-semibold max-w-2xl mx-auto italic",
                  isDesktopView ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                )}>
                  "{t(
                    'With over 10 years of experience in Vedic Astrology Sciences, Acharya Dr. S.K. has dedicated his life to helping individuals find their true path. His mastery over Bhrigu Nandi Nadi (BNN) allows for exceptionally detailed and accurate predictions that go beyond traditional methods.',
                    'वैदिक ज्योतिष विज्ञान में 10 से अधिक वर्षों के अनुभव के साथ, आचार्य डॉ. एस.के. ने व्यक्तियों को उनके सच्चे मार्ग को खोजने में मदद करने के लिए अपना जीवन समर्पित किया है। भृगु नंदी नाड़ी (बीएनएन) पर उनकी महारत असाधारण रूप से विस्तृत और सटीक भविष्यवाणियों की अनुमति देती है।'
                  )}"
                </p>

                {/* 4 Feature/Credential Boxes - Placed One Below The Other Vertically with Distinct Celestial Color Themes */}
                <div className="w-full space-y-4 pt-2">
                  {[
                    {
                      text: t("Master of BNN / Vedic Astrology & Philosophy", "बीएनएन / वैदिक ज्योतिष और दर्शन के विशेषज्ञ"),
                      badge: "01",
                      gradient: "from-blue-500 to-indigo-600",
                      border: "border-blue-200",
                    },
                    {
                      text: t("Expert in Bhrigu Nandi Nadi (BNN) Analysis", "भृगु नंदी नाड़ी (बीएनएन) विश्लेषण में विशेषज्ञ"),
                      badge: "02",
                      gradient: "from-purple-500 to-indigo-600",
                      border: "border-purple-200",
                    },
                    {
                      text: t("Specialist in Career & Financial Growth", "करियर और वित्तीय विकास में विशेषज्ञ"),
                      badge: "03",
                      gradient: "from-emerald-500 to-teal-600",
                      border: "border-emerald-200",
                    },
                    {
                      text: t("Helping clients Globally with Most Accurate Remedies", "सटीक उपायों के साथ वैश्विक स्तर पर ग्राहकों का मार्गदर्शन"),
                      badge: "04",
                      gradient: "from-amber-500 to-orange-600",
                      border: "border-amber-200",
                    }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-full bg-white/95 rounded-2xl border shadow-md flex items-center gap-4 text-left transition-all hover:scale-[1.01] hover:shadow-xl",
                        item.border,
                        isDesktopView ? "p-6 sm:p-7" : "p-4"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br text-white font-black flex items-center justify-center shrink-0 shadow-md",
                        item.gradient
                      )}>
                        <span className="font-serif text-sm sm:text-base">{item.badge}</span>
                      </div>
                      <span className={cn(
                        "text-slate-900 font-bold leading-snug flex-1",
                        isDesktopView ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                      )}>
                        {item.text}
                      </span>
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Grand Finale CTA to start Kundali */}
              <div className="w-full max-w-2xl mx-auto pb-4">
                <Button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className={cn(
                    "w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:from-blue-800 hover:to-indigo-700 text-white font-bold rounded-3xl transition-all",
                    "shadow-[0_16px_50px_rgba(79,70,229,0.4)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.6)] flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer border-2 border-white/30",
                    isDesktopView ? "h-22 text-xl sm:text-2xl" : "h-18 text-base sm:text-lg"
                  )}
                >
                  <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                  <span className="font-display font-black tracking-wide">
                    {t('Begin Your Astrological Journey Now', 'अपनी ज्योतिषीय यात्रा अभी शुरू करें')}
                  </span>
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
