// BNN Remedies (Upaay) Data based on Traditional Vedic Astrology Principles
// These remedies are suggested when planetary progressions activate natal planets

import { GrahaName } from '@/types/astrology';

export interface PlanetaryRemedy {
  planet: GrahaName;
  gemstone: {
    name: { en: string; hi: string };
    weight: string;
    metal: { en: string; hi: string };
    finger: { en: string; hi: string };
    day: { en: string; hi: string };
  };
  mantra: {
    vedic: string;
    beejMantra: string;
    jaapCount: number;
    description: { en: string; hi: string };
  };
  donation: {
    items: { en: string[]; hi: string[] };
    day: { en: string; hi: string };
    time: { en: string; hi: string };
    recipient: { en: string; hi: string };
  };
  fasting: {
    day: { en: string; hi: string };
    food: { en: string; hi: string };
    duration: { en: string; hi: string };
  };
  yantra: {
    name: { en: string; hi: string };
    placement: { en: string; hi: string };
  };
  color: {
    wear: { en: string; hi: string };
    avoid: { en: string; hi: string };
  };
  deity: {
    name: { en: string; hi: string };
    temple: { en: string; hi: string };
  };
  lifestyle: {
    do: { en: string[]; hi: string[] };
    avoid: { en: string[]; hi: string[] };
  };
  direction: { en: string; hi: string };
  element: { en: string; hi: string };
}

