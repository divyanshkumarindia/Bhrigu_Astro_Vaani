// BNN Aspect Utilities - Centralized aspect and connection calculations
// Based on Bhrighu Nandi Nadi principles

import { GrahaName, RashiSign, PlanetPosition, KundaliReport } from '@/types/astrology';

// ============================================
// DIRECTIONAL GROUPINGS (Trine Aspects)
// ============================================

export const DIRECTION_GROUPS: Record<string, RashiSign[]> = {
  East: ['Aries', 'Leo', 'Sagittarius'],      // Fire signs - Agni Tattva
  South: ['Taurus', 'Virgo', 'Capricorn'],    // Earth signs - Prithvi Tattva
  West: ['Gemini', 'Libra', 'Aquarius'],      // Air signs - Vayu Tattva
  North: ['Cancer', 'Scorpio', 'Pisces']       // Water signs - Jal Tattva
};

export const DIRECTION_ELEMENTS: Record<string, { element: string; elementHi: string; tattva: string }> = {
  East: { element: 'Fire', elementHi: 'अग्नि', tattva: 'Agni Tattva' },
  South: { element: 'Earth', elementHi: 'पृथ्वी', tattva: 'Prithvi Tattva' },
  West: { element: 'Air', elementHi: 'वायु', tattva: 'Vayu Tattva' },
  North: { element: 'Water', elementHi: 'जल', tattva: 'Jal Tattva' }
};

export const DIRECTION_HINDI: Record<string, string> = {
  East: 'पूर्व',
  South: 'दक्षिण',
  West: 'पश्चिम',
  North: 'उत्तर'
};

// Get direction for a sign
export const getSignDirection = (sign: RashiSign): string | null => {
  for (const [direction, signs] of Object.entries(DIRECTION_GROUPS)) {
    if (signs.includes(sign)) {
      return direction;
    }
  }
  return null;
};

// Check if two signs are in the same direction (Trine relationship)
export const areSignsInSameDirection = (sign1: RashiSign, sign2: RashiSign): boolean => {
  const dir1 = getSignDirection(sign1);
  const dir2 = getSignDirection(sign2);
  return dir1 !== null && dir1 === dir2;
};

// ============================================
// ASPECT STRENGTH CALCULATIONS
// ============================================

export interface AspectStrength {
  strength: number;        // 0-100 percentage
  type: 'conjunction' | 'trine' | 'opposition' | 'adjacent' | 'other';
  typeHi: string;
  description: string;
  descriptionHi: string;
}

// Calculate aspect strength between two planets based on BNN rules
export const calculateAspectStrength = (
  planet1: PlanetPosition,
  planet2: PlanetPosition
): AspectStrength => {
  const house1 = planet1.house;
  const house2 = planet2.house;
  
  // Same house = Conjunction (75-100% based on degrees)
  if (house1 === house2) {
    const degDiff = Math.abs(planet1.degree - planet2.degree);
    const strength = degDiff <= 5 ? 100 : degDiff <= 10 ? 90 : 75;
    return {
      strength,
      type: 'conjunction',
      typeHi: 'युति',
      description: `Conjunction in same sign - ${strength}% influence. Very strong mutual activation.`,
      descriptionHi: `एक ही राशि में युति - ${strength}% प्रभाव। बहुत मजबूत पारस्परिक सक्रियता।`
    };
  }
  
  const houseDiff = Math.abs(house1 - house2);
  const normalizedDiff = houseDiff > 6 ? 12 - houseDiff : houseDiff;
  
  // Trine (5th/9th) = 75% influence
  if (normalizedDiff === 4 || houseDiff === 4 || houseDiff === 8) {
    return {
      strength: 75,
      type: 'trine',
      typeHi: 'त्रिकोण',
      description: 'Trine aspect (5th/9th) - 75% influence. Harmonious and supportive connection.',
      descriptionHi: 'त्रिकोण दृष्टि (5वां/9वां) - 75% प्रभाव। सामंजस्यपूर्ण और सहायक संबंध।'
    };
  }
  
  // Opposition (7th) = 50% influence
  if (normalizedDiff === 6) {
    return {
      strength: 50,
      type: 'opposition',
      typeHi: 'सप्तम',
      description: '7th aspect (Opposition) - 50% influence. Complementary but challenging energy.',
      descriptionHi: 'सप्तम दृष्टि (विपरीत) - 50% प्रभाव। पूरक लेकिन चुनौतीपूर्ण ऊर्जा।'
    };
  }
  
  // Adjacent signs (2nd/12th) = 20-90% based on degrees
  if (normalizedDiff === 1) {
    // Adjacent signs influence depends on closeness of degrees
    const deg1InAbs = (planet1.signIndex * 30) + planet1.degree;
    const deg2InAbs = (planet2.signIndex * 30) + planet2.degree;
    const actualDegDiff = Math.abs(deg1InAbs - deg2InAbs);
    
    let strength = 20;
    if (actualDegDiff <= 5) strength = 90;
    else if (actualDegDiff <= 10) strength = 70;
    else if (actualDegDiff <= 15) strength = 50;
    else if (actualDegDiff <= 20) strength = 35;
    
    return {
      strength,
      type: 'adjacent',
      typeHi: 'निकटवर्ती',
      description: `Adjacent sign (2nd/12th) - ${strength}% influence based on degree proximity.`,
      descriptionHi: `निकटवर्ती राशि (2रा/12वां) - डिग्री निकटता के आधार पर ${strength}% प्रभाव।`
    };
  }
  
  // Other aspects (3rd, 4th, 6th, 8th, 10th, 11th)
  const otherStrengths: Record<number, number> = {
    2: 30,  // 3rd house
    3: 40,  // 4th house (Mars special aspect)
    5: 25,  // 6th house
    7: 35,  // 8th house (Mars special aspect)
    9: 45,  // 10th house (Saturn special aspect)
    10: 40  // 11th house
  };
  
  const strength = otherStrengths[normalizedDiff] || 20;
  
  return {
    strength,
    type: 'other',
    typeHi: 'अन्य',
    description: `${normalizedDiff + 1}th house relationship - ${strength}% influence.`,
    descriptionHi: `${normalizedDiff + 1}वां भाव संबंध - ${strength}% प्रभाव।`
  };
};

