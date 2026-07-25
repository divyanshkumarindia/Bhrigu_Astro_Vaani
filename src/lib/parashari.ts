/**
 * Parashari Vedic Astrology Calculation Engine
 * 
 * Based on Maharishi Parashara's Brihat Parashara Hora Shastra
 * Using Lahiri (Chitra Paksha) Ayanamsa - Official Indian Government Standard
 * 
 * Key Principles:
 * - One complete day = Sunrise to next Sunrise (not midnight-based)
 * - 27 Nakshatras, each 13°20' (13.333...°)
 * - Each Nakshatra has 4 Padas of 3°20' each
 * - Lahiri Ayanamsha for Sidereal calculations
 * - Whole sign house system for Lagna chart
 * - Equal house from Lagna degree for Chalit (Bhava) chart
 */

import { KundaliReport, RashiSign, GrahaName, PlanetPosition, HouseData } from '@/types/astrology';

// =================== CONSTANTS ===================

// Lahiri (Chitra Paksha) Ayanamsha - Official Indian Standard
// Reference: Chitra at 0° Libra on vernal equinox
const LAHIRI_AYANAMSHA_J2000 = 23.856; // Lahiri Ayanamsa at J2000.0 (Jan 1, 2000, 12:00 TT)
const AYANAMSHA_PRECESSION_RATE = 50.2877 / 3600; // Precession rate: ~50.29" per year in degrees

// J2000.0 epoch constants
const J2000_JD = 2451545.0; // Julian Day of J2000.0

// Rashi (Zodiac Signs) in order - each 30°
export const RASHI_ORDER: RashiSign[] = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// Rashi numbers (for North Indian display)
export const RASHI_NUMBERS: Record<RashiSign, number> = {
  'Aries': 1, 'Taurus': 2, 'Gemini': 3, 'Cancer': 4,
  'Leo': 5, 'Virgo': 6, 'Libra': 7, 'Scorpio': 8,
  'Sagittarius': 9, 'Capricorn': 10, 'Aquarius': 11, 'Pisces': 12
};

// 27 Nakshatras - Each spans 13°20' (13.3333°)
export const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
] as const;

// Nakshatra Lords for Vimshottari Dasha (cyclic pattern of 9 planets over 27 nakshatras)
export const NAKSHATRA_LORDS: GrahaName[] = [
  'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu',
  'Jupiter', 'Saturn', 'Mercury', 'Ketu', 'Venus', 'Sun',
  'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury',
  'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu',
  'Jupiter', 'Saturn', 'Mercury'
];

// Vimshottari Dasha periods in years
export const DASHA_YEARS: Record<GrahaName, number> = {
  'Ketu': 7, 'Venus': 20, 'Sun': 6, 'Moon': 10, 'Mars': 7,
  'Rahu': 18, 'Jupiter': 16, 'Saturn': 19, 'Mercury': 17
};

// Nakshatra span in degrees
const NAKSHATRA_SPAN = 360 / 27; // 13.3333... degrees (13°20')
const PADA_SPAN = NAKSHATRA_SPAN / 4; // 3.3333... degrees (3°20')

// Tithi names (30 lunar days)
const TITHI_NAMES = [
  'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima/Amavasya'
] as const;

// Yoga names (27 yogas)
const YOGA_NAMES = [
  'Vishkumbha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana',
  'Atiganda', 'Sukarma', 'Dhriti', 'Shoola', 'Ganda',
  'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra',
  'Siddhi', 'Vyatipata', 'Variyan', 'Parigha', 'Shiva',
  'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma',
  'Indra', 'Vaidhriti'
] as const;

// Karana names (11 karanas, first 7 repeat)
const KARANA_NAMES = [
  'Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti',
  'Shakuni', 'Chatushpada', 'Naga', 'Kimstughna'
] as const;

// Vara (weekday) names
const VARA_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
const VARA_SANSKRIT = ['Ravivar', 'Somvar', 'Mangalvar', 'Budhvar', 'Guruvar', 'Shukravar', 'Shanivar'] as const;
const VARA_LORD: GrahaName[] = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];

// =================== TIME CALCULATIONS ===================

/**
 * Calculate Julian Day Number with high precision
 * Formula from Astronomical Algorithms by Jean Meeus
 */
