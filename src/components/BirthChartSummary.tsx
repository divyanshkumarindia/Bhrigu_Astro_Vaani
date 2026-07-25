import React, { useMemo } from 'react';
import { KundaliReport, RASHI_SANSKRIT, PLANET_SANSKRIT, RashiSign, GrahaName } from '@/types/astrology';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Sun, Moon, Star, Crown } from 'lucide-react';

interface BirthChartSummaryProps {
  report: KundaliReport;
}

const SIGN_LORDS: Record<RashiSign, GrahaName> = {
  Aries: 'Mars', Taurus: 'Venus', Gemini: 'Mercury', Cancer: 'Moon',
  Leo: 'Sun', Virgo: 'Mercury', Libra: 'Venus', Scorpio: 'Mars',
  Sagittarius: 'Jupiter', Capricorn: 'Saturn', Aquarius: 'Saturn', Pisces: 'Jupiter'
};

export const BirthChartSummary: React.FC<BirthChartSummaryProps> = ({ report }) => {
  const { language, t } = useLanguage();

  const basicAnalysis = useMemo(() => {
    const ascendantSign = report.ascendant.sign;
    const ascendantLord = SIGN_LORDS[ascendantSign];
    const ascendantLordPos = report.planets.find(p => p.name === ascendantLord);
    
    const moonSign = report.planets.find(p => p.name === 'Moon')?.sign;
    const sunSign = report.planets.find(p => p.name === 'Sun')?.sign;
    
    return {
      ascendant: {
        sign: ascendantSign,
        degree: report.ascendant.degree,
        nakshatra: report.ascendant.nakshatra,
        lord: ascendantLord,
        lordHouse: ascendantLordPos?.house || 1
      },
      moonSign,
      sunSign
    };
  }, [report]);

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 p-6 border border-primary/30">
        <h3 className="font-bold text-foreground mb-5 flex items-center gap-3 text-xl font-display">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <Star className="w-6 h-6 text-primary" />
          </div>
          {t('Birth Chart Summary (Janma Kundali)', 'जन्म कुंडली सारांश')}
        </h3>
        
        <div className="flex flex-wrap gap-2.5 mb-2">
          {/* Birth Details as Pills */}
          <Badge variant="outline" className="text-[13px] px-4 py-2 bg-blue-50/80 dark:bg-blue-900/40 border-blue-200 dark:border-blue-700 hover:bg-blue-100 transition-colors font-bold rounded-full shadow-sm text-blue-800 dark:text-blue-100">
            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
            {t('Date of Birth', 'जन्म तिथि')}: {report.dateOfBirth}
          </Badge>
          <Badge variant="outline" className="text-[13px] px-4 py-2 bg-indigo-50/80 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-700 hover:bg-indigo-100 transition-colors font-bold rounded-full shadow-sm text-indigo-800 dark:text-indigo-100">
            <Clock className="w-4 h-4 mr-2 text-indigo-600" />
            {t('Time of Birth', 'जन्म समय')}: {report.timeOfBirth}
          </Badge>
          <Badge variant="outline" className="text-[13px] px-4 py-2 bg-slate-50/80 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors font-bold rounded-full shadow-sm text-slate-800 dark:text-slate-100">
            <MapPin className="w-4 h-4 mr-2 text-slate-600" />
            {t('Place', 'स्थान')}: {report.placeOfBirth}
          </Badge>
          <Badge variant="outline" className="text-[13px] px-4 py-2 bg-emerald-50/80 dark:bg-emerald-900/40 border-emerald-200 dark:border-emerald-700 hover:bg-emerald-100 transition-colors font-bold rounded-full shadow-sm text-emerald-800 dark:text-emerald-100">
            <Crown className="w-4 h-4 mr-2 text-emerald-600" />
            {t('Lagna', 'लग्न')}: {basicAnalysis.ascendant.sign} ({RASHI_SANSKRIT[basicAnalysis.ascendant.sign]})
          </Badge>

          {/* Analysis Details as Pills */}
          <Badge variant="outline" className="text-[13px] px-4 py-2 bg-blue-100 dark:bg-blue-900/60 border-blue-400/50 hover:bg-blue-200 transition-colors font-bold rounded-full shadow-sm text-blue-900 dark:text-blue-100">
            <Moon className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-300" />
            {t('Moon Sign', 'चंद्र राशि')}: {basicAnalysis.moonSign ? `${basicAnalysis.moonSign} (${RASHI_SANSKRIT[basicAnalysis.moonSign]})` : '-'}
          </Badge>
          <Badge variant="outline" className="text-[13px] px-4 py-2 bg-orange-100/80 dark:bg-orange-900/60 border-orange-400/50 hover:bg-orange-200 transition-colors font-bold rounded-full shadow-sm text-orange-900 dark:text-orange-100">
            <Sun className="w-4 h-4 mr-2 text-orange-600 dark:text-orange-300" />
            {t('Sun Sign', 'सूर्य राशि')}: {basicAnalysis.sunSign ? `${basicAnalysis.sunSign} (${RASHI_SANSKRIT[basicAnalysis.sunSign]})` : '-'}
          </Badge>
          <Badge variant="outline" className="text-[13px] px-4 py-2 bg-purple-100/80 dark:bg-purple-900/60 border-purple-400/50 hover:bg-purple-200 transition-colors font-bold rounded-full shadow-sm text-purple-900 dark:text-purple-100">
            <Star className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-300" />
            {t('Nakshatra', 'नक्षत्र')}: {report.ascendant.nakshatra}
          </Badge>
          <Badge variant="outline" className="text-[13px] px-4 py-2 bg-amber-100/80 dark:bg-amber-900/60 border-amber-400/50 hover:bg-amber-200 transition-colors font-bold rounded-full shadow-sm text-amber-900 dark:text-amber-100">
            <Crown className="w-4 h-4 mr-2 text-amber-600 dark:text-amber-300" />
            {t('Lagna Lord', 'लग्नेश')}: {language === 'hi' ? PLANET_SANSKRIT[basicAnalysis.ascendant.lord] : basicAnalysis.ascendant.lord} ({t('House', 'भाव')} {basicAnalysis.ascendant.lordHouse})
          </Badge>
        </div>
      </div>
    </div>
  );
};

