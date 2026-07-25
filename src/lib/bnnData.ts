// BNN (Bhrighu Nandi Nadi) Comprehensive Data Library
// This data is proprietary research material and should be kept private.
// Contains complete planet significators, combinations, yogas, and remedies.

import { GrahaName } from '@/types/astrology';

// ============= PLANET SIGNIFICATORS (KARAK TATWAS) =============
export interface PlanetSignificator {
  planet: GrahaName;
  english: {
    primaryKarakas: string[];
    professions: string[];
    bodyParts: string[];
    places: string[];
    relatives: string[];
    qualities: string[];
    enemies: GrahaName[];
  };
  hindi: {
    primaryKarakas: string[];
    professions: string[];
    bodyParts: string[];
    places: string[];
    relatives: string[];
    qualities: string[];
  };
  element: 'Fire' | 'Water' | 'Earth' | 'Air' | 'Ether';
  elementHi: string;
}

export const PLANET_SIGNIFICATORS: Record<GrahaName, PlanetSignificator> = {
  Sun: {
    planet: 'Sun',
    english: {
      primaryKarakas: ['Soul', 'Father', 'Son', 'King', 'President', 'Administrator', 'Government', 'Success', 'Development', 'Name and Fame', 'Power', 'Heat', 'Brightness'],
      professions: ['Government Officers', 'Politicians', 'Administrators', 'Leaders', 'Doctors (Heart)', 'Civil Services'],
      bodyParts: ['Heart', 'Right Eye', 'Head', 'Bones', 'Gall Bladder', 'Brain (Touchable Part)'],
      places: ['Capital City', 'Right Side Window of House', 'Temple', 'Government Office'],
      relatives: ['Father', 'Son', 'Paternal Side'],
      qualities: ['Royal', 'Aggressive', 'Ego', 'Angry', 'Commitment'],
      enemies: ['Venus', 'Saturn', 'Rahu']
    },
    hindi: {
      primaryKarakas: ['आत्मा', 'पिता', 'पुत्र', 'राजा', 'राष्ट्रपति', 'प्रशासक', 'सरकार', 'सफलता', 'विकास', 'नाम और यश', 'शक्ति', 'गर्मी'],
      professions: ['सरकारी अधिकारी', 'राजनेता', 'प्रशासक', 'नेता', 'हृदय रोग विशेषज्ञ', 'सिविल सेवा'],
      bodyParts: ['हृदय', 'दायां आंख', 'सिर', 'हड्डियां', 'पित्ताशय'],
      places: ['राजधानी', 'घर की दाईं खिड़की', 'मंदिर', 'सरकारी कार्यालय'],
      relatives: ['पिता', 'पुत्र', 'पितृ पक्ष'],
      qualities: ['राजसी', 'आक्रामक', 'अहंकार', 'क्रोधी', 'प्रतिबद्ध']
    },
    element: 'Fire',
    elementHi: 'अग्नि तत्व'
  },
  Moon: {
    planet: 'Moon',
    english: {
      primaryKarakas: ['Mind', 'Mother', 'Emotions', 'Liquid', 'Travelling', 'Changes', 'News', 'Cold Water', 'Agriculture', 'Food'],
      professions: ['Nurses', 'Hotel Industry', 'Grocery Shop', 'Medical Shop', 'Food Business', 'Marketing', 'Transport', 'Reporters', 'News Readers'],
      bodyParts: ['Mind', 'Breast', 'Stomach', 'Lungs', 'Left Eye', 'Left Chin', 'Urinary Track'],
      places: ['Cow Shed', 'Bathroom', 'Watery Places (Sea, Well, River)', 'Kitchen', 'Left Side Window'],
      relatives: ['Mother', 'Mother-in-law', 'Elder Sister'],
      qualities: ['Emotional', 'Sentimental', 'Mood Swings', 'Saaf Dil (Pure Heart)', 'Travelling Nature'],
      enemies: ['Venus', 'Ketu']
    },
    hindi: {
      primaryKarakas: ['मन', 'माता', 'भावनाएं', 'तरल', 'यात्रा', 'परिवर्तन', 'समाचार', 'ठंडा पानी', 'कृषि', 'भोजन'],
      professions: ['नर्स', 'होटल उद्योग', 'किराना दुकान', 'मेडिकल शॉप', 'खाद्य व्यवसाय', 'मार्केटिंग', 'परिवहन'],
      bodyParts: ['मन', 'स्तन', 'पेट', 'फेफड़े', 'बायां आंख', 'मूत्र पथ'],
      places: ['गोशाला', 'बाथरूम', 'जलीय स्थान', 'रसोई'],
      relatives: ['माता', 'सास', 'बड़ी बहन'],
      qualities: ['भावुक', 'संवेदनशील', 'मूड स्विंग', 'साफ दिल', 'यात्रा प्रवृत्ति']
    },
    element: 'Water',
    elementHi: 'जल तत्व'
  },
  Mars: {
    planet: 'Mars',
    english: {
      primaryKarakas: ['Body', 'Husband (First)', 'Younger Brother', 'Technology', 'Energy', 'Rivalry', 'Disputes', 'Anger', 'Property', 'Land'],
      professions: ['Engineer', 'Police', 'Defense Force', 'Sportsman', 'Surgeon', 'Union Leader', 'Real Estate', 'Construction'],
      bodyParts: ['Blood', 'Muscles', 'Bone Marrow', 'Eye Brows', 'Teeth', 'Semen', 'Bridge of Nose'],
      places: ['Bedroom', 'Oven', 'Fire Place', 'Energy Meter', 'Electrical Areas'],
      relatives: ['Younger Brother', 'Husband (for Female)'],
      qualities: ['Aggressive', 'Adamant', 'Courageous', 'Jhagralu (Quarrelsome)', 'Commitment', 'Dabang (Dominating)'],
      enemies: ['Mercury', 'Saturn', 'Rahu']
    },
    hindi: {
      primaryKarakas: ['शरीर', 'पति (प्रथम)', 'छोटा भाई', 'तकनीक', 'ऊर्जा', 'प्रतिद्वंद्विता', 'विवाद', 'क्रोध', 'संपत्ति', 'भूमि'],
      professions: ['इंजीनियर', 'पुलिस', 'रक्षा बल', 'खिलाड़ी', 'सर्जन', 'यूनियन नेता', 'रियल एस्टेट'],
      bodyParts: ['रक्त', 'मांसपेशियां', 'अस्थि मज्जा', 'भौंहें', 'दांत', 'वीर्य'],
      places: ['शयनकक्ष', 'ओवन', 'अग्निकुंड', 'एनर्जी मीटर'],
      relatives: ['छोटा भाई', 'पति (महिलाओं के लिए)'],
      qualities: ['आक्रामक', 'जिद्दी', 'साहसी', 'झगड़ालू', 'प्रतिबद्ध', 'दबंग']
    },
    element: 'Fire',
    elementHi: 'अग्नि तत्व'
  },
  Mercury: {
    planet: 'Mercury',
    english: {
      primaryKarakas: ['Intellect', 'Education', 'Business', 'Friends', 'Communication', 'Speech', 'Knowledge', 'Diplomacy'],
      professions: ['Teacher', 'Lecturer', 'Professor', 'Scientist', 'Accountant', 'Auditor', 'Writer', 'Astrologer', 'Lawyer', 'Businessman'],
      bodyParts: ['Neck', 'Hands', 'Shoulder', 'Skin', 'Forehead', 'Tongue', 'Vocal Card', 'Throat', 'Nervous System'],
      places: ['Study Room', 'Balcony', 'Garden', 'Park', 'School', 'Library'],
      relatives: ['Youngest Brother/Sister', 'Maternal Uncle', 'Father-in-law', 'Friends', 'Sister', 'Aunt (Bua/Massi)'],
      qualities: ['Intelligent', 'Business-minded', 'Diplomatic', 'Cunning', 'Educated', 'Talkative'],
      enemies: ['Mars', 'Ketu']
    },
    hindi: {
      primaryKarakas: ['बुद्धि', 'शिक्षा', 'व्यापार', 'मित्र', 'संचार', 'वाणी', 'ज्ञान', 'कूटनीति'],
      professions: ['शिक्षक', 'व्याख्याता', 'प्रोफेसर', 'वैज्ञानिक', 'लेखाकार', 'ऑडिटर', 'लेखक', 'ज्योतिषी', 'वकील', 'व्यापारी'],
      bodyParts: ['गर्दन', 'हाथ', 'कंधे', 'त्वचा', 'माथा', 'जीभ', 'स्वर तंत्र', 'गला'],
      places: ['अध्ययन कक्ष', 'बालकनी', 'बगीचा', 'पार्क', 'स्कूल'],
      relatives: ['सबसे छोटा भाई/बहन', 'मामा', 'ससुर', 'मित्र', 'बहन', 'बुआ/मासी'],
      qualities: ['बुद्धिमान', 'व्यापारिक', 'कूटनीतिक', 'चालाक', 'शिक्षित', 'बातूनी']
    },
    element: 'Earth',
    elementHi: 'पृथ्वी तत्व'
  },
  Jupiter: {
    planet: 'Jupiter',
    english: {
      primaryKarakas: ['Jeeva Karaka (for Male)', 'Wisdom', 'Teacher', 'Guide', 'Religion', 'Spirituality', 'Growth', 'Respect', 'Divinity', 'Bank Balance'],
      professions: ['Teacher', 'Preacher', 'Judge', 'Education Minister', 'Doctor', 'Advisor', 'CA/CS', 'Banker', 'Astrologer'],
      bodyParts: ['Nose', 'Fat', 'Thigh', 'Leg', 'Feet', 'Liver', 'Lungs (Oxygen)'],
      places: ['Puja Room', 'Temple', 'Endowment Department', 'Bank', 'Court'],
      relatives: ['Second Husband', 'Mentor', 'Guru'],
      qualities: ['Dharmik (Religious)', 'Sanskari (Cultured)', 'Patient', 'Self-esteemed', 'Salahakar (Advisor)'],
      enemies: []
    },
    hindi: {
      primaryKarakas: ['जीव कारक (पुरुष)', 'ज्ञान', 'शिक्षक', 'मार्गदर्शक', 'धर्म', 'आध्यात्मिकता', 'विकास', 'सम्मान', 'दिव्यता', 'बैंक बैलेंस'],
      professions: ['शिक्षक', 'प्रचारक', 'न्यायाधीश', 'शिक्षा मंत्री', 'डॉक्टर', 'सलाहकार', 'CA/CS', 'बैंकर', 'ज्योतिषी'],
      bodyParts: ['नाक', 'वसा', 'जांघ', 'पैर', 'यकृत', 'फेफड़े (ऑक्सीजन)'],
      places: ['पूजा कक्ष', 'मंदिर', 'धर्मार्थ विभाग', 'बैंक', 'न्यायालय'],
      relatives: ['द्वितीय पति', 'गुरु', 'मार्गदर्शक'],
      qualities: ['धार्मिक', 'संस्कारी', 'धैर्यवान', 'स्वाभिमानी', 'सलाहकार']
    },
    element: 'Ether',
    elementHi: 'आकाश तत्व'
  },
  Venus: {
    planet: 'Venus',
    english: {
      primaryKarakas: ['Jeeva Karaka (for Female)', 'Wife (First)', 'Money', 'Wealth', 'Finance', 'Luxuries', 'Love', 'Marriage', 'Beauty', 'Vehicles', 'House'],
      professions: ['Banking', 'Finance', 'Money Lending', 'Cloth Merchant', 'Music', 'Acting', 'Dance', 'Beauty Parlor', 'Jeweler', 'Interior Designer'],
      bodyParts: ['Cheeks', 'Semen', 'Sperm', 'Uterus', 'Ovaries', 'Right Chin', 'Heart', 'Private Organs', 'Kidney'],
      places: ['Kitchen', 'Dancing Hall', 'Cinema Theatre', 'Fancy Stores', 'Wine Shop'],
      relatives: ['Wife (First)', 'Younger Sister', 'Daughter', 'Daughter-in-Law', 'Elder Sister (Badi Behan)'],
      qualities: ['Romantic', 'Luxurious', 'Dhanwaan (Wealthy)', 'Beautiful', 'Artistic'],
      enemies: ['Sun', 'Moon', 'Ketu']
    },
    hindi: {
      primaryKarakas: ['जीव कारक (महिला)', 'पत्नी (प्रथम)', 'धन', 'संपत्ति', 'वित्त', 'विलासिता', 'प्रेम', 'विवाह', 'सौंदर्य', 'वाहन', 'घर'],
      professions: ['बैंकिंग', 'वित्त', 'साहूकारी', 'कपड़ा व्यापारी', 'संगीत', 'अभिनय', 'नृत्य', 'ब्यूटी पार्लर', 'जौहरी'],
      bodyParts: ['गाल', 'वीर्य', 'शुक्राणु', 'गर्भाशय', 'अंडाशय', 'दायां ठोड़ी', 'हृदय', 'गुप्तांग', 'गुर्दा'],
      places: ['रसोई', 'नृत्य हॉल', 'सिनेमा थिएटर', 'फैंसी स्टोर'],
      relatives: ['पत्नी (प्रथम)', 'छोटी बहन', 'बेटी', 'बहू', 'बड़ी बहन'],
      qualities: ['रोमांटिक', 'विलासी', 'धनवान', 'सुंदर', 'कलात्मक']
    },
    element: 'Water',
    elementHi: 'जल तत्व'
  },
  Saturn: {
    planet: 'Saturn',
    english: {
      primaryKarakas: ['Karma Karaka', 'Work', 'Profession', 'Industry', 'Slowness', 'Elder Brother', 'Delay', 'Hardship', 'Discipline', 'Judge'],
      professions: ['Judge', 'Industry Worker', 'Oil Mines', 'Low Paid Servant', 'Engineer (Technical)', 'Civil Engineer', 'Police Station', 'Politician'],
      bodyParts: ['Chin', 'Feet', 'Buttocks', 'Anus', 'Knees', 'Fore Leg', 'Digestive Bladder', 'Nervous System'],
      places: ['Store Room', 'Dump Yard', 'Dust Bin', 'Grinding Stone', 'Dining Hall', 'Jail', 'Thana (Police Station)'],
      relatives: ['Elder Brother', 'Third Husband', 'Chacha (Paternal Uncle)', 'Tau (Elder Uncle)'],
      qualities: ['Professional', 'Delayed', 'Dukhi (Suffering)', 'Per Dard (Leg Pain)', 'Chalak (Clever)', 'Disciplined'],
      enemies: ['Mars', 'Ketu', 'Sun', 'Moon']
    },
    hindi: {
      primaryKarakas: ['कर्म कारक', 'काम', 'पेशा', 'उद्योग', 'धीमापन', 'बड़ा भाई', 'देरी', 'कठिनाई', 'अनुशासन', 'न्यायाधीश'],
      professions: ['न्यायाधीश', 'उद्योग कर्मी', 'तेल खदान', 'कम वेतन वाला नौकर', 'तकनीकी इंजीनियर', 'सिविल इंजीनियर'],
      bodyParts: ['ठोड़ी', 'पैर', 'नितंब', 'गुदा', 'घुटने', 'पिंडली', 'पाचन मूत्राशय'],
      places: ['स्टोर रूम', 'कूड़ादान', 'डस्ट बिन', 'चक्की', 'भोजनालय', 'जेल', 'थाना'],
      relatives: ['बड़ा भाई', 'तीसरा पति', 'चाचा', 'ताऊ'],
      qualities: ['पेशेवर', 'विलंबित', 'दुखी', 'पैर दर्द', 'चालाक', 'अनुशासित']
    },
    element: 'Air',
    elementHi: 'वायु तत्व'
  },
  Rahu: {
    planet: 'Rahu',
    english: {
      primaryKarakas: ['Paternal Grand Father', 'Foreign Country', 'Maya (Illusion)', 'Corruption', 'Hidden Things', 'Technology', 'Large/Big', 'Multi', 'Darkness', 'Shade'],
      professions: ['CBI Officer', 'Detective', 'Defense', 'Smuggling', 'Photography', 'TV', 'Cinema', 'Computer', 'Software', 'Graphics', 'Printing', 'Pilot', 'Airline'],
      bodyParts: ['Head', 'Mouth', 'Ears', 'Lips', 'Intestines', 'Rectum', 'Testicles'],
      places: ['Main Entrance', 'Main Door', 'Old House', 'Dark Room', 'Big Hall', 'Tower', 'Open Terrace', 'Grave Yard', 'Mosque'],
      relatives: ['Paternal Grand Father (Dada Ji)'],
      qualities: ['Struggle', 'Videsh (Foreign)', 'Rajneeti (Politics)', 'Thana', 'Naukri', 'MNC', 'Jasoos (Spy)', 'Photographer'],
      enemies: ['Moon', 'Mars']
    },
    hindi: {
      primaryKarakas: ['दादा जी', 'विदेश', 'माया (भ्रम)', 'भ्रष्टाचार', 'छिपी चीजें', 'प्रौद्योगिकी', 'बड़ा', 'अनेक', 'अंधकार', 'छाया'],
      professions: ['CBI अधिकारी', 'जासूस', 'रक्षा', 'तस्करी', 'फोटोग्राफी', 'टीवी', 'सिनेमा', 'कंप्यूटर', 'सॉफ्टवेयर', 'पायलट'],
      bodyParts: ['सिर', 'मुंह', 'कान', 'होंठ', 'आंतें', 'मलाशय', 'अंडकोष'],
      places: ['मुख्य प्रवेश', 'मुख्य द्वार', 'पुराना घर', 'अंधेरा कमरा', 'बड़ा हॉल', 'टावर', 'छत', 'कब्रिस्तान'],
      relatives: ['दादा जी'],
      qualities: ['संघर्ष', 'विदेश', 'राजनीति', 'थाना', 'नौकरी', 'MNC', 'जासूस', 'फोटोग्राफर']
    },
    element: 'Air',
    elementHi: 'वायु तत्व'
  },
  Ketu: {
    planet: 'Ketu',
    english: {
      primaryKarakas: ['Maternal Grand Father', 'Law', 'Medical', 'Pharmacy', 'Chemical', 'Astrology', 'Religion', 'Occult', 'Spirituality', 'Salvation', 'Obstruction'],
      professions: ['Lawyer', 'Litigation', 'Doctor', 'Chemist', 'Surgeon', 'Astrologer', 'Temple Priest', 'Software Engineer', 'Healer', 'Occultist', 'Tarot Reader'],
      bodyParts: ['Hair', 'Beard', 'Nerves', 'Anus', 'Kamar (Waist)', 'Per (Leg)', 'Piles', 'Prostate'],
      places: ['Staircase', 'Chimney', 'Ventilators', 'Skylight', 'Back Exit', 'Narrow Room', 'Drains', 'Bathroom', 'Hospital', 'Temple', 'Prayer Hall'],
      relatives: ['Maternal Grand Father (Nana Ji)'],
      qualities: ['Dharmik (Religious)', 'Pujari (Priest)', 'Salahkar (Advisor)', 'Kamar Dard (Back Pain)', 'Per Dard (Leg Pain)', 'Spiritual', 'Detached'],
      enemies: ['Mercury', 'Venus', 'Saturn']
    },
    hindi: {
      primaryKarakas: ['नाना जी', 'कानून', 'चिकित्सा', 'फार्मेसी', 'रसायन', 'ज्योतिष', 'धर्म', 'तंत्र-मंत्र', 'आध्यात्मिकता', 'मोक्ष', 'बाधा'],
      professions: ['वकील', 'मुकदमेबाजी', 'डॉक्टर', 'केमिस्ट', 'सर्जन', 'ज्योतिषी', 'मंदिर पुजारी', 'सॉफ्टवेयर इंजीनियर', 'हीलर'],
      bodyParts: ['बाल', 'दाढ़ी', 'नसें', 'गुदा', 'कमर', 'पैर', 'बवासीर', 'प्रोस्टेट'],
      places: ['सीढ़ी', 'चिमनी', 'वेंटिलेटर', 'स्काईलाइट', 'पिछला निकास', 'संकरा कमरा', 'नाली', 'बाथरूम', 'अस्पताल', 'मंदिर'],
      relatives: ['नाना जी'],
      qualities: ['धार्मिक', 'पुजारी', 'सलाहकार', 'कमर दर्द', 'पैर दर्द', 'आध्यात्मिक', 'वैरागी']
    },
    element: 'Ether',
    elementHi: 'आकाश तत्व'
  }
};