// ============================================
// PRIMARY CONSIDERATION HOUSES
// ============================================

export const PRIMARY_CONSIDERATION_HOUSES = [2, 5, 7, 9, 11] as const;

export const HOUSE_RELATIONSHIPS: Record<number, { name: string; nameHi: string; significance: string; significanceHi: string }> = {
  1: { name: 'Self/Same', nameHi: 'स्वयं/समान', significance: 'Direct conjunction - strongest bond', significanceHi: 'प्रत्यक्ष युति - सबसे मजबूत बंधन' },
  2: { name: '2nd House', nameHi: '2रा भाव', significance: 'Wealth, family, resources shared', significanceHi: 'धन, परिवार, संसाधन साझा' },
  3: { name: '3rd House', nameHi: '3रा भाव', significance: 'Communication, short journeys, courage', significanceHi: 'संचार, छोटी यात्राएं, साहस' },
  4: { name: '4th House', nameHi: '4था भाव', significance: 'Home, comfort, emotional bond', significanceHi: 'घर, आराम, भावनात्मक बंधन' },
  5: { name: '5th House (Trine)', nameHi: '5वां भाव (त्रिकोण)', significance: 'Creative harmony, children, romance', significanceHi: 'रचनात्मक सामंजस्य, संतान, रोमांस' },
  6: { name: '6th House', nameHi: '6ठा भाव', significance: 'Service, health matters, obstacles', significanceHi: 'सेवा, स्वास्थ्य मामले, बाधाएं' },
  7: { name: '7th House (Opposition)', nameHi: '7वां भाव (सप्तम)', significance: 'Partnership, marriage, balance', significanceHi: 'साझेदारी, विवाह, संतुलन' },
  8: { name: '8th House', nameHi: '8वां भाव', significance: 'Transformation, hidden matters, inheritance', significanceHi: 'परिवर्तन, छिपे मामले, विरासत' },
  9: { name: '9th House (Trine)', nameHi: '9वां भाव (त्रिकोण)', significance: 'Dharma, luck, higher learning', significanceHi: 'धर्म, भाग्य, उच्च शिक्षा' },
  10: { name: '10th House', nameHi: '10वां भाव', significance: 'Career, status, public image', significanceHi: 'करियर, प्रतिष्ठा, सार्वजनिक छवि' },
  11: { name: '11th House', nameHi: '11वां भाव', significance: 'Gains, fulfillment of desires, elder siblings', significanceHi: 'लाभ, इच्छा पूर्ति, बड़े भाई-बहन' },
  12: { name: '12th House', nameHi: '12वां भाव', significance: 'Expenses, foreign, spiritual liberation', significanceHi: 'व्यय, विदेश, आध्यात्मिक मुक्ति' }
};

// ============================================
// PLANET CONNECTION CHECKER (Unified)
// ============================================

export interface ConnectionResult {
  connected: boolean;
  strength: number;
  type: AspectStrength['type'];
  relationship: string;
  relationshipHi: string;
}

