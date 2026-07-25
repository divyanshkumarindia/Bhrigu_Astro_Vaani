import React, { useState } from 'react';
import { Lock, Unlock, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface PremiumRemedySectionProps {
  children: React.ReactNode;
  isPremium?: boolean;
}

export const PremiumRemedySection: React.FC<PremiumRemedySectionProps> = ({ 
  children, 
  isPremium = true 
}) => {
  const { t } = useLanguage();
  // Set to true by default for now, can be toggled via global state/subscription in the future.
  const [isUnlocked, setIsUnlocked] = useState(true);

  if (!isPremium) {
    return <>{children}</>;
  }

  if (!isUnlocked) {
    return (
      <div className="mt-4 relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-background to-primary/5 p-6 text-center shadow-sm">
        <div className="absolute inset-0 bg-primary/5 blur-xl"></div>
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
          <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h4 className="text-xl font-display text-primary mb-1">
              {t('Premium Remedies', 'प्रीमियम उपाय')}
            </h4>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              {t('Unlock powerful Vedic remedies, Beej Mantras, gemstone recommendations, and specific charity to mitigate challenges and enhance positive effects.', 'चुनौतियों को कम करने और सकारात्मक प्रभावों को बढ़ाने के लिए शक्तिशाली वैदिक उपायों, बीज मंत्रों, रत्न अनुशंसाओं और विशिष्ट दान को अनलॉक करें।')}
            </p>
          </div>
          <Button 
            className="mt-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0"
            onClick={() => setIsUnlocked(true)}
          >
            <Unlock className="w-4 h-4 mr-2" />
            {t('Unlock Remedies (Demo)', 'उपाय अनलॉक करें (डेमो)')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 relative rounded-xl border border-primary/30 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-transparent p-2.5 flex items-center justify-between border-b border-primary/20">
        <div className="flex items-center gap-2 px-2">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t('Premium Remedies', 'प्रीमियम उपाय')}
          </span>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-7 text-xs text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsUnlocked(false)}
          title="Toggle Lock for Demo"
        >
          <Lock className="w-3 h-3 mr-1" />
          {t('Lock (Demo)', 'लॉक (डेमो)')}
        </Button>
      </div>
      <div className="p-4 bg-gradient-to-br from-background to-primary/5">
        {children}
      </div>
    </div>
  );
};

