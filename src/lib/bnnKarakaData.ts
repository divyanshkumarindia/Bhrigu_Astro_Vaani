// R.G. Rao's BNN Karaka Methodology for Career Analysis
// Based on Bhrighu Nandi Nadi principles

import { GrahaName } from '@/types/astrology';

// ============================================
// SATURN AS KARMAKARAKA (Career Significator)
// ============================================

export interface KarmakarakaAnalysis {
  planet: GrahaName;
  house: number;
  interpretation: string;
  interpretationHi: string;
  careerIndications: string[];
  careerIndicationsHi: string[];
  strength: 'strong' | 'moderate' | 'weak';
  timing: string;
  timingHi: string;
}

export const SATURN_KARMAKARAKA_HOUSES: Record<number, {
  interpretation: string;
  interpretationHi: string;
  careerIndications: string[];
  careerIndicationsHi: string[];
  strength: 'strong' | 'moderate' | 'weak';
  timing: string;
  timingHi: string;
}> = {
  1: {
    interpretation: "Your Saturn in the 1st house makes you a natural leader through hard work. You build your career through self-effort and persistence. Success comes late but is long-lasting.",
    interpretationHi: "आपका शनि पहले भाव में आपको कड़ी मेहनत के माध्यम से स्वाभाविक नेता बनाता है। आप आत्म-प्रयास और दृढ़ता से अपना करियर बनाते हैं। सफलता देर से आती है लेकिन स्थायी होती है।",
    careerIndications: ["Self-employed", "Leadership roles after 35", "Government positions", "Mining/Agriculture"],
    careerIndicationsHi: ["स्वरोजगार", "35 के बाद नेतृत्व भूमिकाएं", "सरकारी पद", "खनन/कृषि"],
    strength: 'strong',
    timing: "Career stability after Saturn return (28-30 years)",
    timingHi: "शनि वापसी के बाद करियर स्थिरता (28-30 वर्ष)"
  },
  2: {
    interpretation: "Your Karmakaraka Saturn in the 2nd house indicates wealth through patient accumulation. You may work in banking, finance, or family business. Speech and communication become tools of your profession.",
    interpretationHi: "आपका कर्मकारक शनि दूसरे भाव में धैर्यपूर्ण संचय के माध्यम से धन का संकेत देता है। आप बैंकिंग, वित्त या पारिवारिक व्यवसाय में काम कर सकते हैं। वाणी और संवाद आपके पेशे के उपकरण बन जाते हैं।",
    careerIndications: ["Banking", "Finance", "Food industry", "Family business", "Wealth management"],
    careerIndicationsHi: ["बैंकिंग", "वित्त", "खाद्य उद्योग", "पारिवारिक व्यवसाय", "धन प्रबंधन"],
    strength: 'moderate',
    timing: "Financial stability builds gradually after 32",
    timingHi: "32 के बाद धीरे-धीरे वित्तीय स्थिरता बनती है"
  },
  3: {
    interpretation: "Your Saturn as Karmakaraka in the 3rd house gives you skills in communication, writing, and media. You are determined and courageous in pursuing your career goals. Short travels benefit your work.",
    interpretationHi: "आपका शनि कर्मकारक के रूप में तीसरे भाव में आपको संचार, लेखन और मीडिया में कौशल देता है। आप अपने करियर लक्ष्यों को पूरा करने में दृढ़ और साहसी हैं। छोटी यात्राएं आपके काम को लाभ पहुंचाती हैं।",
    careerIndications: ["Writing", "Journalism", "Media", "Publishing", "Sales", "Telecommunications"],
    careerIndicationsHi: ["लेखन", "पत्रकारिता", "मीडिया", "प्रकाशन", "बिक्री", "दूरसंचार"],
    strength: 'moderate',
    timing: "Communication skills peak after Saturn matures",
    timingHi: "शनि की परिपक्वता के बाद संचार कौशल चरम पर"
  },
  4: {
    interpretation: "Your Karmakaraka Saturn in the 4th house connects your career to land, property, or homeland. You may work in real estate, construction, or agriculture. Success comes through stability and roots.",
    interpretationHi: "आपका कर्मकारक शनि चौथे भाव में आपके करियर को भूमि, संपत्ति या मातृभूमि से जोड़ता है। आप रियल एस्टेट, निर्माण या कृषि में काम कर सकते हैं। सफलता स्थिरता और जड़ों के माध्यम से आती है।",
    careerIndications: ["Real estate", "Construction", "Agriculture", "Mining", "Vehicle industry", "Home-based work"],
    careerIndicationsHi: ["रियल एस्टेट", "निर्माण", "कृषि", "खनन", "वाहन उद्योग", "घर-आधारित कार्य"],
    strength: 'moderate',
    timing: "Property and land dealings favorable after 36",
    timingHi: "36 के बाद संपत्ति और भूमि संबंधी कार्य अनुकूल"
  },
  5: {
    interpretation: "Your Saturn in the 5th house as Karmakaraka delays but doesn't deny creative success. You may work in education, speculation, or entertainment after persistent effort. Children may follow your career path.",
    interpretationHi: "आपका शनि पांचवें भाव में कर्मकारक के रूप में रचनात्मक सफलता में देरी करता है लेकिन इनकार नहीं करता। आप निरंतर प्रयास के बाद शिक्षा, सट्टेबाजी या मनोरंजन में काम कर सकते हैं।",
    careerIndications: ["Education", "Stock market (with caution)", "Entertainment", "Sports coaching", "Children's services"],
    careerIndicationsHi: ["शिक्षा", "शेयर बाजार (सावधानी से)", "मनोरंजन", "खेल कोचिंग", "बच्चों की सेवाएं"],
    strength: 'weak',
    timing: "Creative recognition after 35-40",
    timingHi: "35-40 के बाद रचनात्मक मान्यता"
  },
  6: {
    interpretation: "Your Karmakaraka Saturn in the 6th house is excellent for service-oriented careers. You excel in healthcare, law, or defeating competition. Daily work and routine become your strength.",
    interpretationHi: "आपका कर्मकारक शनि छठे भाव में सेवा-उन्मुख करियर के लिए उत्कृष्ट है। आप स्वास्थ्य सेवा, कानून या प्रतिस्पर्धा को हराने में उत्कृष्ट हैं। दैनिक कार्य और दिनचर्या आपकी ताकत बन जाती है।",
    careerIndications: ["Healthcare", "Legal services", "Military", "Police", "Labor unions", "Social work"],
    careerIndicationsHi: ["स्वास्थ्य सेवा", "कानूनी सेवाएं", "सेना", "पुलिस", "श्रमिक संघ", "सामाजिक कार्य"],
    strength: 'strong',
    timing: "Overcoming enemies and competition throughout career",
    timingHi: "पूरे करियर में शत्रुओं और प्रतिस्पर्धा पर विजय"
  },
  7: {
    interpretation: "Your Saturn in the 7th house as Karmakaraka indicates career through partnerships and public dealings. Business partnerships may come later but are stable. You work well with others in formal settings.",
    interpretationHi: "आपका शनि सातवें भाव में कर्मकारक के रूप में साझेदारी और जनता से व्यवहार के माध्यम से करियर का संकेत देता है। व्यापारिक साझेदारी बाद में आ सकती है लेकिन स्थिर होती है।",
    careerIndications: ["Business partnerships", "Legal practice", "Consulting", "Marriage counseling", "International trade"],
    careerIndicationsHi: ["व्यापारिक साझेदारी", "कानूनी प्रैक्टिस", "परामर्श", "विवाह परामर्श", "अंतर्राष्ट्रीय व्यापार"],
    strength: 'moderate',
    timing: "Partnership success after 30-32",
    timingHi: "30-32 के बाद साझेदारी में सफलता"
  },
  8: {
    interpretation: "Your Karmakaraka Saturn in the 8th house indicates work involving research, transformation, or hidden matters. You may deal with insurance, inheritance, or occult sciences. Career involves deep investigation.",
    interpretationHi: "आपका कर्मकारक शनि आठवें भाव में शोध, परिवर्तन या छिपी हुई बातों से जुड़े कार्य का संकेत देता है। आप बीमा, विरासत या गूढ़ विज्ञान से जुड़े हो सकते हैं।",
    careerIndications: ["Insurance", "Research", "Mining", "Occult sciences", "Psychology", "Forensics"],
    careerIndicationsHi: ["बीमा", "शोध", "खनन", "गूढ़ विज्ञान", "मनोविज्ञान", "फोरेंसिक"],
    strength: 'weak',
    timing: "Sudden career transformations possible, stability after 40",
    timingHi: "अचानक करियर परिवर्तन संभव, 40 के बाद स्थिरता"
  },
  9: {
    interpretation: "Your Saturn as Karmakaraka in the 9th house brings career in higher education, law, philosophy, or foreign connections. Your father or teachers influence your professional path. Long journeys benefit career.",
    interpretationHi: "आपका शनि कर्मकारक के रूप में नौवें भाव में उच्च शिक्षा, कानून, दर्शन या विदेशी संबंधों में करियर लाता है। आपके पिता या शिक्षक आपके पेशेवर मार्ग को प्रभावित करते हैं।",
    careerIndications: ["Higher education", "Law", "Philosophy", "Religious work", "Foreign services", "Import/Export"],
    careerIndicationsHi: ["उच्च शिक्षा", "कानून", "दर्शन", "धार्मिक कार्य", "विदेशी सेवाएं", "आयात/निर्यात"],
    strength: 'strong',
    timing: "Career abroad or with foreign connections flourishes after 28",
    timingHi: "28 के बाद विदेश में या विदेशी संबंधों के साथ करियर फलता-फूलता है"
  },
  10: {
    interpretation: "Your Karmakaraka Saturn in its own house (10th) is a powerful Raj Yoga! You are destined for authority, responsibility, and lasting fame. Career success is certain but comes through immense effort and patience.",
    interpretationHi: "आपका कर्मकारक शनि अपने ही भाव (10वें) में एक शक्तिशाली राज योग है! आप अधिकार, जिम्मेदारी और स्थायी प्रसिद्धि के लिए नियत हैं। करियर की सफलता निश्चित है लेकिन अपार प्रयास और धैर्य से आती है।",
    careerIndications: ["Government authority", "Politics", "Administration", "Large organizations", "CEO/Director roles"],
    careerIndicationsHi: ["सरकारी अधिकार", "राजनीति", "प्रशासन", "बड़े संगठन", "सीईओ/निदेशक भूमिकाएं"],
    strength: 'strong',
    timing: "Peak career success in 40s and beyond",
    timingHi: "40 और उसके बाद शिखर करियर सफलता"
  },
  11: {
    interpretation: "Your Saturn as Karmakaraka in the 11th house promises gains through persistent networking and elder's blessings. You achieve your ambitions slowly but surely. Friend circles support your career growth.",
    interpretationHi: "आपका शनि कर्मकारक के रूप में 11वें भाव में निरंतर नेटवर्किंग और बड़ों के आशीर्वाद के माध्यम से लाभ का वादा करता है। आप अपनी महत्वाकांक्षाओं को धीरे-धीरे लेकिन निश्चित रूप से प्राप्त करते हैं।",
    careerIndications: ["Large corporations", "Networking-based roles", "NGOs", "Community work", "Elder care"],
    careerIndicationsHi: ["बड़े निगम", "नेटवर्किंग-आधारित भूमिकाएं", "एनजीओ", "सामुदायिक कार्य", "बड़ों की देखभाल"],
    strength: 'strong',
    timing: "Steady gains and income stability after 30",
    timingHi: "30 के बाद स्थिर लाभ और आय स्थिरता"
  },
  12: {
    interpretation: "Your Karmakaraka Saturn in the 12th house indicates career in foreign lands, hospitals, or spiritual institutions. You may work behind the scenes or in charitable organizations. Expenses on career eventually bring returns.",
    interpretationHi: "आपका कर्मकारक शनि 12वें भाव में विदेश, अस्पतालों या आध्यात्मिक संस्थानों में करियर का संकेत देता है। आप पर्दे के पीछे या धर्मार्थ संगठनों में काम कर सकते हैं।",
    careerIndications: ["Foreign settlement", "Hospital work", "Spiritual institutions", "Charitable work", "Behind-the-scenes roles"],
    careerIndicationsHi: ["विदेश में बसना", "अस्पताल कार्य", "आध्यात्मिक संस्थान", "धर्मार्थ कार्य", "पर्दे के पीछे भूमिकाएं"],
    strength: 'moderate',
    timing: "Career in foreign lands or isolation-based work after 28",
    timingHi: "28 के बाद विदेश में या एकांत-आधारित कार्य"
  }
};

