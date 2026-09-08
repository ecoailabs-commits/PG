import { 
  Project, 
  BusinessVertical, 
  InfrastructureAchievement, 
  OfficeLocation,
  NewsItem
} from '../types';
import heroBg from '../assets/images/infrastructure_hero_1788779159431.jpg';
import highwayImg from '../assets/images/highway_engineering_1788779184588.jpg';
import luxuryResidencesImg from '../assets/images/luxury_residences_1788781856623.jpg';
import grandMallImg from '../assets/images/grand_mall_1788781874186.jpg';
import highwaySignageImg from '../assets/images/highway_signage_1788781889884.jpg';
import telecomTowerImg from '../assets/images/telecom_tower_1788781908948.jpg';
import townshipVillasImg from '../assets/images/township_villas_1788781928318.jpg';
import residentialTowersImg from '../assets/images/residential_towers_1788854997492.jpg';
import commercialPlazaImg from '../assets/images/commercial_plaza_1788855033052.jpg';
import itTechParkImg from '../assets/images/it_tech_park_1788855056863.jpg';
import greenMountainRoadImg from '../assets/images/green_mountain_road_1788855072786.jpg';
import prabhatamHeightsImg from '../assets/images/prabhatam_heights_bhopal_1788864800469.jpg';

export const COMPANY_BRAND = {
  name: 'Prabhatam Infra Ventures Pvt. Ltd.',
  shortName: 'Prabhatam Infra',
  parentGroup: 'Prabhatam Group',
  tagline: 'Building Infrastructure. Creating Possibilities.',
  supportingLine: 'Engineering infrastructure, developing spaces and creating long-term value.',
  officialWebsite: 'https://prabhatamgroup.com/',
  realEstateUrl: 'https://prabhatamgroup.com/real-estate/',
  infrastructureUrl: 'https://prabhatamgroup.com/infrastructure/',
  experienceYears: '20+',
  experienceText: 'More than 20 Years of Experience',
  groupLegacyYears: '20+',
  corporatePhone: '011-43603300',
  corporateEmail: 'info@prabhatamgroup.com',
  careersEmail: 'hr@prabhatamgroup.com',
  headquarters: {
    address: 'Ghalib Institute, Plot No. 1, Mata Sundari Lane, Rouse Avenue, New Delhi – 110002',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110002'
  }
};