// ============= TWO PLANET COMBINATIONS =============
export interface TwoPlanetCombination {
  planet1: GrahaName;
  planet2: GrahaName;
  effect: string;
  effectHi: string;
  detailedEffect: string;
  detailedEffectHi: string;
  career?: string;
  careerHi?: string;
  health?: string;
  healthHi?: string;
  type: 'beneficial' | 'challenging' | 'mixed';
}

export const TWO_PLANET_COMBINATIONS: TwoPlanetCombination[] = [
  // SUN combinations
  { planet1: 'Sun', planet2: 'Moon', effect: 'Father has emotional/marketing/travelling qualities', effectHi: 'पिता में भावनात्मक/मार्केटिंग/यात्रा गुण', detailedEffect: 'Creates emotional intelligence with authority. Father may be in marketing, travel, or emotional work. Good for public relations and government service with people skills.', detailedEffectHi: 'अधिकार के साथ भावनात्मक बुद्धि। पिता मार्केटिंग, यात्रा या भावनात्मक कार्य में हो सकते हैं।', type: 'beneficial' },
  { planet1: 'Sun', planet2: 'Mars', effect: 'Leadership quality, respect in society, Rajneeti/Sena/Govt job', effectHi: 'नेतृत्व गुण, समाज में सम्मान, राजनीति/सेना/सरकारी नौकरी', detailedEffect: 'Surya+Mangal gives self-confidence and social respect. Excellent for politics, army, government jobs, building & construction. Natural leadership qualities.', detailedEffectHi: 'सूर्य+मंगल आत्मविश्वास और सामाजिक सम्मान देता है। राजनीति, सेना, सरकारी नौकरी के लिए उत्कृष्ट।', career: 'Politics, Military, Government, Construction', careerHi: 'राजनीति, सेना, सरकार, निर्माण', type: 'beneficial' },
  { planet1: 'Sun', planet2: 'Mercury', effect: 'Father is educated, astrologer, businessman, intelligent', effectHi: 'पिता शिक्षित, ज्योतिषी, व्यापारी, बुद्धिमान', detailedEffect: 'Creates Budhaditya Yoga. Father has intellectual pursuits, may be in education, business, or astrology. Native gets sharp communication and analytical skills.', detailedEffectHi: 'बुधादित्य योग बनाता है। पिता बौद्धिक कार्यों में, शिक्षा, व्यापार या ज्योतिष में हो सकते हैं।', type: 'beneficial' },
  { planet1: 'Sun', planet2: 'Jupiter', effect: 'Father is banker/astrologer/teacher/doctor/advisor', effectHi: 'पिता बैंकर/ज्योतिषी/शिक्षक/डॉक्टर/सलाहकार', detailedEffect: 'Jeevathma Samyoga - Creates intuitive ability for astrology, Atma Gnana, clairvoyance. Native becomes famous and charismatic. Political success if in politics.', detailedEffectHi: 'जीवात्मा संयोग - ज्योतिष के लिए सहज क्षमता, आत्म ज्ञान, दूरदृष्टि। प्रसिद्धि और करिश्मा मिलता है।', type: 'beneficial' },
  { planet1: 'Sun', planet2: 'Venus', effect: 'Vijay Lakshmi Yoga - Royal comforts and success', effectHi: 'विजय लक्ष्मी योग - राजसी सुख और सफलता', detailedEffect: 'This is called Vijay Lakshmi Yoga giving royal happiness. Father may be wealthy/luxurious. Native gets property, vehicles, romantic nature.', detailedEffectHi: 'यह विजय लक्ष्मी योग कहलाता है जो राजसी सुख देता है। पिता धनवान/विलासी हो सकते हैं।', type: 'beneficial' },
  { planet1: 'Sun', planet2: 'Saturn', effect: 'Father in govt job/law/judge, leg pain issues', effectHi: 'पिता सरकारी नौकरी/कानून/न्यायाधीश में, पैर दर्द समस्या', detailedEffect: 'Creates disciplined authority. Father may be in law, judge, government. Career success after 30-35. Possible leg pain issues. Good for judiciary.', detailedEffectHi: 'अनुशासित अधिकार बनाता है। पिता कानून, न्यायाधीश, सरकार में हो सकते हैं। 30-35 के बाद करियर सफलता।', type: 'mixed' },
  { planet1: 'Sun', planet2: 'Rahu', effect: 'Struggle, problem, thana, naukri, police station connection', effectHi: 'संघर्ष, समस्या, थाना, नौकरी, पुलिस स्टेशन संबंध', detailedEffect: 'Father may face struggles or be connected to police/thana. Unconventional path to success. Foreign connections possible. Need ethical grounding.', detailedEffectHi: 'पिता को संघर्ष या पुलिस/थाना से संबंध। सफलता का अपरंपरागत मार्ग। विदेशी संबंध संभव।', type: 'challenging' },
  { planet1: 'Sun', planet2: 'Ketu', effect: 'Father/native is astrologer/software engineer/pujari/chemist/advocate', effectHi: 'पिता/जातक ज्योतिषी/सॉफ्टवेयर इंजीनियर/पुजारी/केमिस्ट/वकील', detailedEffect: 'Creates spiritual and occult inclinations. Father may be astrologer, chemist, priest, or advocate. Bones/heart/gall bladder issues possible.', detailedEffectHi: 'आध्यात्मिक और तांत्रिक झुकाव बनाता है। पिता ज्योतिषी, केमिस्ट, पुजारी या वकील हो सकते हैं।', health: 'Bones, Heart, Acidity, Gall Bladder issues', healthHi: 'हड्डी, हृदय, एसिडिटी, पित्ताशय समस्याएं', type: 'mixed' },
  
  // MOON combinations
  { planet1: 'Moon', planet2: 'Mars', effect: 'Mother is Gussel/Jhagralu, property/accident issues', effectHi: 'माता गुस्सैल/झगड़ालू, संपत्ति/दुर्घटना मुद्दे', detailedEffect: 'Chandra Mangal Yoga creates dynamic personality. Wealth through property/real estate. Mother may be short-tempered. Possible accidents/operations.', detailedEffectHi: 'चंद्र मंगल योग गतिशील व्यक्तित्व बनाता है। संपत्ति से धन। माता क्रोधी हो सकती हैं।', type: 'mixed' },
  { planet1: 'Moon', planet2: 'Mercury', effect: 'Mother is educated/astrologer/businessman', effectHi: 'माता शिक्षित/ज्योतिषी/व्यापारी', detailedEffect: 'Great for business success. Mother has intellectual pursuits. Intuition about public sentiment. Good for trading, marketing, counseling.', detailedEffectHi: 'व्यापार सफलता के लिए उत्कृष्ट। माता बौद्धिक कार्यों में। जनभावना की समझ।', type: 'beneficial' },
  { planet1: 'Moon', planet2: 'Jupiter', effect: 'Mother is astrologer/teacher/sanskari/doctor/bank', effectHi: 'माता ज्योतिषी/शिक्षक/संस्कारी/डॉक्टर/बैंक', detailedEffect: 'Gaja Kesari Yoga - Mother is cultured, religious, advisor type. Native gets fame, prosperity, wisdom, charitable nature.', detailedEffectHi: 'गजकेसरी योग - माता सुसंस्कृत, धार्मिक, सलाहकार प्रकार। जातक को प्रसिद्धि, समृद्धि, ज्ञान मिलता है।', type: 'beneficial' },
  { planet1: 'Moon', planet2: 'Venus', effect: 'Mother is wealthy, has property/vehicle', effectHi: 'माता धनवान, संपत्ति/वाहन है', detailedEffect: 'Creates artistic soul and beauty appreciation. Mother is wealthy. Happy domestic life. Property may be on loan.', detailedEffectHi: 'कलात्मक आत्मा और सौंदर्य प्रशंसा। माता धनवान। सुखी घरेलू जीवन।', type: 'beneficial' },
  { planet1: 'Moon', planet2: 'Saturn', effect: 'Mother in profession/job/politics, leg pain issues', effectHi: 'माता पेशे/नौकरी/राजनीति में, पैर दर्द', detailedEffect: 'Profession change likely. Mother may be in job/politics. Early difficulties but builds resilience. Leg pain issues possible.', detailedEffectHi: 'पेशा बदलने की संभावना। माता नौकरी/राजनीति में। प्रारंभिक कठिनाइयां लेकिन लचीलापन।', type: 'challenging' },
  { planet1: 'Moon', planet2: 'Rahu', effect: 'Mother in videsh/politics/thana, foreign travel', effectHi: 'माता विदेश/राजनीति/थाना में, विदेश यात्रा', detailedEffect: 'Creates foreign travel yoga. Mother may be abroad or in politics. Daily income fluctuates. Mental restlessness. Success through masses.', detailedEffectHi: 'विदेश यात्रा योग बनाता है। माता विदेश या राजनीति में। दैनिक आय में उतार-चढ़ाव।', type: 'mixed' },
  { planet1: 'Moon', planet2: 'Ketu', effect: 'Mother is dharmik/astrologer/chemist/advocate, health issues', effectHi: 'माता धार्मिक/ज्योतिषी/केमिस्ट/वकील, स्वास्थ्य समस्याएं', detailedEffect: 'Mother is religious, may have leg problems, piles, surgery. Strong intuition and psychic abilities. Daily income problems.', detailedEffectHi: 'माता धार्मिक, पैर की समस्या, बवासीर, सर्जरी हो सकती है। मजबूत अंतर्ज्ञान।', type: 'mixed' },
  
  // MARS combinations
  { planet1: 'Mars', planet2: 'Mercury', effect: 'Education failures, memory issues, brain problems', effectHi: 'शिक्षा में असफलता, स्मृति समस्या, मस्तिष्क समस्याएं', detailedEffect: 'Native may fail in education, forgetfulness, brain issues. But good for technical work - engineering, surgery, technology, competitive exams.', detailedEffectHi: 'शिक्षा में असफलता, भूलने की आदत, मस्तिष्क समस्याएं। लेकिन तकनीकी कार्य के लिए अच्छा।', career: 'Engineering, Surgery, Technology', careerHi: 'इंजीनियरिंग, सर्जरी, प्रौद्योगिकी', type: 'mixed' },
  { planet1: 'Mars', planet2: 'Jupiter', effect: 'Dharma warrior, husband is dharmik/advisor/doctor/judge', effectHi: 'धर्म योद्धा, पति धार्मिक/सलाहकार/डॉक्टर/न्यायाधीश', detailedEffect: 'Noble combination for righteous warriors. Husband (for female) is highly educated, emotional, courageous. Excellent for military leadership, law.', detailedEffectHi: 'धार्मिक योद्धाओं के लिए उदार संयोजन। पति अत्यधिक शिक्षित, भावनात्मक, साहसी।', type: 'beneficial' },
  { planet1: 'Mars', planet2: 'Venus', effect: 'Husband gets wealth after marriage, luxurious', effectHi: 'पति को विवाह के बाद धन, विलासी', detailedEffect: 'Passionate nature, creative energy, romantic intensity. Husband gets riches after marriage. May have younger sister. Spendthrift if Moon also joins.', detailedEffectHi: 'भावुक स्वभाव, रचनात्मक ऊर्जा, रोमांटिक तीव्रता। पति को विवाह के बाद धन।', type: 'beneficial' },
  { planet1: 'Mars', planet2: 'Saturn', effect: 'Husband average education, career problems initially', effectHi: 'पति की औसत शिक्षा, प्रारंभ में करियर समस्याएं', detailedEffect: 'Accident yoga. Husband education average, career disturbed initially but prosperity after marriage. May have elder brother. Leg pain issues.', detailedEffectHi: 'दुर्घटना योग। पति की शिक्षा औसत, प्रारंभ में करियर बाधित लेकिन विवाह के बाद समृद्धि।', health: 'Accidents, Leg pain', healthHi: 'दुर्घटना, पैर दर्द', type: 'challenging' },
  { planet1: 'Mars', planet2: 'Rahu', effect: 'Operation yoga, husband argumentative/greedy/untimely death risk', effectHi: 'ऑपरेशन योग, पति तर्कशील/लालची/असामयिक मृत्यु जोखिम', detailedEffect: 'Creates explosive energy and risk-taking. Husband may be argumentative, wicked, greedy. Possible untimely death to husband. Operation yoga.', detailedEffectHi: 'विस्फोटक ऊर्जा और जोखिम लेना। पति तर्कशील, दुष्ट, लालची हो सकते हैं।', type: 'challenging' },
  { planet1: 'Mars', planet2: 'Ketu', effect: 'Husband is spiritual/miser, piles/operation issues', effectHi: 'पति आध्यात्मिक/कंजूस, बवासीर/ऑपरेशन समस्याएं', detailedEffect: 'Husband may be miser, spiritual, relinquishing type. Inclined towards renunciation. Piles, operation, BP low issues possible.', detailedEffectHi: 'पति कंजूस, आध्यात्मिक, त्यागी प्रकार। त्याग की ओर झुकाव।', health: 'Piles, Operation, Low BP', healthHi: 'बवासीर, ऑपरेशन, कम BP', type: 'mixed' },
  
  // MERCURY combinations
  { planet1: 'Mercury', planet2: 'Jupiter', effect: 'Wisdom with intelligence, teaching ability, CA/CS', effectHi: 'बुद्धि के साथ ज्ञान, शिक्षण क्षमता, CA/CS', detailedEffect: 'Jeeva will study whole life. Excellent for academia, writing, law, finance advisory. Very good for astrology. Hidden treasure of knowledge.', detailedEffectHi: 'जीव जीवनभर पढ़ाई करेगा। शिक्षा, लेखन, कानून, वित्त सलाह के लिए उत्कृष्ट। ज्योतिष के लिए बहुत अच्छा।', type: 'beneficial' },
  { planet1: 'Mercury', planet2: 'Venus', effect: 'Multi-millionaire yoga, duplex house, commercial complex', effectHi: 'करोड़पति योग, डुप्लेक्स हाउस, कमर्शियल कॉम्प्लेक्स', detailedEffect: 'Creates beautiful expression. Luxury independent houses with spacious halls. High-end vehicles. Commercial complex ownership.', detailedEffectHi: 'सुंदर अभिव्यक्ति बनाता है। विशाल हॉल के साथ लक्जरी स्वतंत्र घर। हाई-एंड वाहन।', type: 'beneficial' },
  { planet1: 'Mercury', planet2: 'Saturn', effect: 'Research ability, detail orientation, clever/delayed', effectHi: 'अनुसंधान क्षमता, विस्तार उन्मुखता, चालाक/विलंबित', detailedEffect: 'Creates methodical thinking. Excellent for research, accounting, law, administration. Slow but accurate. Good for long-term projects.', detailedEffectHi: 'व्यवस्थित सोच बनाता है। अनुसंधान, लेखा, कानून, प्रशासन के लिए उत्कृष्ट।', type: 'beneficial' },
  { planet1: 'Mercury', planet2: 'Rahu', effect: 'Bhahu Vidya Yoga (multiple degrees), jail/court case risk', effectHi: 'बहु विद्या योग (कई डिग्री), जेल/कोर्ट केस जोखिम', detailedEffect: 'Creates multiple degrees. Innovative thinking, technology aptitude. Success in foreign trade. Court case/jail risk also present.', detailedEffectHi: 'कई डिग्री बनाता है। नवीन सोच, प्रौद्योगिकी योग्यता। विदेश व्यापार में सफलता। कोर्ट केस/जेल जोखिम।', type: 'mixed' },
  { planet1: 'Mercury', planet2: 'Ketu', effect: 'Educational breaks, brain problems, sister in occult', effectHi: 'शिक्षा में विराम, मस्तिष्क समस्याएं, बहन तांत्रिक क्षेत्र में', detailedEffect: 'Educational breaks likely. Sister/aunt may be in astrology/law/medical. Brain problems, speech issues. Good for software engineering.', detailedEffectHi: 'शिक्षा में विराम। बहन/मासी ज्योतिष/कानून/चिकित्सा में। मस्तिष्क समस्याएं, वाणी दोष।', type: 'challenging' },
  
  // JUPITER combinations
  { planet1: 'Jupiter', planet2: 'Venus', effect: 'Crorepati yoga, beautiful wife, long life, Sanjivani Yoga', effectHi: 'करोड़पति योग, सुंदर पत्नी, दीर्घ आयु, संजीवनी योग', detailedEffect: 'Rupvati Bharya - beautiful wife. Ayurveda connection. Longer life (Sanjivani Yoga). Children progress more than native. May be over-sexy.', detailedEffectHi: 'रूपवती भार्या - सुंदर पत्नी। आयुर्वेद संबंध। दीर्घ आयु (संजीवनी योग)। बच्चे जातक से अधिक प्रगति करते हैं।', type: 'beneficial' },
  { planet1: 'Jupiter', planet2: 'Saturn', effect: 'Dharma-Karmadhipati Yoga, forgiving nature, peace lover', effectHi: 'धर्म-कर्माधिपति योग, क्षमाशील, शांति प्रेमी', detailedEffect: 'Creates pious, virtuous person. Good nose and chin. Forgiving nature, peace lover. Success after 24, promotion every 12 years. May be teacher/manager.', detailedEffectHi: 'पवित्र, सदाचारी व्यक्ति बनाता है। अच्छी नाक और ठोड़ी। क्षमाशील, शांति प्रेमी। 24 के बाद सफलता।', type: 'beneficial' },
  { planet1: 'Jupiter', planet2: 'Rahu', effect: 'Videsh yoga, unethical tendencies, pet/stomach problems', effectHi: 'विदेश योग, अनैतिक प्रवृत्तियां, पेट की समस्याएं', detailedEffect: 'Native goes abroad. May be unethical, involved in corruption. Associated with low class people. Pet/stomach problems.', detailedEffectHi: 'जातक विदेश जाता है। अनैतिक हो सकता है, भ्रष्टाचार में लिप्त। निम्न वर्ग से संबंध। पेट की समस्याएं।', type: 'challenging' },
  { planet1: 'Jupiter', planet2: 'Ketu', effect: 'Spiritual knowledge, occult science, healer', effectHi: 'आध्यात्मिक ज्ञान, तंत्र विज्ञान, हीलर', detailedEffect: 'Spiritual and respectable person. Interested in occult science, theology, healing. May be delayed marriage/child. Philosophical minded.', detailedEffectHi: 'आध्यात्मिक और सम्मानित व्यक्ति। तंत्र विज्ञान, धर्मशास्त्र, उपचार में रुचि। विवाह/संतान में देरी।', type: 'mixed' },
  
  // VENUS combinations
  { planet1: 'Venus', planet2: 'Saturn', effect: 'House after marriage, property in wife name, delayed marriage', effectHi: 'विवाह के बाद घर, पत्नी के नाम संपत्ति, विवाह में देरी', detailedEffect: 'Native purchases house after marriage. Property in wife name. If Sun joins, may live in govt quarters. Delayed marriage.', detailedEffectHi: 'जातक विवाह के बाद घर खरीदता है। पत्नी के नाम संपत्ति। यदि सूर्य जुड़े तो सरकारी क्वार्टर।', type: 'mixed' },
  { planet1: 'Venus', planet2: 'Rahu', effect: 'Nagmani Yoga/Bhahu Dravya Yoga - multi-millionaire, secret affairs', effectHi: 'नागमणि योग/बहु द्रव्य योग - करोड़पति, गुप्त संबंध', detailedEffect: 'Nagmani Yoga - super rich. Big apartments, multiple houses. Property in wife name. Secret love affairs. Female members may suffer.', detailedEffectHi: 'नागमणि योग - अति धनी। बड़े अपार्टमेंट, कई घर। पत्नी के नाम संपत्ति। गुप्त प्रेम संबंध।', type: 'mixed' },
  { planet1: 'Venus', planet2: 'Ketu', effect: 'No house yoga, financial loss, disputes with wife', effectHi: 'घर योग नहीं, आर्थिक हानि, पत्नी से विवाद', detailedEffect: 'No house yoga or has to dispose house due to debts. Financial loss. Wife health problems. Quarrels with wife. Tight clothes habit.', detailedEffectHi: 'घर योग नहीं या कर्ज के कारण घर बेचना। आर्थिक हानि। पत्नी स्वास्थ्य समस्याएं।', type: 'challenging' },
  
  // SATURN combinations
  { planet1: 'Saturn', planet2: 'Rahu', effect: 'Pret Atma Yoga, career after 30, foreign settlement', effectHi: 'प्रेत आत्मा योग, 30 के बाद करियर, विदेश बसावट', detailedEffect: 'Pret Atma Yoga. Career success after 30. Daridra yoga initially. Foreign income and settlement possible. Ups and downs continue.', detailedEffectHi: 'प्रेत आत्मा योग। 30 के बाद करियर सफलता। प्रारंभ में दरिद्र योग। विदेश आय और बसावट।', type: 'challenging' },
  { planet1: 'Saturn', planet2: 'Ketu', effect: 'Berojgari Yoga (unemployment), career problems', effectHi: 'बेरोजगारी योग, करियर समस्याएं', detailedEffect: 'Berojgari Yoga - 100% career destroyed if Ketu is very bad. Career improves after 30 but problems continue. Profession in astrology/law possible.', detailedEffectHi: 'बेरोजगारी योग - अगर केतु बहुत खराब तो 100% करियर नष्ट। 30 के बाद सुधार लेकिन समस्याएं जारी।', type: 'challenging' }
];

