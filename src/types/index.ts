export type LocationType = 'OFFICE' | 'RETAIL' | 'LCO' | 'NETWORK_NODE' | 'COVERAGE_POINT';

export interface LocationItem {
  id: string;
  name: string;
  type: LocationType;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  services: string[];
  openingHours: string;
  isActive: boolean;
  distanceKm?: number;
}

export interface CoverageZone {
  id: string;
  name: string;
  city: string;
  centerLat: number;
  centerLng: number;
  radiusMeters: number;
  status: 'AVAILABLE' | 'LIMITED_COVERAGE' | 'COMING_SOON';
  color: string;
}

export interface Plan {
  id: string;
  title: string;
  speedMbps: number;
  priceMonthly: number;
  priceQuarterly?: number;
  priceAnnual?: number;
  ottInclusions: string[];
  features: string[];
  popular?: boolean;
  category: 'residential' | 'business' | 'gaming' | 'prime';
  fupLimit?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  benefits: string[];
  iconName: string;
  priceStarting?: string;
  detailsText: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tag: string;
  category: 'Router' | 'STB' | 'Mesh' | 'ONT' | 'Accessory';
  price: number;
  mrp: number;
  warranty: string;
  description: string;
  specs: Record<string, string>;
  imageUrl?: string;
  stock: 'In Stock' | 'Pre-Order' | 'Limited Stock';
}

export interface OfferItem {
  id: string;
  title: string;
  discountTag: string;
  validityDate: string;
  promoCode: string;
  description: string;
  terms: string[];
  category: 'Broadband' | 'Hardware' | 'OTT' | 'Corporate' | 'Referral';
  countdownEnd?: string; // ISO date
  badgeColor?: 'magenta' | 'yellow' | 'blue';
}

export interface SpeedTestState {
  downloadMbps: number;
  uploadMbps: number;
  pingMs: number;
  jitterMs: number;
  status: 'idle' | 'preparing' | 'testing_ping' | 'testing_download' | 'testing_upload' | 'completed' | 'error';
  progressPercent: number;
  diagnosticMsg?: string;
}

export interface CAFFormData {
  fullName: string;
  email: string;
  phone: string;
  alternatePhone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  connectionType: 'Residential Fiber' | 'Business Fiber' | 'Leased Line' | 'IPTV Combo';
  planId: string;
  hardwareOption: string;
  documentType: 'Aadhaar' | 'Voter ID' | 'Passport' | 'Driving License';
  docNumber: string;
  agreeToTerms: boolean;
}

export interface ChannelItem {
  id: string;
  name: string;
  category: 'Sports' | 'News' | 'Entertainment' | 'Movies' | 'Bengali' | 'Kids' | 'Infotainment';
  isHD: boolean;
  language: string;
}

export interface OTTAppItem {
  id: string;
  name: string;
  logoText: string;
  bgColor: string;
  description: string;
  plansIncluded: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Broadband' | 'Billing' | 'Technical' | 'IPTV';
}
