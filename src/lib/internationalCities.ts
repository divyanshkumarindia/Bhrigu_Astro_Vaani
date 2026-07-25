// International cities organized by country
export interface CityLocation {
  name: string;
  country: string;
  lat: number;
  lng: number;
}

export const INTERNATIONAL_CITIES: CityLocation[] = [
  // United States
  { name: 'New York City', country: 'United States', lat: 40.7128, lng: -74.0060 },
  { name: 'Los Angeles', country: 'United States', lat: 34.0522, lng: -118.2437 },
  { name: 'Chicago', country: 'United States', lat: 41.8781, lng: -87.6298 },
  { name: 'Houston', country: 'United States', lat: 29.7604, lng: -95.3698 },
  { name: 'Phoenix', country: 'United States', lat: 33.4484, lng: -112.0740 },
  { name: 'San Francisco', country: 'United States', lat: 37.7749, lng: -122.4194 },
  { name: 'Seattle', country: 'United States', lat: 47.6062, lng: -122.3321 },
  { name: 'Miami', country: 'United States', lat: 25.7617, lng: -80.1918 },
  { name: 'Boston', country: 'United States', lat: 42.3601, lng: -71.0589 },
  { name: 'Dallas', country: 'United States', lat: 32.7767, lng: -96.7970 },
  { name: 'Atlanta', country: 'United States', lat: 33.7490, lng: -84.3880 },
  { name: 'Denver', country: 'United States', lat: 39.7392, lng: -104.9903 },
  { name: 'Las Vegas', country: 'United States', lat: 36.1699, lng: -115.1398 },
  { name: 'Washington D.C.', country: 'United States', lat: 38.9072, lng: -77.0369 },
  
  // United Kingdom
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
  { name: 'Manchester', country: 'United Kingdom', lat: 53.4808, lng: -2.2426 },
  { name: 'Birmingham', country: 'United Kingdom', lat: 52.4862, lng: -1.8904 },
  { name: 'Leeds', country: 'United Kingdom', lat: 53.8008, lng: -1.5491 },
  { name: 'Glasgow', country: 'United Kingdom', lat: 55.8642, lng: -4.2518 },
  { name: 'Liverpool', country: 'United Kingdom', lat: 53.4084, lng: -2.9916 },
  { name: 'Edinburgh', country: 'United Kingdom', lat: 55.9533, lng: -3.1883 },
  { name: 'Bristol', country: 'United Kingdom', lat: 51.4545, lng: -2.5879 },
  
  // Canada
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832 },
  { name: 'Vancouver', country: 'Canada', lat: 49.2827, lng: -123.1207 },
  { name: 'Montreal', country: 'Canada', lat: 45.5017, lng: -73.5673 },
  { name: 'Calgary', country: 'Canada', lat: 51.0447, lng: -114.0719 },
  { name: 'Ottawa', country: 'Canada', lat: 45.4215, lng: -75.6972 },
  { name: 'Edmonton', country: 'Canada', lat: 53.5461, lng: -113.4938 },
  { name: 'Winnipeg', country: 'Canada', lat: 49.8951, lng: -97.1384 },
  
  // Australia
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 },
  { name: 'Melbourne', country: 'Australia', lat: -37.8136, lng: 144.9631 },
  { name: 'Brisbane', country: 'Australia', lat: -27.4698, lng: 153.0251 },
  { name: 'Perth', country: 'Australia', lat: -31.9505, lng: 115.8605 },
  { name: 'Adelaide', country: 'Australia', lat: -34.9285, lng: 138.6007 },
  { name: 'Gold Coast', country: 'Australia', lat: -28.0167, lng: 153.4000 },
  { name: 'Canberra', country: 'Australia', lat: -35.2809, lng: 149.1300 },
  
  // United Arab Emirates
  { name: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lng: 55.2708 },
  { name: 'Abu Dhabi', country: 'United Arab Emirates', lat: 24.4539, lng: 54.3773 },
  { name: 'Sharjah', country: 'United Arab Emirates', lat: 25.3463, lng: 55.4209 },
  
  // Saudi Arabia
  { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753 },
  { name: 'Jeddah', country: 'Saudi Arabia', lat: 21.4858, lng: 39.1925 },
  { name: 'Mecca', country: 'Saudi Arabia', lat: 21.3891, lng: 39.8579 },
  { name: 'Medina', country: 'Saudi Arabia', lat: 24.5247, lng: 39.5692 },
  { name: 'Dammam', country: 'Saudi Arabia', lat: 26.4207, lng: 50.0888 },
  
  // Singapore
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198 },
  
  // Hong Kong
  { name: 'Hong Kong', country: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
  
  // Germany
  { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050 },
  { name: 'Munich', country: 'Germany', lat: 48.1351, lng: 11.5820 },
  { name: 'Frankfurt', country: 'Germany', lat: 50.1109, lng: 8.6821 },
  { name: 'Hamburg', country: 'Germany', lat: 53.5511, lng: 9.9937 },
  { name: 'Cologne', country: 'Germany', lat: 50.9375, lng: 6.9603 },
  
  // France
  { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522 },
  { name: 'Lyon', country: 'France', lat: 45.7640, lng: 4.8357 },
  { name: 'Marseille', country: 'France', lat: 43.2965, lng: 5.3698 },
  { name: 'Nice', country: 'France', lat: 43.7102, lng: 7.2620 },
  { name: 'Toulouse', country: 'France', lat: 43.6047, lng: 1.4442 },
  
  // Italy
  { name: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964 },
  { name: 'Milan', country: 'Italy', lat: 45.4642, lng: 9.1900 },
  { name: 'Florence', country: 'Italy', lat: 43.7696, lng: 11.2558 },
  { name: 'Venice', country: 'Italy', lat: 45.4408, lng: 12.3155 },
  { name: 'Naples', country: 'Italy', lat: 40.8518, lng: 14.2681 },
  
  // Spain
  { name: 'Madrid', country: 'Spain', lat: 40.4168, lng: -3.7038 },
  { name: 'Barcelona', country: 'Spain', lat: 41.3851, lng: 2.1734 },
  { name: 'Valencia', country: 'Spain', lat: 39.4699, lng: -0.3763 },
  { name: 'Seville', country: 'Spain', lat: 37.3891, lng: -5.9845 },
  
  // Netherlands
  { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041 },
  { name: 'Rotterdam', country: 'Netherlands', lat: 51.9244, lng: 4.4777 },
  { name: 'The Hague', country: 'Netherlands', lat: 52.0705, lng: 4.3007 },
  
  // Switzerland
  { name: 'Zurich', country: 'Switzerland', lat: 47.3769, lng: 8.5417 },
  { name: 'Geneva', country: 'Switzerland', lat: 46.2044, lng: 6.1432 },
  { name: 'Bern', country: 'Switzerland', lat: 46.9480, lng: 7.4474 },
  
  // Japan
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503 },
  { name: 'Osaka', country: 'Japan', lat: 34.6937, lng: 135.5023 },
  { name: 'Kyoto', country: 'Japan', lat: 35.0116, lng: 135.7681 },
  { name: 'Yokohama', country: 'Japan', lat: 35.4437, lng: 139.6380 },
  { name: 'Nagoya', country: 'Japan', lat: 35.1815, lng: 136.9066 },
  
  // South Korea
  { name: 'Seoul', country: 'South Korea', lat: 37.5665, lng: 126.9780 },
  { name: 'Busan', country: 'South Korea', lat: 35.1796, lng: 129.0756 },
  { name: 'Incheon', country: 'South Korea', lat: 37.4563, lng: 126.7052 },
  
  // China
  { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074 },
  { name: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737 },
  { name: 'Guangzhou', country: 'China', lat: 23.1291, lng: 113.2644 },
  { name: 'Shenzhen', country: 'China', lat: 22.5431, lng: 114.0579 },
  { name: 'Chengdu', country: 'China', lat: 30.5728, lng: 104.0668 },
  
  // Thailand
  { name: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018 },
  { name: 'Chiang Mai', country: 'Thailand', lat: 18.7061, lng: 98.9817 },
  { name: 'Phuket', country: 'Thailand', lat: 7.8804, lng: 98.3923 },
  
  // Malaysia
  { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lng: 101.6869 },
  { name: 'Penang', country: 'Malaysia', lat: 5.4141, lng: 100.3288 },
  { name: 'Johor Bahru', country: 'Malaysia', lat: 1.4927, lng: 103.7414 },
  
  // Indonesia
  { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456 },
  { name: 'Bali', country: 'Indonesia', lat: -8.3405, lng: 115.0920 },
  { name: 'Surabaya', country: 'Indonesia', lat: -7.2575, lng: 112.7521 },
  
  // Philippines
  { name: 'Manila', country: 'Philippines', lat: 14.5995, lng: 120.9842 },
  { name: 'Cebu City', country: 'Philippines', lat: 10.3157, lng: 123.8854 },
  { name: 'Davao City', country: 'Philippines', lat: 7.1907, lng: 125.4553 },
  
  // Vietnam
  { name: 'Ho Chi Minh City', country: 'Vietnam', lat: 10.8231, lng: 106.6297 },
  { name: 'Hanoi', country: 'Vietnam', lat: 21.0278, lng: 105.8342 },
  
  // Russia
  { name: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173 },
  { name: 'Saint Petersburg', country: 'Russia', lat: 59.9343, lng: 30.3351 },
  
  // Brazil
  { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333 },
  { name: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lng: -43.1729 },
  { name: 'Brasília', country: 'Brazil', lat: -15.8267, lng: -47.9218 },
  
  // Mexico
  { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332 },
  { name: 'Cancún', country: 'Mexico', lat: 21.1619, lng: -86.8515 },
  { name: 'Guadalajara', country: 'Mexico', lat: 20.6597, lng: -103.3496 },
  
  // South Africa
  { name: 'Johannesburg', country: 'South Africa', lat: -26.2041, lng: 28.0473 },
  { name: 'Cape Town', country: 'South Africa', lat: -33.9249, lng: 18.4241 },
  { name: 'Durban', country: 'South Africa', lat: -29.8587, lng: 31.0218 },
  
  // Egypt
  { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357 },
  { name: 'Alexandria', country: 'Egypt', lat: 31.2001, lng: 29.9187 },
  
  // Turkey
  { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784 },
  { name: 'Ankara', country: 'Turkey', lat: 39.9334, lng: 32.8597 },
  { name: 'Izmir', country: 'Turkey', lat: 38.4237, lng: 27.1428 },
  
  // Israel
  { name: 'Tel Aviv', country: 'Israel', lat: 32.0853, lng: 34.7818 },
  { name: 'Jerusalem', country: 'Israel', lat: 31.7683, lng: 35.2137 },
  
  // Pakistan
  { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011 },
  { name: 'Lahore', country: 'Pakistan', lat: 31.5204, lng: 74.3587 },
  { name: 'Islamabad', country: 'Pakistan', lat: 33.6844, lng: 73.0479 },
  { name: 'Rawalpindi', country: 'Pakistan', lat: 33.5651, lng: 73.0169 },
  { name: 'Faisalabad', country: 'Pakistan', lat: 31.4504, lng: 73.1350 },
  
  // Bangladesh
  { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125 },
  { name: 'Chittagong', country: 'Bangladesh', lat: 22.3569, lng: 91.7832 },
  
  // Sri Lanka
  { name: 'Colombo', country: 'Sri Lanka', lat: 6.9271, lng: 79.8612 },
  { name: 'Kandy', country: 'Sri Lanka', lat: 7.2906, lng: 80.6337 },
  
  // Nepal
  { name: 'Kathmandu', country: 'Nepal', lat: 27.7172, lng: 85.3240 },
  { name: 'Pokhara', country: 'Nepal', lat: 28.2096, lng: 83.9856 },
  
  // New Zealand
  { name: 'Auckland', country: 'New Zealand', lat: -36.8485, lng: 174.7633 },
  { name: 'Wellington', country: 'New Zealand', lat: -41.2865, lng: 174.7762 },
  { name: 'Christchurch', country: 'New Zealand', lat: -43.5321, lng: 172.6362 },
  
  // Ireland
  { name: 'Dublin', country: 'Ireland', lat: 53.3498, lng: -6.2603 },
  { name: 'Cork', country: 'Ireland', lat: 51.8985, lng: -8.4756 },
  
  // Belgium
  { name: 'Brussels', country: 'Belgium', lat: 50.8503, lng: 4.3517 },
  { name: 'Antwerp', country: 'Belgium', lat: 51.2194, lng: 4.4025 },
  
  // Austria
  { name: 'Vienna', country: 'Austria', lat: 48.2082, lng: 16.3738 },
  { name: 'Salzburg', country: 'Austria', lat: 47.8095, lng: 13.0550 },
  
  // Sweden
  { name: 'Stockholm', country: 'Sweden', lat: 59.3293, lng: 18.0686 },
  { name: 'Gothenburg', country: 'Sweden', lat: 57.7089, lng: 11.9746 },
  
  // Norway
  { name: 'Oslo', country: 'Norway', lat: 59.9139, lng: 10.7522 },
  { name: 'Bergen', country: 'Norway', lat: 60.3913, lng: 5.3221 },
  
  // Denmark
  { name: 'Copenhagen', country: 'Denmark', lat: 55.6761, lng: 12.5683 },
  
  // Finland
  { name: 'Helsinki', country: 'Finland', lat: 60.1699, lng: 24.9384 },
  
  // Portugal
  { name: 'Lisbon', country: 'Portugal', lat: 38.7223, lng: -9.1393 },
  { name: 'Porto', country: 'Portugal', lat: 41.1579, lng: -8.6291 },
  
  // Greece
  { name: 'Athens', country: 'Greece', lat: 37.9838, lng: 23.7275 },
  { name: 'Thessaloniki', country: 'Greece', lat: 40.6401, lng: 22.9444 },
  
  // Poland
  { name: 'Warsaw', country: 'Poland', lat: 52.2297, lng: 21.0122 },
  { name: 'Krakow', country: 'Poland', lat: 50.0647, lng: 19.9450 },
  
  // Czech Republic
  { name: 'Prague', country: 'Czech Republic', lat: 50.0755, lng: 14.4378 },
  
  // Hungary
  { name: 'Budapest', country: 'Hungary', lat: 47.4979, lng: 19.0402 },
  
  // Argentina
  { name: 'Buenos Aires', country: 'Argentina', lat: -34.6037, lng: -58.3816 },
  { name: 'Córdoba', country: 'Argentina', lat: -31.4201, lng: -64.1888 },
  
  // Chile
  { name: 'Santiago', country: 'Chile', lat: -33.4489, lng: -70.6693 },
  
  // Colombia
  { name: 'Bogotá', country: 'Colombia', lat: 4.7110, lng: -74.0721 },
  { name: 'Medellín', country: 'Colombia', lat: 6.2442, lng: -75.5812 },
  
  // Peru
  { name: 'Lima', country: 'Peru', lat: -12.0464, lng: -77.0428 },
  
  // Kenya
  { name: 'Nairobi', country: 'Kenya', lat: -1.2921, lng: 36.8219 },
  { name: 'Mombasa', country: 'Kenya', lat: -4.0435, lng: 39.6682 },
  
  // Nigeria
  { name: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792 },
  { name: 'Abuja', country: 'Nigeria', lat: 9.0765, lng: 7.3986 },
  
  // Morocco
  { name: 'Casablanca', country: 'Morocco', lat: 33.5731, lng: -7.5898 },
  { name: 'Marrakech', country: 'Morocco', lat: 31.6295, lng: -7.9811 },
  
  // Qatar
  { name: 'Doha', country: 'Qatar', lat: 25.2854, lng: 51.5310 },
  
  // Kuwait
  { name: 'Kuwait City', country: 'Kuwait', lat: 29.3759, lng: 47.9774 },
  
  // Bahrain
  { name: 'Manama', country: 'Bahrain', lat: 26.2285, lng: 50.5860 },
  
  // Oman
  { name: 'Muscat', country: 'Oman', lat: 23.5880, lng: 58.3829 },
];

export const COUNTRIES = [...new Set(INTERNATIONAL_CITIES.map(c => c.country))].sort();