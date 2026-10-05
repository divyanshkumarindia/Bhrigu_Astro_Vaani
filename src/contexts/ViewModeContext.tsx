import React, { createContext, useContext, useState, useEffect } from 'react';

type ViewMode = 'desktop' | 'mobile';

interface ViewModeContextType {
  isDesktopView: boolean;
  viewMode: ViewMode;
  toggleViewMode: () => void;
  setViewMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    try {
      const saved = localStorage.getItem('bhrigu_view_mode');
      if (saved === 'mobile' || saved === 'desktop') return saved;
    } catch {
      // ignore
    }
    // Auto-detect based on screen width if not previously set
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 'mobile';
    }
    // Default to desktop/website view for Windows and Mac
    return 'desktop';
  });

  const isDesktopView = viewMode === 'desktop';

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    try {
      localStorage.setItem('bhrigu_view_mode', mode);
    } catch {
      // ignore
    }
  };

  const toggleViewMode = () => {
    const next = viewMode === 'desktop' ? 'mobile' : 'desktop';
    setViewMode(next);
  };

  useEffect(() => {
    try {
      localStorage.setItem('bhrigu_view_mode', viewMode);
    } catch {
      // ignore
    }
  }, [viewMode]);

  return (
    <ViewModeContext.Provider value={{ isDesktopView, viewMode, toggleViewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};
