import React from 'react';
import { KundaliReport, PLANET_SYMBOLS, RASHI_SHORT, RASHI_SANSKRIT, RashiSign, PlanetPosition } from '@/types/astrology';
import { calculateChalitHouse } from '@/lib/parashari';
import { isExalted, isDebilitated } from '@/lib/exaltation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface ChalitChartProps {
  report: KundaliReport;
}

const RASHI_ORDER: RashiSign[] = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export const ChalitChart: React.FC<ChalitChartProps> = ({ report }) => {
  const { language, t } = useLanguage();
  const ascendantIndex = RASHI_ORDER.indexOf(report.ascendant.sign);

  const getChalitHouse = (planet: PlanetPosition): number => {
    return calculateChalitHouse(planet, report.houses);
  };

  const getPlanetsInChalitHouse = (houseNum: number) => {
    return report.planets.filter(p => getChalitHouse(p) === houseNum);
  };

  const getSignForHouse = (houseNum: number): RashiSign => {
    const signIndex = (ascendantIndex + houseNum - 1) % 12;
    return RASHI_ORDER[signIndex];
  };

  const getRashiDisplay = (sign: RashiSign): string => {
    return language === 'hi' ? RASHI_SANSKRIT[sign] : RASHI_SHORT[sign];
  };

  // Get grid layout based on planet count for flexible positioning
  const getGridLayout = (count: number): string => {
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count === 3) return 'grid-cols-2'; // 2+1 layout
    if (count === 4) return 'grid-cols-2';
    return 'grid-cols-3'; // 5+ planets
  };

  const formatPlanetDisplay = (planet: PlanetPosition) => {
    const chalitHouse = getChalitHouse(planet);
    const shifted = chalitHouse !== planet.house;
    const exalted = isExalted(planet.name, planet.sign);
    const debilitated = isDebilitated(planet.name, planet.sign);
    
    return (
      <div
        key={planet.name}
        className={`
          flex flex-col items-center text-[10px] sm:text-[12px] font-bold
          ${exalted 
            ? 'text-green-600 dark:text-green-400'
            : debilitated
              ? 'text-red-600 dark:text-red-400'
              : shifted 
                ? 'text-purple-600 dark:text-purple-400 font-bold' 
                : planet.isRetrograde 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-foreground'
          }
        `}
        title={`${planet.name} ${planet.degree.toFixed(2)}° | Rashi: H${planet.house}, Chalit: H${chalitHouse}`}
      >
        <div className="flex items-center gap-0.5">
          <span className="font-black">{PLANET_SYMBOLS[planet.name]}</span>
          {exalted && <ArrowUp className="w-3 h-3 text-green-700 dark:text-green-300" strokeWidth={3} />}
          {debilitated && <ArrowDown className="w-3 h-3 text-red-700 dark:text-red-300" strokeWidth={3} />}
          {planet.isRetrograde && <sup className="text-[8px] text-blue-800 dark:text-amber-200 font-black">R</sup>}
          {shifted && <sup className="text-[8px] text-purple-800 dark:text-purple-200 font-black">⇄</sup>}
        </div>
        <span className="text-[8px] sm:text-[9px] font-bold text-foreground/80">{planet.degree.toFixed(1)}°</span>
      </div>
    );
  };

  const renderPlanetContent = (houseNum: number) => {
    const planets = getPlanetsInChalitHouse(houseNum);
    const sign = getSignForHouse(houseNum);
    
    return (
      <div className="flex flex-col items-center justify-start h-full w-full p-0.5 overflow-hidden">
        <span className="text-[11px] sm:text-[13px] text-foreground font-bold leading-none truncate mb-0.5">
          {getRashiDisplay(sign)}
        </span>
        
        {planets.length > 0 && (
          <div className={`grid ${getGridLayout(planets.length)} gap-0.5 justify-items-center items-start w-full flex-1`}>
            {planets.map(planet => formatPlanetDisplay(planet))}
          </div>
        )}
      </div>
    );
  };

  // Optimized house positions for better space utilization
  const housePositions: Record<number, React.CSSProperties> = {
    // House 1 - top center kendra
    1: { top: '5%', left: '30%', width: '40%', height: '26%' },
    // House 2 - top left corner (expanded)
    2: { top: '2%', left: '4%', width: '28%', height: '24%' },
    // House 3 - left upper side
    3: { top: '24%', left: '2%', width: '26%', height: '18%' },
    // House 4 - left center kendra
    4: { top: '36%', left: '-2%', width: '34%', height: '28%' },
    // House 5 - left lower side
    5: { top: '60%', left: '2%', width: '26%', height: '18%' },
    // House 6 - bottom left corner (expanded)
    6: { top: '74%', left: '4%', width: '28%', height: '24%' },
    // House 7 - bottom center kendra
    7: { top: '69%', left: '30%', width: '40%', height: '26%' },
    // House 8 - bottom right corner (expanded)
    8: { top: '74%', left: '68%', width: '28%', height: '24%' },
    // House 9 - right lower side
    9: { top: '60%', left: '72%', width: '26%', height: '18%' },
    // House 10 - right center kendra (shifted inward to prevent overflow)
    10: { top: '38%', left: '70%', width: '28%', height: '24%' },
    // House 11 - right upper side
    11: { top: '24%', left: '72%', width: '26%', height: '18%' },
    // House 12 - top right corner (expanded)
    12: { top: '2%', left: '68%', width: '28%', height: '24%' },
  };

  return (
    <div className="w-full max-w-lg mx-auto" id="chalit-chart">
      <div className="glass-card p-5 rounded-xl border-secondary/20">
        <div className="text-center mb-5">
          <h3 className="font-display text-xl text-secondary">
            {t('Chalit Chart (Bhava)', 'चलित चार्ट (भाव)')}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {t('House cusp-based positions', 'भाव सन्धि आधारित स्थिति')}
          </p>
        </div>

        <div className="relative w-full aspect-square max-w-[420px] mx-auto">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <rect x="10" y="10" width="280" height="280" fill="none" stroke="hsl(var(--secondary) / 0.4)" strokeWidth="2"/>
            <line x1="10" y1="10" x2="150" y2="150" stroke="hsl(var(--secondary) / 0.25)" strokeWidth="1" />
            <line x1="290" y1="10" x2="150" y2="150" stroke="hsl(var(--secondary) / 0.25)" strokeWidth="1" />
            <line x1="290" y1="290" x2="150" y2="150" stroke="hsl(var(--secondary) / 0.25)" strokeWidth="1" />
            <line x1="10" y1="290" x2="150" y2="150" stroke="hsl(var(--secondary) / 0.25)" strokeWidth="1" />
            <polygon points="150,10 290,150 150,290 10,150" fill="none" stroke="hsl(var(--secondary) / 0.35)" strokeWidth="1.5"/>
            
            <text x="150" y="25" textAnchor="middle" className="fill-secondary text-[12px] font-display font-semibold">1</text>
            <text x="60" y="25" textAnchor="middle" className="fill-muted-foreground text-[10px]">2</text>
            <text x="25" y="80" textAnchor="middle" className="fill-muted-foreground text-[10px]">3</text>
            <text x="25" y="150" textAnchor="middle" className="fill-muted-foreground text-[10px]">4</text>
            <text x="25" y="220" textAnchor="middle" className="fill-muted-foreground text-[10px]">5</text>
            <text x="60" y="280" textAnchor="middle" className="fill-muted-foreground text-[10px]">6</text>
            <text x="150" y="290" textAnchor="middle" className="fill-muted-foreground text-[10px]">7</text>
            <text x="240" y="280" textAnchor="middle" className="fill-muted-foreground text-[10px]">8</text>
            <text x="275" y="220" textAnchor="middle" className="fill-muted-foreground text-[10px]">9</text>
            <text x="275" y="150" textAnchor="middle" className="fill-muted-foreground text-[10px]">10</text>
            <text x="275" y="80" textAnchor="middle" className="fill-muted-foreground text-[10px]">11</text>
            <text x="240" y="25" textAnchor="middle" className="fill-muted-foreground text-[10px]">12</text>
          </svg>
          
          <div className="absolute inset-0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(houseNum => (
              <div 
                key={houseNum}
                className="absolute flex items-center justify-center"
                style={housePositions[houseNum]}
              >
                {renderPlanetContent(houseNum)}
              </div>
            ))}

            <div className="absolute" style={{ top: '35%', left: '28%', width: '44%', height: '30%' }}>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-display text-base sm:text-lg text-secondary truncate w-full px-2">
                  {report.name}
                </p>
                <span className="text-[12px] bg-secondary/15 text-secondary px-2 py-0.5 rounded mt-1 border border-secondary/20">
                  {t('BHAVA CHALIT', 'भाव चलित')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-foreground font-semibold">
          <div className="flex items-center gap-1">
            <ArrowUp className="w-4 h-4 text-green-600 dark:text-green-400" strokeWidth={3} />
            <span>{t('Exalted', 'उच्च')}</span>
          </div>
          <div className="flex items-center gap-1">
            <ArrowDown className="w-4 h-4 text-red-600 dark:text-red-400" strokeWidth={3} />
            <span>{t('Debilitated', 'नीच')}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-blue-800 dark:text-amber-200 font-black">R</span>
            <span>{t('Retrograde', 'वक्री')}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-purple-800 dark:text-purple-200 text-[12px] font-black">⇄</span>
            <span>{t('Shifted', 'स्थानान्तरित')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
