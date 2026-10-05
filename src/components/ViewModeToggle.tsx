import React from 'react';
import { useViewMode } from '@/contexts/ViewModeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ViewModeToggleProps {
  className?: string;
}

export const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ className }) => {
  const { isDesktopView, toggleViewMode } = useViewMode();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleViewMode}
      title={isDesktopView ? t('Switch to Mobile View', 'मोबाइल दृश्य पर स्विच करें') : t('Switch to Desktop View', 'डेस्कटॉप दृश्य पर स्विच करें')}
      className={cn(
        "flex-shrink-0 bg-blue-50/70 hover:bg-blue-100/70 active:scale-95 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 rounded-lg flex items-center gap-1.5 sm:gap-2 text-blue-700 text-[11px] sm:text-[13px] font-bold transition-all border border-blue-200/50 shadow-sm hover:shadow cursor-pointer select-none",
        className
      )}
    >
      {isDesktopView ? (
        <>
          <Monitor className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{t('Desktop View', 'डेस्कटॉप दृश्य')}</span>
        </>
      ) : (
        <>
          <Smartphone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{t('Mobile View', 'मोबाइल दृश्य')}</span>
        </>
      )}
      <span
        aria-hidden="true"
        className={cn(
          "w-6 sm:w-7 h-3.5 sm:h-4 flex items-center rounded-full p-0.5 transition-colors duration-200 ml-0.5",
          isDesktopView ? "bg-blue-600 justify-end" : "bg-slate-300 justify-start"
        )}
      >
        <span className="bg-white w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full shadow-sm" />
      </span>
    </button>
  );
};