function calculateJulianDay(date: Date): number {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();
  
  // Convert time to fraction of day
  const dayFraction = (hour + minute / 60 + second / 3600) / 24;
  
  let y = year;
  let m = month;
  
  if (month <= 2) {
    y = year - 1;
    m = month + 12;
  }
  
  // Gregorian calendar correction
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  
  const jd = Math.floor(365.25 * (y + 4716)) + 
             Math.floor(30.6001 * (m + 1)) + 
             day + dayFraction + b - 1524.5;
  
  return jd;
}

/**
 * Calculate Julian centuries from J2000.0
 */
function julianCenturies(jd: number): number {
  return (jd - J2000_JD) / 36525;
}

/**
 * Calculate Lahiri Ayanamsha for a given Julian Day
 * Lahiri (Chitra Paksha) is the official ayanamsha of the Indian government
 */
function calculateLahiriAyanamsha(jd: number): number {
  const yearsSinceJ2000 = (jd - J2000_JD) / 365.25;
  // Linear approximation - for higher precision, use polynomial or lookup table
  const ayanamsha = LAHIRI_AYANAMSHA_J2000 + (AYANAMSHA_PRECESSION_RATE * yearsSinceJ2000);
  return ayanamsha;
}

/**
 * Calculate Greenwich Mean Sidereal Time (GMST)
 */
function calculateGMST(jd: number): number {
  const T = julianCenturies(jd);
  
  // IAU 1982 formula for GMST at 0h UT
  let gmst = 280.46061837 + 
             360.98564736629 * (jd - J2000_JD) + 
             0.000387933 * T * T - 
             T * T * T / 38710000;
  
  // Normalize to 0-360
  gmst = ((gmst % 360) + 360) % 360;
  
  return gmst;
}

/**
 * Calculate Local Sidereal Time (LST)
 */
function calculateLST(jd: number, longitude: number): number {
  const gmst = calculateGMST(jd);
  let lst = gmst + longitude;
  
  // Normalize to 0-360
  lst = ((lst % 360) + 360) % 360;
  
  return lst;
}

// =================== ASCENDANT CALCULATION ===================

/**
 * Calculate Ascendant (Lagna) with high precision
 * 
 * The Lagna is the sign rising on the eastern horizon at the time of birth.
 * This uses the standard spherical trigonometry formula.
 */
function calculateAscendant(
  jd: number, 
  latitude: number, 
  longitude: number, 
  ayanamsha: number
): { tropicalDegree: number; siderealDegree: number; sign: RashiSign; signDegree: number } {
  const T = julianCenturies(jd);
  
  // Mean obliquity of the ecliptic (IAU 2000)
  const obliquityDeg = 23.439291 - 
                       0.0130042 * T - 
                       0.00000016 * T * T + 
                       0.000000504 * T * T * T;
  
  // Local Sidereal Time
  const lst = calculateLST(jd, longitude);
  
  // Convert to radians
  const latRad = latitude * Math.PI / 180;
  const oblRad = obliquityDeg * Math.PI / 180;
  const lstRad = lst * Math.PI / 180;
  
  // Ascendant formula (tropical)
  let ascTropical = Math.atan2(
    Math.cos(lstRad),
    -(Math.sin(oblRad) * Math.tan(latRad) + Math.cos(oblRad) * Math.sin(lstRad))
  ) * 180 / Math.PI;
  
  // Normalize to 0-360
  ascTropical = ((ascTropical % 360) + 360) % 360;
  
  // Convert to sidereal (Lahiri)
  let ascSidereal = ascTropical - ayanamsha;
  if (ascSidereal < 0) ascSidereal += 360;
  
  // Get sign and degree within sign
  const signIndex = Math.floor(ascSidereal / 30);
  const signDegree = ascSidereal % 30;
  
  return {
    tropicalDegree: ascTropical,
    siderealDegree: ascSidereal,
    sign: RASHI_ORDER[signIndex],
    signDegree: signDegree
  };
}

// =================== NAKSHATRA CALCULATIONS ===================

/**
 * Calculate Nakshatra and Pada from absolute longitude
 * 
 * Each Nakshatra = 13°20' = 13.3333...°
 * Each Pada = 3°20' = 3.3333...°
 * 
 * The pada system integrates the 27 Nakshatras with the 12 zodiac signs.
 * Each sign contains 9 padas (4 + 4 + 1 from 2.25 nakshatras)
 */