// Unified planet connection checker - replaces duplicate functions across components
export const arePlanetsConnected = (
  report: KundaliReport,
  planet1Name: GrahaName,
  planet2Name: GrahaName,
  minStrength: number = 50
): ConnectionResult => {
  const pos1 = report.planets.find(p => p.name === planet1Name);
  const pos2 = report.planets.find(p => p.name === planet2Name);
  
  if (!pos1 || !pos2) {
    return {
      connected: false,
      strength: 0,
      type: 'other',
      relationship: 'No connection',
      relationshipHi: 'कोई संबंध नहीं'
    };
  }
  
  const aspectStrength = calculateAspectStrength(pos1, pos2);
  
  return {
    connected: aspectStrength.strength >= minStrength,
    strength: aspectStrength.strength,
    type: aspectStrength.type,
    relationship: aspectStrength.description,
    relationshipHi: aspectStrength.descriptionHi
  };
};

// Check connection by house difference (legacy support)
export const arePlanetsConnectedByHouse = (
  house1: number,
  house2: number
): { connected: boolean; strength: number } => {
  if (house1 === house2) return { connected: true, strength: 100 };
  
  const diff = Math.abs(house1 - house2);
  const normalizedDiff = diff > 6 ? 12 - diff : diff;
  
  // Trine (5th/9th)
  if (diff === 4 || diff === 8) return { connected: true, strength: 75 };
  
  // Opposition (7th)
  if (normalizedDiff === 6) return { connected: true, strength: 50 };
  
  return { connected: false, strength: 0 };
};

// ============================================
// DIRECTIONAL TRINE ANALYSIS
// ============================================

export interface DirectionalGroupAnalysis {
  direction: string;
  directionHi: string;
  element: string;
  elementHi: string;
  planets: PlanetPosition[];
  signs: RashiSign[];
  strength: number;
  interpretation: string;
  interpretationHi: string;
}

// Get all planets in each directional group
export const analyzeDirectionalGroups = (report: KundaliReport): DirectionalGroupAnalysis[] => {
  const results: DirectionalGroupAnalysis[] = [];
  
  for (const [direction, signs] of Object.entries(DIRECTION_GROUPS)) {
    const planetsInGroup = report.planets.filter(p => signs.includes(p.sign));
    const elementInfo = DIRECTION_ELEMENTS[direction];
    
    // Calculate group strength based on number of planets
    let strength = planetsInGroup.length * 25;
    if (strength > 100) strength = 100;
    
    // Generate interpretation
    let interpretation = '';
    let interpretationHi = '';
    
    if (planetsInGroup.length === 0) {
      interpretation = `No planets in ${elementInfo.element} signs. This element's energy needs conscious development.`;
      interpretationHi = `${elementInfo.elementHi} राशियों में कोई ग्रह नहीं। इस तत्व की ऊर्जा को सचेत विकास की आवश्यकता है।`;
    } else if (planetsInGroup.length === 1) {
      interpretation = `Single planet ${planetsInGroup[0].name} activates ${elementInfo.element} energy independently.`;
      interpretationHi = `एकल ग्रह ${planetsInGroup[0].name} स्वतंत्र रूप से ${elementInfo.elementHi} ऊर्जा को सक्रिय करता है।`;
    } else {
      const planetNames = planetsInGroup.map(p => p.name).join(', ');
      interpretation = `${planetNames} in ${elementInfo.element} signs influence each other with 75% trine strength. Strong ${elementInfo.element} element dominance.`;
      interpretationHi = `${elementInfo.elementHi} राशियों में ${planetNames} 75% त्रिकोण शक्ति के साथ एक दूसरे को प्रभावित करते हैं। मजबूत ${elementInfo.elementHi} तत्व प्रभुत्व।`;
    }
    
    results.push({
      direction,
      directionHi: DIRECTION_HINDI[direction],
      element: elementInfo.element,
      elementHi: elementInfo.elementHi,
      planets: planetsInGroup,
      signs,
      strength,
      interpretation,
      interpretationHi
    });
  }
  
  return results;
};

// ============================================
// ASPECT RULES SUMMARY
// ============================================

export const ASPECT_RULES = [
  {
    type: 'Conjunction',
    typeHi: 'युति',
    condition: 'Same sign/house',
    conditionHi: 'एक ही राशि/भाव',
    strength: '75-100%',
    effect: 'Strongest influence - planets merge their energies completely',
    effectHi: 'सबसे मजबूत प्रभाव - ग्रह अपनी ऊर्जाओं को पूरी तरह मिला देते हैं'
  },
  {
    type: 'Trine',
    typeHi: 'त्रिकोण',
    condition: 'Same direction (5th/9th)',
    conditionHi: 'समान दिशा (5वां/9वां)',
    strength: '75%',
    effect: 'Harmonious exchange - planets support each other naturally',
    effectHi: 'सामंजस्यपूर्ण विनिमय - ग्रह स्वाभाविक रूप से एक दूसरे का समर्थन करते हैं'
  },
  {
    type: 'Opposition',
    typeHi: 'सप्तम दृष्टि',
    condition: '7th from each other',
    conditionHi: 'एक दूसरे से 7वां',
    strength: '50%',
    effect: 'Complementary tension - creates balance through opposition',
    effectHi: 'पूरक तनाव - विरोध के माध्यम से संतुलन बनाता है'
  },
  {
    type: 'Adjacent',
    typeHi: 'निकटवर्ती',
    condition: '2nd/12th from each other',
    conditionHi: 'एक दूसरे से 2रा/12वां',
    strength: '20-90%',
    effect: 'Degree-dependent influence - closer degrees mean stronger connection',
    effectHi: 'डिग्री-निर्भर प्रभाव - करीबी डिग्री का मतलब मजबूत संबंध'
  }
];