export const BUSINESS_VERTICALS: BusinessVertical[] = [
  {
    id: 'infrastructure',
    number: '01',
    title: 'Infrastructure',
    tagline: 'Engineering the Nation’s Core Mobility & Engineering Corridors',
    description: 'Prabhatam Infrastructure is involved in national and global infrastructure projects, collaborating with international infrastructure organisations and executing projects with experienced engineering and technical teams.',
    capabilities: [
      'Infrastructure Development',
      'EPC & BOT Project Execution',
      'Roads and Highways',
      'Highway & Road Signage Networks',
      'Telecom Infrastructure',
      'Mobile Telecom Towers',
      'Technical Engineering Support',
      'Green High-Altitude Construction'
    ],
    image: heroBg,
    accent: 'amber'
  },
  {
    id: 'real-estate',
    number: '02',
    title: 'Real Estate',
    tagline: 'Spaces Designed for Living, Business & Growth',
    description: 'Developing integrated master-planned townships, landmark retail malls, luxury residential condominiums, boutique hospitality, and commercial plazas across India.',
    capabilities: [
      'Integrated Townships',
      'Residential Condominiums & Villas',
      'Destination Shopping Malls',
      'Multiplexes & Retail Centres',
      'Corporate Plazas & Office Parks',
      'Boutique Hotels & Luxury Resorts',
      'Vastu-Compliant Master Planning',
      'Modern Amenities & Gated Security'
    ],
    image: townshipVillasImg,
    accent: 'emerald'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'victoria-55',
    name: 'Victoria 55',
    slug: 'victoria-55-delhi',
    category: 'Residential',
    location: 'Punjabi Bagh, New Delhi',
    state: 'Delhi',
    status: 'Completed',
    description: 'Luxury apartments in Punjabi Bagh featuring contemporary design and comprehensive amenities, positioned close to popular attractions and urban conveniences.',
    detailedOverview: 'Victoria 55 represents an architectural statement of residential refinement in the prime heart of Punjabi Bagh, West Delhi. Crafted for discerning urban families, the development integrates expansive floor plans with state-of-the-art residential specifications, multi-tier security, and strategic accessibility to the capital city’s central commercial zones.',
    features: [
      'Prime West Delhi Residential Corridor',
      'Contemporary Architectural Design',
      'High-Speed Elevators & Grand Entry Lobby',
      'Dedicated Reserved Stilt Parking',
      '24x7 Multi-Tier Surveillance & Security',
      'Proximity to Urban Metro & Lifestyle Conveniences'
    ],
    heroImage: luxuryResidencesImg,
    gallery: [
      luxuryResidencesImg,
      townshipVillasImg,
      residentialTowersImg
    ],
    facts: [
      { label: 'Location', value: 'Punjabi Bagh, Delhi' },
      { label: 'Typology', value: 'Bespoke Luxury Residences' },
      { label: 'Asset Class', value: 'Super-Premium Urban Housing' },
      { label: 'Connectivity', value: 'Ring Road & Metro Corridor' }
    ],
    sourceNote: 'Project details verified from Prabhatam Group source repository.',
    officialDivision: 'Real Estate',
    lat: 28.6692,
    lng: 77.1264
  },
  {
    id: 'prabhatam-grand-mall',
    name: 'Prabhatam Grand Mall',
    slug: 'prabhatam-grand-mall-dhanbad',
    category: 'Mixed Use',
    location: 'Chanchani Colony, Dhanbad',
    state: 'Jharkhand',
    landArea: '2.71 Acres',
    area: '3.86 Lakh sq. ft. Retail + 1 Lakh sq. ft. Hotel + 15,400+ sq. ft. Office',
    status: 'Operational',
    description: 'Landmark multi-facility destination mall in Dhanbad featuring a 3.86 lakh sq. ft. shopping area, 1 lakh sq. ft. boutique hotel, 15,400+ sq. ft. corporate office space, multiplex, and parking facilities.',
    detailedOverview: 'Prabhatam Grand Mall stands as the premier lifestyle, retail, and commercial epicentre of Dhanbad and Eastern Jharkhand. Spanning 2.71 acres of prime freehold land, the integrated development unites premier national and international retail brands with a multi-screen cinema multiplex, a 1 lakh sq. ft. premium boutique hotel, executive corporate offices, and multi-level parking.',
    features: [
      '3.86 Lakh sq. ft. Shopping & Retail Space',
      '1 Lakh sq. ft. Integrated Boutique Hotel',
      '15,400+ sq. ft. Dedicated Executive Office Space',
      'Multi-Screen Cinema Multiplex',
      'Expansive Food Court & Fine Dining Restaurants',
      'High-Capacity Dedicated Automobile Parking'
    ],
    heroImage: grandMallImg,
    gallery: [
      grandMallImg,
      commercialPlazaImg,
      itTechParkImg
    ],
    facts: [
      { label: 'Land Parcel', value: '2.71 Acres' },
      { label: 'Retail Area', value: '3.86 Lakh sq. ft.' },
      { label: 'Hotel Area', value: '1.00 Lakh sq. ft.' },
      { label: 'Office Area', value: '15,400+ sq. ft.' }
    ],
    sourceNote: 'Landmark mixed-use destination as published in Prabhatam Group records.',
    officialDivision: 'Real Estate',
    lat: 23.7957,
    lng: 86.4304
  },
  {
    id: 'prabhatam-plaza',
    name: 'Prabhatam Plaza',
    slug: 'prabhatam-plaza-bhopal',
    category: 'Commercial',
    location: 'Raisen Road, Bhopal',
    state: 'Madhya Pradesh',
    area: '30,000 sq. ft.',
    status: 'Operational',
    description: 'Modern shopping complex within the Prabhatam Heights residential complex, offering organized shopping, food court, and restaurant facilities.',
    detailedOverview: 'Conceived as the neighborhood commercial hub of Prabhatam Heights on Raisen Road in Bhopal, Prabhatam Plaza provides 30,000 square feet of curated retail shopping, convenience stores, a family food court, and fine-dining spaces serving both township residents and the thriving outer Bhopal urban catchment.',
    features: [
      '30,000 sq. ft. Modern Commercial Development',
      'Situated within Prabhatam Heights Complex',
      'Curated Retail Stores & Daily Essentials',
      'Integrated Multi-Cuisine Food Court & Restaurants',
      'Convenient Pedestrian Access & Ground-Level Parking'
    ],
    heroImage: commercialPlazaImg,
    gallery: [
      commercialPlazaImg,
      grandMallImg,
      residentialTowersImg
    ],
    facts: [
      { label: 'Commercial Area', value: '30,000 sq. ft.' },
      { label: 'Location', value: 'Raisen Road, Bhopal' },
      { label: 'Integration', value: 'Prabhatam Heights Enclave' },
      { label: 'Facilities', value: 'Shopping, Food Court & Dining' }
    ],
    sourceNote: 'Factual parameters verified from Prabhatam Group records.',
    officialDivision: 'Real Estate',
    lat: 23.2332,
    lng: 77.4645
  },
  {
    id: 'oyster-city',
    name: 'Oyster City',
    slug: 'oyster-city-indore',
    category: 'Township',
    location: 'Indore',
    state: 'Madhya Pradesh',
    landArea: '22.5 Acres',
    status: 'Residents Moved In',
    description: 'A development comprising villas and plots across 22.5 acres, designed around luxury and utility. The source confirms residents have already moved into the development.',
    detailedOverview: 'Oyster City is a premier residential enclave spread across 22.5 picturesque acres in Indore. Harmonizing expansive open greens with well-engineered underground utilities, landscaped avenues, gated security, and architecturally distinctive private villas and residential plots.',
    features: [
      '22.5-Acre Master-Planned Township',
      'Independent Private Luxury Villas & Plots',
      'Operational Township: Residents Already Moved In',
      'Broad Internal Roads with Avenue Plantation',
      'Gated Security & Modern Civic Utilities'
    ],
    heroImage: townshipVillasImg,
    gallery: [
      townshipVillasImg,
      luxuryResidencesImg,
      residentialTowersImg
    ],
    facts: [
      { label: 'Total Land Area', value: '22.5 Acres' },
      { label: 'Location', value: 'Indore, Madhya Pradesh' },
      { label: 'Development Typology', value: 'Villas & Residential Plots' },
      { label: 'Occupancy Status', value: 'Residents Moved In' }
    ],
    sourceNote: 'Verified source data from Prabhatam Group documentation.',
    officialDivision: 'Real Estate',
    lat: 22.7196,
    lng: 75.8577
  },
  {
    id: 'golden-utopia',
    name: 'Golden Utopia',
    slug: 'golden-utopia-amritsar',
    category: 'Township',
    location: 'Amritsar',
    state: 'Punjab',
    landArea: '125 Acres',
    status: 'Ongoing / Published',
    description: 'Mega group housing development spanning 125 acres in Amritsar, designed with Vastu principles and including 3,000+ villas, luxury apartments, advanced security systems, school, and commercial complex.',
    detailedOverview: 'Golden Utopia represents an expansive 125-acre integrated township in the historic city of Amritsar. Designed in harmony with classical Vastu principles, this visionary habitat balances high-density communal living with peaceful open vistas. The comprehensive master plan accommodates 3,000+ villas, residential condominiums, educational institutions, commercial centres, and recreational infrastructure.',
    features: [
      '125-Acre Integrated Township Master Plan',
      'Planned for 3,000+ Private Villas & Apartments',
      'Designed strictly in accordance with Vastu Principles',
      'Integrated Institutional School & Healthcare Zones',
      'Self-Contained Commercial & Retail Complexes',
      'Advanced Electronic Surveillance & Perimeter Protection'
    ],
    heroImage: townshipVillasImg,
    gallery: [
      townshipVillasImg,
      residentialTowersImg,
      commercialPlazaImg
    ],
    facts: [
      { label: 'Total Area', value: '125 Acres' },
      { label: 'Scale', value: '3,000+ Planned Villas & Condos' },
      { label: 'Philosophy', value: 'Vastu-Compliant Architecture' },
      { label: 'Social Amenities', value: 'Integrated School & Commercial Hub' }
    ],
    sourceNote: 'Official parameters derived from Prabhatam Group publication.',
    officialDivision: 'Real Estate',
    lat: 31.6340,
    lng: 74.8723
  },
  {
    id: 'prabhatam-castle',
    name: 'Prabhatam Castle',
    slug: 'prabhatam-castle-central-india',
    category: 'Residential',
    location: 'Indore / Bhopal Region',
    state: 'Madhya Pradesh',
    landArea: '34.35 Acres (as referenced in source)',
    status: 'Ongoing / Published',
    description: 'Farmland and second-home development concept featuring 50 luxurious villas. Source documents also reference 34.35 acres for the estate development.',
    detailedOverview: 'Prabhatam Castle is conceived as an exclusive retreat development offering luxury farmland estates and vacation villas. Tailored for second-home living away from city congestion, it blends scenic natural contours with private estate plots, private leisure amenities, and eco-friendly landscaping.',
    features: [
      'Farmland & Second-Home Estate Concept',
      'Collection of 50 Luxurious Vacation Villas',
      'Source References 34.35 Acres Development Canvas',
      'Panoramic Countryside Views & Serene Environment',
      'Dedicated Farm Management & Security Protocols'
    ],
    heroImage: luxuryResidencesImg,
    gallery: [
      luxuryResidencesImg,
      townshipVillasImg
    ],
    facts: [
      { label: 'Concept', value: 'Farmland / Second-Home Villas' },
      { label: 'Villa Count', value: '50 Luxurious Villas' },
      { label: 'Land Extent', value: '34.35 Acres (Source referenced)' },
      { label: 'Geography', value: 'Indore / Bhopal Region' }
    ],
    sourceNote: 'Project details as published by Prabhatam Group. Verified verbatim from official records.',
    officialDivision: 'Real Estate',
    lat: 22.9734,
    lng: 76.6565
  },
  {
    id: 'uttarakhand-signage',
    name: 'Uttarakhand Highway & Road Signage Project',
    slug: 'uttarakhand-highway-signage',
    category: 'Infrastructure',
    location: 'Statewide Mountain Highways, Uttarakhand',
    state: 'Uttarakhand',
    status: 'Completed',
    description: 'Successfully fabricated, installed, and commissioned 2,048 highway and road signages across the challenging mountain terrains of Uttarakhand.',
    detailedOverview: 'Executed by Prabhatam Infrastructure, this critical public safety and transit initiative encompassed the end-to-end installation of 2,048 specialized retro-reflective and overhead highway signages along major national and state highways traversing Uttarakhand. Built to withstand extreme Himalayan weather, landslides, and high winds.',
    features: [
      '2,048 High-Visibility Highway & Road Signages Installed',
      'Challenging High-Altitude Himalayan Terrain Execution',
      'International Road Safety & Retro-Reflective Standards',
      'Multi-District Logistics & Civil Foundation Anchoring',
      'Enhanced Transit Safety for Pilgrims & Commercial Traffic'
    ],
    heroImage: highwaySignageImg,
    gallery: [
      highwaySignageImg,
      greenMountainRoadImg,
      highwayImg
    ],
    facts: [
      { label: 'Scope', value: '2,048 Highway & Road Signages' },
      { label: 'State', value: 'Uttarakhand' },
      { label: 'Execution', value: 'Prabhatam Infrastructure' },
      { label: 'Terrain', value: 'Mountainous Himalayan Corridors' }
    ],
    sourceNote: 'Exact achievement verified from Prabhatam Group infrastructure records.',
    officialDivision: 'Infrastructure',
    lat: 30.3165,
    lng: 78.0322
  },
  {
    id: 'up-mdr-highway',
    name: 'Sikandra–Jhinjhak–Rasulabad MDR Project',
    slug: 'sikandra-jhinjhak-rasulabad-highway',
    category: 'Infrastructure',
    location: 'KM-21 to KM-40 Corridor, Uttar Pradesh',
    state: 'Uttar Pradesh',
    status: 'Completed',
    description: 'Strengthening and widening of the Sikandra–Jhinjhak–Rasulabad Major District Road (KM-21–40), completed in an accelerated timeframe of 8 months.',
    detailedOverview: 'This high-priority public connectivity project involved comprehensive civil engineering, earthwork, road widening, and asphalt pavement strengthening along the critical KM-21 to KM-40 stretch of the Sikandra–Jhinjhak–Rasulabad Major District Road (MDR). Demonstrating exceptional mobilization efficiency and project governance, Prabhatam Infrastructure delivered the entire 19-kilometer alignment in just 8 months.',
    features: [
      'Full Alignment Widening & Structural Pavement Strengthening',
      'KM-21 through KM-40 Stretch Delivered in 8 Months',
      'High-Grade Bituminous Concrete & Heavy Transit Reinforcement',
      'Drainage Infrastructure & Roadway Embankment Protection',
      'Zero-Accident Safety Record During Accelerated Build'
    ],
    heroImage: highwayImg,
    gallery: [
      highwayImg,
      greenMountainRoadImg,
      highwaySignageImg
    ],
    facts: [
      { label: 'Highway Stretch', value: 'KM-21 to KM-40 (19 KM)' },
      { label: 'Project Type', value: 'Major District Road (MDR)' },
      { label: 'Execution Speed', value: 'Completed in 8 Months' },
      { label: 'State', value: 'Uttar Pradesh' }
    ],
    sourceNote: 'Exact timeframe and corridor verified from Prabhatam Group records.',
    officialDivision: 'Infrastructure',
    lat: 26.5684,
    lng: 79.7915
  },
  {
    id: 'prabhatam-heights',
    name: 'Prabhatam Heights',
    slug: 'prabhatam-heights-bhopal',
    category: 'Residential',
    location: 'Raisen Road, Gopal Nagar, Bhopal',
    state: 'Madhya Pradesh',
    status: 'Completed',
    description: 'Flagship residential complex launched in 2002 that marked the group’s landmark foray into organized real estate development in Madhya Pradesh.',
    detailedOverview: 'Prabhatam Heights stands as the foundational residential milestone of Prabhatam Group, launched in 2002. Offering landscaped towers, secure gated community living, community halls, and integrated convenience retail (Prabhatam Plaza), it set new benchmarks for organized suburban living in Bhopal.',
    features: [
      'Flagship 2002 Residential Community',
      'Multi-Storey Residential Towers with Panoramic Views',
      'Integrated with Prabhatam Plaza Shopping Complex',
      'Gated Community with Dedicated Security Staff',
      'Landscaped Gardens & Children Play Zones'
    ],
    heroImage: prabhatamHeightsImg,
    gallery: [
      prabhatamHeightsImg,
      commercialPlazaImg,
      residentialTowersImg
    ],
    facts: [
      { label: 'Launch Year', value: '2002' },
      { label: 'Location', value: 'Raisen Road, Bhopal' },
      { label: 'Typology', value: 'Integrated High-Rise Enclave' },
      { label: 'Significance', value: 'Group Flagship Realty Project' }
    ],
    sourceNote: 'Historical milestone verified from official Prabhatam corporate timeline.',
    officialDivision: 'Real Estate',
    lat: 23.2355,
    lng: 77.4682
  },
  {
    id: 'telecom-towers-national',
    name: 'National Mobile Telecom Tower Network',
    slug: 'national-mobile-telecom-tower-network',
    category: 'Infrastructure',
    location: 'Pan-India Telecom Circles',
    state: 'National Network',
    status: 'Operational',
    description: 'Erection and ongoing maintenance of mobile telecom towers and passive infrastructure for leading telecommunications service providers across India.',
    detailedOverview: 'Prabhatam Infrastructure is deeply engaged in national connectivity infrastructure, executing the turnkey erection, commissioning, and continuous maintenance of mobile telecom towers across critical telecom circles in India. Working in partnership with premier telecommunications operators, the division delivers certified structural stability, grounding systems, and continuous technical support.',
    features: [
      'Turnkey Ground-Based and Rooftop Tower Erection',
      'Continuous Passive Infrastructure Operations & Maintenance',
      'Serving Leading Indian Telecom Service Providers',
      'Certified Structural Safety, Rigging & Wind-Load Resistance',
      'Optical Fiber Cable Integration & Network Power Redundancy'
    ],
    heroImage: telecomTowerImg,
    gallery: [
      telecomTowerImg,
      itTechParkImg
    ],
    facts: [
      { label: 'Domain', value: 'Mobile Telecom Infrastructure' },
      { label: 'Scope', value: 'Tower Erection & Maintenance' },
      { label: 'Coverage', value: 'Pan-India Service Footprint' },
      { label: 'Partners', value: 'Leading Telecom Operators' }
    ],
    sourceNote: 'Official infrastructure capability verified from Prabhatam Group records.',
    officialDivision: 'Infrastructure',
    lat: 28.6139,
    lng: 77.2090
  },
  {
    id: 'green-tech-highways',
    name: 'Green Technology Highways & Rural Corridors',
    slug: 'green-technology-highways-remote-terrains',
    category: 'Infrastructure',
    location: 'Remote & Mountainous Topographies',
    state: 'Northern & Central Corridors',
    status: 'Operational / Ongoing',
    description: 'Building, reinforcement, and strengthening of highways, Major District Roads (MDR) and Other District Roads (ODR) utilizing green technology in environmentally sensitive terrains.',
    detailedOverview: 'Prabhatam Infrastructure champions sustainable road construction by incorporating cold-mix asphalt, bio-stabilization, and low-emission engineering methods across remote and ecologically sensitive terrains. By eliminating heavy carbon-intensive heating plants in high-altitude zones, the division reinforces strategic transport arteries with minimal environmental impact.',
    features: [
      'Cold-Mix Asphalt Paving for Low-Carbon Emissions',
      'Engineered for Ecologically Sensitive Himalayan Corridors',
      'Strengthening of MDRs and Other District Roads (ODRs)',
      'Slope Protection and Erosion Control Systems',
      'High-Durability Bituminous Pavements for Severe Weather'
    ],
    heroImage: greenMountainRoadImg,
    gallery: [
      greenMountainRoadImg,
      highwaySignageImg,
      highwayImg
    ],
    facts: [
      { label: 'Engineering Focus', value: 'Green Highway Technology' },
      { label: 'Paving System', value: 'Cold Mix Asphalt Formulation' },
      { label: 'Target Topography', value: 'Remote & High-Altitude Terrains' },
      { label: 'Road Hierarchy', value: 'Highways, MDRs & ODRs' }
    ],
    sourceNote: 'Official green infrastructure initiative published by Prabhatam Group.',
    officialDivision: 'Infrastructure',
    lat: 30.0668,
    lng: 79.0193
  },
  {
    id: 'tech-parks-sez',
    name: 'Wi-Fi Technology Parks & SEZ Developments',
    slug: 'software-technology-parks-sez-developments',
    category: 'Infrastructure',
    location: 'Strategic Economic Zones',
    state: 'National Growth Corridors',
    status: 'Ongoing / Planned',
    description: 'Planning and development of Wi-Fi-savvy Software & Technology Parks and Special Economic Zones (SEZs) integrated with advanced telecommunications and civic infrastructure.',
    detailedOverview: 'Aligned with India’s technological and commercial expansion, Prabhatam Infrastructure develops Wi-Fi-savvy Software & Technology Parks and Special Economic Zones. These self-contained hubs incorporate redundant power, optical connectivity, dedicated IT office floors, and modern civic infrastructure to host global IT, BPM, and research enterprises.',
    features: [
      'Integrated High-Speed Wi-Fi & Optical Fiber Infrastructure',
      'Special Economic Zone (SEZ) Regulatory Planning',
      'Continuous Uninterrupted Power & Cooling Systems',
      'Grade-A Corporate Floorplates and Shared Business Centres',
      'Sustainable Green Building Design & Waste Management'
    ],
    heroImage: itTechParkImg,
    gallery: [
      itTechParkImg,
      telecomTowerImg
    ],
    facts: [
      { label: 'Development Type', value: 'Software & Technology Parks / SEZs' },
      { label: 'Connectivity', value: 'High-Density Wi-Fi & Fiber Backbone' },
      { label: 'Asset Class', value: 'High-Tech Industrial & Commercial' },
      { label: 'Target Occupancy', value: 'IT / ITES / Global Enterprises' }
    ],
    sourceNote: 'Official development area as published in Prabhatam Group records.',
    officialDivision: 'Infrastructure',
    lat: 28.5355,
    lng: 77.3910
  }
];

