import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, User, Sparkles, Globe, Users, Sun, Zap, Phone } from 'lucide-react';
import {
  getAllCountries,
  getStatesForCountry,
  getCitiesForState,
  getCityCoordinates
} from '@/lib/worldLocations';
import { BirthDetails as BirthDetailsType } from '@/lib/profileService';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';


interface BirthDetails {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  latitude: number;
  longitude: number;
  gender: 'male' | 'female';
  mobileNo?: string;
}

interface BirthDetailsFormProps {
  onSubmit: (details: BirthDetails) => void;
  onDailyHoroscope?: (details: BirthDetails) => void;

  isLoading?: boolean;
  isDailyLoading?: boolean;

  initialDetails?: BirthDetails;
  onDetailsChange?: (details: BirthDetails) => void;
  country?: string;
  onCountryChange?: (country: string) => void;
  state?: string;
  onStateChange?: (state: string) => void;
  city?: string;
  onCityChange?: (city: string) => void;
}

export const BirthDetailsForm: React.FC<BirthDetailsFormProps> = ({
  onSubmit,
  onDailyHoroscope,

  isLoading = false,
  isDailyLoading = false,

  initialDetails,
  onDetailsChange,
  country: selectedCountry = 'India',
  onCountryChange: setSelectedCountry = () => { },
  state: selectedState = 'Delhi',
  onStateChange: setSelectedState = () => { },
  city: selectedCity = 'Delhi',
  onCityChange: setSelectedCity = () => { },
}) => {
  // Use props for state or fallback to local if not provided (though props should be provided now)
  const [localDetails, setLocalDetails] = useState<BirthDetails>(initialDetails || {
    name: 'RAHUL SHARMA',
    dateOfBirth: '1990-05-15',
    timeOfBirth: '06:30',
    placeOfBirth: 'Delhi, Delhi, India',
    latitude: 28.6139,
    longitude: 77.2090,
    gender: 'male',
    mobileNo: '',
  });

  const details = initialDetails || localDetails;
  const setDetails = (update: BirthDetails | ((prev: BirthDetails) => BirthDetails)) => {
    if (onDetailsChange) {
      if (typeof update === 'function') {
        onDetailsChange(update(details));
      } else {
        onDetailsChange(update);
      }
    } else {
      if (typeof update === 'function') {
        setLocalDetails(update);
      } else {
        setLocalDetails(update);
      }
    }
  };

  const { t } = useLanguage();
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');

  // Update parent details.dateOfBirth when separate fields change
  useEffect(() => {
    if (dobDay && dobMonth && dobYear) {
      const paddedMonth = dobMonth.padStart(2, '0');
      const paddedDay = dobDay.padStart(2, '0');
      const formattedDate = `${dobYear}-${paddedMonth}-${paddedDay}`;
      if (details.dateOfBirth !== formattedDate) {
        setDetails(prev => ({ ...prev, dateOfBirth: formattedDate }));
      }
    } else {
      if (details.dateOfBirth !== '') {
        setDetails(prev => ({ ...prev, dateOfBirth: '' }));
      }
    }
  }, [dobDay, dobMonth, dobYear]);

  // Sync separate fields when parent details.dateOfBirth changes externally (e.g. loading a profile)
  useEffect(() => {
    if (details.dateOfBirth) {
      const parts = details.dateOfBirth.split('-');
      if (parts.length === 3) {
        const pYear = parts[0];
        const pMonth = parseInt(parts[1], 10).toString();
        const pDay = parseInt(parts[2], 10).toString();
        
        // Only update if it actually differs to avoid infinite loops or resetting typing
        if (pYear !== dobYear || pMonth !== dobMonth || pDay !== dobDay) {
          setDobYear(pYear);
          setDobMonth(pMonth);
          setDobDay(pDay);
        }
      }
    }
  }, [details.dateOfBirth]);

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setDobDay('');
      return;
    }
    const num = parseInt(val, 10);
    if (isNaN(num)) return;
    if (num < 1) {
      setDobDay('1');
    } else if (num > 31) {
      setDobDay('31');
      toast.warning(t('Day cannot exceed 31', 'दिन 31 से अधिक नहीं हो सकता'));
    } else {
      setDobDay(val);
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setDobMonth('');
      return;
    }
    const num = parseInt(val, 10);
    if (isNaN(num)) return;
    if (num < 1) {
      setDobMonth('1');
    } else if (num > 12) {
      setDobMonth('12');
      toast.warning(t('Month cannot exceed 12', 'महीना 12 से अधिक नहीं हो सकता'));
    } else {
      setDobMonth(val);
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val === '') {
      setDobYear('');
      return;
    }
    
    // Limit to 4 digits
    if (val.length > 4) {
      val = val.slice(0, 4);
    }
    
    const num = parseInt(val, 10);
    if (isNaN(num)) return;

    const currentYear = new Date().getFullYear();
    if (num > currentYear) {
      setDobYear(currentYear.toString());
      toast.warning(t('Year cannot exceed current year', 'वर्ष चालू वर्ष से अधिक नहीं हो सकता'));
    } else {
      setDobYear(val);
    }
  };

  const validateForm = (): boolean => {
    if (!details.name || !details.name.trim()) {
      toast.error(t('Please enter a valid name', 'कृपया एक वैध नाम दर्ज करें'));
      return false;
    }

    if (!details.mobileNo || !details.mobileNo.trim()) {
      toast.error(t('Please enter your mobile number', 'कृपया अपना मोबाइल नंबर दर्ज करें'));
      return false;
    }

    if (details.mobileNo.length !== 10) {
      toast.error(t('Mobile number must be exactly 10 digits', 'मोबाइल नंबर ठीक 10 अंकों का होना चाहिए'));
      return false;
    }

    if (!dobDay || !dobMonth || !dobYear) {
      toast.error(t('Please fill all birth date fields', 'कृपया जन्म तिथि के सभी फ़ील्ड भरें'));
      return false;
    }

    if (dobYear.length !== 4) {
      toast.error(t('Year must be exactly 4 digits', 'वर्ष ठीक 4 अंकों का होना चाहिए'));
      return false;
    }

    const dayNum = parseInt(dobDay, 10);
    const monthNum = parseInt(dobMonth, 10);
    const yearNum = parseInt(dobYear, 10);

    // Validate valid calendar date (e.g. Feb 30 check)
    const testDate = new Date(yearNum, monthNum - 1, dayNum);
    if (
      testDate.getFullYear() !== yearNum ||
      testDate.getMonth() !== monthNum - 1 ||
      testDate.getDate() !== dayNum
    ) {
      toast.error(t('Please enter a valid calendar date', 'कृपया एक वैध कैलेंडर तिथि दर्ज करें'));
      return false;
    }

    // Validate future date
    const now = new Date();
    if (testDate > now) {
      toast.error(t('Birth date cannot be in the future', 'जन्म तिथि भविष्य में नहीं हो सकती'));
      return false;
    }

    if (!details.timeOfBirth) {
      toast.error(t('Please select your time of birth', 'कृपया अपने जन्म का समय चुनें'));
      return false;
    }

    if (!selectedCountry) {
      toast.error(t('Please select your country', 'कृपया अपना देश चुनें'));
      return false;
    }

    if (!selectedState) {
      toast.error(t('Please select your state', 'कृपया अपना राज्य चुनें'));
      return false;
    }

    if (!selectedCity || details.latitude === 0) {
      toast.error(t('Please select your city of birth', 'कृपया अपने जन्म का शहर चुनें'));
      return false;
    }

    return true;
  };


  // Get all countries
  const countries = useMemo(() => getAllCountries(), []);

  // Get states for selected country
  const states = useMemo(() => {
    if (!selectedCountry) return [];
    return getStatesForCountry(selectedCountry);
  }, [selectedCountry]);

  // Get cities for selected state
  const cities = useMemo(() => {
    if (!selectedCountry || !selectedState) return [];
    return getCitiesForState(selectedCountry, selectedState);
  }, [selectedCountry, selectedState]);

  // Handle country change
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedState('');
    setSelectedCity('');
    setDetails(prev => ({
      ...prev,
      placeOfBirth: '',
      latitude: 0,
      longitude: 0
    }));
  };

  // Handle state change
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity('');
    setDetails(prev => ({
      ...prev,
      placeOfBirth: '',
      latitude: 0,
      longitude: 0
    }));
  };

  // Handle city selection
  const handleCityChange = (city: string) => {
    setSelectedCity(city);

    // Get coordinates for the city
    const coords = getCityCoordinates(city);

    // Create full place name
    const fullPlace = `${city}, ${selectedState}, ${selectedCountry}`;

    // Use city coords if available, otherwise use approximate default coordinates
    // Default to a central location if no specific coordinates found
    const defaultCoords = getDefaultCountryCoords(selectedCountry);

    setDetails(prev => ({
      ...prev,
      placeOfBirth: fullPlace,
      latitude: coords?.lat || defaultCoords.lat,
      longitude: coords?.lng || defaultCoords.lng
    }));
  };

  // Get default coordinates for a country (approximate central location)
  const getDefaultCountryCoords = (country: string): { lat: number; lng: number } => {
    const countryDefaults: Record<string, { lat: number; lng: number }> = {
      'India': { lat: 20.5937, lng: 78.9629 },
      'United States': { lat: 39.8283, lng: -98.5795 },
      'United Kingdom': { lat: 55.3781, lng: -3.4360 },
      'Canada': { lat: 56.1304, lng: -106.3468 },
      'Australia': { lat: -25.2744, lng: 133.7751 },
      'Germany': { lat: 51.1657, lng: 10.4515 },
      'France': { lat: 46.2276, lng: 2.2137 },
      'Italy': { lat: 41.8719, lng: 12.5674 },
      'Spain': { lat: 40.4637, lng: -3.7492 },
      'Brazil': { lat: -14.2350, lng: -51.9253 },
      'China': { lat: 35.8617, lng: 104.1954 },
      'Japan': { lat: 36.2048, lng: 138.2529 },
      'Russia': { lat: 61.5240, lng: 105.3188 },
      'South Korea': { lat: 35.9078, lng: 127.7669 },
      'Mexico': { lat: 23.6345, lng: -102.5528 },
      'Indonesia': { lat: -0.7893, lng: 113.9213 },
      'Pakistan': { lat: 30.3753, lng: 69.3451 },
      'Bangladesh': { lat: 23.6850, lng: 90.3563 },
      'Nigeria': { lat: 9.0820, lng: 8.6753 },
      'South Africa': { lat: -30.5595, lng: 22.9375 },
      'Egypt': { lat: 26.8206, lng: 30.8025 },
      'Turkey': { lat: 38.9637, lng: 35.2433 },
      'Iran': { lat: 32.4279, lng: 53.6880 },
      'Thailand': { lat: 15.8700, lng: 100.9925 },
      'Vietnam': { lat: 14.0583, lng: 108.2772 },
      'Philippines': { lat: 12.8797, lng: 121.7740 },
      'Malaysia': { lat: 4.2105, lng: 101.9758 },
      'Singapore': { lat: 1.3521, lng: 103.8198 },
      'United Arab Emirates': { lat: 23.4241, lng: 53.8478 },
      'Saudi Arabia': { lat: 23.8859, lng: 45.0792 },
      'Argentina': { lat: -38.4161, lng: -63.6167 },
      'Chile': { lat: -35.6751, lng: -71.5430 },
      'Colombia': { lat: 4.5709, lng: -74.2973 },
      'Peru': { lat: -9.1900, lng: -75.0152 },
      'Venezuela': { lat: 6.4238, lng: -66.5897 },
      'Poland': { lat: 51.9194, lng: 19.1451 },
      'Ukraine': { lat: 48.3794, lng: 31.1656 },
      'Netherlands': { lat: 52.1326, lng: 5.2913 },
      'Belgium': { lat: 50.5039, lng: 4.4699 },
      'Sweden': { lat: 60.1282, lng: 18.6435 },
      'Norway': { lat: 60.4720, lng: 8.4689 },
      'Denmark': { lat: 56.2639, lng: 9.5018 },
      'Finland': { lat: 61.9241, lng: 25.7482 },
      'Austria': { lat: 47.5162, lng: 14.5501 },
      'Switzerland': { lat: 46.8182, lng: 8.2275 },
      'Portugal': { lat: 39.3999, lng: -8.2245 },
      'Greece': { lat: 39.0742, lng: 21.8243 },
      'Czech Republic': { lat: 49.8175, lng: 15.4730 },
      'Romania': { lat: 45.9432, lng: 24.9668 },
      'Hungary': { lat: 47.1625, lng: 19.5033 },
      'Ireland': { lat: 53.1424, lng: -7.6921 },
      'New Zealand': { lat: -40.9006, lng: 174.8860 },
      'Kenya': { lat: -0.0236, lng: 37.9062 },
      'Morocco': { lat: 31.7917, lng: -7.0926 },
      'Nepal': { lat: 28.3949, lng: 84.1240 },
      'Sri Lanka': { lat: 7.8731, lng: 80.7718 },
    };
    return countryDefaults[country] || { lat: 20.5937, lng: 78.9629 }; // Default to India
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(details);
    }
  };



  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="ENTER YOUR NAME"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value.toUpperCase() })}
          className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground placeholder:text-muted-foreground uppercase"
          required
        />
      </div>

      {/* Gender Selection */}
      <div className="space-y-2">
        <Label className="text-foreground font-medium flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          Gender
        </Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setDetails({ ...details, gender: 'male' })}
            className={`px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 border ${details.gender === 'male'
              ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/30'
              : 'bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted hover:border-border'
              }`}
          >
            <span className="text-xl">♂️</span>
            <span className="font-medium">Male</span>
          </button>
          <button
            type="button"
            onClick={() => setDetails({ ...details, gender: 'female' })}
            className={`px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 border ${details.gender === 'female'
              ? 'bg-pink-500 text-white border-pink-500 shadow-lg shadow-pink-500/30'
              : 'bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted hover:border-border'
              }`}
          >
            <span className="text-xl">♀️</span>
            <span className="font-medium">Female</span>
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Gender is used for accurate spouse predictions in marriage analysis
        </p>
      </div>

      {/* Date of Birth & Mobile No. Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Date of Birth Column */}
        <div className="space-y-3">
          <Label className="text-foreground font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Date of Birth
          </Label>
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">Day</span>
              <Input
                type="number"
                min={1}
                max={31}
                placeholder="DD"
                value={dobDay}
                onChange={handleDayChange}
                className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground text-center font-semibold"
                required
              />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">Month</span>
              <Input
                type="number"
                min={1}
                max={12}
                placeholder="MM"
                value={dobMonth}
                onChange={handleMonthChange}
                className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground text-center font-semibold"
                required
              />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">Year</span>
              <Input
                type="number"
                min={1000}
                placeholder="YYYY"
                value={dobYear}
                onChange={handleYearChange}
                className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground text-center font-semibold"
                required
              />
            </div>
          </div>
        </div>

        {/* Mobile No. Column */}
        <div className="space-y-3">
          <Label htmlFor="mobileNo" className="text-foreground font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Mobile Number
          </Label>
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide block">&nbsp;</span>
            <Input
              id="mobileNo"
              type="tel"
              placeholder="ENTER 10-DIGIT MOBILE NO."
              value={details.mobileNo || ''}
              onChange={(e) => {
                let val = e.target.value.replace(/\D/g, '');
                if (val.length > 10) val = val.slice(0, 10);
                setDetails({ ...details, mobileNo: val });
              }}
              className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground font-semibold placeholder:font-normal"
              required
            />
          </div>
        </div>
      </div>

      {/* Time of Birth */}
      <div className="space-y-2">
        <Label htmlFor="time" className="text-foreground font-medium flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          Time of Birth
        </Label>
        <Input
          id="time"
          type="time"
          value={details.timeOfBirth}
          onChange={(e) => setDetails({ ...details, timeOfBirth: e.target.value })}
          className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground"
          required
        />
        <p className="text-xs text-muted-foreground">
          Accurate birth time ensures precise Lagna calculation
        </p>
      </div>

      {/* Country Selection */}
      <div className="space-y-2">
        <Label className="text-foreground font-medium flex items-center gap-2">
          <Globe className="w-4 h-4 text-primary" />
          Country
        </Label>
        <Select value={selectedCountry} onValueChange={handleCountryChange}>
          <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground">
            <SelectValue placeholder="Select country..." />
          </SelectTrigger>
          <SelectContent className="bg-background border-border max-h-[300px]">
            {countries.map((country) => (
              <SelectItem key={country} value={country} className="text-foreground hover:bg-primary/10">
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* State Selection */}
      {selectedCountry && (
        <div className="space-y-2">
          <Label className="text-foreground font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            State / Province
          </Label>
          <Select value={selectedState} onValueChange={handleStateChange}>
            <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground">
              <SelectValue placeholder="Select state/province..." />
            </SelectTrigger>
            <SelectContent className="bg-background border-border max-h-[300px]">
              {states.map((state) => (
                <SelectItem key={state} value={state} className="text-foreground hover:bg-primary/10">
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* City Selection */}
      {selectedState && (
        <div className="space-y-2">
          <Label className="text-foreground font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            City
          </Label>
          <Select value={selectedCity} onValueChange={handleCityChange}>
            <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20 h-12 text-foreground">
              <SelectValue placeholder="Select city..." />
            </SelectTrigger>
            <SelectContent className="bg-background border-border max-h-[300px]">
              {cities.map((city) => (
                <SelectItem key={city} value={city} className="text-foreground hover:bg-primary/10">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Display selected coordinates */}
      {details.latitude !== 0 && details.longitude !== 0 && (
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
          <p className="text-sm text-foreground font-medium">
            📍 {details.placeOfBirth}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Coordinates: {details.latitude.toFixed(4)}°, {details.longitude.toFixed(4)}°
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="blue"
        size="xl"
        className="w-full mt-8"
        disabled={isLoading || isDailyLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Calculating Your Destiny...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Generate Kundali
          </span>
        )}
      </Button>

      {/* Daily Horoscope Button */}
      {onDailyHoroscope && (
        <Button
          type="button"
          variant="green"
          size="xl"
          disabled={isDailyLoading || isLoading}
          onClick={() => {
            if (validateForm()) {
              onDailyHoroscope(details);
            }
          }}
          className="w-full"
        >
          {isDailyLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              <span className="font-medium">Preparing Your Daily Horoscope...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">View Your BNN Daily Horoscope</span>
            </div>
          )}
        </Button>
      )}

    </form>
  );
};
