import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, ImageRun, PageBreak } from 'docx';

interface ExportOptions {
  summaryCardRef: React.RefObject<HTMLDivElement>;
  recommendationsCardRef: React.RefObject<HTMLDivElement>;
  nativeName: string;
  language: 'en' | 'hi';
  onProgress?: (stage: string) => void;
}

interface WordExportData {
  nativeName: string;
  currentMahadasha: string;
  currentAntardasha: string;
  currentPratyantardasha: string;
  mahadashaRemaining: string;
  antardashaRemaining: string;
  pratyantardashaEndDate: Date;
  janmaRashi: string;
  healthRiskLevel: string;
  dominantDosha: { vata: number; pitta: number; kapha: number };
  morningAffirmation: string;
  beejMantra: string;
  mantraCount: number;
  dailyRitual: string;
  bestTiming: string;
  luckyColor: string;
  gemstone: string;
  deity: string;
  donation: string;
  yogaAsana: string;
  dietaryAdvice: string;
  healthAction: string;
  immediateActions: string[];
  weeklyGoals: string[];
  monthlyMilestones: string[];
}

const getText = (en: string, hi: string, lang: 'en' | 'hi') => lang === 'hi' ? hi : en;

export const exportCombinedMedicalPDF = async ({
  summaryCardRef,
  recommendationsCardRef,
  nativeName,
  language,
  onProgress,
}: ExportOptions): Promise<boolean> => {
  try {
    if (!summaryCardRef.current || !recommendationsCardRef.current) {
      toast.error(getText('Cards not found', 'कार्ड नहीं मिले', language));
      return false;
    }

    onProgress?.(getText('Capturing Health Summary...', 'स्वास्थ्य सारांश कैप्चर हो रहा है...', language));
    
    // Capture Summary Card
    const summaryCanvas = await html2canvas(summaryCardRef.current, {
      scale: 2.5,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    onProgress?.(getText('Capturing Recommendations...', 'सिफारिशें कैप्चर हो रही हैं...', language));
    
    // Capture Recommendations Card
    const recommendationsCanvas = await html2canvas(recommendationsCardRef.current, {
      scale: 2.5,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    onProgress?.(getText('Generating PDF...', 'PDF बना रहे हैं...', language));

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 10;
    const contentWidth = pageWidth - (margin * 2);

    // --- Cover Page ---
    pdf.setFillColor(220, 38, 38); // Red-600
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    
    // Decorative border
    pdf.setDrawColor(255, 215, 0); // Gold
    pdf.setLineWidth(1);
    pdf.rect(margin, margin, contentWidth, pageHeight - (margin * 2), 'S');
    pdf.rect(margin + 3, margin + 3, contentWidth - 6, pageHeight - (margin * 2) - 6, 'S');

    // Title
    pdf.setTextColor(255, 215, 0);
    pdf.setFontSize(28);
    pdf.setFont('helvetica', 'bold');
    const title = getText('COMPLETE MEDICAL ASTROLOGY REPORT', 'संपूर्ण चिकित्सा ज्योतिष रिपोर्ट', language);
    pdf.text(title, pageWidth / 2, 60, { align: 'center' });

    // Subtitle
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    const subtitle = getText("Based on R.G. Rao's Bhrighu Nandi Nadi", "R.G. राव की भृगु नंदी नाड़ी पर आधारित", language);
    pdf.text(subtitle, pageWidth / 2, 75, { align: 'center' });

    // Decorative symbol
    pdf.setFontSize(40);
    pdf.text('🩺', pageWidth / 2, 110, { align: 'center' });

    // Native Name
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text(getText('Prepared for:', 'के लिए तैयार:', language), pageWidth / 2, 145, { align: 'center' });
    pdf.setTextColor(255, 215, 0);
    pdf.setFontSize(24);
    pdf.text(nativeName, pageWidth / 2, 160, { align: 'center' });

    // Date
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(12);
    const dateStr = new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    pdf.text(dateStr, pageWidth / 2, 180, { align: 'center' });

    // Contents
    pdf.setFontSize(14);
    pdf.text(getText('Report Contents:', 'रिपोर्ट विषय:', language), pageWidth / 2, 210, { align: 'center' });
    
    pdf.setFontSize(11);
    const contents = language === 'hi' 
      ? ['1. स्वास्थ्य भविष्यवाणी सारांश', '2. आयुर्वेदिक दोष विश्लेषण', '3. महादशा-अंतर्दशा स्वास्थ्य प्रभाव', '4. गोचर स्वास्थ्य विश्लेषण', '5. आपकी स्वास्थ्य कार्य योजना', '6. दैनिक स्वास्थ्य अभ्यास']
      : ['1. Health Prediction Summary', '2. Ayurvedic Dosha Analysis', '3. Mahadasha-Antardasha Health Impact', '4. Gochar Health Analysis', '5. Your Health Action Plan', '6. Daily Health Practice'];
    
    contents.forEach((item, idx) => {
      pdf.text(item, pageWidth / 2, 225 + (idx * 8), { align: 'center' });
    });

    // Footer
    pdf.setFontSize(9);
    pdf.setTextColor(180, 180, 180);
    pdf.text(getText('Generated by Jyoti Stellar Compass', 'ज्योति स्टेलर कम्पास द्वारा निर्मित', language), pageWidth / 2, pageHeight - 20, { align: 'center' });

    // --- Page 2: Health Summary Card ---
    pdf.addPage();
    
    // Page header
    pdf.setFillColor(220, 38, 38); // Red
    pdf.rect(0, 0, pageWidth, 25, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(getText('Health Prediction Summary', 'स्वास्थ्य भविष्यवाणी सारांश', language), pageWidth / 2, 16, { align: 'center' });
    
    // Add summary card image
    const summaryImgData = summaryCanvas.toDataURL('image/png');
    const summaryImgHeight = (summaryCanvas.height * contentWidth) / summaryCanvas.width;
    
    const maxHeight = pageHeight - 40;
    const finalSummaryHeight = Math.min(summaryImgHeight, maxHeight);
    const finalSummaryWidth = (finalSummaryHeight / summaryImgHeight) * contentWidth;
    
    pdf.addImage(
      summaryImgData, 
      'PNG', 
      (pageWidth - finalSummaryWidth) / 2, 
      30, 
      finalSummaryWidth, 
      finalSummaryHeight
    );

    // --- Page 3: Recommendations Card ---
    pdf.addPage();
    
    // Page header
    pdf.setFillColor(16, 185, 129); // Emerald
    pdf.rect(0, 0, pageWidth, 25, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(getText('Your Health Action Plan', 'आपकी स्वास्थ्य कार्य योजना', language), pageWidth / 2, 16, { align: 'center' });
    
    // Add recommendations card image
    const recImgData = recommendationsCanvas.toDataURL('image/png');
    const recImgHeight = (recommendationsCanvas.height * contentWidth) / recommendationsCanvas.width;
    
    const finalRecHeight = Math.min(recImgHeight, maxHeight);
    const finalRecWidth = (finalRecHeight / recImgHeight) * contentWidth;
    
    pdf.addImage(
      recImgData, 
      'PNG', 
      (pageWidth - finalRecWidth) / 2, 
      30, 
      finalRecWidth, 
      finalRecHeight
    );

    // --- Final Page: Disclaimer ---
    pdf.addPage();
    
    pdf.setFillColor(248, 250, 252);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    
    pdf.setTextColor(30, 41, 59);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text(getText('Important Medical Disclaimer', 'महत्वपूर्ण चिकित्सा अस्वीकरण', language), pageWidth / 2, 40, { align: 'center' });
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    
    const disclaimerEn = [
      '• This report is generated based on Vedic medical astrology principles',
      "  using R.G. Rao's Bhrighu Nandi Nadi methodology.",
      '',
      '• This is NOT a substitute for professional medical advice, diagnosis,',
      '  or treatment. Always consult qualified healthcare providers.',
      '',
      '• The health predictions and recommendations are based on astrological',
      '  principles and should be used for guidance purposes only.',
      '',
      '• For any health concerns, please consult a qualified medical professional',
      '  before making health-related decisions.',
      '',
      '• The Ayurvedic and yoga recommendations are general guidelines. Consult',
      '  an Ayurvedic practitioner for personalized treatment.',
      '',
      '• This report is computer-generated and may not capture all nuances',
      '  that a human astrologer would observe.',
    ];
    
    const disclaimerHi = [
      '• यह रिपोर्ट R.G. राव की भृगु नंदी नाड़ी पद्धति का उपयोग करते हुए',
      '  वैदिक चिकित्सा ज्योतिष सिद्धांतों पर आधारित है।',
      '',
      '• यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है।',
      '  हमेशा योग्य स्वास्थ्य सेवा प्रदाताओं से परामर्श करें।',
      '',
      '• स्वास्थ्य भविष्यवाणियाँ और सिफारिशें ज्योतिषीय सिद्धांतों पर आधारित हैं',
      '  और केवल मार्गदर्शन उद्देश्यों के लिए उपयोग की जानी चाहिए।',
      '',
      '• किसी भी स्वास्थ्य चिंता के लिए, स्वास्थ्य संबंधी निर्णय लेने से पहले',
      '  कृपया योग्य चिकित्सा पेशेवर से परामर्श करें।',
      '',
      '• आयुर्वेदिक और योग सिफारिशें सामान्य दिशानिर्देश हैं। व्यक्तिगत उपचार',
      '  के लिए आयुर्वेदिक चिकित्सक से परामर्श करें।',
      '',
      '• यह रिपोर्ट कंप्यूटर-जनित है और इसमें वे सभी सूक्ष्मताएं शामिल नहीं हो',
      '  सकती हैं जो एक मानव ज्योतिषी देख सकता है।',
    ];

    const disclaimer = language === 'hi' ? disclaimerHi : disclaimerEn;
    disclaimer.forEach((line, idx) => {
      pdf.text(line, margin + 10, 60 + (idx * 7));
    });

    // Thank you message
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(220, 38, 38);
    pdf.text(getText('Thank you for using Jyoti Stellar Compass!', 'ज्योति स्टेलर कम्पास का उपयोग करने के लिए धन्यवाद!', language), pageWidth / 2, 200, { align: 'center' });

    // Health blessing
    pdf.setFontSize(10);
    pdf.setTextColor(100, 116, 139);
    pdf.setFont('helvetica', 'normal');
    pdf.text('🌟 ' + getText('May the stars bless you with good health and longevity!', 'तारे आपको अच्छे स्वास्थ्य और दीर्घायु का आशीर्वाद दें!', language), pageWidth / 2, 215, { align: 'center' });

    // Page numbers
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text(`${getText('Page', 'पृष्ठ', language)} ${i} / ${totalPages}`, pageWidth / 2, pageHeight - 8, { align: 'center' });
    }

    // Save PDF
    pdf.save(`Complete_Medical_Report_${nativeName.replace(/\s+/g, '_')}.pdf`);
    
    return true;
  } catch (error) {
    console.error('Combined Medical PDF export error:', error);
    return false;
  }
};

export const printCombinedMedicalReport = (
  summaryCardRef: React.RefObject<HTMLDivElement>,
  recommendationsCardRef: React.RefObject<HTMLDivElement>,
  language: 'en' | 'hi'
) => {
  if (!summaryCardRef.current || !recommendationsCardRef.current) {
    toast.error(getText('Cards not found', 'कार्ड नहीं मिले', language));
    return;
  }

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(`
      <html>
        <head>
          <title>${getText('Complete Medical Report', 'संपूर्ण चिकित्सा रिपोर्ट', language)}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600&display=swap');
            @page { margin: 15mm; }
            body { font-family: system-ui, 'Noto Serif Devanagari', sans-serif; margin: 0; padding: 0; background: white; }
            * { color: black !important; }
            .page-break { page-break-after: always; }
            .cover {
              text-align: center;
              padding: 60px 20px;
              background: linear-gradient(135deg, #dc2626 0%, #f87171 100%);
              color: white !important;
              min-height: 80vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .cover * { color: white !important; }
            .cover h1 { font-size: 28px; color: #ffd700 !important; margin-bottom: 10px; }
            .cover h2 { font-size: 16px; opacity: 0.9; }
            .cover .symbol { font-size: 48px; margin: 30px 0; }
            .cover .name { font-size: 24px; color: #ffd700 !important; margin-top: 20px; }
            .section { margin: 20px 0; }
            .section-title { 
              background: #dc2626; 
              color: white !important; 
              padding: 12px 20px; 
              font-size: 16px; 
              font-weight: bold;
              margin-bottom: 20px;
            }
            .card { 
              max-width: 100%; 
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="cover">
            <h1>${getText('COMPLETE MEDICAL ASTROLOGY REPORT', 'संपूर्ण चिकित्सा ज्योतिष रिपोर्ट', language)}</h1>
            <h2>${getText("Based on R.G. Rao's Bhrighu Nandi Nadi", "R.G. राव की भृगु नंदी नाड़ी पर आधारित", language)}</h2>
            <div class="symbol">🩺</div>
            <p>${getText('Generated on:', 'निर्माण तिथि:', language)} ${new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN')}</p>
          </div>
          
          <div class="page-break"></div>
          
          <div class="section">
            <div class="section-title">${getText('Health Prediction Summary', 'स्वास्थ्य भविष्यवाणी सारांश', language)}</div>
            <div class="card">${summaryCardRef.current.outerHTML}</div>
          </div>
          
          <div class="page-break"></div>
          
          <div class="section">
            <div class="section-title" style="background: #10b981;">${getText('Your Health Action Plan', 'आपकी स्वास्थ्य कार्य योजना', language)}</div>
            <div class="card">${recommendationsCardRef.current.outerHTML}</div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  }
};

// Word Document Export
export const exportCombinedMedicalWord = async (
  data: WordExportData,
  language: 'en' | 'hi'
): Promise<boolean> => {
  try {
    const t = (en: string, hi: string) => language === 'hi' ? hi : en;
    
    const createSectionHeader = (text: string) => new Paragraph({
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 28,
          color: 'dc2626',
        }),
      ],
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 6, color: 'f87171' },
      },
    });

    const createSubHeader = (text: string) => new Paragraph({
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 24,
          color: '10b981',
        }),
      ],
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 150 },
    });

    const createLabelValue = (label: string, value: string) => new Paragraph({
      children: [
        new TextRun({ text: `${label}: `, bold: true, size: 22 }),
        new TextRun({ text: value, size: 22 }),
      ],
      spacing: { before: 80, after: 80 },
    });

    const createBulletPoint = (text: string) => new Paragraph({
      children: [new TextRun({ text: `• ${text}`, size: 22 })],
      spacing: { before: 40, after: 40 },
    });

    const daysRemaining = Math.ceil((data.pratyantardashaEndDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          // Title Page
          new Paragraph({
            children: [
              new TextRun({
                text: t('COMPLETE MEDICAL ASTROLOGY REPORT', 'संपूर्ण चिकित्सा ज्योतिष रिपोर्ट'),
                bold: true,
                size: 48,
                color: 'dc2626',
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 1000, after: 400 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: t("Based on R.G. Rao's Bhrighu Nandi Nadi", "R.G. राव की भृगु नंदी नाड़ी पर आधारित"),
                italics: true,
                size: 24,
                color: '64748b',
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 },
          }),
          new Paragraph({
            children: [new TextRun({ text: '🩺', size: 80 })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: t('Prepared for: ', 'के लिए तैयार: '), size: 24 }),
              new TextRun({ text: data.nativeName, bold: true, size: 32, color: 'dc2626' }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
                  year: 'numeric', month: 'long', day: 'numeric'
                }),
                size: 22,
                color: '64748b',
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 1000 },
          }),
          new Paragraph({ children: [new PageBreak()] }),

          // Current Period Section
          createSectionHeader(t('Current Dasha Period Analysis', 'वर्तमान दशा काल विश्लेषण')),
          createLabelValue(t('Mahadasha', 'महादशा'), `${data.currentMahadasha} (${data.mahadashaRemaining})`),
          createLabelValue(t('Antardasha', 'अंतर्दशा'), `${data.currentAntardasha} (${data.antardashaRemaining})`),
          createLabelValue(t('Pratyantardasha', 'प्रत्यंतर्दशा'), `${data.currentPratyantardasha} (${daysRemaining} days remaining)`),
          createLabelValue(t('Health Risk Level', 'स्वास्थ्य जोखिम स्तर'), data.healthRiskLevel.toUpperCase()),

          // Ayurvedic Section
          createSectionHeader(t('Ayurvedic Dosha Analysis', 'आयुर्वेदिक दोष विश्लेषण')),
          createLabelValue(t('Vata', 'वात'), `${data.dominantDosha.vata}%`),
          createLabelValue(t('Pitta', 'पित्त'), `${data.dominantDosha.pitta}%`),
          createLabelValue(t('Kapha', 'कफ'), `${data.dominantDosha.kapha}%`),

          // Daily Practice Section
          createSectionHeader(t('Your Daily Health Practice', 'आपका दैनिक स्वास्थ्य अभ्यास')),
          createSubHeader(t('Health Affirmation', 'स्वास्थ्य प्रतिज्ञा')),
          new Paragraph({
            children: [new TextRun({ text: `"${data.morningAffirmation}"`, italics: true, size: 22 })],
            spacing: { after: 200 },
          }),
          createSubHeader(t('Healing Mantra', 'उपचार मंत्र')),
          createLabelValue(t('Mantra', 'मंत्र'), data.beejMantra),
          createLabelValue(t('Repetitions', 'जाप'), `${data.mantraCount} times daily`),
          createSubHeader(t('Daily Ritual', 'दैनिक अनुष्ठान')),
          new Paragraph({
            children: [new TextRun({ text: data.dailyRitual, size: 22 })],
            spacing: { after: 200 },
          }),

          // Yoga & Diet Section
          createSectionHeader(t('Yoga & Dietary Recommendations', 'योग और आहार सिफारिशें')),
          createLabelValue(t('Recommended Yoga', 'अनुशंसित योग'), data.yogaAsana),
          createLabelValue(t('Dietary Advice', 'आहार सलाह'), data.dietaryAdvice),

          // Action Items
          createSectionHeader(t('Health Action Plan', 'स्वास्थ्य कार्य योजना')),
          createSubHeader(t("Today's Actions", 'आज के कार्य')),
          ...data.immediateActions.map(action => createBulletPoint(action)),
          createSubHeader(t('Weekly Goals', 'साप्ताहिक लक्ष्य')),
          ...data.weeklyGoals.map(goal => createBulletPoint(goal)),
          createSubHeader(t('Monthly Milestones', 'मासिक लक्ष्य')),
          ...data.monthlyMilestones.map(milestone => createBulletPoint(milestone)),

          // Lucky Elements
          createSectionHeader(t('Health-Boosting Elements', 'स्वास्थ्य-वर्धक तत्व')),
          createLabelValue(t('Best Timing', 'सर्वोत्तम समय'), data.bestTiming),
          createLabelValue(t('Lucky Color', 'शुभ रंग'), data.luckyColor),
          createLabelValue(t('Gemstone', 'रत्न'), data.gemstone),
          createLabelValue(t('Deity', 'देवता'), data.deity),
          createLabelValue(t('Donation', 'दान'), data.donation),

          // Priority Health Action
          createSectionHeader(t('Priority Health Action', 'प्राथमिकता स्वास्थ्य कार्रवाई')),
          new Paragraph({
            children: [new TextRun({ text: data.healthAction, size: 24, bold: true, color: 'dc2626' })],
            spacing: { after: 400 },
          }),

          // Disclaimer
          new Paragraph({ children: [new PageBreak()] }),
          createSectionHeader(t('Important Medical Disclaimer', 'महत्वपूर्ण चिकित्सा अस्वीकरण')),
          new Paragraph({
            children: [
              new TextRun({
                text: t(
                  'This report is based on Vedic medical astrology principles and is NOT a substitute for professional medical advice. Always consult qualified healthcare providers for health concerns.',
                  'यह रिपोर्ट वैदिक चिकित्सा ज्योतिष सिद्धांतों पर आधारित है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है। स्वास्थ्य संबंधी चिंताओं के लिए हमेशा योग्य स्वास्थ्य सेवा प्रदाताओं से परामर्श करें।'
                ),
                size: 20,
                color: '64748b',
              }),
            ],
            spacing: { after: 400 },
          }),

          // Footer
          new Paragraph({
            children: [
              new TextRun({
                text: t('Generated by Jyoti Stellar Compass', 'ज्योति स्टेलर कम्पास द्वारा निर्मित'),
                size: 18,
                color: '94a3b8',
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 600 },
          }),
        ],
      }],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Complete_Medical_Report_${data.nativeName.replace(/\s+/g, '_')}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error('Word export error:', error);
    return false;
  }
};
