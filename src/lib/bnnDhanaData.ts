// BNN Dhana (Wealth) Astrology Data Library
// This data is proprietary research material and should be kept private.

import { GrahaName } from '@/types/astrology';

// ============= COMPREHENSIVE DHANA YOGAS =============
export interface DhanaYogaExtended {
  name: string;
  nameHi: string;
  planets: GrahaName[];
  conditions: string;
  conditionsHi: string;
  effects: string[];
  effectsHi: string[];
  type: 'extreme_wealth' | 'good_wealth' | 'moderate' | 'poverty' | 'property' | 'sudden' | 'inheritance';
  intensity: 'very_high' | 'high' | 'medium' | 'low';
  remedies?: string[];
  remediesHi?: string[];
}

export const DHANA_YOGAS_EXTENDED: DhanaYogaExtended[] = [
  // Extreme Wealth Yogas
  {
    name: 'Multi-Millionaire Yoga',
    nameHi: 'करोड़पति योग',
    planets: ['Venus', 'Mercury'],
    conditions: 'Venus conjoined with Mercury in any house (100% connection)',
    conditionsHi: 'शुक्र बुध के साथ किसी भी भाव में युक्त (100% संयोग)',
    effects: [
      'Well furnished luxury independent houses with spacious halls',
      'Commercial complex ownership',
      'Landed properties in multiple locations',
      'High-end vehicles (Range Rover, Jaguar, Audi, Tesla)',
      'Duplex houses with modern amenities'
    ],
    effectsHi: [
      'विशाल हॉल के साथ सुसज्जित विलासी स्वतंत्र घर',
      'कमर्शियल कॉम्प्लेक्स स्वामित्व',
      'कई स्थानों पर भूमि संपत्ति',
      'हाई-एंड वाहन (रेंज रोवर, जगुआर, ऑडी, टेस्ला)',
      'आधुनिक सुविधाओं के साथ डुप्लेक्स घर'
    ],
    type: 'extreme_wealth',
    intensity: 'very_high'
  },
  {
    name: 'Bhahu Dravya Yoga / Nagmani Yoga',
    nameHi: 'बहु द्रव्य योग / नागमणि योग',
    planets: ['Venus', 'Rahu'],
    conditions: 'Venus conjoined with Rahu (especially powerful when Rahu degrees are higher than Venus)',
    conditionsHi: 'शुक्र राहु के साथ युक्त (विशेष रूप से शक्तिशाली जब राहु की डिग्री शुक्र से अधिक हो)',
    effects: [
      'Big Apartments or Duplex houses',
      'Multi-storied Building ownership',
      'More than two houses in lifetime',
      'Property registered in wife\'s name',
      'Multiple vehicles including buses, trucks',
      'Multi-millionaire status',
      'Secret love affairs possible',
      'Wealth through unconventional means'
    ],
    effectsHi: [
      'बड़े अपार्टमेंट या डुप्लेक्स घर',
      'बहुमंजिला इमारत स्वामित्व',
      'जीवनकाल में दो से अधिक घर',
      'पत्नी के नाम पर संपत्ति पंजीकृत',
      'बसों, ट्रकों सहित कई वाहन',
      'करोड़पति स्थिति',
      'गुप्त प्रेम संबंध संभव',
      'अपरंपरागत माध्यमों से धन'
    ],
    type: 'extreme_wealth',
    intensity: 'very_high'
  },
  {
    name: 'Padma Yoga (Royal House)',
    nameHi: 'पद्म योग (शाही घर)',
    planets: ['Venus', 'Mercury', 'Moon', 'Ketu'],
    conditions: 'Venus + Mercury + Moon + Ketu in watery signs (Cancer, Scorpio, Pisces) - North direction preferred',
    conditionsHi: 'शुक्र + बुध + चंद्र + केतु जलीय राशियों में (कर्क, वृश्चिक, मीन) - उत्तर दिशा वरीय',
    effects: [
      'House of royalty and extreme luxury',
      'Padma (lotus) symbol visible on palm',
      'Extreme wealth and comfort',
      'Living like royalty',
      'Spiritual wealth along with material'
    ],
    effectsHi: [
      'राजसी और अत्यंत विलासिता का घर',
      'हथेली पर पद्म (कमल) चिन्ह दिखाई देता है',
      'अत्यंत धन और आराम',
      'राजसी जीवन',
      'भौतिक के साथ आध्यात्मिक संपदा'
    ],
    type: 'extreme_wealth',
    intensity: 'very_high'
  },
  
  // Good Wealth Yogas
  {
    name: 'Lakshmi Yoga',
    nameHi: 'लक्ष्मी योग',
    planets: ['Venus', 'Jupiter'],
    conditions: 'Venus and Jupiter connected (conjunction, trine, or aspect)',
    conditionsHi: 'शुक्र और गुरु संयुक्त (युति, त्रिकोण, या दृष्टि)',
    effects: [
      'Continuous flow of wealth',
      'Bank balance always maintained',
      'Good fortune in finance',
      'Prosperity in family',
      'Comfortable living standards'
    ],
    effectsHi: [
      'धन का निरंतर प्रवाह',
      'बैंक बैलेंस हमेशा बना रहता है',
      'वित्त में सौभाग्य',
      'परिवार में समृद्धि',
      'आरामदायक जीवन स्तर'
    ],
    type: 'good_wealth',
    intensity: 'high'
  },
  {
    name: 'Gaja Kesari Wealth Yoga',
    nameHi: 'गजकेसरी धन योग',
    planets: ['Moon', 'Jupiter'],
    conditions: 'Moon and Jupiter in kendra (1,4,7,10) from each other',
    conditionsHi: 'चंद्र और गुरु एक दूसरे से केंद्र (1,4,7,10) में',
    effects: [
      'Wealth increases with age',
      'Fame and recognition',
      'Charitable disposition with wealth',
      'Wisdom to manage finances'
    ],
    effectsHi: [
      'उम्र के साथ धन बढ़ता है',
      'प्रसिद्धि और पहचान',
      'धन के साथ दानशील स्वभाव',
      'वित्त प्रबंधन की बुद्धि'
    ],
    type: 'good_wealth',
    intensity: 'high'
  },
  {
    name: 'Chandra Mangal Yoga',
    nameHi: 'चंद्र मंगल योग',
    planets: ['Moon', 'Mars'],
    conditions: 'Moon and Mars conjunction or mutual aspect',
    conditionsHi: 'चंद्र और मंगल युति या पारस्परिक दृष्टि',
    effects: [
      'Wealth through property and land',
      'Real estate success',
      'Vehicles ownership',
      'Maternal inheritance likely',
      'Dynamic earning capability'
    ],
    effectsHi: [
      'संपत्ति और भूमि से धन',
      'रियल एस्टेट में सफलता',
      'वाहन स्वामित्व',
      'मातृ विरासत की संभावना',
      'गतिशील कमाई क्षमता'
    ],
    type: 'property',
    intensity: 'high'
  },
  
  // Property Yogas
  {
    name: 'Property Yoga (Mars-Venus)',
    nameHi: 'संपत्ति योग (मंगल-शुक्र)',
    planets: ['Mars', 'Venus'],
    conditions: 'Mars and Venus connected - especially in 4th house',
    conditionsHi: 'मंगल और शुक्र संयुक्त - विशेषकर 4थे भाव में',
    effects: [
      'Own house early in life',
      'Luxurious property',
      'Property from spouse',
      'Multiple properties',
      'Wealth after marriage'
    ],
    effectsHi: [
      'जीवन में जल्दी अपना घर',
      'विलासी संपत्ति',
      'जीवनसाथी से संपत्ति',
      'कई संपत्तियां',
      'विवाह के बाद धन'
    ],
    type: 'property',
    intensity: 'high'
  },
  {
    name: 'Land & Agriculture Yoga',
    nameHi: 'भूमि और कृषि योग',
    planets: ['Mars', 'Saturn'],
    conditions: 'Mars and Saturn connected with 4th house',
    conditionsHi: 'मंगल और शनि 4थे भाव से संयुक्त',
    effects: [
      'Agricultural land ownership',
      'Ancestral property benefits',
      'Real estate from struggle',
      'Property after delays'
    ],
    effectsHi: [
      'कृषि भूमि स्वामित्व',
      'पैतृक संपत्ति लाभ',
      'संघर्ष से रियल एस्टेट',
      'देरी के बाद संपत्ति'
    ],
    type: 'property',
    intensity: 'medium'
  },
  
  // Sudden Wealth Yogas
  {
    name: 'Lottery & Speculation Yoga',
    nameHi: 'लॉटरी और सट्टा योग',
    planets: ['Rahu', 'Jupiter'],
    conditions: 'Rahu and Jupiter connected with 5th, 8th, or 11th house',
    conditionsHi: 'राहु और गुरु 5वें, 8वें, या 11वें भाव से संयुक्त',
    effects: [
      'Sudden gains from speculation',
      'Lottery wins possible',
      'Stock market gains',
      'Unexpected inheritance',
      'Windfall gains'
    ],
    effectsHi: [
      'सट्टे से अचानक लाभ',
      'लॉटरी जीत संभव',
      'शेयर बाजार लाभ',
      'अप्रत्याशित विरासत',
      'अचानक लाभ'
    ],
    type: 'sudden',
    intensity: 'medium'
  },
  {
    name: 'Hidden Treasure Yoga',
    nameHi: 'गुप्त खजाना योग',
    planets: ['Mercury', 'Jupiter'],
    conditions: 'Mercury and Jupiter connected - Jeeva studies whole life',
    conditionsHi: 'बुध और गुरु संयुक्त - जीव जीवनभर पढ़ाई करता है',
    effects: [
      'Hidden wealth discoveries',
      'Knowledge leads to wealth',
      'Intellectual property gains',
      'Wealth from teaching/writing'
    ],
    effectsHi: [
      'छिपी संपत्ति की खोज',
      'ज्ञान से धन प्राप्ति',
      'बौद्धिक संपदा लाभ',
      'शिक्षण/लेखन से धन'
    ],
    type: 'good_wealth',
    intensity: 'medium'
  },
  
  // Inheritance Yogas
  {
    name: 'Paternal Inheritance Yoga',
    nameHi: 'पैतृक विरासत योग',
    planets: ['Sun', 'Jupiter'],
    conditions: 'Sun and Jupiter connected, especially in 2nd, 4th, or 9th house',
    conditionsHi: 'सूर्य और गुरु संयुक्त, विशेषकर 2रे, 4थे, या 9वें भाव में',
    effects: [
      'Inheritance from father',
      'Family wealth continuation',
      'Ancestral property benefits',
      'Government related gains'
    ],
    effectsHi: [
      'पिता से विरासत',
      'पारिवारिक संपत्ति निरंतरता',
      'पैतृक संपत्ति लाभ',
      'सरकार संबंधित लाभ'
    ],
    type: 'inheritance',
    intensity: 'high'
  },
  {
    name: 'Maternal Inheritance Yoga',
    nameHi: 'मातृ विरासत योग',
    planets: ['Moon', 'Venus'],
    conditions: 'Moon and Venus connected, especially in 4th house',
    conditionsHi: 'चंद्र और शुक्र संयुक्त, विशेषकर 4थे भाव में',
    effects: [
      'Inheritance from mother',
      'Property from maternal side',
      'Emotional support with wealth',
      'Comfortable home environment'
    ],
    effectsHi: [
      'माता से विरासत',
      'मातृ पक्ष से संपत्ति',
      'धन के साथ भावनात्मक समर्थन',
      'आरामदायक घर वातावरण'
    ],
    type: 'inheritance',
    intensity: 'medium'
  },
  
  // Poverty/Loss Yogas
  {
    name: 'Daridra Yoga (Poverty)',
    nameHi: 'दरिद्र योग',
    planets: ['Jupiter', 'Venus', 'Saturn', 'Mercury', 'Ketu'],
    conditions: 'Key money planets (Jupiter, Venus, Mercury) afflicted by Ketu - especially all connected',
    conditionsHi: 'प्रमुख धन ग्रह (गुरु, शुक्र, बुध) केतु से पीड़ित - विशेषकर सभी संयुक्त',
    effects: [
      'Financial losses and setbacks',
      'Unemployment issues',
      'Daily income problems',
      'Difficulty in savings',
      'Debts accumulation'
    ],
    effectsHi: [
      'आर्थिक नुकसान और झटके',
      'बेरोजगारी समस्याएं',
      'दैनिक आय समस्याएं',
      'बचत में कठिनाई',
      'कर्ज जमा होना'
    ],
    type: 'poverty',
    intensity: 'high',
    remedies: [
      'Feed crows daily',
      'Donate blankets to poor',
      'Worship Goddess Lakshmi on Friday',
      'Keep yellow cloth in wallet',
      'Chant Kubera mantra'
    ],
    remediesHi: [
      'प्रतिदिन कौवों को खिलाएं',
      'गरीबों को कंबल दान करें',
      'शुक्रवार को लक्ष्मी देवी की पूजा करें',
      'बटुए में पीला कपड़ा रखें',
      'कुबेर मंत्र जाप करें'
    ]
  },
  {
    name: 'Kemadruma Yoga (Isolation Poverty)',
    nameHi: 'केमाद्रुम योग',
    planets: ['Moon'],
    conditions: 'Moon alone in house with no planets in 2nd and 12th from Moon',
    conditionsHi: 'चंद्रमा अकेला भाव में, चंद्र से 2रे और 12वें में कोई ग्रह नहीं',
    effects: [
      'Financial hardships',
      'Lack of support',
      'Emotional and material poverty',
      'Difficulty in accumulating wealth'
    ],
    effectsHi: [
      'आर्थिक कठिनाइयां',
      'समर्थन की कमी',
      'भावनात्मक और भौतिक गरीबी',
      'धन संचय में कठिनाई'
    ],
    type: 'poverty',
    intensity: 'medium',
    remedies: [
      'Worship Lord Shiva on Monday',
      'Wear Pearl after consultation',
      'Drink water in silver glass',
      'Help your mother'
    ],
    remediesHi: [
      'सोमवार को शिव जी की पूजा',
      'परामर्श के बाद मोती धारण करें',
      'चांदी के गिलास में पानी पिएं',
      'अपनी माता की मदद करें'
    ]
  },
  {
    name: 'Shakat Yoga (Fluctuating Fortune)',
    nameHi: 'शकट योग',
    planets: ['Moon', 'Jupiter'],
    conditions: 'Moon in 6th, 8th, or 12th from Jupiter',
    conditionsHi: 'गुरु से 6वें, 8वें, या 12वें में चंद्रमा',
    effects: [
      'Ups and downs in finances',
      'Wealth comes and goes',
      'Unstable income',
      'Financial struggles despite intelligence'
    ],
    effectsHi: [
      'वित्त में उतार-चढ़ाव',
      'धन आता-जाता रहता है',
      'अस्थिर आय',
      'बुद्धि के बावजूद आर्थिक संघर्ष'
    ],
    type: 'poverty',
    intensity: 'medium',
    remedies: [
      'Worship both Moon and Jupiter',
      'Offer water to Peepal tree',
      'Donate yellow items on Thursday',
      'Feed Brahmins on Poornima'
    ],
    remediesHi: [
      'चंद्र और गुरु दोनों की पूजा करें',
      'पीपल के पेड़ को जल चढ़ाएं',
      'गुरुवार को पीली वस्तुएं दान करें',
      'पूर्णिमा पर ब्राह्मणों को भोजन करायें'
    ]
  },
  
  // Moderate Wealth Yogas
  {
    name: 'Dhan Yoga (2nd-11th Lords)',
    nameHi: 'धन योग',
    planets: ['Venus', 'Saturn'],
    conditions: '2nd house lord and 11th house lord connected',
    conditionsHi: '2रे भाव का स्वामी और 11वें भाव का स्वामी संयुक्त',
    effects: [
      'Steady wealth accumulation',
      'Income from profession',
      'Savings capability',
      'Moderate prosperity'
    ],
    effectsHi: [
      'स्थिर धन संचय',
      'पेशे से आय',
      'बचत क्षमता',
      'मध्यम समृद्धि'
    ],
    type: 'moderate',
    intensity: 'medium'
  },
  {
    name: 'Business Success Yoga',
    nameHi: 'व्यापार सफलता योग',
    planets: ['Mercury', 'Saturn'],
    conditions: 'Mercury and Saturn connected in good houses',
    conditionsHi: 'बुध और शनि अच्छे भावों में संयुक्त',
    effects: [
      'Business success through patience',
      'Long-term financial gains',
      'Structured wealth building',
      'Success after 30'
    ],
    effectsHi: [
      'धैर्य से व्यापार सफलता',
      'दीर्घकालिक आर्थिक लाभ',
      'संरचित धन निर्माण',
      '30 के बाद सफलता'
    ],
    type: 'moderate',
    intensity: 'medium'
  },
  
  // Foreign Wealth Yogas
  {
    name: 'Foreign Wealth Yoga',
    nameHi: 'विदेशी धन योग',
    planets: ['Rahu', 'Venus'],
    conditions: 'Rahu with Venus or 2nd/11th lords',
    conditionsHi: 'राहु शुक्र या 2रे/11वें भाव के स्वामियों के साथ',
    effects: [
      'Wealth from foreign sources',
      'International business success',
      'Foreign currency earnings',
      'MNC career growth'
    ],
    effectsHi: [
      'विदेशी स्रोतों से धन',
      'अंतर्राष्ट्रीय व्यापार सफलता',
      'विदेशी मुद्रा आय',
      'MNC करियर वृद्धि'
    ],
    type: 'good_wealth',
    intensity: 'high'
  }
];

