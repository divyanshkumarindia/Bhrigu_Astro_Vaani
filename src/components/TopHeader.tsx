import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { ViewModeToggle } from '@/components/ViewModeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { CurrencyToggle } from '@/components/CurrencyToggle';
import { NavigationLinks } from '@/components/NavigationLinks';
import { cn } from '@/lib/utils';

interface TopHeaderProps {
  className?: string;
  activeNavOverride?: 'home' | 'about' | 'vision' | 'services';
  title?: string;
  showCurrency?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  className,
  activeNavOverride,
  title = "BHRIGU NANDI ASTROLOGY",
  showCurrency = true,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();
  const isContactActive = location.pathname === '/contact';

  return (
    <header className={cn("w-full relative z-20 flex flex-col select-none", className)}>
      {/* 1. Top Sacred Vedic Blessing Inscription Ribbon */}
      <div className="w-full bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-amber-300 border-b border-amber-400/40 py-2 px-4 text-center flex items-center justify-center gap-2.5 overflow-hidden shadow-inner">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
        <span className="text-[11px] sm:text-xs md:text-sm font-serif font-bold tracking-[0.2em] uppercase text-amber-300 drop-shadow-[0_2px_8px_rgba(245,158,11,0.45)]">
          {t('॥ ॐ नमो भगवते भृगवे नमः ॥ • Ancient Vedic Wisdom', '॥ ॐ नमो भगवते भृगवे नमः ॥ • प्राचीन वैदिक ज्ञान')}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
      </div>

      {/* 2. Majestic Brand Branding Area */}
      <div className={cn(
        "w-full text-center relative flex flex-col items-center justify-center overflow-hidden transition-all bg-gradient-to-b from-white/95 via-blue-50/50 to-white/90",
        isDesktopView ? "py-7 sm:py-9 px-6" : "py-4 sm:py-5 px-3"
      )}>
        {/* Soft background ambient radial celestial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.14)_0%,_transparent_75%)] pointer-events-none" />

        {/* Brand Title */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className={cn(
            "font-display font-black tracking-[0.16em] sm:tracking-[0.22em] uppercase transition-all duration-300 drop-shadow-sm",
            "bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 bg-clip-text text-transparent",
            isDesktopView ? "text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem]" : "text-xl sm:text-2xl"
          )}>
            {title}
          </h1>

          {/* Sacred Ornamental Underline / Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-2.5">
            <div className="h-[1.5px] w-14 sm:w-28 bg-gradient-to-r from-transparent via-amber-400 to-amber-500 rounded-full" />
            <span className="text-amber-500 font-serif text-sm sm:text-base tracking-widest select-none">✦ ॐ ✦</span>
            <div className="h-[1.5px] w-14 sm:w-28 bg-gradient-to-l from-transparent via-amber-400 to-amber-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* 3. The Blue Navigation Strip - 100% Full Width Edge-to-Edge */}
      <div className="w-full">
        <NavigationLinks activeOverride={activeNavOverride} className="w-full" />
      </div>

      {/* 4. Controls Toolbar (Desktop View, Language, Currency, Contact) */}
      <div className={cn(
        "w-full flex flex-wrap items-center justify-center transition-all bg-gradient-to-b from-blue-50/60 to-white/40 border-b border-blue-100/60",
        isDesktopView ? "py-4 sm:py-5 px-6 gap-3 sm:gap-4" : "py-2.5 px-3 gap-2"
      )}>
        <ViewModeToggle />

        <LanguageToggle
          className="flex-shrink-0"
          triggerClassName={cn(
            "bg-white/85 hover:bg-white active:scale-95 backdrop-blur-md rounded-xl flex items-center gap-2 text-blue-800 font-bold transition-all border border-blue-200/80 shadow-xs hover:shadow cursor-pointer select-none",
            isDesktopView ? "px-3.5 py-2 text-xs sm:text-sm" : "px-2.5 py-1.5 text-[11px] sm:text-xs"
          )}
        />

        {showCurrency && (
          <CurrencyToggle
            className="flex-shrink-0"
            triggerClassName={cn(
              "bg-white/85 hover:bg-white active:scale-95 backdrop-blur-md rounded-xl flex items-center gap-2 text-blue-800 font-bold transition-all border border-blue-200/80 shadow-xs hover:shadow cursor-pointer select-none",
              isDesktopView ? "px-3.5 py-2 text-xs sm:text-sm" : "px-2.5 py-1.5 text-[11px] sm:text-xs"
            )}
          />
        )}

        <button
          onClick={() => navigate('/contact')}
          type="button"
          className={cn(
            "flex-shrink-0 active:scale-95 backdrop-blur-md rounded-xl flex items-center gap-2 font-bold transition-all cursor-pointer select-none",
            isDesktopView ? "px-4 py-2 text-xs sm:text-sm" : "px-3 py-1.5 text-[11px] sm:text-xs",
            isContactActive
              ? "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-[0_4px_16px_rgba(245,158,11,0.4)] border-2 border-white scale-[1.03]"
              : "bg-white/85 hover:bg-white text-blue-800 border border-blue-200/80 shadow-xs hover:shadow hover:text-blue-900"
          )}
        >
          <PhoneCall className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4", isContactActive ? "text-slate-950" : "text-blue-600")} />
          <span>{t('Contact', 'संपर्क')}</span>
        </button>
      </div>
    </header>
  );
};