export const PLANETARY_REMEDIES: Record<GrahaName, PlanetaryRemedy> = {
  Sun: {
    planet: 'Sun',
    gemstone: {
      name: { en: 'Ruby (Manik)', hi: 'माणिक्य (माणिक)' },
      weight: '3-6 Ratti (2.5-5 carats)',
      metal: { en: 'Gold or Copper', hi: 'सोना या तांबा' },
      finger: { en: 'Ring finger of right hand', hi: 'दाहिने हाथ की अनामिका' },
      day: { en: 'Sunday morning during Shukla Paksha', hi: 'शुक्ल पक्ष में रविवार प्रातः' }
    },
    mantra: {
      vedic: 'ॐ घृणिः सूर्याय नमः',
      beejMantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः',
      jaapCount: 7000,
      description: { 
        en: 'Chant 7000 times or 108 times daily facing East during sunrise', 
        hi: 'सूर्योदय के समय पूर्व दिशा की ओर मुख करके 7000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['Wheat', 'Jaggery', 'Copper items', 'Red cloth', 'Ruby'], 
        hi: ['गेहूं', 'गुड़', 'तांबे की वस्तुएं', 'लाल कपड़ा', 'माणिक्य'] 
      },
      day: { en: 'Sunday', hi: 'रविवार' },
      time: { en: 'Within 1 hour of sunrise', hi: 'सूर्योदय के 1 घंटे के भीतर' },
      recipient: { en: 'Father figure, government servant, or religious person', hi: 'पिता समान व्यक्ति, सरकारी कर्मचारी, या धार्मिक व्यक्ति' }
    },
    fasting: {
      day: { en: 'Sunday (Ravivar Vrat)', hi: 'रविवार (रविवार व्रत)' },
      food: { en: 'Single meal before sunset, avoid salt', hi: 'सूर्यास्त से पहले एक भोजन, नमक वर्जित' },
      duration: { en: 'At least 12 Sundays continuously', hi: 'कम से कम 12 रविवार लगातार' }
    },
    yantra: {
      name: { en: 'Surya Yantra', hi: 'सूर्य यंत्र' },
      placement: { en: 'East wall of home or office, worship daily at sunrise', hi: 'घर या कार्यालय की पूर्वी दीवार, सूर्योदय पर दैनिक पूजा' }
    },
    color: {
      wear: { en: 'Red, Orange, Saffron, Golden', hi: 'लाल, नारंगी, केसरिया, सुनहरा' },
      avoid: { en: 'Black, Dark Blue', hi: 'काला, गहरा नीला' }
    },
    deity: {
      name: { en: 'Lord Surya (Sun God)', hi: 'भगवान सूर्य देव' },
      temple: { en: 'Visit Sun temple, offer water to rising sun (Arghya)', hi: 'सूर्य मंदिर जाएं, उगते सूर्य को अर्घ्य दें' }
    },
    lifestyle: {
      do: { 
        en: ['Wake up early before sunrise', 'Offer water to Sun daily', 'Respect father and authority figures', 'Maintain good posture and confidence', 'Engage in leadership activities'],
        hi: ['सूर्योदय से पहले जागें', 'सूर्य को दैनिक जल अर्पित करें', 'पिता और अधिकारियों का सम्मान करें', 'अच्छी मुद्रा और आत्मविश्वास बनाए रखें', 'नेतृत्व गतिविधियों में भाग लें']
      },
      avoid: { 
        en: ['Disrespecting father or government', 'Sleeping during sunrise', 'Arrogance and false pride', 'Consuming non-vegetarian food on Sundays'],
        hi: ['पिता या सरकार का अनादर', 'सूर्योदय के समय सोना', 'अहंकार और झूठा गर्व', 'रविवार को मांसाहार']
      }
    },
    direction: { en: 'East', hi: 'पूर्व' },
    element: { en: 'Fire (Agni)', hi: 'अग्नि' }
  },
  Moon: {
    planet: 'Moon',
    gemstone: {
      name: { en: 'Pearl (Moti)', hi: 'मोती' },
      weight: '4-6 Ratti (3.5-5.5 carats)',
      metal: { en: 'Silver', hi: 'चांदी' },
      finger: { en: 'Little finger of right hand', hi: 'दाहिने हाथ की छोटी उंगली' },
      day: { en: 'Monday during Shukla Paksha', hi: 'शुक्ल पक्ष में सोमवार' }
    },
    mantra: {
      vedic: 'ॐ श्रां श्रीं श्रौं सः चंद्राय नमः',
      beejMantra: 'ॐ सोम सोमाय नमः',
      jaapCount: 11000,
      description: { 
        en: 'Chant 11000 times or 108 times daily facing North during moonrise', 
        hi: 'चंद्रोदय के समय उत्तर दिशा की ओर मुख करके 11000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['Rice', 'White cloth', 'Silver items', 'Milk', 'Curd', 'White flowers'], 
        hi: ['चावल', 'सफेद कपड़ा', 'चांदी की वस्तुएं', 'दूध', 'दही', 'सफेद फूल'] 
      },
      day: { en: 'Monday', hi: 'सोमवार' },
      time: { en: 'Evening time', hi: 'शाम का समय' },
      recipient: { en: 'Mother figure, elderly women, or Brahmins', hi: 'माता समान महिला, बुजुर्ग महिलाएं, या ब्राह्मण' }
    },
    fasting: {
      day: { en: 'Monday (Somvar Vrat)', hi: 'सोमवार (सोमवार व्रत)' },
      food: { en: 'White foods only - milk, rice, curd', hi: 'केवल सफेद भोजन - दूध, चावल, दही' },
      duration: { en: '16 Mondays continuously (Solah Somvar Vrat)', hi: '16 सोमवार लगातार (सोलह सोमवार व्रत)' }
    },
    yantra: {
      name: { en: 'Chandra Yantra', hi: 'चंद्र यंत्र' },
      placement: { en: 'Northwest corner, worship on Monday evenings', hi: 'उत्तर-पश्चिम कोना, सोमवार शाम पूजा' }
    },
    color: {
      wear: { en: 'White, Cream, Light Blue, Silver', hi: 'सफेद, क्रीम, हल्का नीला, चांदी' },
      avoid: { en: 'Red, Black', hi: 'लाल, काला' }
    },
    deity: {
      name: { en: 'Lord Shiva and Goddess Parvati', hi: 'भगवान शिव और देवी पार्वती' },
      temple: { en: 'Visit Shiva temple on Mondays, pour milk on Shivling', hi: 'सोमवार को शिव मंदिर जाएं, शिवलिंग पर दूध चढ़ाएं' }
    },
    lifestyle: {
      do: { 
        en: ['Respect and serve mother', 'Keep mind calm through meditation', 'Drink plenty of water and milk', 'Spend time near water bodies', 'Practice compassion'],
        hi: ['माता का सम्मान और सेवा करें', 'ध्यान से मन शांत रखें', 'भरपूर पानी और दूध पिएं', 'जल निकायों के पास समय बिताएं', 'करुणा का अभ्यास करें']
      },
      avoid: { 
        en: ['Disrespecting mother', 'Mental stress and anxiety', 'Consuming alcohol', 'Sleeping during daytime', 'Negative thinking'],
        hi: ['माता का अनादर', 'मानसिक तनाव और चिंता', 'शराब का सेवन', 'दिन में सोना', 'नकारात्मक सोच']
      }
    },
    direction: { en: 'Northwest', hi: 'उत्तर-पश्चिम' },
    element: { en: 'Water (Jal)', hi: 'जल' }
  },
  Mars: {
    planet: 'Mars',
    gemstone: {
      name: { en: 'Red Coral (Moonga)', hi: 'मूंगा' },
      weight: '6-9 Ratti (5-8 carats)',
      metal: { en: 'Gold or Copper', hi: 'सोना या तांबा' },
      finger: { en: 'Ring finger of right hand', hi: 'दाहिने हाथ की अनामिका' },
      day: { en: 'Tuesday during Shukla Paksha', hi: 'शुक्ल पक्ष में मंगलवार' }
    },
    mantra: {
      vedic: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः',
      beejMantra: 'ॐ अंगारकाय नमः',
      jaapCount: 10000,
      description: { 
        en: 'Chant 10000 times or 108 times daily facing South', 
        hi: 'दक्षिण दिशा की ओर मुख करके 10000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['Red lentils (Masoor Dal)', 'Jaggery', 'Red cloth', 'Copper', 'Coral', 'Wheat bread'], 
        hi: ['मसूर दाल', 'गुड़', 'लाल कपड़ा', 'तांबा', 'मूंगा', 'गेहूं की रोटी'] 
      },
      day: { en: 'Tuesday', hi: 'मंगलवार' },
      time: { en: 'Morning time', hi: 'प्रातःकाल' },
      recipient: { en: 'Young men, soldiers, or workers', hi: 'युवक, सैनिक, या श्रमिक' }
    },
    fasting: {
      day: { en: 'Tuesday (Mangalvar Vrat)', hi: 'मंगलवार (मंगलवार व्रत)' },
      food: { en: 'Jaggery and wheat, avoid salt', hi: 'गुड़ और गेहूं, नमक वर्जित' },
      duration: { en: '21 Tuesdays continuously', hi: '21 मंगलवार लगातार' }
    },
    yantra: {
      name: { en: 'Mangal Yantra', hi: 'मंगल यंत्र' },
      placement: { en: 'South direction, worship with red flowers on Tuesdays', hi: 'दक्षिण दिशा, मंगलवार को लाल फूलों से पूजा' }
    },
    color: {
      wear: { en: 'Red, Orange, Maroon, Coral', hi: 'लाल, नारंगी, मैरून, कोरल' },
      avoid: { en: 'Blue, Black', hi: 'नीला, काला' }
    },
    deity: {
      name: { en: 'Lord Hanuman and Lord Kartikeya', hi: 'भगवान हनुमान और भगवान कार्तिकेय' },
      temple: { en: 'Visit Hanuman temple on Tuesdays, offer sindoor', hi: 'मंगलवार को हनुमान मंदिर जाएं, सिंदूर चढ़ाएं' }
    },
    lifestyle: {
      do: { 
        en: ['Regular physical exercise', 'Practice courage and bravery', 'Help siblings', 'Engage in sports or martial arts', 'Be disciplined and punctual'],
        hi: ['नियमित शारीरिक व्यायाम', 'साहस और वीरता का अभ्यास करें', 'भाई-बहनों की मदद करें', 'खेल या मार्शल आर्ट में भाग लें', 'अनुशासित और समयनिष्ठ रहें']
      },
      avoid: { 
        en: ['Anger and aggression', 'Violence and fighting', 'Disputes with siblings', 'Rash driving', 'Consuming non-veg on Tuesdays'],
        hi: ['क्रोध और आक्रामकता', 'हिंसा और लड़ाई', 'भाई-बहनों से विवाद', 'लापरवाह ड्राइविंग', 'मंगलवार को मांसाहार']
      }
    },
    direction: { en: 'South', hi: 'दक्षिण' },
    element: { en: 'Fire (Agni)', hi: 'अग्नि' }
  },
  Mercury: {
    planet: 'Mercury',
    gemstone: {
      name: { en: 'Emerald (Panna)', hi: 'पन्ना' },
      weight: '3-6 Ratti (2.5-5.5 carats)',
      metal: { en: 'Gold or Silver', hi: 'सोना या चांदी' },
      finger: { en: 'Little finger of right hand', hi: 'दाहिने हाथ की छोटी उंगली' },
      day: { en: 'Wednesday during Shukla Paksha', hi: 'शुक्ल पक्ष में बुधवार' }
    },
    mantra: {
      vedic: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः',
      beejMantra: 'ॐ बुं बुधाय नमः',
      jaapCount: 9000,
      description: { 
        en: 'Chant 9000 times or 108 times daily facing North', 
        hi: 'उत्तर दिशा की ओर मुख करके 9000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['Green gram (Moong)', 'Green cloth', 'Emerald', 'Bronze items', 'Books', 'Pens'], 
        hi: ['मूंग', 'हरा कपड़ा', 'पन्ना', 'कांसे की वस्तुएं', 'पुस्तकें', 'कलम'] 
      },
      day: { en: 'Wednesday', hi: 'बुधवार' },
      time: { en: 'Morning or afternoon', hi: 'प्रातः या दोपहर' },
      recipient: { en: 'Students, scholars, or young children', hi: 'छात्र, विद्वान, या छोटे बच्चे' }
    },
    fasting: {
      day: { en: 'Wednesday (Budhvar Vrat)', hi: 'बुधवार (बुधवार व्रत)' },
      food: { en: 'Green vegetables and moong dal', hi: 'हरी सब्जियां और मूंग दाल' },
      duration: { en: '21 Wednesdays continuously', hi: '21 बुधवार लगातार' }
    },
    yantra: {
      name: { en: 'Budh Yantra', hi: 'बुध यंत्र' },
      placement: { en: 'North direction in study room, worship on Wednesdays', hi: 'अध्ययन कक्ष में उत्तर दिशा, बुधवार को पूजा' }
    },
    color: {
      wear: { en: 'Green, Light Green, Parrot Green', hi: 'हरा, हल्का हरा, तोता हरा' },
      avoid: { en: 'Red', hi: 'लाल' }
    },
    deity: {
      name: { en: 'Lord Vishnu and Lord Ganesha', hi: 'भगवान विष्णु और भगवान गणेश' },
      temple: { en: 'Visit Vishnu or Ganesha temple on Wednesdays', hi: 'बुधवार को विष्णु या गणेश मंदिर जाएं' }
    },
    lifestyle: {
      do: { 
        en: ['Read and study regularly', 'Practice clear communication', 'Learn new skills', 'Help in education of others', 'Be honest in business dealings'],
        hi: ['नियमित पढ़ें और अध्ययन करें', 'स्पष्ट संचार का अभ्यास करें', 'नए कौशल सीखें', 'दूसरों की शिक्षा में मदद करें', 'व्यापारिक व्यवहार में ईमानदार रहें']
      },
      avoid: { 
        en: ['Lying and cheating', 'Spreading rumors', 'Neglecting education', 'Being indecisive', 'Fraudulent activities'],
        hi: ['झूठ और धोखा', 'अफवाहें फैलाना', 'शिक्षा की उपेक्षा', 'अनिर्णायक होना', 'धोखाधड़ी गतिविधियां']
      }
    },
    direction: { en: 'North', hi: 'उत्तर' },
    element: { en: 'Earth (Prithvi)', hi: 'पृथ्वी' }
  },
  Jupiter: {
    planet: 'Jupiter',
    gemstone: {
      name: { en: 'Yellow Sapphire (Pukhraj)', hi: 'पुखराज' },
      weight: '3-6 Ratti (2.5-5.5 carats)',
      metal: { en: 'Gold', hi: 'सोना' },
      finger: { en: 'Index finger of right hand', hi: 'दाहिने हाथ की तर्जनी' },
      day: { en: 'Thursday during Shukla Paksha', hi: 'शुक्ल पक्ष में गुरुवार' }
    },
    mantra: {
      vedic: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः',
      beejMantra: 'ॐ बृं बृहस्पतये नमः',
      jaapCount: 19000,
      description: { 
        en: 'Chant 19000 times or 108 times daily facing Northeast', 
        hi: 'पूर्वोत्तर दिशा की ओर मुख करके 19000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['Yellow cloth', 'Chana dal', 'Turmeric', 'Gold', 'Yellow sapphire', 'Yellow sweets', 'Bananas'], 
        hi: ['पीला कपड़ा', 'चना दाल', 'हल्दी', 'सोना', 'पुखराज', 'पीली मिठाई', 'केले'] 
      },
      day: { en: 'Thursday', hi: 'गुरुवार' },
      time: { en: 'Morning time', hi: 'प्रातःकाल' },
      recipient: { en: 'Brahmins, teachers, priests, or elderly', hi: 'ब्राह्मण, शिक्षक, पुजारी, या बुजुर्ग' }
    },
    fasting: {
      day: { en: 'Thursday (Guruvar Vrat)', hi: 'गुरुवार (गुरुवार व्रत)' },
      food: { en: 'Yellow foods - chana dal, banana, yellow sweets', hi: 'पीले भोजन - चना दाल, केला, पीली मिठाई' },
      duration: { en: '16 Thursdays continuously', hi: '16 गुरुवार लगातार' }
    },
    yantra: {
      name: { en: 'Guru Yantra or Brihaspati Yantra', hi: 'गुरु यंत्र या बृहस्पति यंत्र' },
      placement: { en: 'Northeast corner of home, puja room', hi: 'घर का पूर्वोत्तर कोना, पूजा कक्ष' }
    },
    color: {
      wear: { en: 'Yellow, Golden, Cream, Light Orange', hi: 'पीला, सुनहरा, क्रीम, हल्का नारंगी' },
      avoid: { en: 'Blue, Black', hi: 'नीला, काला' }
    },
    deity: {
      name: { en: 'Lord Vishnu and Lord Dakshinamurthy', hi: 'भगवान विष्णु और भगवान दक्षिणामूर्ति' },
      temple: { en: 'Visit Vishnu temple on Thursdays, listen to Vishnu Sahasranama', hi: 'गुरुवार को विष्णु मंदिर जाएं, विष्णु सहस्रनाम सुनें' }
    },
    lifestyle: {
      do: { 
        en: ['Respect teachers and elders', 'Practice spirituality and dharma', 'Help in education', 'Be generous and charitable', 'Maintain ethical conduct'],
        hi: ['शिक्षकों और बड़ों का सम्मान करें', 'आध्यात्मिकता और धर्म का अभ्यास करें', 'शिक्षा में मदद करें', 'उदार और दानशील बनें', 'नैतिक आचरण बनाए रखें']
      },
      avoid: { 
        en: ['Disrespecting Guru or elders', 'Dishonesty in dealings', 'Consuming alcohol', 'Neglecting religious duties', 'Being greedy'],
        hi: ['गुरु या बड़ों का अनादर', 'व्यवहार में बेईमानी', 'शराब का सेवन', 'धार्मिक कर्तव्यों की उपेक्षा', 'लालची होना']
      }
    },
    direction: { en: 'Northeast', hi: 'पूर्वोत्तर' },
    element: { en: 'Ether (Akash)', hi: 'आकाश' }
  },
  Venus: {
    planet: 'Venus',
    gemstone: {
      name: { en: 'Diamond (Heera) or White Sapphire', hi: 'हीरा या सफेद पुखराज' },
      weight: '0.5-1 carat for Diamond, 3-6 Ratti for White Sapphire',
      metal: { en: 'Platinum, White Gold, or Silver', hi: 'प्लेटिनम, सफेद सोना, या चांदी' },
      finger: { en: 'Middle finger or ring finger of right hand', hi: 'दाहिने हाथ की मध्यमा या अनामिका' },
      day: { en: 'Friday during Shukla Paksha', hi: 'शुक्ल पक्ष में शुक्रवार' }
    },
    mantra: {
      vedic: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः',
      beejMantra: 'ॐ शुं शुक्राय नमः',
      jaapCount: 16000,
      description: { 
        en: 'Chant 16000 times or 108 times daily facing Southeast', 
        hi: 'दक्षिण-पूर्व दिशा की ओर मुख करके 16000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['White rice', 'White cloth', 'Perfume', 'Curd', 'Ghee', 'White flowers', 'Sugar'], 
        hi: ['सफेद चावल', 'सफेद कपड़ा', 'इत्र', 'दही', 'घी', 'सफेद फूल', 'चीनी'] 
      },
      day: { en: 'Friday', hi: 'शुक्रवार' },
      time: { en: 'Morning or evening', hi: 'प्रातः या शाम' },
      recipient: { en: 'Young women, artists, or newly married couples', hi: 'युवतियां, कलाकार, या नवविवाहित जोड़े' }
    },
    fasting: {
      day: { en: 'Friday (Shukravar Vrat)', hi: 'शुक्रवार (शुक्रवार व्रत)' },
      food: { en: 'White foods, sweets, kheer', hi: 'सफेद भोजन, मिठाई, खीर' },
      duration: { en: '21 Fridays continuously', hi: '21 शुक्रवार लगातार' }
    },
    yantra: {
      name: { en: 'Shukra Yantra', hi: 'शुक्र यंत्र' },
      placement: { en: 'Southeast direction, bedroom for marital harmony', hi: 'दक्षिण-पूर्व दिशा, वैवाहिक सद्भाव के लिए शयनकक्ष' }
    },
    color: {
      wear: { en: 'White, Pink, Light Blue, Cream, Pastel colors', hi: 'सफेद, गुलाबी, हल्का नीला, क्रीम, पेस्टल रंग' },
      avoid: { en: 'Red, Black', hi: 'लाल, काला' }
    },
    deity: {
      name: { en: 'Goddess Lakshmi and Goddess Saraswati', hi: 'देवी लक्ष्मी और देवी सरस्वती' },
      temple: { en: 'Visit Lakshmi temple on Fridays, offer white flowers', hi: 'शुक्रवार को लक्ष्मी मंदिर जाएं, सफेद फूल चढ़ाएं' }
    },
    lifestyle: {
      do: { 
        en: ['Respect women and spouse', 'Appreciate art and beauty', 'Maintain cleanliness and hygiene', 'Be romantic and loving', 'Use fragrances and flowers'],
        hi: ['महिलाओं और पत्नी का सम्मान करें', 'कला और सौंदर्य की सराहना करें', 'स्वच्छता बनाए रखें', 'रोमांटिक और प्यारे बनें', 'सुगंध और फूलों का उपयोग करें']
      },
      avoid: { 
        en: ['Disrespecting women', 'Extramarital affairs', 'Living in dirty environment', 'Being harsh in speech', 'Excessive indulgence'],
        hi: ['महिलाओं का अनादर', 'विवाहेतर संबंध', 'गंदे वातावरण में रहना', 'कठोर वाणी', 'अति भोग']
      }
    },
    direction: { en: 'Southeast', hi: 'दक्षिण-पूर्व' },
    element: { en: 'Water (Jal)', hi: 'जल' }
  },
  Saturn: {
    planet: 'Saturn',
    gemstone: {
      name: { en: 'Blue Sapphire (Neelam)', hi: 'नीलम' },
      weight: '4-7 Ratti (3.5-6.5 carats)',
      metal: { en: 'Iron, Steel, or Silver', hi: 'लोहा, इस्पात, या चांदी' },
      finger: { en: 'Middle finger of right hand', hi: 'दाहिने हाथ की मध्यमा' },
      day: { en: 'Saturday during Shukla Paksha (Test for 3 days first)', hi: 'शुक्ल पक्ष में शनिवार (पहले 3 दिन परीक्षण करें)' }
    },
    mantra: {
      vedic: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः',
      beejMantra: 'ॐ शं शनैश्चराय नमः',
      jaapCount: 23000,
      description: { 
        en: 'Chant 23000 times or 108 times daily facing West', 
        hi: 'पश्चिम दिशा की ओर मुख करके 23000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['Black sesame (Til)', 'Mustard oil', 'Iron items', 'Black cloth', 'Urad dal', 'Black shoes'], 
        hi: ['काला तिल', 'सरसों का तेल', 'लोहे की वस्तुएं', 'काला कपड़ा', 'उड़द दाल', 'काले जूते'] 
      },
      day: { en: 'Saturday', hi: 'शनिवार' },
      time: { en: 'Evening before sunset', hi: 'सूर्यास्त से पहले शाम' },
      recipient: { en: 'Poor, disabled, servants, or elderly', hi: 'गरीब, विकलांग, सेवक, या बुजुर्ग' }
    },
    fasting: {
      day: { en: 'Saturday (Shanivar Vrat)', hi: 'शनिवार (शनिवार व्रत)' },
      food: { en: 'Once a day, urad dal, black sesame', hi: 'दिन में एक बार, उड़द दाल, काला तिल' },
      duration: { en: '51 Saturdays continuously', hi: '51 शनिवार लगातार' }
    },
    yantra: {
      name: { en: 'Shani Yantra', hi: 'शनि यंत्र' },
      placement: { en: 'West direction, worship with mustard oil lamp', hi: 'पश्चिम दिशा, सरसों के तेल के दीपक से पूजा' }
    },
    color: {
      wear: { en: 'Black, Dark Blue, Navy Blue, Grey', hi: 'काला, गहरा नीला, नेवी ब्लू, स्लेटी' },
      avoid: { en: 'Bright Red, Bright Yellow', hi: 'चमकीला लाल, चमकीला पीला' }
    },
    deity: {
      name: { en: 'Lord Shani Dev and Lord Hanuman', hi: 'भगवान शनि देव और भगवान हनुमान' },
      temple: { en: 'Visit Shani temple on Saturdays, pour mustard oil', hi: 'शनिवार को शनि मंदिर जाएं, सरसों का तेल चढ़ाएं' }
    },
    lifestyle: {
      do: { 
        en: ['Serve the poor and disabled', 'Be disciplined and hardworking', 'Respect elderly and servants', 'Practice patience and perseverance', 'Feed crows on Saturdays'],
        hi: ['गरीबों और विकलांगों की सेवा करें', 'अनुशासित और मेहनती बनें', 'बुजुर्गों और सेवकों का सम्मान करें', 'धैर्य और दृढ़ता का अभ्यास करें', 'शनिवार को कौओं को खाना खिलाएं']
      },
      avoid: { 
        en: ['Disrespecting poor or elderly', 'Laziness and procrastination', 'Being cruel to servants', 'Illegal activities', 'Alcohol on Saturdays'],
        hi: ['गरीबों या बुजुर्गों का अनादर', 'आलस्य और टालमटोल', 'सेवकों के साथ क्रूरता', 'अवैध गतिविधियां', 'शनिवार को शराब']
      }
    },
    direction: { en: 'West', hi: 'पश्चिम' },
    element: { en: 'Air (Vayu)', hi: 'वायु' }
  },
  Rahu: {
    planet: 'Rahu',
    gemstone: {
      name: { en: 'Hessonite Garnet (Gomed)', hi: 'गोमेद' },
      weight: '4-7 Ratti (3.5-6.5 carats)',
      metal: { en: 'Silver or Ashtadhatu (8 metals)', hi: 'चांदी या अष्टधातु (8 धातुएं)' },
      finger: { en: 'Middle finger of right hand', hi: 'दाहिने हाथ की मध्यमा' },
      day: { en: 'Saturday or Wednesday during Shukla Paksha', hi: 'शुक्ल पक्ष में शनिवार या बुधवार' }
    },
    mantra: {
      vedic: 'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः',
      beejMantra: 'ॐ रां राहवे नमः',
      jaapCount: 18000,
      description: { 
        en: 'Chant 18000 times or 108 times daily during Rahu Kaal (specific timing)', 
        hi: 'राहु काल (विशिष्ट समय) में 18000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['Black blanket', 'Mustard', 'Coal', 'Coconut', 'Blue/Black cloth', 'Iron items'], 
        hi: ['काला कंबल', 'सरसों', 'कोयला', 'नारियल', 'नीला/काला कपड़ा', 'लोहे की वस्तुएं'] 
      },
      day: { en: 'Saturday or Wednesday', hi: 'शनिवार या बुधवार' },
      time: { en: 'During Rahu Kaal', hi: 'राहु काल में' },
      recipient: { en: 'Sweepers, outcastes, or foreign people', hi: 'सफाई कर्मचारी, बहिष्कृत, या विदेशी लोग' }
    },
    fasting: {
      day: { en: 'Saturday', hi: 'शनिवार' },
      food: { en: 'Single meal, avoid onion and garlic', hi: 'एक समय भोजन, प्याज और लहसुन वर्जित' },
      duration: { en: '18 Saturdays continuously', hi: '18 शनिवार लगातार' }
    },
    yantra: {
      name: { en: 'Rahu Yantra', hi: 'राहु यंत्र' },
      placement: { en: 'Southwest direction, worship during Rahu Kaal', hi: 'दक्षिण-पश्चिम दिशा, राहु काल में पूजा' }
    },
    color: {
      wear: { en: 'Grey, Smoky Blue, Brown', hi: 'स्लेटी, धुंधला नीला, भूरा' },
      avoid: { en: 'Bright colors', hi: 'चमकीले रंग' }
    },
    deity: {
      name: { en: 'Goddess Durga and Lord Shiva', hi: 'देवी दुर्गा और भगवान शिव' },
      temple: { en: 'Visit Durga temple, worship on Ashtami', hi: 'दुर्गा मंदिर जाएं, अष्टमी पर पूजा करें' }
    },
    lifestyle: {
      do: { 
        en: ['Keep mind calm and clear', 'Practice meditation', 'Help foreigners and outcasts', 'Use technology wisely', 'Be honest in dealings'],
        hi: ['मन शांत और स्पष्ट रखें', 'ध्यान का अभ्यास करें', 'विदेशियों और बहिष्कृतों की मदद करें', 'प्रौद्योगिकी का बुद्धिमानी से उपयोग करें', 'व्यवहार में ईमानदार रहें']
      },
      avoid: { 
        en: ['Fraud and deception', 'Drug and alcohol abuse', 'Occult practices for harm', 'Conspiracy and manipulation', 'Sudden risky decisions'],
        hi: ['धोखाधड़ी और छल', 'नशा और शराब का दुरुपयोग', 'हानि के लिए गुप्त प्रथाएं', 'षड्यंत्र और छेड़छाड़', 'अचानक जोखिम भरे निर्णय']
      }
    },
    direction: { en: 'Southwest', hi: 'दक्षिण-पश्चिम' },
    element: { en: 'Air (Vayu)', hi: 'वायु' }
  },
  Ketu: {
    planet: 'Ketu',
    gemstone: {
      name: { en: "Cat's Eye (Lehsunia/Vaidurya)", hi: 'लहसुनिया/वैदूर्य' },
      weight: '3-6 Ratti (2.5-5.5 carats)',
      metal: { en: 'Silver or Panchdhatu (5 metals)', hi: 'चांदी या पंचधातु (5 धातुएं)' },
      finger: { en: 'Middle finger or ring finger of left hand', hi: 'बाएं हाथ की मध्यमा या अनामिका' },
      day: { en: 'Tuesday or Saturday during Shukla Paksha', hi: 'शुक्ल पक्ष में मंगलवार या शनिवार' }
    },
    mantra: {
      vedic: 'ॐ स्रां स्रीं स्रौं सः केतवे नमः',
      beejMantra: 'ॐ कें केतवे नमः',
      jaapCount: 17000,
      description: { 
        en: 'Chant 17000 times or 108 times daily facing South', 
        hi: 'दक्षिण दिशा की ओर मुख करके 17000 बार या दैनिक 108 बार जप करें' 
      }
    },
    donation: {
      items: { 
        en: ['Mixed colored blanket', 'Sesame seeds', 'Flag', 'Goat (donation, not sacrifice)', 'Grey items'], 
        hi: ['मिश्रित रंग का कंबल', 'तिल', 'ध्वज', 'बकरी (दान, बलि नहीं)', 'स्लेटी वस्तुएं'] 
      },
      day: { en: 'Tuesday or Sunday', hi: 'मंगलवार या रविवार' },
      time: { en: 'Afternoon', hi: 'दोपहर' },
      recipient: { en: 'Sadhus, monks, or spiritual institutions', hi: 'साधु, भिक्षु, या आध्यात्मिक संस्थाएं' }
    },
    fasting: {
      day: { en: 'Tuesday', hi: 'मंगलवार' },
      food: { en: 'Once a day, simple sattvic food', hi: 'दिन में एक बार, सरल सात्विक भोजन' },
      duration: { en: '21 Tuesdays continuously', hi: '21 मंगलवार लगातार' }
    },
    yantra: {
      name: { en: 'Ketu Yantra', hi: 'केतु यंत्र' },
      placement: { en: 'Southeast direction, worship with incense and lamp', hi: 'दक्षिण-पूर्व दिशा, धूप और दीपक से पूजा' }
    },
    color: {
      wear: { en: 'Grey, Brown, Multi-colored, Smoky', hi: 'स्लेटी, भूरा, बहुरंगी, धुंधला' },
      avoid: { en: 'Bright contrasting colors', hi: 'चमकीले विपरीत रंग' }
    },
    deity: {
      name: { en: 'Lord Ganesha and Lord Chitragupta', hi: 'भगवान गणेश और भगवान चित्रगुप्त' },
      temple: { en: 'Visit Ganesha temple, practice spiritual sadhana', hi: 'गणेश मंदिर जाएं, आध्यात्मिक साधना का अभ्यास करें' }
    },
    lifestyle: {
      do: { 
        en: ['Practice spirituality and meditation', 'Detach from material desires', 'Help spiritual seekers', 'Keep pets (especially dogs)', 'Visit ashrams and holy places'],
        hi: ['आध्यात्मिकता और ध्यान का अभ्यास करें', 'भौतिक इच्छाओं से वैराग्य', 'आध्यात्मिक साधकों की मदद करें', 'पालतू जानवर रखें (विशेषकर कुत्ते)', 'आश्रम और पवित्र स्थानों पर जाएं']
      },
      avoid: { 
        en: ['Cruelty to animals', 'Ignoring spiritual calling', 'Being too attached to material world', 'Harming spiritual people', 'Occult for selfish gains'],
        hi: ['जानवरों के साथ क्रूरता', 'आध्यात्मिक पुकार की उपेक्षा', 'भौतिक दुनिया से बहुत जुड़ाव', 'आध्यात्मिक लोगों को नुकसान पहुंचाना', 'स्वार्थी लाभ के लिए गुप्त विद्या']
      }
    },
    direction: { en: 'Southeast (descending)', hi: 'दक्षिण-पूर्व (अवरोही)' },
    element: { en: 'Fire (Agni)', hi: 'अग्नि' }
  }
};

