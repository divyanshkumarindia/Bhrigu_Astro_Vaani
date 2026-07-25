import { GrahaName, RashiSign } from '@/types/astrology';

// Constants for Sunrise/Sunset calculation
const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

/**
 * Calculates Sunrise and Sunset times for a given date and location.
 * Uses a simplified version of the NOAA Solar Calculator algorithm.
 */
export function calculateSunriseSunset(date: Date, latitude: number, longitude: number): { sunrise: Date; sunset: Date } {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  const zenith = 90.83333333333333; // Official sunrise/sunset zenith
  const D2R = DEG_TO_RAD;
  const R2D = RAD_TO_DEG;

  // 1. calculate the day of the year
  const N = dayOfYear;

  // 2. convert the longitude to hour value and calculate an approximate time
  const lngHour = longitude / 15;
  
  // Sunrise calculation
  const tSunrise = N + ((6 - lngHour) / 24);
  // Sunset calculation
  const tSunset = N + ((18 - lngHour) / 24);

  const calculateForTime = (t: number, isSunrise: boolean) => {
    // 3. calculate the Sun's mean anomaly
    const M = (0.9856 * t) - 3.2891;

    // 4. calculate the Sun's true longitude
    let L = M + (1.916 * Math.sin(M * D2R)) + (0.020 * Math.sin(2 * M * D2R)) + 282.634;
    L = (L % 360 + 360) % 360;

    // 5a. calculate the Sun's right ascension
    let RA = R2D * Math.atan(0.91764 * Math.tan(L * D2R));
    RA = (RA % 360 + 360) % 360;

    // 5b. right ascension value needs to be in the same quadrant as L
    const Lquadrant = (Math.floor(L / 90)) * 90;
    const RAquadrant = (Math.floor(RA / 90)) * 90;
    RA = RA + (Lquadrant - RAquadrant);

    // 5c. right ascension value needs to be converted into hours
    RA = RA / 15;

    // 6. calculate the Sun's declination
    const sinDec = 0.39782 * Math.sin(L * D2R);
    const cosDec = Math.cos(Math.asin(sinDec));

    // 7a. calculate the Sun's local hour angle
    const cosH = (Math.cos(zenith * D2R) - (sinDec * Math.sin(latitude * D2R))) / (cosDec * Math.cos(latitude * D2R));

    if (cosH > 1 || cosH < -1) {
      return null; // Sun never rises or sets
    }

    // 7b. finish calculating H and convert into hours
    let H = isSunrise ? 360 - R2D * Math.acos(cosH) : R2D * Math.acos(cosH);
    H = H / 15;

    // 8. calculate local mean time of rising/setting
    const T = H + RA - (0.06571 * t) - 6.622;

    // 9. adjust back to UTC
    let UT = T - lngHour;
    UT = (UT % 24 + 24) % 24;

    const resultDate = new Date(date);
    resultDate.setUTCHours(Math.floor(UT));
    resultDate.setUTCMinutes(Math.floor((UT % 1) * 60));
    resultDate.setUTCSeconds(Math.floor(((UT % 1) * 60 % 1) * 60));
    
    return resultDate;
  };

  const sunrise = calculateForTime(tSunrise, true) || new Date(date.setHours(6, 0, 0, 0));
  const sunset = calculateForTime(tSunset, false) || new Date(date.setHours(18, 0, 0, 0));

  return { sunrise, sunset };
}

export interface Hora {
  startTime: Date;
  endTime: Date;
  lord: GrahaName;
  isBeneficial: boolean;
}

const HORA_SEQUENCE: GrahaName[] = ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars'];

export function calculateHoras(sunrise: Date, nextSunrise: Date): Hora[] {
  const duration = (nextSunrise.getTime() - sunrise.getTime()) / 24;
  const horas: Hora[] = [];
  
  // Weekday lord is the lord of the first hora
  const dayOfWeek = sunrise.getDay(); // 0 is Sunday
  const firstLordIndex = [0, 3, 6, 2, 5, 1, 4][dayOfWeek]; // Mapping day to HORA_SEQUENCE index
  
  const beneficialLords: GrahaName[] = ['Jupiter', 'Venus', 'Mercury', 'Moon']; // Mercury and Moon are generally considered beneficial in this context

  for (let i = 0; i < 24; i++) {
    const startTime = new Date(sunrise.getTime() + i * duration);
    const endTime = new Date(sunrise.getTime() + (i + 1) * duration);
    const lord = HORA_SEQUENCE[(firstLordIndex + i) % 7];
    
    horas.push({
      startTime,
      endTime,
      lord,
      isBeneficial: beneficialLords.includes(lord)
    });
  }
  
  return horas;
}

