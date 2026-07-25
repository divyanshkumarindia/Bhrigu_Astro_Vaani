/**
 * Professional Text Export Utilities for Kundali Reports
 * Generates beautifully formatted, aligned text for export
 * Features: Boxed headers, aligned tables, bilingual support, decorative borders
 */

import { KundaliReport, RASHI_SANSKRIT, PLANET_SANSKRIT, PLANET_SYMBOLS, GrahaName, RashiSign } from '@/types/astrology';

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                       FORMATTING CONSTANTS                                 ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

const LINE_WIDTH = 76;
const CONTENT_WIDTH = LINE_WIDTH - 4;

// Box drawing characters
const BOX = {
  // Double line box
  topLeft: '╔', topRight: '╗', bottomLeft: '╚', bottomRight: '╝',
  horizontal: '═', vertical: '║',
  // Single line box
  sTopLeft: '┌', sTopRight: '┐', sBottomLeft: '└', sBottomRight: '┘',
  sHorizontal: '─', sVertical: '│',
  sLeftT: '├', sRightT: '┤', sTopT: '┬', sBottomT: '┴', sCross: '┼',
  // Mixed connectors
  leftT: '╠', rightT: '╣', topT: '╦', bottomT: '╩', cross: '╬',
  // Rounded corners
  rTopLeft: '╭', rTopRight: '╮', rBottomLeft: '╰', rBottomRight: '╯'
};

const DECORATIVE = {
  star: '★', starOutline: '☆', diamond: '◆', diamondOutline: '◇',
  bullet: '●', bulletOutline: '○', arrow: '→', arrowDouble: '⇒',
  check: '✓', cross: '✗', neutral: '◐',
  sun: '☀', moon: '☽', planet: '⊕'
};

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                        HELPER FUNCTIONS                                    ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

/**
 * Center text within a given width
 */
const centerText = (text: string, width: number = LINE_WIDTH): string => {
  const textLen = [...text].length; // Handle unicode properly
  const padding = Math.max(0, Math.floor((width - textLen) / 2));
  return ' '.repeat(padding) + text;
};

/**
 * Right-align text within a given width
 */
const rightAlign = (text: string, width: number = LINE_WIDTH): string => {
  const textLen = [...text].length;
  const padding = Math.max(0, width - textLen);
  return ' '.repeat(padding) + text;
};

/**
 * Pad text to exact width (handle unicode)
 */
const padEnd = (text: string, width: number): string => {
  const textLen = [...text].length;
  const padding = Math.max(0, width - textLen);
  return text + ' '.repeat(padding);
};

/**
 * Create a filled line with optional content
 */
const filledLine = (char: string, width: number = LINE_WIDTH): string => {
  return char.repeat(width);
};

/**
 * Create a double-bordered box header (main titles)
 */