export const INFRASTRUCTURE_ACHIEVEMENTS: InfrastructureAchievement[] = [
  {
    id: 'uttarakhand-signage',
    title: 'Uttarakhand Highway & Road Signage',
    metric: '2,048',
    metricLabel: 'Signages Installed',
    location: 'Statewide Mountain Highways, Uttarakhand',
    description: 'Successfully fabricated, installed, and anchored 2,048 highway and road safety signages across remote, high-altitude mountain corridors of Uttarakhand.',
    image: highwaySignageImg,
    verifiedSource: 'Verified achievement published on Prabhatam Group official website.'
  },
  {
    id: 'up-mdr-road',
    title: 'Uttar Pradesh MDR Road Project',
    metric: '8 Months',
    metricLabel: 'Rapid Completion Time',
    location: 'KM-21 to KM-40, Sikandra–Jhinjhak–Rasulabad Corridor, UP',
    duration: '8 Months',
    description: 'Comprehensive strengthening and widening of the Sikandra–Jhinjhak–Rasulabad Major District Road (KM-21–40), completed with high engineering precision in just 8 months.',
    image: highwayImg,
    verifiedSource: 'Verified project metric as published in Prabhatam Group records.'
  },
  {
    id: 'telecom-towers',
    title: 'National Mobile Telecom Towers',
    metric: 'Pan-India',
    metricLabel: 'Service Footprint',
    location: 'Multiple Telecom Circles Across India',
    description: 'Turnkey erection, civil foundation anchoring, and ongoing maintenance of mobile telecom towers and transmission systems for premier Indian telecommunications operators.',
    image: telecomTowerImg,
    verifiedSource: 'Official infrastructure capability from Prabhatam Group records.'
  },
  {
    id: 'green-roads',
    title: 'Green Technology Road Corridors',
    metric: 'Eco-Pave',
    metricLabel: 'Cold Mix Asphalt Technology',
    location: 'Remote & Mountainous Topographies',
    description: 'Building, reinforcement, and strengthening of highways, MDRs, and ODRs utilizing cold mix asphalt technology to safeguard ecologically sensitive high-altitude terrains.',
    image: greenMountainRoadImg,
    verifiedSource: 'Published green engineering vision from Prabhatam Group records.'
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'delhi-hq',
    city: 'New Delhi',
    state: 'Delhi',
    name: 'Corporate Headquarters',
    addressLines: [
      'Ghalib Institute, Plot No. 1,',
      'Mata Sundari Lane, Rouse Avenue,',
      'New Delhi – 110002'
    ],
    pinCode: '110002',
    phone: '011-43603300',
    email: 'info@prabhatamgroup.com',
    isHQ: true,
    type: 'Corporate Headquarters',
    lat: 28.6315,
    lng: 77.2348
  },
  {
    id: 'dhanbad-mall',
    city: 'Dhanbad',
    state: 'Jharkhand',
    name: 'Prabhatam Grand Mall Office',
    addressLines: [
      'Prabhatam Grand Mall,',
      'Chanchani Colony,',
      'Dhanbad, Jharkhand – 826004'
    ],
    pinCode: '826004',
    phone: '011-43603300',
    email: 'info@prabhatamgroup.com',
    isHQ: false,
    type: 'Commercial & Retail Hub',
    lat: 23.7957,
    lng: 86.4304
  },
  {
    id: 'bhopal-heights',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    name: 'Bhopal Regional Office',
    addressLines: [
      'Prabhatam Heights, Raisen Road,',
      'Gopal Nagar,',
      'Bhopal, Madhya Pradesh – 462022'
    ],
    pinCode: '462022',
    phone: '011-43603300',
    email: 'info@prabhatamgroup.com',
    isHQ: false,
    type: 'Regional Office',
    lat: 23.2332,
    lng: 77.4645
  },
  {
    id: 'indore-office',
    city: 'Indore',
    state: 'Madhya Pradesh',
    name: 'Indore Operations Office',
    addressLines: [
      '208-C, 4th Floor, Kanchan Sagar Apartment,',
      'Near Industry House, A.B. Road,',
      'Indore – 452001'
    ],
    pinCode: '452001',
    phone: '011-43603300',
    email: 'info@prabhatamgroup.com',
    isHQ: false,
    type: 'Regional Office',
    lat: 22.7196,
    lng: 75.8577
  },
  {
    id: 'dehradun-office',
    city: 'Dehradun',
    state: 'Uttarakhand',
    name: 'Uttarakhand Infrastructure Office',
    addressLines: [
      'C 28, THDC Colony, Doon University Road,',
      'Near Mahalaxmi Wedding,',
      'Dehradun, Uttarakhand – 248001'
    ],
    pinCode: '248001',
    phone: '011-43603300',
    email: 'info@prabhatamgroup.com',
    isHQ: false,
    type: 'Project Operations Office',
    lat: 30.3165,
    lng: 78.0322
  },
  {
    id: 'ranchi-office',
    city: 'Ranchi',
    state: 'Jharkhand',
    name: 'Ranchi Liaison Office',
    addressLines: [
      'C/O Suresh Prasad Sinha,',
      'Front of Fruit Market, Harmu Bypass Road,',
      'Ranchi – 834002'
    ],
    pinCode: '834002',
    phone: '011-43603300',
    email: 'info@prabhatamgroup.com',
    isHQ: false,
    type: 'Liaison Office',
    lat: 23.3441,
    lng: 85.3096
  }
];

