import Link from "next/link";
import {
  ArrowRight,
  Download,
  FileText,
  Layout,
  Shield,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { HeroSection } from "@/components/home/hero-section";
import { TemplateCard } from "@/components/templates/template-card";
import { TestimonialsSection } from "@/components/home/testimonials-section";
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

const features = [
  {
    icon: Sparkles,
    title: `${TEMPLATE_COUNT} Free Templates`,
    desc: "Every template is 100% free. No paywalls, no trials, no credit card.",
  },
  {
    icon: Download,
    title: "Unlimited PDF & DOC",
    desc: "Download as many times as you need in PDF or Word format.",
  },
  {
    icon: Shield,
    title: "No Watermarks",
    desc: "Your resume is yours alone — we never brand your downloads.",
  },
  {
    icon: Layout,
    title: "ATS-Friendly Options",
    desc: "Clean layouts that pass applicant tracking systems.",
  },
];

const steps = [
  { n: "1", title: "Choose a template", desc: `Browse ${TEMPLATE_COUNT} designs sorted by category — professional, modern, student, and more.` },
  { n: "2", title: "Add or import your info", desc: "Type your details, upload an existing PDF/DOCX resume, or load sample data — fields fill automatically." },
  { n: "3", title: "Customize & preview", desc: "See changes live. Switch templates anytime without losing your content." },
  { n: "4", title: "Download unlimited", desc: "Export PDF or DOC as often as you like. Your draft is saved automatically in your browser." },
];

const faqs = [
  {
    q: "Is ResumeForge really free?",
    a: `Yes. All ${TEMPLATE_COUNT} templates are free forever with unlimited PDF and DOC downloads. No hidden fees.`,
  },
  {
    q: "Do I need an account to download?",
    a: "No account needed. Pick any template, fill in your details, and download PDF or DOC instantly — as many times as you want.",
  },
  {
    q: "Can I upload my existing resume?",
    a: "Yes. Upload a PDF or Word (.docx) file and we extract your contact info, experience, education, and skills into the template automatically.",
  },
  {
    q: "What file formats are supported?",
    a: "Import: PDF, DOC, DOCX. Download: PDF (print-ready) or DOC (Microsoft Word compatible).",
  },
  {
    q: "Are the resumes ATS-friendly?",
    a: "Yes. We offer dedicated ATS-friendly templates with clean structure and readable fonts for applicant tracking systems.",
  },
];

export default function HomePage() {
  const popular = getPopularTemplates().slice(0, 8);

  return (
    <SiteShell>
      <HeroSection templateCount={TEMPLATE_COUNT} />

      <section id="how-it-works" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-600 sm:text-base">
            Create a professional resume in four simple steps
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="rounded-2xl border border-zinc-100 bg-white p-5 text-center shadow-sm sm:p-6">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#1a122e] text-lg font-bold text-white">
                  {step.n}
                </div>
                <h3 className="mt-4 font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ec]/60 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">What&apos;s included — all free</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm sm:p-6">
                <f.icon className="h-7 w-7 text-[#1a122e] sm:h-8 sm:w-8" />
                <h3 className="mt-3 font-semibold sm:mt-4">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Popular templates</h2>
              <p className="mt-1 text-sm text-zinc-600 sm:text-base">Start with a top-rated design</p>
            </div>
            <Link href="/templates" className="text-sm font-semibold text-[#1a122e] hover:underline">
              View all {TEMPLATE_COUNT} →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {popular.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="border-y border-zinc-100 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-xl font-bold sm:mb-8 sm:text-2xl">Browse by category</h2>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/templates?category=${cat}`}
                className="shrink-0 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:border-[#1a122e] hover:bg-[#1a122e] hover:text-white"
              >
                {CATEGORY_LABELS[cat]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-zinc-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
          <dl className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
                <dt className="font-semibold text-zinc-900">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#1a122e] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-normal sm:text-4xl">Ready to land your dream job?</h2>
          <p className="mt-4 text-sm text-zinc-300 sm:text-base">Pick a template and build your resume in minutes.</p>
          <Link
            href="/templates"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#1a122e] hover:bg-zinc-100 sm:w-auto"
          >
            Browse all templates
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