function calculateNakshatraDetails(siderealLongitude: number): {
  nakshatra: string;
  nakshatraIndex: number;
  nakshatraLord: GrahaName;
  pada: number;
  nakshatraDegree: number;
} {
  // Normalize longitude
  const longitude = ((siderealLongitude % 360) + 360) % 360;
  
  // Calculate Nakshatra (0-26)
  const nakshatraIndex = Math.floor(longitude / NAKSHATRA_SPAN);
  
  // Degree within the Nakshatra
  const nakshatraDegree = longitude % NAKSHATRA_SPAN;
  
  // Calculate Pada (1-4)
  const pada = Math.floor(nakshatraDegree / PADA_SPAN) + 1;
  
  return {
    nakshatra: NAKSHATRAS[nakshatraIndex],
    nakshatraIndex: nakshatraIndex,
    nakshatraLord: NAKSHATRA_LORDS[nakshatraIndex],
    pada: Math.min(pada, 4), // Ensure pada is 1-4
    nakshatraDegree: nakshatraDegree
  };
}

// =================== PLANETARY CALCULATIONS ===================

/**
 * Calculate mean planetary positions
 * 
 * Note: These are simplified mean positions. For production accuracy,
 * integrate with Swiss Ephemeris or similar high-precision ephemeris.
 * 
 * Mean elements from VSOP87 / Astronomical Algorithms
 */
function calculateMeanLongitudes(jd: number): Record<GrahaName, number> {
  const T = julianCenturies(jd);
  const T2 = T * T;
  const T3 = T2 * T;
  
  // Mean longitudes at J2000.0 with secular variations
  // Values from Astronomical Algorithms and VSOP87
  
  // Sun (actually Earth's mean longitude + 180°)
  const sunMean = 280.4664567 + 
                  360007.6982779 * T + 
                  0.03032028 * T2 + 
                  T3 / 49931 - 
                  T3 * T / 15300 - 
                  T3 * T2 / 2000000;
  
  // Moon (mean longitude)
  const moonMean = 218.3164477 + 
                   481267.88123421 * T - 
                   0.0015786 * T2 + 
                   T3 / 538841 - 
                   T3 * T / 65194000;
  
  // Mercury
  const mercuryMean = 252.250906 + 
                      149472.6746358 * T - 
                      0.00000535 * T2 + 
                      0.000000002 * T3;
  
  // Venus
  const venusMean = 181.979801 + 
                    58517.8156748 * T + 
                    0.00000165 * T2 - 
                    0.000000002 * T3;
  
  // Mars
  const marsMean = 355.433275 + 
                   19140.2993313 * T + 
                   0.00000261 * T2 - 
                   0.000000003 * T3;
  
  // Jupiter
  const jupiterMean = 34.351484 + 
                      3034.9056746 * T - 
                      0.00008501 * T2 + 
                      T3 / 3050000;
  
  // Saturn
  const saturnMean = 50.077471 + 
                     1222.1137943 * T + 
                     0.00021004 * T2 - 
                     T3 / 120000;
  
  // Rahu (Mean North Lunar Node) - moves retrograde
  const rahuMean = 125.04452 - 
                   1934.136261 * T + 
                   0.0020708 * T2 + 
                   T3 / 450000;
  
  // Ketu is always opposite to Rahu
  const ketuMean = rahuMean + 180;
  
  // Normalize all to 0-360
  const normalize = (deg: number): number => ((deg % 360) + 360) % 360;
  
  return {
    Sun: normalize(sunMean),
    Moon: normalize(moonMean),
    Mercury: normalize(mercuryMean),
    Venus: normalize(venusMean),
    Mars: normalize(marsMean),
    Jupiter: normalize(jupiterMean),
    Saturn: normalize(saturnMean),
    Rahu: normalize(rahuMean),
    Ketu: normalize(ketuMean)
  };
}

/**
 * Apply major perturbations to get approximate true positions
 * This provides better accuracy than mean positions alone
 */
