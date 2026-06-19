export type TemplateCategory =
  | "professional"
  | "modern"
  | "creative"
  | "minimal"
  | "ats-friendly"
  | "executive"
  | "student"
  | "two-column"
  | "colorful";

export type TemplateLayout =
  | "single"
  | "two-column"
  | "sidebar-left"
  | "sidebar-right"
  | "header-banner";

export interface TemplateTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
  headingFont: string;
  bodyFont: string;
  borderRadius: string;
  sectionStyle: "underline" | "pill" | "bar" | "minimal" | "boxed";
}

export interface ResumeTemplate {
  id: string;
  name: string;
  slug: string;
  category: TemplateCategory;
  layout: TemplateLayout;
  description: string;
  tags: string[];
  theme: TemplateTheme;
  popular?: boolean;
  supportsPhoto?: boolean;
}

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  professional: "Professional",
  modern: "Modern",
  creative: "Creative",
  minimal: "Minimal",
  "ats-friendly": "ATS-Friendly",
  executive: "Executive",
  student: "Student / Entry Level",
  "two-column": "Two Column",
  colorful: "Colorful",
};

export const CATEGORY_DESCRIPTIONS: Record<TemplateCategory, string> = {
  professional: "Clean, corporate layouts trusted by recruiters",
  modern: "Contemporary designs with bold typography",
  creative: "Stand out with unique visual styles",
  minimal: "Less is more — focus on your content",
  "ats-friendly": "Optimized for applicant tracking systems",
  executive: "Premium layouts for senior leadership roles",
  student: "Perfect for internships and first jobs",
  "two-column": "Efficient use of space with dual columns",
  colorful: "Vibrant accents that show personality",
};
