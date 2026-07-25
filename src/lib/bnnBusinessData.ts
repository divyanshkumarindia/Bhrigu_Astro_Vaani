// BNN Business Yogs & Predictions Data
// Based on R.G. Rao's Bhrighu Nandi Nadi methodology

import { GrahaName } from '@/types/astrology';

// Business Type Suitability based on planetary combinations
export interface BusinessTypeYog {
  id: string;
  name: string;
  nameHi: string;
  planets: GrahaName[];
  houseCondition?: string;
  businessTypes: string[];
  businessTypesHi: string[];
  description: string;
  descriptionHi: string;
  suitability: 'sole' | 'partnership' | 'both';
  suitabilityHi: string;
  riskLevel: 'low' | 'medium' | 'high';
  timing: string;
  timingHi: string;
}

// Sole Proprietorship Yogs
export const SOLE_PROPRIETORSHIP_YOGS: BusinessTypeYog[] = [
  {
    id: 'sun_10th_strong',
    name: 'Sun in 10th - Self-Made Authority',
    nameHi: 'दशम भाव में सूर्य - स्वयं निर्मित अधिकार',
    planets: ['Sun'],
    houseCondition: 'Sun in 10th house',
    businessTypes: ['Government contracts', 'Consultancy', 'Leadership coaching', 'Pharmaceutical'],
    businessTypesHi: ['सरकारी ठेके', 'परामर्श', 'नेतृत्व प्रशिक्षण', 'फार्मास्यूटिकल'],
    description: 'You have natural authority and self-confidence that makes you ideal for running your own business. Government-related contracts or consulting will flourish under your independent leadership.',
    descriptionHi: 'आपमें स्वाभाविक अधिकार और आत्मविश्वास है जो आपको अपना व्यवसाय चलाने के लिए आदर्श बनाता है। सरकार से संबंधित ठेके या परामर्श आपके स्वतंत्र नेतृत्व में फलेंगे।',
    suitability: 'sole',
    suitabilityHi: 'एकल स्वामित्व',
    riskLevel: 'medium',
    timing: 'Success peaks between ages 30-45 during Sun dasha/antardasha',
    timingHi: 'सूर्य दशा/अंतर्दशा के दौरान 30-45 वर्ष की आयु में सफलता चरम पर'
  },
  {
    id: 'mars_3rd_10th',
    name: 'Mars in 3rd/10th - Warrior Entrepreneur',
    nameHi: 'तृतीय/दशम में मंगल - योद्धा उद्यमी',
    planets: ['Mars'],
    houseCondition: 'Mars in 3rd or 10th house',
    businessTypes: ['Real estate', 'Construction', 'Sports equipment', 'Defense supplies', 'Metal trading'],
    businessTypesHi: ['रियल एस्टेट', 'निर्माण', 'खेल उपकरण', 'रक्षा आपूर्ति', 'धातु व्यापार'],
    description: 'Your courageous and competitive nature makes you excel in independent ventures. You thrive in industries requiring boldness, quick decisions, and physical energy.',
    descriptionHi: 'आपकी साहसी और प्रतिस्पर्धी प्रकृति आपको स्वतंत्र उद्यमों में उत्कृष्ट बनाती है। आप साहस, त्वरित निर्णय और शारीरिक ऊर्जा की आवश्यकता वाले उद्योगों में फलते-फूलते हैं।',
    suitability: 'sole',
    suitabilityHi: 'एकल स्वामित्व',
    riskLevel: 'high',
    timing: 'Best results during Mars dasha, especially between ages 28-42',
    timingHi: 'मंगल दशा के दौरान सर्वोत्तम परिणाम, विशेषकर 28-42 वर्ष की आयु में'
  },
  {
    id: 'saturn_own_sign',
    name: 'Saturn in Capricorn/Aquarius - Disciplined Builder',
    nameHi: 'मकर/कुंभ में शनि - अनुशासित निर्माता',
    planets: ['Saturn'],
    houseCondition: 'Saturn in own sign',
    businessTypes: ['Manufacturing', 'Mining', 'Agriculture', 'Labour contracting', 'Oil and gas'],
    businessTypesHi: ['विनिर्माण', 'खनन', 'कृषि', 'श्रम ठेकेदारी', 'तेल और गैस'],
    description: 'Your patience, discipline, and long-term vision are your greatest business assets. You build empires slowly but surely. Industries involving raw materials and systematic processes suit you.',
    descriptionHi: 'आपका धैर्य, अनुशासन और दीर्घकालिक दृष्टि आपकी सबसे बड़ी व्यावसायिक संपत्ति हैं। आप धीरे-धीरे लेकिन निश्चित रूप से साम्राज्य बनाते हैं।',
    suitability: 'sole',
    suitabilityHi: 'एकल स्वामित्व',
    riskLevel: 'low',
    timing: 'Success after age 36, major breakthrough after Saturn return (29-30 years)',
    timingHi: '36 वर्ष की आयु के बाद सफलता, शनि वापसी (29-30 वर्ष) के बाद प्रमुख सफलता'
  }
];