// ============= THREE PLANET COMBINATIONS =============
export interface ThreePlanetCombination {
  planets: GrahaName[];
  effect: string;
  effectHi: string;
  category: 'education' | 'career' | 'marriage' | 'wealth' | 'health' | 'spiritual' | 'negative';
}

export const THREE_PLANET_COMBINATIONS: ThreePlanetCombination[] = [
  // Education combinations
  { planets: ['Mercury', 'Sun', 'Jupiter'], effect: 'Success in Education - Guaranteed educational success', effectHi: 'शिक्षा में सफलता - शैक्षिक सफलता की गारंटी', category: 'education' },
  { planets: ['Mercury', 'Venus', 'Jupiter'], effect: 'Higher Studies Yoga - MS, MBA, MTech, MSc', effectHi: 'उच्च शिक्षा योग - MS, MBA, MTech, MSc', category: 'education' },
  { planets: ['Mercury', 'Sun', 'Venus'], effect: 'Research and PhD - Deep research abilities', effectHi: 'अनुसंधान और PhD - गहन शोध क्षमताएं', category: 'education' },
  { planets: ['Mercury', 'Moon', 'Rahu'], effect: 'Studies in Foreign Travel - Education abroad', effectHi: 'विदेश में अध्ययन - विदेश में शिक्षा', category: 'education' },
  { planets: ['Mercury', 'Mars', 'Ketu'], effect: 'No Education - Serious educational obstacles', effectHi: 'शिक्षा नहीं - गंभीर शैक्षिक बाधाएं', category: 'negative' },
  { planets: ['Mercury', 'Moon', 'Ketu'], effect: 'Educational failure due to love failures', effectHi: 'प्रेम विफलता से शिक्षा विफलता', category: 'negative' },
  { planets: ['Mercury', 'Venus', 'Sun'], effect: 'Education in Silk industry, agencies, business', effectHi: 'रेशम उद्योग, एजेंसियों, व्यापार में शिक्षा', category: 'education' },
  { planets: ['Mercury', 'Venus', 'Moon'], effect: 'Knowledge of Bank/Land/House/Arts/Hotel', effectHi: 'बैंक/भूमि/घर/कला/होटल का ज्ञान', category: 'education' },
  { planets: ['Mercury', 'Venus', 'Mars'], effect: 'Arithmetic, Accounts, Agency type business', effectHi: 'अंकगणित, लेखा, एजेंसी प्रकार व्यापार', category: 'education' },
  { planets: ['Mercury', 'Venus', 'Jupiter'], effect: 'Bhahu Vidya - Knowledge in 2-3 fields, MBA', effectHi: 'बहु विद्या - 2-3 क्षेत्रों में ज्ञान, MBA', category: 'education' },
  { planets: ['Mercury', 'Venus', 'Saturn'], effect: 'Business Management, Commercial lines', effectHi: 'व्यवसाय प्रबंधन, वाणिज्यिक क्षेत्र', category: 'education' },
  { planets: ['Mercury', 'Venus', 'Ketu'], effect: 'Gynecology or Sociology specialist/doctor', effectHi: 'स्त्री रोग या समाजशास्त्र विशेषज्ञ/डॉक्टर', category: 'education' },
  { planets: ['Mercury', 'Mars', 'Jupiter'], effect: 'Surgery, Mathematics, Engineering success', effectHi: 'सर्जरी, गणित, इंजीनियरिंग में सफलता', category: 'education' },
  { planets: ['Mercury', 'Mars', 'Rahu'], effect: 'Army, Police, Knowledge of vehicles', effectHi: 'सेना, पुलिस, वाहनों का ज्ञान', category: 'career' },
  { planets: ['Mercury', 'Mars', 'Sun'], effect: 'IAS or Engineering level knowledge', effectHi: 'IAS या इंजीनियरिंग स्तर का ज्ञान', category: 'education' },
  { planets: ['Mercury', 'Moon', 'Mars'], effect: 'Obstructions in gaining knowledge', effectHi: 'ज्ञान प्राप्ति में बाधाएं', category: 'negative' },
  { planets: ['Mercury', 'Jupiter', 'Saturn'], effect: 'Guide, Teacher, Medical practitioner', effectHi: 'मार्गदर्शक, शिक्षक, चिकित्सक', category: 'career' },
  { planets: ['Mercury', 'Jupiter', 'Ketu'], effect: 'Knowledgeable in Vedas and Laws', effectHi: 'वेदों और कानूनों में ज्ञानी', category: 'education' },
  { planets: ['Mercury', 'Sun', 'Ketu'], effect: 'Success in law and politics', effectHi: 'कानून और राजनीति में सफलता', category: 'career' },
  { planets: ['Jupiter', 'Sun', 'Ketu'], effect: 'Success in law and politics', effectHi: 'कानून और राजनीति में सफलता', category: 'career' },
  
  // Speech and Communication
  { planets: ['Mercury', 'Rahu', 'Jupiter'], effect: 'Sweet speech like sugar-candy, speaks fluently', effectHi: 'मिश्री जैसी मीठी वाणी, धाराप्रवाह बोलता है', category: 'career' },
  { planets: ['Mercury', 'Rahu', 'Sun'], effect: 'Straightforward and frank speech', effectHi: 'सीधी और स्पष्ट वाणी', category: 'career' },
  { planets: ['Mercury', 'Rahu', 'Saturn'], effect: 'Rough, abusive, unparliamentary language', effectHi: 'कठोर, अपमानजनक, असंसदीय भाषा', category: 'negative' },
  { planets: ['Mercury', 'Rahu', 'Moon'], effect: 'Amorous words to flirt, tells lies', effectHi: 'प्रेमालाप के शब्द, झूठ बोलता है', category: 'negative' },
  { planets: ['Mercury', 'Rahu', 'Mars'], effect: 'Stammering speech', effectHi: 'हकलाती वाणी', category: 'health' },
  { planets: ['Mercury', 'Rahu', 'Venus'], effect: 'Romantic, rhetorical, grammatical speech', effectHi: 'रोमांटिक, अलंकारिक, व्याकरणिक वाणी', category: 'career' },
  
  // Wealth combinations
  { planets: ['Jupiter', 'Venus', 'Saturn'], effect: 'Dhan Yoga - Wealth accumulation', effectHi: 'धन योग - धन संचय', category: 'wealth' },
  { planets: ['Jupiter', 'Venus', 'Mercury'], effect: 'Multi-millionaire Yoga', effectHi: 'करोड़पति योग', category: 'wealth' },
  { planets: ['Jupiter', 'Saturn', 'Mercury'], effect: 'Dhan Yoga through hard work', effectHi: 'मेहनत से धन योग', category: 'wealth' },
  { planets: ['Venus', 'Saturn', 'Mercury'], effect: 'Dhan Yoga in business', effectHi: 'व्यापार में धन योग', category: 'wealth' },
  { planets: ['Venus', 'Moon', 'Ketu'], effect: 'Property on loan, difficulty repaying', effectHi: 'लोन पर संपत्ति, चुकाने में कठिनाई', category: 'negative' },
  
  // Marriage combinations
  { planets: ['Venus', 'Moon', 'Rahu'], effect: 'Love Marriage for Male - regrets after', effectHi: 'पुरुष के लिए प्रेम विवाह - बाद में पछतावा', category: 'marriage' },
  { planets: ['Venus', 'Moon', 'Sun'], effect: 'Love Marriage - hasty decision', effectHi: 'प्रेम विवाह - जल्दबाजी का फैसला', category: 'marriage' },
  { planets: ['Venus', 'Moon', 'Mars'], effect: 'Love Marriage - passionate but troubled', effectHi: 'प्रेम विवाह - भावुक लेकिन परेशान', category: 'marriage' },
  { planets: ['Venus', 'Moon', 'Mercury'], effect: 'Love Marriage - intellectual connection', effectHi: 'प्रेम विवाह - बौद्धिक संबंध', category: 'marriage' },
  { planets: ['Venus', 'Rahu', 'Mercury'], effect: 'Love Marriage - unconventional', effectHi: 'प्रेम विवाह - अपरंपरागत', category: 'marriage' },
  { planets: ['Mercury', 'Ketu', 'Venus'], effect: 'Love Marriage with multiple affairs', effectHi: 'कई संबंधों के साथ प्रेम विवाह', category: 'marriage' },
  { planets: ['Mercury', 'Ketu', 'Saturn'], effect: 'No Love Marriage - breaks up', effectHi: 'प्रेम विवाह नहीं - टूट जाता है', category: 'marriage' },
  { planets: ['Mercury', 'Ketu', 'Mars'], effect: 'Love marriage fails, violence possible', effectHi: 'प्रेम विवाह विफल, हिंसा संभव', category: 'negative' },
  { planets: ['Mars', 'Venus', 'Ketu'], effect: 'Divorce Yoga - Talak', effectHi: 'तलाक योग', category: 'negative' },
  
  // Career combinations
  { planets: ['Saturn', 'Sun', 'Jupiter'], effect: 'Politics, Govt job, Father\'s profession', effectHi: 'राजनीति, सरकारी नौकरी, पिता का पेशा', category: 'career' },
  { planets: ['Saturn', 'Venus', 'Rahu'], effect: 'Builder, Construction of Apartments', effectHi: 'बिल्डर, अपार्टमेंट निर्माण', category: 'career' },
  { planets: ['Mars', 'Rahu', 'Ketu'], effect: 'IT, Software Engineering, Computers', effectHi: 'IT, सॉफ्टवेयर इंजीनियरिंग, कंप्यूटर', category: 'career' },
  
  // Negative combinations
  { planets: ['Jupiter', 'Venus', 'Ketu'], effect: 'Daridra Yoga with Ketu - financial loss', effectHi: 'केतु के साथ दरिद्र योग - आर्थिक हानि', category: 'negative' },
  { planets: ['Saturn', 'Ketu', 'Moon'], effect: 'Career problems, daily income issues', effectHi: 'करियर समस्याएं, दैनिक आय मुद्दे', category: 'negative' },
  { planets: ['Saturn', 'Rahu', 'Ketu'], effect: 'Career ups and downs always', effectHi: 'करियर में हमेशा उतार-चढ़ाव', category: 'negative' },
  { planets: ['Venus', 'Mars', 'Moon'], effect: 'Husband spendthrift', effectHi: 'पति खर्चीला', category: 'marriage' },
  { planets: ['Mars', 'Moon', 'Ketu'], effect: 'Husband leaves wife often, disturbances', effectHi: 'पति अक्सर पत्नी छोड़ता है, अशांति', category: 'negative' },
  
  // Spiritual combinations
  { planets: ['Jupiter', 'Saturn', 'Ketu'], effect: 'Philosophical and charitable minded', effectHi: 'दार्शनिक और दानशील', category: 'spiritual' },
  
  // Health combinations
  { planets: ['Moon', 'Rahu', 'Saturn'], effect: 'Depression, anxiety, mental issues', effectHi: 'अवसाद, चिंता, मानसिक समस्याएं', category: 'health' },
  { planets: ['Moon', 'Ketu', 'Saturn'], effect: 'Depression, mental health problems', effectHi: 'अवसाद, मानसिक स्वास्थ्य समस्याएं', category: 'health' },
  { planets: ['Mars', 'Rahu', 'Saturn'], effect: 'Accidents, operations, injuries', effectHi: 'दुर्घटनाएं, ऑपरेशन, चोटें', category: 'health' }
];

