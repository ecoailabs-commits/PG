import { 
  Project, 
  BusinessVertical, 
  TimelineMilestone, 
  LeadershipProfile, 
  InfrastructureAchievement, 
  CSRInitiative, 
  OfficeLocation,
  NewsItem
} from '../types';

export const COMPANY_BRAND = {
  name: 'Prabhatam Infra Ventures',
  parentGroup: 'Prabhatam Group',
  tagline: 'Building Infrastructure. Creating Possibilities.',
  supportingLine: 'Engineering infrastructure, developing spaces and creating long-term value.',
  groupLegacyYears: '50',
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
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    accent: 'emerald'
  },
  {
    id: 'media',
    number: '03',
    title: 'Media & Communications',
    tagline: 'Outdoor Ad – Forever Ahead & Digital Wireless Networks',
    description: 'Pioneering advertising, large-format outdoor display networks, digital outdoor installations (DAWN), broadcast integration, and marquee live events since 1977.',
    capabilities: [
      'Comprehensive Advertising & Branding',
      'Print Media Campaigns',
      'Large Format Outdoor Advertising (OOH)',
      'DAWN: Digital Advertising Wireless Networks',
      'LED & Digital Outdoor Screens',
      'National Broadcast Partnerships',
      'High-Profile Event Production'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    accent: 'sky'
  },
  {
    id: 'aviation',
    number: '04',
    title: 'Aviation',
    tagline: 'Charter Wings & Dedicated Helicopter Air Mobility',
    description: 'Established in 2007, operating Non-Scheduled Operator Permit (NSOP) charter services, helicopter missions, sacred pilgrimage connectivity, and regional air corridors.',
    capabilities: [
      'NSOP Certified Charter Services',
      'Helicopter Operations & Logistics',
      'Pilgrimage Charter Circuits',
      'Internationally Trained Pilots & Crew',
      'Fly Divine Regional MP Charter',
      'Emergency & Remote Relief Capability'
    ],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    accent: 'indigo'
  },
  {
    id: 'agrofresh',
    number: '05',
    title: 'Emerging Ventures & Agrofresh',
    tagline: 'Technology-Driven Sustainable Farm Management',
    description: 'Prabhatam Agrofresh combines multi-decade agronomy know-how with cutting-edge artificial intelligence and machine learning to achieve yield predictability and eco-friendly farming.',
    capabilities: [
      'AI/ML Crop Disease Prediction',
      'Yield Predictability Analytics',
      'Eco-Friendly Farm Operations',
      'Sustainable Water & Soil Management',
      'Modern Agritech Supply Pipelines',
      'Exploring New Technological Frontiers'
    ],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    accent: 'teal'
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
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Location', value: 'Punjabi Bagh, Delhi' },
      { label: 'Typology', value: 'Bespoke Luxury Residences' },
      { label: 'Asset Class', value: 'Super-Premium Urban Housing' },
      { label: 'Connectivity', value: 'Ring Road & Metro Corridor' }
    ],
    sourceNote: 'Project details verified from Prabhatam Group source repository.',
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
    heroImage: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581404917879-53e19259fdda?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Land Parcel', value: '2.71 Acres' },
      { label: 'Retail Area', value: '3.86 Lakh sq. ft.' },
      { label: 'Hotel Area', value: '1.00 Lakh sq. ft.' },
      { label: 'Office Area', value: '15,400+ sq. ft.' }
    ],
    sourceNote: 'Landmark mixed-use destination as published in Prabhatam Group records.',
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
    heroImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Commercial Area', value: '30,000 sq. ft.' },
      { label: 'Location', value: 'Raisen Road, Bhopal' },
      { label: 'Integration', value: 'Prabhatam Heights Enclave' },
      { label: 'Facilities', value: 'Shopping, Food Court & Dining' }
    ],
    sourceNote: 'Factual parameters verified from Prabhatam Group records.',
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
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Total Land Area', value: '22.5 Acres' },
      { label: 'Location', value: 'Indore, Madhya Pradesh' },
      { label: 'Development Typology', value: 'Villas & Residential Plots' },
      { label: 'Occupancy Status', value: 'Residents Moved In' }
    ],
    sourceNote: 'Verified source data from Prabhatam Group documentation.',
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
    heroImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Total Area', value: '125 Acres' },
      { label: 'Scale', value: '3,000+ Planned Villas & Condos' },
      { label: 'Philosophy', value: 'Vastu-Compliant Architecture' },
      { label: 'Social Amenities', value: 'Integrated School & Commercial Hub' }
    ],
    sourceNote: 'Official parameters derived from Prabhatam Group publication.',
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
    heroImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Concept', value: 'Farmland / Second-Home Villas' },
      { label: 'Villa Count', value: '50 Luxurious Villas' },
      { label: 'Land Extent', value: '34.35 Acres (Source referenced)' },
      { label: 'Geography', value: 'Indore / Bhopal Region' }
    ],
    sourceNote: 'Project details as published by Prabhatam Group. Verified verbatim from official records.',
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
    heroImage: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Scope', value: '2,048 Highway & Road Signages' },
      { label: 'State', value: 'Uttarakhand' },
      { label: 'Execution', value: 'Prabhatam Infrastructure' },
      { label: 'Terrain', value: 'Mountainous Himalayan Corridors' }
    ],
    sourceNote: 'Exact achievement verified from Prabhatam Group infrastructure records.',
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
    heroImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Highway Stretch', value: 'KM-21 to KM-40 (19 KM)' },
      { label: 'Project Type', value: 'Major District Road (MDR)' },
      { label: 'Execution Speed', value: 'Completed in 8 Months' },
      { label: 'State', value: 'Uttar Pradesh' }
    ],
    sourceNote: 'Exact timeframe and corridor verified from Prabhatam Group records.',
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
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
    ],
    facts: [
      { label: 'Launch Year', value: '2002' },
      { label: 'Location', value: 'Raisen Road, Bhopal' },
      { label: 'Typology', value: 'Integrated High-Rise Enclave' },
      { label: 'Significance', value: 'Group Flagship Realty Project' }
    ],
    sourceNote: 'Historical milestone verified from official Prabhatam corporate timeline.',
    lat: 23.2355,
    lng: 77.4682
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: '1977',
    title: 'Origins in Rashtriya Advertising Agency',
    description: 'Mr. Dinesh Gupta joined Rashtriya Advertising Agency, the foundational family enterprise originally established by Shri I.P. Gupta, laying the bedrock of modern corporate expansion.',
    category: 'Foundation',
    highlightMetric: 'Inception'
  },
  {
    year: '1984',
    title: 'Launch of Prabhatam Events',
    description: 'Pioneered large-scale event management with the landmark Mahabharat event, establishing the group’s national production and live communication credentials.',
    category: 'Media',
    highlightMetric: 'National Scale'
  },
  {
    year: '1990',
    title: 'Founding of Keshav Dharmarth Trust',
    description: 'Established the in-house philanthropic NGO Keshav Dharmarth Trust (subsequently branded as Prabhatam Lifeline), initiating extensive community health and diagnostics services.',
    category: 'CSR',
    highlightMetric: 'Philanthropy'
  },
  {
    year: '2002',
    title: 'Entry into Real Estate — Prabhatam Heights',
    description: 'Formal launch of Prabhatam Realty with the flagship residential complex Prabhatam Heights in Bhopal, setting a high standard for modern community development.',
    category: 'Real Estate',
    highlightMetric: 'Realty Launch'
  },
  {
    year: '2007',
    title: 'Establishment of Prabhatam Aviation',
    description: 'Launched Prabhatam Aviation with Non-Scheduled Operator Permit (NSOP) charter and helicopter flight services, providing vital regional air mobility and pilgrimage connectivity.',
    category: 'Aviation',
    highlightMetric: 'NSOP Wings'
  },
  {
    year: '2008',
    title: 'Prabhatam Investment Pvt. Ltd.',
    description: 'Incorporation of Prabhatam Investment Pvt. Ltd. to structure institutional capital allocation, financial partnerships, and long-term project equity investments.',
    category: 'Foundation',
    highlightMetric: 'Capital Entity'
  },
  {
    year: '2010',
    title: 'Launch of Prabhatam Grand Mall',
    description: 'Prabhatam Realty unveiled the landmark 2.71-acre Prabhatam Grand Mall in Dhanbad, bringing the largest destination retail, cinema, and boutique hotel hub to Jharkhand.',
    category: 'Real Estate',
    highlightMetric: '2.71 Acres'
  },
  {
    year: '2011',
    title: 'Prabhatam Infrastructure — Uttarakhand Signage',
    description: 'Formally launched Prabhatam Infrastructure, executing a historic statewide public safety signage installation covering 2,048 highway markers across Uttarakhand.',
    category: 'Infrastructure',
    highlightMetric: '2,048 Signages'
  },
  {
    year: '2012',
    title: 'Fly Divine Charter Initiative',
    description: 'Partnered with the Government of Madhya Pradesh to roll out the Fly Divine intrastate local charter service, connecting regional industrial and tourist centers.',
    category: 'Aviation',
    highlightMetric: 'State Partnership'
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
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    verifiedSource: 'Verified project metric as published in Prabhatam Group records.'
  }
];

