import { GrahaName, RashiSign } from '@/types/astrology';

// Exaltation (Uccha) signs for each planet
export const PLANET_EXALTATION: Record<GrahaName, RashiSign> = {
  Sun: 'Aries',
  Moon: 'Taurus',
  Mars: 'Capricorn',
  Mercury: 'Virgo',
  Jupiter: 'Cancer',
  Venus: 'Pisces',
  Saturn: 'Libra',
  Rahu: 'Taurus',  // Per some traditions
  Ketu: 'Scorpio', // Per some traditions
};

// Debilitation (Neech) signs for each planet
export const PLANET_DEBILITATION: Record<GrahaName, RashiSign> = {
  Sun: 'Libra',
  Moon: 'Scorpio',
  Mars: 'Cancer',
  Mercury: 'Pisces',
  Jupiter: 'Capricorn',
  Venus: 'Virgo',
  Saturn: 'Aries',
  Rahu: 'Scorpio',
  Ketu: 'Taurus',
};

export const isExalted = (planet: GrahaName, sign: RashiSign): boolean => {
  return PLANET_EXALTATION[planet] === sign;
};

export const isDebilitated = (planet: GrahaName, sign: RashiSign): boolean => {
  return PLANET_DEBILITATION[planet] === sign;
};