// ============================================
// ADJACENT PLANET EFFECTS ON CAREER
// ============================================

export interface AdjacentPlanetEffect {
  planet: GrahaName;
  effectOn10th: string;
  effectOn10thHi: string;
  careerModification: string[];
  careerModificationHi: string[];
}

export const ADJACENT_PLANET_EFFECTS: Record<GrahaName, {
  effectOn10th: string;
  effectOn10thHi: string;
  careerModification: string[];
  careerModificationHi: string[];
}> = {
  Sun: {
    effectOn10th: "The Sun's influence on your 10th house brings government favor, authority, and leadership. Your father may influence your career.",
    effectOn10thHi: "सूर्य का आपके 10वें भाव पर प्रभाव सरकारी कृपा, अधिकार और नेतृत्व लाता है। आपके पिता आपके करियर को प्रभावित कर सकते हैं।",
    careerModification: ["Government jobs", "Politics", "Administration", "Medicine"],
    careerModificationHi: ["सरकारी नौकरी", "राजनीति", "प्रशासन", "चिकित्सा"]
  },
  Moon: {
    effectOn10th: "The Moon's connection to your career house brings public-facing roles and emotional intelligence at work. Your career may involve women, liquids, or nurturing.",
    effectOn10thHi: "चंद्रमा का आपके करियर भाव से संबंध जनता से जुड़ी भूमिकाएं और कार्यस्थल पर भावनात्मक बुद्धिमत्ता लाता है। आपका करियर महिलाओं, तरल पदार्थों या पालन-पोषण से जुड़ा हो सकता है।",
    careerModification: ["Hospitality", "Nursing", "Dairy industry", "Public relations"],
    careerModificationHi: ["आतिथ्य", "नर्सिंग", "डेयरी उद्योग", "जनसंपर्क"]
  },
  Mars: {
    effectOn10th: "Mars energizes your career with courage, action, and competition. You excel in fields requiring physical effort, engineering, or leadership through action.",
    effectOn10thHi: "मंगल आपके करियर को साहस, कार्रवाई और प्रतिस्पर्धा से ऊर्जावान करता है। आप शारीरिक प्रयास, इंजीनियरिंग या कार्रवाई के माध्यम से नेतृत्व की आवश्यकता वाले क्षेत्रों में उत्कृष्ट हैं।",
    careerModification: ["Military", "Engineering", "Surgery", "Sports", "Police"],
    careerModificationHi: ["सेना", "इंजीनियरिंग", "सर्जरी", "खेल", "पुलिस"]
  },
  Mercury: {
    effectOn10th: "Mercury's influence on your career brings communication skills, business acumen, and intellectual work. You excel in trade, writing, and technology.",
    effectOn10thHi: "बुध का आपके करियर पर प्रभाव संचार कौशल, व्यावसायिक कुशाग्रता और बौद्धिक कार्य लाता है। आप व्यापार, लेखन और तकनीक में उत्कृष्ट हैं।",
    careerModification: ["IT/Software", "Business", "Accounting", "Writing", "Teaching"],
    careerModificationHi: ["आईटी/सॉफ्टवेयर", "व्यापार", "लेखांकन", "लेखन", "शिक्षण"]
  },
  Jupiter: {
    effectOn10th: "Jupiter blesses your career with wisdom, expansion, and ethical leadership. You may become a guru, advisor, or work in finance and education.",
    effectOn10thHi: "बृहस्पति आपके करियर को ज्ञान, विस्तार और नैतिक नेतृत्व से आशीर्वादित करता है। आप गुरु, सलाहकार बन सकते हैं या वित्त और शिक्षा में काम कर सकते हैं।",
    careerModification: ["Education", "Finance", "Law", "Spirituality", "Advisory roles"],
    careerModificationHi: ["शिक्षा", "वित्त", "कानून", "आध्यात्मिकता", "सलाहकार भूमिकाएं"]
  },
  Venus: {
    effectOn10th: "Venus adds beauty, creativity, and luxury to your career. You excel in arts, entertainment, fashion, and anything that pleases the senses.",
    effectOn10thHi: "शुक्र आपके करियर में सुंदरता, रचनात्मकता और विलासिता जोड़ता है। आप कला, मनोरंजन, फैशन और इंद्रियों को प्रसन्न करने वाली किसी भी चीज में उत्कृष्ट हैं।",
    careerModification: ["Arts", "Fashion", "Entertainment", "Luxury goods", "Beauty industry"],
    careerModificationHi: ["कला", "फैशन", "मनोरंजन", "विलासिता सामान", "सौंदर्य उद्योग"]
  },
  Saturn: {
    effectOn10th: "Saturn's direct influence on your 10th house brings discipline, hard work, and lasting success. You build your career through persistence and may work with the masses.",
    effectOn10thHi: "शनि का आपके 10वें भाव पर सीधा प्रभाव अनुशासन, कड़ी मेहनत और स्थायी सफलता लाता है। आप दृढ़ता से अपना करियर बनाते हैं और जनता के साथ काम कर सकते हैं।",
    careerModification: ["Government", "Agriculture", "Mining", "Labor-intensive work", "Real estate"],
    careerModificationHi: ["सरकार", "कृषि", "खनन", "श्रम-गहन कार्य", "रियल एस्टेट"]
  },
  Rahu: {
    effectOn10th: "Rahu's influence on your career brings unconventional paths, foreign connections, and technology. You may achieve sudden fame or work in cutting-edge fields.",
    effectOn10thHi: "राहु का आपके करियर पर प्रभाव अपरंपरागत पथ, विदेशी संबंध और तकनीक लाता है। आप अचानक प्रसिद्धि प्राप्त कर सकते हैं या अत्याधुनिक क्षेत्रों में काम कर सकते हैं।",
    careerModification: ["Technology", "Foreign companies", "Research", "Unconventional careers", "Mass media"],
    careerModificationHi: ["तकनीक", "विदेशी कंपनियां", "शोध", "अपरंपरागत करियर", "मास मीडिया"]
  },
  Ketu: {
    effectOn10th: "Ketu's influence on your career brings spiritual dimensions, detachment, and specialized skills. You may excel in research, healing, or esoteric fields.",
    effectOn10thHi: "केतु का आपके करियर पर प्रभाव आध्यात्मिक आयाम, वैराग्य और विशेष कौशल लाता है। आप शोध, उपचार या गूढ़ क्षेत्रों में उत्कृष्ट हो सकते हैं।",
    careerModification: ["Spiritual work", "Alternative healing", "Research", "Programming", "Forensics"],
    careerModificationHi: ["आध्यात्मिक कार्य", "वैकल्पिक उपचार", "शोध", "प्रोग्रामिंग", "फोरेंसिक"]
  }
};