function applyPerturbations(
  meanLongitudes: Record<GrahaName, number>, 
  jd: number
): Record<GrahaName, number> {
  const T = julianCenturies(jd);
  
  // Sun's mean anomaly
  const sunMeanAnomaly = (357.5291092 + 35999.0502909 * T) * Math.PI / 180;
  
  // Moon's mean anomaly
  const moonMeanAnomaly = (134.9633964 + 477198.8675055 * T) * Math.PI / 180;
  
  // Sun equation of center (approximate true anomaly correction)
  const sunEqCenter = (1.9146 - 0.004817 * T - 0.000014 * T * T) * Math.sin(sunMeanAnomaly) +
                      (0.019993 - 0.000101 * T) * Math.sin(2 * sunMeanAnomaly) +
                      0.00029 * Math.sin(3 * sunMeanAnomaly);
  
  // Moon's major perturbations (simplified)
  const D = (297.8501921 + 445267.1114034 * T) * Math.PI / 180; // Moon's mean elongation
  const F = (93.2720950 + 483202.0175233 * T) * Math.PI / 180;  // Moon's argument of latitude
  
  const moonCorrection = 
    6.289 * Math.sin(moonMeanAnomaly) +
    1.274 * Math.sin(2 * D - moonMeanAnomaly) +
    0.658 * Math.sin(2 * D) +
    0.214 * Math.sin(2 * moonMeanAnomaly) -
    0.186 * Math.sin(sunMeanAnomaly) -
    0.114 * Math.sin(2 * F);
  
  // Apply corrections
  const corrected: Record<GrahaName, number> = { ...meanLongitudes };
  
  corrected.Sun = ((meanLongitudes.Sun + sunEqCenter) % 360 + 360) % 360;
  corrected.Moon = ((meanLongitudes.Moon + moonCorrection) % 360 + 360) % 360;
  
  // Planetary equation of center (simplified)
  const planetAnomalies: Record<string, number> = {
    Mercury: (174.7948 + 149472.5153 * T) * Math.PI / 180,
    Venus: (50.4161 + 58517.8039 * T) * Math.PI / 180,
    Mars: (19.3730 + 19139.8585 * T) * Math.PI / 180,
    Jupiter: (19.8950 + 3034.6980 * T) * Math.PI / 180,
    Saturn: (316.9670 + 1222.1138 * T) * Math.PI / 180
  };
  
  // Eccentricities (approximate current values)
  const eccentricities: Record<string, number> = {
    Mercury: 0.2056,
    Venus: 0.0068,
    Mars: 0.0934,
    Jupiter: 0.0485,
    Saturn: 0.0555
  };
  
  ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'].forEach(planet => {
    const M = planetAnomalies[planet];
    const e = eccentricities[planet];
    // Equation of center (first order)
    const eqCenter = (2 * e - e * e * e / 4) * Math.sin(M) * 180 / Math.PI +
                     (5 * e * e / 4) * Math.sin(2 * M) * 180 / Math.PI;
    corrected[planet as GrahaName] = ((meanLongitudes[planet as GrahaName] + eqCenter) % 360 + 360) % 360;
  });
  
  return corrected;
}

/**
 * Calculate retrograde status for planets
 * 
 * For the frontend fallback, we use elongation-based detection with stricter thresholds
 * The backend uses actual velocity calculation which is more accurate
 * 
 * Key insight: Venus/Mercury are only retrograde for short periods:
 * - Venus: ~40 days every 19 months  
 * - Mercury: ~21 days 3-4 times per year
 * Simple elongation checks produce too many false positives
 */
function calculateRetrograde(
  sunLongitude: number,
  planetLongitude: number,
  planetName: GrahaName
): boolean {
  // Rahu and Ketu are always retrograde
  if (planetName === 'Rahu' || planetName === 'Ketu') {
    return true;
  }
  
  // Sun and Moon are never retrograde
  if (planetName === 'Sun' || planetName === 'Moon') {
    return false;
  }
  
  // Calculate elongation from Sun
  let elongation = planetLongitude - sunLongitude;
  if (elongation < 0) elongation += 360;
  if (elongation > 180) elongation = 360 - elongation;
  
  // For inferior planets, retrograde is RARE and requires very specific conditions
  // Venus is only retrograde ~7% of the time, Mercury ~19% of the time
  // We should NOT mark as retrograde based solely on elongation
  // The backend calculates actual velocity for accurate retrograde detection
  if (planetName === 'Mercury' || planetName === 'Venus') {
    // Only mark retrograde if elongation is EXTREMELY small (approaching exact conjunction)
    // This is a conservative fallback - backend uses actual velocity calculation
    return false; // Default to direct motion - let backend velocity calculation determine retrograde
  }
  
  // Superior planets (Mars, Jupiter, Saturn) - retrograde near opposition
  // These are more predictable and elongation-based detection works better
  if (planetName === 'Mars') {
    return elongation > 150; // Stricter threshold
  }
  if (planetName === 'Jupiter') {
    return elongation > 145;
  }
  if (planetName === 'Saturn') {
    return elongation > 140;
  }
  
  return false;
}