// ============= SPECIAL DHANA YOGAS =============
export interface DhanaYoga {
  name: string;
  nameHi: string;
  planets: GrahaName[];
  conditions: string;
  conditionsHi: string;
  effects: string[];
  effectsHi: string[];
}

export const DHANA_YOGAS: DhanaYoga[] = [
  {
    name: 'Multi-Millionaire Yoga',
    nameHi: 'करोड़पति योग',
    planets: ['Venus', 'Mercury'],
    conditions: 'Venus conjoined with Mercury',
    conditionsHi: 'शुक्र बुध के साथ युक्त',
    effects: ['Well furnished luxury independent houses', 'Commercial complex', 'Landed properties', 'High-end vehicles (Range Rover, Jaguar, Audi, Tesla)'],
    effectsHi: ['सुसज्जित विलासी स्वतंत्र घर', 'कमर्शियल कॉम्प्लेक्स', 'भूमि संपत्ति', 'हाई-एंड वाहन']
  },
  {
    name: 'Bhahu Dravya Yoga / Nagmani Yoga',
    nameHi: 'बहु द्रव्य योग / नागमणि योग',
    planets: ['Venus', 'Rahu'],
    conditions: 'Venus conjoined with Rahu (especially when Rahu degrees higher)',
    conditionsHi: 'शुक्र राहु के साथ युक्त (विशेषकर जब राहु की डिग्री अधिक हो)',
    effects: ['Big Apartments or Duplex', 'Multi-storied Building', 'More than two houses', 'Property in wife\'s name', 'Multiple vehicles, buses, trucks', 'Multi-millionaire status', 'Secret love affairs'],
    effectsHi: ['बड़े अपार्टमेंट या डुप्लेक्स', 'बहुमंजिला इमारत', 'दो से अधिक घर', 'पत्नी के नाम संपत्ति', 'कई वाहन, बसें, ट्रक', 'करोड़पति', 'गुप्त प्रेम संबंध']
  },
  {
    name: 'Daridra Yoga (Poverty)',
    nameHi: 'दरिद्र योग',
    planets: ['Jupiter', 'Venus', 'Saturn', 'Mercury', 'Ketu'],
    conditions: 'All these planets connected with Ketu affliction',
    conditionsHi: 'ये सभी ग्रह केतु पीड़ा से जुड़े',
    effects: ['Financial losses', 'Unemployment issues', 'Daily income problems'],
    effectsHi: ['आर्थिक नुकसान', 'बेरोजगारी समस्याएं', 'दैनिक आय समस्याएं']
  },
  {
    name: 'Padma Yoga (Royal House)',
    nameHi: 'पद्म योग (शाही घर)',
    planets: ['Venus', 'Mercury', 'Moon', 'Ketu'],
    conditions: 'Venus + Mercury + Moon + Ketu in watery signs (North direction)',
    conditionsHi: 'शुक्र + बुध + चंद्र + केतु जलीय राशियों में (उत्तर दिशा)',
    effects: ['House of royalty', 'Padma symbol on palm', 'Extreme luxury'],
    effectsHi: ['राजसी घर', 'हथेली पर पद्म चिन्ह', 'अत्यंत विलासिता']
  }
];