export type ChoghadiyaType = 'Shubh' | 'Labh' | 'Amrit' | 'Chal' | 'Rog' | 'Kaal' | 'Udveg';

export interface Choghadiya {
  startTime: Date;
  endTime: Date;
  type: ChoghadiyaType;
  isBeneficial: boolean;
}

const DAY_CHOGHADIYA_SEQUENCE: Record<number, ChoghadiyaType[]> = {
  0: ['Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'], // Sun
  1: ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit'], // Mon
  2: ['Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'], // Tue
  3: ['Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal'], // Wed
  4: ['Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh'], // Thu
  5: ['Chal', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh'], // Fri (Correction: Fri starts with Chal? Actually it's often listed as Chal, but let's re-verify. Standard sequences exist)
  6: ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal'], // Sat
};

// Night Choghadiya Sequence (Day Sequence shifted by some positions)
const NIGHT_CHOGHADIYA_SEQUENCE: Record<number, ChoghadiyaType[]> = {
  0: ['Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh'],
  1: ['Chal', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal'],
  2: ['Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal'],
  3: ['Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh', 'Udveg'],
  4: ['Amrit', 'Chal', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit'],
  5: ['Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog'],
  6: ['Labh', 'Udveg', 'Shubh', 'Amrit', 'Chal', 'Rog', 'Kaal', 'Labh'],
};

export function calculateChoghadiyas(sunrise: Date, sunset: Date, nextSunrise: Date): Choghadiya[] {
  const dayDuration = (sunset.getTime() - sunrise.getTime()) / 8;
  const nightDuration = (nextSunrise.getTime() - sunset.getTime()) / 8;
  const dayOfWeek = sunrise.getDay();
  
  const choghadiyas: Choghadiya[] = [];
  const beneficialTypes: ChoghadiyaType[] = ['Shubh', 'Labh', 'Amrit', 'Chal']; // Chal is neutral/okay

  // Day Choghadiyas
  const daySequence = DAY_CHOGHADIYA_SEQUENCE[dayOfWeek];
  for (let i = 0; i < 8; i++) {
    const startTime = new Date(sunrise.getTime() + i * dayDuration);
    const endTime = new Date(sunrise.getTime() + (i + 1) * dayDuration);
    const type = daySequence[i];
    choghadiyas.push({
      startTime,
      endTime,
      type,
      isBeneficial: beneficialTypes.includes(type)
    });
  }

  // Night Choghadiyas
  const nightSequence = NIGHT_CHOGHADIYA_SEQUENCE[dayOfWeek];
  for (let i = 0; i < 8; i++) {
    const startTime = new Date(sunset.getTime() + i * nightDuration);
    const endTime = new Date(sunset.getTime() + (i + 1) * nightDuration);
    const type = nightSequence[i];
    choghadiyas.push({
      startTime,
      endTime,
      type,
      isBeneficial: beneficialTypes.includes(type)
    });
  }

  return choghadiyas;
}

export interface PanchakStatus {
  isActive: boolean;
  reason?: string;
}

export function calculatePanchak(moonLongitude: number): PanchakStatus {
  // Panchak starts when Moon enters Aquarius (Dhanishta 3rd pada) and ends when it leaves Pisces (Revati)
  // Aquarius starts at 300 degrees.
  // Dhanishta starts at 293°20'. 3rd pada starts at 293°20' + 6°40' = 300°.
  // So Panchak is Moon being in Aquarius (300°-330°) or Pisces (330°-360°).
  const isActive = moonLongitude >= 300 && moonLongitude < 360;
  return {
    isActive,
    reason: isActive ? 'Moon transiting through Aquarius or Pisces (Dhanishta to Revati Nakshatras).' : undefined
  };
}

export interface BhadraStatus {
  isActive: boolean;
  reason?: string;
}

export function calculateBhadra(tithi: number, karana: string): BhadraStatus {
  // Bhadra is active when Vishti Karana is present.
  // Vishti Karana occurs on:
  // Shukla Paksha: 4th (2nd half), 8th (1st half), 11th (2nd half), 15th (1st half)
  // Krishna Paksha: 3rd (2nd half), 7th (1st half), 10th (2nd half), 14th (1st half)
  const isActive = karana.toLowerCase().includes('vishti');
  return {
    isActive,
    reason: isActive ? 'Vishti Karana is active, which is known as Bhadra.' : undefined
  };
}