// =================== PANCHANG CALCULATIONS ===================

/**
 * Calculate Tithi (Lunar Day)
 * 
 * Tithi = (Moon longitude - Sun longitude) / 12
 * Each Tithi spans 12° of Moon-Sun separation
 * 30 Tithis in a lunar month (15 Shukla Paksha + 15 Krishna Paksha)
 */
function calculateTithi(moonLong: number, sunLong: number): {
  tithiNumber: number;
  tithiName: string;
  paksha: 'Shukla' | 'Krishna';
  tithiPhase: number; // 0-1 progress through tithi
} {
  let diff = moonLong - sunLong;
  if (diff < 0) diff += 360;
  
  const tithiNumber = Math.floor(diff / 12) + 1;
  const tithiPhase = (diff % 12) / 12;
  
  // Determine Paksha (fortnight)
  const paksha = tithiNumber <= 15 ? 'Shukla' : 'Krishna';
  const tithiInPaksha = tithiNumber <= 15 ? tithiNumber : tithiNumber - 15;
  
  // Tithi name (1-14 are regular, 15 is Purnima or Amavasya)
  const nameIndex = tithiInPaksha <= 14 ? tithiInPaksha - 1 : 14;
  const tithiName = TITHI_NAMES[nameIndex];
  
  return {
    tithiNumber,
    tithiName,
    paksha,
    tithiPhase
  };
}

/**
 * Calculate Yoga (Moon + Sun longitude / 13°20')
 * 
 * There are 27 Yogas, each spanning 13°20' of combined Sun-Moon motion
 */
function calculateYoga(moonLong: number, sunLong: number): {
  yogaNumber: number;
  yogaName: string;
} {
  let combined = moonLong + sunLong;
  if (combined >= 360) combined -= 360;
  
  const yogaNumber = Math.floor(combined / NAKSHATRA_SPAN) + 1;
  const yogaIndex = (yogaNumber - 1) % 27;
  
  return {
    yogaNumber,
    yogaName: YOGA_NAMES[yogaIndex]
  };
}

/**
 * Calculate Karana (Half of Tithi)
 * 
 * There are 60 Karanas in a lunar month (2 per Tithi)
 * First 7 Karanas repeat 8 times, last 4 are fixed
 */
function calculateKarana(moonLong: number, sunLong: number): {
  karanaNumber: number;
  karanaName: string;
} {
  let diff = moonLong - sunLong;
  if (diff < 0) diff += 360;
  
  const karanaNumber = Math.floor(diff / 6) + 1;
  
  // First Karana is Kimstughna (fixed)
  // Last 4 Karanas (57-60) are fixed: Shakuni, Chatushpada, Naga, Kimstughna
  let karanaIndex: number;
  
  if (karanaNumber === 1) {
    karanaIndex = 10; // Kimstughna
  } else if (karanaNumber >= 58) {
    karanaIndex = karanaNumber - 51; // Fixed karanas 7-10
  } else {
    karanaIndex = (karanaNumber - 2) % 7; // Repeating karanas 0-6
  }
  
  return {
    karanaNumber,
    karanaName: KARANA_NAMES[karanaIndex]
  };
}

/**
 * Calculate Vara (Weekday) with ruling planet
 */
function calculateVara(date: Date): {
  varaNumber: number;
  varaName: string;
  varaSanskrit: string;
  varaLord: GrahaName;
} {
  const dayOfWeek = date.getUTCDay();
  
  return {
    varaNumber: dayOfWeek,
    varaName: VARA_NAMES[dayOfWeek],
    varaSanskrit: VARA_SANSKRIT[dayOfWeek],
    varaLord: VARA_LORD[dayOfWeek]
  };
}

// =================== HOUSE CALCULATIONS ===================

/**
 * Calculate whole sign houses (for Lagna chart)
 * In Parashari system, each house = one complete sign
 */
function calculateWholeSignHouses(
  ascendantSign: RashiSign,
  planets: PlanetPosition[]
): HouseData[] {
  const ascendantIndex = RASHI_ORDER.indexOf(ascendantSign);
  
  return Array.from({ length: 12 }, (_, i) => {
    const houseNum = i + 1;
    const signIndex = (ascendantIndex + i) % 12;
    const sign = RASHI_ORDER[signIndex];
    
    // Find planets in this house (based on whole sign)
    const housePlanets = planets
      .filter(p => p.house === houseNum)
      .map(p => p.name);
    
    // Cusp is at 0° of the sign
    const cusp = signIndex * 30;
    
    return {
      houseNumber: houseNum,
      sign,
      planets: housePlanets,
      cusp: cusp
    };
  });
}

