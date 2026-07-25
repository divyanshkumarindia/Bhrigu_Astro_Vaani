import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation schema
interface KundaliInput {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  latitude: number;
  longitude: number;
}

function validateInput(input: unknown): { valid: true; data: KundaliInput } | { valid: false; error: string } {
  if (!input || typeof input !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }
  
  const obj = input as Record<string, unknown>;
  
  // Validate name
  if (typeof obj.name !== 'string' || obj.name.trim().length === 0 || obj.name.length > 100) {
    return { valid: false, error: 'Name must be a non-empty string up to 100 characters' };
  }
  
  // Validate dateOfBirth format (YYYY-MM-DD)
  if (typeof obj.dateOfBirth !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(obj.dateOfBirth)) {
    return { valid: false, error: 'Date of birth must be in YYYY-MM-DD format' };
  }
  const [year, month, day] = obj.dateOfBirth.split('-').map(Number);
  if (year < 1800 || year > 2200 || month < 1 || month > 12 || day < 1 || day > 31) {
    return { valid: false, error: 'Invalid date of birth values' };
  }
  
  // Validate timeOfBirth format (HH:MM)
  if (typeof obj.timeOfBirth !== 'string' || !/^\d{2}:\d{2}$/.test(obj.timeOfBirth)) {
    return { valid: false, error: 'Time of birth must be in HH:MM format' };
  }
  const [hours, minutes] = obj.timeOfBirth.split(':').map(Number);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return { valid: false, error: 'Invalid time of birth values' };
  }
  
  // Validate placeOfBirth
  if (typeof obj.placeOfBirth !== 'string' || obj.placeOfBirth.trim().length === 0 || obj.placeOfBirth.length > 200) {
    return { valid: false, error: 'Place of birth must be a non-empty string up to 200 characters' };
  }
  
  // Validate latitude (-90 to 90)
  if (typeof obj.latitude !== 'number' || isNaN(obj.latitude) || obj.latitude < -90 || obj.latitude > 90) {
    return { valid: false, error: 'Latitude must be a number between -90 and 90' };
  }
  
  // Validate longitude (-180 to 180)
  if (typeof obj.longitude !== 'number' || isNaN(obj.longitude) || obj.longitude < -180 || obj.longitude > 180) {
    return { valid: false, error: 'Longitude must be a number between -180 and 180' };
  }
  
  return {
    valid: true,
    data: {
      name: obj.name.trim().slice(0, 100),
      dateOfBirth: obj.dateOfBirth,
      timeOfBirth: obj.timeOfBirth,
      placeOfBirth: obj.placeOfBirth.trim().slice(0, 200),
      latitude: obj.latitude,
      longitude: obj.longitude
    }
  };
}

// Lahiri Ayanamsha constants (Chitra Paksha)
const LAHIRI_AYANAMSHA_J2000 = 23.856;
const AYANAMSHA_PRECESSION_RATE = 50.2877 / 3600; // degrees per year
const J2000_JD = 2451545.0;

// Degree to radian conversion
const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

// Nakshatra data
const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

const NAKSHATRA_LORDS = [
  'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu',
  'Jupiter', 'Saturn', 'Mercury', 'Ketu', 'Venus', 'Sun',
  'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury',
  'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu',
  'Jupiter', 'Saturn', 'Mercury'
];

const RASHI_ORDER = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const TITHI_NAMES = [
  'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima'
];

const YOGA_NAMES = [
  'Vishkumbha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana',
  'Atiganda', 'Sukarma', 'Dhriti', 'Shoola', 'Ganda',
  'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra',
  'Siddhi', 'Vyatipata', 'Variyan', 'Parigha', 'Shiva',
  'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma',
  'Indra', 'Vaidhriti'
];

const KARANA_NAMES = [
  'Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti',
  'Shakuni', 'Chatushpada', 'Naga', 'Kimstughna'
];

const VARA_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const VARA_SANSKRIT = ['Ravivar', 'Somvar', 'Mangalvar', 'Budhvar', 'Guruvar', 'Shukravar', 'Shanivar'];
const VARA_LORD = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];

