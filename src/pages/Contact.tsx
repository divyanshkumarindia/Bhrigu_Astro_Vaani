import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Eye, ChevronDown, CheckCircle2, ArrowRight, Home, Info, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { CurrencyToggle } from '@/components/CurrencyToggle';
import { toast } from 'sonner';

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('Message sent successfully!', 'संदेश सफलतापूर्वक भेजा गया!'));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950">
      <StarField count={100} />

      <div className="relative z-10 w-full max-w-md px-4 py-8">
        <div className="glass-card flex flex-col rounded-3xl border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 relative overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-70" />

          {/* Header Group */}
          <div className="relative z-10 flex flex-col">
            <div className="py-3 w-full">
              <h2 className="text-blue-700 text-center font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider drop-shadow-md px-2">
                BHRIGU NANDI ASTROLOGY
              </h2>
            </div>

            {/* Navigation links */}
            <div className="bg-[#4272e8] w-full py-2.5 px-3 sm:px-5 flex items-center space-x-2 sm:justify-between border-b-[3px] border-white/90 shadow-lg overflow-x-auto no-scrollbar">
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
              <CurrencyToggle 
                className="flex-shrink-0"
                triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0"
              />
              <button 
                onClick={() => navigate('/contact')}
                type="button" 
                className="flex-shrink-0 bg-yellow-500/10 hover:bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-yellow-600 text-[11px] sm:text-[13px] font-bold transition-all border border-yellow-400/50 h-auto w-auto focus:ring-0 border-b-2 border-yellow-400"
              >
                <PhoneCall className="w-3.5 h-3.5 text-yellow-500" />
                <span>Contact</span>
              </button>
            </div>

            <div className="w-full px-4 mt-8 text-center">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight text-center drop-shadow-sm uppercase">
                {t('Connect With Us', 'हमसे जुड़ें')}
              </h1>

              <div className="mt-10 space-y-6">
                <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-blue-200/50 shadow-sm flex flex-col items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{t('Call Us', 'हमें कॉल करें')}</h3>
                  <p className="text-blue-700 font-bold text-base">+91 98765 43210</p>
                  <p className="text-slate-500 text-xs italic">{t('Available: 10 AM - 8 PM IST', 'उपलब्ध: सुबह 10 बजे - रात 8 बजे IST')}</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-blue-200/50 shadow-sm flex flex-col items-center gap-3">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{t('Email Us', 'हमें ईमेल करें')}</h3>
                  <p className="text-indigo-700 font-bold text-base">support@bhrigunandi.com</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-blue-200/50 shadow-sm flex flex-col items-center gap-3">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{t('Visit Our Center', 'हमारे केंद्र पर आएं')}</h3>
                  <p className="text-slate-600 font-medium text-xs text-center px-4">
                    123, Vedic Square, Astrological District, Ancient City, India - 100001
                  </p>
                </div>
              </div>

              <div className="mt-10 mb-8">
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="bg-white/40 border border-blue-200 rounded-xl p-4">
                    <h3 className="text-blue-800 font-bold text-sm mb-4 flex items-center gap-2">
                       <MessageSquare className="w-4 h-4" /> {t('Send a Quick Message', 'एक त्वरित संदेश भेजें')}
                    </h3>
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        placeholder={t('Your Name', 'आपका नाम')}
                        className="w-full bg-white/60 border border-blue-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                      <textarea 
                        placeholder={t('How can we help you?', 'हम आपकी कैसे मदद कर सकते हैं?')}
                        className="w-full bg-white/60 border border-blue-100 rounded-lg px-4 py-2 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                      >
                        {t('Send Message', 'संदेश भेजें')} <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>



          <div className="w-full px-8 mb-8 mt-8">
            <Button
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold h-16 rounded-xl transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 text-lg active:scale-[0.98]"
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

export default Contact;