// ============= BNN REMEDIES =============
export interface BNNRemedy {
  planet: GrahaName;
  badHouses: number[];
  mantras: string[];
  mantrasHi: string[];
  donations: string[];
  donationsHi: string[];
  worship: string[];
  worshipHi: string[];
  other: string[];
  otherHi: string[];
}

export const BNN_REMEDIES: Record<GrahaName, BNNRemedy> = {
  Sun: {
    planet: 'Sun',
    badHouses: [6, 7, 8, 12],
    mantras: ['Om Hraam Hreem Hraum Sah Suryaye Namaha', 'Aditya Hridayam', 'Om Namo Bhagwate Vasudevaye', 'Vishnu Sahastranaam'],
    mantrasHi: ['ओम ह्रां ह्रीं ह्रौं सः सूर्याय नमः', 'आदित्य हृदयम', 'ओम नमो भगवते वासुदेवाय', 'विष्णु सहस्त्रनाम'],
    donations: ['Wheat (Gehu)', 'Atta (flour)', 'Gur (jaggery) with Mars', 'Copper items'],
    donationsHi: ['गेहूं', 'आटा', 'गुड़ (मंगल के साथ)', 'तांबे की वस्तुएं'],
    worship: ['Offer water to Sun within 1 hour of sunrise', 'Vishnu ji ko Mukut chadhao', 'Vishnu ji ko Besan ke ladoo (don\'t bring back home)'],
    worshipHi: ['सूर्योदय के 1 घंटे के भीतर सूर्य को जल अर्पित करें', 'विष्णु जी को मुकुट चढ़ाएं', 'विष्णु जी को बेसन के लड्डू (घर वापस न लाएं)'],
    other: ['Serve your father', 'Press father\'s feet'],
    otherHi: ['पिता की सेवा करें', 'पिता के पैर दबाएं']
  },
  Moon: {
    planet: 'Moon',
    badHouses: [6, 8, 12],
    mantras: ['Om chant daily', 'Om Namah Shivaye', 'Moon Beej Mantra'],
    mantrasHi: ['ओम का जाप प्रतिदिन', 'ओम नमः शिवाय', 'चंद्र बीज मंत्र'],
    donations: ['Don\'t donate milk/water if Moon in 6/8 house', 'Chandi (silver) glass for drinking water'],
    donationsHi: ['6/8 भाव में चंद्रमा हो तो दूध/पानी दान न करें', 'चांदी के गिलास में पानी पिएं'],
    worship: ['Offer water to Moon on Poornima', 'Kachi lassi to Moon', 'Ekadashi vrat', 'Offer jal on Shivling', 'Shivling pe doodh chadhao', 'Monday fasting'],
    worshipHi: ['पूर्णिमा को चंद्रमा को जल अर्पित करें', 'कच्ची लस्सी चंद्रमा को', 'एकादशी व्रत', 'शिवलिंग पर जल', 'शिवलिंग पर दूध', 'सोमवार व्रत'],
    other: ['Meditate daily', 'Serve your mother', 'Bathe with milk mixed in water', 'Look at the Moon'],
    otherHi: ['प्रतिदिन ध्यान करें', 'माता की सेवा करें', 'दूध मिला पानी से नहाएं', 'चंद्रमा को निहारें']
  },
  Mercury: {
    planet: 'Mercury',
    badHouses: [3, 4, 8, 12],
    mantras: ['Om Budhaya Namaha', 'Durga Chalisa', 'Durga Mantra', 'Vishnu Sahastranaam', 'Durga Saptashati', 'Ganesh Atharvashirsha'],
    mantrasHi: ['ओम बुधाय नमः', 'दुर्गा चालीसा', 'दुर्गा मंत्र', 'विष्णु सहस्त्रनाम', 'दुर्गा सप्तशती', 'गणेश अथर्वशीर्ष'],
    donations: ['Donate clothes to Hijras/transgenders', 'Green Moong dal soaked and given to birds', 'Hari Churiya, Hari Bindi, money to transgenders'],
    donationsHi: ['हिजड़ों को कपड़े दान करें', 'हरी मूंग दाल भिगोकर पक्षियों को', 'हरी चूड़ी, हरी बिंदी, पैसे हिजड़ों को'],
    worship: ['Feed goat daily', 'Touch feet of small girls daily', 'Light dia for Durga Mata', 'Vishnu ji ki pooja', 'Hara Moong dal on Shivling regularly'],
    worshipHi: ['बकरी को चारा खिलाएं', 'प्रतिदिन छोटी कन्याओं के पैर छुएं', 'दुर्गा माता को दिया जलाएं', 'विष्णु जी की पूजा', 'हरी मूंग दाल शिवलिंग पर'],
    other: ['Wednesday emerald if suitable', 'Mercury remedies help in job/business interviews'],
    otherHi: ['बुधवार को पन्ना यदि उपयुक्त हो', 'बुध उपाय नौकरी/व्यापार इंटरव्यू में मदद करते हैं']
  },
  Mars: {
    planet: 'Mars',
    badHouses: [3, 4, 8],
    mantras: ['Hanuman Chalisa 7/100 times', 'Sunderkand', 'Bajrang Baan', 'Mars Beej Mantra'],
    mantrasHi: ['हनुमान चालीसा 7/100 बार', 'सुंदरकांड', 'बजरंग बाण', 'मंगल बीज मंत्र'],
    donations: ['Gurr (jaggery) donation', 'Lal Masoor dal donation', 'Sweets in Bhandara'],
    donationsHi: ['गुड़ दान', 'लाल मसूर दाल दान', 'भंडारे में मिठाई'],
    worship: ['43 days flow Batase in water', '43 days flow Revdi in water', 'Gur ki dali in water', 'Hanuman ji ko chola (for gents)', 'Neem tree ko jal', 'Lal Masoor dal on Shivling'],
    worshipHi: ['43 दिन बताशे पानी में बहाएं', '43 दिन रेवड़ी पानी में बहाएं', 'गुड़ की डली पानी में', 'हनुमान जी को चोला (पुरुषों के लिए)', 'नीम के पेड़ को जल', 'लाल मसूर दाल शिवलिंग पर'],
    other: ['Wear red coral after consultation', 'Keep square silver piece in pocket', 'Offer sindoor to Hanuman on Tuesday'],
    otherHi: ['परामर्श के बाद मूंगा धारण करें', 'जेब में चौकोर चांदी का टुकड़ा', 'मंगलवार को हनुमान को सिंदूर']
  },
  Jupiter: {
    planet: 'Jupiter',
    badHouses: [6, 8, 10],
    mantras: ['Guru Stotra', 'Guru Chalisa', 'Vishnu Sahastranaam', 'Any Vishnu ji pooja'],
    mantrasHi: ['गुरु स्तोत्र', 'गुरु चालीसा', 'विष्णु सहस्त्रनाम', 'कोई भी विष्णु जी पूजा'],
    donations: ['Channe ki dal: 6H=600gm, 8H=800gm to temple', 'Haldi ki ganthe: 6pcs for 6H, 8pcs for 8H to temple', 'Papita to temple'],
    donationsHi: ['चने की दाल: 6वें भाव=600ग्राम, 8वें भाव=800ग्राम मंदिर में', 'हल्दी की गांठें: 6वें के लिए 6, 8वें के लिए 8 मंदिर में', 'पपीता मंदिर में'],
    worship: ['Temple seva (especially for Guru+Shani)', 'Jal to Kele ke paudhe', 'Jal to Peepal (not on Sunday)', 'Light dia on Peepal daily', 'Channa dal on Shivling', 'Bathe with Haldi water'],
    worshipHi: ['मंदिर सेवा (विशेषकर गुरु+शनि)', 'केले के पौधे को जल', 'पीपल को जल (रविवार को नहीं)', 'पीपल पर दीया जलाएं', 'चना दाल शिवलिंग पर', 'हल्दी पानी से नहाएं'],
    other: ['Eat papita daily (not in pregnancy)', 'Wear Haldi ganth or Peela daga or Gold chain'],
    otherHi: ['प्रतिदिन पपीता खाएं (गर्भावस्था में नहीं)', 'हल्दी गांठ या पीला धागा या सोने की चेन पहनें']
  },
  Venus: {
    planet: 'Venus',
    badHouses: [6, 8],
    mantras: ['Shukra Stotra', 'Shukra Mantra', 'Durga ji Mantra', 'Vaibhav Lakshmi Vrat'],
    mantrasHi: ['शुक्र स्तोत्र', 'शुक्र मंत्र', 'दुर्गा जी मंत्र', 'वैभव लक्ष्मी व्रत'],
    donations: ['Dahi to Shivling', 'Ghee to Shivling', 'Ittar to Shivling', 'Mishri in temple', 'Cotton/Ghee to temple'],
    donationsHi: ['शिवलिंग पर दही', 'शिवलिंग पर घी', 'शिवलिंग पर इत्र', 'मंदिर में मिश्री', 'रूई/घी मंदिर में'],
    worship: ['Ghee ka tilak', 'Feed cow daily', 'Light dia for Durga ji', 'Bathe with Dahi'],
    worshipHi: ['घी का तिलक', 'प्रतिदिन गाय को खिलाएं', 'दुर्गा जी को दिया', 'दही से नहाएं'],
    other: ['Wear Sphatik mala', 'Shukra mani gemstone'],
    otherHi: ['स्फटिक माला पहनें', 'शुक्र मणि रत्न']
  },
  Saturn: {
    planet: 'Saturn',
    badHouses: [1, 4, 8, 12],
    mantras: ['Om Namah Shivaye', 'Maha Mrityunjaye', 'Shani Beej Mantra', 'Shani Stotra', 'Shani Chalisa', 'Bhairav Chalisa/Mantra'],
    mantrasHi: ['ओम नमः शिवाय', 'महा मृत्युंजय', 'शनि बीज मंत्र', 'शनि स्तोत्र', 'शनि चालीसा', 'भैरव चालीसा/मंत्र'],
    donations: ['Sarso ka tel', 'Kala Udad dal to poor', 'Badi kachoori to poor', 'Feed blind people (for finance/income problems)'],
    donationsHi: ['सरसों का तेल', 'गरीबों को काला उड़द दाल', 'गरीबों को बड़ी कचौड़ी', 'अंधों को खिलाएं (वित्त/आय समस्या के लिए)'],
    worship: ['Jal to Peepal', 'Jal/Doodh to Shivling', 'Bhairav ji ki pooja', 'Kala Udad dal on Shivling'],
    worshipHi: ['पीपल को जल', 'शिवलिंग पर जल/दूध', 'भैरव जी की पूजा', 'काला उड़द दाल शिवलिंग पर'],
    other: ['Feed buffalo', 'Feed beggars', 'Saturday fasting'],
    otherHi: ['भैंसे को खिलाएं', 'भिखारियों को खिलाएं', 'शनिवार व्रत']
  },
  Rahu: {
    planet: 'Rahu',
    badHouses: [1, 2, 4, 5, 7, 8, 9, 12],
    mantras: ['Saraswati Chalisa', 'Saraswati Mantra', 'Ganesh Atharvashirsha', 'Bhairav Chalisa/Mantra', 'Saraswati Gayatri Mantra', 'Bhairav Gayatri Mantra', 'Rudra Abhishek'],
    mantrasHi: ['सरस्वती चालीसा', 'सरस्वती मंत्र', 'गणेश अथर्वशीर्ष', 'भैरव चालीसा/मंत्र', 'सरस्वती गायत्री मंत्र', 'भैरव गायत्री मंत्र', 'रुद्र अभिषेक'],
    donations: ['Chai patti', 'Mooli to sweeper', 'Desi shrab (get on Saturday, keep at bedside, offer to Bhairav ji on Sunday - if both Rahu and Shani afflicted)', 'Beedi/Tambaco to poor', 'Koyla to dhobi'],
    donationsHi: ['चाय पत्ती', 'झाड़ूवाले को मूली', 'देसी शराब (शनिवार लाएं, सरहाने रखें, रविवार को भैरव जी को - अगर राहु और शनि दोनों पीड़ित)', 'गरीबों को बीड़ी/तंबाकू', 'धोबी को कोयला'],
    worship: ['7 pieces Mangoor machli flow in water', 'Atta ki goliya to fish', 'Feed elephant', 'Bajra to pigeons', 'Deepak for Saraswati ji', 'Feed handicapped people'],
    worshipHi: ['7 टुकड़े मंगूर मछली पानी में', 'आटे की गोलियां मछली को', 'हाथी को खिलाएं', 'कबूतरों को बाजरा', 'सरस्वती जी को दीपक', 'विकलांगों को खिलाएं'],
    other: ['Feed handicapped people'],
    otherHi: ['विकलांगों को खिलाएं']
  },
  Ketu: {
    planet: 'Ketu',
    badHouses: [1, 3, 4, 6, 7, 8],
    mantras: ['Ganesh Atharvashirsha', 'Rudra Abhishek', 'Sarp Vedik Mantra'],
    mantrasHi: ['गणेश अथर्वशीर्ष', 'रुद्र अभिषेक', 'सर्प वैदिक मंत्र'],
    donations: ['Kale Udad with skin flow in water', 'Black-white check blanket donation', 'Kele (3) donation', 'Black-white til to Ganesh ji', 'Blanket to lepers/ashram'],
    donationsHi: ['छिलके वाले काले उड़द पानी में', 'काले-सफेद चेक कंबल दान', 'केले (3) दान', 'काले-सफेद तिल गणेश जी को', 'कोढ़ियों/आश्रम को कंबल'],
    worship: ['Durva to Ganesh ji', 'Serve lepers/leper ashram', 'Kela to cow'],
    worshipHi: ['गणेश जी को दूर्वा', 'कोढ़ियों/कोढ़ी आश्रम की सेवा', 'गाय को केला'],
    other: ['Feed dog every day', 'Adopt a black dog'],
    otherHi: ['प्रतिदिन कुत्ते को खिलाएं', 'काला कुत्ता पालें']
  }
};