const doubleBoxHeader = (title: string, subtitle?: string): string[] => {
  const lines: string[] = [];
  const innerWidth = LINE_WIDTH - 2;

  lines.push(BOX.topLeft + filledLine(BOX.horizontal, innerWidth) + BOX.topRight);
  lines.push(BOX.vertical + ' '.repeat(innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + centerText(title, innerWidth) + BOX.vertical);
  if (subtitle) {
    lines.push(BOX.vertical + centerText(subtitle, innerWidth) + BOX.vertical);
  }
  lines.push(BOX.vertical + ' '.repeat(innerWidth) + BOX.vertical);
  lines.push(BOX.bottomLeft + filledLine(BOX.horizontal, innerWidth) + BOX.bottomRight);

  return lines;
};

/**
 * Create a rounded box for section headers
 */
const roundedSectionHeader = (title: string, emoji?: string): string[] => {
  const lines: string[] = [];
  const icon = emoji ? `${emoji} ` : '';
  const displayTitle = `${icon}${title}`;
  const innerWidth = LINE_WIDTH - 2;

  lines.push('');
  lines.push(BOX.rTopLeft + filledLine(BOX.sHorizontal, innerWidth) + BOX.rTopRight);
  lines.push(BOX.sVertical + centerText(displayTitle, innerWidth) + BOX.sVertical);
  lines.push(BOX.rBottomLeft + filledLine(BOX.sHorizontal, innerWidth) + BOX.rBottomRight);

  return lines;
};

/**
 * Create a simple section divider with centered title
 */
const sectionDivider = (title: string, emoji?: string): string[] => {
  const icon = emoji ? `${emoji} ` : '';
  const displayTitle = ` ${icon}${title} `;
  const totalPadding = LINE_WIDTH - displayTitle.length;
  const leftPad = Math.floor(totalPadding / 2);
  const rightPad = totalPadding - leftPad;

  return [
    '',
    '─'.repeat(leftPad) + displayTitle + '─'.repeat(rightPad)
  ];
};

/**
 * Create aligned key-value pair with consistent spacing
 */
const alignedRow = (key: string, value: string, keyWidth: number = 26): string => {
  return `  ${padEnd(key, keyWidth)} : ${value}`;
};

/**
 * Create aligned key-value pair in a box
 */
const boxedKeyValue = (key: string, value: string, keyWidth: number = 24): string => {
  const valueWidth = CONTENT_WIDTH - keyWidth - 5;
  return `${BOX.sVertical} ${padEnd(key, keyWidth)} │ ${padEnd(value, valueWidth)} ${BOX.sVertical}`;
};

/**
 * Create a table with proper borders
 */
const createTable = (headers: string[], rows: string[][], colWidths: number[]): string[] => {
  const lines: string[] = [];
  const totalWidth = colWidths.reduce((a, b) => a + b, 0) + (colWidths.length * 3) - 1;

  // Top border
  let topBorder = BOX.sTopLeft;
  colWidths.forEach((w, i) => {
    topBorder += BOX.sHorizontal.repeat(w + 2);
    topBorder += i < colWidths.length - 1 ? BOX.sTopT : BOX.sTopRight;
  });
  lines.push('  ' + topBorder);

  // Header row
  let headerRow = BOX.sVertical;
  headers.forEach((h, i) => {
    headerRow += ` ${padEnd(h, colWidths[i])} ${BOX.sVertical}`;
  });
  lines.push('  ' + headerRow);

  // Header separator
  let separator = BOX.sLeftT;
  colWidths.forEach((w, i) => {
    separator += BOX.sHorizontal.repeat(w + 2);
    separator += i < colWidths.length - 1 ? BOX.sCross : BOX.sRightT;
  });
  lines.push('  ' + separator);

  // Data rows
  rows.forEach(row => {
    let dataRow = BOX.sVertical;
    row.forEach((cell, i) => {
      dataRow += ` ${padEnd(cell || '-', colWidths[i])} ${BOX.sVertical}`;
    });
    lines.push('  ' + dataRow);
  });

  // Bottom border
  let bottomBorder = BOX.sBottomLeft;
  colWidths.forEach((w, i) => {
    bottomBorder += BOX.sHorizontal.repeat(w + 2);
    bottomBorder += i < colWidths.length - 1 ? BOX.sBottomT : BOX.sBottomRight;
  });
  lines.push('  ' + bottomBorder);

  return lines;
};

/**
 * Create a statistics summary box
 */
const createStatsBox = (stats: { label: string; value: string | number; icon?: string }[]): string[] => {
  const lines: string[] = [];
  const innerWidth = 48;

  lines.push('  ' + BOX.sTopLeft + BOX.sHorizontal.repeat(innerWidth) + BOX.sTopRight);

  stats.forEach((stat, idx) => {
    const icon = stat.icon || DECORATIVE.bullet;
    const label = `${icon} ${stat.label}`;
    const value = String(stat.value);
    const spacing = innerWidth - label.length - value.length - 4;
    lines.push(`  ${BOX.sVertical}  ${label}${' '.repeat(Math.max(1, spacing))}${value}  ${BOX.sVertical}`);

    if (idx === 0 && stats.length > 1) {
      lines.push('  ' + BOX.sLeftT + BOX.sHorizontal.repeat(innerWidth) + BOX.sRightT);
    }
  });

  lines.push('  ' + BOX.sBottomLeft + BOX.sHorizontal.repeat(innerWidth) + BOX.sBottomRight);

  return lines;
};

/**
 * Create a tree-style hierarchy display
 */
const treeItem = (
  content: string,
  level: number = 0,
  isLast: boolean = false,
  hasChildren: boolean = false
): string => {
  const indent = '     '.repeat(level);
  const branch = isLast ? '└─' : '├─';
  const prefix = level === 0 ? `  ${DECORATIVE.diamond} ` : `${indent}${branch} `;
  return prefix + content;
};

/**
 * Wrap long text to fit within width
 */
const wrapText = (text: string, width: number = CONTENT_WIDTH, indent: string = '  '): string[] => {
  if (!text) return [];
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = indent;

  words.forEach(word => {
    if ((currentLine + word).length > width + indent.length) {
      if (currentLine.trim()) lines.push(currentLine.trimEnd());
      currentLine = indent + word + ' ';
    } else {
      currentLine += word + ' ';
    }
  });

  if (currentLine.trim()) lines.push(currentLine.trimEnd());
  return lines;
};

/**
 * Create an ornamental divider
 */
const ornamentalDivider = (style: 'stars' | 'diamonds' | 'simple' = 'simple'): string => {
  const center = LINE_WIDTH / 2;
  switch (style) {
    case 'stars':
      return centerText(`${DECORATIVE.starOutline}  ${DECORATIVE.star}  ${DECORATIVE.starOutline}  ${DECORATIVE.star}  ${DECORATIVE.starOutline}`);
    case 'diamonds':
      return centerText(`◇ ◆ ◇ ◆ ◇ ◆ ◇`);
    default:
      return centerText('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  }
};

/**
 * Create a branded footer
 */
const createFooter = (isHindi: boolean): string[] => {
  const lines: string[] = [];
  const innerWidth = LINE_WIDTH - 2;

  lines.push('');
  lines.push(BOX.topLeft + filledLine(BOX.horizontal, innerWidth) + BOX.topRight);
  lines.push(BOX.vertical + ' '.repeat(innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + centerText(`${isHindi ? 'जनरेट तिथि' : 'Generated on'}: ${new Date().toLocaleString()}`, innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + ' '.repeat(innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + centerText(ornamentalDivider('stars').trim(), innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + ' '.repeat(innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + centerText(isHindi ? '॥ भृगु ज्योतिष वाणी ॥' : '॥ Bhrighu Jyotish Vani ॥', innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + centerText(isHindi ? 'भृगु/वैदिक ज्योतिष इंजन' : 'Bhrigu/Vedic Astrology Engine', innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + centerText('www.bhrigujyotish.com', innerWidth) + BOX.vertical);
  lines.push(BOX.vertical + ' '.repeat(innerWidth) + BOX.vertical);
  lines.push(BOX.bottomLeft + filledLine(BOX.horizontal, innerWidth) + BOX.bottomRight);

  return lines;
};

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                         MAIN EXPORT FUNCTIONS                              ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

/**
 * Generate comprehensive, beautifully formatted Kundali text export
 */
export const generateKundaliExportText = (
  report: KundaliReport,
  language: 'en' | 'hi' = 'en'
): string => {
  const lines: string[] = [];
  const isHindi = language === 'hi';

  // ═══════ DECORATIVE HEADER ═══════
  lines.push('');
  lines.push(ornamentalDivider('diamonds'));
  lines.push('');

  // ═══════ MAIN HEADER ═══════
  lines.push(...doubleBoxHeader(
    isHindi ? '॥ श्री गणेशाय नमः ॥' : '॥ Shri Ganeshaya Namah ॥',
    isHindi ? 'वैदिक कुंडली रिपोर्ट' : 'VEDIC KUNDALI REPORT'
  ));

  // ═══════ BIRTH DETAILS ═══════
  lines.push(...roundedSectionHeader(
    isHindi ? 'जन्म विवरण' : 'BIRTH DETAILS',
    '👤'
  ));
  lines.push('');

  const birthDetails = [
    { key: isHindi ? 'नाम' : 'Name', value: report.name },
    { key: isHindi ? 'जन्म तिथि' : 'Date of Birth', value: report.dateOfBirth },
    { key: isHindi ? 'जन्म समय' : 'Time of Birth', value: report.timeOfBirth },
    { key: isHindi ? 'जन्म स्थान' : 'Place of Birth', value: report.placeOfBirth },
    { key: isHindi ? 'निर्देशांक' : 'Coordinates', value: `${report.latitude.toFixed(4)}°N, ${report.longitude.toFixed(4)}°E` }
  ];

  if (report.ayanamsha) {
    birthDetails.push({
      key: isHindi ? 'लहिरी अयनांश' : 'Lahiri Ayanamsha',
      value: `${report.ayanamsha.toFixed(4)}°`
    });
  }

  // Create boxed birth details
  const detailsWidth = 68;
  lines.push('  ' + BOX.sTopLeft + BOX.sHorizontal.repeat(detailsWidth) + BOX.sTopRight);
  birthDetails.forEach((detail, idx) => {
    const keyWidth = 24;
    const valueWidth = detailsWidth - keyWidth - 7;
    lines.push(`  ${BOX.sVertical}  ${padEnd(detail.key, keyWidth)} │ ${padEnd(detail.value, valueWidth)} ${BOX.sVertical}`);
    if (idx < birthDetails.length - 1) {
      lines.push('  ' + BOX.sVertical + ' '.repeat(detailsWidth) + BOX.sVertical);
    }
  });
  lines.push('  ' + BOX.sBottomLeft + BOX.sHorizontal.repeat(detailsWidth) + BOX.sBottomRight);

  // ═══════ ASCENDANT ═══════
  lines.push(...roundedSectionHeader(
    isHindi ? 'लग्न (उदय राशि)' : 'ASCENDANT (LAGNA)',
    '🌅'
  ));
  lines.push('');
  lines.push(alignedRow(
    isHindi ? 'राशि' : 'Sign',
    `${report.ascendant.sign} (${RASHI_SANSKRIT[report.ascendant.sign]})`
  ));
  lines.push(alignedRow(
    isHindi ? 'अंश' : 'Degree',
    `${report.ascendant.degree.toFixed(2)}°`
  ));
  lines.push(alignedRow(
    isHindi ? 'नक्षत्र' : 'Nakshatra',
    report.ascendant.nakshatra
  ));

  // ═══════ PANCHANG ═══════
  if (report.panchang) {
    lines.push(...roundedSectionHeader(
      isHindi ? 'पंचांग (पांच अंग)' : 'PANCHANG (FIVE LIMBS)',
      '🌙'
    ));
    lines.push('');

    const panchangData = [
      [
        isHindi ? 'तिथि' : 'Tithi',
        `${report.panchang.tithi.name} (${report.panchang.tithi.paksha} ${isHindi ? 'पक्ष' : 'Paksha'})`
      ],
      [
        isHindi ? 'नक्षत्र' : 'Nakshatra',
        `${report.panchang.nakshatra.name} (${isHindi ? 'पाद' : 'Pada'} ${report.panchang.nakshatra.pada})`
      ],
      [
        isHindi ? 'योग' : 'Yoga',
        report.panchang.yoga.name
      ],
      [
        isHindi ? 'करण' : 'Karana',
        report.panchang.karana.name
      ],
      [
        isHindi ? 'वार' : 'Weekday',
        `${report.panchang.vara.sanskrit} (${report.panchang.vara.lord} ${isHindi ? 'स्वामी' : 'Lord'})`
      ]
    ];

    lines.push(...createTable(
      [isHindi ? 'अंग' : 'Element', isHindi ? 'विवरण' : 'Details'],
      panchangData,
      [16, 44]
    ));
  }

  // ═══════ PLANETARY POSITIONS TABLE ═══════
  lines.push(...roundedSectionHeader(
    isHindi ? 'ग्रह स्थिति' : 'PLANETARY POSITIONS',
    '🪐'
  ));
  lines.push('');

  const planetRows = report.planets.map((planet) => {
    const retroStatus = planet.isRetrograde ? (isHindi ? 'वक्री' : 'R') : '';
    const planetName = isHindi
      ? `${PLANET_SYMBOLS[planet.name]} ${PLANET_SANSKRIT[planet.name]}`
      : `${PLANET_SYMBOLS[planet.name]} ${planet.name}`;
    const signDisplay = isHindi
      ? RASHI_SANSKRIT[planet.sign]
      : planet.sign;

    return [
      planetName,
      signDisplay,
      String(planet.house),
      `${planet.degree.toFixed(2)}°`,
      planet.nakshatra || '-',
      retroStatus
    ];
  });

  lines.push(...createTable(
    [
      isHindi ? 'ग्रह' : 'Planet',
      isHindi ? 'राशि' : 'Sign',
      isHindi ? 'भाव' : 'House',
      isHindi ? 'अंश' : 'Deg',
      isHindi ? 'नक्षत्र' : 'Nakshatra',
      isHindi ? 'स्थिति' : 'Status'
    ],
    planetRows,
    [14, 12, 6, 8, 14, 6]
  ));

  // ═══════ HOUSE PLACEMENTS ═══════
  lines.push(...roundedSectionHeader(
    isHindi ? 'भाव स्थिति' : 'HOUSE PLACEMENTS',
    '🏠'
  ));
  lines.push('');

  const houseRows = report.houses.map((house) => {
    const planets = house.planets.length > 0
      ? house.planets.map(p => isHindi ? (PLANET_SANSKRIT[p as GrahaName] || p) : p).join(', ')
      : (isHindi ? '- खाली -' : '- Empty -');
    const signDisplay = isHindi
      ? RASHI_SANSKRIT[house.sign]
      : house.sign;

    return [String(house.houseNumber), signDisplay, planets];
  });

  lines.push(...createTable(
    [
      isHindi ? 'भाव' : 'House',
      isHindi ? 'राशि' : 'Sign',
      isHindi ? 'ग्रह' : 'Planets'
    ],
    houseRows,
    [8, 14, 42]
  ));

  // ═══════ FOOTER ═══════
  lines.push(...createFooter(isHindi));
  lines.push('');
  lines.push(ornamentalDivider('diamonds'));
  lines.push('');

  return lines.join('\n');
};

/**
 * Generate beautifully formatted Yoga Analysis text export
 */
export const generateYogaExportTextFormatted = (
  summary: {
    totalYogas: number;
    beneficCount: number;
    maleficCount: number;
    mixedCount: number;
    strongestYoga?: {
      name: string;
      nameHi: string;
      strength: number;
      planets: string[];
      houses: number[];
      description: string;
      descriptionHi: string;
    };
    allYogas: Array<{
      name: string;
      nameHi: string;
      category: string;
      nature: string;
      strength: number;
      planets: string[];
      houses: number[];
      description: string;
      descriptionHi: string;
      effects: string[];
      effectsHi: string[];
    }>;
  },
  language: 'en' | 'hi' = 'en'
): string => {
  const lines: string[] = [];
  const isHindi = language === 'hi';

  // ═══════ DECORATIVE HEADER ═══════
  lines.push('');
  lines.push(ornamentalDivider('stars'));
  lines.push('');

  // ═══════ MAIN HEADER ═══════
  lines.push(...doubleBoxHeader(
    isHindi ? '॥ योग विश्लेषण रिपोर्ट ॥' : '॥ YOG ANALYSIS REPORT ॥',
    isHindi ? 'व्यापक ज्योतिषीय योग विश्लेषण' : 'Comprehensive Astrological Yog Analysis'
  ));

  // ═══════ STATISTICS SUMMARY ═══════
  lines.push(...roundedSectionHeader(
    isHindi ? 'सारांश आँकड़े' : 'SUMMARY STATISTICS',
    '📊'
  ));
  lines.push('');

  lines.push(...createStatsBox([
    { label: isHindi ? 'कुल योग' : 'Total Yogs', value: summary.totalYogas, icon: DECORATIVE.star },
    { label: isHindi ? 'शुभ योग' : 'Benefic Yogs', value: summary.beneficCount, icon: DECORATIVE.check },
    { label: isHindi ? 'अशुभ योग' : 'Malefic Yogs', value: summary.maleficCount, icon: DECORATIVE.cross },
    { label: isHindi ? 'मिश्रित योग' : 'Mixed Yogs', value: summary.mixedCount, icon: DECORATIVE.neutral }
  ]));

  // ═══════ STRONGEST YOG ═══════
  if (summary.strongestYoga) {
    lines.push(...roundedSectionHeader(
      isHindi ? 'सबसे प्रबल योग' : 'STRONGEST YOG',
      '⭐'
    ));
    lines.push('');

    const yoga = summary.strongestYoga;
    lines.push(treeItem(`${DECORATIVE.star} ${isHindi ? yoga.nameHi : yoga.name}`, 0));
    lines.push(treeItem(`${isHindi ? 'शक्ति' : 'Strength'}: ${yoga.strength}% ${'█'.repeat(Math.floor(yoga.strength / 10))}${'░'.repeat(10 - Math.floor(yoga.strength / 10))}`, 1));
    lines.push(treeItem(`${isHindi ? 'ग्रह' : 'Planets'}: ${yoga.planets.join(', ')}`, 1));
    lines.push(treeItem(`${isHindi ? 'भाव' : 'Houses'}: ${yoga.houses.join(', ')}`, 1, true));
    lines.push('');
    lines.push(`  ${isHindi ? 'विवरण' : 'Description'}:`);
    lines.push(...wrapText(isHindi ? yoga.descriptionHi : yoga.description, CONTENT_WIDTH - 2, '    '));
  }

  // ═══════ CATEGORY-WISE YOGAS ═══════
  const categories = [
    { key: 'career', en: 'CAREER YOGS', hi: 'करियर योग', emoji: '💼' },
    { key: 'wealth', en: 'WEALTH YOGS', hi: 'धन योग', emoji: '💰' },
    { key: 'marriage', en: 'MARRIAGE YOGS', hi: 'विवाह योग', emoji: '💍' },
    { key: 'education', en: 'EDUCATION YOGS', hi: 'शिक्षा योग', emoji: '📚' },
    { key: 'health', en: 'HEALTH YOGS', hi: 'स्वास्थ्य योग', emoji: '🏥' }
  ];

  categories.forEach(cat => {
    const yogas = summary.allYogas.filter(y => y.category === cat.key);
    if (yogas.length === 0) return;

    lines.push(...roundedSectionHeader(
      isHindi ? cat.hi : cat.en,
      cat.emoji
    ));
    lines.push('');

    yogas.forEach((yoga, idx) => {
      const natureSymbol = yoga.nature === 'benefic'
        ? DECORATIVE.check
        : yoga.nature === 'malefic'
          ? DECORATIVE.cross
          : DECORATIVE.neutral;

      const natureLabel = yoga.nature === 'benefic'
        ? (isHindi ? 'शुभ' : 'Benefic')
        : yoga.nature === 'malefic'
          ? (isHindi ? 'अशुभ' : 'Malefic')
          : (isHindi ? 'मिश्रित' : 'Mixed');

      // Yoga name with number
      lines.push(`  ${idx + 1}. ${natureSymbol} ${isHindi ? yoga.nameHi : yoga.name}`);

      // Tree-style details
      lines.push(`     ├─ ${isHindi ? 'प्रकार' : 'Nature'}: ${natureLabel}`);
      lines.push(`     ├─ ${isHindi ? 'शक्ति' : 'Strength'}: ${yoga.strength}% ${'█'.repeat(Math.floor(yoga.strength / 10))}${'░'.repeat(10 - Math.floor(yoga.strength / 10))}`);
      lines.push(`     ├─ ${isHindi ? 'ग्रह' : 'Planets'}: ${yoga.planets.join(', ')}`);
      lines.push(`     ├─ ${isHindi ? 'भाव' : 'Houses'}: ${yoga.houses.join(', ')}`);

      // Description
      lines.push(`     ├─ ${isHindi ? 'विवरण' : 'Description'}:`);
      const descLines = wrapText(isHindi ? yoga.descriptionHi : yoga.description, CONTENT_WIDTH - 12, '     │    ');
      lines.push(...descLines);

      // Effects
      if (yoga.effects && yoga.effects.length > 0) {
        lines.push(`     └─ ${isHindi ? 'प्रभाव' : 'Effects'}:`);
        const effects = isHindi ? yoga.effectsHi : yoga.effects;
        effects.slice(0, 3).forEach((effect, eIdx) => {
          const bullet = eIdx === effects.slice(0, 3).length - 1 ? '    ' : '    ';
          lines.push(`        ${DECORATIVE.bulletOutline} ${effect}`);
        });
      } else {
        // Close the tree
        lines.push(`     └─ ${isHindi ? 'प्रभाव' : 'Effects'}: ${isHindi ? 'विश्लेषण उपलब्ध' : 'Analysis available'}`);
      }

      lines.push('');
    });
  });

  // ═══════ FOOTER ═══════
  lines.push(...createFooter(isHindi));
  lines.push('');
  lines.push(ornamentalDivider('stars'));
  lines.push('');

  return lines.join('\n');
};

/**
 * Generate section-specific text export with enhanced formatting
 */
export const generateSectionExportText = (
  sectionTitle: string,
  sectionTitleHi: string,
  content: string,
  language: 'en' | 'hi' = 'en'
): string => {
  const lines: string[] = [];
  const isHindi = language === 'hi';

  lines.push('');
  lines.push(ornamentalDivider('simple'));
  lines.push('');

  lines.push(...doubleBoxHeader(
    isHindi ? sectionTitleHi : sectionTitle.toUpperCase()
  ));
  lines.push('');

  // Clean and format the content
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ')    // Normalize whitespace
    .trim();

  lines.push(...wrapText(cleanContent, CONTENT_WIDTH, '  '));

  lines.push(...createFooter(isHindi));
  lines.push('');

  return lines.join('\n');
};

/**
 * Generate a remedies summary export
 */
export const generateRemediesExportText = (
  remedies: Array<{
    category: string;
    categoryHi: string;
    items: Array<{
      title: string;
      titleHi: string;
      description: string;
      descriptionHi: string;
    }>;
  }>,
  language: 'en' | 'hi' = 'en'
): string => {
  const lines: string[] = [];
  const isHindi = language === 'hi';

  lines.push('');
  lines.push(ornamentalDivider('diamonds'));
  lines.push('');

  lines.push(...doubleBoxHeader(
    isHindi ? '॥ उपाय एवं उपचार ॥' : '॥ REMEDIES & SOLUTIONS ॥',
    isHindi ? 'ज्योतिषीय उपचार मार्गदर्शिका' : 'Astrological Remedial Guidance'
  ));

  remedies.forEach(category => {
    lines.push(...roundedSectionHeader(
      isHindi ? category.categoryHi : category.category,
      '🙏'
    ));
    lines.push('');

    category.items.forEach((item, idx) => {
      lines.push(treeItem(`${isHindi ? item.titleHi : item.title}`, 0));
      const descLines = wrapText(
        isHindi ? item.descriptionHi : item.description,
        CONTENT_WIDTH - 6,
        '      '
      );
      descLines.forEach((line, lineIdx) => {
        lines.push(line);
      });
      lines.push('');
    });
  });

  lines.push(...createFooter(isHindi));
  lines.push('');
  lines.push(ornamentalDivider('diamonds'));
  lines.push('');

  return lines.join('\n');
};

/**
 * Download text file utility with UTF-8 BOM for proper encoding
 */
export const downloadTextFile = (content: string, filename: string): void => {
  // Add UTF-8 BOM for proper encoding in text editors
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
