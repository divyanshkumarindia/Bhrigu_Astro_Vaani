import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, getTranslation } from '@/lib/translations';

// Supported languages - Indian + World popular languages
export type Language = 
  | 'en' | 'hi' | 'bn' | 'te' | 'mr' | 'ta' | 'gu' | 'kn' | 'ml' | 'pa' | 'or' | 'as' | 'ur' | 'ne'
  | 'gom' | 'mai' | 'sat' | 'sd' | 'doi' | 'ks'
  | 'es' | 'fr' | 'de' | 'pt' | 'ru' | 'ar' | 'zh' | 'ja' | 'ko' | 'it' | 'nl' | 'tr' | 'th' | 'vi' | 'id' | 'ms'
  | 'pl' | 'uk' | 'ro' | 'el' | 'hu' | 'cs' | 'sv' | 'fi' | 'no' | 'da' | 'he' | 'fa';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  region: 'indian' | 'world';
}

export const LANGUAGES: LanguageInfo[] = [
  // Indian Languages
  { code: 'en', name: 'English', nativeName: 'English', region: 'indian' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', region: 'indian' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', region: 'indian' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', region: 'indian' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', region: 'indian' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', region: 'indian' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', region: 'indian' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', region: 'indian' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', region: 'indian' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', region: 'indian' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', region: 'indian' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', region: 'indian' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', region: 'indian' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', region: 'indian' },
  { code: 'gom', name: 'Konkani', nativeName: 'कोंकणी', region: 'indian' },
  { code: 'mai', name: 'Maithili', nativeName: 'मैथिली', region: 'indian' },
  { code: 'sat', name: 'Santali', nativeName: 'संथाली', region: 'indian' },
  { code: 'sd', name: 'Sindhi', nativeName: 'सिंधी', region: 'indian' },
  { code: 'doi', name: 'Dogri', nativeName: 'डोगरी', region: 'indian' },
  { code: 'ks', name: 'Kashmiri', nativeName: 'कॉशुर', region: 'indian' },
  
  // World Languages
  { code: 'es', name: 'Spanish', nativeName: 'Español', region: 'world' },
  { code: 'fr', name: 'French', nativeName: 'Français', region: 'world' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', region: 'world' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', region: 'world' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', region: 'world' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', region: 'world' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', region: 'world' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', region: 'world' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', region: 'world' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', region: 'world' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', region: 'world' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', region: 'world' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', region: 'world' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', region: 'world' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', region: 'world' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', region: 'world' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', region: 'world' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', region: 'world' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', region: 'world' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', region: 'world' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', region: 'world' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', region: 'world' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', region: 'world' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', region: 'world' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', region: 'world' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', region: 'world' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', region: 'world' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', region: 'world' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallbackHi?: string) => string;
  getCurrentLanguage: () => LanguageInfo;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('app-language') : null;
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('app-language', lang);
    }
  };

  // Handle RTL languages
  React.useEffect(() => {
    const rtlLanguages: Language[] = ['ar', 'ur', 'he', 'fa'];
    if (typeof document !== 'undefined') {
      document.documentElement.dir = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  // Translation function that uses the translations dictionary
  // If key exists in translations, use it; otherwise fallback to the key itself or Hindi fallback
  const t = (key: string, fallbackHi?: string): string => {
    // Check if key exists in translations
    if (translations[key]) {
      return getTranslation(key, language);
    }
    
    // Legacy fallback: if fallbackHi is provided and language is Hindi, use it
    if (fallbackHi && language === 'hi') {
      return fallbackHi;
    }
    
    // For other languages without translations, return the English key
    return key;
  };

  const getCurrentLanguage = (): LanguageInfo => {
    return LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

