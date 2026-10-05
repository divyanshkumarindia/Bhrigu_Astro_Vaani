import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Info, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { cn } from '@/lib/utils';

interface NavigationLinksProps {
  className?: string;
  activeOverride?: 'home' | 'about' | 'vision' | 'services';
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  className,
  activeOverride,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const { isDesktopView } = useViewMode();

  const currentPath = location.pathname;

  const getIsActive = (key: 'home' | 'about' | 'vision' | 'services') => {
    if (activeOverride) return activeOverride === key;
    if (key === 'home') return currentPath === '/' || currentPath === '/dashboard';
    if (key === 'about') return currentPath === '/about';
    if (key === 'vision') return currentPath === '/vision';
    if (key === 'services') return currentPath === '/services' || currentPath === '/all-services';
    return false;
  };

  const navItems = [
    {
      key: 'home' as const,
      label: t('Home', 'होम'),
      path: '/',
      icon: Home,
    },
    {
      key: 'about' as const,
      label: t('About', 'परिचय'),
      path: '/about',
      icon: Info,
    },
    {
      key: 'vision' as const,
      label: t('Vision', 'दृष्टिकोण'),
      path: '/vision',
      icon: Eye,
    },
    {
      key: 'services' as const,
      label: t('Astro Services', 'ज्योतिष सेवाएँ'),
      path: '/services',
      icon: Sparkles,
    },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={cn(
        "bg-gradient-to-r from-blue-700 via-[#4272e8] to-indigo-700 w-full flex items-center justify-center border-b-[3px] border-white/90 shadow-xl overflow-x-auto no-scrollbar transition-all",
        isDesktopView ? "py-4 px-6 sm:px-10" : "py-2.5 px-2 sm:px-4",
        className
      )}
    >
      <div className={cn(
        "flex items-center justify-center flex-wrap sm:flex-nowrap whitespace-nowrap",
        isDesktopView ? "gap-4 sm:gap-6 md:gap-8" : "gap-2 sm:gap-2.5"
      )}>
        {navItems.map((item) => {
          const isActive = getIsActive(item.key);
          const Icon = item.icon;

          return (
            <button
              key={item.key}
              onClick={() => navigate(item.path)}
              type="button"
              className={cn(
                "group relative flex items-center justify-center gap-2 rounded-2xl font-bold tracking-wide transition-all duration-200 ease-out cursor-pointer select-none",
                "active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2",
                isDesktopView
                  ? "px-6 py-3 text-base sm:text-lg min-w-[140px] shadow-sm"
                  : "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm shadow-xs",
                isActive
                  ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 font-black shadow-[0_6px_20px_rgba(245,158,11,0.5)] border-2 border-white scale-[1.03] ring-2 ring-yellow-400/40"
                  : "bg-white/15 hover:bg-white/30 text-white hover:text-white border border-white/30 hover:border-white/70 shadow-sm hover:shadow-lg hover:shadow-blue-900/30 backdrop-blur-md hover:-translate-y-0.5"
              )}
            >
              <Icon
                className={cn(
                  "transition-transform duration-200 group-hover:scale-110 shrink-0",
                  isDesktopView ? "w-5 h-5" : "w-3.5 h-3.5",
                  isActive ? "text-slate-950 animate-pulse" : "text-white/90 group-hover:text-white"
                )}
              />
              <span className="capitalize">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
