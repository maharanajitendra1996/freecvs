import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { TEMPLATE_COUNT } from "@/data/templates";

export const metadata: Metadata = {
  title: "About ResumeForge | Free Resume Builder Mission & Values",
  description:
    "Learn about ResumeForge, the free resume builder trusted by job seekers worldwide. Our mission is to provide free, professional resume and CV templates with unlimited downloads.",
  keywords: [
    "about ResumeForge",
    "free resume builder",
    "resume builder company",
    "our story",
  ],
  openGraph: {
    title: "About ResumeForge | Free Resume Builder",
    description:
      "Discover the story behind ResumeForge, the leading free resume and CV builder with 80+ templates.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">About ResumeForge</h1>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          ResumeForge is a free online resume builder inspired by the best
          features of modern CV tools. We offer {TEMPLATE_COUNT} professional
          resume templates across 9 categories — all completely free with
          unlimited PDF and Word downloads and no watermarks.
        </p>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Your work is saved automatically in your browser — no account
          required. Whether you&apos;re a student, executive, or creative
          professional, we have an ATS-friendly template for you.
        </p>
      </article>
    </SiteShell>
  );
}
