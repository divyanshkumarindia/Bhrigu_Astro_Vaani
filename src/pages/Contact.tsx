import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { Mail, Send, MessageSquare, Clock, Globe, Eye, ChevronDown, CheckCircle2, ArrowRight, Home, Info, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { CurrencyToggle } from '@/components/CurrencyToggle';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('Message sent successfully!', 'संदेश सफलतापूर्वक भेजा गया!'));
  };

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

            {/* Language, View Mode and Currency Toggles Row */}
            <div className="w-full py-3 px-3 sm:px-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <ViewModeToggle />
              <LanguageToggle 
                className="flex-shrink-0"
                triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
              />
              <CurrencyToggle 
                className="flex-shrink-0"
                triggerClassName="bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm"
              />
              <button 
                onClick={() => navigate('/contact')}
                type="button" 
                className="flex-shrink-0 bg-yellow-500/10 hover:bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-yellow-600 text-[11px] sm:text-[13px] font-bold transition-all border border-yellow-400/50 h-auto w-auto focus:ring-0 border-b-2 border-yellow-400 cursor-pointer shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-yellow-500" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          <div className="w-full px-4 mt-8 text-center">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight text-center drop-shadow-sm uppercase">
              {t('Connect With Us', 'हमसे जुड़ें')}
            </h1>

            <div className={cn(
              "mt-10",
              isDesktopView ? "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto" : "space-y-6"
            )}>
              <a 
                href="https://wa.me/919817588099"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/60 hover:bg-white/80 transition-all backdrop-blur-sm p-5 rounded-2xl border border-emerald-200/50 shadow-sm flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="p-3 bg-emerald-100 rounded-full group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg flex items-center gap-1.5">
                  {t('WhatsApp at', 'व्हाट्सएप करें')}
                </h3>
                <p className="text-emerald-700 font-bold text-base">+91 9817588099</p>
                <p className="text-slate-500 text-xs italic">{t('Click to chat on WhatsApp', 'व्हाट्सएप पर चैट करने के लिए क्लिक करें')}</p>
              </a>

              <a 
                href="mailto:bhriguastrovaani@gmail.com"
                className="bg-white/60 hover:bg-white/80 transition-all backdrop-blur-sm p-5 rounded-2xl border border-blue-200/50 shadow-sm flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="p-3 bg-indigo-100 rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{t('Email Us', 'हमें ईमेल करें')}</h3>
                <p className="text-indigo-700 font-bold text-base break-all">bhriguastrovaani@gmail.com</p>
                <p className="text-slate-500 text-xs italic">{t('Quick Response Guaranteed', 'शीघ्र उत्तर की गारंटी')}</p>
              </a>
            </div>

            <div className={cn(
              "mt-10 mb-8",
              isDesktopView ? "max-w-2xl mx-auto" : ""
            )}>
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
