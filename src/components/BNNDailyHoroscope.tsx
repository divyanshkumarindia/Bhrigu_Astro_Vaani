import React, { useRef } from 'react';
import { KundaliReport } from '@/types/astrology';
import { useLanguage } from '@/contexts/LanguageContext';
import { BirthChartSummary } from '@/components/BirthChartSummary';
import { PanchangDisplay } from '@/components/PanchangDisplay';

import { BNNBriefDailyHoroscopeSummary } from '@/components/BNNBriefDailyHoroscopeSummary';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sun, Calendar } from 'lucide-react';

interface BNNDailyHoroscopeProps {
  report: KundaliReport;
  onBack: () => void;
}

export const BNNDailyHoroscope: React.FC<BNNDailyHoroscopeProps> = ({ report, onBack }) => {
  const { language, t } = useLanguage();
  const today = new Date();
  const todayFormatted = today.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-primary flex items-center gap-3">
            <Sun className="w-7 h-7 text-blue-400" />
            {t("Your Today's BNN Horoscope", 'आज का BNN राशिफल')}
          </h2>
          <p className="text-muted-foreground text-sm mt-1 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {todayFormatted} — {report.name}
          </p>
        </div>
      </div>

      {/* Today's Date Banner */}
      <div className="glass-card p-4 rounded-xl border border-amber-500/30 bg-gradient-to-r from-blue-500/10 via-orange-500/5 to-yellow-500/10">
        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {t("Today's Date", 'आज की तारीख')}
          </p>
          <p className="font-display text-xl text-primary">{todayFormatted}</p>
          <p className="text-sm text-muted-foreground mt-1">
            {t('Personalized daily predictions for', 'के लिए व्यक्तिगत दैनिक भविष्यवाणी')} <span className="text-foreground font-medium">{report.name}</span>
          </p>
        </div>
      </div>

      {/* Birth Chart Summary */}
      <BirthChartSummary report={report} />

      {/* Panchang */}
      {report.panchang && <PanchangDisplay panchang={report.panchang} />}



      {/* BNN Brief Summary of Today's Horoscope */}
      <BNNBriefDailyHoroscopeSummary report={report} />
    </div>
  );
};

