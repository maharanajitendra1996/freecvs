import Link from "next/link";
import type { ResumeTemplate } from "@/types/template";
import { CATEGORY_LABELS } from "@/types/template";
import { Star } from "lucide-react";
import { TemplateThumbnail } from "./template-thumbnail";

interface TemplateCardProps {
  template: ResumeTemplate;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link
      href={`/editor/${template.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-xl active:scale-[0.99]"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-50">
        <TemplateThumbnail template={template} />
        {template.popular && (
          <span className="absolute right-2 top-2 z-10 flex items-center gap-1 rounded-full bg-amber-400/95 px-2 py-0.5 text-[10px] font-bold text-amber-950 shadow-sm">
            <Star className="h-3 w-3 fill-amber-950 text-amber-950" />
            Popular
          </span>
        )}
        <div className="absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="w-full rounded-lg bg-white py-2.5 text-center text-xs font-bold text-[#1a122e] shadow-lg">
            Use template →
          </span>
        </div>
      </div>
      <div className="shrink-0 border-t border-zinc-100 px-3 py-3 sm:px-4">
        <h3 className="truncate text-sm font-semibold text-zinc-900 sm:text-base">{template.name}</h3>
        <p className="text-xs text-zinc-500">{CATEGORY_LABELS[template.category]}</p>
      </div>
    </Link>
  );
}