/**
 * Calculate Bhava cusps for Chalit chart (Equal house from Lagna degree)
 * 
 * In Parashari Bhava Chalit, each house cusp starts from the Lagna degree
 * and spans 30° from that point (equal house system)
 */
function calculateBhavaCusps(
  ascendantSign: RashiSign,
  ascendantDegree: number,
  planets: PlanetPosition[]
): HouseData[] {
  const ascendantIndex = RASHI_ORDER.indexOf(ascendantSign);
  const lagnaAbsoluteDegree = ascendantIndex * 30 + ascendantDegree;
  
  return Array.from({ length: 12 }, (_, i) => {
    const houseNum = i + 1;
    
    // Cusp starts from Lagna degree, each house is 30° from cusp
    const cusp = (lagnaAbsoluteDegree + (i * 30)) % 360;
    
    // Determine the sign at this cusp
    const signIndex = Math.floor(cusp / 30);
    
    // Get planets in this Bhava (will be calculated separately using calculateChalitHouse)
    const housePlanets = planets
      .filter(p => p.house === houseNum)
      .map(p => p.name);
    
    return {
      houseNumber: houseNum,
      sign: RASHI_ORDER[signIndex],
      planets: housePlanets,
      cusp: parseFloat(cusp.toFixed(4))
    };
  });
}

/**
 * Calculate which Bhava (house) a planet occupies in Chalit chart
 * Based on the planet's absolute degree relative to house cusps
 * 
 * Uses Sri Pati system: Planet belongs to house if it falls between
 * that house's cusp and the next house's cusp (inclusive of start, exclusive of end)
 */
export function calculateChalitHouse(
  planet: PlanetPosition,
  houses: HouseData[]
): number {
  const planetAbsoluteDegree = planet.signIndex * 30 + planet.degree;
  
  for (let i = 0; i < 12; i++) {
    const currentCusp = houses[i].cusp;
    const nextCusp = houses[(i + 1) % 12].cusp;
    
    // Calculate the span of this house
    let houseSpan: number;
    if (nextCusp >= currentCusp) {
      houseSpan = nextCusp - currentCusp;
    } else {
      houseSpan = (360 - currentCusp) + nextCusp; // Crosses 0°
    }
    
    // Calculate planet's position relative to current cusp
    let planetFromCusp = planetAbsoluteDegree - currentCusp;
    if (planetFromCusp < 0) planetFromCusp += 360;
    
    // Planet is in this house if it's within the house span
    // Use inclusive check to prevent boundary issues
    if (planetFromCusp >= 0 && planetFromCusp < houseSpan) {
      return i + 1;
    }
  }
  
  return planet.house; // Fallback to rashi house
}

// =================== MAIN KUNDALI GENERATION ===================

/**
 * Extended Panchang interface
 */
export interface Panchang {
  tithi: {
    number: number;
    name: string;
    paksha: 'Shukla' | 'Krishna';
    phase: number;
  };
  nakshatra: {
    name: string;
    pada: number;
    lord: GrahaName;
  };
  yoga: {
    number: number;
    name: string;
  };
  karana: {
    number: number;
    name: string;
  };
  vara: {
    name: string;
    sanskrit: string;
    lord: GrahaName;
  };
}

/**
 * Main function to generate Kundali using Parashari system with Lahiri Ayanamsha
 * 
 * This follows the principles:
 * 1. Lahiri (Chitra Paksha) Ayanamsha for sidereal conversion
 * 2. Parashari whole sign house system for Lagna chart
 * 3. Equal house from Lagna degree for Chalit (Bhava) chart
 * 4. Accurate Nakshatra and Pada calculations
 * 5. Complete Panchang (Tithi, Nakshatra, Yoga, Karana, Vara)
 */
