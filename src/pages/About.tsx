import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Globe, Eye, ChevronDown, CheckCircle2, ArrowRight, BookOpen, Users, Award, ShieldCheck, Home, Info, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { NavigationLinks } from '@/components/NavigationLinks';
import { cn } from '@/lib/utils';

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();

  const milestones = [
    {
      title: t('10+ Years Experience', '10+ वर्षों का अनुभव'),
      description: t('Deeply rooted in traditional Nadi and Vedic wisdom.', 'पारंपरिक नाड़ी और वैदिक ज्ञान में गहराई से निहित।'),
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
    },
    {
      title: t('10,000+ Consultations', '10,000+ परामर्श'),
      description: t('Helping individuals find clarity and purpose across the globe.', 'दुनिया भर में व्यक्तियों को स्पष्टता और उद्देश्य खोजने में मदद करना।'),
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500" />,
    },
    {
      title: t('Ancient Wisdom', 'प्राचीन ज्ञान'),
      description: t('Mastery over Bhrigu Nandi Nadi scriptures and techniques.', 'भृगु नंदी नाड़ी शास्त्रों और तकनीकों पर महारत।'),
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />,
    },
    {
      title: t('Ethical Practice', 'नैतिक अभ्यास'),
      description: t('Dedicated to authentic astrology without superstitious fears.', 'अंधविश्वास के डर के बिना प्रामाणिक ज्योतिष के लिए समर्पित।'),
      icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
    },
  ];

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
          "flex flex-col rounded-none relative overflow-hidden transition-all duration-300 w-full",
          isDesktopView
            ? "border-0 shadow-none bg-white p-8 sm:p-14 space-y-12 max-w-6xl mx-auto"
            : "glass-card border-t-0 border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 p-4 sm:p-8"
        )}>

          <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-80", isDesktopView && "hidden")} />

          {/* About Page Content - Strictly Vertical Above-and-Below Pattern with Enlarged Elements */}
          <div className={cn(
            "w-full transition-all flex flex-col items-center",
            isDesktopView ? "space-y-16 py-6 px-4 sm:px-8" : "space-y-10 py-4 px-2"
          )}>
              {/* Article 1: Heading */}
              <div className="w-full text-center space-y-6">
                <h1 className={cn(
                  "font-serif font-extrabold text-blue-700 tracking-tight leading-tight uppercase mx-auto transition-all drop-shadow-sm",
                  isDesktopView ? "text-4xl sm:text-5xl lg:text-6xl max-w-4xl" : "text-2xl sm:text-3xl"
                )}>
                  {t('About Our Heritage', 'हमारी विरासत के बारे में')}
                </h1>
                <p className={cn(
                  "text-slate-700 leading-relaxed font-semibold mx-auto transition-all",
                  isDesktopView ? "text-xl sm:text-2xl max-w-3xl" : "text-sm sm:text-base max-w-md"
                )}>
                  {t(
                    'Rooted in centuries-old traditions of Maharishi Bhrigu and authentic Bhrigu Nandi Nadi astrology.',
                    'महर्षि भृगु और प्रामाणिक भृगु नंदी नाड़ी ज्योतिष की सदियों पुरानी परंपराओं में निहित।'
                  )}
                </p>
              </div>

              {/* Image 1 Card: Maharishi Bhrigu - Vertically Stacked */}
              <div className="flex flex-col items-center group w-full max-w-2xl bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-blue-200/50 shadow-md">
                <div className="w-[300px] sm:w-[400px] aspect-square overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-200/80 bg-white/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/30 group-hover:border-blue-300">
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
                <div className="w-[300px] sm:w-[400px] aspect-square overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-200/80 bg-white/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/30 group-hover:border-blue-300">
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

              {/* Visionary Acharya Dr. S.K. Article Box - Vertically Stacked Below Images */}
              <div className={cn(
                "w-full max-w-3xl bg-white/50 backdrop-blur-md rounded-3xl border border-blue-200/60 shadow-lg text-left transition-all",
                isDesktopView ? "p-10 sm:p-14 space-y-6" : "p-6 space-y-4"
              )}>
                <div className="space-y-2">
                  <span className={cn(
                    "text-blue-600 font-bold uppercase tracking-widest",
                    isDesktopView ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                  )}>
                    {t('Meet Our Mentor & Founder', 'हमारे मार्गदर्शक और संस्थापक से मिलें')}
                  </span>
                  <h2 className={cn(
                    "font-serif font-extrabold text-blue-700 tracking-tight uppercase",
                    isDesktopView ? "text-3xl sm:text-4xl md:text-5xl" : "text-xl sm:text-2xl"
                  )}>
                    {t('Acharya Dr. S.K.', 'आचार्य डॉ. एस.के.')}
                  </h2>
                </div>
                <p className={cn(
                  "text-slate-700 leading-relaxed font-semibold",
                  isDesktopView ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
                )}>
                  {t(
                    'Acharya Dr. S.K. is a renowned visionary in the field of Bhrigu Nandi Nadi (BNN) Astrology. With a wide study in Vedic Astrology Sciences. He has decoded real problems being faced by thousands of people due to ignorance or lack of our knowledge about our ancient sciences. So, he decide to help thousands of people to navigate their real life\'s complex journey in a easy way.',
                    'आचार्य डॉ. एस.के. भृगु नंदी नाड़ी (बीएनएन) ज्योतिष के क्षेत्र में एक प्रसिद्ध दूरदर्शी हैं। वैदिक विज्ञान में एक दशक से अधिक के समर्पित शोध के साथ, उन्होंने हजारों लोगों को जीवन की जटिल यात्रा को नेविगेट करने में मदद करने के लिए प्राचीन वैदिक ज्योतिष विज्ञान को डिकोड किया है।'
                  )}
                </p>
              </div>

              {/* Milestones / Credentials - Vertically Stacked One Below Another */}
              <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-full bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/60 shadow-md flex items-center transition-all hover:shadow-xl hover:border-blue-300",
                      isDesktopView ? "p-8 sm:p-10 gap-8" : "p-5 gap-4"
                    )}
                  >
                    <div className={cn(
                      "bg-blue-50 rounded-2xl flex-shrink-0 flex items-center justify-center",
                      isDesktopView ? "p-5" : "p-3.5"
                    )}>
                      {milestone.icon}
                    </div>
                    <div className="text-left space-y-1 sm:space-y-2">
                      <h3 className={cn(
                        "font-bold text-slate-800",
                        isDesktopView ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                      )}>
                        {milestone.title}
                      </h3>
                      <p className={cn(
                        "text-slate-600 leading-relaxed font-medium",
                        isDesktopView ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                      )}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission Statement Card - Vertically Stacked Below Milestones */}
              <div className={cn(
                "w-full max-w-3xl bg-gradient-to-br from-blue-50/90 via-indigo-50/80 to-purple-50/90 border border-blue-200/60 rounded-3xl text-left shadow-lg transition-all",
                isDesktopView ? "p-10 sm:p-14 space-y-4" : "p-6 space-y-3"
              )}>
                <h3 className={cn(
                  "text-blue-800 font-serif font-extrabold uppercase tracking-wider",
                  isDesktopView ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                )}>
                  {t('Our Mission', 'हमारा उद्देश्य')}
                </h3>
                <p className={cn(
                  "text-slate-700 leading-relaxed italic font-semibold",
                  isDesktopView ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
                )}>
                  "{t(
                    'To bridge the gap between ancient celestial wisdom and modern life challenges, providing every seeker with the light of truth and accurate guidance.',
                    'प्राचीन आकाशीय ज्ञान और आधुनिक जीवन की चुनौतियों के बीच की खाई को पाटना, प्रत्येक साधक को सत्य का प्रकाश और सटीक मार्गदर्शन प्रदान करना।'
                  )}"
                </p>
              </div>

              {/* Sacred Services CTA - Full Width & Vertically Stacked Below */}
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

export default About;