// ============= WEALTH HOUSES ANALYSIS =============
export interface WealthHouseSignificance {
  house: number;
  significance: string;
  significanceHi: string;
  bestPlanets: GrahaName[];
  worstPlanets: GrahaName[];
}

export const WEALTH_HOUSES: WealthHouseSignificance[] = [
  { house: 1, significance: 'Self-earned wealth, personality attracts money', significanceHi: 'स्व-अर्जित धन, व्यक्तित्व धन आकर्षित करता है', bestPlanets: ['Venus', 'Jupiter'], worstPlanets: ['Saturn', 'Rahu'] },
  { house: 2, significance: 'Primary wealth house, family wealth, bank balance', significanceHi: 'प्राथमिक धन भाव, पारिवारिक संपत्ति, बैंक बैलेंस', bestPlanets: ['Jupiter', 'Venus', 'Mercury'], worstPlanets: ['Rahu', 'Ketu'] },
  { house: 4, significance: 'Property, vehicles, mother\'s wealth, real estate', significanceHi: 'संपत्ति, वाहन, माता की संपत्ति, रियल एस्टेट', bestPlanets: ['Venus', 'Moon', 'Jupiter'], worstPlanets: ['Mars', 'Rahu'] },
  { house: 5, significance: 'Speculation, lottery, investments, creative income', significanceHi: 'सट्टा, लॉटरी, निवेश, रचनात्मक आय', bestPlanets: ['Jupiter', 'Venus'], worstPlanets: ['Saturn', 'Rahu'] },
  { house: 7, significance: 'Business partnerships, spouse wealth', significanceHi: 'व्यापार साझेदारी, जीवनसाथी का धन', bestPlanets: ['Venus', 'Jupiter'], worstPlanets: ['Mars', 'Rahu'] },
  { house: 9, significance: 'Fortune, father\'s wealth, luck factor', significanceHi: 'भाग्य, पिता की संपत्ति, भाग्य कारक', bestPlanets: ['Jupiter', 'Sun'], worstPlanets: ['Rahu', 'Saturn'] },
  { house: 10, significance: 'Career income, profession gains', significanceHi: 'करियर आय, पेशे से लाभ', bestPlanets: ['Saturn', 'Sun', 'Mercury'], worstPlanets: ['Rahu', 'Ketu'] },
  { house: 11, significance: 'Gains house, income, fulfillment of desires', significanceHi: 'लाभ भाव, आय, इच्छाओं की पूर्ति', bestPlanets: ['Jupiter', 'Venus', 'Mercury'], worstPlanets: ['Ketu'] }
];

