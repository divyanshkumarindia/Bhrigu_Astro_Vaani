import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { LogIn, Eye, Sparkles, Globe, ChevronDown, CheckCircle2, ArrowRight, Home, Info, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
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

      <div className="relative z-10 w-full max-w-md px-4 py-8">
        <div className="glass-card flex flex-col justify-center rounded-3xl border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 text-center relative overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-70" />

          {/* Header Group inside the login box */}
          <div className="relative z-10 flex flex-col">
            <div className="py-3 w-full">
              <h2 className="text-blue-700 text-center font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider drop-shadow-md px-2">
                BHRIGU NANDI ASTROLOGY
              </h2>
            </div>

            {/* Navigation links matching the image */}
            <div className="bg-[#4272e8] w-full py-2.5 px-3 sm:px-5 flex items-center space-x-2 sm:justify-between border-b-[3px] border-white/90 shadow-lg overflow-x-auto no-scrollbar">
              <div className="flex gap-4 sm:gap-5 text-white text-[11px] sm:text-[13px] font-bold tracking-wide whitespace-nowrap">
                <button
                  onClick={() => navigate('/')}
                  type="button"
                  className="flex items-center gap-1.5 text-yellow-300 border-b-2 border-yellow-300 transition-colors uppercase sm:capitalize"
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

            <div className="w-full px-4 mt-8">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight text-center drop-shadow-sm">
                {t('KNOW YOUR DESTINY With Bhrigu Nandi Nandi Astrology', 'वापसी पर स्वागत है')}
              </h1>

              <p className="text-slate-600 mt-4 text-center text-[10px] sm:text-sm px-2 leading-relaxed font-medium max-w-[95%] mx-auto">
                {t('Expert guidance specializing in Bhrigu Nandi Nadi (BNN) and Vedic Astrology. Discover clarity for your career, marriage, health, and future.', 'भृगु नंदी नाड़ी (बीएनएन) और वैदिक ज्योतिष में विशेषज्ञ मार्गदर्शन। अपने करियर, शादी, स्वास्थ्य और भविष्य के लिए स्पष्टता खोजें।')}
              </p>

              <div className="flex flex-col justify-center items-center gap-4 mt-8 w-full max-w-[280px] mx-auto">
                <button
                  onClick={() => navigate('/services')}
                  type="button"
                  className="w-full bg-orange-400 text-white px-5 py-3 rounded-full font-bold text-[13px] shadow-lg hover:bg-orange-500 hover:shadow-orange-200/50 transition-all active:scale-95 whitespace-nowrap uppercase tracking-wider"
                >
                  {t('Explore Our Services', 'हमारी सेवाएँ देखें')}
                </button>
                <button
                  onClick={() => navigate('/services')}
                  type="button" 
                  className="w-full bg-white text-orange-400 border-2 border-orange-400 px-5 py-3 rounded-full font-bold text-[13px] shadow-lg hover:bg-orange-50 transition-all active:scale-95 whitespace-nowrap uppercase tracking-wider"
                >
                  {t('Book Astro Services', 'एस्ट्रो सेवाएं बुक करें')}
                </button>
              </div>

              {/* Added Image of Maharishi Bhrigu */}
              <div className="mt-8 flex flex-col items-center gap-8 w-full px-4 text-center">
                <img
                  src="/maharishi_bhrigu.png"
                  alt="Maharishi Bhrigu"
                  className="w-[220px] sm:w-[260px] rounded-2xl shadow-2xl border-2 border-blue-400/30 object-cover aspect-square"
                />
                
                <div className="flex flex-col items-center">
                  <img
                    src="/ancient_book.png"
                    alt="Bhrigu Nandi Nadi Astrology Book"
                    className="w-[220px] sm:w-[260px] rounded-2xl shadow-2xl border-2 border-blue-400/30 transform hover:scale-105 transition-transform duration-500 aspect-square object-cover"
                  />
                  <p className="mt-3 text-[10px] sm:text-[12px] text-blue-700 font-bold uppercase tracking-[0.2em] opacity-90">
                    {t('The Sacred Scripture of BNN', 'बीएनएन का पवित्र ग्रंथ')}
                  </p>
                </div>
              </div>

              {/* Visionary Astrologer Section */}
              <div className="mt-10 px-4 sm:px-6 text-center w-full mx-auto max-w-sm">
                <h2 className="font-serif text-[26px] sm:text-3xl font-extrabold text-blue-600 tracking-tight leading-[1.1] uppercase">
                  MEET THE<br />VISIONARY<br />ASTROLOGER
                </h2>

                <p className="mt-4 text-slate-700 text-[13px] sm:text-[14px] leading-relaxed font-semibold">
                  With over 10 years of experience in Vedic Astrology Sciences, Acharya Dr. S.K. has dedicated his life to helping individuals find their true path. His mastery over Bhrigu Nandi Nadi (BNN) allows for exceptionally detailed and accurate predictions that go beyond traditional methods.
                </p>

                <ul className="mt-5 space-y-3">
                  {[
                    "Master of BNN/Vedic Astrology & Philosophy",
                    "Expert in Bhrigu Nandi Nadi (BNN) Analysis",
                    "Specialist in Career & Financial Growth",
                    "Helping clients Globally with Most Accurate Remedies"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-900 font-bold">
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#4272e8] shrink-0 mt-[2px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>


              </div>
            </div>
          </div>




          <form onSubmit={handleLogin} className="space-y-6 text-left w-full mb-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full max-w-[320px] mx-auto bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-300 hover:to-amber-400 text-white font-semibold h-20 rounded-xl transition-all shadow-[0_8px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.5)] flex items-center justify-center gap-1 active:scale-[0.98] my-6 px-4"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <div className="flex items-center justify-center gap-4 w-full">
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-[14px] sm:text-[16px] font-bold leading-tight drop-shadow-sm">{t('Generate Your Kundali', 'अपनी कुंडली')}</span>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-white/80 tracking-[0.2em] my-1 uppercase">{t('And', 'और')}</span>
                      <span className="text-[11px] sm:text-[13px] font-bold leading-tight drop-shadow-sm">{t('Know Your Daily Horoscope', 'अपना दैनिक राशिफल जानें')}</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white/90 shrink-0" />
                  </div>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
