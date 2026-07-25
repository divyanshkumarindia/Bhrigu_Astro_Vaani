import React, { useState, useRef } from 'react';
import { ChevronDown, LucideIcon, Download, FileText, Printer, Share2, FileType } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { generateWordDocumentWithCharts } from '@/lib/wordExportUtils';

interface CollapsibleSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  iconColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  defaultOpen?: boolean;
  showExport?: boolean;
  chartRefs?: React.RefObject<HTMLElement>[];
  chartTitles?: string[];
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  id,
  title,
  subtitle,
  icon: Icon,
  iconColor = 'text-primary',
  gradientFrom = 'from-primary/20',
  gradientTo = 'to-accent/20',
  defaultOpen = false,
  showExport = true,
  chartRefs = [],
  chartTitles = [],
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isExporting, setIsExporting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleExportPDF = async () => {
    if (!contentRef.current) return;
    
    setIsExporting(true);
    toast.info(t('Generating PDF...', 'PDF बना रहे हैं...'));

    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#0a0a0f',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${title.replace(/\s+/g, '_')}.pdf`);
      toast.success(t('PDF exported!', 'PDF निर्यात किया गया!'));
    } catch (err) {
      console.error('PDF export error:', err);
      toast.error(t('Failed to export PDF', 'PDF निर्यात विफल'));
    }

    setIsExporting(false);
  };

  const handleExportText = () => {
    if (!contentRef.current) return;
    
    const content = contentRef.current.innerText;
    const blob = new Blob([`${title}\n${'='.repeat(title.length)}\n\n${content}`], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(t('Text file exported!', 'टेक्स्ट फ़ाइल निर्यात की गई!'));
  };

  const handleExportWord = async () => {
    if (!contentRef.current) return;
    
    setIsExporting(true);
    toast.info(t('Generating Word document...', 'Word दस्तावेज़ बना रहे हैं...'));

    try {
      const content = contentRef.current.innerText;
      
      await generateWordDocumentWithCharts({
        title,
        content,
        filename: `${title.replace(/\s+/g, '_')}.docx`,
        chartRefs,
        chartTitles,
        successMessage: t('Word document exported!', 'Word दस्तावेज़ निर्यात किया गया!'),
        errorMessage: t('Failed to export Word document', 'Word दस्तावेज़ निर्यात विफल'),
      });
    } catch (err) {
      console.error('Word export error:', err);
    }
    
    setIsExporting(false);
  };

  const handlePrint = () => {
    if (!contentRef.current) return;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${title}</title>
            <style>
              body { font-family: system-ui, sans-serif; padding: 20px; }
              * { color: black !important; background: white !important; }
              h1 { border-bottom: 2px solid #333; padding-bottom: 10px; }
            </style>
          </head>
          <body>
            <h1>${title}</h1>
            ${contentRef.current.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `${title} - Vedic Astrology Report`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast.success(t('Shared successfully!', 'सफलतापूर्वक साझा किया गया!'));
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          navigator.clipboard.writeText(`${title} - ${window.location.href}`);
          toast.success(t('Copied to clipboard!', 'क्लिपबोर्ड पर कॉपी किया गया!'));
        }
      }
    } else {
      navigator.clipboard.writeText(`${title} - ${window.location.href}`);
      toast.success(t('Copied to clipboard!', 'क्लिपबोर्ड पर कॉपी किया गया!'));
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div id={id} className="glass-card rounded-xl border border-primary/20 overflow-hidden scroll-mt-20">
        <CollapsibleTrigger className="w-full">
          <div className="p-4 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-lg bg-gradient-to-br", gradientFrom, gradientTo)}>
                <Icon className={cn("w-5 h-5 sm:w-6 sm:h-6", iconColor)} />
              </div>
              <div className="text-left">
                <h2 className="font-display text-lg sm:text-xl text-primary">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
            <div className={cn(
              "p-2 rounded-full bg-muted/50 transition-transform duration-300",
              isOpen && "rotate-180"
            )}>
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
            <div ref={contentRef}>
              {children}
            </div>
            
            {showExport && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/30 hover:border-blue-400/50"
                  onClick={handleExportPDF}
                  disabled={isExporting}
                >
                  <Download className="w-3 h-3 mr-1.5 text-blue-400" />
                  <span className="text-xs">PDF</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-400/50"
                  onClick={handleExportText}
                >
                  <FileText className="w-3 h-3 mr-1.5 text-green-400" />
                  <span className="text-xs">{t('Text', 'टेक्स्ट')}</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-cyan-500/30 hover:border-cyan-400/50"
                  onClick={handleExportWord}
                >
                  <FileType className="w-3 h-3 mr-1.5 text-cyan-400" />
                  <span className="text-xs">{t('Word', 'वर्ड')}</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-400/50"
                  onClick={handlePrint}
                >
                  <Printer className="w-3 h-3 mr-1.5 text-purple-400" />
                  <span className="text-xs">{t('Print', 'प्रिंट')}</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border-orange-500/30 hover:border-orange-400/50"
                  onClick={handleShare}
                >
                  <Share2 className="w-3 h-3 mr-1.5 text-sky-400" />
                  <span className="text-xs">{t('Share', 'शेयर')}</span>
                </Button>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

