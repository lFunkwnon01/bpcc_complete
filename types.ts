
export type Language = 'es' | 'en';

export interface NewsItem {
  id: string;
  category: 'Institucional' | 'Comercio' | 'Networking' | 'Minería' | 'Oportunidad' | 'Infraestructura' | 'TLC';
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  isExclusive?: boolean;
  language: Language;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  type: 'Virtual' | 'Presencial';
  title: string;
  description: string;
  location: string;
  slug: string;
  time?: string;
  agenda?: { time: string; activity: string }[];
}

export interface ReportItem {
  id: string;
  title: string;
  period: string;
  description: string;
  imageUrl: string;
  type: 'Economic Report' | 'Opportunities' | 'Bilateral';
}

export interface Partner {
  id: string;
  name: string;
  sector: string;
  logoUrl: string;
  tier: 'Premium Plus' | 'Premium' | 'Standard';
  description?: string;
  website?: string;
}

export interface Committee {
  id: string;
  name: string;
  slug: string;
  description: string;
  membersCount: number;
  objectives: string[];
}

export interface BilateralHito {
  id: string;
  year: string;
  title: string;
  description: string;
  tag: 'Comercio' | 'Impuestos' | 'Educación' | 'Infraestructura' | 'TLC' | 'CPTPP';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface MembershipTier {
  id: string;
  name: 'Standard' | 'Premium' | 'Premium Plus';
  tagline: string;
  price: string;
  currency: 'USD' | 'PEN';
  billingPeriod: 'annual' | 'monthly';
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  color: string;
}