// Partnership Business Yogs
export const PARTNERSHIP_YOGS: BusinessTypeYog[] = [
  {
    id: 'venus_7th_mercury',
    name: 'Venus-Mercury in 7th - Trade Partnership',
    nameHi: 'सप्तम में शुक्र-बुध - व्यापार साझेदारी',
    planets: ['Venus', 'Mercury'],
    houseCondition: 'Venus or Mercury in 7th house',
    businessTypes: ['Trading', 'Import-export', 'Textiles', 'Fashion retail', 'Jewelry'],
    businessTypesHi: ['व्यापार', 'आयात-निर्यात', 'वस्त्र', 'फैशन खुदरा', 'आभूषण'],
    description: 'Your diplomatic nature and communication skills make you ideal for business partnerships. Trade-related businesses with a creative partner will bring mutual success.',
    descriptionHi: 'आपकी कूटनीतिक प्रकृति और संचार कौशल आपको व्यापार साझेदारी के लिए आदर्श बनाते हैं। एक रचनात्मक साथी के साथ व्यापार-संबंधित व्यवसाय पारस्परिक सफलता लाएंगे।',
    suitability: 'partnership',
    suitabilityHi: 'साझेदारी',
    riskLevel: 'medium',
    timing: 'Venus dasha brings ideal partnership opportunities between ages 25-40',
    timingHi: 'शुक्र दशा 25-40 वर्ष की आयु के बीच आदर्श साझेदारी के अवसर लाती है'
  },
  {
    id: 'jupiter_7th',
    name: 'Jupiter in 7th - Ethical Partnership',
    nameHi: 'सप्तम में बृहस्पति - नैतिक साझेदारी',
    planets: ['Jupiter'],
    houseCondition: 'Jupiter in 7th house',
    businessTypes: ['Education institutes', 'Spiritual centers', 'Finance', 'Legal consulting', 'Publishing'],
    businessTypesHi: ['शिक्षण संस्थान', 'आध्यात्मिक केंद्र', 'वित्त', 'कानूनी परामर्श', 'प्रकाशन'],
    description: 'You attract trustworthy and ethical business partners. Your partnerships will be based on dharma and mutual growth. Avoid partnerships during Jupiter retrograde.',
    descriptionHi: 'आप भरोसेमंद और नैतिक व्यापार साझेदारों को आकर्षित करते हैं। आपकी साझेदारी धर्म और पारस्परिक विकास पर आधारित होगी।',
    suitability: 'partnership',
    suitabilityHi: 'साझेदारी',
    riskLevel: 'low',
    timing: 'Jupiter dasha is most auspicious for forming business partnerships',
    timingHi: 'बृहस्पति दशा व्यापार साझेदारी बनाने के लिए सबसे शुभ है'
  },
  {
    id: 'moon_venus_7th',
    name: 'Moon-Venus Conjunction - Creative Collaboration',
    nameHi: 'चंद्र-शुक्र युति - रचनात्मक सहयोग',
    planets: ['Moon', 'Venus'],
    houseCondition: 'Moon and Venus together or aspecting 7th',
    businessTypes: ['Hospitality', 'Art galleries', 'Event management', 'Food and beverages', 'Beauty industry'],
    businessTypesHi: ['आतिथ्य', 'कला दीर्घाएं', 'इवेंट प्रबंधन', 'खाद्य और पेय', 'सौंदर्य उद्योग'],
    description: 'Your emotional intelligence and aesthetic sense attract creative partners. Businesses involving public satisfaction and beauty will thrive with the right collaborator.',
    descriptionHi: 'आपकी भावनात्मक बुद्धिमत्ता और सौंदर्य बोध रचनात्मक साझेदारों को आकर्षित करता है। जनता की संतुष्टि और सौंदर्य से जुड़े व्यवसाय सही सहयोगी के साथ फलेंगे।',
    suitability: 'partnership',
    suitabilityHi: 'साझेदारी',
    riskLevel: 'medium',
    timing: 'Best between ages 25-35 during Moon or Venus dasha',
    timingHi: 'चंद्र या शुक्र दशा के दौरान 25-35 वर्ष की आयु में सर्वोत्तम'
  }
];

