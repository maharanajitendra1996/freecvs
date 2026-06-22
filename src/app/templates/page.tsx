"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { TemplateCard } from "@/components/templates/template-card";
import { ResumeImport } from "@/components/resume/resume-import";
import { SectionAd } from "@/components/ads/section-ad";
import { RESUME_TEMPLATES, TEMPLATE_COUNT } from "@/data/templates";
import {
  CATEGORY_LABELS,
  CATEGORY_DESCRIPTIONS,
  type TemplateCategory,
} from "@/types/template";

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as TemplateCategory[];

export default function TemplatesPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as TemplateCategory | null;
  const [category, setCategory] = useState<TemplateCategory | "all">(
    initialCategory && ALL_CATEGORIES.includes(initialCategory) ? initialCategory : "all",
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = RESUME_TEMPLATES;
    if (category !== "all") list = list.filter((t) => t.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.includes(q)) ||
          CATEGORY_LABELS[t.category].toLowerCase().includes(q),
      );
    }
    return list;
  }, [category, query]);

  return (
    <SiteShell>
      <div className="bg-[#f4f1ec] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-normal text-zinc-950 sm:text-4xl lg:text-5xl">
            Resume templates
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 sm:text-base">
            {TEMPLATE_COUNT} professionally designed, 100% free templates. Unlimited PDF & DOC downloads.
          </p>
          {/* <div id="import" className="mt-6 scroll-mt-28">
            <ResumeImport variant="card" />
          </div> */}
          <div className="relative mt-5 max-w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="search"
              placeholder="Search templates..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-base shadow-sm focus:border-[#1a122e] focus:outline-none focus:ring-2 focus:ring-[#1a122e]/20"
            />
          </div>
        </div>
      </div>

      <SectionAd />
      <div className="sticky top-16 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md lg:hidden">
        <div className="flex gap-2 overflow-x-auto px-4 py-3">
          <button
            onClick={() => setCategory("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
              category === "all" ? "bg-[#1a122e] text-white" : "bg-zinc-100 text-zinc-700"
            }`}
          >
            All ({TEMPLATE_COUNT})
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                category === cat ? "bg-[#1a122e] text-white" : "bg-zinc-100 text-zinc-700"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          <aside className="hidden shrink-0 lg:block lg:w-52">
            <nav className="sticky top-24 space-y-0.5">
              <button
                onClick={() => setCategory("all")}
                className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  category === "all" ? "bg-[#1a122e] text-white" : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                All ({TEMPLATE_COUNT})
              </button>
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    category === cat ? "bg-[#1a122e] text-white" : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 flex-1">
            {category !== "all" && (
              <p className="mb-4 text-sm text-zinc-500">{CATEGORY_DESCRIPTIONS[category]}</p>
            )}
            <p className="mb-4 text-sm font-medium text-zinc-500">
              {filtered.length} template{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((t) => (
                <TemplateCard key={t.id} template={t} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="py-16 text-center text-zinc-500">No templates match your search.</p>
            )}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