export const PRIMARY_HOUSES_INFO = [
  {
    house: 2,
    significance: 'Wealth & Family',
    significanceHi: 'धन और परिवार',
    relation: 'Resource sharing and family bonds',
    relationHi: 'संसाधन साझाकरण और पारिवारिक बंधन'
  },
  {
    house: 5,
    significance: 'Creativity & Children',
    significanceHi: 'रचनात्मकता और संतान',
    relation: 'Trine - harmonious creative expression',
    relationHi: 'त्रिकोण - सामंजस्यपूर्ण रचनात्मक अभिव्यक्ति'
  },
  {
    house: 7,
    significance: 'Partnership & Marriage',
    significanceHi: 'साझेदारी और विवाह',
    relation: 'Opposition - complementary balance',
    relationHi: 'सप्तम - पूरक संतुलन'
  },
  {
    house: 9,
    significance: 'Fortune & Dharma',
    significanceHi: 'भाग्य और धर्म',
    relation: 'Trine - spiritual and luck support',
    relationHi: 'त्रिकोण - आध्यात्मिक और भाग्य सहायता'
  },
  {
    house: 11,
    significance: 'Gains & Desires',
    significanceHi: 'लाभ और इच्छाएं',
    relation: 'Fulfillment of aspirations',
    relationHi: 'आकांक्षाओं की पूर्ति'
  }
];

// ============================================
// BNN HOUSE CONNECTION GROUPS (R.G. Rao's Methodology)
// Based on "Bhrighu Nandi Nadi" by R.G. Rao
// ============================================

/**
 * 2/12 RESOURCE-LOSS AXIS (Adjacent Houses)
 * R.G. Rao's Pattern: 2-12, 3-1, 4-2, 5-3, 6-4, 7-5, 8-6, 9-7, 10-8, 11-9, 12-10, 1-11
 * 
 * The logic: Each house pair shows a 2/12 relationship where:
 * - House A is 2nd from House B (what House B gains)
 * - House B is 12th from House A (what House A loses/spends for)
 * 
 * Pattern explanation:
 * 2-12: 2 is 2nd from 1, 12 is 12th from 1 (but here 2 is 3rd from 12, so 2-12 means 2 gains from 12's expenditure)
 * Following R.G. Rao's exact sequence from the book
 */
