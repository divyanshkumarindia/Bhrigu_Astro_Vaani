// Vedic Astrology Types - Parashari System with Lahiri Ayanamsha

export type RashiSign = 
  | 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' 
  | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio' 
  | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';

export type GrahaName = 
  | 'Sun' | 'Moon' | 'Mars' | 'Mercury' 
  | 'Jupiter' | 'Venus' | 'Saturn' | 'Rahu' | 'Ketu';

export interface PlanetPosition {
  name: GrahaName;
  sign: RashiSign;
  signIndex: number; // 0-11
  degree: number;    // 0-30 degrees within sign
  house: number;     // 1-12 (whole sign house)
  isRetrograde: boolean;
  nakshatra?: string;
  nakshatraPada?: number; // 1-4
}

export interface HouseData {
  houseNumber: number; // 1-12
  sign: RashiSign;
  planets: GrahaName[];
  cusp: number; // Absolute degree (0-360)
}

/**
 * Panchang - The Five Limbs of Vedic Time
 * Essential for Muhurta (electional astrology) and horoscope analysis
 */
export interface Panchang {
  tithi: {
    number: number;      // 1-30
    name: string;        // Pratipada, Dwitiya, etc.
    paksha: 'Shukla' | 'Krishna';
    phase: number;       // 0-1 progress through tithi
  };
  nakshatra: {
    name: string;        // Moon's Nakshatra
    pada: number;        // 1-4
    lord: GrahaName;     // Nakshatra ruler
  };
  yoga: {
    number: number;      // 1-27
    name: string;        // Vishkumbha, Priti, etc.
  };
  karana: {
    number: number;      // 1-60
    name: string;        // Bava, Balava, etc.
  };
  vara: {
    name: string;        // Sunday, Monday, etc.
    sanskrit: string;    // Ravivar, Somvar, etc.
    lord: GrahaName;     // Weekday ruler
  };
}

export interface KundaliReport {
  id: string;
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  latitude: number;
  longitude: number;
  timezone: string;
  ascendant: {
    sign: RashiSign;
    degree: number;
    nakshatra: string;
  };
  planets: PlanetPosition[];
  houses: HouseData[];
  panchang?: Panchang;      // Five limbs of Vedic time
  ayanamsha?: number;       // Lahiri Ayanamsha used
  createdAt: string;
}

// Symbol mappings for planets
export const PLANET_SYMBOLS: Record<GrahaName, string> = {
  Sun: 'Su',
  Moon: 'Mo',
  Mars: 'Ma',
  Mercury: 'Me',
  Jupiter: 'Ju',
  Venus: 'Ve',
  Saturn: 'Sa',
  Rahu: 'Ra',
  Ketu: 'Ke',
};

// Sanskrit names for planets
export const PLANET_SANSKRIT: Record<GrahaName, string> = {
  Sun: 'सूर्य',
  Moon: 'चन्द्र',
  Mars: 'मंगल',
  Mercury: 'बुध',
  Jupiter: 'बृहस्पति',
  Venus: 'शुक्र',
  Saturn: 'शनि',
  Rahu: 'राहु',
  Ketu: 'केतु',
};

// Zodiac symbols
export const RASHI_SYMBOLS: Record<RashiSign, string> = {
  Aries: '♈',
  Taurus: '♉',
  Gemini: '♊',
  Cancer: '♋',
  Leo: '♌',
  Virgo: '♍',
  Libra: '♎',
  Scorpio: '♏',
  Sagittarius: '♐',
  Capricorn: '♑',
  Aquarius: '♒',
  Pisces: '♓',
};

// Sanskrit names for signs (Rashis)
export const RASHI_SANSKRIT: Record<RashiSign, string> = {
  Aries: 'मेष',
  Taurus: 'वृषभ',
  Gemini: 'मिथुन',
  Cancer: 'कर्क',
  Leo: 'सिंह',
  Virgo: 'कन्या',
  Libra: 'तुला',
  Scorpio: 'वृश्चिक',
  Sagittarius: 'धनु',
  Capricorn: 'मकर',
  Aquarius: 'कुम्भ',
  Pisces: 'मीन',
};

// Short names for Rashis (English)
export const RASHI_SHORT: Record<RashiSign, string> = {
  Aries: 'Ari',
  Taurus: 'Tau',
  Gemini: 'Gem',
  Cancer: 'Can',
  Leo: 'Leo',
  Virgo: 'Vir',
  Libra: 'Lib',
  Scorpio: 'Sco',
  Sagittarius: 'Sag',
  Capricorn: 'Cap',
  Aquarius: 'Aqu',
  Pisces: 'Pis',
};

// Rashi numbers for North Indian chart display
export const RASHI_NUMBERS: Record<RashiSign, number> = {
  Aries: 1,
  Taurus: 2,
  Gemini: 3,
  Cancer: 4,
  Leo: 5,
  Virgo: 6,
  Libra: 7,
  Scorpio: 8,
  Sagittarius: 9,
  Capricorn: 10,
  Aquarius: 11,
  Pisces: 12,
};