// Business Fields by Planetary Combination
export interface BusinessFieldYog {
  id: string;
  planets: GrahaName[];
  condition: string;
  conditionHi: string;
  businessFields: string[];
  businessFieldsHi: string[];
  howToSucceed: string;
  howToSucceedHi: string;
  whenToStart: string;
  whenToStartHi: string;
  challenges: string;
  challengesHi: string;
}

export const BUSINESS_FIELD_YOGS: BusinessFieldYog[] = [
  {
    id: 'mercury_10th_business',
    planets: ['Mercury'],
    condition: 'Mercury in 10th or Mercury as 10th lord',
    conditionHi: 'दशम में बुध या बुध दशमेश',
    businessFields: ['IT services', 'E-commerce', 'Stock trading', 'Accounting', 'Communication business', 'Digital marketing'],
    businessFieldsHi: ['आईटी सेवाएं', 'ई-कॉमर्स', 'स्टॉक ट्रेडिंग', 'लेखांकन', 'संचार व्यवसाय', 'डिजिटल मार्केटिंग'],
    howToSucceed: 'Leverage your analytical skills and communication abilities. Build a strong online presence and network actively.',
    howToSucceedHi: 'अपने विश्लेषणात्मक कौशल और संचार क्षमताओं का लाभ उठाएं। एक मजबूत ऑनलाइन उपस्थिति बनाएं।',
    whenToStart: 'Wednesday (Budhvar) is your auspicious day. Start during Mercury hora and Mercury dasha period.',
    whenToStartHi: 'बुधवार आपका शुभ दिन है। बुध होरा और बुध दशा काल में शुरू करें।',
    challenges: 'Overthinking and indecision. Avoid partnerships with Ketu-dominant individuals.',
    challengesHi: 'अधिक सोचना और अनिर्णय। केतु-प्रधान व्यक्तियों के साथ साझेदारी से बचें।'
  },
  {
    id: 'venus_2nd_11th',
    planets: ['Venus'],
    condition: 'Venus in 2nd or 11th house',
    conditionHi: 'द्वितीय या एकादश में शुक्र',
    businessFields: ['Luxury goods', 'Jewelry', 'Fashion', 'Entertainment', 'Hotel industry', 'Cosmetics', 'Interior design'],
    businessFieldsHi: ['विलासिता सामान', 'आभूषण', 'फैशन', 'मनोरंजन', 'होटल उद्योग', 'सौंदर्य प्रसाधन', 'इंटीरियर डिज़ाइन'],
    howToSucceed: 'Focus on aesthetics and customer experience. Your success comes through luxury positioning and brand building.',
    howToSucceedHi: 'सौंदर्यशास्त्र और ग्राहक अनुभव पर ध्यान दें। आपकी सफलता विलासिता स्थिति और ब्रांड निर्माण से आती है।',
    whenToStart: 'Friday (Shukravar) for new ventures. Spring season is especially favorable.',
    whenToStartHi: 'नए उद्यमों के लिए शुक्रवार। वसंत ऋतु विशेष रूप से अनुकूल है।',
    challenges: 'Overindulgence and cash flow management. Maintain discipline in luxury spending.',
    challengesHi: 'अति भोग और नकदी प्रवाह प्रबंधन। विलासिता खर्च में अनुशासन बनाए रखें।'
  },
  {
    id: 'mars_saturn_industry',
    planets: ['Mars', 'Saturn'],
    condition: 'Mars-Saturn in 10th or aspecting 10th',
    conditionHi: 'दशम में मंगल-शनि या दशम पर दृष्टि',
    businessFields: ['Heavy machinery', 'Steel and iron', 'Mining', 'Construction', 'Defense equipment', 'Automobile'],
    businessFieldsHi: ['भारी मशीनरी', 'इस्पात और लोहा', 'खनन', 'निर्माण', 'रक्षा उपकरण', 'ऑटोमोबाइल'],
    howToSucceed: 'Build systematically with patience. Your strength is in large-scale industrial projects. Focus on infrastructure.',
    howToSucceedHi: 'धैर्य के साथ व्यवस्थित रूप से निर्माण करें। आपकी ताकत बड़े पैमाने पर औद्योगिक परियोजनाओं में है।',
    whenToStart: 'Tuesday or Saturday. Avoid starting during Mars-Saturn conjunction transit.',
    whenToStartHi: 'मंगलवार या शनिवार। मंगल-शनि युति गोचर के दौरान शुरू करने से बचें।',
    challenges: 'Labor disputes and legal issues. Maintain excellent safety standards.',
    challengesHi: 'श्रम विवाद और कानूनी मुद्दे। उत्कृष्ट सुरक्षा मानकों को बनाए रखें।'
  },
  {
    id: 'jupiter_sun_consulting',
    planets: ['Jupiter', 'Sun'],
    condition: 'Jupiter-Sun conjunction or mutual aspect',
    conditionHi: 'बृहस्पति-सूर्य युति या परस्पर दृष्टि',
    businessFields: ['Consulting', 'Coaching', 'Education franchise', 'Financial advisory', 'Law firm', 'Religious products'],
    businessFieldsHi: ['परामर्श', 'कोचिंग', 'शिक्षा फ्रेंचाइज़ी', 'वित्तीय सलाहकार', 'कानूनी फर्म', 'धार्मिक उत्पाद'],
    howToSucceed: 'Your wisdom and authority combination is rare. Build thought leadership through content and speaking.',
    howToSucceedHi: 'आपकी बुद्धि और अधिकार का संयोजन दुर्लभ है। सामग्री और बोलने के माध्यम से विचार नेतृत्व बनाएं।',
    whenToStart: 'Thursday or Sunday. Jupiter hora is most auspicious for signing contracts.',
    whenToStartHi: 'गुरुवार या रविवार। अनुबंध पर हस्ताक्षर के लिए बृहस्पति होरा सबसे शुभ है।',
    challenges: 'Overexpansion and ego conflicts. Stay humble and focus on service.',
    challengesHi: 'अति विस्तार और अहंकार संघर्ष। विनम्र रहें और सेवा पर ध्यान दें।'
  },
  {
    id: 'rahu_mercury_tech',
    planets: ['Rahu', 'Mercury'],
    condition: 'Rahu-Mercury conjunction or Rahu in Mercury signs',
    conditionHi: 'राहु-बुध युति या राहु बुध राशियों में',
    businessFields: ['Technology startups', 'Cryptocurrency', 'AI/ML solutions', 'Software development', 'Fintech'],
    businessFieldsHi: ['प्रौद्योगिकी स्टार्टअप', 'क्रिप्टोकरेंसी', 'एआई/एमएल समाधान', 'सॉफ्टवेयर विकास', 'फिनटेक'],
    howToSucceed: 'Embrace innovation and disruptive ideas. Your unconventional thinking is your biggest asset.',
    howToSucceedHi: 'नवाचार और विघटनकारी विचारों को अपनाएं। आपकी अपरंपरागत सोच आपकी सबसे बड़ी संपत्ति है।',
    whenToStart: 'During Rahu dasha periods. Wednesday is favorable. Avoid eclipses.',
    whenToStartHi: 'राहु दशा काल में। बुधवार अनुकूल है। ग्रहण से बचें।',
    challenges: 'Ethical boundaries and regulatory compliance. Maintain transparency.',
    challengesHi: 'नैतिक सीमाएं और नियामक अनुपालन। पारदर्शिता बनाए रखें।'
  },
  {
    id: 'moon_cancer_public',
    planets: ['Moon'],
    condition: 'Moon in Cancer or 4th house strong',
    conditionHi: 'कर्क में चंद्र या मजबूत चतुर्थ भाव',
    businessFields: ['Dairy', 'Water purification', 'Hospitality', 'Real estate', 'Food processing', 'Nursery/childcare'],
    businessFieldsHi: ['डेयरी', 'जल शुद्धिकरण', 'आतिथ्य', 'रियल एस्टेट', 'खाद्य प्रसंस्करण', 'नर्सरी/बाल देखभाल'],
    howToSucceed: 'Connect emotionally with customers. Your nurturing approach builds loyal customer base.',
    howToSucceedHi: 'ग्राहकों से भावनात्मक रूप से जुड़ें। आपका पोषण दृष्टिकोण वफादार ग्राहक आधार बनाता है।',
    whenToStart: 'Monday is auspicious. Shukla Paksha (waxing moon) for launching.',
    whenToStartHi: 'सोमवार शुभ है। शुभारंभ के लिए शुक्ल पक्ष।',
    challenges: 'Emotional decision-making. Maintain professional boundaries with employees.',
    challengesHi: 'भावनात्मक निर्णय लेना। कर्मचारियों के साथ पेशेवर सीमाएं बनाए रखें।'
  }
];

