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
        isDesktopView ? "max-w-6xl px-4 sm:px-8 py-6 sm:py-10" : "max-w-md px-4 py-8"
      )}>
        <div className={cn(
          "glass-card flex flex-col rounded-3xl border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 relative overflow-hidden transition-all duration-300",
          isDesktopView ? "p-6 sm:p-8" : ""
        )}>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-70" />

          {/* Header Group */}
          <div className="relative z-10 flex flex-col">
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
              "bg-[#4272e8] w-full py-2.5 px-3 sm:px-5 flex items-center border-b-[3px] border-white/90 shadow-lg overflow-x-auto no-scrollbar",
              isDesktopView ? "justify-center" : "space-x-2 sm:justify-between"
            )}>
              <div className={cn(
                "flex text-white font-bold tracking-wide whitespace-nowrap",
                isDesktopView ? "gap-8 sm:gap-12 text-sm sm:text-base" : "gap-4 sm:gap-5 text-[11px] sm:text-[13px]"
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
                  className="flex items-center gap-1.5 text-yellow-300 border-b-2 border-yellow-300 transition-colors uppercase sm:capitalize"
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
                  className="flex items-center gap-1.5 hover:text-blue-200 transition-colors uppercase sm:capitalize"
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
              <button 
                onClick={() => navigate('/contact')}
                type="button" 
                className="flex-shrink-0 bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>
            </div>

            <div className="w-full px-4 mt-8 text-center">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight text-center drop-shadow-sm uppercase">
                {t('About Our Heritage', 'हमारी विरासत के बारे में')}
              </h1>

              <div className={cn(
                "mt-8 w-full px-4",
                isDesktopView 
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center" 
                  : "flex flex-col items-center gap-6"
              )}>
                <div className="flex flex-col items-center group w-full">
                  <div className={cn(
                    "overflow-hidden rounded-2xl shadow-2xl border-4 border-blue-200/60 bg-white/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:border-blue-300 mx-auto",
                    isDesktopView ? "w-full max-w-sm aspect-square" : "w-64 sm:w-72 aspect-square"
                  )}>
                    <img
                      src="/maharishi_bhrigu.png"
                      alt="Maharishi Bhrigu"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-blue-700 font-bold uppercase tracking-widest">
                    {t('Maharishi Bhrigu', 'महर्षि भृगु')}
                  </p>
                </div>
                
                <div className="flex flex-col items-center group w-full">
                  <div className={cn(
                    "overflow-hidden rounded-2xl shadow-2xl border-4 border-blue-200/60 bg-white/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:border-blue-300 mx-auto",
                    isDesktopView ? "w-full max-w-sm aspect-square" : "w-64 sm:w-72 aspect-square"
                  )}>
                    <img
                      src="/ancient_book.png"
                      alt="Bhrigu Nandi Nadi Astrology Book"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-blue-700 font-bold uppercase tracking-widest">
                    {t('Sacred Ancient Manuscript', 'पवित्र प्राचीन पांडुलिपि')}
                  </p>
                </div>
              </div>

              <div className="mt-8 px-2">
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  {t('Acharya Dr. S.K.', 'आचार्य डॉ. एस.के.')}
                </h2>
                <p className="text-slate-600 text-[13px] sm:text-[14px] leading-relaxed font-medium">
                  {t('Acharya Dr. S.K. is a renowned visionary in the field of Bhrigu Nandi Nadi (BNN) Astrology. With a wide study in Vedic Astrology Sciences. He has decoded real problems being faced by thousands of people due to ignorance or lack of our knowledge about our ancient sciences. So, he decide to help thousands of people to navigate their real life\'s complex journey in a easy way.', 'आचार्य डॉ. एस.के. भृगु नंदी नाड़ी (बीएनएन) ज्योतिष के क्षेत्र में एक प्रसिद्ध दूरदर्शी हैं। वैदिक विज्ञान में एक दशक से अधिक के समर्पित शोध के साथ, उन्होंने हजारों लोगों को जीवन की जटिल यात्रा को नेविगेट करने में मदद करने के लिए प्राचीन वैदिक ज्योतिष विज्ञान को डिकोड किया है।')}
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-blue-200/50 shadow-sm flex items-center gap-4"
                  >
                    <div className="p-3 bg-blue-50 rounded-xl">
                      {milestone.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-slate-800 text-sm italic">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-500 text-[11px] sm:text-[12px] leading-tight">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 px-4 flex flex-col gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 text-left">
                  <h3 className="text-blue-800 font-bold text-base mb-2">Our Mission</h3>
                  <p className="text-slate-600 text-[12px] sm:text-[13px] leading-relaxed italic">
                    "To bridge the gap between ancient celestial wisdom and modern life challenges, providing every seeker with the light of truth and accurate guidance."
                  </p>
                </div>

                <div className="px-12">
                  <button
                    onClick={() => navigate('/services')}
                    type="button"
                    className="w-full bg-[#4272e8] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    {t('Explore Our Sacred Services', 'हमारी पवित्र सेवाओं का लाभ उठाएं')} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="w-full px-16 mb-8 mt-8">
            <Button
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold h-11 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 text-sm active:scale-95"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              {t('Back to Home', 'होम पर वापस जाएं')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
