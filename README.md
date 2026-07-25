# भृगु ज्योतिष वाणी | Bhrighu Jyotish Vani

<div align="center">
  <img src="src/assets/logo.png" alt="Bhrighu Jyotish Vani Logo" width="120" />
  
  **A comprehensive Vedic Astrology (Jyotish) application for generating authentic birth charts (Kundali)**
  
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![Supabase](https://img.shields.io/badge/Supabase-Cloud-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com/)
</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technical Architecture](#-technical-architecture)
- [Astrological Systems Used](#-astrological-systems-used)
- [Prerequisites](#-prerequisites)
- [Installation on Windows](#-installation-on-windows)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [Components Documentation](#-components-documentation)
- [Backend (Edge Functions)](#-backend-edge-functions)
- [Data Types & Interfaces](#-data-types--interfaces)
- [Configuration Files](#-configuration-files)
- [Dependencies](#-dependencies)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## 🌟 Overview

**Bhrighu Jyotish Vani** (भृगु ज्योतिष वाणी) is a professional-grade Vedic astrology application that generates accurate birth charts (Kundali) based on the ancient Indian system of Jyotish. The application uses high-precision astronomical calculations with the **Lahiri (Chitra Paksha) Ayanamsha** - the official standard used by the Government of India.

### What is a Kundali?

A Kundali (also known as Janam Patri or Birth Chart) is a celestial map showing the positions of planets at the exact time and place of birth. It serves as the foundation for Vedic astrological predictions and life guidance.

---

## ✨ Features

### Core Features

- **🌙 Birth Chart Generation**: Generate complete Vedic birth charts with accurate planetary positions
- **📊 Multiple Chart Styles**:
  - North Indian Chart (Diamond style)
  - South Indian Chart (Square style)
  - Chalit (Bhava) Chart for house cusps
- **🔢 Panchang Display**: Complete five-limbed Vedic time system:
  - Tithi (Lunar day)
  - Nakshatra (Lunar mansion)
  - Yoga (Sun-Moon combination)
  - Karana (Half-tithi)
  - Vara (Weekday)

### Advanced Analysis

- **⭐ Bhrighu Nandi Nadi (BNN)**: Ancient predictive technique based on planetary sign positions
- **💍 Marriage Analysis**: Compatibility and timing predictions
- **💼 Career Analysis**: Professional path insights
- **📚 Education Analysis**: Academic success indicators
- **✈️ Foreign Travel Yogas**: Settlement abroad predictions
- **💰 Dhana Yogas**: Wealth combinations
- **🏥 Medical Astrology**: Health-related indications
- **🧘 Yoga Analysis**: Auspicious planetary combinations

### Dasha Systems

- **Vimshottari Dasha**: 120-year planetary period system
- **Dasha Predictions**: Period-wise life predictions
- **Gochar (Transits)**: Current planetary movements and effects

### Export & Share

- **📄 PDF Export**: Generate beautiful PDF reports
- **📝 Text Export**: Plain text format for sharing
- **🖨️ Print**: Direct printing support
- **📤 Share**: Native sharing on supported devices

### Localization

- **🌐 Bilingual**: Full Hindi (हिंदी) and English support
- **Toggle**: Easy language switching

---

## 🏗️ Technical Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    React + TypeScript                        ││
│  │  ┌───────────────┐  ┌────────────────┐  ┌────────────────┐  ││
│  │  │  Birth Form   │  │  Chart Display │  │  Analysis      │  ││
│  │  │  Component    │  │  Components    │  │  Components    │  ││
│  │  └───────────────┘  └────────────────┘  └────────────────┘  ││
│  └─────────────────────────────────────────────────────────────┘│
│                              │                                   │
│                              ▼                                   │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                   Supabase Client SDK                        ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LOVABLE CLOUD (SUPABASE)                      │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │              Edge Function: calculate-kundali                ││
│  │  ┌─────────────────────────────────────────────────────────┐││
│  │  │  • Julian Day Calculation                               │││
│  │  │  • Lahiri Ayanamsha Computation                         │││
│  │  │  • Planetary Position Calculations (VSOP87)             │││
│  │  │  • Moon Position (ELP2000)                              │││
│  │  │  • Ascendant Calculation (Spherical Trigonometry)       │││
│  │  │  • House System Computation                             │││
│  │  │  • Panchang Calculation                                 │││
│  │  └─────────────────────────────────────────────────────────┘││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 🕉️ Astrological Systems Used

### 1. Parashari System

The primary system used is **Parashari Jyotish**, named after the sage Parashara, author of Brihat Parashara Hora Shastra.

### 2. Ayanamsha (Precession Correction)

- **Lahiri Ayanamsha (Chitra Paksha)**: Official Indian Government standard
- Base value at J2000.0: ~23.856°
- Precession rate: ~50.29" per year

### 3. House Systems

- **Whole Sign Houses**: For Lagna (Rashi) chart
- **Equal Houses**: For Chalit (Bhava) chart

### 4. Nakshatra System

- 27 Nakshatras (Lunar Mansions)
- 108 Padas (Quarters)
- Each Nakshatra spans 13°20' of the zodiac

### 5. Planetary Bodies Considered

| Planet | Sanskrit | Symbol |
|--------|----------|--------|
| Sun | सूर्य (Surya) | Su |
| Moon | चन्द्र (Chandra) | Mo |
| Mars | मंगल (Mangal) | Ma |
| Mercury | बुध (Budha) | Me |
| Jupiter | बृहस्पति (Brihaspati) | Ju |
| Venus | शुक्र (Shukra) | Ve |
| Saturn | शनि (Shani) | Sa |
| Rahu | राहु (North Node) | Ra |
| Ketu | केतु (South Node) | Ke |

---

## 📋 Prerequisites

Before installing the application on Windows, ensure you have the following:

### Required Software

1. **Node.js (v18.x or higher)**
   - Download: <https://nodejs.org/>
   - Recommended: Use the LTS version
   - Verify installation:

     ```cmd
     node --version
     npm --version
     ```

2. **Git**
   - Download: <https://git-scm.com/download/win>
   - Verify installation:

     ```cmd
     git --version
     ```

### Optional (Recommended)

1. **Visual Studio Code**
   - Download: <https://code.visualstudio.com/>
   - Recommended extensions:
     - ESLint
     - Prettier
     - Tailwind CSS IntelliSense
     - TypeScript and JavaScript Language Features

2. **Windows Terminal** (for better command-line experience)
   - Download from Microsoft Store

---

## 💻 Installation on Windows

### Step 1: Clone the Repository

Open Command Prompt or PowerShell and run:

```cmd
# Navigate to your preferred directory
cd C:\Projects

# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate into the project directory
cd bhrighu-jyotish-vani
```

### Step 2: Install Dependencies

```cmd
# Install all npm packages
npm install
```

This will install approximately 50+ packages including React, TypeScript, Tailwind CSS, and all UI components.

### Step 3: Environment Configuration

The application uses Lovable Cloud (Supabase) for backend services. The `.env` file is automatically configured with:

```env
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_PUBLISHABLE_KEY=<your-anon-key>
VITE_SUPABASE_PROJECT_ID=<your-project-id>
```

> **Note**: These are automatically provided when connected to Lovable Cloud. For local development without cloud, the app falls back to client-side calculations.

### Step 4: Verify Installation

```cmd
# Check for any dependency issues
npm ls

# Run TypeScript type check
npx tsc --noEmit
```

---

## 🚀 Running the Application

### Development Mode

```cmd
# Start the development server
npm run dev
```

This will:

- Start Vite development server on `http://localhost:8080`
- Enable Hot Module Replacement (HMR)
- Show compilation errors in the terminal

### Production Build

```cmd
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```cmd
# Run ESLint to check code quality
npm run lint
```

---

## 📁 Project Structure

```
bhrighu-jyotish-vani/
├── 📁 public/                    # Static assets
│   ├── favicon.ico               # Browser favicon
│   ├── robots.txt                # SEO robots file
│   └── placeholder.svg           # Placeholder image
│
├── 📁 src/                       # Source code
│   ├── 📁 assets/                # Images and media
│   │   └── logo.png              # Application logo
│   │
│   ├── 📁 components/            # React components
│   │   ├── 📁 ui/                # shadcn/ui components
│   │   ├── BirthDetailsForm.tsx  # Input form for birth details
│   │   ├── NorthIndianChart.tsx  # North Indian chart display
│   │   ├── LagnaChart.tsx        # South Indian chart display
│   │   ├── ChalitChart.tsx       # Bhava/Chalit chart
│   │   ├── PanchangDisplay.tsx   # Panchang information
│   │   ├── VimshottariDasha.tsx  # Dasha periods display
│   │   ├── BhrighuNandiNadi.tsx  # BNN analysis
│   │   ├── YogaAnalysis.tsx      # Yoga combinations
│   │   └── ... (30+ components)
│   │
│   ├── 📁 contexts/              # React contexts
│   │   └── LanguageContext.tsx   # i18n language context
│   │
│   ├── 📁 hooks/                 # Custom React hooks
│   │   ├── use-mobile.tsx        # Mobile detection hook
│   │   └── use-toast.ts          # Toast notifications hook
│   │
│   ├── 📁 integrations/          # External integrations
│   │   └── supabase/
│   │       ├── client.ts         # Supabase client (auto-generated)
│   │       └── types.ts          # Database types (auto-generated)
│   │
│   ├── 📁 lib/                   # Utility libraries
│   │   ├── parashari.ts          # Parashari calculation engine
│   │   ├── mockKundali.ts        # Fallback calculation
│   │   ├── exaltation.ts         # Planet exaltation/debilitation
│   │   ├── bnnData.ts            # BNN prediction data
│   │   ├── bnnCareerData.ts      # Career analysis data
│   │   ├── bnnMarriageData.ts    # Marriage analysis data
│   │   ├── internationalCities.ts # City database
│   │   └── utils.ts              # Utility functions
│   │
│   ├── 📁 pages/                 # Page components
│   │   ├── Index.tsx             # Main application page
│   │   └── NotFound.tsx          # 404 page
│   │
│   ├── 📁 types/                 # TypeScript types
│   │   └── astrology.ts          # Astrology type definitions
│   │
│   ├── App.tsx                   # Root component
│   ├── App.css                   # Global styles
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Tailwind base styles
│
├── 📁 supabase/                  # Supabase configuration
│   ├── config.toml               # Supabase config
│   └── 📁 functions/             # Edge Functions
│       └── calculate-kundali/
│           └── index.ts          # High-precision calculation
│
├── .env                          # Environment variables (auto-generated)
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite bundler configuration
└── README.md                     # This file
```

---

## 🧩 Components Documentation

### Core Components

| Component | File | Description |
|-----------|------|-------------|
| **BirthDetailsForm** | `BirthDetailsForm.tsx` | Input form for name, date, time, and place of birth with city autocomplete |
| **NorthIndianChart** | `NorthIndianChart.tsx` | Diamond-shaped North Indian chart visualization |
| **LagnaChart** | `LagnaChart.tsx` | Square-grid South Indian chart visualization |
| **ChalitChart** | `ChalitChart.tsx` | Bhava (house cusp) chart using equal house system |
| **PanchangDisplay** | `PanchangDisplay.tsx` | Displays Tithi, Nakshatra, Yoga, Karana, Vara |
| **PlanetTable** | `PlanetTable.tsx` | Tabular view of all planetary positions |

### Analysis Components

| Component | File | Description |
|-----------|------|-------------|
| **BhrighuNandiNadi** | `BhrighuNandiNadi.tsx` | BNN-based life predictions |
| **VimshottariDasha** | `VimshottariDasha.tsx` | 120-year Dasha period calculations |
| **DashaPredictions** | `DashaPredictions.tsx` | Period-wise prediction interpretations |
| **YogaAnalysis** | `YogaAnalysis.tsx` | Planetary combination analysis |
| **BNNCareerAnalysis** | `BNNCareerAnalysis.tsx` | Career and profession insights |
| **BNNMarriageAnalysis** | `BNNMarriageAnalysis.tsx` | Marriage and relationship predictions |
| **BNNEducationAnalysis** | `BNNEducationAnalysis.tsx` | Educational path analysis |
| **BNNForeignYogas** | `BNNForeignYogas.tsx` | Foreign travel/settlement yogas |
| **BNNDhanaYogas** | `BNNDhanaYogas.tsx` | Wealth and prosperity combinations |
| **BNNMedicalAstrology** | `BNNMedicalAstrology.tsx` | Health-related predictions |
| **GocharTransits** | `GocharTransits.tsx` | Current planetary transits |
| **KundaliMilan** | `KundaliMilan.tsx` | Horoscope matching (Guna Milan) |
| **RemediesUpaay** | `RemediesUpaay.tsx` | Astrological remedies and suggestions |

### UI Components (shadcn/ui)

Located in `src/components/ui/`, these are pre-built, accessible components:

- Accordion, Button, Card, Dialog, Dropdown, Input, Select, Tabs, Toast, Tooltip, and 30+ more

---

## ⚡ Backend (Edge Functions)

### calculate-kundali Function

**Location**: `supabase/functions/calculate-kundali/index.ts`

This Deno-based edge function performs high-precision astronomical calculations:

#### Key Algorithms

1. **Julian Day Calculation**

   ```typescript
   function calculateJulianDay(year, month, day, hour, minute, second): number
   ```

   Converts calendar date to Julian Day for astronomical calculations.

2. **Lahiri Ayanamsha**

   ```typescript
   function calculateLahiriAyanamsha(jd: number): number
   ```

   Computes the precession of equinoxes using official Lahiri method.

3. **Planetary Positions (VSOP87)**

   ```typescript
   function calculatePlanetaryPositions(jd: number): Record<string, number>
   ```

   Uses truncated VSOP87 series for planetary longitudes.

4. **Moon Position (ELP2000)**

   ```typescript
   function calculateMoonPosition(jd: number): number
   ```

   High-precision lunar longitude using ELP2000 theory.

5. **Ascendant Calculation**

   ```typescript
   function calculateAscendant(jd, latitude, longitude, ayanamsha)
   ```

   Uses spherical trigonometry for accurate Lagna calculation.

6. **Panchang Calculation**

   ```typescript
   function calculatePanchang(moonLong, sunLong, date)
   ```

   Computes all five limbs of Vedic time.

#### API Endpoint

```http
POST /functions/v1/calculate-kundali
Content-Type: application/json

{
  "name": "John Doe",
  "dateOfBirth": "1990-05-15",
  "timeOfBirth": "14:30",
  "placeOfBirth": "New Delhi, India",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

#### Response Schema

```json
{
  "id": "uuid",
  "name": "string",
  "dateOfBirth": "YYYY-MM-DD",
  "timeOfBirth": "HH:MM",
  "placeOfBirth": "string",
  "latitude": "number",
  "longitude": "number",
  "timezone": "string",
  "ayanamsha": "number",
  "ascendant": {
    "sign": "RashiSign",
    "degree": "number",
    "nakshatra": "string"
  },
  "planets": [
    {
      "name": "GrahaName",
      "sign": "RashiSign",
      "signIndex": "number",
      "degree": "number",
      "house": "number",
      "isRetrograde": "boolean",
      "nakshatra": "string",
      "nakshatraPada": "number"
    }
  ],
  "houses": [
    {
      "houseNumber": "number",
      "sign": "RashiSign",
      "planets": ["GrahaName"],
      "cusp": "number"
    }
  ],
  "panchang": {
    "tithi": { "number": 1-30, "name": "string", "paksha": "Shukla|Krishna" },
    "nakshatra": { "name": "string", "pada": 1-4, "lord": "GrahaName" },
    "yoga": { "number": 1-27, "name": "string" },
    "karana": { "number": 1-60, "name": "string" },
    "vara": { "name": "string", "sanskrit": "string", "lord": "GrahaName" }
  }
}
```

---

## 📐 Data Types & Interfaces

### Core Types (`src/types/astrology.ts`)

```typescript
// Zodiac Signs
type RashiSign = 
  | 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' 
  | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio' 
  | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';

// Planetary Bodies
type GrahaName = 
  | 'Sun' | 'Moon' | 'Mars' | 'Mercury' 
  | 'Jupiter' | 'Venus' | 'Saturn' | 'Rahu' | 'Ketu';

// Planet Position
interface PlanetPosition {
  name: GrahaName;
  sign: RashiSign;
  signIndex: number;      // 0-11
  degree: number;         // 0-30 within sign
  house: number;          // 1-12
  isRetrograde: boolean;
  nakshatra?: string;
  nakshatraPada?: number; // 1-4
}

// House Data
interface HouseData {
  houseNumber: number;    // 1-12
  sign: RashiSign;
  planets: GrahaName[];
  cusp: number;           // 0-360 absolute degree
}

// Complete Kundali Report
interface KundaliReport {
  id: string;
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  latitude: number;
  longitude: number;
  timezone: string;
  ascendant: {
    sign: RashiSign;
    degree: number;
    nakshatra: string;
  };
  planets: PlanetPosition[];
  houses: HouseData[];
  panchang?: Panchang;
  ayanamsha?: number;
  createdAt: string;
}
```

---

## ⚙️ Configuration Files

### `vite.config.ts`

```typescript
export default defineConfig({
  server: {
    host: "::",      // Listen on all interfaces
    port: 8080,      // Development port
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Path alias
    },
  },
});
```

### `tailwind.config.ts`

- Custom color scheme with cosmic theme
- Extended animations for star field effects
- Custom fonts (display, serif, mono)
- Responsive breakpoints

### `tsconfig.json`

- Strict TypeScript mode enabled
- Path aliases configured (`@/*`)
- ES2020 target
- React JSX transformation

---

## 📦 Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | React DOM rendering |
| react-router-dom | ^6.30.1 | Client-side routing |
| @supabase/supabase-js | ^2.89.0 | Supabase client SDK |
| @tanstack/react-query | ^5.83.0 | Server state management |
| tailwindcss | ^3.x | Utility-first CSS |
| class-variance-authority | ^0.7.1 | Component variants |
| clsx | ^2.1.1 | Conditional classes |
| tailwind-merge | ^2.6.0 | Merge Tailwind classes |
| lucide-react | ^0.462.0 | Icon library |
| sonner | ^1.7.4 | Toast notifications |
| date-fns | ^3.6.0 | Date utilities |
| react-hook-form | ^7.61.1 | Form handling |
| zod | ^3.25.76 | Schema validation |
| html2canvas | ^1.4.1 | Screenshot generation |
| jspdf | ^3.0.4 | PDF generation |
| recharts | ^2.15.4 | Charts and graphs |
| framer-motion | (via vaul) | Animations |

### UI Components (shadcn/ui based on Radix)

All `@radix-ui/*` packages provide accessible, unstyled UI primitives:

- Dialog, Dropdown, Popover, Tooltip
- Accordion, Tabs, Collapsible
- Select, Checkbox, Radio, Switch
- And many more...

### Development Dependencies

| Package | Purpose |
|---------|---------|
| typescript | TypeScript compiler |
| vite | Build tool and dev server |
| @vitejs/plugin-react-swc | Fast React refresh |
| eslint | Code linting |
| autoprefixer | CSS vendor prefixing |
| postcss | CSS processing |

---

## 🔧 Troubleshooting

### Common Issues on Windows

#### 1. Node.js Version Mismatch

```cmd
# Check Node version
node --version

# If below v18, update Node.js from nodejs.org
```

#### 2. Port Already in Use

```cmd
# Find process using port 8080
netstat -ano | findstr :8080

# Kill the process (replace PID)
taskkill /PID <PID> /F
```

#### 3. Module Not Found Errors

```cmd
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

#### 4. TypeScript Errors

```cmd
# Regenerate TypeScript configuration
npx tsc --init

# Or run type check only
npx tsc --noEmit
```

#### 5. Supabase Connection Issues

- Verify `.env` file exists and has correct values
- Check internet connectivity
- The app will fall back to client-side calculations if cloud is unavailable

#### 6. PowerShell Execution Policy

```powershell
# If scripts are blocked, run as Administrator:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Performance Tips

1. **Use Production Build**: `npm run build` creates optimized bundles
2. **Enable Hardware Acceleration**: In browser settings
3. **Close Unused Tabs**: Chart rendering is GPU-intensive

---

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and commit: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for formatting
- Write meaningful commit messages
- Add JSDoc comments for complex functions

### Testing

Currently, the project uses manual testing. Future plans include:

- Unit tests with Vitest
- Component tests with React Testing Library
- E2E tests with Playwright

---

## 📄 License

This project is proprietary software. All rights reserved.

---

## 🙏 Acknowledgments

- **Parashari Jyotish**: Ancient Vedic astrology system
- **Lahiri Ayanamsha**: Indian Ephemeris and Nautical Almanac
- **VSOP87**: Planetary theory by Bureau des Longitudes
- **ELP2000**: Lunar theory by Chapront-Touzé and Chapront
- **shadcn/ui**: Beautiful, accessible component library
- **Supabase**: Open-source Firebase alternative

---

<div align="center">
  <p>Made with ❤️ for Vedic Astrology enthusiasts</p>
  <p>भृगु ज्योतिष वाणी | Bhrighu Jyotish Vani</p>
</div>
