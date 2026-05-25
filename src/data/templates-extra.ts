import type { ResumeTemplate, TemplateCategory } from "@/types/template";

type ThemeInput = {
  name: string;
  category: TemplateCategory;
  layout: ResumeTemplate["layout"];
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  sectionStyle: ResumeTemplate["theme"]["sectionStyle"];
  headingFont: string;
  tags: string[];
  popular?: boolean;
};

export const EXTRA_THEMES: ThemeInput[] = [
  { name: "Corporate Prime", category: "professional", layout: "single", primary: "#0f2942", secondary: "#1e4976", accent: "#3b82f6", background: "#ffffff", sectionStyle: "underline", headingFont: "Georgia, serif", tags: ["corporate"] },
  { name: "Legal Classic", category: "professional", layout: "two-column", primary: "#1f2937", secondary: "#374151", accent: "#9ca3af", background: "#ffffff", sectionStyle: "bar", headingFont: "Georgia, serif", tags: ["legal"] },
  { name: "Metro Professional", category: "professional", layout: "sidebar-left", primary: "#134e4a", secondary: "#0f766e", accent: "#5eead4", background: "#ffffff", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["metro"] },
  { name: "Trust Blue", category: "professional", layout: "header-banner", primary: "#1e3a8a", secondary: "#2563eb", accent: "#93c5fd", background: "#f8fafc", sectionStyle: "boxed", headingFont: "system-ui, sans-serif", tags: ["trust"] },

  { name: "Silicon Valley", category: "modern", layout: "single", primary: "#111827", secondary: "#4b5563", accent: "#10b981", background: "#ffffff", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["tech"] },
  { name: "Neon Edge", category: "modern", layout: "header-banner", primary: "#701a75", secondary: "#a21caf", accent: "#e879f9", background: "#fdf4ff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["bold"] },
  { name: "Grid Modern", category: "modern", layout: "two-column", primary: "#0f172a", secondary: "#334155", accent: "#f97316", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["grid"] },
  { name: "Cloud Nine", category: "modern", layout: "sidebar-right", primary: "#0369a1", secondary: "#0284c7", accent: "#bae6fd", background: "#f0f9ff", sectionStyle: "underline", headingFont: "system-ui, sans-serif", tags: ["saas"] },

  { name: "Studio Bold", category: "creative", layout: "header-banner", primary: "#9d174d", secondary: "#be185d", accent: "#fbcfe8", background: "#fff1f2", sectionStyle: "pill", headingFont: "Georgia, serif", tags: ["studio"] },
  { name: "Editorial Chic", category: "creative", layout: "single", primary: "#78350f", secondary: "#92400e", accent: "#fcd34d", background: "#fffbeb", sectionStyle: "underline", headingFont: "Georgia, serif", tags: ["editorial"] },
  { name: "Art Director", category: "creative", layout: "sidebar-left", primary: "#312e81", secondary: "#4338ca", accent: "#a5b4fc", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["art"] },

  { name: "Zen Simple", category: "minimal", layout: "single", primary: "#3f3f46", secondary: "#71717a", accent: "#d4d4d8", background: "#fafafa", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["zen"] },
  { name: "Swiss Clean", category: "minimal", layout: "two-column", primary: "#18181b", secondary: "#52525b", accent: "#a1a1aa", background: "#ffffff", sectionStyle: "underline", headingFont: "Helvetica, sans-serif", tags: ["swiss"] },
  { name: "Quiet Pro", category: "minimal", layout: "sidebar-right", primary: "#44403c", secondary: "#78716c", accent: "#d6d3d1", background: "#fafaf9", sectionStyle: "minimal", headingFont: "Georgia, serif", tags: ["quiet"] },

  { name: "Parser Safe", category: "ats-friendly", layout: "single", primary: "#000000", secondary: "#262626", accent: "#525252", background: "#ffffff", sectionStyle: "underline", headingFont: "Arial, sans-serif", tags: ["parser"] },
  { name: "HR Standard", category: "ats-friendly", layout: "two-column", primary: "#171717", secondary: "#404040", accent: "#737373", background: "#ffffff", sectionStyle: "minimal", headingFont: "Verdana, sans-serif", tags: ["hr"] },
  { name: "Workday Ready", category: "ats-friendly", layout: "single", primary: "#0a0a0a", secondary: "#303030", accent: "#606060", background: "#ffffff", sectionStyle: "bar", headingFont: "Arial, sans-serif", tags: ["enterprise"] },

  { name: "VP Leadership", category: "executive", layout: "header-banner", primary: "#0c0a09", secondary: "#292524", accent: "#a8a29e", background: "#ffffff", sectionStyle: "bar", headingFont: "Georgia, serif", tags: ["vp"] },
  { name: "Chairman Suite", category: "executive", layout: "sidebar-left", primary: "#1c1917", secondary: "#44403c", accent: "#d6d3d1", background: "#fafaf9", sectionStyle: "boxed", headingFont: "Georgia, serif", tags: ["chairman"] },
  { name: "Global Exec", category: "executive", layout: "single", primary: "#0f172a", secondary: "#1e293b", accent: "#94a3b8", background: "#ffffff", sectionStyle: "underline", headingFont: "Georgia, serif", tags: ["global"] },

  { name: "Scholarship", category: "student", layout: "single", primary: "#4338ca", secondary: "#6366f1", accent: "#c7d2fe", background: "#ffffff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["scholarship"] },
  { name: "Co-op Ready", category: "student", layout: "two-column", primary: "#0f766e", secondary: "#14b8a6", accent: "#99f6e4", background: "#ffffff", sectionStyle: "underline", headingFont: "system-ui, sans-serif", tags: ["co-op"] },
  { name: "Fresh Grad", category: "student", layout: "header-banner", primary: "#c2410c", secondary: "#ea580c", accent: "#fed7aa", background: "#fff7ed", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["graduate"] },

  { name: "Wide Split", category: "two-column", layout: "two-column", primary: "#312e81", secondary: "#4f46e5", accent: "#c7d2fe", background: "#ffffff", sectionStyle: "underline", headingFont: "system-ui, sans-serif", tags: ["wide"] },
  { name: "Compact Duo", category: "two-column", layout: "sidebar-left", primary: "#064e3b", secondary: "#047857", accent: "#6ee7b7", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["compact"] },
  { name: "Pro Split", category: "two-column", layout: "sidebar-right", primary: "#881337", secondary: "#9f1239", accent: "#fda4af", background: "#ffffff", sectionStyle: "boxed", headingFont: "system-ui, sans-serif", tags: ["pro"] },
  { name: "Magazine Duo", category: "two-column", layout: "two-column", primary: "#1e1b4b", secondary: "#3730a3", accent: "#a5b4fc", background: "#faf5ff", sectionStyle: "pill", headingFont: "Georgia, serif", tags: ["magazine"] },

  { name: "Lime Pop", category: "colorful", layout: "single", primary: "#3f6212", secondary: "#65a30d", accent: "#bef264", background: "#f7fee7", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["lime"] },
  { name: "Berry Blast", category: "colorful", layout: "sidebar-left", primary: "#831843", secondary: "#9d174d", accent: "#f9a8d4", background: "#fdf2f8", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["berry"] },
  { name: "Skyline", category: "colorful", layout: "header-banner", primary: "#0c4a6e", secondary: "#0369a1", accent: "#7dd3fc", background: "#e0f2fe", sectionStyle: "boxed", headingFont: "system-ui, sans-serif", tags: ["sky"], popular: true },
];