// ============= WEALTH REMEDIES =============
export interface WealthRemedy {
  category: 'general' | 'planet_specific' | 'house_specific';
  title: string;
  titleHi: string;
  remedy: string;
  remedyHi: string;
  bestDay?: string;
  bestDayHi?: string;
}

export const WEALTH_REMEDIES: WealthRemedy[] = [
  { category: 'general', title: 'Lakshmi Puja', titleHi: 'लक्ष्मी पूजा', remedy: 'Worship Goddess Lakshmi every Friday with white flowers', remedyHi: 'हर शुक्रवार सफेद फूलों से लक्ष्मी देवी की पूजा करें', bestDay: 'Friday', bestDayHi: 'शुक्रवार' },
  { category: 'general', title: 'Kubera Worship', titleHi: 'कुबेर पूजा', remedy: 'Chant Kubera mantra 108 times daily for wealth', remedyHi: 'धन के लिए प्रतिदिन 108 बार कुबेर मंत्र जाप करें', bestDay: 'Thursday', bestDayHi: 'गुरुवार' },
  { category: 'general', title: 'Yellow Items', titleHi: 'पीली वस्तुएं', remedy: 'Keep yellow cloth in wallet, donate yellow items on Thursday', remedyHi: 'बटुए में पीला कपड़ा रखें, गुरुवार को पीली वस्तुएं दान करें', bestDay: 'Thursday', bestDayHi: 'गुरुवार' },
  { category: 'general', title: 'Feed Birds', titleHi: 'पक्षियों को खिलाएं', remedy: 'Feed green moong dal to birds daily for Mercury strength', remedyHi: 'बुध की शक्ति के लिए प्रतिदिन पक्षियों को हरी मूंग दाल खिलाएं', bestDay: 'Wednesday', bestDayHi: 'बुधवार' },
  { category: 'planet_specific', title: 'Venus Strength', titleHi: 'शुक्र शक्ति', remedy: 'Donate white clothes to women, offer rice kheer to cow', remedyHi: 'महिलाओं को सफेद कपड़े दान करें, गाय को चावल की खीर खिलाएं', bestDay: 'Friday', bestDayHi: 'शुक्रवार' },
  { category: 'planet_specific', title: 'Jupiter Strength', titleHi: 'गुरु शक्ति', remedy: 'Offer water to Peepal tree, donate chana dal to temple', remedyHi: 'पीपल को जल चढ़ाएं, मंदिर में चना दाल दान करें', bestDay: 'Thursday', bestDayHi: 'गुरुवार' },
  { category: 'house_specific', title: '2nd House Remedy', titleHi: '2रे भाव का उपाय', remedy: 'Never keep empty wallet, keep 21 rupees in wallet always', remedyHi: 'खाली बटुआ न रखें, बटुए में हमेशा 21 रुपये रखें' },
  { category: 'house_specific', title: '11th House Remedy', titleHi: '11वें भाव का उपाय', remedy: 'Donate food to laborers on Saturday', remedyHi: 'शनिवार को मजदूरों को भोजन दान करें' }
];