// ============= HOUSE-BASED BODY PARTS (MEDICAL ASTROLOGY) =============
export const HOUSE_BODY_PARTS: Record<number, { english: string[]; hindi: string[] }> = {
  1: { english: ['Head above neck', 'Nose', 'Face'], hindi: ['गर्दन के ऊपर का सिर', 'नाक', 'चेहरा'] },
  2: { english: ['Neck', 'Right Eye', 'Throat'], hindi: ['गर्दन', 'दाहिना आंख', 'गला'] },
  3: { english: ['Shoulders', 'Hands', 'Right Ear'], hindi: ['कंधे', 'हाथ', 'दाहिना कान'] },
  4: { english: ['Heart', 'Lungs', 'Back of chest'], hindi: ['हृदय', 'फेफड़े', 'छाती का पिछला हिस्सा'] },
  5: { english: ['Stomach', 'Upper belly', 'Navel', 'Spine behind navel'], hindi: ['पेट', 'ऊपरी पेट', 'नाभि', 'नाभि के पीछे रीढ़'] },
  6: { english: ['Lower belly', 'Spine behind lower belly'], hindi: ['निचला पेट', 'निचले पेट के पीछे रीढ़'] },
  7: { english: ['Private organs', 'Prostate', 'Fissure'], hindi: ['गुप्तांग', 'प्रोस्टेट', 'फिशर'] },
  8: { english: ['Private parts'], hindi: ['गुप्त अंग'] },
  9: { english: ['Thighs'], hindi: ['जांघें'] },
  10: { english: ['Knees'], hindi: ['घुटने'] },
  11: { english: ['Calf muscles', 'Left Ear'], hindi: ['पिंडलियां', 'बाएं कान'] },
  12: { english: ['Feet soles', 'Left Eye'], hindi: ['पैरों के तलवे', 'बाएं आंख'] }
};