const NAKSHATRA_SPAN = 360 / 27;
const PADA_SPAN = NAKSHATRA_SPAN / 4;

// Normalize angle to 0-360
function normalize(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

// Get timezone offset for Indian cities
function getTimezoneOffset(longitude: number): number {
  if (longitude >= 68 && longitude <= 97) {
    return 5.5; // IST for all of India
  }
  return longitude / 15;
}

// Calculate Julian Day with high precision
function calculateJulianDay(year: number, month: number, day: number, hour: number, minute: number, second: number): number {
  let y = year;
  let m = month;
  
  if (m <= 2) {
    y = y - 1;
    m = m + 12;
  }
  
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  
  const dayFraction = (hour + minute / 60 + second / 3600) / 24;
  
  return Math.floor(365.25 * (y + 4716)) + 
         Math.floor(30.6001 * (m + 1)) + 
         day + dayFraction + b - 1524.5;
}

// Calculate Lahiri Ayanamsha (Chitra Paksha) with nutation
function calculateLahiriAyanamsha(jd: number): number {
  const T = (jd - J2000_JD) / 36525;
  
  // Base Lahiri at J2000.0: 23°51'11" = 23.853055...
  // Use official IENA Lahiri computation
  const omega = (125.04452 - 1934.136261 * T) * DEG_TO_RAD;
  const L = (280.4665 + 36000.7698 * T) * DEG_TO_RAD;
  const Lp = (218.3165 + 481267.8813 * T) * DEG_TO_RAD;
  
  // Nutation in longitude (simplified)
  const nutationLongitude = (-17.20 * Math.sin(omega) - 1.32 * Math.sin(2 * L) - 0.23 * Math.sin(2 * Lp) + 0.21 * Math.sin(2 * omega)) / 3600;
  
  // Lahiri Ayanamsha calculation
  const yearsSinceJ2000 = (jd - J2000_JD) / 365.25;
  const ayanamsha = LAHIRI_AYANAMSHA_J2000 + (AYANAMSHA_PRECESSION_RATE * yearsSinceJ2000) + nutationLongitude;
  
  return ayanamsha;
}

// Calculate GMST (Greenwich Mean Sidereal Time)
function calculateGMST(jd: number): number {
  const T = (jd - J2000_JD) / 36525;
  let gmst = 280.46061837 + 
             360.98564736629 * (jd - J2000_JD) + 
             0.000387933 * T * T - 
             T * T * T / 38710000;
  return normalize(gmst);
}

// Calculate LST (Local Sidereal Time)
function calculateLST(jd: number, longitude: number): number {
  const gmst = calculateGMST(jd);
  return normalize(gmst + longitude);
}

// Calculate Ascendant using proper spherical trigonometry
function calculateAscendant(jd: number, latitude: number, longitude: number, ayanamsha: number) {
  const T = (jd - J2000_JD) / 36525;
  
  // True obliquity with nutation
  const meanObliquity = 23.439291 - 0.0130042 * T - 1.64e-7 * T * T + 5.04e-7 * T * T * T;
  const omega = (125.04452 - 1934.136261 * T) * DEG_TO_RAD;
  const nutationObliquity = (9.20 * Math.cos(omega) + 0.57 * Math.cos(2 * (280.4665 + 36000.7698 * T) * DEG_TO_RAD)) / 3600;
  const obliquity = meanObliquity + nutationObliquity;
  
  const lst = calculateLST(jd, longitude);
  
  const latRad = latitude * DEG_TO_RAD;
  const oblRad = obliquity * DEG_TO_RAD;
  const lstRad = lst * DEG_TO_RAD;
  
  // Calculate Ascendant using the formula: tan(Asc) = cos(LST) / -(sin(ε)tan(φ) + cos(ε)sin(LST))
  let ascTropical = Math.atan2(
    Math.cos(lstRad),
    -(Math.sin(oblRad) * Math.tan(latRad) + Math.cos(oblRad) * Math.sin(lstRad))
  ) * RAD_TO_DEG;
  
  ascTropical = normalize(ascTropical);
  
  // Convert to sidereal
  let ascSidereal = ascTropical - ayanamsha;
  if (ascSidereal < 0) ascSidereal += 360;
  
  const signIndex = Math.floor(ascSidereal / 30);
  const signDegree = ascSidereal % 30;
  
  return {
    siderealDegree: ascSidereal,
    sign: RASHI_ORDER[signIndex],
    signIndex,
    signDegree
  };
}

// ============================================
// HIGH-PRECISION PLANETARY CALCULATIONS
// Using VSOP87 truncated series and proper geocentric conversions
// ============================================

interface OrbitalElements {
  L: number;  // Mean longitude
  a: number;  // Semi-major axis (AU)
  e: number;  // Eccentricity
  i: number;  // Inclination
  omega: number; // Longitude of ascending node
  pi: number;  // Longitude of perihelion
}

// Calculate orbital elements for each planet at given Julian centuries
function getOrbitalElements(T: number): Record<string, OrbitalElements> {
  return {
    Mercury: {
      L: normalize(252.250906 + 149474.0722491 * T + 0.00030350 * T * T),
      a: 0.38709927 + 0.00000037 * T,
      e: 0.20563593 + 0.00001906 * T,
      i: 7.00497902 - 0.00594749 * T,
      omega: 48.33076593 - 0.12534081 * T,
      pi: 77.45779628 + 0.16047689 * T
    },
    Venus: {
      L: normalize(181.979801 + 58519.2130302 * T + 0.00031060 * T * T),
      a: 0.72333566 + 0.00000390 * T,
      e: 0.00677672 - 0.00004107 * T,
      i: 3.39467605 - 0.00078890 * T,
      omega: 76.67984255 - 0.27769418 * T,
      pi: 131.60246718 + 0.00268329 * T
    },
    Earth: {
      L: normalize(100.466449 + 36000.7698231 * T + 0.00030368 * T * T),
      a: 1.00000261 + 0.00000562 * T,
      e: 0.01671123 - 0.00004392 * T,
      i: 0.00001531 - 0.01294668 * T,
      omega: 0.0,
      pi: 102.93768193 + 0.32327364 * T
    },
    Mars: {
      L: normalize(355.433275 + 19141.6964471 * T + 0.00031052 * T * T),
      a: 1.52371034 + 0.00001847 * T,
      e: 0.09339410 + 0.00007882 * T,
      i: 1.84969142 - 0.00813131 * T,
      omega: 49.55953891 - 0.29257343 * T,
      pi: -23.94362959 + 0.44441088 * T
    },
    Jupiter: {
      L: normalize(34.351484 + 3036.3027889 * T + 0.00022374 * T * T),
      a: 5.20288700 - 0.00011607 * T,
      e: 0.04838624 - 0.00013253 * T,
      i: 1.30439695 - 0.00183714 * T,
      omega: 100.47390909 + 0.20469106 * T,
      pi: 14.72847983 + 0.21252668 * T
    },
    Saturn: {
      L: normalize(50.077471 + 1223.5110141 * T + 0.00051952 * T * T),
      a: 9.53667594 - 0.00125060 * T,
      e: 0.05386179 - 0.00050991 * T,
      i: 2.48599187 + 0.00193609 * T,
      omega: 113.66242448 - 0.28867794 * T,
      pi: 92.59887831 - 0.41897216 * T
    }
  };
}

// Solve Kepler's equation iteratively
function solveKepler(M: number, e: number): number {
  const Mrad = M * DEG_TO_RAD;
  let E = Mrad;
  
  for (let i = 0; i < 15; i++) {
    const dE = (Mrad - E + e * Math.sin(E)) / (1 - e * Math.cos(E));
    E += dE;
    if (Math.abs(dE) < 1e-12) break;
  }
  
  return E;
}

// Calculate heliocentric coordinates
function heliocentricCoords(elem: OrbitalElements): { x: number; y: number; z: number; r: number; lon: number } {
  const M = normalize(elem.L - elem.pi);  // Mean anomaly
  const E = solveKepler(M, elem.e);       // Eccentric anomaly
  
  // True anomaly
  const xv = elem.a * (Math.cos(E) - elem.e);
  const yv = elem.a * Math.sqrt(1 - elem.e * elem.e) * Math.sin(E);
  
  const v = Math.atan2(yv, xv) * RAD_TO_DEG;  // True anomaly in degrees
  const r = Math.sqrt(xv * xv + yv * yv);      // Distance from Sun
  
  // Heliocentric longitude
  const lon = normalize(v + elem.pi - elem.omega);
  
  // Convert to ecliptic coordinates
  const lonRad = lon * DEG_TO_RAD;
  const omegaRad = elem.omega * DEG_TO_RAD;
  const iRad = elem.i * DEG_TO_RAD;
  
  const xh = r * (Math.cos(omegaRad) * Math.cos(lonRad) - Math.sin(omegaRad) * Math.sin(lonRad) * Math.cos(iRad));
  const yh = r * (Math.sin(omegaRad) * Math.cos(lonRad) + Math.cos(omegaRad) * Math.sin(lonRad) * Math.cos(iRad));
  const zh = r * Math.sin(lonRad) * Math.sin(iRad);
  
  return { x: xh, y: yh, z: zh, r, lon: normalize(v + elem.pi) };
}

// Convert heliocentric to geocentric coordinates
function helioToGeo(planet: { x: number; y: number; z: number }, earth: { x: number; y: number; z: number }): { lon: number; lat: number; r: number } {
  const xg = planet.x - earth.x;
  const yg = planet.y - earth.y;
  const zg = planet.z - earth.z;
  
  const r = Math.sqrt(xg * xg + yg * yg + zg * zg);
  const lon = normalize(Math.atan2(yg, xg) * RAD_TO_DEG);
  const lat = Math.asin(zg / r) * RAD_TO_DEG;
  
  return { lon, lat, r };
}

// Calculate Moon position using ELP2000 truncated series
function calculateMoonPosition(jd: number): number {
  const T = (jd - J2000_JD) / 36525;
  const T2 = T * T;
  const T3 = T2 * T;
  const T4 = T3 * T;
  
  // Fundamental arguments (in degrees)
  const Lp = normalize(218.3164477 + 481267.88123421 * T - 0.0015786 * T2 + T3 / 538841 - T4 / 65194000);
  const D = normalize(297.8501921 + 445267.1114034 * T - 0.0018819 * T2 + T3 / 545868 - T4 / 113065000);
  const M = normalize(357.5291092 + 35999.0502909 * T - 0.0001536 * T2 + T3 / 24490000);
  const Mp = normalize(134.9633964 + 477198.8675055 * T + 0.0087414 * T2 + T3 / 69699 - T4 / 14712000);
  const F = normalize(93.2720950 + 483202.0175233 * T - 0.0036539 * T2 - T3 / 3526000 + T4 / 863310000);
  
  // Major terms for longitude (in degrees)
  const Drad = D * DEG_TO_RAD;
  const Mrad = M * DEG_TO_RAD;
  const Mprad = Mp * DEG_TO_RAD;
  const Frad = F * DEG_TO_RAD;
  
  // Longitude terms (ELP2000 truncated)
  let longitude = Lp;
  
  // Main periodic terms
  longitude += 6.288774 * Math.sin(Mprad);
  longitude += 1.274027 * Math.sin(2 * Drad - Mprad);
  longitude += 0.658314 * Math.sin(2 * Drad);
  longitude += 0.213618 * Math.sin(2 * Mprad);
  longitude -= 0.185116 * Math.sin(Mrad);
  longitude -= 0.114332 * Math.sin(2 * Frad);
  longitude += 0.058793 * Math.sin(2 * Drad - 2 * Mprad);
  longitude += 0.057066 * Math.sin(2 * Drad - Mrad - Mprad);
  longitude += 0.053322 * Math.sin(2 * Drad + Mprad);
  longitude += 0.045758 * Math.sin(2 * Drad - Mrad);
  longitude -= 0.040923 * Math.sin(Mrad - Mprad);
  longitude -= 0.034720 * Math.sin(Drad);
  longitude -= 0.030383 * Math.sin(Mrad + Mprad);
  longitude += 0.015327 * Math.sin(2 * Drad - 2 * Frad);
  longitude -= 0.012528 * Math.sin(Mprad + 2 * Frad);
  longitude += 0.010980 * Math.sin(Mprad - 2 * Frad);
  longitude += 0.010675 * Math.sin(4 * Drad - Mprad);
  longitude += 0.010034 * Math.sin(3 * Mprad);
  longitude += 0.008548 * Math.sin(4 * Drad - 2 * Mprad);
  longitude -= 0.007888 * Math.sin(2 * Drad + Mrad - Mprad);
  longitude -= 0.006766 * Math.sin(2 * Drad + Mrad);
  longitude -= 0.005163 * Math.sin(Drad - Mprad);
  longitude += 0.004987 * Math.sin(Drad + Mrad);
  longitude += 0.004036 * Math.sin(2 * Drad - Mrad + Mprad);
  
  return normalize(longitude);
}

// Calculate Sun position (geocentric)
function calculateSunPosition(jd: number): number {
  const T = (jd - J2000_JD) / 36525;
  const T2 = T * T;
  const T3 = T2 * T;
  
  // Mean elements
  const L0 = normalize(280.4664567 + 36000.76982779 * T + 0.0003032 * T2 + T3 / 49931000);
  const M = normalize(357.5291092 + 35999.0502909 * T - 0.0001536 * T2 + T3 / 24490000);
  
  const Mrad = M * DEG_TO_RAD;
  
  // Equation of center with higher order terms
  const C = (1.9146000 - 0.0048000 * T - 0.0000140 * T2) * Math.sin(Mrad)
          + (0.0200000 - 0.0001000 * T) * Math.sin(2 * Mrad)
          + 0.0003000 * Math.sin(3 * Mrad);
  
  // True longitude
  const sunLon = normalize(L0 + C);
  
  return sunLon;
}

// Apply planetary perturbations for superior planets
function applyPerturbations(T: number, planet: string, baseLon: number): number {
  let perturbation = 0;
  
  // Jupiter-Saturn mutual perturbations
  const Jmean = (34.40 + 3034.90 * T) * DEG_TO_RAD;
  const Smean = (50.08 + 1222.11 * T) * DEG_TO_RAD;
  const diff = Jmean - Smean;
  
  if (planet === 'Jupiter') {
    perturbation = 0.3314 * Math.sin(diff)
                 + 0.0144 * Math.sin(2 * diff)
                 - 0.1906 * Math.cos(diff)
                 - 0.0153 * Math.cos(2 * diff);
  } else if (planet === 'Saturn') {
    perturbation = 0.8127 * Math.sin(diff)
                 + 0.0266 * Math.sin(2 * diff)
                 + 0.4770 * Math.cos(diff)
                 + 0.0169 * Math.cos(2 * diff);
  } else if (planet === 'Mars') {
    // Mars perturbations by Jupiter
    const Mmars = (19.41 + 19139.86 * T) * DEG_TO_RAD;
    perturbation = 0.3707 * Math.sin(2 * Jmean - Mmars)
                 + 0.0540 * Math.sin(Jmean - Mmars)
                 - 0.0141 * Math.sin(2 * Mmars - 3 * Jmean);
  }
  
  return normalize(baseLon + perturbation);
}

// Calculate all planetary positions
function calculatePlanetaryPositions(jd: number): Record<string, number> {
  const T = (jd - J2000_JD) / 36525;
  
  // Get orbital elements
  const elements = getOrbitalElements(T);
  
  // Calculate Earth position first (needed for geocentric conversion)
  const earthHelio = heliocentricCoords(elements.Earth);
  
  const positions: Record<string, number> = {};
  
  // Sun (geocentric - opposite of Earth's heliocentric position)
  positions.Sun = calculateSunPosition(jd);
  
  // Moon
  positions.Moon = calculateMoonPosition(jd);
  
  // Inner planets (Mercury, Venus) - need special handling for elongation
  for (const planet of ['Mercury', 'Venus']) {
    const helio = heliocentricCoords(elements[planet]);
    const geo = helioToGeo(helio, earthHelio);
    positions[planet] = geo.lon;
  }
  
  // Superior planets (Mars, Jupiter, Saturn)
  for (const planet of ['Mars', 'Jupiter', 'Saturn']) {
    const helio = heliocentricCoords(elements[planet]);
    const geo = helioToGeo(helio, earthHelio);
    positions[planet] = applyPerturbations(T, planet, geo.lon);
  }
  
  // Rahu (Mean North Node) - always retrograde
  const omega = 125.04452 - 1934.136261 * T + 0.0020708 * T * T;
  positions.Rahu = normalize(omega);
  positions.Ketu = normalize(omega + 180);
  
  return positions;
}

// Determine retrograde status by calculating actual planet velocity
// This is the astronomically correct way - check if planet longitude is decreasing over time
function isRetrograde(sunLong: number, planetLong: number, planet: string, jd: number): boolean {
  if (planet === 'Rahu' || planet === 'Ketu') return true;
  if (planet === 'Sun' || planet === 'Moon') return false;
  
  // Calculate planet position at a slightly later time to determine velocity
  const jdNext = jd + 0.5; // Half day later
  const T = (jd - J2000_JD) / 36525;
  const Tnext = (jdNext - J2000_JD) / 36525;
  
  // Get current and next positions
  const elements = getOrbitalElements(T);
  const elementsNext = getOrbitalElements(Tnext);
  const earthHelio = heliocentricCoords(elements.Earth);
  const earthHelioNext = heliocentricCoords(elementsNext.Earth);
  
  let currentLon = 0;
  let nextLon = 0;
  
  if (planet === 'Mercury' || planet === 'Venus') {
    const helio = heliocentricCoords(elements[planet]);
    const helioNext = heliocentricCoords(elementsNext[planet]);
    currentLon = helioToGeo(helio, earthHelio).lon;
    nextLon = helioToGeo(helioNext, earthHelioNext).lon;
  } else if (planet === 'Mars' || planet === 'Jupiter' || planet === 'Saturn') {
    const helio = heliocentricCoords(elements[planet]);
    const helioNext = heliocentricCoords(elementsNext[planet]);
    currentLon = helioToGeo(helio, earthHelio).lon;
    nextLon = helioToGeo(helioNext, earthHelioNext).lon;
  }
  
  // Calculate daily motion (velocity)
  let dailyMotion = (nextLon - currentLon) * 2; // Multiply by 2 since we used half day
  
  // Handle wrap-around at 0/360
  if (dailyMotion > 180) dailyMotion -= 360;
  if (dailyMotion < -180) dailyMotion += 360;
  
  // Retrograde when daily motion is negative (planet moving backward)
  return dailyMotion < 0;
}

// Calculate Nakshatra details
function calculateNakshatra(longitude: number) {
  const normalized = normalize(longitude);
  const nakshatraIndex = Math.floor(normalized / NAKSHATRA_SPAN);
  const nakshatraDegree = normalized % NAKSHATRA_SPAN;
  const pada = Math.min(Math.floor(nakshatraDegree / PADA_SPAN) + 1, 4);
  
  return {
    nakshatra: NAKSHATRAS[nakshatraIndex],
    nakshatraIndex,
    nakshatraLord: NAKSHATRA_LORDS[nakshatraIndex],
    pada,
    nakshatraDegree
  };
}

// Calculate Panchang
function calculatePanchang(moonLong: number, sunLong: number, date: Date) {
  // Tithi calculation
  let diff = moonLong - sunLong;
  if (diff < 0) diff += 360;
  const tithiNumber = Math.floor(diff / 12) + 1;
  const tithiPhase = (diff % 12) / 12;
  const paksha = tithiNumber <= 15 ? 'Shukla' : 'Krishna';
  const tithiInPaksha = tithiNumber <= 15 ? tithiNumber : tithiNumber - 15;
  const tithiName = TITHI_NAMES[Math.min(tithiInPaksha - 1, 14)];
  
  // Yoga
  let combined = moonLong + sunLong;
  if (combined >= 360) combined -= 360;
  const yogaNumber = Math.floor(combined / NAKSHATRA_SPAN) + 1;
  const yogaIndex = (yogaNumber - 1) % 27;
  
  // Karana
  const karanaNumber = Math.floor(diff / 6) + 1;
  let karanaIndex: number;
  if (karanaNumber === 1) {
    karanaIndex = 10;
  } else if (karanaNumber >= 58) {
    karanaIndex = karanaNumber - 51;
  } else {
    karanaIndex = (karanaNumber - 2) % 7;
  }
  
  // Vara
  const dayOfWeek = date.getUTCDay();
  
  // Moon Nakshatra
  const moonNakshatra = calculateNakshatra(moonLong);
  
  return {
    tithi: {
      number: tithiNumber,
      name: tithiName,
      paksha,
      phase: tithiPhase
    },
    nakshatra: {
      name: moonNakshatra.nakshatra,
      pada: moonNakshatra.pada,
      lord: moonNakshatra.nakshatraLord
    },
    yoga: {
      number: yogaNumber,
      name: YOGA_NAMES[yogaIndex]
    },
    karana: {
      number: karanaNumber,
      name: KARANA_NAMES[karanaIndex]
    },
    vara: {
      name: VARA_NAMES[dayOfWeek],
      sanskrit: VARA_SANSKRIT[dayOfWeek],
      lord: VARA_LORD[dayOfWeek]
    }
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const rawInput = await req.json();
    
    // Validate all inputs
    const validation = validateInput(rawInput);
    if (!validation.valid) {
      console.log('Input validation failed');
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    const { name, dateOfBirth, timeOfBirth, placeOfBirth, latitude, longitude } = validation.data;
    
    console.log('Kundali calculation started');
    
    // Parse date and time
    const [year, month, day] = dateOfBirth.split('-').map(Number);
    const [hours, minutes] = timeOfBirth.split(':').map(Number);
    
    // Get timezone offset
    const tzOffset = getTimezoneOffset(longitude);
    
    // Convert local time to UTC
    let utcHours = hours - Math.floor(tzOffset);
    let utcMinutes = minutes - Math.round((tzOffset % 1) * 60);
    let adjustedDay = day;
    let adjustedMonth = month;
    let adjustedYear = year;
    
    // Handle minute overflow/underflow
    if (utcMinutes < 0) {
      utcMinutes += 60;
      utcHours -= 1;
    }
    if (utcMinutes >= 60) {
      utcMinutes -= 60;
      utcHours += 1;
    }
    
    // Handle hour overflow/underflow
    if (utcHours < 0) {
      utcHours += 24;
      adjustedDay -= 1;
      // Handle month/year rollback if needed
      if (adjustedDay < 1) {
        adjustedMonth -= 1;
        if (adjustedMonth < 1) {
          adjustedMonth = 12;
          adjustedYear -= 1;
        }
        // Get days in previous month
        const daysInPrevMonth = new Date(adjustedYear, adjustedMonth, 0).getDate();
        adjustedDay = daysInPrevMonth;
      }
    }
    if (utcHours >= 24) {
      utcHours -= 24;
      adjustedDay += 1;
    }
    
    // Calculate Julian Day
    const jd = calculateJulianDay(adjustedYear, adjustedMonth, adjustedDay, utcHours, utcMinutes, 0);
    
    // Calculate Lahiri Ayanamsha
    const ayanamsha = calculateLahiriAyanamsha(jd);
    
    // Calculate Ascendant
    const ascendant = calculateAscendant(jd, latitude, longitude, ayanamsha);
    
    // Calculate tropical planetary positions
    const tropicalPositions = calculatePlanetaryPositions(jd);
    
    // Convert to sidereal and create planet array
    const lagnaIndex = ascendant.signIndex;
    const planets: any[] = [];
    
    for (const [planetName, tropicalLong] of Object.entries(tropicalPositions)) {
      let siderealLong = tropicalLong - ayanamsha;
      if (siderealLong < 0) siderealLong += 360;
      
      const signIndex = Math.floor(siderealLong / 30);
      const degree = siderealLong % 30;
      const house = ((signIndex - lagnaIndex + 12) % 12) + 1;
      
      const nakshatraDetails = calculateNakshatra(siderealLong);
      
      // Calculate retrograde status using sidereal Sun
      let sunSidereal = tropicalPositions.Sun - ayanamsha;
      if (sunSidereal < 0) sunSidereal += 360;
      const retrograde = isRetrograde(sunSidereal, siderealLong, planetName, jd);
      
      planets.push({
        name: planetName,
        sign: RASHI_ORDER[signIndex],
        signIndex,
        degree: parseFloat(degree.toFixed(2)),
        house,
        isRetrograde: retrograde,
        nakshatra: nakshatraDetails.nakshatra,
        nakshatraPada: nakshatraDetails.pada
      });
    }
    
    // Calculate houses using Sri Pati (midpoint) system for Chalit
    // Sri Pati: Each bhava cusp is the midpoint between two equal house cusps
    const lagnaAbsoluteDegree = lagnaIndex * 30 + ascendant.signDegree;
    
    // First calculate equal house cusps (standard 30° from lagna)
    const equalCusps = Array.from({ length: 12 }, (_, i) => normalize(lagnaAbsoluteDegree + (i * 30)));
    
    // Sri Pati bhava cusps are midpoints: cusp[i] = midpoint(equal[i-1], equal[i])
    // For house 1: midpoint of equal cusp 12 and equal cusp 1
    const sriPatiCusps = Array.from({ length: 12 }, (_, i) => {
      const prevCusp = equalCusps[(i + 11) % 12]; // Previous equal cusp
      const currCusp = equalCusps[i];              // Current equal cusp
      
      // Calculate midpoint handling the 360° wrap
      let midpoint: number;
      if (Math.abs(currCusp - prevCusp) > 180) {
        // Crosses 0°
        midpoint = normalize((prevCusp + currCusp + 360) / 2);
      } else {
        midpoint = (prevCusp + currCusp) / 2;
      }
      return normalize(midpoint);
    });
    
    const houses = Array.from({ length: 12 }, (_, i) => {
      const houseNum = i + 1;
      const cusp = sriPatiCusps[i];
      const signIndex = Math.floor(cusp / 30);
      
      return {
        houseNumber: houseNum,
        sign: RASHI_ORDER[signIndex],
        planets: planets.filter(p => p.house === houseNum).map(p => p.name),
        cusp: parseFloat(cusp.toFixed(4))
      };
    });
    
    // Calculate Panchang
    const moonPlanet = planets.find(p => p.name === 'Moon')!;
    const sunPlanet = planets.find(p => p.name === 'Sun')!;
    const moonAbsLong = moonPlanet.signIndex * 30 + moonPlanet.degree;
    const sunAbsLong = sunPlanet.signIndex * 30 + sunPlanet.degree;
    
    const birthDate = new Date(Date.UTC(adjustedYear, adjustedMonth - 1, adjustedDay, utcHours, utcMinutes));
    const panchang = calculatePanchang(moonAbsLong, sunAbsLong, birthDate);
    
    // Get ascendant nakshatra
    const ascNakshatra = calculateNakshatra(ascendant.siderealDegree);
    
    const result = {
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
        degree: parseFloat(ascendant.signDegree.toFixed(2)),
        nakshatra: ascNakshatra.nakshatra
      },
      planets,
      houses,
      panchang,
      ayanamsha: parseFloat(ayanamsha.toFixed(6)),
      createdAt: new Date().toISOString()
    };
    
    console.log('Kundali calculation complete');
    
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
    
  } catch (error: unknown) {
    console.error('Kundali calculation error');
    return new Response(JSON.stringify({ error: 'Calculation failed. Please check your inputs.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
