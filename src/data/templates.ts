import type { ResumeTemplate, TemplateCategory } from "@/types/template";
import { CATEGORY_LABELS } from "@/types/template";
import { EXTRA_THEMES } from "./templates-extra";

const themes: Array<{
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
}> = [
  { name: "Classic Pro", category: "professional", layout: "single", primary: "#1e3a5f", secondary: "#2c5282", accent: "#3182ce", background: "#ffffff", sectionStyle: "underline", headingFont: "Georgia, serif", tags: ["corporate", "classic"] },
  { name: "Navy Executive", category: "executive", layout: "header-banner", primary: "#0f172a", secondary: "#1e293b", accent: "#cbd5e1", background: "#ffffff", sectionStyle: "bar", headingFont: "Georgia, serif", tags: ["leadership"], popular: true },
  { name: "Slate Corporate", category: "professional", layout: "single", primary: "#334155", secondary: "#475569", accent: "#64748b", background: "#f8fafc", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["neutral"] },
  { name: "Harvard Blue", category: "professional", layout: "two-column", primary: "#1d4ed8", secondary: "#3b82f6", accent: "#93c5fd", background: "#ffffff", sectionStyle: "underline", headingFont: "Georgia, serif", tags: ["academic"] },
  { name: "Business Edge", category: "professional", layout: "sidebar-left", primary: "#0c4a6e", secondary: "#0369a1", accent: "#38bdf8", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["business"] },
  { name: "Formal Serif", category: "professional", layout: "single", primary: "#292524", secondary: "#44403c", accent: "#78716c", background: "#ffffff", sectionStyle: "underline", headingFont: "Georgia, serif", tags: ["formal"] },
  { name: "Consulting Pro", category: "executive", layout: "single", primary: "#18181b", secondary: "#27272a", accent: "#71717a", background: "#ffffff", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["consulting"] },
  { name: "Banking Standard", category: "professional", layout: "two-column", primary: "#14532d", secondary: "#166534", accent: "#4ade80", background: "#ffffff", sectionStyle: "boxed", headingFont: "Georgia, serif", tags: ["finance"] },

  { name: "Urban Modern", category: "modern", layout: "single", primary: "#7c3aed", secondary: "#8b5cf6", accent: "#c4b5fd", background: "#ffffff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["tech"], popular: true },
  { name: "Tech Forward", category: "modern", layout: "sidebar-right", primary: "#0891b2", secondary: "#06b6d4", accent: "#67e8f9", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["startup"] },
  { name: "Minimal Dark", category: "modern", layout: "single", primary: "#18181b", secondary: "#3f3f46", accent: "#a1a1aa", background: "#fafafa", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["dark-accent"] },
  { name: "Gradient Pop", category: "modern", layout: "header-banner", primary: "#db2777", secondary: "#ec4899", accent: "#f9a8d4", background: "#ffffff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["bold"] },
  { name: "Clean Sans", category: "modern", layout: "two-column", primary: "#059669", secondary: "#10b981", accent: "#6ee7b7", background: "#ffffff", sectionStyle: "underline", headingFont: "system-ui, sans-serif", tags: ["clean"] },
  { name: "Startup Bold", category: "modern", layout: "sidebar-left", primary: "#ea580c", secondary: "#f97316", accent: "#fdba74", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["startup"] },
  { name: "Digital Native", category: "modern", layout: "single", primary: "#4f46e5", secondary: "#6366f1", accent: "#a5b4fc", background: "#ffffff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["digital"] },
  { name: "Future Frame", category: "modern", layout: "header-banner", primary: "#0d9488", secondary: "#14b8a6", accent: "#5eead4", background: "#ffffff", sectionStyle: "boxed", headingFont: "system-ui, sans-serif", tags: ["innovation"] },

  { name: "Artistic Flow", category: "creative", layout: "sidebar-left", primary: "#be185d", secondary: "#db2777", accent: "#f472b6", background: "#fff1f2", sectionStyle: "pill", headingFont: "Georgia, serif", tags: ["design"] },
  { name: "Designer Portfolio", category: "creative", layout: "two-column", primary: "#7e22ce", secondary: "#9333ea", accent: "#d8b4fe", background: "#faf5ff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["portfolio"], popular: true },
  { name: "Creative Burst", category: "creative", layout: "header-banner", primary: "#c2410c", secondary: "#ea580c", accent: "#fb923c", background: "#ffffff", sectionStyle: "pill", headingFont: "Georgia, serif", tags: ["bold"] },
  { name: "Magazine Style", category: "creative", layout: "single", primary: "#b45309", secondary: "#d97706", accent: "#fbbf24", background: "#ffffff", sectionStyle: "underline", headingFont: "Georgia, serif", tags: ["editorial"] },
  { name: "Visual Story", category: "creative", layout: "sidebar-right", primary: "#0e7490", secondary: "#0891b2", accent: "#22d3ee", background: "#ecfeff", sectionStyle: "boxed", headingFont: "system-ui, sans-serif", tags: ["storytelling"] },
  { name: "Bold Identity", category: "creative", layout: "single", primary: "#4338ca", secondary: "#4f46e5", accent: "#818cf8", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["identity"] },

  { name: "Pure Minimal", category: "minimal", layout: "single", primary: "#171717", secondary: "#404040", accent: "#737373", background: "#ffffff", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["simple"], popular: true },
  { name: "Whitespace", category: "minimal", layout: "single", primary: "#262626", secondary: "#525252", accent: "#a3a3a3", background: "#ffffff", sectionStyle: "underline", headingFont: "system-ui, sans-serif", tags: ["airy"] },
  { name: "Light Touch", category: "minimal", layout: "two-column", primary: "#374151", secondary: "#6b7280", accent: "#9ca3af", background: "#ffffff", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["light"] },
  { name: "Essence", category: "minimal", layout: "single", primary: "#1c1917", secondary: "#57534e", accent: "#a8a29e", background: "#fafaf9", sectionStyle: "minimal", headingFont: "Georgia, serif", tags: ["elegant"] },
  { name: "Mono Clean", category: "minimal", layout: "sidebar-left", primary: "#000000", secondary: "#333333", accent: "#666666", background: "#ffffff", sectionStyle: "underline", headingFont: "ui-monospace, monospace", tags: ["monospace"] },
  { name: "Bare Bones", category: "minimal", layout: "single", primary: "#09090b", secondary: "#3f3f46", accent: "#71717a", background: "#ffffff", sectionStyle: "minimal", headingFont: "system-ui, sans-serif", tags: ["bare"] },

  { name: "ATS Classic", category: "ats-friendly", layout: "single", primary: "#000000", secondary: "#333333", accent: "#555555", background: "#ffffff", sectionStyle: "underline", headingFont: "Arial, sans-serif", tags: ["ats", "single-column"], popular: true },
  { name: "ATS Standard", category: "ats-friendly", layout: "single", primary: "#1a1a1a", secondary: "#404040", accent: "#666666", background: "#ffffff", sectionStyle: "minimal", headingFont: "Arial, sans-serif", tags: ["ats"] },
  { name: "Plain Text Pro", category: "ats-friendly", layout: "single", primary: "#111111", secondary: "#333333", accent: "#555555", background: "#ffffff", sectionStyle: "underline", headingFont: "Times New Roman, serif", tags: ["readable"] },
  { name: "Recruiter Ready", category: "ats-friendly", layout: "single", primary: "#0f0f0f", secondary: "#2d2d2d", accent: "#4a4a4a", background: "#ffffff", sectionStyle: "minimal", headingFont: "Calibri, sans-serif", tags: ["recruiter"] },
  { name: "Simple Scan", category: "ats-friendly", layout: "two-column", primary: "#000000", secondary: "#222222", accent: "#444444", background: "#ffffff", sectionStyle: "underline", headingFont: "Arial, sans-serif", tags: ["scannable"] },
  { name: "Keyword Focus", category: "ats-friendly", layout: "single", primary: "#1e1e1e", secondary: "#3d3d3d", accent: "#5c5c5c", background: "#ffffff", sectionStyle: "bar", headingFont: "Arial, sans-serif", tags: ["keywords"] },

  { name: "C-Suite", category: "executive", layout: "header-banner", primary: "#1c1917", secondary: "#44403c", accent: "#a8a29e", background: "#ffffff", sectionStyle: "bar", headingFont: "Georgia, serif", tags: ["c-suite"] },
  { name: "Boardroom", category: "executive", layout: "sidebar-left", primary: "#172554", secondary: "#1e3a8a", accent: "#93c5fd", background: "#ffffff", sectionStyle: "boxed", headingFont: "Georgia, serif", tags: ["boardroom"] },
  { name: "Director Level", category: "executive", layout: "single", primary: "#422006", secondary: "#78350f", accent: "#d97706", background: "#fffbeb", sectionStyle: "underline", headingFont: "Georgia, serif", tags: ["director"] },

  { name: "Campus Ready", category: "student", layout: "single", primary: "#1d4ed8", secondary: "#2563eb", accent: "#60a5fa", background: "#ffffff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["internship"], popular: true },
  { name: "First Job", category: "student", layout: "two-column", primary: "#047857", secondary: "#059669", accent: "#34d399", background: "#ffffff", sectionStyle: "underline", headingFont: "system-ui, sans-serif", tags: ["entry-level"] },
  { name: "Graduate Pro", category: "student", layout: "sidebar-right", primary: "#6d28d9", secondary: "#7c3aed", accent: "#a78bfa", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["graduate"] },
  { name: "Intern Spotlight", category: "student", layout: "header-banner", primary: "#be123c", secondary: "#e11d48", accent: "#fb7185", background: "#ffffff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["intern"] },

  { name: "Split Pro", category: "two-column", layout: "two-column", primary: "#1e40af", secondary: "#2563eb", accent: "#60a5fa", background: "#ffffff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["split"] },
  { name: "Dual Focus", category: "two-column", layout: "sidebar-left", primary: "#115e59", secondary: "#0f766e", accent: "#2dd4bf", background: "#ffffff", sectionStyle: "underline", headingFont: "system-ui, sans-serif", tags: ["dual"] },
  { name: "Column Master", category: "two-column", layout: "sidebar-right", primary: "#5b21b6", secondary: "#6d28d9", accent: "#a78bfa", background: "#ffffff", sectionStyle: "boxed", headingFont: "system-ui, sans-serif", tags: ["columns"] },
  { name: "Balanced Layout", category: "two-column", layout: "two-column", primary: "#9f1239", secondary: "#be123c", accent: "#fb7185", background: "#ffffff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["balanced"] },

  { name: "Sunset Glow", category: "colorful", layout: "header-banner", primary: "#c026d3", secondary: "#d946ef", accent: "#f0abfc", background: "#fdf4ff", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["vibrant"] },
  { name: "Ocean Breeze", category: "colorful", layout: "sidebar-left", primary: "#0284c7", secondary: "#0ea5e9", accent: "#7dd3fc", background: "#f0f9ff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["blue"] },
  { name: "Forest Fresh", category: "colorful", layout: "single", primary: "#15803d", secondary: "#16a34a", accent: "#86efac", background: "#f0fdf4", sectionStyle: "boxed", headingFont: "system-ui, sans-serif", tags: ["green"] },
  { name: "Coral Dream", category: "colorful", layout: "two-column", primary: "#e11d48", secondary: "#f43f5e", accent: "#fda4af", background: "#fff1f2", sectionStyle: "pill", headingFont: "system-ui, sans-serif", tags: ["warm"], popular: true },
  { name: "Aurora", category: "colorful", layout: "header-banner", primary: "#6366f1", secondary: "#8b5cf6", accent: "#c4b5fd", background: "#faf5ff", sectionStyle: "bar", headingFont: "system-ui, sans-serif", tags: ["gradient-feel"] },
];

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const allThemes = [...themes, ...EXTRA_THEMES];

export const RESUME_TEMPLATES: ResumeTemplate[] = allThemes.map((t, i) => {
  const id = `template-${String(i + 1).padStart(3, "0")}`;
  const slug = slugify(t.name);
  return {
    id,
    name: t.name,
    slug,
    category: t.category,
    layout: t.layout,
    description: `A ${CATEGORY_LABELS[t.category].toLowerCase()} resume template — ${t.name}. Free to use with unlimited PDF & DOC downloads.`,
    tags: t.tags,
    popular: t.popular,
    theme: {
      primary: t.primary,
      secondary: t.secondary,
      accent: t.accent,
      background: t.background,
      text: "#171717",
      muted: "#6b7280",
      headingFont: t.headingFont,
      bodyFont: "system-ui, -apple-system, sans-serif",
      borderRadius: t.sectionStyle === "pill" ? "9999px" : "4px",
      sectionStyle: t.sectionStyle,
    },
  };
});

export const TEMPLATE_COUNT = RESUME_TEMPLATES.length;

export function getTemplateById(id: string): ResumeTemplate | undefined {
  return RESUME_TEMPLATES.find((t) => t.id === id || t.slug === id);
}

export function getTemplatesByCategory(category: TemplateCategory): ResumeTemplate[] {
  return RESUME_TEMPLATES.filter((t) => t.category === category);
}

export function getPopularTemplates(): ResumeTemplate[] {
  return RESUME_TEMPLATES.filter((t) => t.popular);
}