export const CAREER_DISCIPLINES = [
  {
    title: 'Property Development',
    description: 'Planning, architectural coordination, and integrated master planning for township and commercial projects.'
  },
  {
    title: 'Prospecting & Land Acquisition',
    description: 'Strategic land identification, title diligence, zoning clearance, and pre-development feasibility analysis.'
  },
  {
    title: 'Civil & Highway Engineering',
    description: 'EPC/BOT road construction, quality assurance, bridge structures, and high-altitude mountain road engineering.'
  },
  {
    title: 'Project Development & Execution',
    description: 'End-to-end EPC site operations, contractor management, timelines, and rigorous on-site safety compliance.'
  },
  {
    title: 'Marketing & Corporate Communications',
    description: 'Brand positioning, large-scale media strategy, digital signage campaigns, and customer relationship programs.'
  },
  {
    title: 'Institutional Sales & Leasing',
    description: 'Commercial mall leasing, anchor store partnerships, luxury residential sales, and investor liaison.'
  },
  {
    title: 'Corporate Finance & Accounts',
    description: 'Capital structuring, banking consortia, project accounting, cost audits, and regulatory compliance.'
  },
  {
    title: 'Legal & Regulatory Affairs',
    description: 'Contract management, municipal sanctioning, environmental compliance, and corporate governance.'
  },
  {
    title: 'Administration & Human Resources',
    description: 'Enterprise operations, talent acquisition, skill development, and multi-state administrative coordination.'
  }
];

