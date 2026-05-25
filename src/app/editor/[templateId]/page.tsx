"use client";

import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Download, FileDown, Loader2, Sparkles } from "lucide-react";
import { getTemplateById } from "@/data/templates";
import { useResumeStore } from "@/store/resume-store";
import { ResumePreview } from "@/components/resume/resume-preview";
import { ResumeEditorForm } from "@/components/resume/resume-editor-form";
import { exportToPdf, exportToDoc } from "@/lib/export";
import { ResumeImport } from "@/components/resume/resume-import";

export default function EditorPage({ params }: { params: Promise<{ templateId: string }> }) {
  const { templateId } = use(params);
  const template = getTemplateById(templateId);
  const { data, setData, setTemplateId, loadSampleData, useSampleData } = useResumeStore();
  const [downloading, setDownloading] = useState<"pdf" | "doc" | null>(null);
  const [downloadCount, setDownloadCount] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!template) return;
    setTemplateId(template.id);
  }, [template, setTemplateId]);

  if (!template) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-zinc-600">Template not found.</p>
        <Link href="/templates" className="mt-4 text-indigo-600 hover:underline">
          Browse templates
        </Link>
      </div>
    );
  }

  const filename = (data.contact.fullName || "resume").replace(/\s+/g, "_").toLowerCase();

  async function handlePdfDownload() {
    const el = document.getElementById("resume-preview");
    if (!el) return;
    setDownloading("pdf");
    try {
      await exportToPdf(el, filename);
      setDownloadCount((c) => c + 1);
    } finally {
      setDownloading(null);
    }
  }

  async function handleDocDownload() {
    setDownloading("doc");
    try {
      await exportToDoc(data, filename);
      setDownloadCount((c) => c + 1);
    } finally {
      setDownloading(null);
    }
  }

  return (
    <div className="flex h-screen flex-col bg-zinc-100">
      <header className="flex shrink-0 flex-col gap-2 border-b border-zinc-200 bg-white px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-0 sm:h-14">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <Link href="/templates" className="shrink-0 text-xs font-medium text-zinc-600 hover:text-[#1a122e] sm:text-sm">
            ← Back
          </Link>
          <span className="truncate text-sm font-semibold text-zinc-900">{template.name}</span>
          <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-800 sm:text-xs">Free</span>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <ResumeImport templateId={template.id} variant="compact" />
          {!useSampleData && (
            <button
              onClick={loadSampleData}
              className="hidden items-center gap-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 sm:flex"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Sample
            </button>
          )}
          <button
            onClick={handleDocDownload}
            disabled={!!downloading}
            className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-50"
          >
            {downloading === "doc" ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
            DOC
          </button>
          <button
            onClick={handlePdfDownload}
            disabled={!!downloading}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#1a122e] px-3 py-2 text-sm font-medium text-white hover:bg-[#2d1f47] disabled:opacity-50 sm:flex-none sm:px-4"
          >
            {downloading === "pdf" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            PDF
          </button>
        </div>
      </header>

      <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
        <aside className="max-h-[45vh] w-full shrink-0 overflow-y-auto border-b border-zinc-200 bg-white p-4 sm:max-h-[50vh] lg:max-h-none lg:max-w-md lg:border-b-0 lg:border-r lg:p-6">
          <ResumeImport templateId={template.id} variant="card" className="mb-5" />
          <ResumeEditorForm data={data} onChange={setData} />
        </aside>

        <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-auto p-3 sm:p-6 lg:p-8" ref={previewRef}>
            <div className="mx-auto max-w-[210mm] scale-[0.85] origin-top sm:scale-100">
              <ResumePreview data={data} template={template} id="resume-preview" />
            </div>
          </div>
          {downloadCount > 0 && (
            <p className="border-t border-zinc-200 bg-white px-4 py-2 text-center text-xs text-zinc-500">
              Downloaded {downloadCount} time{downloadCount !== 1 ? "s" : ""} this session — unlimited downloads, always free
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