export const ADJACENT_CONNECTION_PAIRS = [
  // R.G. Rao's 2/12 Axis - exact sequence from the book
  { from: 2, to: 12, axis: '2-12', theme: 'Wealth ↔ Loss/Spirituality', themeHi: 'धन ↔ व्यय/आध्यात्मिकता', significance: 'Your wealth (2nd) connects to expenses & liberation (12th). What you earn may go towards spiritual pursuits or foreign lands.', significanceHi: 'आपका धन (2रा) व्यय और मुक्ति (12वें) से जुड़ता है। जो आप कमाते हैं वह आध्यात्मिक खोज या विदेश में जा सकता है।' },
  { from: 3, to: 1, axis: '3-1', theme: 'Courage ↔ Self', themeHi: 'साहस ↔ स्वयं', significance: 'Your courage (3rd) shapes your personality (1st). Self-effort directly builds your identity and physical vitality.', significanceHi: 'आपका साहस (3रा) आपके व्यक्तित्व (1रे) को आकार देता है। स्व-प्रयास सीधे आपकी पहचान बनाता है।' },
  { from: 4, to: 2, axis: '4-2', theme: 'Home ↔ Wealth', themeHi: 'घर ↔ धन', significance: 'Your home & peace (4th) is sustained by your wealth (2nd). Property connects to family resources.', significanceHi: 'आपका घर और शांति (4था) आपके धन (2रे) से कायम है। संपत्ति पारिवारिक संसाधनों से जुड़ी है।' },
  { from: 5, to: 3, axis: '5-3', theme: 'Creativity ↔ Courage', themeHi: 'रचनात्मकता ↔ साहस', significance: 'Your creative talents (5th) are expressed through your courage (3rd). Romance requires bold initiatives.', significanceHi: 'आपकी रचनात्मक प्रतिभा (5वीं) आपके साहस (3रे) से व्यक्त होती है। प्रेम को साहसिक पहल की आवश्यकता है।' },
  { from: 6, to: 4, axis: '6-4', theme: 'Service ↔ Peace', themeHi: 'सेवा ↔ शांति', significance: 'Your daily struggles (6th) affect your mental peace (4th). Overcoming obstacles brings home comfort.', significanceHi: 'आपके दैनिक संघर्ष (6ठा) आपकी मानसिक शांति (4थे) को प्रभावित करते हैं।' },
  { from: 7, to: 5, axis: '7-5', theme: 'Partnership ↔ Romance', themeHi: 'साझेदारी ↔ प्रेम', significance: 'Your marriage (7th) is the fruit of your romance (5th). Business partnerships stem from creative collaborations.', significanceHi: 'आपका विवाह (7वां) आपके प्रेम (5वें) का फल है। व्यापारिक साझेदारी रचनात्मक सहयोग से उत्पन्न होती है।' },
  { from: 8, to: 6, axis: '8-6', theme: 'Transformation ↔ Obstacles', themeHi: 'परिवर्तन ↔ बाधाएं', significance: 'Your deep transformations (8th) arise from your daily battles (6th). Health challenges trigger profound change.', significanceHi: 'आपके गहरे परिवर्तन (8वें) आपकी दैनिक लड़ाइयों (6ठी) से उत्पन्न होते हैं।' },
  { from: 9, to: 7, axis: '9-7', theme: 'Fortune ↔ Partnership', themeHi: 'भाग्य ↔ साझेदारी', significance: 'Your luck (9th) is influenced by your spouse/partners (7th). Marriage brings dharmic growth.', significanceHi: 'आपका भाग्य (9वां) आपके जीवनसाथी/साझेदारों (7वें) से प्रभावित है। विवाह धार्मिक वृद्धि लाता है।' },
  { from: 10, to: 8, axis: '10-8', theme: 'Career ↔ Hidden', themeHi: 'करियर ↔ गुप्त', significance: 'Your profession (10th) connects to hidden research/inheritance (8th). Career success may come through occult knowledge.', significanceHi: 'आपका पेशा (10वां) छिपे अनुसंधान/विरासत (8वें) से जुड़ता है।' },
  { from: 11, to: 9, axis: '11-9', theme: 'Gains ↔ Fortune', themeHi: 'लाभ ↔ भाग्य', significance: 'Your gains (11th) are directly linked to your fortune (9th). Luck multiplies your income and fulfills desires.', significanceHi: 'आपके लाभ (11वें) सीधे आपके भाग्य (9वें) से जुड़े हैं। भाग्य आपकी आय को गुणा करता है।' },
  { from: 12, to: 10, axis: '12-10', theme: 'Liberation ↔ Career', themeHi: 'मुक्ति ↔ करियर', significance: 'Your spiritual liberation (12th) may require sacrificing career ambitions (10th). Foreign settlement affects status.', significanceHi: 'आपकी आध्यात्मिक मुक्ति (12वीं) के लिए करियर की महत्वाकांक्षाओं (10वीं) का त्याग आवश्यक हो सकता है।' },
  { from: 1, to: 11, axis: '1-11', theme: 'Self ↔ Gains', themeHi: 'स्वयं ↔ लाभ', significance: 'Your personality (1st) attracts your gains (11th). Strong self leads to fulfilled desires and elder sibling support.', significanceHi: 'आपका व्यक्तित्व (1ला) आपके लाभ (11वें) को आकर्षित करता है।' }
];