// ============================================
// DASHA-BASED CAREER TIMING
// ============================================

export interface DashaCareerTiming {
  dashaLord: GrahaName;
  careerEffect: string;
  careerEffectHi: string;
  timing: string;
  timingHi: string;
  favorableFor: string[];
  favorableForHi: string[];
}

export const DASHA_CAREER_TIMING: Record<GrahaName, {
  careerEffect: string;
  careerEffectHi: string;
  favorableFor: string[];
  favorableForHi: string[];
  challengeAreas: string[];
  challengeAreasHi: string[];
}> = {
  Sun: {
    careerEffect: "Your Sun Mahadasha brings career authority, government favor, and leadership opportunities. This is your time to shine in public roles.",
    careerEffectHi: "आपका सूर्य महादशा करियर में अधिकार, सरकारी कृपा और नेतृत्व के अवसर लाता है। यह सार्वजनिक भूमिकाओं में चमकने का आपका समय है।",
    favorableFor: ["Government jobs", "Politics", "Medical field", "Leadership positions"],
    favorableForHi: ["सरकारी नौकरी", "राजनीति", "चिकित्सा क्षेत्र", "नेतृत्व पद"],
    challengeAreas: ["Partnership conflicts", "Eye-related health issues"],
    challengeAreasHi: ["साझेदारी संघर्ष", "आंखों से संबंधित स्वास्थ्य समस्याएं"]
  },
  Moon: {
    careerEffect: "Your Moon Mahadasha enhances public appeal and brings career opportunities through emotional connection. Travel and change may feature prominently.",
    careerEffectHi: "आपका चंद्र महादशा जनता में अपील बढ़ाता है और भावनात्मक संबंध के माध्यम से करियर के अवसर लाता है। यात्रा और परिवर्तन प्रमुख हो सकते हैं।",
    favorableFor: ["Public relations", "Hospitality", "Nursing", "Travel industry"],
    favorableForHi: ["जनसंपर्क", "आतिथ्य", "नर्सिंग", "यात्रा उद्योग"],
    challengeAreas: ["Mental stress", "Career instability"],
    challengeAreasHi: ["मानसिक तनाव", "करियर अस्थिरता"]
  },
  Mars: {
    careerEffect: "Your Mars Mahadasha brings courage, action, and competitive success in career. Technical and physical fields flourish. Leadership through action.",
    careerEffectHi: "आपका मंगल महादशा करियर में साहस, कार्रवाई और प्रतिस्पर्धात्मक सफलता लाता है। तकनीकी और शारीरिक क्षेत्र फलते-फूलते हैं। कार्रवाई के माध्यम से नेतृत्व।",
    favorableFor: ["Engineering", "Military", "Surgery", "Sports", "Real estate"],
    favorableForHi: ["इंजीनियरिंग", "सेना", "सर्जरी", "खेल", "रियल एस्टेट"],
    challengeAreas: ["Anger at workplace", "Conflicts with authority"],
    challengeAreasHi: ["कार्यस्थल पर गुस्सा", "अधिकारियों से संघर्ष"]
  },
  Mercury: {
    careerEffect: "Your Mercury Mahadasha brings intellectual growth, communication skills, and business success. Trade and technology prosper.",
    careerEffectHi: "आपका बुध महादशा बौद्धिक विकास, संचार कौशल और व्यावसायिक सफलता लाता है। व्यापार और तकनीक फलती-फूलती है।",
    favorableFor: ["IT/Software", "Business", "Writing", "Accounting", "Trading"],
    favorableForHi: ["आईटी/सॉफ्टवेयर", "व्यापार", "लेखन", "लेखांकन", "व्यापार"],
    challengeAreas: ["Nervous tension", "Over-analysis paralysis"],
    challengeAreasHi: ["तंत्रिका तनाव", "अति-विश्लेषण पक्षाघात"]
  },
  Jupiter: {
    careerEffect: "Your Jupiter Mahadasha is highly favorable for career expansion, wisdom roles, and financial growth. Teaching, law, and advisory positions flourish.",
    careerEffectHi: "आपका बृहस्पति महादशा करियर विस्तार, ज्ञान भूमिकाओं और वित्तीय विकास के लिए अत्यधिक अनुकूल है। शिक्षण, कानून और सलाहकार पद फलते-फूलते हैं।",
    favorableFor: ["Education", "Finance", "Law", "Spirituality", "Advisory roles"],
    favorableForHi: ["शिक्षा", "वित्त", "कानून", "आध्यात्मिकता", "सलाहकार भूमिकाएं"],
    challengeAreas: ["Over-expansion", "Weight gain from sedentary work"],
    challengeAreasHi: ["अति-विस्तार", "गतिहीन कार्य से वजन बढ़ना"]
  },
  Venus: {
    careerEffect: "Your Venus Mahadasha brings creative success, luxury, and artistic recognition. Entertainment, fashion, and beauty fields prosper.",
    careerEffectHi: "आपका शुक्र महादशा रचनात्मक सफलता, विलासिता और कलात्मक मान्यता लाता है। मनोरंजन, फैशन और सौंदर्य क्षेत्र फलते-फूलते हैं।",
    favorableFor: ["Arts", "Entertainment", "Fashion", "Luxury goods", "Hospitality"],
    favorableForHi: ["कला", "मनोरंजन", "फैशन", "विलासिता सामान", "आतिथ्य"],
    challengeAreas: ["Distraction from pleasures", "Financial extravagance"],
    challengeAreasHi: ["सुखों से विचलन", "वित्तीय फिजूलखर्ची"]
  },
  Saturn: {
    careerEffect: "Your Saturn Mahadasha is the most important for career establishment. Hard work pays off, and lasting success is achieved through discipline and persistence.",
    careerEffectHi: "आपका शनि महादशा करियर स्थापना के लिए सबसे महत्वपूर्ण है। कड़ी मेहनत का फल मिलता है, और अनुशासन और दृढ़ता के माध्यम से स्थायी सफलता प्राप्त होती है।",
    favorableFor: ["Government", "Agriculture", "Mining", "Real estate", "Large organizations"],
    favorableForHi: ["सरकार", "कृषि", "खनन", "रियल एस्टेट", "बड़े संगठन"],
    challengeAreas: ["Delays and obstacles", "Joint pain from overwork"],
    challengeAreasHi: ["देरी और बाधाएं", "अधिक काम से जोड़ों में दर्द"]
  },
  Rahu: {
    careerEffect: "Your Rahu Mahadasha brings unconventional career paths, foreign opportunities, and technological advancement. Sudden rise possible but with instability.",
    careerEffectHi: "आपका राहु महादशा अपरंपरागत करियर पथ, विदेशी अवसर और तकनीकी उन्नति लाता है। अचानक उत्थान संभव लेकिन अस्थिरता के साथ।",
    favorableFor: ["Technology", "Foreign jobs", "Research", "Mass media", "Politics"],
    favorableForHi: ["तकनीक", "विदेशी नौकरियां", "शोध", "मास मीडिया", "राजनीति"],
    challengeAreas: ["Confusion", "Unethical temptations"],
    challengeAreasHi: ["भ्रम", "अनैतिक प्रलोभन"]
  },
  Ketu: {
    careerEffect: "Your Ketu Mahadasha brings spiritual dimensions to career and detachment from material success. Specialized, research, and healing careers favor.",
    careerEffectHi: "आपका केतु महादशा करियर में आध्यात्मिक आयाम लाता है और भौतिक सफलता से वैराग्य। विशेष, शोध और उपचार करियर अनुकूल।",
    favorableFor: ["Spiritual work", "Research", "Alternative healing", "Programming"],
    favorableForHi: ["आध्यात्मिक कार्य", "शोध", "वैकल्पिक उपचार", "प्रोग्रामिंग"],
    challengeAreas: ["Loss of direction", "Detachment from career goals"],
    challengeAreasHi: ["दिशा का नुकसान", "करियर लक्ष्यों से वैराग्य"]
  }
};