export const LEADERSHIP_DATA: LeadershipProfile[] = [
  {
    name: 'Mr. Dinesh Gupta',
    role: 'Chairman',
    organization: 'Prabhatam Group',
    bio: 'Joined Rashtriya Advertising Agency in 1977, transforming the pioneering family enterprise established by Shri I.P. Gupta into a multi-sector corporate house spanning Media, Aviation, Real Estate, and Infrastructure.',
    messageQuote: 'Over five decades, our guiding compass has remained unwavering: creating long-term value for the nation by combining ethical governance, technical discipline, and enduring enterprise.',
    fullMessage: [
      'When I joined our family enterprise in 1977, India’s economic horizon was in its formative stages. Over the past fifty years, we have steered our group from its foundational roots in communications into pivotal infrastructure development, organized real estate, regional aviation, and advanced sustainable practices.',
      'Our philosophy has never been about short-term speculative momentum. Instead, it is anchored in nation building — erecting roads that withstand mountain topographies, creating retail and residential landmarks that anchor communities, and fostering public trust through transparent corporate stewardship.',
      'Prabhatam Infra Ventures embodies this generational commitment as we engineer the infrastructure of tomorrow.'
    ],
    highlights: [
      '50-Year Business Leadership Heritage',
      'Architect of Group Diversification',
      'Pioneer of Public Infrastructure Initiatives',
      'Committed to Ethical Corporate Governance'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Mr. Mayank Gupta',
    role: 'Director',
    organization: 'Prabhatam Group',
    credentials: 'Degree in Business Management (Manchester University, UK) | MBA in Family Business (SP Jain, Mumbai)',
    bio: 'Educated at Manchester University (UK) with major in Marketing & Finance and SP Jain Mumbai (MBA Family Business), with over a decade of executive leadership across Media, Outdoor Advertising, Real Estate, and Technology-Driven Agriculture.',
    messageQuote: 'Modern infrastructure demands the convergence of speed, global technical benchmarks, and sustainable foresight. We execute with precision and institutional responsibility.',
    fullMessage: [
      'The modern landscape of Indian infrastructure requires more than traditional civil execution. It calls for the synthesis of advanced engineering, digital accountability, environmental sensitivity, and world-class project governance.',
      'From strengthening arterial highway corridors ahead of schedule to developing integrated townships and leveraging AI/ML models for agricultural predictability in Prabhatam Agrofresh, we look to the future with rigorous operational discipline.',
      'At Prabhatam Infra Ventures, we are committed to collaborating with international infrastructure partners and delivering enduring value to our customers, stakeholders, and institutions.'
    ],
    highlights: [
      'Manchester University UK Alumni (Marketing & Finance)',
      'SP Jain Mumbai MBA (Family Business)',
      'Executive Leadership in Real Estate & Infrastructure',
      'Spearheading AgTech and Green Technology Initiatives'
    ],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  }
];

export const CSR_DATA: CSRInitiative = {
  id: 'keshav-dharmarth-trust',
  title: 'Social Impact & Healthcare Support',
  trustName: 'Keshav Dharmarth Trust / Prabhatam Lifeline',
  foundedYear: '1990',
  summary: 'Founded in 1990 as an in-house philanthropic initiative, Keshav Dharmarth Trust (branded as Prabhatam Lifeline) delivers essential healthcare, diagnostic screening, and humanitarian aid to underprivileged populations.',
  description: 'Prabhatam Group believes corporate growth must translate directly into societal empowerment. Through Keshav Dharmarth Trust, the organisation conducts extensive medical camps, subsidized and free diagnostic screening, specialized AIDS treatment and awareness programs, and humanitarian relief in close association with respected national social bodies.',
  pillars: [
    {
      title: 'Healthcare for Underprivileged Communities',
      description: 'Providing free medical consultations, essential medicines, and preventive health screenings across marginalized rural and urban settlements.',
      icon: 'HeartPulse'
    },
    {
      title: 'Medical Care & Diagnostics',
      description: 'Facilitating laboratory testing, clinical diagnostics, and timely tertiary medical interventions for patients lacking institutional financial coverage.',
      icon: 'Stethoscope'
    },
    {
      title: 'AIDS Treatment & Awareness Programs',
      description: 'Dedicated treatment support, counselling clinics, and preventative educational campaigns addressing immunodeficiency syndromes.',
      icon: 'ShieldAlert'
    },
    {
      title: 'Association with Seva Bharti',
      description: 'Coordinated social welfare initiatives, relief distribution, and community empowerment missions in collaboration with Seva Bharti.',
      icon: 'Users'
    }
  ],
  partnerAssociation: 'Seva Bharti',
  image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80'
};

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
    title: 'Prabhatam Agrofresh Harnesses AI/ML for Sustainable Yield Predictability',
    category: 'Sustainability',
    date: 'Source Archive',
    excerpt: 'Deploying computational modeling for early plant disease detection and environmental soil conservation across farm estates.',
    content: 'By integrating agronomic science with artificial intelligence and machine learning models, Prabhatam Agrofresh demonstrates how precision agriculture creates higher yield predictability while conserving natural water tables.',
    readTime: '4 min read',
    sourceAttribution: 'Prabhatam Agrofresh Documentation'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'Infrastructure',
    title: 'Highway Engineering & Pavement Corridors',
    location: 'Uttar Pradesh / Uttarakhand',
    imageUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-2',
    category: 'Real Estate',
    title: 'Victoria 55 Luxury Residences',
    location: 'Punjabi Bagh, New Delhi',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-3',
    category: 'Real Estate',
    title: 'Prabhatam Grand Mall Retail Enclave',
    location: 'Dhanbad, Jharkhand',
    imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-4',
    category: 'Infrastructure',
    title: 'Himalayan Highway Signage Operations',
    location: 'Uttarakhand State Network',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-5',
    category: 'Real Estate',
    title: 'Oyster City Villa Enclave',
    location: 'Indore, Madhya Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-6',
    category: 'Aviation',
    title: 'Prabhatam Aviation Regional Fleet Operations',
    location: 'Pilgrimage & Charter Corridors',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-7',
    category: 'Media',
    title: 'Digital Advertising Wireless Networks (DAWN)',
    location: 'National Transit Hubs',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-8',
    category: 'CSR',
    title: 'Keshav Dharmarth Trust Healthcare Initiatives',
    location: 'Prabhatam Lifeline Mission',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80'
  }
];
