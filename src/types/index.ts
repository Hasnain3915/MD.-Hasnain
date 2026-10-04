export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  badge: string;
  type: string;
  role: string;
  techStack: string[];
  overview: string;
  problem: string;
  approach: string;
  keyFeatures: string[];
  whatILearned: string;
  screenshots: {
    token: string;
    caption: string;
    aspectRatio?: '16:9' | '4:3' | '9:16' | '1:1';
  }[];
  isFeatured?: boolean;
  category: 'mobile' | 'web' | 'ai';
  sourceFileStatus: string;
  externalLink?: string;
  githubLink?: string;
}

export interface ResponsibilityCard {
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  parentGroup: string;
  period: string;
  duration: string;
  employmentType: string;
  location: string;
  responsibilities: ResponsibilityCard[];
}

export interface SkillCategory {
  name: string;
  id: 'accounting' | 'operations' | 'software' | 'technology' | 'values';
  description: string;
  skills: string[];
}

export interface AccountingAsset {
  id: string;
  title: string;
  subtitle: string;
  token: string;
  description: string;
  components: string[];
  relevance: string;
}

export interface GalleryItem {
  id: string;
  token: string;
  title: string;
  category: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
  span?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  focus: string;
  period: string;
  status: string;
  details?: string[];
}

export interface TrainingItem {
  title: string;
  institution: string;
  modules: string[];
  documentationExposure?: string[];
  note?: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  isGoal?: boolean;
}

export interface LearningItem {
  category: string;
  topic: string;
  focusArea: string;
}