// ============================================
// BNN-SPECIFIC CAREER TRIGGERING TRANSITS
// ============================================

export interface CareerTransitTrigger {
  transitPlanet: GrahaName;
  overHouse: number;
  trigger: string;
  triggerHi: string;
  duration: string;
  durationHi: string;
}

export const CAREER_TRANSIT_TRIGGERS: {
  planet: GrahaName;
  over10th: string;
  over10thHi: string;
  overSaturn: string;
  overSaturnHi: string;
  duration: string;
  durationHi: string;
}[] = [
  {
    planet: 'Jupiter',
    over10th: "Jupiter transiting your 10th house brings major career advancement, promotion, and recognition. This is your time for professional expansion.",
    over10thHi: "बृहस्पति का आपके 10वें भाव से गोचर प्रमुख करियर उन्नति, पदोन्नति और मान्यता लाता है। यह आपके पेशेवर विस्तार का समय है।",
    overSaturn: "Jupiter over your natal Saturn activates Karmakaraka and brings career blessings, wisdom in work, and removal of obstacles.",
    overSaturnHi: "बृहस्पति का आपके जन्म शनि पर गोचर कर्मकारक को सक्रिय करता है और करियर आशीर्वाद, कार्य में ज्ञान और बाधाओं का निवारण लाता है।",
    duration: "1 year in each sign",
    durationHi: "प्रत्येक राशि में 1 वर्ष"
  },
  {
    planet: 'Saturn',
    over10th: "Saturn transiting your 10th house is a crucial period for career restructuring. You face tests but emerge with lasting authority and responsibility.",
    over10thHi: "शनि का आपके 10वें भाव से गोचर करियर पुनर्गठन के लिए महत्वपूर्ण अवधि है। आप परीक्षाओं का सामना करते हैं लेकिन स्थायी अधिकार और जिम्मेदारी के साथ उभरते हैं।",
    overSaturn: "Saturn return (over natal Saturn) is the most important career transit. Major career changes, maturity, and life direction shifts occur.",
    overSaturnHi: "शनि वापसी (जन्म शनि पर) सबसे महत्वपूर्ण करियर गोचर है। प्रमुख करियर परिवर्तन, परिपक्वता और जीवन दिशा बदलाव होते हैं।",
    duration: "2.5 years in each sign",
    durationHi: "प्रत्येक राशि में 2.5 वर्ष"
  },
  {
    planet: 'Rahu',
    over10th: "Rahu transiting your 10th house brings sudden career opportunities, unconventional paths, and foreign connections. Rapid but unpredictable growth.",
    over10thHi: "राहु का आपके 10वें भाव से गोचर अचानक करियर अवसर, अपरंपरागत पथ और विदेशी संबंध लाता है। तीव्र लेकिन अप्रत्याशित विकास।",
    overSaturn: "Rahu over your Saturn amplifies ambition and can bring sudden career leaps, but also instability. Stay grounded.",
    overSaturnHi: "राहु का आपके शनि पर गोचर महत्वाकांक्षा को बढ़ाता है और अचानक करियर छलांग ला सकता है, लेकिन अस्थिरता भी। जमीन से जुड़े रहें।",
    duration: "18 months in each sign",
    durationHi: "प्रत्येक राशि में 18 महीने"
  },
  {
    planet: 'Sun',
    over10th: "Sun's annual transit through your 10th house (approximately 1 month) activates career matters. Good time for promotions and recognition.",
    over10thHi: "सूर्य का आपके 10वें भाव से वार्षिक गोचर (लगभग 1 माह) करियर मामलों को सक्रिय करता है। पदोन्नति और मान्यता के लिए अच्छा समय।",
    overSaturn: "Sun over Saturn annually tests your discipline and brings attention to your work ethics and authority.",
    overSaturnHi: "सूर्य का शनि पर वार्षिक गोचर आपके अनुशासन की परीक्षा लेता है और आपकी कार्य नैतिकता और अधिकार पर ध्यान लाता है।",
    duration: "1 month annually",
    durationHi: "वार्षिक रूप से 1 माह"
  },
  {
    planet: 'Mars',
    over10th: "Mars transiting your 10th house brings energy, action, and sometimes conflicts at work. Good for competitive fields and leadership drives.",
    over10thHi: "मंगल का आपके 10वें भाव से गोचर कार्यस्थल पर ऊर्जा, कार्रवाई और कभी-कभी संघर्ष लाता है। प्रतिस्पर्धी क्षेत्रों और नेतृत्व अभियानों के लिए अच्छा।",
    overSaturn: "Mars over Saturn can bring frustration but also the energy to break through career obstacles with determined action.",
    overSaturnHi: "मंगल का शनि पर गोचर निराशा ला सकता है लेकिन दृढ़ कार्रवाई से करियर बाधाओं को तोड़ने की ऊर्जा भी।",
    duration: "45 days in each sign",
    durationHi: "प्रत्येक राशि में 45 दिन"
  }
];