// ============= RAHU/KETU GOOD/BAD HOUSES =============
export const RAHU_HOUSE_EFFECTS: Record<number, 'good' | 'bad' | 'mixed'> = {
  1: 'mixed', 2: 'bad', 3: 'good', 4: 'mixed', 5: 'mixed',
  6: 'good', 7: 'mixed', 8: 'bad', 9: 'bad', 10: 'good', 11: 'good', 12: 'bad'
};

export const KETU_HOUSE_EFFECTS: Record<number, 'good' | 'bad' | 'mixed'> = {
  1: 'mixed', 2: 'good', 3: 'bad', 4: 'mixed', 5: 'good',
  6: 'bad', 7: 'mixed', 8: 'bad', 9: 'good', 10: 'good', 11: 'good', 12: 'good'
};

// ============= FOREIGN TRAVEL/SETTLEMENT YOGAS =============
export interface ForeignYoga {
  name: string;
  nameHi: string;
  planets: GrahaName[];
  conditions: string;
  conditionsHi: string;
  type: 'travel' | 'settlement';
}

export const FOREIGN_YOGAS: ForeignYoga[] = [
  { name: 'Foreign Travel Yoga', nameHi: 'विदेश यात्रा योग', planets: ['Rahu', 'Moon'], conditions: 'Rahu + Chandra connection', conditionsHi: 'राहु + चंद्र संयोग', type: 'travel' },
  { name: 'Short Travel Yoga', nameHi: 'छोटी यात्रा योग', planets: ['Ketu', 'Moon'], conditions: 'Ketu + Chandra connection', conditionsHi: 'केतु + चंद्र संयोग', type: 'travel' },
  { name: 'Foreign Settlement + Income', nameHi: 'विदेश बसावट + आय', planets: ['Saturn', 'Rahu'], conditions: 'Shani + Rahu connection', conditionsHi: 'शनि + राहु संयोग', type: 'settlement' },
  { name: 'Foreign Settlement', nameHi: 'विदेश बसावट', planets: ['Saturn', 'Moon', 'Jupiter'], conditions: 'Shani + Chandra + Guru connection', conditionsHi: 'शनि + चंद्र + गुरु संयोग', type: 'settlement' },
  { name: 'Foreign Settlement', nameHi: 'विदेश बसावट', planets: ['Saturn', 'Moon', 'Rahu'], conditions: 'Shani + Chandra + Rahu connection', conditionsHi: 'शनि + चंद्र + राहु संयोग', type: 'settlement' },
  { name: 'Stay away from home once', nameHi: 'घर से दूर एक बार', planets: ['Jupiter', 'Moon'], conditions: 'Guru + Chandra connection', conditionsHi: 'गुरु + चंद्र संयोग', type: 'travel' },
  { name: 'Jeeva goes abroad', nameHi: 'जीव विदेश जाता है', planets: ['Jupiter', 'Rahu'], conditions: 'Guru + Rahu connection', conditionsHi: 'गुरु + राहु संयोग', type: 'travel' }
];

// ============= RETROGRADE PLANET RULES =============
export const RETROGRADE_RULES = {
  english: [
    'Retrograde planets are considered weak and move backward',
    'In BNN, retrograde planets should be placed in the previous house for analysis',
    'Retrograde planets, like Rahu-Ketu wall, delay events to the third round',
    'It is difficult for a planet to cross Rahu-Ketu wall placed next to it',
    'Planets behind Rahu-Ketu or retrograde planets also get affected'
  ],
  hindi: [
    'वक्री ग्रह कमजोर माने जाते हैं और पीछे की ओर चलते हैं',
    'BNN में, वक्री ग्रहों को विश्लेषण के लिए पिछले भाव में रखना चाहिए',
    'वक्री ग्रह, राहु-केतु की दीवार की तरह, घटनाओं को तीसरे राउंड तक विलंबित करते हैं',
    'एक ग्रह के लिए उसके बगल में राहु-केतु की दीवार को पार करना कठिन है',
    'राहु-केतु या वक्री ग्रहों के पीछे के ग्रह भी प्रभावित होते हैं'
  ]
};
