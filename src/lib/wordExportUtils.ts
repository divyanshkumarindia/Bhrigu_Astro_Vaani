import { Document, Packer, Paragraph, TextRun, HeadingLevel, ImageRun, AlignmentType } from 'docx';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';

interface WordExportOptions {
  title: string;
  content: string;
  filename: string;
  successMessage?: string;
  errorMessage?: string;
}

interface WordExportWithChartsOptions extends WordExportOptions {
  chartRefs?: React.RefObject<HTMLElement>[];
  chartTitles?: string[];
}

// Check if element is a Kundali chart (should be preserved as-is)
const isKundaliChart = (element: HTMLElement): boolean => {
  // Check for Kundali chart identifiers
  const id = element.id?.toLowerCase() || '';
  const className = element.className?.toLowerCase() || '';
  
  // Lagna Kundali and Chalit charts should be preserved
  if (id.includes('north-indian-chart') || id.includes('chalit') || id.includes('lagna')) {
    return true;
  }
  if (className.includes('north-indian-chart') || className.includes('chalit') || className.includes('lagna')) {
    return true;
  }
  
  // Check for specific chart titles in the element
  const textContent = element.textContent?.toLowerCase() || '';
  if (textContent.includes('lagna kundali') || textContent.includes('chalit chart') || textContent.includes('bhava chalit')) {
    return true;
  }
  
  return false;
};

// Capture a DOM element as base64 image data
export const captureElementAsImage = async (element: HTMLElement, preserveOriginalStyle: boolean = false): Promise<{ data: Uint8Array; width: number; height: number } | null> => {
  try {
    // Check if this is a Kundali chart - preserve original styling
    const shouldPreserveStyle = preserveOriginalStyle || isKundaliChart(element);
    
    // Store original styles for restoration
    const originalStyles = new Map<Element, string>();
    const originalAttributes = new Map<Element, Map<string, string | null>>();
    
    // Store original element style
    originalStyles.set(element, element.style.cssText);
    
    // Get all elements including SVG elements
    const allElements = element.querySelectorAll('*');
    allElements.forEach((el) => {
      originalStyles.set(el, (el as HTMLElement).style?.cssText || '');
    });
    
    // Only apply print-friendly styles if NOT a Kundali chart
    if (!shouldPreserveStyle) {
      // Apply print-friendly styles to root element
      element.style.cssText += '; background-color: #ffffff !important; color: #000000 !important;';
      
      // Process all child elements
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        
        // Handle SVG elements specially
        if (el.tagName.toLowerCase() === 'svg') {
          htmlEl.style.cssText += '; background-color: #ffffff !important;';
        } else if (el.tagName.toLowerCase() === 'rect') {
          // Store original attributes
          const attrMap = new Map<string, string | null>();
          attrMap.set('fill', el.getAttribute('fill'));
          attrMap.set('stroke', el.getAttribute('stroke'));
          originalAttributes.set(el, attrMap);
          
          // Set white fill for rect backgrounds
          const currentFill = el.getAttribute('fill');
          if (currentFill === 'none' || !currentFill) {
            el.setAttribute('fill', '#ffffff');
          }
          // Make strokes dark for visibility
          const currentStroke = el.getAttribute('stroke');
          if (currentStroke) {
            el.setAttribute('stroke', '#333333');
          }
        } else if (el.tagName.toLowerCase() === 'line' || el.tagName.toLowerCase() === 'polygon') {
          // Store original stroke
          const attrMap = new Map<string, string | null>();
          attrMap.set('stroke', el.getAttribute('stroke'));
          originalAttributes.set(el, attrMap);
          
          // Make lines visible on white background
          el.setAttribute('stroke', '#333333');
        } else if (el.tagName.toLowerCase() === 'text') {
          // Store original fill
          const attrMap = new Map<string, string | null>();
          attrMap.set('fill', el.getAttribute('fill'));
          attrMap.set('class', el.getAttribute('class'));
          originalAttributes.set(el, attrMap);
          
          // Make text black
          el.setAttribute('fill', '#000000');
          htmlEl.style.cssText += '; fill: #000000 !important; color: #000000 !important;';
        } else if (htmlEl.style) {
          // Regular HTML elements - force white background and black text
          htmlEl.style.cssText += '; background-color: #ffffff !important; color: #000000 !important; border-color: #cccccc !important;';
          
          // Remove any backdrop filters or gradients
          htmlEl.style.backdropFilter = 'none';
          htmlEl.style.background = '#ffffff';
        }
      });
    }
    
    // Capture with html2canvas - use null background for Kundali charts to preserve their styling
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: shouldPreserveStyle ? null : '#ffffff',
      removeContainer: true,
    });
    
    const dataUrl = canvas.toDataURL('image/png');
    const base64Data = dataUrl.split(',')[1];
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    // Restore original styles
    element.style.cssText = originalStyles.get(element) || '';
    allElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      if (htmlEl.style) {
        htmlEl.style.cssText = originalStyles.get(el) || '';
      }
      
      // Restore SVG attributes
      const attrMap = originalAttributes.get(el);
      if (attrMap) {
        attrMap.forEach((value, key) => {
          if (value !== null) {
            el.setAttribute(key, value);
          } else {
            el.removeAttribute(key);
          }
        });
      }
    });
    
    return {
      data: bytes,
      width: canvas.width,
      height: canvas.height,
    };
  } catch (err) {
    console.error('Error capturing element as image:', err);
    return null;
  }
};

