import React from 'react';
import { KundaliReport, PLANET_SYMBOLS, RASHI_SHORT, RASHI_SANSKRIT, RashiSign, PlanetPosition } from '@/types/astrology';
import { calculateChalitHouse } from '@/lib/parashari';
import { isExalted, isDebilitated } from '@/lib/exaltation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface NorthIndianChartProps {
  report: KundaliReport;
  title?: string;
  showChalit?: boolean;
}

const RASHI_ORDER: RashiSign[] = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export const NorthIndianChart: React.FC<NorthIndianChartProps> = ({ 
  report, 
  title = "Lagna Kundali (D1)",
  showChalit = false 
}) => {
  const { language, t } = useLanguage();
  const ascendantIndex = RASHI_ORDER.indexOf(report.ascendant.sign);

  const getPlanetsInHouse = (houseNum: number): PlanetPosition[] => {
    if (showChalit) {
      return report.planets.filter(p => calculateChalitHouse(p, report.houses) === houseNum);
    }
    return report.planets.filter(p => p.house === houseNum);
  };

  const getSignForHouse = (houseNum: number): RashiSign => {
    const signIndex = (ascendantIndex + houseNum - 1) % 12;
    return RASHI_ORDER[signIndex];
  };

  const getRashiDisplay = (sign: RashiSign): string => {
    // Always show both English and Hindi
    return `${RASHI_SHORT[sign]} (${RASHI_SANSKRIT[sign]})`;
  };

  const formatPlanetDisplay = (planet: PlanetPosition, isCompact: boolean = false) => {
    const exalted = isExalted(planet.name, planet.sign);
    const debilitated = isDebilitated(planet.name, planet.sign);

    return (
      <div
        key={planet.name}
        className={`
          flex items-center gap-0.5 text-[10px] sm:text-[11px] font-bold whitespace-nowrap
          ${exalted 
            ? 'text-green-600 dark:text-green-400' 
            : debilitated 
              ? 'text-red-600 dark:text-red-400'
              : planet.isRetrograde 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-foreground'
          }
        `}
        title={`${planet.name} ${planet.degree.toFixed(2)}° in ${planet.sign} ${exalted ? '(Exalted)' : ''} ${debilitated ? '(Debilitated)' : ''} ${planet.isRetrograde ? '(Retrograde)' : ''}`}
      >
        <span className="font-black">{PLANET_SYMBOLS[planet.name]}</span>
          {exalted && <ArrowUp className="w-2.5 h-2.5 text-green-700 dark:text-green-300" strokeWidth={3} />}
          {debilitated && <ArrowDown className="w-2.5 h-2.5 text-red-700 dark:text-red-300" strokeWidth={3} />}
          {planet.isRetrograde && <span className="text-[8px] text-blue-800 dark:text-amber-200 font-black">R</span>}
        {!isCompact && <span className="text-[8px] font-medium text-foreground/70">{planet.degree.toFixed(0)}°</span>}
      </div>
    );
  };

  const renderPlanetContent = (houseNum: number, isCenter: boolean = false) => {
    const planets = getPlanetsInHouse(houseNum);
    const sign = getSignForHouse(houseNum);
    const isCompact = planets.length > 3;
    
    // Center houses (1,4,7,10) need centered content
    const justifyClass = isCenter ? 'justify-center' : 'justify-start';
    
    return (
      <div className={`flex flex-col items-center ${justifyClass} h-full w-full p-1 box-border overflow-hidden`}>
        <span className="text-[10px] sm:text-[11px] text-foreground font-semibold leading-tight text-center mb-1 whitespace-nowrap">
          {getRashiDisplay(sign)}
        </span>
        
        {planets.length > 0 && (
          <div className="flex flex-wrap gap-0.5 justify-center items-center w-full">
            {planets.map(planet => formatPlanetDisplay(planet, isCompact))}
          </div>
        )}
      </div>
    );
  };

  // Optimized house positions for better space utilization and no overlap
  const housePositions: Record<number, React.CSSProperties> = {
    // House 1 - top center kendra (large triangular area)
    1: { top: '5%', left: '30%', width: '40%', height: '26%' },
    // House 2 - top left corner (expanded for better fit)
    2: { top: '2%', left: '4%', width: '28%', height: '24%' },
    // House 3 - left upper side (shifted down and expanded)
    3: { top: '24%', left: '2%', width: '26%', height: '18%' },
    // House 4 - left center kendra (large triangular area)
    4: { top: '36%', left: '-2%', width: '34%', height: '28%' },
    // House 5 - left lower side (shifted up and expanded)
    5: { top: '60%', left: '2%', width: '26%', height: '18%' },
    // House 6 - bottom left corner (expanded for better fit)
    6: { top: '74%', left: '4%', width: '28%', height: '24%' },
    // House 7 - bottom center kendra (large triangular area)
    7: { top: '69%', left: '30%', width: '40%', height: '26%' },
    // House 8 - bottom right corner (expanded for better fit)
    8: { top: '74%', left: '68%', width: '28%', height: '24%' },
    // House 9 - right lower side (shifted up and expanded)
    9: { top: '60%', left: '72%', width: '26%', height: '18%' },
    // House 10 - right center kendra (shifted inward to prevent overflow)
    10: { top: '38%', left: '70%', width: '28%', height: '24%' },
    // House 11 - right upper side (shifted down and expanded)
    11: { top: '24%', left: '72%', width: '26%', height: '18%' },
    // House 12 - top right corner (expanded for better fit)
    12: { top: '2%', left: '68%', width: '28%', height: '24%' },
  };

  return (
    <div className="w-full max-w-lg mx-auto" id="north-indian-chart">
      <div className="glass-card p-5 rounded-xl">
        <div className="text-center mb-5">
          <h3 className="font-display text-xl text-primary">
            {t(title, 'लग्न कुण्डली (D1)')}
          </h3>
        </div>

        <div className="relative w-full aspect-square max-w-[420px] mx-auto">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <rect x="10" y="10" width="280" height="280" fill="none" stroke="hsl(var(--primary) / 0.4)" strokeWidth="2"/>
            <line x1="10" y1="10" x2="150" y2="150" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" />
            <line x1="290" y1="10" x2="150" y2="150" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" />
            <line x1="290" y1="290" x2="150" y2="150" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" />
            <line x1="10" y1="290" x2="150" y2="150" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" />
            <polygon points="150,10 290,150 150,290 10,150" fill="none" stroke="hsl(var(--primary) / 0.35)" strokeWidth="1.5"/>
            
            <text x="150" y="25" textAnchor="middle" className="fill-primary text-[12px] font-display font-semibold">1</text>
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(houseNum => {
              const isKendra = [1, 4, 7, 10].includes(houseNum);
              return (
                <div 
                  key={houseNum}
                  className={`absolute flex items-center justify-center ${isKendra ? 'items-center' : ''}`}
                  style={housePositions[houseNum]}
                >
                  {renderPlanetContent(houseNum, isKendra)}
                </div>
              );
            })}

            <div className="absolute" style={{ top: '34%', left: '30%', width: '40%', height: '32%' }}>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-display text-base sm:text-lg text-primary truncate w-full px-2">
                  {report.name}
                </p>
                <p className="text-[10px] sm:text-[12px] text-muted-foreground mt-1">
                  {new Date(report.dateOfBirth).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                    day: 'numeric', month: 'short', year: 'numeric',
                  })}
                </p>
                <p className="text-[10px] sm:text-[12px] text-muted-foreground">{report.timeOfBirth}</p>
                {showChalit && <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded mt-1">CHALIT</span>}
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
        </div>
      </div>
    </div>
  );
};
