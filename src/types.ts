export type Language = 'en' | 'bn';

export interface SkillCategory {
  id: string;
  title: { en: string; bn: string };
  iconName: string;
  description: { en: string; bn: string };
  skills: {
    name: string;
    level: number; // 0 - 100
    tag?: string;
  }[];
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  role: { en: string; bn: string };
  company: { en: string; bn: string };
  period: { en: string; bn: string };
  location: { en: string; bn: string };
  type: { en: string; bn: string };
  description: { en: string; bn: string };
  achievements: { en: string; bn: string }[];
  skillsUsed: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: { en: string; bn: string };
  category: 'web' | 'marketing' | 'content' | 'sales' | 'nutrition';
  categoryLabel: { en: string; bn: string };
  shortDescription: { en: string; bn: string };
  fullDescription: { en: string; bn: string };
  image: string;
  stats?: { label: { en: string; bn: string }; value: string }[];
  tags: string[];
  demoUrl?: string;
  highlights: { en: string; bn: string }[];
}

export interface ServiceItem {
  id: string;
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  icon: string;
  features: { en: string; bn: string }[];
  basePriceEstimate: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: { en: string; bn: string };
  company: string;
  avatar: string;
  content: { en: string; bn: string };
  rating: number;
}
