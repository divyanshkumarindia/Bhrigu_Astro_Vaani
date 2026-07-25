import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Globe, Eye, ChevronDown, CheckCircle2, ArrowRight, Target, Lightbulb, TrendingUp, Handshake, Home, Info, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';

const Vision = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

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

      <div className="relative z-10 w-full max-w-md px-4 py-8">
        <div className="glass-card flex flex-col rounded-3xl border border-blue-300 border-opacity-50 bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl shadow-blue-400 shadow-opacity-30 relative overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-[#EA580C] to-red-500 opacity-80" />

          {/* Header Group */}
          <div className="relative z-10 flex flex-col">
            <div className="py-3 w-full">
             <h2 className="text-blue-700 text-center font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider drop-shadow-md px-2">
                BHRIGU NANDI ASTROLOGY
              </h2>
            </div>

            {/* Navigation links */}
            <div className="bg-[#4272e8] w-full py-2.5 px-3 sm:px-5 flex items-center space-x-2 sm:justify-between border-b-[3px] border-white border-opacity-90 shadow-lg overflow-x-auto no-scrollbar">
              <div className="flex gap-4 sm:gap-5 text-white text-[11px] sm:text-[13px] font-bold tracking-wide whitespace-nowrap">
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
                  className="flex items-center gap-1.5 text-yellow-300 border-b-2 border-yellow-300 transition-colors uppercase sm:capitalize"
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

            {/* Language and Currency Toggles Row */}
            <div className="w-full py-3 px-3 sm:px-5 flex items-center justify-center gap-3">
              <LanguageToggle 
                className="flex-shrink-0"
                triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0"
              />
              <button 
                onClick={() => navigate('/contact')}
                type="button" 
                className="flex-shrink-0 bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>
            </div>

            <div className="w-full px-4 mt-8 text-center">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#4272e8] tracking-tight text-center drop-shadow-sm uppercase">
                {t('Our Future Vision', 'हमारा भविष्य का दृष्टिकोण')}
              </h1>

              <div className="mt-8 flex justify-center">
                <div className="p-4 bg-orange-100 rounded-full shadow-lg shadow-orange-200">
                  <Target className="w-12 h-12 text-[#EA580C]" />
                </div>
              </div>

              <div className="mt-10 space-y-8 text-left">
                <section>
                  <h3 className="font-bold text-slate-800 text-lg mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    {t('Our Vision', 'हमारा दृष्टिकोण')}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {t('To democratize access to the profound wisdom of Bhrigu Nandi Nadi Astrology, enabling every individual to navigate life\'s complexities with divine clarity and cosmic confidence.', 'भृगु नंदी नाड़ी ज्योतिष के गहन ज्ञान तक पहुंच को लोकतांत्रिक बनाना, जिससे प्रत्येक व्यक्ति ईश्वरीय स्पष्टता और ब्रह्मांडीय आत्मविश्वास के साथ जीवन की जटिलताओं को नेविगेट कर सके।')}
                  </p>
                </section>

                <section className="bg-orange-50 bg-opacity-50 p-6 rounded-2xl border border-orange-100">
                  <h3 className="font-bold text-orange-800 text-lg mb-4">{t('Core Strategic Goals', 'मुख्य रणनीतिक लक्ष्य')}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {values.map((val, idx) => (
                      <div key={idx} className="bg-white bg-opacity-80 p-4 rounded-xl shadow-sm border border-orange-100 flex items-start gap-3">
                        <div className="shrink-0 mt-1">{val.icon}</div>
                        <div>
                          <h4 className="font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wide">{val.title}</h4>
                          <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-relaxed font-medium">{val.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="pb-10">
                  <h3 className="font-bold text-slate-800 text-lg mb-3 flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-blue-500" />
                    {t('Commitment to You', 'आपके प्रति प्रतिबद्धता')}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {t('We envision a world where astrology is not used for fear-mongering, but as a sophisticated tool for personal empowerment, self-discovery, and strategic life planning.', 'हम एक ऐसी दुनिया की कल्पना करते हैं जहाँ ज्योतिष का उपयोग भय फैलाने के लिए नहीं, बल्कि व्यक्तिगत सशक्तिकरण, आत्म-खोज और रणनीतिक जीवन योजना के लिए एक परिष्कृत उपकरण के रूप में किया जाता है।')}
                  </p>
                </section>
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

export default Vision;