// Business Timing based on Dasha
export interface BusinessDashaTiming {
  dasha: GrahaName;
  favorability: 'excellent' | 'good' | 'moderate' | 'challenging';
  businessActions: string[];
  businessActionsHi: string[];
  avoidActions: string[];
  avoidActionsHi: string[];
}

export const BUSINESS_DASHA_TIMING: BusinessDashaTiming[] = [
  {
    dasha: 'Jupiter',
    favorability: 'excellent',
    businessActions: ['Business expansion', 'New partnerships', 'Taking loans for growth', 'Opening new branches'],
    businessActionsHi: ['व्यापार विस्तार', 'नई साझेदारी', 'विकास के लिए ऋण लेना', 'नई शाखाएं खोलना'],
    avoidActions: ['Speculative investments', 'Hasty decisions'],
    avoidActionsHi: ['सट्टा निवेश', 'जल्दबाजी के फैसले']
  },
  {
    dasha: 'Mercury',
    favorability: 'excellent',
    businessActions: ['Starting trading business', 'IT ventures', 'Communication-based business', 'Multiple income streams'],
    businessActionsHi: ['व्यापार व्यवसाय शुरू करना', 'आईटी उद्यम', 'संचार-आधारित व्यवसाय', 'बहु आय स्रोत'],
    avoidActions: ['Long-term property investment', 'Manufacturing heavy industries'],
    avoidActionsHi: ['दीर्घकालिक संपत्ति निवेश', 'विनिर्माण भारी उद्योग']
  },
  {
    dasha: 'Venus',
    favorability: 'good',
    businessActions: ['Luxury brand launch', 'Creative industries', 'Partnership businesses', 'Women-focused products'],
    businessActionsHi: ['लक्जरी ब्रांड लॉन्च', 'रचनात्मक उद्योग', 'साझेदारी व्यवसाय', 'महिला-केंद्रित उत्पाद'],
    avoidActions: ['Heavy manufacturing', 'Mining industries'],
    avoidActionsHi: ['भारी विनिर्माण', 'खनन उद्योग']
  },
  {
    dasha: 'Sun',
    favorability: 'good',
    businessActions: ['Government contracts', 'Leadership positions', 'Independent consulting', 'Healthcare business'],
    businessActionsHi: ['सरकारी ठेके', 'नेतृत्व पद', 'स्वतंत्र परामर्श', 'स्वास्थ्य व्यवसाय'],
    avoidActions: ['Partnerships with equals', 'Mass-market low-margin products'],
    avoidActionsHi: ['समकक्षों के साथ साझेदारी', 'कम मार्जिन वाले उत्पाद']
  },
  {
    dasha: 'Mars',
    favorability: 'moderate',
    businessActions: ['Starting real estate', 'Technical ventures', 'Sports-related business', 'Competition-intensive industries'],
    businessActionsHi: ['रियल एस्टेट शुरू करना', 'तकनीकी उद्यम', 'खेल-संबंधी व्यवसाय', 'प्रतिस्पर्धा-गहन उद्योग'],
    avoidActions: ['Delicate negotiations', 'Partnership with weak Mars individuals'],
    avoidActionsHi: ['नाजुक वार्ता', 'कमजोर मंगल वालों के साथ साझेदारी']
  },
  {
    dasha: 'Saturn',
    favorability: 'moderate',
    businessActions: ['Long-term projects', 'Manufacturing setup', 'Infrastructure business', 'Agriculture and mining'],
    businessActionsHi: ['दीर्घकालिक परियोजनाएं', 'विनिर्माण स्थापना', 'अवसंरचना व्यवसाय', 'कृषि और खनन'],
    avoidActions: ['Quick-return expectations', 'Speculative trading', 'Fashion/trend-based business'],
    avoidActionsHi: ['त्वरित रिटर्न अपेक्षाएं', 'सट्टा व्यापार', 'फैशन/ट्रेंड-आधारित व्यवसाय']
  },
  {
    dasha: 'Moon',
    favorability: 'moderate',
    businessActions: ['Public-facing business', 'Food and beverages', 'Hospitality', 'Real estate'],
    businessActionsHi: ['जनता से जुड़ा व्यवसाय', 'खाद्य और पेय', 'आतिथ्य', 'रियल एस्टेट'],
    avoidActions: ['Technical/analytical business', 'Long legal contracts'],
    avoidActionsHi: ['तकनीकी/विश्लेषणात्मक व्यवसाय', 'लंबे कानूनी अनुबंध']
  },
  {
    dasha: 'Rahu',
    favorability: 'challenging',
    businessActions: ['Innovative/disruptive ventures', 'Technology startups', 'Foreign collaborations', 'Unconventional business'],
    businessActionsHi: ['नवोन्मेषी/विघटनकारी उद्यम', 'प्रौद्योगिकी स्टार्टअप', 'विदेशी सहयोग', 'अपरंपरागत व्यवसाय'],
    avoidActions: ['Traditional businesses', 'Partnership with relatives', 'Trusting blindly'],
    avoidActionsHi: ['पारंपरिक व्यवसाय', 'रिश्तेदारों के साथ साझेदारी', 'आंख मूंदकर भरोसा']
  },
  {
    dasha: 'Ketu',
    favorability: 'challenging',
    businessActions: ['Spiritual products', 'Research-based ventures', 'Healing/alternative medicine', 'Astrology services'],
    businessActionsHi: ['आध्यात्मिक उत्पाद', 'अनुसंधान-आधारित उद्यम', 'उपचार/वैकल्पिक चिकित्सा', 'ज्योतिष सेवाएं'],
    avoidActions: ['Material-focused large business', 'Partnership ventures', 'Heavy capital investment'],
    avoidActionsHi: ['भौतिक-केंद्रित बड़ा व्यवसाय', 'साझेदारी उद्यम', 'भारी पूंजी निवेश']
  }
];

