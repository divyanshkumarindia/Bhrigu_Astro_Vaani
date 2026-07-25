import React, { useState } from 'react';
import { Panchang } from '@/types/astrology';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Moon, Star, Sparkles, Calendar, Sun, ChevronDown, ChevronUp, BookOpen, Info } from 'lucide-react';

interface PanchangDisplayProps {
  panchang: Panchang;
}

// Panchang Reference Data
const PANCHANG_REFERENCE = {
  tithi: {
    en: 'Tithi is the lunar day based on the Moon\'s distance from the Sun. Each lunar month has 30 tithis. Shukla Paksha (waxing) tithis are auspicious for new beginnings, while Krishna Paksha (waning) tithis are good for completion of tasks.',
    hi: 'तिथि चंद्रमा की सूर्य से दूरी पर आधारित चंद्र दिन है। प्रत्येक चंद्र मास में 30 तिथियां होती हैं। शुक्ल पक्ष की तिथियां नई शुरुआत के लिए शुभ हैं, जबकि कृष्ण पक्ष की तिथियां कार्यों को पूरा करने के लिए अच्छी हैं।'
  },
  nakshatra: {
    en: 'Nakshatra (lunar mansion) is the star constellation the Moon is transiting. There are 27 nakshatras, each spanning 13°20\'. The nakshatra at birth determines one\'s Mahadasha sequence and many personality traits.',
    hi: 'नक्षत्र वह तारा मंडल है जिसमें चंद्रमा गोचर कर रहा है। 27 नक्षत्र हैं, प्रत्येक 13°20\' का। जन्म नक्षत्र महादशा क्रम और कई व्यक्तित्व लक्षण निर्धारित करता है।'
  },
  yoga: {
    en: 'Yoga is formed by adding the longitudes of Sun and Moon. There are 27 yogas, each with different effects. Some yogas are highly auspicious (Siddhi, Shiva) while others need caution (Vyaghata, Parigha).',
    hi: 'योग सूर्य और चंद्र के अंशों को जोड़कर बनता है। 27 योग हैं, प्रत्येक के अलग प्रभाव हैं। कुछ योग अत्यंत शुभ हैं (सिद्धि, शिव) जबकि अन्य में सावधानी आवश्यक है (व्याघात, परिघ)।'
  },
  karana: {
    en: 'Karana is half of a tithi. There are 11 karanas that repeat in a cycle. Karanas help in determining muhurta for specific activities like travel, marriage, and business ventures.',
    hi: 'करण तिथि का आधा भाग है। 11 करण हैं जो चक्र में दोहराते हैं। करण यात्रा, विवाह और व्यापार जैसी विशिष्ट गतिविधियों के लिए मुहूर्त निर्धारित करने में मदद करते हैं।'
  },
  vara: {
    en: 'Vara is the weekday, each ruled by a planet. Sunday (Sun), Monday (Moon), Tuesday (Mars), Wednesday (Mercury), Thursday (Jupiter), Friday (Venus), Saturday (Saturn). Each day is suited for activities related to its ruling planet.',
    hi: 'वार सप्ताह का दिन है, प्रत्येक एक ग्रह द्वारा शासित। रविवार (सूर्य), सोमवार (चंद्र), मंगलवार (मंगल), बुधवार (बुध), गुरुवार (गुरु), शुक्रवार (शुक्र), शनिवार (शनि)।'
  }
};

export const PanchangDisplay: React.FC<PanchangDisplayProps> = ({ panchang }) => {
  const { t, language } = useLanguage();
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);

  const panchangItems = [
    {
      icon: <Moon className="w-5 h-5 text-blue-400" />,
      label: t('Tithi', 'तिथि'),
      value: panchang.tithi.name,
      subValue: `${panchang.tithi.paksha} ${t('Paksha', 'पक्ष')}`,
      bgClass: 'from-blue-500/20 to-blue-500/5'
    },
    {
      icon: <Star className="w-5 h-5 text-purple-400" />,
      label: t('Nakshatra', 'नक्षत्र'),
      value: panchang.nakshatra.name,
      subValue: `${t('Pada', 'पाद')} ${panchang.nakshatra.pada}`,
      bgClass: 'from-purple-500/20 to-purple-500/5'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      label: t('Yog', 'योग'),
      value: panchang.yoga.name,
      subValue: null,
      bgClass: 'from-blue-500/20 to-blue-500/5'
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-400" />,
      label: t('Karana', 'करण'),
      value: panchang.karana.name,
      subValue: null,
      bgClass: 'from-green-500/20 to-green-500/5'
    },
    {
      icon: <Sun className="w-5 h-5 text-sky-400" />,
      label: t('Vara', 'वार'),
      value: panchang.vara.sanskrit,
      subValue: panchang.vara.lord,
      bgClass: 'from-sky-500/20 to-sky-500/5'
    }
  ];

  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="font-display text-lg text-primary mb-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
          <Moon className="w-5 h-5 text-primary" />
        </div>
        {t('पंचांग (Panchang)', 'पंचांग (Panchang)')}
      </h3>
      
      <div className="flex flex-wrap gap-2.5 mb-6">
        {panchangItems.map((item, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="text-[13px] px-4 py-2 bg-white/40 dark:bg-white/5 border-primary/20 hover:bg-primary/5 transition-all font-bold rounded-full shadow-sm flex items-center gap-2"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <span className="text-muted-foreground font-normal">{item.label}:</span>
            <span className="text-foreground">{item.value}</span>
            {item.subValue && (
              <span className="text-primary/70 text-[11px] font-medium ml-1">({item.subValue})</span>
            )}
          </Badge>
        ))}
      </div>

      {/* Reference Section */}
      <Collapsible open={isReferenceOpen} onOpenChange={setIsReferenceOpen}>
        <div className="mt-4">
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full h-auto py-4 rounded-2xl bg-white/40 dark:bg-white/5 border-primary/20 hover:bg-primary/5 transition-all shadow-sm flex items-start justify-between px-5 gap-3 whitespace-normal text-left"
            >
              <div className="flex gap-3 flex-1">
                <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[15px] font-bold text-foreground leading-snug">
                    {t('Reference: Understanding Panchang Elements', 'संदर्भ: पंचांग तत्वों को समझना')}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-[9px] uppercase tracking-tighter font-extrabold bg-primary/10 text-primary border-none px-1.5 py-0 h-4">
                      {t('Reference Section', 'संदर्भ खंड')}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 mt-0.5">
                {isReferenceOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-primary" />}
              </div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="grid gap-3">
              {Object.entries(PANCHANG_REFERENCE).map(([key, data]) => (
                <div key={key} className="bg-card/50 rounded-lg p-3 border border-border/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-primary" />
                    <span className="font-medium text-primary capitalize">{key}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {language === 'hi' ? data.hi : data.en}
                  </p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
};

