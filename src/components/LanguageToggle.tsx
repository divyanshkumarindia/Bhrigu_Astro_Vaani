import React from 'react';
import { useLanguage, LANGUAGES, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LanguageToggleProps {
  className?: string;
  triggerClassName?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className, triggerClassName }) => {
  const { language, setLanguage, getCurrentLanguage } = useLanguage();

  const indianLanguages = LANGUAGES.filter(l => l.region === 'indian');
  const worldLanguages = LANGUAGES.filter(l => l.region === 'world');
  const currentLang = getCurrentLanguage();

  return (
    <div className={className || "flex items-center gap-2"}>
      {!className && <Globe className="w-4 h-4 text-muted-foreground" />}
      <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
        <SelectTrigger className={triggerClassName || "w-[160px] h-8 text-xs bg-background border-border"}>
          <SelectValue>
            {currentLang.nativeName} ({currentLang.name})
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-[300px] bg-background border-border z-50">
          <SelectGroup>
            <SelectLabel className="text-xs text-muted-foreground font-semibold">Indian Languages</SelectLabel>
            {indianLanguages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code} className="text-xs">
                {lang.nativeName} ({lang.name})
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className="text-xs text-muted-foreground font-semibold">World Languages</SelectLabel>
            {worldLanguages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code} className="text-xs">
                {lang.nativeName} ({lang.name})
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