// Business Remedies
export interface BusinessRemedy {
  planet: GrahaName;
  remedy: string;
  remedyHi: string;
  mantra: string;
  day: string;
  dayHi: string;
}

export const BUSINESS_REMEDIES: BusinessRemedy[] = [
  {
    planet: 'Mercury',
    remedy: 'Keep a green emerald or green tourmaline in your business place. Recite Budha Beej mantra before important deals.',
    remedyHi: 'अपने व्यवसाय स्थल पर हरा पन्ना या हरा टूमलाइन रखें। महत्वपूर्ण सौदों से पहले बुध बीज मंत्र का जाप करें।',
    mantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः',
    day: 'Wednesday',
    dayHi: 'बुधवार'
  },
  {
    planet: 'Jupiter',
    remedy: 'Keep yellow sapphire or citrine at cash counter. Donate to educational institutions on Thursdays.',
    remedyHi: 'कैश काउंटर पर पीला नीलम या सिट्रीन रखें। गुरुवार को शैक्षणिक संस्थानों को दान करें।',
    mantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः',
    day: 'Thursday',
    dayHi: 'गुरुवार'
  },
  {
    planet: 'Venus',
    remedy: 'Place white flowers and maintain cleanliness in business premises. Worship Lakshmi on Fridays.',
    remedyHi: 'व्यवसाय परिसर में सफेद फूल रखें और स्वच्छता बनाए रखें। शुक्रवार को लक्ष्मी पूजा करें।',
    mantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः',
    day: 'Friday',
    dayHi: 'शुक्रवार'
  },
  {
    planet: 'Saturn',
    remedy: 'Serve the elderly and labor class. Donate black sesame seeds on Saturdays. Maintain workplace discipline.',
    remedyHi: 'बुजुर्गों और श्रमिक वर्ग की सेवा करें। शनिवार को काले तिल दान करें। कार्यस्थल अनुशासन बनाए रखें।',
    mantra: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः',
    day: 'Saturday',
    dayHi: 'शनिवार'
  },
  {
    planet: 'Sun',
    remedy: 'Offer water to the Sun every morning. Keep copper items in your office. Respect authority figures.',
    remedyHi: 'हर सुबह सूर्य को जल अर्पित करें। अपने कार्यालय में तांबे की वस्तुएं रखें। अधिकारियों का सम्मान करें।',
    mantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः',
    day: 'Sunday',
    dayHi: 'रविवार'
  }
];