export const NEWS_BULLETINS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Strengthening Regional Connectivity: Sikandra–Jhinjhak–Rasulabad Highway Widening Delivered in 8 Months',
    category: 'Infrastructure',
    date: 'Source Archive',
    excerpt: 'Accelerated civil execution and modern pavement technology enable the completion of the 19 km major district road corridor ahead of anticipated timeframes.',
    content: 'Prabhatam Infrastructure successfully concluded the widening and structural pavement strengthening of the Sikandra–Jhinjhak–Rasulabad Major District Road (KM-21–40) in Uttar Pradesh in 8 months, providing rapid all-weather connectivity.',
    readTime: '3 min read',
    sourceAttribution: 'Prabhatam Infrastructure Public Records'
  },
  {
    id: 'news-2',
    title: 'Highway Safety Milestone: 2,048 Road Signages Installed Across Uttarakhand',
    category: 'Infrastructure',
    date: 'Source Archive',
    excerpt: 'Execution in high-altitude Himalayan sectors enhances transit safety for regional commuters, tourists, and sacred pilgrimage routes.',
    content: 'Overcoming complex mountain topography and severe seasonal conditions, Prabhatam Infrastructure engineered, anchored, and deployed 2,048 high-specification highway signages spanning key national and state arteries of Uttarakhand.',
    readTime: '4 min read',
    sourceAttribution: 'Prabhatam Infrastructure Public Records'
  },
  {
    id: 'news-3',
    title: 'Prabhatam Grand Mall Anchors Modern Retail & Commercial Landscape in Dhanbad',
    category: 'Real Estate',
    date: 'Source Archive',
    excerpt: 'Spanning 2.71 acres with 3.86 lakh sq. ft. of retail, multiplex cinema, and integrated hotel, the development stands as Jharkhand’s premier destination.',
    content: 'Featuring international shopping brands, executive commercial offices, and a 1 lakh sq. ft. boutique hotel, Prabhatam Grand Mall continues to serve as the benchmark for mixed-use urban destinations in Eastern India.',
    readTime: '3 min read',
    sourceAttribution: 'Prabhatam Realty Public Records'
  },
  {
    id: 'news-4',
    title: 'Golden Utopia: 125-Acre Vastu-Compliant Township in Amritsar Sets Benchmark for Integrated Habitats',
    category: 'Real Estate',
    date: 'Source Archive',
    excerpt: 'Accommodating 3,000+ planned homes, educational zones, and self-contained commercial plazas in Punjab.',
    content: 'Prabhatam Realty’s expansive 125-acre Golden Utopia master plan blends traditional Vastu design principles with modern civic utilities, school infrastructure, and multi-tier security systems.',
    readTime: '3 min read',
    sourceAttribution: 'Prabhatam Realty Public Documentation'
  }
];

