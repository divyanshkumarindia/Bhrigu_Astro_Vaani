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
        isDesktopView ? "max-w-6xl px-4 sm:px-8 py-10 sm:py-16" : "max-w-md px-4 py-8"
      )}>
        <div className={cn(
          "glass-card flex flex-col rounded-3xl border border-blue-300/50 bg-white-300/40 backdrop-blur-xl shadow-2xl shadow-blue-400/30 relative overflow-hidden transition-all duration-300",
          isDesktopView ? "p-8 sm:p-14 space-y-10" : ""
        )}>

          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-70" />

          {/* Header Group */}
          <div className="relative z-10 flex flex-col">
            <div className={cn(
              "w-full transition-all",
              isDesktopView ? "py-4 sm:py-6" : "py-3"
            )}>
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
              isDesktopView 
                ? "py-4 px-8 justify-center gap-10 sm:gap-14 text-base sm:text-lg" 
                : "py-2.5 px-3 sm:px-5 space-x-2 sm:justify-between"
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
                  <Home className={isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => navigate('/about')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Info className={isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  <span>About</span>
                </button>
                <button
                  onClick={() => navigate('/vision')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Eye className={isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  <span>Vision</span>
                </button>
                <button
                  onClick={() => navigate('/services')}
                  type="button"
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors uppercase sm:capitalize"
                >
                  <Sparkles className={isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  <span>Astro Services</span>
                </button>
              </div>
            </div>

            {/* Language, View Mode and Currency Toggles Row */}
            <div className={cn(
              "w-full flex flex-wrap items-center justify-center transition-all",
              isDesktopView ? "py-6 px-6 gap-4" : "py-3 px-3 sm:px-5 gap-2.5 sm:gap-3"
            )}>
              <ViewModeToggle />
              <LanguageToggle 
                className="flex-shrink-0"
                triggerClassName={cn(
                  "bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm rounded-xl flex items-center gap-2 text-blue-700 font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm",
                  isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
                )}
              />
              <CurrencyToggle 
                className="flex-shrink-0"
                triggerClassName={cn(
                  "bg-blue-50/50 hover:bg-blue-100/50 backdrop-blur-sm rounded-xl flex items-center gap-2 text-blue-700 font-bold transition-all border border-blue-200/50 h-auto w-auto focus:ring-0 cursor-pointer shadow-sm",
                  isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
                )}
              />
              <button 
                onClick={() => navigate('/contact')}
                type="button" 
                className={cn(
                  "flex-shrink-0 bg-yellow-500/10 hover:bg-yellow-500/20 backdrop-blur-sm rounded-xl flex items-center gap-2 text-yellow-600 font-bold transition-all border border-yellow-400/50 h-auto w-auto focus:ring-0 border-b-2 border-yellow-400 cursor-pointer shadow-sm",
                  isDesktopView ? "px-4 py-2 text-sm sm:text-base" : "px-3 py-1.5 text-[11px] sm:text-[13px]"
                )}
              >
                <PhoneCall className={isDesktopView ? "w-4 h-4 text-yellow-500" : "w-3.5 h-3.5 text-yellow-500"} />
                <span>Contact</span>
              </button>
            </div>
          </div>

          <div className="w-full px-4 mt-6 text-center">
            <h1 className={cn(
              "font-serif font-bold text-blue-700 tracking-tight text-center drop-shadow-sm uppercase transition-all",
              isDesktopView ? "text-3xl sm:text-4xl md:text-5xl my-6" : "text-2xl sm:text-3xl"
            )}>
              {t('Connect With Us', 'हमसे जुड़ें')}
            </h1>

            <p className={cn(
              "text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium transition-all",
              isDesktopView ? "text-base sm:text-lg mb-8" : "text-xs sm:text-sm mt-2 mb-6"
            )}>
              {t(
                'Reach out to our Vedic scholars directly for consultations, chart queries, and guidance.',
                'परामर्श, कुंडली प्रश्नों और मार्गदर्शन के लिए सीधे हमारे वैदिक विद्वानों से संपर्क करें।'
              )}
            </p>

            <div className={cn(
              "transition-all",
              isDesktopView ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto my-10" : "space-y-6 mt-10"
            )}>
              <a 
                href="https://wa.me/919817588099"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "bg-white/80 hover:bg-white transition-all backdrop-blur-sm rounded-3xl border border-emerald-200/60 shadow-lg flex flex-col items-center justify-center group cursor-pointer hover:shadow-emerald-200/50 hover:scale-[1.02]",
                  isDesktopView ? "p-8 sm:p-10 min-h-[220px] gap-4" : "p-5 gap-3"
                )}
              >
                <div className={cn(
                  "bg-emerald-100 rounded-full group-hover:scale-110 transition-transform",
                  isDesktopView ? "p-4 sm:p-5" : "p-3"
                )}>
                  <WhatsAppIcon className={isDesktopView ? "w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" : "w-6 h-6 text-emerald-600"} />
                </div>
                <h3 className={cn(
                  "font-bold text-slate-800 flex items-center gap-2",
                  isDesktopView ? "text-xl sm:text-2xl" : "text-lg"
                )}>
                  {t('WhatsApp at', 'व्हाट्सएप करें')}
                </h3>
                <p className={cn(
                  "text-emerald-700 font-bold",
                  isDesktopView ? "text-xl sm:text-2xl" : "text-base"
                )}>
                  +91 9817588099
                </p>
                <p className={cn(
                  "text-slate-500 italic",
                  isDesktopView ? "text-sm sm:text-base" : "text-xs"
                )}>
                  {t('Click to chat on WhatsApp', 'व्हाट्सएप पर चैट करने के लिए क्लिक करें')}
                </p>
              </a>

              <a 
                href="mailto:bhriguastrovaani@gmail.com"
                className={cn(
                  "bg-white/80 hover:bg-white transition-all backdrop-blur-sm rounded-3xl border border-blue-200/60 shadow-lg flex flex-col items-center justify-center group cursor-pointer hover:shadow-blue-200/50 hover:scale-[1.02]",
                  isDesktopView ? "p-8 sm:p-10 min-h-[220px] gap-4" : "p-5 gap-3"
                )}
              >
                <div className={cn(
                  "bg-indigo-100 rounded-full group-hover:scale-110 transition-transform",
                  isDesktopView ? "p-4 sm:p-5" : "p-3"
                )}>
                  <Mail className={isDesktopView ? "w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" : "w-6 h-6 text-indigo-600"} />
                </div>
                <h3 className={cn(
                  "font-bold text-slate-800",
                  isDesktopView ? "text-xl sm:text-2xl" : "text-lg"
                )}>
                  {t('Email Us', 'हमें ईमेल करें')}
                </h3>
                <p className={cn(
                  "text-indigo-700 font-bold break-all",
                  isDesktopView ? "text-lg sm:text-xl" : "text-base"
                )}>
                  bhriguastrovaani@gmail.com
                </p>
                <p className={cn(
                  "text-slate-500 italic",
                  isDesktopView ? "text-sm sm:text-base" : "text-xs"
                )}>
                  {t('Quick Response Guaranteed', 'शीघ्र उत्तर की गारंटी')}
                </p>
              </a>
            </div>

            <div className={cn(
              "transition-all",
              isDesktopView ? "max-w-4xl mx-auto my-12" : "mt-10 mb-8"
            )}>
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div className={cn(
                  "bg-white/60 border border-blue-200 rounded-3xl shadow-lg transition-all",
                  isDesktopView ? "p-8 sm:p-12" : "p-4"
                )}>
                  <h3 className={cn(
                    "text-blue-800 font-bold flex items-center justify-center gap-2 mb-6",
                    isDesktopView ? "text-xl sm:text-2xl" : "text-sm"
                  )}>
                    <MessageSquare className={isDesktopView ? "w-6 h-6" : "w-4 h-4"} />
                    {t('Send a Quick Message', 'एक त्वरित संदेश भेजें')}
                  </h3>
                  <div className={cn(
                    "space-y-4",
                    isDesktopView ? "space-y-6" : "space-y-3"
                  )}>
                    <input 
                      type="text" 
                      placeholder={t('Your Name', 'आपका नाम')}
                      className={cn(
                        "w-full bg-white/90 border border-blue-200 rounded-xl px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all",
                        isDesktopView ? "py-4 text-base sm:text-lg" : "py-2 text-sm"
                      )}
                      required
                    />
                    <textarea 
                      placeholder={t('How can we help you?', 'हम आपकी कैसे मदद कर सकते हैं?')}
                      className={cn(
                        "w-full bg-white/90 border border-blue-200 rounded-xl px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all",
                        isDesktopView ? "h-36 sm:h-44 py-4 text-base sm:text-lg" : "h-24 py-2 text-sm"
                      )}
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className={cn(
                        "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer active:scale-[0.98]",
                        isDesktopView ? "h-16 text-base sm:text-lg" : "py-2.5 text-sm"
                      )}
                    >
                      {t('Send Message', 'संदेश भेजें')}
                      <Send className={isDesktopView ? "w-5 h-5" : "w-4 h-4"} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className={cn(
            "w-full",
            isDesktopView ? "max-w-4xl mx-auto mb-10 mt-6 px-4" : "px-8 mb-8 mt-8"
          )}>
            <Button
              onClick={() => navigate('/')}
              className={cn(
                "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-2xl transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 active:scale-[0.98]",
                isDesktopView ? "h-18 sm:h-20 text-lg sm:text-xl" : "h-16 text-lg"
              )}
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
              {t('Back to Home', 'होम पर वापस जाएं')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
