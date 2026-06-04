import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "80+ Free Resume Templates | Choose Your Perfect Design",
  description:
    "Browse 80+ free, professional resume templates across 9 categories. Choose from modern, ATS-friendly, creative, student, and executive designs. Download unlimited PDFs.",
  keywords: [
    "resume templates",
    "free resume templates",
    "CV templates",
    "resume designs",
    "professional resume template",
    "ATS-friendly resume template",
    "modern resume template",
    "student resume template",
  ],
  openGraph: {
    title: "80+ Free Resume Templates | ResumeForge",
    description:
      "Discover professional resume templates for every industry and experience level. All completely free with unlimited downloads.",
    type: "website",
  },
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          Loading templates...
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
