// Comprehensive world countries with states/provinces and major cities

export interface StateProvince {
  name: string;
  cities: string[];
}

export interface Country {
  name: string;
  code: string;
  states: StateProvince[];
}

export interface CityWithCoords {
  name: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
}

// All countries with states and major cities
export const WORLD_COUNTRIES: Country[] = [
  // ASIA
  {
    name: 'India',
    code: 'IN',
    states: [
      { name: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore', 'Kurnool', 'Rajahmundry', 'Kakinada', 'Kadapa', 'Anantapur'] },
      { name: 'Arunachal Pradesh', cities: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro'] },
      { name: 'Assam', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon'] },
      { name: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar', 'Munger', 'Saharsa', 'Hajipur', 'Sasaram', 'Dehri', 'Siwan', 'Motihari', 'Nawada'] },
      { name: 'Chhattisgarh', cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur'] },
      { name: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'] },
      { name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand', 'Navsari', 'Morbi', 'Nadiad', 'Surendranagar', 'Bharuch', 'Mehsana', 'Bhuj', 'Porbandar', 'Palanpur', 'Vapi', 'Valsad', 'Godhra', 'Veraval', 'Patan', 'Dwarka', 'Somnath'] },
      { name: 'Haryana', cities: ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Panchkula', 'Bhiwani', 'Sirsa', 'Bahadurgarh', 'Jind', 'Thanesar', 'Kaithal', 'Palwal', 'Rewari', 'Hansi', 'Narnaul', 'Fatehabad', 'Kurukshetra'] },
      { name: 'Himachal Pradesh', cities: ['Shimla', 'Dharamshala', 'Solan', 'Mandi', 'Palampur', 'Baddi', 'Nahan', 'Kullu', 'Manali', 'Bilaspur', 'Chamba', 'Una', 'Hamirpur', 'Dalhousie', 'Kasauli', 'Kangra'] },
      { name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Medininagar', 'Chaibasa'] },
      { name: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere', 'Bellary', 'Bijapur', 'Shimoga', 'Tumkur', 'Raichur', 'Bidar', 'Hospet', 'Hassan', 'Udupi', 'Chitradurga', 'Kolar', 'Mandya', 'Chikmagalur', 'Gangavati', 'Bagalkot', 'Gadag', 'Karwar', 'Hampi'] },
      { name: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kannur', 'Kottayam', 'Malappuram', 'Pathanamthitta', 'Idukki', 'Ernakulam', 'Wayanad', 'Kasaragod', 'Munnar', 'Guruvayur', 'Sabarimala'] },
      { name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa', 'Murwara', 'Singrauli', 'Burhanpur', 'Khandwa', 'Bhind', 'Chhindwara', 'Guna', 'Shivpuri', 'Vidisha', 'Damoh', 'Mandsaur', 'Khajuraho', 'Orchha', 'Omkareshwar', 'Sanchi', 'Pachmarhi'] },
      { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Navi Mumbai', 'Sangli', 'Malegaon', 'Jalgaon', 'Akola', 'Latur', 'Dhule', 'Ahmednagar', 'Chandrapur', 'Parbhani', 'Ichalkaranji', 'Jalna', 'Ambernath', 'Bhiwandi', 'Panvel', 'Shirdi', 'Trimbakeshwar', 'Pandharpur'] },
      { name: 'Manipur', cities: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur'] },
      { name: 'Meghalaya', cities: ['Shillong', 'Tura', 'Jowai', 'Nongstoin', 'Cherrapunji'] },
      { name: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'] },
      { name: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha'] },
      { name: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Brahmapur', 'Sambalpur', 'Puri', 'Balasore', 'Baripada', 'Bhadrak', 'Jharsuguda', 'Jeypore', 'Konark'] },
      { name: 'Punjab', cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Pathankot', 'Hoshiarpur', 'Batala', 'Moga', 'Malerkotla', 'Khanna', 'Phagwara', 'Muktsar', 'Barnala', 'Rajpura', 'Firozpur', 'Kapurthala', 'Anandpur Sahib'] },
      { name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner', 'Ajmer', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar', 'Pali', 'Sri Ganganagar', 'Jhunjhunu', 'Churu', 'Kishangarh', 'Beawar', 'Hanumangarh', 'Tonk', 'Sawai Madhopur', 'Pushkar', 'Mount Abu', 'Jaisalmer', 'Chittorgarh', 'Nathdwara'] },
      { name: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Pelling', 'Mangan', 'Gyalshing'] },
      { name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Ranipet', 'Sivakasi', 'Karur', 'Ooty', 'Hosur', 'Nagercoil', 'Kanchipuram', 'Kumbakonam', 'Rajapalayam', 'Pudukkottai', 'Vaniyambadi', 'Rameswaram', 'Kanyakumari', 'Mahabalipuram', 'Chidambaram', 'Srirangam'] },
      { name: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Ramagundam', 'Nalgonda', 'Adilabad', 'Siddipet', 'Bhadrachalam'] },
      { name: 'Tripura', cities: ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailashahar'] },
      { name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Meerut', 'Prayagraj', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur', 'Noida', 'Firozabad', 'Jhansi', 'Muzaffarnagar', 'Mathura', 'Vrindavan', 'Ayodhya', 'Shahjahanpur', 'Rampur', 'Sambhal', 'Hapur', 'Etawah', 'Mirzapur', 'Bulandshahr', 'Bijnor', 'Orai', 'Bahraich', 'Hardoi', 'Fatehpur', 'Rae Bareli', 'Banda', 'Sitapur', 'Unnao', 'Sultanpur', 'Faizabad', 'Azamgarh', 'Ballia', 'Deoria', 'Gonda', 'Basti', 'Mau', 'Jaunpur', 'Amroha', 'Lakhimpur Kheri'] },
      { name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Rishikesh', 'Roorkee', 'Haldwani', 'Kashipur', 'Rudrapur', 'Nainital', 'Almora', 'Pithoragarh', 'Mussoorie', 'Tehri', 'Uttarkashi', 'Chamoli', 'Badrinath', 'Kedarnath', 'Gangotri', 'Yamunotri'] },
      { name: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Malda', 'Baharampur', 'Habra', 'Kharagpur', 'Haldia', 'Shantiniketan', 'Krishnanagar', 'Nabadwip', 'Darjeeling', 'Kalimpong', 'Cooch Behar', 'Jalpaiguri', 'Alipurduar', 'Balurghat', 'Raiganj', 'Barrackpore', 'Chandannagar', 'Serampore', 'Hooghly', 'Bankura', 'Purulia', 'Midnapore', 'Tarakeswar', 'Mayapur', 'Digha', 'Bakkhali', 'Sagar Island'] },
      { name: 'Delhi', cities: ['New Delhi', 'Dwarka', 'Rohini', 'Saket', 'Connaught Place', 'Karol Bagh', 'Chandni Chowk', 'Lajpat Nagar'] },
      { name: 'Jammu & Kashmir', cities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Sopore', 'Pahalgam', 'Gulmarg', 'Patnitop', 'Vaishno Devi'] },
      { name: 'Ladakh', cities: ['Leh', 'Kargil', 'Nubra', 'Pangong'] },
      { name: 'Chandigarh', cities: ['Chandigarh'] },
      { name: 'Puducherry', cities: ['Pondicherry', 'Karaikal', 'Mahe', 'Yanam', 'Auroville'] },
      { name: 'Andaman and Nicobar', cities: ['Port Blair', 'Havelock Island', 'Neil Island'] },
      { name: 'Lakshadweep', cities: ['Kavaratti', 'Agatti'] },
      { name: 'Dadra and Nagar Haveli', cities: ['Silvassa'] },
      { name: 'Daman and Diu', cities: ['Daman', 'Diu'] },
    ]
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      { name: 'California', cities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Oakland', 'Fresno', 'Long Beach', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Irvine', 'Santa Clara', 'Pasadena', 'Berkeley', 'Palo Alto'] },
      { name: 'Texas', cities: ['Houston', 'Dallas', 'San Antonio', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Plano', 'Corpus Christi', 'Lubbock', 'Laredo', 'Irving', 'Garland', 'Amarillo'] },
      { name: 'New York', cities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'New Rochelle', 'Schenectady', 'Utica', 'White Plains'] },
      { name: 'Florida', cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'St. Petersburg', 'Hialeah', 'Port St. Lucie', 'Fort Lauderdale', 'Cape Coral', 'Tallahassee', 'West Palm Beach'] },
      { name: 'Illinois', cities: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Elgin', 'Peoria', 'Champaign', 'Waukegan'] },
      { name: 'Pennsylvania', cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Reading', 'Erie', 'Scranton', 'Bethlehem', 'Lancaster', 'Harrisburg'] },
      { name: 'Arizona', cities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Gilbert', 'Glendale', 'Tempe', 'Peoria', 'Surprise'] },
      { name: 'Ohio', cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown'] },
      { name: 'Georgia', cities: ['Atlanta', 'Augusta', 'Columbus', 'Macon', 'Savannah', 'Athens', 'Sandy Springs', 'Roswell', 'Albany'] },
      { name: 'North Carolina', cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington', 'High Point'] },
      { name: 'Michigan', cities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Lansing', 'Ann Arbor', 'Flint', 'Dearborn', 'Livonia'] },
      { name: 'New Jersey', cities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Woodbridge', 'Lakewood', 'Toms River', 'Hamilton', 'Trenton'] },
      { name: 'Virginia', cities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Hampton', 'Roanoke', 'Portsmouth'] },
      { name: 'Washington', cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Spokane Valley'] },
      { name: 'Massachusetts', cities: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'New Bedford', 'Quincy', 'Lynn'] },
      { name: 'Colorado', cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Arvada', 'Westminster', 'Pueblo', 'Boulder'] },
      { name: 'Tennessee', cities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro', 'Franklin', 'Jackson', 'Johnson City'] },
      { name: 'Nevada', cities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City'] },
      { name: 'Hawaii', cities: ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu', 'Kaneohe'] },
    ]
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    states: [
      { name: 'England', cities: ['London', 'Birmingham', 'Manchester', 'Leeds', 'Liverpool', 'Sheffield', 'Bristol', 'Newcastle', 'Nottingham', 'Leicester', 'Coventry', 'Brighton', 'Plymouth', 'Oxford', 'Cambridge', 'Reading', 'Southampton', 'Portsmouth', 'York', 'Bath'] },
      { name: 'Scotland', cities: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness', 'Stirling', 'Perth'] },
      { name: 'Wales', cities: ['Cardiff', 'Swansea', 'Newport', 'Wrexham', 'Bangor'] },
      { name: 'Northern Ireland', cities: ['Belfast', 'Derry', 'Lisburn', 'Newry', 'Bangor'] },
    ]
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      { name: 'Ontario', cities: ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London', 'Markham', 'Vaughan', 'Kitchener', 'Windsor', 'Burlington', 'Oshawa', 'Oakville', 'Richmond Hill', 'St. Catharines', 'Waterloo', 'Guelph', 'Cambridge', 'Niagara Falls'] },
      { name: 'Quebec', cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Levis', 'Saguenay', 'Trois-Rivieres'] },
      { name: 'British Columbia', cities: ['Vancouver', 'Victoria', 'Surrey', 'Burnaby', 'Richmond', 'Kelowna', 'Abbotsford', 'Coquitlam', 'Whistler', 'Nanaimo'] },
      { name: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Fort McMurray', 'Grande Prairie', 'Banff', 'Jasper'] },
      { name: 'Manitoba', cities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie'] },
      { name: 'Saskatchewan', cities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current'] },
      { name: 'Nova Scotia', cities: ['Halifax', 'Dartmouth', 'Sydney', 'Truro', 'New Glasgow'] },
      { name: 'New Brunswick', cities: ['Saint John', 'Moncton', 'Fredericton', 'Dieppe', 'Miramichi'] },
    ]
  },
  {
    name: 'Australia',
    code: 'AU',
    states: [
      { name: 'New South Wales', cities: ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast', 'Maitland', 'Coffs Harbour', 'Dubbo', 'Tamworth', 'Wagga Wagga', 'Albury', 'Port Macquarie'] },
      { name: 'Victoria', cities: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Shepparton', 'Mildura', 'Warrnambool', 'Wodonga'] },
      { name: 'Queensland', cities: ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Townsville', 'Cairns', 'Toowoomba', 'Mackay', 'Rockhampton', 'Bundaberg'] },
      { name: 'Western Australia', cities: ['Perth', 'Mandurah', 'Bunbury', 'Geraldton', 'Kalgoorlie', 'Albany', 'Broome'] },
      { name: 'South Australia', cities: ['Adelaide', 'Mount Gambier', 'Whyalla', 'Port Augusta', 'Port Lincoln'] },
      { name: 'Tasmania', cities: ['Hobart', 'Launceston', 'Devonport', 'Burnie'] },
      { name: 'Australian Capital Territory', cities: ['Canberra'] },
      { name: 'Northern Territory', cities: ['Darwin', 'Alice Springs', 'Katherine'] },
    ]
  },
  {
    name: 'Germany',
    code: 'DE',
    states: [
      { name: 'Bavaria', cities: ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg', 'Ingolstadt', 'Wurzburg'] },
      { name: 'North Rhine-Westphalia', cities: ['Cologne', 'Dusseldorf', 'Dortmund', 'Essen', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Munster'] },
      { name: 'Baden-Wurttemberg', cities: ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Ulm', 'Heilbronn'] },
      { name: 'Hesse', cities: ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt', 'Offenbach'] },
      { name: 'Berlin', cities: ['Berlin'] },
      { name: 'Hamburg', cities: ['Hamburg'] },
      { name: 'Saxony', cities: ['Leipzig', 'Dresden', 'Chemnitz'] },
    ]
  },
  {
    name: 'France',
    code: 'FR',
    states: [
      { name: 'Ile-de-France', cities: ['Paris', 'Versailles', 'Boulogne-Billancourt', 'Saint-Denis', 'Argenteuil', 'Montreuil'] },
      { name: 'Provence-Alpes-Cote d\'Azur', cities: ['Marseille', 'Nice', 'Toulon', 'Aix-en-Provence', 'Avignon', 'Cannes', 'Antibes'] },
      { name: 'Auvergne-Rhone-Alpes', cities: ['Lyon', 'Grenoble', 'Saint-Etienne', 'Villeurbanne', 'Clermont-Ferrand', 'Annecy'] },
      { name: 'Nouvelle-Aquitaine', cities: ['Bordeaux', 'Limoges', 'Poitiers', 'Pau', 'La Rochelle', 'Biarritz'] },
      { name: 'Occitanie', cities: ['Toulouse', 'Montpellier', 'Nimes', 'Perpignan', 'Carcassonne'] },
      { name: 'Brittany', cities: ['Rennes', 'Brest', 'Quimper', 'Lorient', 'Vannes', 'Saint-Malo'] },
      { name: 'Grand Est', cities: ['Strasbourg', 'Reims', 'Metz', 'Mulhouse', 'Nancy', 'Colmar'] },
      { name: 'Normandy', cities: ['Rouen', 'Le Havre', 'Caen', 'Cherbourg', 'Evreux'] },
    ]
  },
  {
    name: 'Japan',
    code: 'JP',
    states: [
      { name: 'Tokyo', cities: ['Tokyo', 'Shibuya', 'Shinjuku', 'Ginza', 'Akihabara', 'Harajuku'] },
      { name: 'Osaka', cities: ['Osaka', 'Sakai', 'Higashiosaka', 'Hirakata', 'Toyonaka'] },
      { name: 'Kanagawa', cities: ['Yokohama', 'Kawasaki', 'Sagamihara', 'Fujisawa', 'Kamakura'] },
      { name: 'Aichi', cities: ['Nagoya', 'Toyota', 'Okazaki', 'Ichinomiya', 'Kasugai'] },
      { name: 'Hokkaido', cities: ['Sapporo', 'Asahikawa', 'Hakodate', 'Obihiro', 'Kushiro'] },
      { name: 'Fukuoka', cities: ['Fukuoka', 'Kitakyushu', 'Kurume', 'Omuta'] },
      { name: 'Kyoto', cities: ['Kyoto', 'Uji', 'Maizuru', 'Kameoka'] },
      { name: 'Hyogo', cities: ['Kobe', 'Himeji', 'Nishinomiya', 'Amagasaki', 'Akashi'] },
    ]
  },
  {
    name: 'China',
    code: 'CN',
    states: [
      { name: 'Beijing', cities: ['Beijing', 'Haidian', 'Chaoyang', 'Dongcheng', 'Xicheng'] },
      { name: 'Shanghai', cities: ['Shanghai', 'Pudong', 'Minhang', 'Baoshan', 'Jiading'] },
      { name: 'Guangdong', cities: ['Guangzhou', 'Shenzhen', 'Dongguan', 'Foshan', 'Zhuhai', 'Huizhou', 'Zhongshan'] },
      { name: 'Sichuan', cities: ['Chengdu', 'Mianyang', 'Zigong', 'Leshan', 'Nanchong'] },
      { name: 'Zhejiang', cities: ['Hangzhou', 'Ningbo', 'Wenzhou', 'Shaoxing', 'Jiaxing'] },
      { name: 'Jiangsu', cities: ['Nanjing', 'Suzhou', 'Wuxi', 'Xuzhou', 'Changzhou'] },
      { name: 'Shandong', cities: ['Jinan', 'Qingdao', 'Yantai', 'Weihai', 'Zibo'] },
      { name: 'Hubei', cities: ['Wuhan', 'Yichang', 'Xiangyang', 'Jingzhou'] },
      { name: 'Tianjin', cities: ['Tianjin'] },
      { name: 'Hong Kong', cities: ['Hong Kong', 'Kowloon', 'Tsim Sha Tsui', 'Central'] },
    ]
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    states: [
      { name: 'Dubai', cities: ['Dubai', 'Jumeirah', 'Deira', 'Bur Dubai', 'Dubai Marina'] },
      { name: 'Abu Dhabi', cities: ['Abu Dhabi', 'Al Ain', 'Yas Island', 'Khalifa City'] },
      { name: 'Sharjah', cities: ['Sharjah', 'Al Majaz', 'Al Nahda'] },
      { name: 'Ajman', cities: ['Ajman'] },
      { name: 'Ras Al Khaimah', cities: ['Ras Al Khaimah'] },
      { name: 'Fujairah', cities: ['Fujairah'] },
      { name: 'Umm Al Quwain', cities: ['Umm Al Quwain'] },
    ]
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    states: [
      { name: 'Riyadh', cities: ['Riyadh', 'Diriyah'] },
      { name: 'Makkah', cities: ['Mecca', 'Jeddah', 'Taif'] },
      { name: 'Medina', cities: ['Medina', 'Yanbu'] },
      { name: 'Eastern Province', cities: ['Dammam', 'Dhahran', 'Al Khobar', 'Jubail', 'Qatif'] },
      { name: 'Asir', cities: ['Abha', 'Khamis Mushait'] },
    ]
  },
  {
    name: 'Singapore',
    code: 'SG',
    states: [
      { name: 'Singapore', cities: ['Singapore', 'Jurong East', 'Tampines', 'Woodlands', 'Orchard', 'Marina Bay'] },
    ]
  },
  {
    name: 'South Korea',
    code: 'KR',
    states: [
      { name: 'Seoul', cities: ['Seoul', 'Gangnam', 'Jongno', 'Mapo', 'Yongsan', 'Hongdae'] },
      { name: 'Busan', cities: ['Busan', 'Haeundae', 'Nampo'] },
      { name: 'Incheon', cities: ['Incheon', 'Songdo'] },
      { name: 'Daegu', cities: ['Daegu'] },
      { name: 'Gwangju', cities: ['Gwangju'] },
      { name: 'Gyeonggi', cities: ['Suwon', 'Seongnam', 'Goyang', 'Yongin', 'Ansan', 'Anyang'] },
      { name: 'Jeju', cities: ['Jeju City', 'Seogwipo'] },
    ]
  },
  {
    name: 'Thailand',
    code: 'TH',
    states: [
      { name: 'Bangkok', cities: ['Bangkok', 'Sukhumvit', 'Silom', 'Siam', 'Chatuchak'] },
      { name: 'Chiang Mai', cities: ['Chiang Mai', 'Mae Rim', 'San Kamphaeng'] },
      { name: 'Phuket', cities: ['Phuket', 'Patong', 'Kata', 'Karon'] },
      { name: 'Chonburi', cities: ['Pattaya', 'Chonburi', 'Sri Racha'] },
      { name: 'Krabi', cities: ['Krabi', 'Ao Nang', 'Railay'] },
      { name: 'Surat Thani', cities: ['Koh Samui', 'Koh Phangan', 'Surat Thani'] },
    ]
  },
  {
    name: 'Malaysia',
    code: 'MY',
    states: [
      { name: 'Kuala Lumpur', cities: ['Kuala Lumpur', 'Bukit Bintang', 'KLCC', 'Bangsar'] },
      { name: 'Selangor', cities: ['Shah Alam', 'Petaling Jaya', 'Subang Jaya', 'Klang'] },
      { name: 'Penang', cities: ['George Town', 'Butterworth', 'Bayan Lepas'] },
      { name: 'Johor', cities: ['Johor Bahru', 'Iskandar Puteri', 'Batu Pahat'] },
      { name: 'Sabah', cities: ['Kota Kinabalu', 'Sandakan', 'Tawau'] },
      { name: 'Sarawak', cities: ['Kuching', 'Miri', 'Sibu'] },
      { name: 'Melaka', cities: ['Melaka'] },
      { name: 'Langkawi', cities: ['Langkawi', 'Kuah'] },
    ]
  },
  {
    name: 'Indonesia',
    code: 'ID',
    states: [
      { name: 'Jakarta', cities: ['Jakarta', 'Central Jakarta', 'South Jakarta', 'North Jakarta'] },
      { name: 'Bali', cities: ['Denpasar', 'Ubud', 'Kuta', 'Seminyak', 'Sanur', 'Canggu'] },
      { name: 'West Java', cities: ['Bandung', 'Bekasi', 'Depok', 'Bogor', 'Tangerang'] },
      { name: 'East Java', cities: ['Surabaya', 'Malang', 'Sidoarjo'] },
      { name: 'Central Java', cities: ['Semarang', 'Solo', 'Yogyakarta'] },
      { name: 'North Sumatra', cities: ['Medan', 'Binjai'] },
      { name: 'South Sulawesi', cities: ['Makassar'] },
    ]
  },
  {
    name: 'Philippines',
    code: 'PH',
    states: [
      { name: 'Metro Manila', cities: ['Manila', 'Quezon City', 'Makati', 'Taguig', 'Pasig', 'Mandaluyong', 'Pasay'] },
      { name: 'Cebu', cities: ['Cebu City', 'Mandaue', 'Lapu-Lapu'] },
      { name: 'Davao', cities: ['Davao City', 'Tagum'] },
      { name: 'Iloilo', cities: ['Iloilo City'] },
      { name: 'Pampanga', cities: ['Angeles City', 'San Fernando'] },
      { name: 'Cavite', cities: ['Cavite City', 'Bacoor', 'Imus'] },
      { name: 'Palawan', cities: ['Puerto Princesa', 'El Nido', 'Coron'] },
    ]
  },
  {
    name: 'Vietnam',
    code: 'VN',
    states: [
      { name: 'Ho Chi Minh City', cities: ['Ho Chi Minh City', 'District 1', 'District 3', 'District 7'] },
      { name: 'Hanoi', cities: ['Hanoi', 'Hoan Kiem', 'Ba Dinh', 'Cau Giay'] },
      { name: 'Da Nang', cities: ['Da Nang'] },
      { name: 'Hai Phong', cities: ['Hai Phong'] },
      { name: 'Nha Trang', cities: ['Nha Trang'] },
      { name: 'Quang Ninh', cities: ['Ha Long'] },
      { name: 'Thua Thien-Hue', cities: ['Hue'] },
    ]
  },
  {
    name: 'Pakistan',
    code: 'PK',
    states: [
      { name: 'Sindh', cities: ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Nawabshah'] },
      { name: 'Punjab', cities: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Sialkot', 'Bahawalpur', 'Sargodha'] },
      { name: 'Islamabad Capital Territory', cities: ['Islamabad'] },
      { name: 'Khyber Pakhtunkhwa', cities: ['Peshawar', 'Mardan', 'Abbottabad', 'Swat'] },
      { name: 'Balochistan', cities: ['Quetta', 'Gwadar'] },
    ]
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    states: [
      { name: 'Dhaka', cities: ['Dhaka', 'Gazipur', 'Narayanganj'] },
      { name: 'Chittagong', cities: ['Chittagong', 'Cox\'s Bazar', 'Comilla'] },
      { name: 'Khulna', cities: ['Khulna', 'Jessore'] },
      { name: 'Rajshahi', cities: ['Rajshahi', 'Bogra'] },
      { name: 'Sylhet', cities: ['Sylhet'] },
    ]
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    states: [
      { name: 'Western', cities: ['Colombo', 'Sri Jayawardenepura Kotte', 'Negombo', 'Kalutara'] },
      { name: 'Central', cities: ['Kandy', 'Nuwara Eliya', 'Matale'] },
      { name: 'Southern', cities: ['Galle', 'Matara', 'Unawatuna', 'Mirissa'] },
      { name: 'North Central', cities: ['Anuradhapura', 'Polonnaruwa'] },
      { name: 'Uva', cities: ['Badulla', 'Ella', 'Haputale'] },
      { name: 'Northern', cities: ['Jaffna'] },
    ]
  },
  {
    name: 'Nepal',
    code: 'NP',
    states: [
      { name: 'Bagmati', cities: ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Banepa'] },
      { name: 'Gandaki', cities: ['Pokhara', 'Gorkha', 'Manang'] },
      { name: 'Lumbini', cities: ['Lumbini', 'Butwal', 'Siddharthanagar'] },
      { name: 'Province 2', cities: ['Janakpur', 'Birgunj'] },
      { name: 'Koshi', cities: ['Biratnagar', 'Dharan', 'Itahari'] },
    ]
  },
  {
    name: 'Russia',
    code: 'RU',
    states: [
      { name: 'Moscow', cities: ['Moscow'] },
      { name: 'Saint Petersburg', cities: ['Saint Petersburg'] },
      { name: 'Novosibirsk Oblast', cities: ['Novosibirsk'] },
      { name: 'Sverdlovsk Oblast', cities: ['Yekaterinburg'] },
      { name: 'Tatarstan', cities: ['Kazan'] },
      { name: 'Nizhny Novgorod Oblast', cities: ['Nizhny Novgorod'] },
      { name: 'Krasnodar Krai', cities: ['Krasnodar', 'Sochi'] },
    ]
  },
  {
    name: 'Brazil',
    code: 'BR',
    states: [
      { name: 'Sao Paulo', cities: ['Sao Paulo', 'Campinas', 'Guarulhos', 'Santos', 'Sao Bernardo do Campo'] },
      { name: 'Rio de Janeiro', cities: ['Rio de Janeiro', 'Niteroi', 'Nova Iguacu', 'Duque de Caxias'] },
      { name: 'Minas Gerais', cities: ['Belo Horizonte', 'Uberlandia', 'Ouro Preto'] },
      { name: 'Bahia', cities: ['Salvador', 'Feira de Santana'] },
      { name: 'Rio Grande do Sul', cities: ['Porto Alegre', 'Caxias do Sul', 'Gramado'] },
      { name: 'Parana', cities: ['Curitiba', 'Londrina', 'Foz do Iguacu'] },
      { name: 'Distrito Federal', cities: ['Brasilia'] },
    ]
  },
  {
    name: 'Mexico',
    code: 'MX',
    states: [
      { name: 'Mexico City', cities: ['Mexico City', 'Coyoacan', 'Polanco', 'Condesa'] },
      { name: 'Jalisco', cities: ['Guadalajara', 'Puerto Vallarta', 'Zapopan'] },
      { name: 'Nuevo Leon', cities: ['Monterrey', 'San Pedro Garza Garcia'] },
      { name: 'Quintana Roo', cities: ['Cancun', 'Playa del Carmen', 'Tulum', 'Cozumel'] },
      { name: 'Yucatan', cities: ['Merida', 'Chichen Itza', 'Valladolid'] },
      { name: 'Baja California Sur', cities: ['Los Cabos', 'La Paz'] },
      { name: 'Oaxaca', cities: ['Oaxaca', 'Puerto Escondido'] },
    ]
  },
  {
    name: 'South Africa',
    code: 'ZA',
    states: [
      { name: 'Gauteng', cities: ['Johannesburg', 'Pretoria', 'Soweto', 'Sandton'] },
      { name: 'Western Cape', cities: ['Cape Town', 'Stellenbosch', 'Franschhoek', 'Paarl'] },
      { name: 'KwaZulu-Natal', cities: ['Durban', 'Pietermaritzburg', 'Umhlanga'] },
      { name: 'Eastern Cape', cities: ['Port Elizabeth', 'East London'] },
      { name: 'Free State', cities: ['Bloemfontein'] },
    ]
  },
  {
    name: 'Egypt',
    code: 'EG',
    states: [
      { name: 'Cairo', cities: ['Cairo', 'Giza', 'Heliopolis', 'Nasr City'] },
      { name: 'Alexandria', cities: ['Alexandria'] },
      { name: 'Luxor', cities: ['Luxor', 'Karnak'] },
      { name: 'Aswan', cities: ['Aswan'] },
      { name: 'Red Sea', cities: ['Hurghada', 'Sharm El Sheikh', 'Marsa Alam'] },
    ]
  },
  {
    name: 'Turkey',
    code: 'TR',
    states: [
      { name: 'Istanbul', cities: ['Istanbul', 'Kadikoy', 'Besiktas', 'Beyoglu', 'Uskudar'] },
      { name: 'Ankara', cities: ['Ankara'] },
      { name: 'Izmir', cities: ['Izmir', 'Cesme', 'Kusadasi'] },
      { name: 'Antalya', cities: ['Antalya', 'Alanya', 'Kemer', 'Side'] },
      { name: 'Mugla', cities: ['Bodrum', 'Marmaris', 'Fethiye', 'Oludeniz'] },
      { name: 'Cappadocia', cities: ['Goreme', 'Urgup', 'Uchisar'] },
    ]
  },
  {
    name: 'Italy',
    code: 'IT',
    states: [
      { name: 'Lazio', cities: ['Rome', 'Vatican City'] },
      { name: 'Lombardy', cities: ['Milan', 'Bergamo', 'Como', 'Brescia'] },
      { name: 'Tuscany', cities: ['Florence', 'Pisa', 'Siena', 'Lucca'] },
      { name: 'Veneto', cities: ['Venice', 'Verona', 'Padua', 'Vicenza'] },
      { name: 'Campania', cities: ['Naples', 'Amalfi', 'Positano', 'Sorrento', 'Pompeii'] },
      { name: 'Sicily', cities: ['Palermo', 'Catania', 'Taormina', 'Syracuse'] },
      { name: 'Piedmont', cities: ['Turin', 'Alba'] },
    ]
  },
  {
    name: 'Spain',
    code: 'ES',
    states: [
      { name: 'Madrid', cities: ['Madrid'] },
      { name: 'Catalonia', cities: ['Barcelona', 'Girona', 'Tarragona'] },
      { name: 'Andalusia', cities: ['Seville', 'Malaga', 'Granada', 'Cordoba', 'Marbella'] },
      { name: 'Valencia', cities: ['Valencia', 'Alicante', 'Benidorm'] },
      { name: 'Basque Country', cities: ['Bilbao', 'San Sebastian', 'Vitoria'] },
      { name: 'Balearic Islands', cities: ['Palma de Mallorca', 'Ibiza'] },
      { name: 'Canary Islands', cities: ['Las Palmas', 'Tenerife', 'Lanzarote'] },
    ]
  },
  {
    name: 'Netherlands',
    code: 'NL',
    states: [
      { name: 'North Holland', cities: ['Amsterdam', 'Haarlem', 'Zaandam'] },
      { name: 'South Holland', cities: ['Rotterdam', 'The Hague', 'Delft', 'Leiden'] },
      { name: 'Utrecht', cities: ['Utrecht', 'Amersfoort'] },
      { name: 'North Brabant', cities: ['Eindhoven', 'Tilburg', 'Breda'] },
      { name: 'Gelderland', cities: ['Nijmegen', 'Arnhem', 'Apeldoorn'] },
    ]
  },
  {
    name: 'Switzerland',
    code: 'CH',
    states: [
      { name: 'Zurich', cities: ['Zurich', 'Winterthur'] },
      { name: 'Geneva', cities: ['Geneva'] },
      { name: 'Bern', cities: ['Bern', 'Interlaken', 'Grindelwald'] },
      { name: 'Lucerne', cities: ['Lucerne'] },
      { name: 'Vaud', cities: ['Lausanne', 'Montreux'] },
      { name: 'Valais', cities: ['Zermatt', 'Verbier', 'Sion'] },
      { name: 'Basel', cities: ['Basel'] },
    ]
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    states: [
      { name: 'Auckland', cities: ['Auckland'] },
      { name: 'Wellington', cities: ['Wellington'] },
      { name: 'Canterbury', cities: ['Christchurch'] },
      { name: 'Otago', cities: ['Dunedin', 'Queenstown', 'Wanaka'] },
      { name: 'Bay of Plenty', cities: ['Tauranga', 'Rotorua'] },
      { name: 'Waikato', cities: ['Hamilton'] },
      { name: 'Fiordland', cities: ['Te Anau', 'Milford Sound'] },
    ]
  },
  {
    name: 'Ireland',
    code: 'IE',
    states: [
      { name: 'Dublin', cities: ['Dublin'] },
      { name: 'Cork', cities: ['Cork', 'Cobh'] },
      { name: 'Galway', cities: ['Galway', 'Clifden'] },
      { name: 'Kerry', cities: ['Killarney', 'Tralee', 'Dingle'] },
      { name: 'Limerick', cities: ['Limerick'] },
    ]
  },
  {
    name: 'Portugal',
    code: 'PT',
    states: [
      { name: 'Lisbon', cities: ['Lisbon', 'Sintra', 'Cascais', 'Estoril'] },
      { name: 'Porto', cities: ['Porto', 'Vila Nova de Gaia', 'Matosinhos'] },
      { name: 'Algarve', cities: ['Faro', 'Lagos', 'Albufeira', 'Portimao'] },
      { name: 'Madeira', cities: ['Funchal'] },
      { name: 'Azores', cities: ['Ponta Delgada'] },
    ]
  },
  {
    name: 'Greece',
    code: 'GR',
    states: [
      { name: 'Attica', cities: ['Athens', 'Piraeus'] },
      { name: 'Central Macedonia', cities: ['Thessaloniki'] },
      { name: 'South Aegean', cities: ['Santorini', 'Mykonos', 'Rhodes', 'Kos'] },
      { name: 'Crete', cities: ['Heraklion', 'Chania', 'Rethymno'] },
      { name: 'Ionian Islands', cities: ['Corfu', 'Zakynthos', 'Kefalonia'] },
    ]
  },
  {
    name: 'Poland',
    code: 'PL',
    states: [
      { name: 'Masovian', cities: ['Warsaw'] },
      { name: 'Lesser Poland', cities: ['Krakow', 'Zakopane'] },
      { name: 'Pomeranian', cities: ['Gdansk', 'Sopot', 'Gdynia'] },
      { name: 'Silesian', cities: ['Katowice'] },
      { name: 'Greater Poland', cities: ['Poznan'] },
      { name: 'Lower Silesian', cities: ['Wroclaw'] },
    ]
  },
  {
    name: 'Sweden',
    code: 'SE',
    states: [
      { name: 'Stockholm', cities: ['Stockholm', 'Solna', 'Uppsala'] },
      { name: 'Vastra Gotaland', cities: ['Gothenburg'] },
      { name: 'Skane', cities: ['Malmo', 'Lund', 'Helsingborg'] },
      { name: 'Norrbotten', cities: ['Lulea', 'Kiruna'] },
    ]
  },
  {
    name: 'Norway',
    code: 'NO',
    states: [
      { name: 'Oslo', cities: ['Oslo'] },
      { name: 'Vestland', cities: ['Bergen'] },
      { name: 'Trøndelag', cities: ['Trondheim'] },
      { name: 'Rogaland', cities: ['Stavanger'] },
      { name: 'Nordland', cities: ['Bodø', 'Lofoten'] },
      { name: 'Troms og Finnmark', cities: ['Tromsø'] },
    ]
  },
  {
    name: 'Denmark',
    code: 'DK',
    states: [
      { name: 'Capital Region', cities: ['Copenhagen'] },
      { name: 'Central Denmark', cities: ['Aarhus'] },
      { name: 'North Denmark', cities: ['Aalborg'] },
      { name: 'Zealand', cities: ['Roskilde', 'Elsinore'] },
    ]
  },
  {
    name: 'Finland',
    code: 'FI',
    states: [
      { name: 'Uusimaa', cities: ['Helsinki', 'Espoo', 'Vantaa'] },
      { name: 'Pirkanmaa', cities: ['Tampere'] },
      { name: 'Southwest Finland', cities: ['Turku'] },
      { name: 'Lapland', cities: ['Rovaniemi', 'Saariselkä'] },
    ]
  },
  {
    name: 'Austria',
    code: 'AT',
    states: [
      { name: 'Vienna', cities: ['Vienna'] },
      { name: 'Salzburg', cities: ['Salzburg', 'Hallstatt'] },
      { name: 'Tyrol', cities: ['Innsbruck', 'Kitzbühel'] },
      { name: 'Styria', cities: ['Graz'] },
      { name: 'Upper Austria', cities: ['Linz'] },
    ]
  },
  {
    name: 'Belgium',
    code: 'BE',
    states: [
      { name: 'Brussels', cities: ['Brussels'] },
      { name: 'Flemish Region', cities: ['Antwerp', 'Bruges', 'Ghent', 'Leuven'] },
      { name: 'Wallonia', cities: ['Liège', 'Namur', 'Charleroi'] },
    ]
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
    states: [
      { name: 'Prague', cities: ['Prague'] },
      { name: 'South Moravian', cities: ['Brno'] },
      { name: 'Moravian-Silesian', cities: ['Ostrava'] },
      { name: 'Karlovy Vary', cities: ['Karlovy Vary'] },
      { name: 'Hradec Králové', cities: ['Hradec Králové'] },
    ]
  },
  {
    name: 'Hungary',
    code: 'HU',
    states: [
      { name: 'Budapest', cities: ['Budapest'] },
      { name: 'Hajdú-Bihar', cities: ['Debrecen'] },
      { name: 'Csongrád-Csanád', cities: ['Szeged'] },
      { name: 'Győr-Moson-Sopron', cities: ['Győr'] },
    ]
  },
  {
    name: 'Argentina',
    code: 'AR',
    states: [
      { name: 'Buenos Aires', cities: ['Buenos Aires', 'La Plata', 'Mar del Plata'] },
      { name: 'Córdoba', cities: ['Córdoba'] },
      { name: 'Mendoza', cities: ['Mendoza'] },
      { name: 'Río Negro', cities: ['Bariloche'] },
      { name: 'Tierra del Fuego', cities: ['Ushuaia'] },
    ]
  },
  {
    name: 'Chile',
    code: 'CL',
    states: [
      { name: 'Santiago Metropolitan', cities: ['Santiago'] },
      { name: 'Valparaíso', cities: ['Valparaíso', 'Viña del Mar'] },
      { name: 'Antofagasta', cities: ['San Pedro de Atacama', 'Antofagasta'] },
      { name: 'Los Lagos', cities: ['Puerto Varas', 'Puerto Montt'] },
      { name: 'Magallanes', cities: ['Punta Arenas'] },
    ]
  },
  {
    name: 'Colombia',
    code: 'CO',
    states: [
      { name: 'Bogotá D.C.', cities: ['Bogotá'] },
      { name: 'Antioquia', cities: ['Medellín'] },
      { name: 'Valle del Cauca', cities: ['Cali'] },
      { name: 'Bolívar', cities: ['Cartagena'] },
      { name: 'Atlántico', cities: ['Barranquilla'] },
    ]
  },
  {
    name: 'Peru',
    code: 'PE',
    states: [
      { name: 'Lima', cities: ['Lima', 'Miraflores', 'San Isidro'] },
      { name: 'Cusco', cities: ['Cusco', 'Machu Picchu'] },
      { name: 'Arequipa', cities: ['Arequipa'] },
      { name: 'Puno', cities: ['Puno'] },
    ]
  },
  {
    name: 'Kenya',
    code: 'KE',
    states: [
      { name: 'Nairobi', cities: ['Nairobi'] },
      { name: 'Mombasa', cities: ['Mombasa', 'Diani Beach'] },
      { name: 'Nakuru', cities: ['Nakuru', 'Naivasha'] },
      { name: 'Kisumu', cities: ['Kisumu'] },
    ]
  },
  {
    name: 'Nigeria',
    code: 'NG',
    states: [
      { name: 'Lagos', cities: ['Lagos', 'Ikeja', 'Victoria Island'] },
      { name: 'Federal Capital Territory', cities: ['Abuja'] },
      { name: 'Kano', cities: ['Kano'] },
      { name: 'Rivers', cities: ['Port Harcourt'] },
    ]
  },
  {
    name: 'Morocco',
    code: 'MA',
    states: [
      { name: 'Casablanca-Settat', cities: ['Casablanca'] },
      { name: 'Marrakech-Safi', cities: ['Marrakech', 'Essaouira'] },
      { name: 'Fès-Meknès', cities: ['Fes', 'Meknes'] },
      { name: 'Rabat-Salé-Kénitra', cities: ['Rabat'] },
      { name: 'Tanger-Tétouan-Al Hoceïma', cities: ['Tangier', 'Chefchaouen'] },
    ]
  },
  {
    name: 'Qatar',
    code: 'QA',
    states: [
      { name: 'Ad Dawhah', cities: ['Doha', 'The Pearl', 'Lusail'] },
      { name: 'Al Rayyan', cities: ['Al Rayyan'] },
    ]
  },
  {
    name: 'Kuwait',
    code: 'KW',
    states: [
      { name: 'Capital', cities: ['Kuwait City'] },
      { name: 'Hawalli', cities: ['Hawalli', 'Salmiya'] },
    ]
  },
  {
    name: 'Bahrain',
    code: 'BH',
    states: [
      { name: 'Capital', cities: ['Manama', 'Muharraq'] },
    ]
  },
  {
    name: 'Oman',
    code: 'OM',
    states: [
      { name: 'Muscat', cities: ['Muscat', 'Muttrah'] },
      { name: 'Dhofar', cities: ['Salalah'] },
    ]
  },
  {
    name: 'Israel',
    code: 'IL',
    states: [
      { name: 'Tel Aviv', cities: ['Tel Aviv', 'Jaffa'] },
      { name: 'Jerusalem', cities: ['Jerusalem'] },
      { name: 'Haifa', cities: ['Haifa'] },
      { name: 'Southern', cities: ['Eilat', 'Beersheba'] },
    ]
  },
];

// City coordinates lookup
export const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  // India - Major cities
  'Visakhapatnam': { lat: 17.6868, lng: 83.2185 },
  'Vijayawada': { lat: 16.5062, lng: 80.648 },
  'Tirupati': { lat: 13.6288, lng: 79.4192 },
  'Itanagar': { lat: 27.0844, lng: 93.6053 },
  'Guwahati': { lat: 26.1445, lng: 91.7362 },
  'Patna': { lat: 25.5941, lng: 85.1376 },
  'Raipur': { lat: 21.2514, lng: 81.6296 },
  'Panaji': { lat: 15.4909, lng: 73.8278 },
  'Ahmedabad': { lat: 23.0225, lng: 72.5714 },
  'Surat': { lat: 21.1702, lng: 72.8311 },
  'Faridabad': { lat: 28.4089, lng: 77.3178 },
  'Gurgaon': { lat: 28.4595, lng: 77.0266 },
  'Shimla': { lat: 31.1048, lng: 77.1734 },
  'Ranchi': { lat: 23.3441, lng: 85.3096 },
  'Jamshedpur': { lat: 22.8046, lng: 86.2029 },
  'Bangalore': { lat: 12.9716, lng: 77.5946 },
  'Mysore': { lat: 12.2958, lng: 76.6394 },
  'Thiruvananthapuram': { lat: 8.5241, lng: 76.9366 },
  'Kochi': { lat: 9.9312, lng: 76.2673 },
  'Bhopal': { lat: 23.2599, lng: 77.4126 },
  'Indore': { lat: 22.7196, lng: 75.8577 },
  'Mumbai': { lat: 19.076, lng: 72.8777 },
  'Pune': { lat: 18.5204, lng: 73.8567 },
  'Nagpur': { lat: 21.1458, lng: 79.0882 },
  'Imphal': { lat: 24.8170, lng: 93.9368 },
  'Shillong': { lat: 25.5788, lng: 91.8933 },
  'Aizawl': { lat: 23.7271, lng: 92.7176 },
  'Kohima': { lat: 25.6747, lng: 94.1100 },
  'Bhubaneswar': { lat: 20.2961, lng: 85.8245 },
  'Ludhiana': { lat: 30.901, lng: 75.8573 },
  'Amritsar': { lat: 31.634, lng: 74.8723 },
  'Jaipur': { lat: 26.9124, lng: 75.7873 },
  'Jodhpur': { lat: 26.2389, lng: 73.0243 },
  'Udaipur': { lat: 24.5854, lng: 73.7125 },
  'Gangtok': { lat: 27.3389, lng: 88.6065 },
  'Chennai': { lat: 13.0827, lng: 80.2707 },
  'Coimbatore': { lat: 11.0168, lng: 76.9558 },
  'Hyderabad': { lat: 17.385, lng: 78.4867 },
  'Agartala': { lat: 23.8315, lng: 91.2868 },
  'Lucknow': { lat: 26.8467, lng: 80.9462 },
  'Kanpur': { lat: 26.4499, lng: 80.3319 },
  'Varanasi': { lat: 25.3176, lng: 82.9739 },
  'Agra': { lat: 27.1767, lng: 78.0081 },
  'Dehradun': { lat: 30.3165, lng: 78.0322 },
  'Haridwar': { lat: 29.9457, lng: 78.1642 },
  'Kolkata': { lat: 22.5726, lng: 88.3639 },
  'Darjeeling': { lat: 27.0410, lng: 88.2663 },
  'New Delhi': { lat: 28.6139, lng: 77.209 },
  'Srinagar': { lat: 34.0837, lng: 74.7973 },
  'Jammu': { lat: 32.7266, lng: 74.857 },
  'Leh': { lat: 34.1526, lng: 77.5771 },
  'Chandigarh': { lat: 30.7333, lng: 76.7794 },
  'Pondicherry': { lat: 11.9416, lng: 79.8083 },
  'Port Blair': { lat: 11.6234, lng: 92.7265 },
  
  // USA
  'Los Angeles': { lat: 34.0522, lng: -118.2437 },
  'New York City': { lat: 40.7128, lng: -74.0060 },
  'Chicago': { lat: 41.8781, lng: -87.6298 },
  'Houston': { lat: 29.7604, lng: -95.3698 },
  'San Francisco': { lat: 37.7749, lng: -122.4194 },
  'Seattle': { lat: 47.6062, lng: -122.3321 },
  'Miami': { lat: 25.7617, lng: -80.1918 },
  'Boston': { lat: 42.3601, lng: -71.0589 },
  'Dallas': { lat: 32.7767, lng: -96.7970 },
  'Atlanta': { lat: 33.7490, lng: -84.3880 },
  'Denver': { lat: 39.7392, lng: -104.9903 },
  'Las Vegas': { lat: 36.1699, lng: -115.1398 },
  'Washington D.C.': { lat: 38.9072, lng: -77.0369 },
  
  // UK
  'London': { lat: 51.5074, lng: -0.1278 },
  'Manchester': { lat: 53.4808, lng: -2.2426 },
  'Birmingham': { lat: 52.4862, lng: -1.8904 },
  'Edinburgh': { lat: 55.9533, lng: -3.1883 },
  'Glasgow': { lat: 55.8642, lng: -4.2518 },
  'Liverpool': { lat: 53.4084, lng: -2.9916 },
  'Leeds': { lat: 53.8008, lng: -1.5491 },
  'Bristol': { lat: 51.4545, lng: -2.5879 },
  
  // Canada
  'Toronto': { lat: 43.6532, lng: -79.3832 },
  'Vancouver': { lat: 49.2827, lng: -123.1207 },
  'Montreal': { lat: 45.5017, lng: -73.5673 },
  'Calgary': { lat: 51.0447, lng: -114.0719 },
  'Ottawa': { lat: 45.4215, lng: -75.6972 },
  'Edmonton': { lat: 53.5461, lng: -113.4938 },
  
  // Australia
  'Sydney': { lat: -33.8688, lng: 151.2093 },
  'Melbourne': { lat: -37.8136, lng: 144.9631 },
  'Brisbane': { lat: -27.4698, lng: 153.0251 },
  'Perth': { lat: -31.9505, lng: 115.8605 },
  'Adelaide': { lat: -34.9285, lng: 138.6007 },
  'Canberra': { lat: -35.2809, lng: 149.1300 },
  
  // Germany
  'Berlin': { lat: 52.5200, lng: 13.4050 },
  'Munich': { lat: 48.1351, lng: 11.5820 },
  'Frankfurt': { lat: 50.1109, lng: 8.6821 },
  'Hamburg': { lat: 53.5511, lng: 9.9937 },
  'Cologne': { lat: 50.9375, lng: 6.9603 },
  
  // France
  'Paris': { lat: 48.8566, lng: 2.3522 },
  'Lyon': { lat: 45.7640, lng: 4.8357 },
  'Marseille': { lat: 43.2965, lng: 5.3698 },
  'Nice': { lat: 43.7102, lng: 7.2620 },
  'Toulouse': { lat: 43.6047, lng: 1.4442 },
  
  // Japan
  'Tokyo': { lat: 35.6762, lng: 139.6503 },
  'Osaka': { lat: 34.6937, lng: 135.5023 },
  'Kyoto': { lat: 35.0116, lng: 135.7681 },
  'Yokohama': { lat: 35.4437, lng: 139.6380 },
  'Nagoya': { lat: 35.1815, lng: 136.9066 },
  
  // China
  'Beijing': { lat: 39.9042, lng: 116.4074 },
  'Shanghai': { lat: 31.2304, lng: 121.4737 },
  'Guangzhou': { lat: 23.1291, lng: 113.2644 },
  'Shenzhen': { lat: 22.5431, lng: 114.0579 },
  'Hong Kong': { lat: 22.3193, lng: 114.1694 },
  
  // UAE
  'Dubai': { lat: 25.2048, lng: 55.2708 },
  'Abu Dhabi': { lat: 24.4539, lng: 54.3773 },
  'Sharjah': { lat: 25.3463, lng: 55.4209 },
  
  // Saudi Arabia
  'Riyadh': { lat: 24.7136, lng: 46.6753 },
  'Jeddah': { lat: 21.4858, lng: 39.1925 },
  'Mecca': { lat: 21.3891, lng: 39.8579 },
  'Medina': { lat: 24.5247, lng: 39.5692 },
  
  // Singapore
  'Singapore': { lat: 1.3521, lng: 103.8198 },
  
  // South Korea
  'Seoul': { lat: 37.5665, lng: 126.9780 },
  'Busan': { lat: 35.1796, lng: 129.0756 },
  'Incheon': { lat: 37.4563, lng: 126.7052 },
  
  // Thailand
  'Bangkok': { lat: 13.7563, lng: 100.5018 },
  'Chiang Mai': { lat: 18.7061, lng: 98.9817 },
  'Phuket': { lat: 7.8804, lng: 98.3923 },
  'Pattaya': { lat: 12.9236, lng: 100.8825 },
  
  // Malaysia
  'Kuala Lumpur': { lat: 3.1390, lng: 101.6869 },
  'Penang': { lat: 5.4141, lng: 100.3288 },
  'Johor Bahru': { lat: 1.4927, lng: 103.7414 },
  
  // Indonesia
  'Jakarta': { lat: -6.2088, lng: 106.8456 },
  'Bali': { lat: -8.3405, lng: 115.0920 },
  'Denpasar': { lat: -8.6705, lng: 115.2126 },
  'Surabaya': { lat: -7.2575, lng: 112.7521 },
  
  // Philippines
  'Manila': { lat: 14.5995, lng: 120.9842 },
  'Cebu City': { lat: 10.3157, lng: 123.8854 },
  'Davao City': { lat: 7.1907, lng: 125.4553 },
  
  // Vietnam
  'Ho Chi Minh City': { lat: 10.8231, lng: 106.6297 },
  'Hanoi': { lat: 21.0278, lng: 105.8342 },
  'Da Nang': { lat: 16.0544, lng: 108.2022 },
  
  // Pakistan
  'Karachi': { lat: 24.8607, lng: 67.0011 },
  'Lahore': { lat: 31.5204, lng: 74.3587 },
  'Islamabad': { lat: 33.6844, lng: 73.0479 },
  'Rawalpindi': { lat: 33.5651, lng: 73.0169 },
  
  // Bangladesh
  'Dhaka': { lat: 23.8103, lng: 90.4125 },
  'Chittagong': { lat: 22.3569, lng: 91.7832 },
  
  // Sri Lanka
  'Colombo': { lat: 6.9271, lng: 79.8612 },
  'Kandy': { lat: 7.2906, lng: 80.6337 },
  'Galle': { lat: 6.0535, lng: 80.2210 },
  
  // Nepal
  'Kathmandu': { lat: 27.7172, lng: 85.3240 },
  'Pokhara': { lat: 28.2096, lng: 83.9856 },
  
  // Russia
  'Moscow': { lat: 55.7558, lng: 37.6173 },
  'Saint Petersburg': { lat: 59.9343, lng: 30.3351 },
  
  // Brazil
  'Sao Paulo': { lat: -23.5505, lng: -46.6333 },
  'Rio de Janeiro': { lat: -22.9068, lng: -43.1729 },
  'Brasilia': { lat: -15.8267, lng: -47.9218 },
  
  // Mexico
  'Mexico City': { lat: 19.4326, lng: -99.1332 },
  'Cancun': { lat: 21.1619, lng: -86.8515 },
  'Guadalajara': { lat: 20.6597, lng: -103.3496 },
  
  // South Africa
  'Johannesburg': { lat: -26.2041, lng: 28.0473 },
  'Cape Town': { lat: -33.9249, lng: 18.4241 },
  'Durban': { lat: -29.8587, lng: 31.0218 },
  
  // Egypt
  'Cairo': { lat: 30.0444, lng: 31.2357 },
  'Alexandria': { lat: 31.2001, lng: 29.9187 },
  'Luxor': { lat: 25.6872, lng: 32.6396 },
  
  // Turkey
  'Istanbul': { lat: 41.0082, lng: 28.9784 },
  'Ankara': { lat: 39.9334, lng: 32.8597 },
  'Izmir': { lat: 38.4237, lng: 27.1428 },
  'Antalya': { lat: 36.8969, lng: 30.7133 },
  
  // Italy
  'Rome': { lat: 41.9028, lng: 12.4964 },
  'Milan': { lat: 45.4642, lng: 9.1900 },
  'Florence': { lat: 43.7696, lng: 11.2558 },
  'Venice': { lat: 45.4408, lng: 12.3155 },
  'Naples': { lat: 40.8518, lng: 14.2681 },
  
  // Spain
  'Madrid': { lat: 40.4168, lng: -3.7038 },
  'Barcelona': { lat: 41.3851, lng: 2.1734 },
  'Valencia': { lat: 39.4699, lng: -0.3763 },
  'Seville': { lat: 37.3891, lng: -5.9845 },
  
  // Netherlands
  'Amsterdam': { lat: 52.3676, lng: 4.9041 },
  'Rotterdam': { lat: 51.9244, lng: 4.4777 },
  'The Hague': { lat: 52.0705, lng: 4.3007 },
  
  // Switzerland
  'Zurich': { lat: 47.3769, lng: 8.5417 },
  'Geneva': { lat: 46.2044, lng: 6.1432 },
  'Bern': { lat: 46.9480, lng: 7.4474 },
  
  // New Zealand
  'Auckland': { lat: -36.8485, lng: 174.7633 },
  'Wellington': { lat: -41.2865, lng: 174.7762 },
  'Christchurch': { lat: -43.5321, lng: 172.6362 },
  'Queenstown': { lat: -45.0312, lng: 168.6626 },
  
  // Ireland
  'Dublin': { lat: 53.3498, lng: -6.2603 },
  'Cork': { lat: 51.8985, lng: -8.4756 },
  'Galway': { lat: 53.2707, lng: -9.0568 },
  
  // Portugal
  'Lisbon': { lat: 38.7223, lng: -9.1393 },
  'Porto': { lat: 41.1579, lng: -8.6291 },
  'Faro': { lat: 37.0194, lng: -7.9322 },
  
  // Greece
  'Athens': { lat: 37.9838, lng: 23.7275 },
  'Thessaloniki': { lat: 40.6401, lng: 22.9444 },
  'Santorini': { lat: 36.3932, lng: 25.4615 },
  'Mykonos': { lat: 37.4467, lng: 25.3289 },
  
  // Poland
  'Warsaw': { lat: 52.2297, lng: 21.0122 },
  'Krakow': { lat: 50.0647, lng: 19.9450 },
  'Gdansk': { lat: 54.3520, lng: 18.6466 },
  
  // Sweden
  'Stockholm': { lat: 59.3293, lng: 18.0686 },
  'Gothenburg': { lat: 57.7089, lng: 11.9746 },
  
  // Norway
  'Oslo': { lat: 59.9139, lng: 10.7522 },
  'Bergen': { lat: 60.3913, lng: 5.3221 },
  
  // Denmark
  'Copenhagen': { lat: 55.6761, lng: 12.5683 },
  
  // Finland
  'Helsinki': { lat: 60.1699, lng: 24.9384 },
  
  // Austria
  'Vienna': { lat: 48.2082, lng: 16.3738 },
  'Salzburg': { lat: 47.8095, lng: 13.0550 },
  'Innsbruck': { lat: 47.2692, lng: 11.4041 },
  
  // Belgium
  'Brussels': { lat: 50.8503, lng: 4.3517 },
  'Antwerp': { lat: 51.2194, lng: 4.4025 },
  'Bruges': { lat: 51.2093, lng: 3.2247 },
  
  // Czech Republic
  'Prague': { lat: 50.0755, lng: 14.4378 },
  
  // Hungary
  'Budapest': { lat: 47.4979, lng: 19.0402 },
  
  // Argentina
  'Buenos Aires': { lat: -34.6037, lng: -58.3816 },
  
  // Chile
  'Santiago': { lat: -33.4489, lng: -70.6693 },
  
  // Colombia
  'Bogota': { lat: 4.7110, lng: -74.0721 },
  'Medellin': { lat: 6.2442, lng: -75.5812 },
  
  // Peru
  'Lima': { lat: -12.0464, lng: -77.0428 },
  'Cusco': { lat: -13.5320, lng: -71.9675 },
  
  // Kenya
  'Nairobi': { lat: -1.2921, lng: 36.8219 },
  'Mombasa': { lat: -4.0435, lng: 39.6682 },
  
  // Nigeria
  'Lagos': { lat: 6.5244, lng: 3.3792 },
  'Abuja': { lat: 9.0765, lng: 7.3986 },
  
  // Morocco
  'Casablanca': { lat: 33.5731, lng: -7.5898 },
  'Marrakech': { lat: 31.6295, lng: -7.9811 },
  'Fes': { lat: 34.0181, lng: -5.0078 },
  
  // Qatar
  'Doha': { lat: 25.2854, lng: 51.5310 },
  
  // Kuwait
  'Kuwait City': { lat: 29.3759, lng: 47.9774 },
  
  // Bahrain
  'Manama': { lat: 26.2285, lng: 50.5860 },
  
  // Oman
  'Muscat': { lat: 23.5880, lng: 58.3829 },
  
  // Israel
  'Tel Aviv': { lat: 32.0853, lng: 34.7818 },
  'Jerusalem': { lat: 31.7683, lng: 35.2137 },
};

// Get all countries
export const getAllCountries = (): string[] => {
  return WORLD_COUNTRIES.map(c => c.name).sort();
};

// Get states for a country
export const getStatesForCountry = (countryName: string): string[] => {
  const country = WORLD_COUNTRIES.find(c => c.name === countryName);
  return country ? country.states.map(s => s.name).sort() : [];
};

// Get cities for a state
export const getCitiesForState = (countryName: string, stateName: string): string[] => {
  const country = WORLD_COUNTRIES.find(c => c.name === countryName);
  if (!country) return [];
  const state = country.states.find(s => s.name === stateName);
  return state ? state.cities.sort() : [];
};

// Get coordinates for a city
export const getCityCoordinates = (cityName: string): { lat: number; lng: number } | null => {
  return CITY_COORDINATES[cityName] || null;
};
