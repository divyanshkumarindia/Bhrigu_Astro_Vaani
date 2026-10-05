import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Globe, Eye, ChevronDown, CheckCircle2, ArrowRight, BookOpen, Users, Award, ShieldCheck, Home, Info, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { cn } from '@/lib/utils';

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();

  const milestones = [
    {
      title: t('10+ Years Experience', '10+ वर्षों का अनुभव'),
      description: t('Deeply rooted in traditional Nadi and Vedic wisdom.', 'पारंपरिक नाड़ी और वैदिक ज्ञान में गहराई से निहित।'),
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },
    {
      title: t('10,000+ Consultations', '10,000+ परामर्श'),
      description: t('Helping individuals find clarity and purpose across the globe.', 'दुनिया भर में व्यक्तियों को स्पष्टता और उद्देश्य खोजने में मदद करना।'),
      icon: <Users className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: t('Ancient Wisdom', 'प्राचीन ज्ञान'),
      description: t('Mastery over Bhrigu Nandi Nadi scriptures and techniques.', 'भृगु नंदी नाड़ी शास्त्रों और तकनीकों पर महारत।'),
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
    },
    {
      title: t('Ethical Practice', 'नैतिक अभ्यास'),
      description: t('Dedicated to authentic astrology without superstitious fears.', 'अंधविश्वास के डर के बिना प्रामाणिक ज्योतिष के लिए समर्पित।'),
      icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
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
          "glass-card flex flex-col rounded-3xl border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 relative overflow-hidden transition-all duration-300",
          isDesktopView ? "p-8 sm:p-14 space-y-12 rounded-[2.5rem]" : "p-4 sm:p-8"
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
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Home className={cn(isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5")} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => navigate('/about')}
                  type="button"
                  className="flex items-center gap-2 text-yellow-300 border-b-2 border-yellow-300 transition-colors uppercase sm:capitalize"
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
                "font-display font-bold text-blue-700 tracking-tight text-center drop-shadow-sm uppercase transition-all",
                isDesktopView ? "text-3xl sm:text-4xl mb-4" : "text-2xl sm:text-3xl"
              )}>
                {t('About Our Heritage', 'हमारी विरासत के बारे में')}
              </h1>

              <div className={cn(
                "w-full px-4",
                isDesktopView 
                  ? "grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto items-center my-10" 
                  : "flex flex-col items-center gap-6 mt-8"
              )}>
                <div className="flex flex-col items-center group w-full">
                  <div className={cn(
                    "overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-200/60 bg-white/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:border-blue-300 mx-auto",
                    isDesktopView ? "w-full max-w-md aspect-square" : "w-64 sm:w-72 aspect-square"
                  )}>
                    <img
                      src="/maharishi_bhrigu.png"
                      alt="Maharishi Bhrigu"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3.5 text-sm sm:text-base text-blue-700 font-bold uppercase tracking-widest">
                    {t('Maharishi Bhrigu', 'महर्षि भृगु')}
                  </p>
                </div>
                
                <div className="flex flex-col items-center group w-full">
                  <div className={cn(
                    "overflow-hidden rounded-3xl shadow-2xl border-4 border-blue-200/60 bg-white/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:border-blue-300 mx-auto",
                    isDesktopView ? "w-full max-w-md aspect-square" : "w-64 sm:w-72 aspect-square"
                  )}>
                    <img
                      src="/ancient_book.png"
                      alt="Bhrigu Nandi Nadi Astrology Book"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3.5 text-sm sm:text-base text-blue-700 font-bold uppercase tracking-widest">
                    {t('Sacred Ancient Manuscript', 'पवित्र प्राचीन पांडुलिपि')}
                  </p>
                </div>
              </div>

              {/* Visionary Acharya Dr. S.K. Section */}
              <div className={cn(
                "transition-all text-left",
                isDesktopView 
                  ? "p-8 sm:p-12 my-10 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-blue-200/50 shadow-md max-w-4xl mx-auto" 
                  : "mt-8 px-2"
              )}>
                <h2 className={cn(
                  "font-bold text-slate-800 mb-4 uppercase",
                  isDesktopView ? "text-2xl sm:text-3xl text-blue-700" : "text-xl"
                )}>
                  {t('Acharya Dr. S.K.', 'आचार्य डॉ. एस.के.')}
                </h2>
                <p className={cn(
                  "text-slate-600 leading-relaxed font-medium",
                  isDesktopView ? "text-base sm:text-lg" : "text-[13px] sm:text-[14px]"
                )}>
                  {t('Acharya Dr. S.K. is a renowned visionary in the field of Bhrigu Nandi Nadi (BNN) Astrology. With a wide study in Vedic Astrology Sciences. He has decoded real problems being faced by thousands of people due to ignorance or lack of our knowledge about our ancient sciences. So, he decide to help thousands of people to navigate their real life\'s complex journey in a easy way.', 'आचार्य डॉ. एस.के. भृगु नंदी नाड़ी (बीएनएन) ज्योतिष के क्षेत्र में एक प्रसिद्ध दूरदर्शी हैं। वैदिक विज्ञान में एक दशक से अधिक के समर्पित शोध के साथ, उन्होंने हजारों लोगों को जीवन की जटिल यात्रा को नेविगेट करने में मदद करने के लिए प्राचीन वैदिक ज्योतिष विज्ञान को डिकोड किया है।')}
                </p>
              </div>

              {/* Milestones Grid */}
              <div className={cn(
                "transition-all",
                isDesktopView 
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6 my-10 max-w-4xl mx-auto" 
                  : "mt-10 space-y-4"
              )}>
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-sm flex items-center",
                      isDesktopView ? "p-6 gap-5" : "p-4 gap-4"
                    )}
                  >
                    <div className={cn("bg-blue-50 rounded-2xl", isDesktopView ? "p-4" : "p-3")}>
                      {milestone.icon}
                    </div>
                    <div className="text-left">
                      <h3 className={cn("font-bold text-slate-800 italic", isDesktopView ? "text-base sm:text-lg mb-1" : "text-sm")}>
                        {milestone.title}
                      </h3>
                      <p className={cn("text-slate-500 leading-relaxed", isDesktopView ? "text-sm font-medium" : "text-[11px] sm:text-[12px] leading-tight")}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission Statement and Sacred Services CTA */}
              <div className={cn(
                "flex flex-col gap-6",
                isDesktopView ? "my-12 max-w-4xl mx-auto" : "mt-10 px-4 gap-4"
              )}>
                <div className={cn(
                  "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl text-left shadow-sm",
                  isDesktopView ? "p-8 sm:p-10" : "p-6 rounded-2xl"
                )}>
                  <h3 className={cn("text-blue-800 font-bold mb-3 uppercase tracking-wider", isDesktopView ? "text-xl sm:text-2xl" : "text-base")}>
                    Our Mission
                  </h3>
                  <p className={cn("text-slate-700 leading-relaxed italic font-medium", isDesktopView ? "text-base sm:text-lg" : "text-[12px] sm:text-[13px]")}>
                    "To bridge the gap between ancient celestial wisdom and modern life challenges, providing every seeker with the light of truth and accurate guidance."
                  </p>
                </div>

                <div className={cn(isDesktopView ? "px-0" : "px-12")}>
                  <button
                    onClick={() => navigate('/services')}
                    type="button"
                    className={cn(
                      "w-full bg-[#4272e8] hover:bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-wider active:scale-[0.99]",
                      isDesktopView ? "h-16 text-base sm:text-lg" : "py-3 px-4 text-sm"
                    )}
                  >
                    {t('Explore Our Sacred Services', 'हमारी पवित्र सेवाओं का लाभ उठाएं')} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
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

export default About;