// Create image paragraph for Word document
const createImageParagraph = (imageData: Uint8Array, width: number, height: number, maxWidth: number = 550): Paragraph => {
  // Scale image to fit within page width while maintaining aspect ratio
  const aspectRatio = height / width;
  const scaledWidth = Math.min(width / 2, maxWidth); // Divide by 2 because we captured at 2x scale
  const scaledHeight = scaledWidth * aspectRatio;
  
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new ImageRun({
        data: imageData,
        transformation: {
          width: scaledWidth,
          height: scaledHeight,
        },
        type: 'png',
      }),
    ],
    spacing: { before: 200, after: 200 },
  });
};

export const generateWordDocument = async (options: WordExportOptions): Promise<void> => {
  const { title, content, filename, successMessage = 'Word document exported!', errorMessage = 'Failed to export Word document' } = options;
  
  try {
    const lines = content.split('\n').filter(line => line.trim());
    
    const paragraphs = [
      new Paragraph({
        children: [new TextRun({ text: title, bold: true, size: 36 })],
        heading: HeadingLevel.TITLE,
        spacing: { after: 300 },
      }),
      ...lines.map((line) => {
        // Lines with colons early in the text as subheadings
        if (line.includes(':') && line.indexOf(':') < 35) {
          return new Paragraph({
            children: [new TextRun({ text: line, bold: true, size: 24 })],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          });
        }
        // Regular paragraphs
        return new Paragraph({
          children: [new TextRun({ text: line, size: 22 })],
          spacing: { after: 100 },
        });
      }),
    ];

    const doc = new Document({
      sections: [{
        properties: {},
        children: paragraphs,
      }],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename.endsWith('.docx') ? filename : `${filename}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(successMessage);
  } catch (err) {
    console.error('Word export error:', err);
    toast.error(errorMessage);
    throw err;
  }
};

// Generate Word document with embedded chart images
export const generateWordDocumentWithCharts = async (options: WordExportWithChartsOptions): Promise<void> => {
  const { 
    title, 
    content, 
    filename, 
    chartRefs = [], 
    chartTitles = [],
    successMessage = 'Word document with charts exported!', 
    errorMessage = 'Failed to export Word document with charts' 
  } = options;
  
  try {
    const documentChildren: Paragraph[] = [];
    
    // Title - 20pt bold centered
    documentChildren.push(
      new Paragraph({
        children: [new TextRun({ text: title, bold: true, size: 40, font: 'Times New Roman' })],
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
      })
    );

    // Subtitle - italic
    documentChildren.push(
      new Paragraph({
        children: [new TextRun({ text: 'Based on R.G. Rao\'s "Bhrighu Nandi Nadi" Methodology', italics: true, size: 20, font: 'Times New Roman', color: '666666' })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
      })
    );
    
    // Capture and add chart images
    for (let i = 0; i < chartRefs.length; i++) {
      const ref = chartRefs[i];
      if (ref?.current) {
        const chartTitle = chartTitles[i] || `Chart ${i + 1}`;
        
        documentChildren.push(
          new Paragraph({
            children: [new TextRun({ text: chartTitle, bold: true, size: 28, font: 'Times New Roman' })],
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 300, after: 150 },
          })
        );
        
        const imageData = await captureElementAsImage(ref.current);
        if (imageData) {
          documentChildren.push(
            createImageParagraph(imageData.data, imageData.width, imageData.height)
          );
        }
      }
    }
    
    // Separator
    if (chartRefs.length > 0 && content.trim()) {
      documentChildren.push(
        new Paragraph({
          children: [new TextRun({ text: '─'.repeat(50), color: '888888', font: 'Times New Roman' })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 400, after: 400 },
        })
      );
    }
    
    // Text content with proper formatting
    const lines = content.split('\n').filter(line => line.trim());
    lines.forEach((line) => {
      const isHeader = line.includes(':') && line.indexOf(':') < 40 && line.length < 90 && !line.startsWith(' ') && !line.startsWith('(Ref');
      const isRef = line.trim().startsWith('(Ref:') || line.trim().startsWith('(Ref ');

      if (isHeader) {
        documentChildren.push(
          new Paragraph({
            children: [new TextRun({ text: line, bold: true, size: 26, font: 'Times New Roman' })],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 280, after: 140 },
          })
        );
      } else if (isRef) {
        documentChildren.push(
          new Paragraph({
            children: [new TextRun({ text: line, italics: true, size: 18, font: 'Times New Roman', color: '555555' })],
            spacing: { before: 80, after: 200 },
          })
        );
      } else {
        documentChildren.push(
          new Paragraph({
            children: [new TextRun({ text: line, size: 22, font: 'Times New Roman' })],
            spacing: { before: 80, after: 200 },
            alignment: AlignmentType.JUSTIFIED,
          })
        );
      }
    });

    // Footer
    documentChildren.push(
      new Paragraph({
        children: [new TextRun({ text: 'Based on R.G. Rao\'s "Bhrighu Nandi Nadi" — For guidance only', italics: true, size: 16, font: 'Times New Roman', color: '888888' })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 400 },
      })
    );

    const doc = new Document({
      sections: [{
        properties: {
          page: {
            margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 }, // 20mm in twips
          },
        },
        children: documentChildren,
      }],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename.endsWith('.docx') ? filename : `${filename}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(successMessage);
  } catch (err) {
    console.error('Word export with charts error:', err);
    toast.error(errorMessage);
    throw err;
  }
};

export const getContentFromRef = (ref: React.RefObject<HTMLDivElement>): string => {
  if (!ref.current) return '';
  return ref.current.innerText;
};