export function generateParashariKundali(
  name: string,
  dateOfBirth: string,
  timeOfBirth: string,
  placeOfBirth: string,
  latitude: number,
  longitude: number
): KundaliReport {
  // Parse date and time
  const [year, month, day] = dateOfBirth.split('-').map(Number);
  const [hours, minutes] = timeOfBirth.split(':').map(Number);
  
  // Create date object (assuming IST timezone +5:30)
  // Convert local time to UTC
  const date = new Date(Date.UTC(year, month - 1, day, hours - 5, minutes - 30));
  
  // Calculate Julian Day
  const jd = calculateJulianDay(date);
  
  // Calculate Lahiri Ayanamsha
  const ayanamsha = calculateLahiriAyanamsha(jd);
  
  // Calculate Ascendant (Lagna)
  const ascendant = calculateAscendant(jd, latitude, longitude, ayanamsha);
  const ascendantNakshatra = calculateNakshatraDetails(ascendant.siderealDegree);
  
  // Calculate mean planetary positions
  const meanLongitudes = calculateMeanLongitudes(jd);
  
  // Apply perturbations for better accuracy
  const trueLongitudes = applyPerturbations(meanLongitudes, jd);
  
  // Get Lagna sign index for house calculation
  const lagnaIndex = RASHI_ORDER.indexOf(ascendant.sign);
  
  // Generate planet positions
  const planets: PlanetPosition[] = (Object.keys(trueLongitudes) as GrahaName[]).map(planetName => {
    const tropicalLong = trueLongitudes[planetName];
    
    // Convert to sidereal using Lahiri Ayanamsha
    let siderealLong = tropicalLong - ayanamsha;
    if (siderealLong < 0) siderealLong += 360;
    
    const signIndex = Math.floor(siderealLong / 30);
    const degree = siderealLong % 30;
    
    // Calculate house (whole sign from Lagna)
    const house = ((signIndex - lagnaIndex + 12) % 12) + 1;
    
    // Calculate Nakshatra
    const nakshatraDetails = calculateNakshatraDetails(siderealLong);
    
    // Calculate retrograde status
    const sunSidereal = trueLongitudes.Sun - ayanamsha;
    const isRetrograde = calculateRetrograde(sunSidereal, siderealLong, planetName);
    
    return {
      name: planetName,
      sign: RASHI_ORDER[signIndex],
      signIndex,
      degree: parseFloat(degree.toFixed(4)),
      house,
      isRetrograde,
      nakshatra: nakshatraDetails.nakshatra,
      nakshatraPada: nakshatraDetails.pada
    };
  });
  
  // Calculate houses (whole sign for Lagna, equal from degree for Chalit)
  const houses = calculateBhavaCusps(ascendant.sign, ascendant.signDegree, planets);
  
  // Calculate Panchang elements
  const moonPlanet = planets.find(p => p.name === 'Moon')!;
  const sunPlanet = planets.find(p => p.name === 'Sun')!;
  
  const moonAbsLong = moonPlanet.signIndex * 30 + moonPlanet.degree;
  const sunAbsLong = sunPlanet.signIndex * 30 + sunPlanet.degree;
  
  const tithi = calculateTithi(moonAbsLong, sunAbsLong);
  const yoga = calculateYoga(moonAbsLong, sunAbsLong);
  const karana = calculateKarana(moonAbsLong, sunAbsLong);
  const vara = calculateVara(date);
  const moonNakshatra = calculateNakshatraDetails(moonAbsLong);
  
  return {
    id: `kundali-${Date.now()}`,
    name,
    dateOfBirth,
    timeOfBirth,
    placeOfBirth,
    latitude,
    longitude,
    timezone: 'Asia/Kolkata',
    ascendant: {
      sign: ascendant.sign,
      degree: parseFloat(ascendant.signDegree.toFixed(4)),
      nakshatra: ascendantNakshatra.nakshatra
    },
    planets,
    houses,
    panchang: {
      tithi: {
        number: tithi.tithiNumber,
        name: tithi.tithiName,
        paksha: tithi.paksha,
        phase: tithi.tithiPhase
      },
      nakshatra: {
        name: moonNakshatra.nakshatra,
        pada: moonNakshatra.pada,
        lord: moonNakshatra.nakshatraLord
      },
      yoga: {
        number: yoga.yogaNumber,
        name: yoga.yogaName
      },
      karana: {
        number: karana.karanaNumber,
        name: karana.karanaName
      },
      vara: {
        name: vara.varaName,
        sanskrit: vara.varaSanskrit,
        lord: vara.varaLord
      }
    },
    ayanamsha: parseFloat(ayanamsha.toFixed(6)),
    createdAt: new Date().toISOString()
  };
}