// 1/7 Opposition Connections - Self-Other Axis (Polar Completion)
// These show 7th house relationships (50% mutual influence)
export const OPPOSITION_CONNECTION_PAIRS = [
  { from: 1, to: 7, axis: '1-7', theme: 'Self ↔ Partner', themeHi: 'स्वयं ↔ साथी', significance: 'Your personality (1st) is balanced by your spouse/partner (7th). Marriage completes your identity.', significanceHi: 'आपका व्यक्तित्व (1ला) आपके जीवनसाथी (7वें) द्वारा संतुलित है। विवाह आपकी पहचान को पूर्ण करता है।', dakm: 'Kama' },
  { from: 2, to: 8, axis: '2-8', theme: 'Wealth ↔ Inheritance', themeHi: 'धन ↔ विरासत', significance: 'Your earned wealth (2nd) vs inherited/hidden wealth (8th). Family money meets spouse\'s resources.', significanceHi: 'आपका अर्जित धन (2रा) बनाम विरासत/छिपा धन (8वां)। पारिवारिक धन पति/पत्नी के संसाधनों से मिलता है।', dakm: 'Artha' },
  { from: 3, to: 9, axis: '3-9', theme: 'Courage ↔ Fortune', themeHi: 'साहस ↔ भाग्य', significance: 'Your self-effort (3rd) is complemented by divine grace (9th). Personal will meets destiny.', significanceHi: 'आपका स्व-प्रयास (3रा) दैवीय कृपा (9वें) द्वारा पूरक है। व्यक्तिगत इच्छा भाग्य से मिलती है।', dakm: 'Dharma' },
  { from: 4, to: 10, axis: '4-10', theme: 'Home ↔ Career', themeHi: 'घर ↔ करियर', significance: 'Your private life (4th) is balanced by public duties (10th). Mother vs father axis, home vs office.', significanceHi: 'आपका निजी जीवन (4था) सार्वजनिक कर्तव्यों (10वें) से संतुलित है। माता बनाम पिता, घर बनाम कार्यालय।', dakm: 'Moksha' },
  { from: 5, to: 11, axis: '5-11', theme: 'Creation ↔ Gains', themeHi: 'सृजन ↔ लाभ', significance: 'Your creativity & children (5th) connect to your gains & networks (11th). Romance leads to fulfilled desires.', significanceHi: 'आपकी रचनात्मकता और संतान (5वीं) आपके लाभ और नेटवर्क (11वें) से जुड़ती है।', dakm: 'Kama' },
  { from: 6, to: 12, axis: '6-12', theme: 'Service ↔ Surrender', themeHi: 'सेवा ↔ समर्पण', significance: 'Your daily struggles (6th) lead to spiritual surrender (12th). Health issues may require hospitalization or retreat.', significanceHi: 'आपके दैनिक संघर्ष (6ठे) आध्यात्मिक समर्पण (12वें) की ओर ले जाते हैं।', dakm: 'Moksha' }
];

/**
 * 3/11 GROWTH-GAINS AXIS (Upachaya Houses)
 * R.G. Rao's Pattern: Based on 3rd and 11th house relationships
 * Each house is analyzed for its 3rd and 11th connections
 * 
 * The 3rd house from any bhava = courage/effort for that area
 * The 11th house from any bhava = gains/fulfillment from that area
 * 
 * Following the same circular pattern as 2/12:
 * If we start from house 3, its 11th is house 1 (3+11-1=13, 13-12=1) → 3-1
 * House 4's 11th is house 2 → 4-2
 * And so on...
 */
export const UPACHAYA_CONNECTION_PAIRS = [
  // R.G. Rao's 3/11 Axis - Effort to Gains pattern
  { from: 3, to: 1, axis: '3-1', theme: 'Courage → Self-Identity', themeHi: 'साहस → आत्म-पहचान', significance: 'Your efforts (3rd) directly strengthen your personality (1st). Siblings support your growth.', significanceHi: 'आपके प्रयास (3रे) सीधे आपके व्यक्तित्व (1ले) को मजबूत करते हैं।' },
  { from: 4, to: 2, axis: '4-2', theme: 'Peace → Wealth', themeHi: 'शांति → धन', significance: 'Your emotional stability (4th) helps accumulate wealth (2nd). Property generates family income.', significanceHi: 'आपकी भावनात्मक स्थिरता (4थी) धन (2रे) संचय में मदद करती है।' },
  { from: 5, to: 3, axis: '5-3', theme: 'Creativity → Courage', themeHi: 'रचनात्मकता → साहस', significance: 'Your creative intelligence (5th) fuels your courage (3rd). Children inspire bold action.', significanceHi: 'आपकी रचनात्मक बुद्धि (5वीं) आपके साहस (3रे) को बढ़ावा देती है।' },
  { from: 6, to: 4, axis: '6-4', theme: 'Service → Peace', themeHi: 'सेवा → शांति', significance: 'Overcoming enemies (6th) brings inner peace (4th). Daily routine affects home life.', significanceHi: 'शत्रुओं पर विजय (6ठी) आंतरिक शांति (4थी) लाती है।' },
  { from: 7, to: 5, axis: '7-5', theme: 'Partnership → Romance', themeHi: 'साझेदारी → प्रेम', significance: 'Your spouse (7th) enhances your creative joy (5th). Business success brings speculative gains.', significanceHi: 'आपका जीवनसाथी (7वां) आपकी रचनात्मक खुशी (5वीं) को बढ़ाता है।' },
  { from: 8, to: 6, axis: '8-6', theme: 'Transformation → Service', themeHi: 'परिवर्तन → सेवा', significance: 'Deep research (8th) improves your problem-solving (6th). Inheritance helps clear debts.', significanceHi: 'गहन अनुसंधान (8वां) आपकी समस्या-समाधान (6ठी) में सुधार करता है।' },
  { from: 9, to: 7, axis: '9-7', theme: 'Fortune → Partnership', themeHi: 'भाग्य → साझेदारी', significance: 'Your guru/father (9th) blesses your marriage (7th). Dharma strengthens partnerships.', significanceHi: 'आपके गुरु/पिता (9वें) आपके विवाह (7वें) को आशीर्वाद देते हैं।' },
  { from: 10, to: 8, axis: '10-8', theme: 'Career → Hidden Knowledge', themeHi: 'करियर → गुप्त ज्ञान', significance: 'Your profession (10th) benefits from research & occult (8th). Status comes through transformation.', significanceHi: 'आपका पेशा (10वां) अनुसंधान और गुप्त (8वें) से लाभान्वित होता है।' },
  { from: 11, to: 9, axis: '11-9', theme: 'Gains → Fortune', themeHi: 'लाभ → भाग्य', significance: 'Your gains (11th) multiply through luck & blessings (9th). Network supports spiritual growth.', significanceHi: 'आपके लाभ (11वें) भाग्य और आशीर्वाद (9वें) से गुणा होते हैं।' },
  { from: 12, to: 10, axis: '12-10', theme: 'Liberation → Status', themeHi: 'मुक्ति → प्रतिष्ठा', significance: 'Your spiritual pursuits (12th) may affect career status (10th). Foreign lands offer recognition.', significanceHi: 'आपकी आध्यात्मिक खोज (12वीं) करियर स्थिति (10वीं) को प्रभावित कर सकती है।' },
  { from: 1, to: 11, axis: '1-11', theme: 'Self → Fulfillment', themeHi: 'स्वयं → पूर्ति', significance: 'Your self-initiative (1st) leads to wish fulfillment (11th). Personality attracts gains.', significanceHi: 'आपकी स्व-पहल (1ली) इच्छा पूर्ति (11वीं) की ओर ले जाती है।' },
  { from: 2, to: 12, axis: '2-12', theme: 'Wealth → Expenses', themeHi: 'धन → व्यय', significance: 'Your resources (2nd) flow towards spiritual expenses (12th). Wealth enables liberation.', significanceHi: 'आपके संसाधन (2रे) आध्यात्मिक व्यय (12वें) की ओर प्रवाहित होते हैं।' }
];

