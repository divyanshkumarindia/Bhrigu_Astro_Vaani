import React, { useMemo, useState, useRef } from 'react';
import { GrahaName, PLANET_SYMBOLS, PLANET_SANSKRIT, RASHI_SANSKRIT, KundaliReport } from '@/types/astrology';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, MessageCircle, Mail, Copy, Loader2, Sun, Moon, Star, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';


interface Props { report: KundaliReport; }

const WEEKDAY_LORDS: Record<string, GrahaName> = {
  Sunday: 'Sun', Monday: 'Moon', Tuesday: 'Mars', Wednesday: 'Mercury',
  Thursday: 'Jupiter', Friday: 'Venus', Saturday: 'Saturn'
};

const getHouseTag = (h: number) => {
  if ([1,5,9].includes(h)) return 'Trikona';
  if ([1,4,7,10].includes(h)) return 'Kendra';
  if ([6,8,12].includes(h)) return 'Dusthana';
  return 'Neutral';
};

const getTrineLabel = (h: number) => {
  if ([1,5,9].includes(h)) return '1-5-9 Dharma';
  if ([2,6,10].includes(h)) return '2-6-10 Artha';
  if ([3,7,11].includes(h)) return '3-7-11 Kama';
  if ([4,8,12].includes(h)) return '4-8-12 Moksha';
};

const formatToPoints = (text: string, isHindi: boolean) => {
  const delimiter = isHindi ? '।' : '.';
  return text
    .split(delimiter)
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0)
    .map(sentence => sentence + (isHindi ? '।' : '.'));
};

