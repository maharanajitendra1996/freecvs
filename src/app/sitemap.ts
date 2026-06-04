import type { MetadataRoute } from "next";
import { getPopularTemplates, TEMPLATE_COUNT } from "@/data/templates";
import { CATEGORY_LABELS, type TemplateCategory } from "@/types/template";

const categories: TemplateCategory[] = [
  "professional",
  "modern",
  "ats-friendly",
  "student",
  "creative",
  "minimal",
  "executive",
  "two-column",
  "colorful",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://resumeforge.com";
  const lastModified = new Date();

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/templates?category=${cat}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Template pages
  const popularTemplates = getPopularTemplates().slice(0, 20);
  const templatePages: MetadataRoute.Sitemap = popularTemplates.map(
    (template) => ({
      url: `${baseUrl}/editor/${template.id}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }),
  );

  return [...mainPages, ...categoryPages, ...templatePages];
}
