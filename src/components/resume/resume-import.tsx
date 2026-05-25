"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Loader2, FileCheck, AlertCircle } from "lucide-react";
import { extractTextFromResumeFile, ACCEPTED_RESUME_EXTENSIONS } from "@/lib/extract-resume-file";
import { parseResumeText, hasParsedContent } from "@/lib/parse-resume-text";
import { useResumeStore } from "@/store/resume-store";
import { RESUME_TEMPLATES } from "@/data/templates";
import clsx from "clsx";

type ResumeImportProps = {
  /** When set, import fills editor for this template. When omitted, redirects to editor after import. */
  templateId?: string;
  variant?: "button" | "card" | "compact";
  className?: string;
};

export function ResumeImport({ templateId, variant = "button", className }: ResumeImportProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const setData = useResumeStore((s) => s.setData);
  const setTemplateId = useResumeStore((s) => s.setTemplateId);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleFile(file: File) {
    setLoading(true);
    setMessage(null);
    try {
      const text = await extractTextFromResumeFile(file);
      if (!text.trim()) {
        throw new Error("No readable text found in this file. Try a text-based PDF or DOCX.");
      }

      const parsed = parseResumeText(text);
      if (!hasParsedContent(parsed)) {
        throw new Error(
          "We could not detect resume sections. Try a simpler layout or fill fields manually after import.",
        );
      }

      setData(parsed);

      const targetId =
        templateId ?? useResumeStore.getState().templateId ?? RESUME_TEMPLATES[0]?.id;
      if (targetId) setTemplateId(targetId);

      const name = parsed.contact.fullName || "your resume";
      setMessage({
        type: "success",
        text: `Imported ${name} — template updated with your details.`,
      });

      if (!templateId && targetId) {
        setTimeout(() => router.push(`/editor/${targetId}`), 600);
      }
    } catch (e) {
      setMessage({
        type: "error",
        text: e instanceof Error ? e.message : "Import failed. Please try another file.",
      });
    } finally {
      setLoading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  const input = (
    <input
      ref={inputRef}
      type="file"
      accept={ACCEPTED_RESUME_EXTENSIONS}
      className="sr-only"
      onChange={onInputChange}
      disabled={loading}
    />
  );

  if (variant === "card") {
    return (
      <div
        className={clsx(
          "rounded-2xl border-2 border-dashed border-zinc-300 bg-white p-6 transition-colors hover:border-[#1a122e]/40 hover:bg-[#f4f1ec]/30",
          className,
        )}
      >
        {input}
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1a122e]/10 text-[#1a122e]">
            <Upload className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-zinc-900">Import existing resume</h3>
            <p className="mt-1 text-sm text-zinc-600">
              Upload PDF or Word (.docx) — we&apos;ll fill the template automatically from your CV data.
            </p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={loading}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1a122e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2d1f47] disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
              {loading ? "Reading your resume…" : "Upload resume"}
            </button>
          </div>
        </div>
        {message && <StatusMessage message={message} className="mt-4" />}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={className}>
        {input}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-60 sm:text-sm"
        >
          {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Upload className="h-3.5 w-3.5" />}
          Import CV
        </button>
        {message && <StatusMessage message={message} className="mt-2" />}
      </div>
    );
  }

  return (
    <div className={className}>
      {input}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={loading}
        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 hover:border-[#1a122e] hover:bg-[#f4f1ec] disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
        {loading ? "Importing…" : "Import resume"}
      </button>
      {message && <StatusMessage message={message} className="mt-2 max-w-xs" />}
    </div>
  );
}

function StatusMessage({
  message,
  className,
}: {
  message: { type: "success" | "error"; text: string };
  className?: string;
}) {
  const Icon = message.type === "success" ? FileCheck : AlertCircle;
  return (
    <p
      className={clsx(
        "flex items-start gap-2 text-xs sm:text-sm",
        message.type === "success" ? "text-green-700" : "text-red-600",
        className,
      )}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message.text}</span>
    </p>
  );
}
