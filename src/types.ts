export type ProjectCategory = 
  | 'All' 
  | 'Residential' 
  | 'Commercial' 
  | 'Mixed Use' 
  | 'Infrastructure' 
  | 'Township' 
  | 'Hospitality';

export interface Project {
  id: string;
  name: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  state: string;
  area?: string;
  landArea?: string;
  status: 'Completed' | 'Operational' | 'Executed' | 'Ongoing / Published' | 'Residents Moved In';
  description: string;
  detailedOverview: string;
  features: string[];
  heroImage: string;
  gallery: string[];
  facts: { label: string; value: string }[];
  sourceNote?: string;
  lat: number;
  lng: number;
}

export interface BusinessVertical {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  image: string;
  accent: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  category: 'Foundation' | 'Media' | 'Real Estate' | 'Aviation' | 'Infrastructure' | 'CSR';
  highlightMetric?: string;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  organization: string;
  credentials?: string;
  bio: string;
  messageQuote: string;
  fullMessage: string[];
  highlights: string[];
  image: string;
}

export interface InfrastructureAchievement {
  id: string;
  title: string;
  metric: string;
  metricLabel: string;
  location: string;
  duration?: string;
  description: string;
  image: string;
  verifiedSource: string;
}

export interface CSRInitiative {
  id: string;
  title: string;
  trustName: string;
  foundedYear: string;
  summary: string;
  description: string;
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  partnerAssociation: string;
  image: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  state: string;
  name: string;
  addressLines: string[];
  pinCode: string;
  phone?: string;
  email?: string;
  isHQ: boolean;
  type: 'Corporate Headquarters' | 'Commercial & Retail Hub' | 'Regional Office' | 'Project Operations Office' | 'Liaison Office';
  lat: number;
  lng: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Real Estate' | 'Corporate' | 'Sustainability' | 'CSR' | 'Media' | 'Aviation';
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  sourceAttribution: string;
}

export interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  businessInterest: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'Reviewing' | 'Contacted';
}