// R.G. Rao's Connection Theory Citations
export const RAO_CONNECTION_THEORY = {
  adjacent: {
    principle: {
      en: "According to R.G. Rao's 'Bhrighu Nandi Nadi', the 2/12 axis reveals the resource-expenditure dynamic. Following the pattern 2-12, 3-1, 4-2, 5-3, 6-4, 7-5, 8-6, 9-7, 10-8, 11-9, 12-10, 1-11 - each pair shows how one house's significations become the resource or loss for another. When planets occupy both houses, there is strong karmic exchange.",
      hi: "आर.जी. राव की 'भृगु नंदी नाड़ी' के अनुसार, 2/12 अक्ष संसाधन-व्यय गतिशीलता को प्रकट करता है। 2-12, 3-1, 4-2, 5-3, 6-4, 7-5, 8-6, 9-7, 10-8, 11-9, 12-10, 1-11 पैटर्न का पालन करते हुए - प्रत्येक जोड़ी दिखाती है कि एक भाव के संकेत दूसरे के लिए संसाधन या हानि कैसे बनते हैं।"
    },
    citation: "Bhrighu Nandi Nadi, R.G. Rao - Chapter 5: 2/12 Resource-Loss Axis"
  },
  opposition: {
    principle: {
      en: "R.G. Rao emphasizes that the 1/7 axis (Self-Other) represents polar completion. The 1-7, 2-8, 3-9, 4-10, 5-11, 6-12 pairs create 50% mutual influence, demanding balance. When planets occupy opposite houses, life requires integration of seemingly contradictory themes.",
      hi: "आर.जी. राव इस बात पर जोर देते हैं कि 1/7 अक्ष (स्वयं-अन्य) ध्रुवीय पूर्णता का प्रतिनिधित्व करता है। 1-7, 2-8, 3-9, 4-10, 5-11, 6-12 जोड़े 50% पारस्परिक प्रभाव बनाते हैं, संतुलन की मांग करते हैं।"
    },
    citation: "Bhrighu Nandi Nadi, R.G. Rao - Chapter 6: Saptama Bhava (1/7) Opposition Axis"
  },
  upachaya: {
    principle: {
      en: "In R.G. Rao's BNN methodology, the 3/11 axis represents karma-phala (action-result). Following the pattern 3-1, 4-2, 5-3, 6-4, 7-5, 8-6, 9-7, 10-8, 11-9, 12-10, 1-11, 2-12 - the 3rd house shows courage/effort while the 11th shows gains. These 'Upachaya' houses improve with time. When both are activated, efforts directly manifest as achievements.",
      hi: "आर.जी. राव की BNN पद्धति में, 3/11 अक्ष कर्म-फल का प्रतिनिधित्व करता है। 3-1, 4-2, 5-3, 6-4, 7-5, 8-6, 9-7, 10-8, 11-9, 12-10, 1-11, 2-12 पैटर्न का पालन करते हुए - 3रा भाव साहस/प्रयास दिखाता है जबकि 11वां लाभ दिखाता है। ये 'उपचय' भाव समय के साथ बेहतर होते हैं।"
    },
    citation: "Bhrighu Nandi Nadi, R.G. Rao - Chapter 7: 3/11 Upachaya Growth-Gains Axis"
  }
};

