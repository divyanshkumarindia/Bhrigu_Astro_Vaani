import React from 'react';
import { KundaliReport, PlanetPosition, PLANET_SANSKRIT, RASHI_SANSKRIT, GrahaName, RashiSign } from '@/types/astrology';
import { isExalted, isDebilitated } from '@/lib/exaltation';
import { calculateChalitHouse } from '@/lib/parashari';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp, ArrowDown } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface PlanetTableProps {
  planets: PlanetPosition[];
  report?: KundaliReport;
}

export const PlanetTable: React.FC<PlanetTableProps> = ({ planets, report }) => {
  const { language, t } = useLanguage();

  const getChalitHouse = (planet: PlanetPosition): number | null => {
    if (!report?.houses) return null;
    return calculateChalitHouse(planet, report.houses);
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden" id="planet-table">
      <div className="p-4 border-b border-border/50">
        <h3 className="font-display text-lg text-primary">
          {t('Planetary Positions', 'ग्रह स्थिति')}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {t('Graha Sthiti', 'ग्रह स्थिति')}
        </p>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow className="border-border/50 hover:bg-transparent">
            <TableHead className="text-primary font-display">{t('Planet', 'ग्रह')}</TableHead>
            <TableHead className="text-primary font-display">{t('Sign', 'राशि')}</TableHead>
            <TableHead className="text-primary font-display text-center">{t('Degree', 'अंश')}</TableHead>
            <TableHead className="text-primary font-display text-center">{t('House', 'भाव')}</TableHead>
            <TableHead className="text-primary font-display text-center">{t('Status', 'स्थिति')}</TableHead>
            {report && (
              <TableHead className="text-primary font-display text-center">
                {t('Chalit House', 'चलित भाव')}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {planets.map((planet, idx) => {
            const exalted = isExalted(planet.name, planet.sign);
            const debilitated = isDebilitated(planet.name, planet.sign);
            const chalitHouse = getChalitHouse(planet);
            const shifted = chalitHouse !== null && chalitHouse !== planet.house;
            
            return (
              <TableRow 
                key={idx} 
                className="border-border/30 hover:bg-primary/5 transition-colors"
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span className={planet.isRetrograde ? 'text-accent' : 'text-foreground'}>
                      {planet.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({PLANET_SANSKRIT[planet.name]})
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {planet.sign}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({RASHI_SANSKRIT[planet.sign]})
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center font-mono text-sm">
                  {planet.degree.toFixed(2)}°
                </TableCell>
                <TableCell className="text-center">
                  <span className="px-2 py-1 bg-muted/50 rounded text-sm">
                    {planet.house}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1 flex-wrap">
                    {exalted && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded text-xs font-bold">
                        <ArrowUp className="w-3 h-3" />
                        {t('Exalted', 'उच्च')}
                      </span>
                    )}
                    {debilitated && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded text-xs font-bold">
                        <ArrowDown className="w-3 h-3" />
                        {t('Debilitated', 'नीच')}
                      </span>
                    )}
                    {planet.isRetrograde && (
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded text-xs font-bold">
                        {t('Vakri (R)', 'वक्री (R)')}
                      </span>
                    )}
                    {!exalted && !debilitated && !planet.isRetrograde && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-amber-900/50 text-blue-800 dark:text-amber-200 rounded text-xs font-bold">
                        {t('Direct', 'मार्गी')}
                      </span>
                    )}
                  </div>
                </TableCell>
                {report && (
                  <TableCell className="text-center">
                    {chalitHouse !== null ? (
                      <span className={`px-2 py-1 rounded text-sm ${
                        shifted 
                          ? 'bg-blue-100 dark:bg-amber-900/50 text-blue-800 dark:text-amber-200 font-bold' 
                          : 'bg-muted/50 font-medium'
                      }`}>
                        {chalitHouse}
                        {shifted && (
                          <span className="ml-1 text-xs opacity-70">
                            ({t('shifted', 'स्थानांतरित')})
                          </span>
                        )}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

