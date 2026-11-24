export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'RAG AI' | 'ETL & Backend' | 'Full Stack' | 'Cloud & PDF';
  tags: string[];
  metrics?: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  hasInteractiveRag?: boolean;
  highlights: string[];
  architecture?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  techStack: string[];
  isCurrent?: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: string;
  highlight?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface RagDocument {
  id: string;
  title: string;
  category: string;
  content: string;
  keywords: string[];
}

export interface RagQueryResult {
  query: string;
  answer: string;
  matchedDocs: {
    id: string;
    title: string;
    score: number;
    chunk: string;
  }[];
  tokensProcessed: number;
  latencyMs: number;
  embeddingDimensions: number;
}