// House pair analysis interface
export interface HousePairAnalysis {
  axis: string;
  house1: number;
  house2: number;
  planetsInHouse1: PlanetPosition[];
  planetsInHouse2: PlanetPosition[];
  isActive: boolean;
  strength: number;
  theme: string;
  themeHi: string;
  significance: string;
  significanceHi: string;
  dashaActivation?: string;
  dakm?: string;
}

// Analyze connections for a given pair type
export const analyzeConnectionPairs = (
  report: KundaliReport,
  pairType: 'adjacent' | 'opposition' | 'upachaya'
): HousePairAnalysis[] => {
  const pairs = pairType === 'adjacent' ? ADJACENT_CONNECTION_PAIRS :
                pairType === 'opposition' ? OPPOSITION_CONNECTION_PAIRS :
                UPACHAYA_CONNECTION_PAIRS;
  
  return pairs.map(pair => {
    const planetsInHouse1 = report.planets.filter(p => p.house === pair.from);
    const planetsInHouse2 = report.planets.filter(p => p.house === pair.to);
    
    const bothOccupied = planetsInHouse1.length > 0 && planetsInHouse2.length > 0;
    const eitherOccupied = planetsInHouse1.length > 0 || planetsInHouse2.length > 0;
    
    // Calculate strength based on BNN rules
    let strength = 0;
    if (bothOccupied) {
      // Both houses occupied - strong connection
      strength = pairType === 'opposition' ? 50 : pairType === 'adjacent' ? 70 : 40;
      // Add bonus for multiple planets
      strength += Math.min((planetsInHouse1.length + planetsInHouse2.length - 2) * 10, 30);
    } else if (eitherOccupied) {
      strength = 25;
    }
    
    // Determine dasha activation based on planets
    let dashaActivation = '';
    const allPlanets = [...planetsInHouse1, ...planetsInHouse2];
    if (allPlanets.length > 0) {
      const primaryPlanet = allPlanets[0];
      dashaActivation = `${primaryPlanet.name} Dasha/Antardasha`;
    }
    
    return {
      axis: pair.axis,
      house1: pair.from,
      house2: pair.to,
      planetsInHouse1,
      planetsInHouse2,
      isActive: bothOccupied,
      strength: Math.min(strength, 100),
      theme: pair.theme,
      themeHi: pair.themeHi,
      significance: pair.significance,
      significanceHi: pair.significanceHi,
      dashaActivation,
      dakm: (pair as any).dakm
    };
  });
};

// Get connection summary score
export const getConnectionSummary = (
  analyses: HousePairAnalysis[]
): { score: number; activeCount: number; totalCount: number } => {
  const activeCount = analyses.filter(a => a.isActive).length;
  const totalStrength = analyses.reduce((sum, a) => sum + a.strength, 0);
  const maxPossible = analyses.length * 100;
  const score = Math.round((totalStrength / maxPossible) * 100);
  
  return { score, activeCount, totalCount: analyses.length };
};

// Get DAKM impact from connections
export const getDakmImpactFromConnections = (
  analyses: HousePairAnalysis[]
): Record<string, number> => {
  const impact: Record<string, number> = {
    Dharma: 0,
    Artha: 0,
    Kama: 0,
    Moksha: 0
  };
  
  // Map houses to DAKM
  const houseDakm: Record<number, string> = {
    1: 'Dharma', 5: 'Dharma', 9: 'Dharma',
    2: 'Artha', 6: 'Artha', 10: 'Artha',
    3: 'Kama', 7: 'Kama', 11: 'Kama',
    4: 'Moksha', 8: 'Moksha', 12: 'Moksha'
  };
  
  analyses.forEach(analysis => {
    if (analysis.isActive) {
      const dakm1 = houseDakm[analysis.house1];
      const dakm2 = houseDakm[analysis.house2];
      if (dakm1) impact[dakm1] += analysis.strength / 2;
      if (dakm2) impact[dakm2] += analysis.strength / 2;
    }
  });
  
  // Normalize to 0-100
  const maxImpact = Math.max(...Object.values(impact), 1);
  Object.keys(impact).forEach(key => {
    impact[key] = Math.round((impact[key] / maxImpact) * 100);
  });
  
  return impact;
};