// Quick remedies based on activation type
export interface QuickRemedy {
  type: 'jupiter' | 'saturn';
  planet: GrahaName;
  quickRemedies: { en: string[]; hi: string[] };
}

export const getQuickRemediesForActivation = (
  activatingPlanet: 'Jupiter' | 'Saturn',
  contactedPlanet: GrahaName
): { en: string[]; hi: string[] } => {
  const remedy = PLANETARY_REMEDIES[contactedPlanet];
  
  if (activatingPlanet === 'Jupiter') {
    // Jupiter activations - focus on growth and blessings
    return {
      en: [
        `Chant ${remedy.mantra.beejMantra} 108 times daily`,
        `Wear ${remedy.color.wear.en} colors on ${remedy.donation.day.en}`,
        `Visit ${remedy.deity.temple.en}`,
        remedy.lifestyle.do.en[0]
      ],
      hi: [
        `${remedy.mantra.beejMantra} दैनिक 108 बार जप करें`,
        `${remedy.donation.day.hi} को ${remedy.color.wear.hi} रंग पहनें`,
        `${remedy.deity.temple.hi}`,
        remedy.lifestyle.do.hi[0]
      ]
    };
  } else {
    // Saturn activations - focus on karma and discipline
    return {
      en: [
        `Donate ${remedy.donation.items.en.slice(0, 2).join(' and ')} on ${remedy.donation.day.en}`,
        `Fast on ${remedy.fasting.day.en}`,
        `Avoid ${remedy.lifestyle.avoid.en[0]}`,
        `Serve ${remedy.donation.recipient.en}`
      ],
      hi: [
        `${remedy.donation.day.hi} को ${remedy.donation.items.hi.slice(0, 2).join(' और ')} दान करें`,
        `${remedy.fasting.day.hi} को उपवास रखें`,
        `${remedy.lifestyle.avoid.hi[0]} से बचें`,
        `${remedy.donation.recipient.hi} की सेवा करें`
      ]
    };
  }
};
