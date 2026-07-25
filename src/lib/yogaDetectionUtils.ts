// Centralized Yoga Detection Utility
// Provides consistent yoga detection logic across all BNN components

import { GrahaName, KundaliReport } from '@/types/astrology';
import { arePlanetsConnected, ConnectionResult } from './bnnAspectUtils';
import { DHANA_YOGAS_EXTENDED, DhanaYogaExtended } from './bnnDhanaData';
import { PLANETARY_REMEDIES, PlanetaryRemedy } from './bnnRemediesData';

// ============================================
// UNIFIED YOGA INTERFACE
// ============================================

export type YogaCategory = 'wealth';
export type YogaNature = 'benefic' | 'malefic' | 'mixed';

export interface DetectedYoga {
  id: string;
  name: string;
  nameHi: string;
  category: YogaCategory;
  nature: YogaNature;
  strength: number; // 0-100
  planets: GrahaName[];
  houses: number[];
  description: string;
  descriptionHi: string;
  effects: string[];
  effectsHi: string[];
  remedyPlanets?: GrahaName[];
  connectionType?: string;
  connectionTypeHi?: string;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

const getPlanetHouse = (report: KundaliReport, planetName: GrahaName): number => {
  const planet = report.planets.find(p => p.name === planetName);
  return planet?.house || 1;
};

const generateYogaId = (category: string, name: string, planets: string[]): string => {
  return `${category}-${name.toLowerCase().replace(/\s+/g, '-')}-${planets.join('-')}`;
};



// ============================================
// WEALTH (DHANA) YOGA DETECTION
// ============================================

export interface WealthYogaResult extends DetectedYoga {
  wealthType: DhanaYogaExtended['type'];
  intensity: DhanaYogaExtended['intensity'];
  specificRemedies?: string[];
  specificRemediesHi?: string[];
}

export const detectWealthYogas = (report: KundaliReport): WealthYogaResult[] => {
  const detectedYogas: WealthYogaResult[] = [];

  DHANA_YOGAS_EXTENDED.forEach(yoga => {
    // Special handling for Kemadruma Yoga
    if (yoga.name === 'Kemadruma Yoga (Isolation Poverty)') {
      const moonHouse = getPlanetHouse(report, 'Moon');
      const secondFromMoon = (moonHouse % 12) + 1;
      const twelfthFromMoon = moonHouse === 1 ? 12 : moonHouse - 1;

      let planetsIn2nd = 0;
      let planetsIn12th = 0;

      report.planets.forEach(p => {
        if (p.name !== 'Moon') {
          if (p.house === secondFromMoon) planetsIn2nd++;
          if (p.house === twelfthFromMoon) planetsIn12th++;
        }
      });

      if (planetsIn2nd === 0 && planetsIn12th === 0) {
        detectedYogas.push({
          id: generateYogaId('wealth', yoga.name, ['Moon']),
          name: yoga.name,
          nameHi: yoga.nameHi,
          category: 'wealth',
          nature: 'malefic',
          strength: 70,
          planets: ['Moon'],
          houses: [moonHouse],
          description: yoga.conditions,
          descriptionHi: yoga.conditionsHi,
          effects: yoga.effects,
          effectsHi: yoga.effectsHi,
          wealthType: yoga.type,
          intensity: yoga.intensity,
          specificRemedies: yoga.remedies,
          specificRemediesHi: yoga.remediesHi,
          remedyPlanets: ['Moon']
        });
      }
      return;
    }

    // Special handling for Shakat Yoga
    if (yoga.name === 'Shakat Yoga (Fluctuating Fortune)') {
      const moonHouse = getPlanetHouse(report, 'Moon');
      const jupiterHouse = getPlanetHouse(report, 'Jupiter');
      const diff = ((moonHouse - jupiterHouse + 12) % 12);

      if (diff === 5 || diff === 7 || diff === 11) {
        detectedYogas.push({
          id: generateYogaId('wealth', yoga.name, ['Moon', 'Jupiter']),
          name: yoga.name,
          nameHi: yoga.nameHi,
          category: 'wealth',
          nature: 'malefic',
          strength: 65,
          planets: ['Moon', 'Jupiter'],
          houses: [moonHouse, jupiterHouse],
          description: yoga.conditions,
          descriptionHi: yoga.conditionsHi,
          effects: yoga.effects,
          effectsHi: yoga.effectsHi,
          wealthType: yoga.type,
          intensity: yoga.intensity,
          specificRemedies: yoga.remedies,
          specificRemediesHi: yoga.remediesHi,
          remedyPlanets: ['Moon', 'Jupiter']
        });
      }
      return;
    }

    // Standard yoga detection
    if (yoga.planets.length >= 2) {
      const mainPlanets = yoga.planets.slice(0, 2) as GrahaName[];
      const connection = arePlanetsConnected(report, mainPlanets[0], mainPlanets[1]);

      if (connection.connected) {
        const house1 = getPlanetHouse(report, mainPlanets[0]);
        const house2 = getPlanetHouse(report, mainPlanets[1]);

        let strength = connection.strength;

        // Reduce strength if in bad houses
        if ([6, 8, 12].includes(house1) || [6, 8, 12].includes(house2)) {
          strength = Math.max(40, strength - 20);
        }

        const nature: YogaNature = yoga.type === 'poverty' ? 'malefic' : 'benefic';

        detectedYogas.push({
          id: generateYogaId('wealth', yoga.name, mainPlanets),
          name: yoga.name,
          nameHi: yoga.nameHi,
          category: 'wealth',
          nature,
          strength,
          planets: mainPlanets,
          houses: [house1, house2],
          description: yoga.conditions,
          descriptionHi: yoga.conditionsHi,
          effects: yoga.effects,
          effectsHi: yoga.effectsHi,
          wealthType: yoga.type,
          intensity: yoga.intensity,
          specificRemedies: yoga.remedies,
          specificRemediesHi: yoga.remediesHi,
          connectionType: connection.relationship,
          connectionTypeHi: connection.relationshipHi,
          remedyPlanets: mainPlanets
        });
      }
    }
  });

  return detectedYogas.sort((a, b) => b.strength - a.strength);
};

// ============================================
// COMPREHENSIVE YOGA DETECTION
// ============================================

export interface YogaSummary {
  totalYogas: number;
  beneficCount: number;
  maleficCount: number;
  mixedCount: number;
  strongestYoga: DetectedYoga | null;
  categoryCounts: Record<YogaCategory, number>;
  allYogas: DetectedYoga[];
  wealthYogas: WealthYogaResult[];
}

export const detectAllYogas = (report: KundaliReport): YogaSummary => {
  const wealthYogas = detectWealthYogas(report);

  const allYogas: DetectedYoga[] = [
    ...wealthYogas
  ];

  const beneficCount = allYogas.filter(y => y.nature === 'benefic').length;
  const maleficCount = allYogas.filter(y => y.nature === 'malefic').length;
  const mixedCount = allYogas.filter(y => y.nature === 'mixed').length;

  const categoryCounts: Record<YogaCategory, number> = {
    wealth: wealthYogas.length
  };

  const strongestYoga = allYogas.reduce((max, yoga) =>
    (!max || yoga.strength > max.strength) ? yoga : max
    , null as DetectedYoga | null);

  return {
    totalYogas: allYogas.length,
    beneficCount,
    maleficCount,
    mixedCount,
    strongestYoga,
    categoryCounts,
    allYogas: allYogas.sort((a, b) => b.strength - a.strength),
    wealthYogas
  };
};

// ============================================
// REMEDY AGGREGATION
// ============================================

export interface AggregatedRemedies {
  planet: GrahaName;
  remedy: PlanetaryRemedy;
  relevantYogas: DetectedYoga[];
  priority: 'high' | 'medium' | 'low';
}

export const getRemediesForYogas = (yogas: DetectedYoga[]): AggregatedRemedies[] => {
  const planetRemedyMap = new Map<GrahaName, DetectedYoga[]>();

  // Collect all planets needing remedies
  yogas.forEach(yoga => {
    if (yoga.nature === 'malefic' || yoga.nature === 'mixed') {
      yoga.remedyPlanets?.forEach(planet => {
        if (!planetRemedyMap.has(planet)) {
          planetRemedyMap.set(planet, []);
        }
        planetRemedyMap.get(planet)?.push(yoga);
      });
    }
  });

  // Build aggregated remedies
  const aggregatedRemedies: AggregatedRemedies[] = [];

  planetRemedyMap.forEach((relevantYogas, planet) => {
    const remedy = PLANETARY_REMEDIES[planet];
    if (remedy) {
      const maxStrength = Math.max(...relevantYogas.map(y => y.strength));
      const priority: 'high' | 'medium' | 'low' =
        maxStrength >= 80 ? 'high' : maxStrength >= 60 ? 'medium' : 'low';

      aggregatedRemedies.push({
        planet,
        remedy,
        relevantYogas,
        priority
      });
    }
  });

  // Sort by priority
  return aggregatedRemedies.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
};

// ============================================
// PDF EXPORT HELPERS
// ============================================

export const generateYogaExportText = (summary: YogaSummary, language: 'en' | 'hi' = 'en'): string => {
  const lines: string[] = [];

  lines.push('═══════════════════════════════════════════════════════════════');
  lines.push(language === 'en' ? '           COMPREHENSIVE YOG ANALYSIS REPORT' : '           व्यापक योग विश्लेषण रिपोर्ट');
  lines.push('═══════════════════════════════════════════════════════════════');
  lines.push('');

  // Summary section
  lines.push(language === 'en' ? '📊 SUMMARY' : '📊 सारांश');
  lines.push('───────────────────────────────────────────────────────────────');
  lines.push(`${language === 'en' ? 'Total Yogs Detected' : 'कुल योग'}: ${summary.totalYogas}`);
  lines.push(`${language === 'en' ? 'Benefic Yogs' : 'शुभ योग'}: ${summary.beneficCount}`);
  lines.push(`${language === 'en' ? 'Malefic Yogs' : 'अशुभ योग'}: ${summary.maleficCount}`);
  lines.push(`${language === 'en' ? 'Mixed Yogs' : 'मिश्रित योग'}: ${summary.mixedCount}`);
  lines.push('');

  // Strongest yog
  if (summary.strongestYoga) {
    lines.push(language === 'en' ? '⭐ STRONGEST YOG' : '⭐ सबसे प्रबल योग');
    lines.push('───────────────────────────────────────────────────────────────');
    lines.push(`${language === 'en' ? summary.strongestYoga.name : summary.strongestYoga.nameHi} (${summary.strongestYoga.strength}%)`);
    lines.push(`${language === 'en' ? 'Planets' : 'ग्रह'}: ${summary.strongestYoga.planets.join(', ')}`);
    lines.push(`${language === 'en' ? 'Houses' : 'भाव'}: ${summary.strongestYoga.houses.join(', ')}`);
    lines.push('');
  }

  // Category breakdown
  const categories: { key: YogaCategory; label: string; labelHi: string }[] = [
    { key: 'wealth', label: 'Wealth Yogs', labelHi: 'धन योग' }
  ];

  categories.forEach(cat => {
    const yogas = summary.allYogas.filter(y => y.category === cat.key);
    if (yogas.length > 0) {
      lines.push(`\n📌 ${language === 'en' ? cat.label.toUpperCase() : cat.labelHi}`);
      lines.push('───────────────────────────────────────────────────────────────');

      yogas.forEach((yoga, idx) => {
        const natureSymbol = yoga.nature === 'benefic' ? '✓' : yoga.nature === 'malefic' ? '✗' : '◐';
        lines.push(`${idx + 1}. ${natureSymbol} ${language === 'en' ? yoga.name : yoga.nameHi}`);
        lines.push(`   ${language === 'en' ? 'Strength' : 'शक्ति'}: ${yoga.strength}% | ${language === 'en' ? 'Planets' : 'ग्रह'}: ${yoga.planets.join(', ')}`);
        lines.push(`   ${language === 'en' ? yoga.description : yoga.descriptionHi}`);
        lines.push('');
      });
    }
  });

  // Remedies section
  const remedies = getRemediesForYogas(summary.allYogas);
  if (remedies.length > 0) {
    lines.push('\n🙏 RECOMMENDED REMEDIES / अनुशंसित उपाय');
    lines.push('═══════════════════════════════════════════════════════════════');

    remedies.forEach(r => {
      const priorityLabel = r.priority === 'high' ? '⚠️ HIGH PRIORITY' : r.priority === 'medium' ? '⚡ MEDIUM' : '📝 LOW';
      lines.push(`\n${priorityLabel} - ${r.planet}`);
      lines.push('───────────────────────────────────────────────────────────────');
      lines.push(`${language === 'en' ? 'Gemstone' : 'रत्न'}: ${language === 'en' ? r.remedy.gemstone.name.en : r.remedy.gemstone.name.hi}`);
      lines.push(`${language === 'en' ? 'Mantra' : 'मंत्र'}: ${r.remedy.mantra.vedic}`);
      lines.push(`${language === 'en' ? 'Donation Day' : 'दान दिवस'}: ${language === 'en' ? r.remedy.donation.day.en : r.remedy.donation.day.hi}`);
      lines.push(`${language === 'en' ? 'Fasting' : 'व्रत'}: ${language === 'en' ? r.remedy.fasting.day.en : r.remedy.fasting.day.hi}`);
      lines.push(`${language === 'en' ? 'Deity' : 'देवता'}: ${language === 'en' ? r.remedy.deity.name.en : r.remedy.deity.name.hi}`);
    });
  }

  lines.push('\n═══════════════════════════════════════════════════════════════');
  lines.push(`${language === 'en' ? 'Generated on' : 'जनरेट तिथि'}: ${new Date().toLocaleString()}`);
  lines.push('Powered by Bhrighu Jyotish Vani - Bhrigu/Vedic Astrology Engine');
  lines.push('═══════════════════════════════════════════════════════════════');

  return lines.join('\n');
};