// 7th House Analysis for Partnership
export interface SeventhHousePartnership {
  signIn7th: string;
  partnerType: string;
  partnerTypeHi: string;
  businessCompatibility: string;
  businessCompatibilityHi: string;
  caution: string;
  cautionHi: string;
}

export const SEVENTH_HOUSE_PARTNERSHIP: Record<string, SeventhHousePartnership> = {
  Aries: {
    signIn7th: 'Aries',
    partnerType: 'Aggressive, independent, competitive partner',
    partnerTypeHi: 'आक्रामक, स्वतंत्र, प्रतिस्पर्धी साझेदार',
    businessCompatibility: 'Good for action-oriented, fast-paced business. Partnership may have ego clashes.',
    businessCompatibilityHi: 'कार्य-उन्मुख, तेज-तर्रार व्यवसाय के लिए अच्छा। साझेदारी में अहंकार टकराव हो सकता है।',
    caution: 'Define roles clearly. Avoid competitive situations between partners.',
    cautionHi: 'भूमिकाओं को स्पष्ट रूप से परिभाषित करें। साझेदारों के बीच प्रतिस्पर्धी स्थितियों से बचें।'
  },
  Taurus: {
    signIn7th: 'Taurus',
    partnerType: 'Stable, financially oriented, practical partner',
    partnerTypeHi: 'स्थिर, आर्थिक रूप से उन्मुख, व्यावहारिक साझेदार',
    businessCompatibility: 'Excellent for long-term business. Partner brings financial stability and patience.',
    businessCompatibilityHi: 'दीर्घकालिक व्यवसाय के लिए उत्कृष्ट। साझेदार वित्तीय स्थिरता और धैर्य लाता है।',
    caution: 'Partner may be stubborn. Allow flexibility in business decisions.',
    cautionHi: 'साझेदार जिद्दी हो सकता है। व्यावसायिक निर्णयों में लचीलापन रखें।'
  },
  Gemini: {
    signIn7th: 'Gemini',
    partnerType: 'Communicative, versatile, intellectual partner',
    partnerTypeHi: 'संवादशील, बहुमुखी, बौद्धिक साझेदार',
    businessCompatibility: 'Great for trading, communication, and multiple-stream businesses.',
    businessCompatibilityHi: 'व्यापार, संचार और बहु-धारा व्यवसायों के लिए बढ़िया।',
    caution: 'Partner may be inconsistent. Ensure legal contracts are detailed.',
    cautionHi: 'साझेदार असंगत हो सकता है। सुनिश्चित करें कि कानूनी अनुबंध विस्तृत हों।'
  },
  Cancer: {
    signIn7th: 'Cancer',
    partnerType: 'Nurturing, emotional, family-oriented partner',
    partnerTypeHi: 'पोषणकारी, भावनात्मक, परिवार-उन्मुख साझेदार',
    businessCompatibility: 'Ideal for family business, food industry, real estate, and hospitality.',
    businessCompatibilityHi: 'पारिवारिक व्यवसाय, खाद्य उद्योग, रियल एस्टेट और आतिथ्य के लिए आदर्श।',
    caution: 'Emotional decisions may affect business. Keep finances separate from emotions.',
    cautionHi: 'भावनात्मक निर्णय व्यवसाय को प्रभावित कर सकते हैं। वित्त को भावनाओं से अलग रखें।'
  },
  Leo: {
    signIn7th: 'Leo',
    partnerType: 'Authoritative, creative, ambitious partner',
    partnerTypeHi: 'अधिकारवादी, रचनात्मक, महत्वाकांक्षी साझेदार',
    businessCompatibility: 'Good for entertainment, luxury, and creative industries. Partner brings charisma.',
    businessCompatibilityHi: 'मनोरंजन, विलासिता और रचनात्मक उद्योगों के लिए अच्छा। साझेदार करिश्मा लाता है।',
    caution: 'Power struggles possible. Give partner due recognition.',
    cautionHi: 'सत्ता संघर्ष संभव। साझेदार को उचित मान्यता दें।'
  },
  Virgo: {
    signIn7th: 'Virgo',
    partnerType: 'Analytical, detail-oriented, service-minded partner',
    partnerTypeHi: 'विश्लेषणात्मक, विस्तार-उन्मुख, सेवा-मानसिकता वाला साझेदार',
    businessCompatibility: 'Excellent for service industries, healthcare, accounting, and quality control.',
    businessCompatibilityHi: 'सेवा उद्योगों, स्वास्थ्य देखभाल, लेखांकन और गुणवत्ता नियंत्रण के लिए उत्कृष्ट।',
    caution: 'Criticism may create friction. Focus on constructive feedback.',
    cautionHi: 'आलोचना से घर्षण हो सकता है। रचनात्मक प्रतिक्रिया पर ध्यान दें।'
  },
  Libra: {
    signIn7th: 'Libra',
    partnerType: 'Diplomatic, balanced, relationship-focused partner',
    partnerTypeHi: 'कूटनीतिक, संतुलित, संबंध-केंद्रित साझेदार',
    businessCompatibility: 'Ideal partnership combination. Great for law, consulting, fashion, and arts.',
    businessCompatibilityHi: 'आदर्श साझेदारी संयोजन। कानून, परामर्श, फैशन और कला के लिए बढ़िया।',
    caution: 'Partner may be indecisive. Take lead in critical decisions.',
    cautionHi: 'साझेदार अनिर्णायक हो सकता है। महत्वपूर्ण निर्णयों में नेतृत्व करें।'
  },
  Scorpio: {
    signIn7th: 'Scorpio',
    partnerType: 'Intense, resourceful, secretive partner',
    partnerTypeHi: 'तीव्र, संसाधनपूर्ण, गोपनीय साझेदार',
    businessCompatibility: 'Good for research, investigation, insurance, and transformative industries.',
    businessCompatibilityHi: 'अनुसंधान, जांच, बीमा और परिवर्तनकारी उद्योगों के लिए अच्छा।',
    caution: 'Trust issues possible. Maintain complete transparency in finances.',
    cautionHi: 'विश्वास के मुद्दे संभव। वित्त में पूर्ण पारदर्शिता बनाए रखें।'
  },
  Sagittarius: {
    signIn7th: 'Sagittarius',
    partnerType: 'Optimistic, philosophical, expansion-oriented partner',
    partnerTypeHi: 'आशावादी, दार्शनिक, विस्तार-उन्मुख साझेदार',
    businessCompatibility: 'Great for international business, education, travel, and publishing.',
    businessCompatibilityHi: 'अंतर्राष्ट्रीय व्यापार, शिक्षा, यात्रा और प्रकाशन के लिए बढ़िया।',
    caution: 'Over-promising and under-delivering risk. Keep realistic expectations.',
    cautionHi: 'अति-वादा और कम-वितरण का जोखिम। यथार्थवादी अपेक्षाएं रखें।'
  },
  Capricorn: {
    signIn7th: 'Capricorn',
    partnerType: 'Ambitious, disciplined, status-conscious partner',
    partnerTypeHi: 'महत्वाकांक्षी, अनुशासित, प्रतिष्ठा-सचेत साझेदार',
    businessCompatibility: 'Excellent for corporate ventures, government contracts, and long-term projects.',
    businessCompatibilityHi: 'कॉर्पोरेट उद्यमों, सरकारी ठेकों और दीर्घकालिक परियोजनाओं के लिए उत्कृष्ट।',
    caution: 'Work-life balance may suffer. Ensure personal relationship health.',
    cautionHi: 'कार्य-जीवन संतुलन प्रभावित हो सकता है। व्यक्तिगत संबंध स्वास्थ्य सुनिश्चित करें।'
  },
  Aquarius: {
    signIn7th: 'Aquarius',
    partnerType: 'Innovative, unconventional, humanitarian partner',
    partnerTypeHi: 'नवोन्मेषी, अपरंपरागत, मानवतावादी साझेदार',
    businessCompatibility: 'Good for technology, social enterprises, and innovative startups.',
    businessCompatibilityHi: 'प्रौद्योगिकी, सामाजिक उद्यमों और नवोन्मेषी स्टार्टअप के लिए अच्छा।',
    caution: 'Unpredictable partner behavior. Have clear exit clauses in agreements.',
    cautionHi: 'अप्रत्याशित साझेदार व्यवहार। समझौतों में स्पष्ट निकास खंड रखें।'
  },
  Pisces: {
    signIn7th: 'Pisces',
    partnerType: 'Intuitive, spiritual, creative partner',
    partnerTypeHi: 'सहज, आध्यात्मिक, रचनात्मक साझेदार',
    businessCompatibility: 'Ideal for artistic ventures, spiritual products, and healthcare.',
    businessCompatibilityHi: 'कलात्मक उद्यमों, आध्यात्मिक उत्पादों और स्वास्थ्य देखभाल के लिए आदर्श।',
    caution: 'Partner may lack practical focus. Handle finances yourself.',
    cautionHi: 'साझेदार में व्यावहारिक फोकस की कमी हो सकती है। वित्त स्वयं संभालें।'
  }
};