export const BNNBriefDailyHoroscopeSummary: React.FC<Props> = ({ report }) => {
  const { language } = useLanguage();
  const isHindi = language === 'hi';
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const planets = report.planets;

  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const todayFormatted = today.toLocaleDateString(isHindi ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const dayLord = WEEKDAY_LORDS[dayName] || 'Sun';

  const pInfo = (n: GrahaName) => {
    const p = planets.find(x => x.name === n);
    return p ? `${PLANET_SYMBOLS[n]} ${n} in House ${p.house}/${p.sign} (${getHouseTag(p.house)}, ${getTrineLabel(p.house)})${p.isRetrograde ? ' [R]' : ''}` : '';
  };
  const pInfoHi = (n: GrahaName) => {
    const p = planets.find(x => x.name === n);
    return p ? `${PLANET_SYMBOLS[n]} ${PLANET_SANSKRIT[n]} भाव ${p.house}/${RASHI_SANSKRIT[p.sign]} (${getHouseTag(p.house)})${p.isRetrograde ? ' [वक्री]' : ''}` : '';
  };

  const summaryData = useMemo(() => {
    const sections: { title: { en: string; hi: string }; body: { en: string; hi: string }; ref: string }[] = [];
    const moonSign = planets.find(p => p.name === 'Moon')?.sign || 'Aries';
    const ascSign = report.ascendant.sign;
    const dayLordPlanet = planets.find(p => p.name === dayLord);
    const sun = planets.find(p => p.name === 'Sun');
    const moon = planets.find(p => p.name === 'Moon');
    const jupiter = planets.find(p => p.name === 'Jupiter');
    const venus = planets.find(p => p.name === 'Venus');
    const saturn = planets.find(p => p.name === 'Saturn');
    const mars = planets.find(p => p.name === 'Mars');
    const mercury = planets.find(p => p.name === 'Mercury');
    const rahu = planets.find(p => p.name === 'Rahu');

    // Day Lord Analysis
    const dayLordHouse = dayLordPlanet?.house || 1;
    const dayLordFavorable = [1,2,4,5,9,10,11].includes(dayLordHouse);
    sections.push({
      title: { en: `🌟 Today's Ruling Planet — ${dayLord} (${dayName})`, hi: `🌟 आज का शासक ग्रह — ${PLANET_SANSKRIT[dayLord]} (${todayFormatted})` },
      body: {
        en: `Today is ${dayName}, ruled by ${dayLord}. ${pInfo(dayLord)}. ${dayLordFavorable ? `Your Day Lord ${dayLord} sits in a favorable ${getHouseTag(dayLordHouse)} position — this is a positive day for activities connected to ${dayLord}. You can expect support and cooperation in your endeavors today.` : `Your Day Lord ${dayLord} sits in a challenging ${getHouseTag(dayLordHouse)} position — be cautious with important decisions today. Focus on routine work and avoid major commitments.`} (BNN Logic: The planet ruling today's weekday activates its house/sign in your birth chart, coloring the day's energy.)`,
        hi: `आज ${todayFormatted}, शासक ग्रह ${PLANET_SANSKRIT[dayLord]}। ${pInfoHi(dayLord)}। ${dayLordFavorable ? `आपका दिन स्वामी ${PLANET_SANSKRIT[dayLord]} अनुकूल ${getHouseTag(dayLordHouse)} स्थिति में — आज ${PLANET_SANSKRIT[dayLord]} से जुड़ी गतिविधियों के लिए शुभ दिन। सहयोग और समर्थन मिलेगा।` : `आपका दिन स्वामी ${PLANET_SANSKRIT[dayLord]} चुनौतीपूर्ण ${getHouseTag(dayLordHouse)} स्थिति में — महत्वपूर्ण निर्णयों में सावधानी बरतें। नियमित कार्य पर ध्यान दें।`} (BNN तर्क: सप्ताह के दिन का शासक ग्रह जन्म कुंडली में अपने भाव/राशि को सक्रिय करता है।)`
      },
      ref: 'BNN Vara Theory (Ch.1)'
    });

    // Career & Work
    const lord10 = planets.find(p => p.house === 10);
    sections.push({
      title: { en: '💼 Today\'s Career & Work Outlook', hi: '💼 आज का करियर और कार्य दृष्टिकोण' },
      body: {
        en: `Your 10th house ${lord10 ? `has ${lord10.name} (${pInfo(lord10.name as GrahaName)})` : 'is unoccupied'} — ${lord10 && [1,4,5,9,10].includes(lord10.house) ? 'professional environment is supportive today. Good day for presentations, meetings, and taking initiative at work.' : 'today requires patience at work. Avoid confrontations with superiors. Focus on completing pending tasks rather than starting new projects.'} ${saturn && [6,8,12].includes(saturn.house) ? 'Saturn in Dusthana may bring delays — maintain persistence.' : saturn ? 'Saturn supports structured effort today.' : ''} ${mercury && !mercury.isRetrograde ? 'Mercury is direct — communication and negotiations are favored.' : mercury?.isRetrograde ? 'Mercury retrograde — double-check all communications and documents.' : ''} (BNN Logic: 10th house activation + Day Lord determines work energy.)`,
        hi: `आपका 10वां भाव ${lord10 ? `में ${PLANET_SANSKRIT[lord10.name as GrahaName]} (${pInfoHi(lord10.name as GrahaName)})` : 'खाली है'} — ${lord10 && [1,4,5,9,10].includes(lord10.house) ? 'व्यावसायिक माहौल सहायक। प्रस्तुतियों और बैठकों के लिए अच्छा दिन।' : 'कार्यस्थल पर धैर्य रखें। वरिष्ठों से टकराव से बचें।'} ${saturn && [6,8,12].includes(saturn.house) ? 'शनि दुस्थान में — देरी संभव, दृढ़ रहें।' : ''} (BNN तर्क: 10वां भाव + दिन स्वामी कार्य ऊर्जा निर्धारित करता है।)`
      },
      ref: 'BNN Career Day (Ch.4)'
    });

    // Finance & Wealth
    const lord2 = planets.find(p => p.house === 2);
    const lord11 = planets.find(p => p.house === 11);
    sections.push({
      title: { en: '💰 Today\'s Financial Outlook', hi: '💰 आज का वित्तीय दृष्टिकोण' },
      body: {
        en: `2nd house (wealth) ${lord2 ? `activated by ${lord2.name}` : 'unoccupied'}, 11th house (gains) ${lord11 ? `activated by ${lord11.name}` : 'unoccupied'}. ${venus && [2,5,9,11].includes(venus.house) ? 'Venus in a wealth house favors financial transactions and purchases today.' : 'Financial caution advised — avoid impulsive spending.'} ${jupiter && [2,5,9,11].includes(jupiter.house) ? 'Jupiter blesses gains through righteous means today.' : ''} ${rahu && [2,11].includes(rahu.house) ? 'Rahu in money houses — unexpected gains possible but verify all deals carefully.' : ''} (BNN Logic: 2nd house [stored wealth] + 11th house [incoming gains] + Venus/Jupiter placement determines daily financial energy.)`,
        hi: `2रा भाव (धन) ${lord2 ? `${PLANET_SANSKRIT[lord2.name as GrahaName]} द्वारा सक्रिय` : 'खाली'}, 11वां भाव (लाभ) ${lord11 ? `${PLANET_SANSKRIT[lord11.name as GrahaName]} द्वारा सक्रिय` : 'खाली'}। ${venus && [2,5,9,11].includes(venus.house) ? 'शुक्र धन भाव में — वित्तीय लेनदेन अनुकूल।' : 'वित्तीय सावधानी बरतें — आवेगपूर्ण खर्च से बचें।'} (BNN तर्क: 2रा भाव + 11वां भाव + शुक्र/गुरु स्थिति दैनिक वित्तीय ऊर्जा निर्धारित करती है।)`
      },
      ref: 'BNN Dhana Day (Ch.5)'
    });

    // Health
    const lord6 = planets.find(p => p.house === 6);
    sections.push({
      title: { en: '🏥 Today\'s Health & Vitality', hi: '🏥 आज का स्वास्थ्य और जीवन शक्ति' },
      body: {
        en: `Your Lagna (${ascSign}) indicates ${sun && [1,5,9,10].includes(sun.house) ? 'strong vitality today — energy levels are high, good for exercise and outdoor activities.' : 'moderate vitality — pace yourself and avoid overexertion.'} ${mars && [6,8,12].includes(mars.house) ? 'Mars in Dusthana — risk of minor injuries or inflammation. Be careful with sharp objects and hot items.' : mars ? 'Mars supports physical activity and strength today.' : ''} ${moon && [6,8,12].includes(moon.house) ? 'Moon placement suggests emotional stress — practice deep breathing and meditation.' : 'Moon supports emotional stability today.'} (BNN Logic: Lagna Lord + 6th house [disease] + Sun [vitality] determines daily health energy.)`,
        hi: `आपका लग्न (${RASHI_SANSKRIT[ascSign]}) — ${sun && [1,5,9,10].includes(sun.house) ? 'आज ऊर्जा प्रबल, व्यायाम के लिए अच्छा दिन।' : 'मध्यम ऊर्जा — अति परिश्रम से बचें।'} ${mars && [6,8,12].includes(mars.house) ? 'मंगल दुस्थान में — चोट से सावधान।' : ''} ${moon && [6,8,12].includes(moon.house) ? 'चंद्रमा — भावनात्मक तनाव संभव, ध्यान करें।' : ''} (BNN तर्क: लग्नेश + 6ठा भाव + सूर्य दैनिक स्वास्थ्य ऊर्जा निर्धारित करता है।)`
      },
      ref: 'BNN Health Day (Ch.6)'
    });

    // Relationships
    const lord7 = planets.find(p => p.house === 7);
    sections.push({
      title: { en: '❤️ Today\'s Relationships & Love', hi: '❤️ आज के रिश्ते और प्रेम' },
      body: {
        en: `7th house (partnerships) ${lord7 ? `activated by ${lord7.name} (${pInfo(lord7.name as GrahaName)})` : 'unoccupied'}. ${venus && [1,4,5,7,9,11].includes(venus.house) ? 'Venus in favorable position — romantic energy is high today. Good day for expressing love, planning dates, and deepening connections.' : 'Venus placement suggests keeping expectations measured in relationships today.'} ${moon && [4,5,7].includes(moon.house) ? 'Moon enhances emotional bonding — share your feelings with loved ones.' : ''} ${mars && [7].includes(mars.house) ? 'Mars in 7th — passion is high but arguments possible. Channel energy positively.' : ''} (BNN Logic: 7th house + Venus + Moon placement determines daily relationship energy.)`,
        hi: `7वां भाव (साझेदारी) ${lord7 ? `${PLANET_SANSKRIT[lord7.name as GrahaName]} द्वारा सक्रिय` : 'खाली'}। ${venus && [1,4,5,7,9,11].includes(venus.house) ? 'शुक्र अनुकूल — रोमांटिक ऊर्जा प्रबल। प्रेम व्यक्त करने का अच्छा दिन।' : 'रिश्तों में उम्मीदें सीमित रखें।'} ${moon && [4,5,7].includes(moon.house) ? 'चंद्रमा भावनात्मक बंधन बढ़ाता है।' : ''} (BNN तर्क: 7वां भाव + शुक्र + चंद्र स्थिति दैनिक संबंध ऊर्जा निर्धारित करती है।)`
      },
      ref: 'BNN Relationship Day (Ch.7)'
    });

    // Lucky Elements
    const luckyColor = dayLord === 'Sun' ? 'Orange/Saffron' : dayLord === 'Moon' ? 'White/Silver' : dayLord === 'Mars' ? 'Red/Coral' : dayLord === 'Mercury' ? 'Green' : dayLord === 'Jupiter' ? 'Yellow/Gold' : dayLord === 'Venus' ? 'Pink/White' : 'Blue/Black';
    const luckyColorHi = dayLord === 'Sun' ? 'केसरी/नारंगी' : dayLord === 'Moon' ? 'सफेद/चांदी' : dayLord === 'Mars' ? 'लाल/मूंगा' : dayLord === 'Mercury' ? 'हरा' : dayLord === 'Jupiter' ? 'पीला/सुनहरा' : dayLord === 'Venus' ? 'गुलाबी/सफेद' : 'नीला/काला';
    const luckyNumber = dayLordPlanet ? dayLordPlanet.house : 1;
    sections.push({
      title: { en: '🍀 Today\'s Lucky Elements & Tip', hi: '🍀 आज के भाग्यशाली तत्व और सुझाव' },
      body: {
        en: `Lucky Color: ${luckyColor} (aligned with Day Lord ${dayLord}). Lucky Number: ${luckyNumber}. Lucky Direction: ${dayLord === 'Sun' ? 'East' : dayLord === 'Moon' ? 'North-West' : dayLord === 'Mars' ? 'South' : dayLord === 'Mercury' ? 'North' : dayLord === 'Jupiter' ? 'North-East' : dayLord === 'Venus' ? 'South-East' : 'West'}. Today's Tip: ${dayLordFavorable ? `Leverage the positive energy of ${dayLord} — wear ${luckyColor} color, chant ${dayLord === 'Sun' ? '"Om Suryaya Namah"' : dayLord === 'Moon' ? '"Om Chandraya Namah"' : dayLord === 'Mars' ? '"Om Mangalaya Namah"' : dayLord === 'Mercury' ? '"Om Budhaya Namah"' : dayLord === 'Jupiter' ? '"Om Gurave Namah"' : dayLord === 'Venus' ? '"Om Shukraya Namah"' : '"Om Shanaischaraya Namah"'} 11 times in the morning.` : `Strengthen ${dayLord}'s energy — donate items related to ${dayLord} and maintain a calm, disciplined approach throughout the day.`} (BNN Logic: Day Lord + its natal placement creates personalized daily guidance.)`,
        hi: `भाग्यशाली रंग: ${luckyColorHi} (दिन स्वामी ${PLANET_SANSKRIT[dayLord]} से)। भाग्यशाली अंक: ${luckyNumber}। आज का सुझाव: ${dayLordFavorable ? `${PLANET_SANSKRIT[dayLord]} की सकारात्मक ऊर्जा का लाभ उठाएं — ${luckyColorHi} रंग पहनें, सुबह ${dayLord === 'Sun' ? '"ॐ सूर्याय नमः"' : dayLord === 'Moon' ? '"ॐ चंद्राय नमः"' : dayLord === 'Mars' ? '"ॐ मंगलाय नमः"' : dayLord === 'Mercury' ? '"ॐ बुधाय नमः"' : dayLord === 'Jupiter' ? '"ॐ गुरवे नमः"' : dayLord === 'Venus' ? '"ॐ शुक्राय नमः"' : '"ॐ शनैश्चराय नमः"'} 11 बार जपें।` : `${PLANET_SANSKRIT[dayLord]} की ऊर्जा मजबूत करें — संबंधित वस्तुएं दान करें और शांत, अनुशासित दृष्टिकोण बनाए रखें।`} (BNN तर्क: दिन स्वामी + जन्म स्थिति व्यक्तिगत दैनिक मार्गदर्शन।)`
      },
      ref: 'BNN Daily Remedy (Ch.10)'
    });

    // Overall Rating
    let dayScore = 50;
    if (dayLordFavorable) dayScore += 15;
    if (jupiter && [1,5,9,11].includes(jupiter.house)) dayScore += 10;
    if (venus && [2,4,5,7,9,11].includes(venus.house)) dayScore += 8;
    if (saturn && [6,8,12].includes(saturn.house)) dayScore -= 10;
    if (rahu && [1,7,8].includes(rahu.house)) dayScore -= 8;
    if (moon && [6,8,12].includes(moon.house)) dayScore -= 5;
    dayScore = Math.max(10, Math.min(95, dayScore));
    const ratingLabel = dayScore >= 70 ? { en: 'Excellent Day ⭐⭐⭐⭐⭐', hi: 'उत्कृष्ट दिन ⭐⭐⭐⭐⭐' } : dayScore >= 55 ? { en: 'Good Day ⭐⭐⭐⭐', hi: 'अच्छा दिन ⭐⭐⭐⭐' } : dayScore >= 40 ? { en: 'Average Day ⭐⭐⭐', hi: 'सामान्य दिन ⭐⭐⭐' } : { en: 'Cautious Day ⭐⭐', hi: 'सतर्क दिन ⭐⭐' };

    sections.unshift({
      title: { en: `📊 Your Today's Day Rating — ${dayScore}/100`, hi: `📊 आज की दिन रेटिंग — ${dayScore}/100` },
      body: {
        en: `Overall Day Rating: ${dayScore}/100 — ${ratingLabel.en}. Today (${todayFormatted}), ruled by ${dayLord} (${pInfo(dayLord)}), your planetary alignments ${dayScore >= 55 ? 'are largely supportive. This is a day to take action, pursue opportunities, and trust your instincts.' : 'require mindful navigation. Focus on stability, avoid risky decisions, and lean on your inner strength.'} Your Moon Sign ${moonSign} and Lagna ${ascSign} together shape today's unique energy fingerprint for you. (BNN Logic: Day Score = Day Lord position [±15] + Benefic placements [+8 to +10 each] - Malefic Dusthana placements [-5 to -10 each].)`,
        hi: `समग्र दिन रेटिंग: ${dayScore}/100 — ${ratingLabel.hi}। आज (${todayFormatted}), शासक ${PLANET_SANSKRIT[dayLord]} (${pInfoHi(dayLord)}), ${dayScore >= 55 ? 'ग्रह स्थितियां सहायक। कार्य करें, अवसरों का पीछा करें।' : 'सावधानीपूर्ण दृष्टिकोण रखें। स्थिरता पर ध्यान दें, जोखिम से बचें।'} चंद्र राशि ${RASHI_SANSKRIT[moonSign]} और लग्न ${RASHI_SANSKRIT[ascSign]} आज की अनूठी ऊर्जा बनाते हैं। (BNN तर्क: दिन अंक = दिन स्वामी स्थिति + शुभ ग्रह स्थान - अशुभ दुस्थान।)`
      },
      ref: 'BNN Day Rating Formula'
    });

    return sections;
  }, [report, planets, dayLord, dayName, todayFormatted, isHindi]);

  const fullText = summaryData.map(s => `${isHindi ? s.title.hi : s.title.en}\n${isHindi ? s.body.hi : s.body.en}`).join('\n\n');

  const handleTTS = () => {
    if (isPlaying) { window.speechSynthesis.cancel(); setIsPlaying(false); return; }
    setIsLoading(true);
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = isHindi ? 'hi-IN' : 'en-US';
    utterance.rate = 0.9;
    utterance.onend = () => setIsPlaying(false);
    utterance.onstart = () => { setIsLoading(false); setIsPlaying(true); };
    utterance.onerror = () => { setIsLoading(false); setIsPlaying(false); };
    window.speechSynthesis.speak(utterance);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`🔮 *BNN Daily Horoscope — ${todayFormatted}*\n\n${fullText.substring(0, 2000)}\n\n— Bhrighu Jyotish Vani`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`BNN Daily Horoscope — ${todayFormatted}`);
    const body = encodeURIComponent(fullText);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    toast({ title: isHindi ? 'कॉपी किया गया!' : 'Copied!', description: isHindi ? 'दैनिक राशिफल कॉपी हो गया' : 'Daily horoscope copied to clipboard' });
  };

  return (
    <div ref={sectionRef} className="space-y-4">
      <Card className="border-primary/30 bg-gradient-to-br from-blue-500/10 via-orange-500/5 to-yellow-500/10">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h3 className="font-display text-lg text-primary flex items-center gap-2">
              <Sun className="w-5 h-5 text-blue-400" />
              {isHindi ? 'आज के BNN राशिफल का संक्षिप्त सारांश' : "BNN Brief Summary of Your Today's Horoscope"}
            </h3>
            <div className="flex gap-2 flex-wrap">
              <Button size="sm" variant="outline" onClick={handleTTS} disabled={isLoading} className="border-primary/30">
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant="outline" onClick={handleWhatsApp} className="border-green-500/30 text-green-600">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={handleEmail} className="border-blue-500/30 text-blue-600">
                <Mail className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={handleCopy} className="border-primary/30">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {summaryData.map((section, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-card/60 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2 text-sm">
                  {isHindi ? section.title.hi : section.title.en}
                </h4>
                <ul className="text-sm text-muted-foreground leading-relaxed space-y-2">
                  {formatToPoints(isHindi ? section.body.hi : section.body.en, isHindi).map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-blue-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Badge variant="outline" className="mt-3 text-xs">{section.ref}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

