import Link from "next/link";
import { ArrowRight, Download, Layout, Shield, Sparkles } from "lucide-react";
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
  {
    n: "1",
    title: "Choose a template",
    desc: `Browse ${TEMPLATE_COUNT} designs sorted by category — professional, modern, student, and more.`,
  },
  {
    n: "2",
    title: "Add or import your info",
    desc: "Type your details, upload an existing PDF/DOCX resume, or load sample data — fields fill automatically.",
  },
  {
    n: "3",
    title: "Customize & preview",
    desc: "See changes live. Switch templates anytime without losing your content.",
  },
  {
    n: "4",
    title: "Download unlimited",
    desc: "Export PDF or DOC as often as you like. Your draft is saved automatically in your browser.",
  },
];

const faqs = [
  {
    q: "Is FreeCVs really free?",
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
          <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
            How it works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-600 sm:text-base">
            Create a professional resume in four simple steps
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border border-zinc-100 bg-white p-5 text-center shadow-sm sm:p-6"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#1a122e] text-lg font-bold text-white">
                  {step.n}
                </div>
                <h3 className="mt-4 font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ec]/60 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What&apos;s included — all free
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm sm:p-6"
              >
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
              <h2 className="text-2xl font-bold sm:text-3xl">
                Popular templates
              </h2>
              <p className="mt-1 text-sm text-zinc-600 sm:text-base">
                Start with a top-rated design
              </p>
            </div>
            <Link
              href="/templates"
              className="text-sm font-semibold text-[#1a122e] hover:underline"
            >
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

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose prose-sm sm:prose max-w-none">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Build Your Professional Resume Online—Free Resume Builder for
              Everyone
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-700">
              In today's competitive job market, a well-crafted resume is
              essential to landing your dream job. Whether you're a fresh
              graduate, an experienced professional, an engineer, a nurse, or
              anyone seeking employment, creating a professional resume doesn't
              have to be expensive or complicated. FreeCVs is the{" "}
              <strong>best free resume builder 2025</strong>, offering a
              completely free solution to help you create, edit, and download
              your resume or CV online without any watermarks or hidden fees.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-zinc-900">
              The Ultimate Free Resume CV Builder
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-700">
              Our platform combines simplicity with professional design through
              our comprehensive <strong>free resume builder</strong> and{" "}
              <strong>free CV maker</strong>. With over 80 professionally
              designed templates, you can find the perfect style that matches
              your industry and experience level. Need a{" "}
              <strong>free resume for college students</strong>? We have
              dedicated student templates. Looking for an{" "}
              <strong>ATS friendly resume builder</strong>? Our ATS-optimized
              templates ensure your resume passes applicant tracking systems
              without losing its professional appearance.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-zinc-900">
              Templates for Every Career Path
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-700">
              FreeCVs specializes in creating templates for various
              professions. We offer{" "}
              <strong>free resume builder for engineers</strong> with sections
              tailored for technical skills and projects,{" "}
              <strong>free CV maker for nurses</strong> designed specifically
              for healthcare professionals,{" "}
              <strong>free resume for IT professionals</strong> showcasing
              technical expertise, and many more industry-specific options.
              Whether you need a{" "}
              <strong>free resume builder for students</strong>,{" "}
              <strong>free CV maker for freshers</strong>, or a comprehensive
              template for experienced professionals, we have you covered.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-zinc-900">
              Simple, Intuitive Resume Making Online
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-700">
              Wondering <strong>how to make free resume online</strong> or
              asking yourself <strong>where to make free CV</strong>?
              FreeCVs makes it incredibly easy. Simply choose from our
              collection, customize your content, and download. You can also
              import existing resumes—just upload your PDF or Word document, and
              our intelligent system extracts your information automatically.
              Use our <strong>free resume editor online</strong> to make quick
              adjustments and see real-time previews of your changes.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-zinc-900">
              Download Without Limits or Watermarks
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-700">
              One of the biggest advantages of our platform is that you can{" "}
              <strong>create free resume online PDF</strong> and download as
              many times as you need without any watermarks. Whether you want to{" "}
              <strong>download free CV template editable</strong> or export your
              resume in PDF or Word format, it's all completely free. We also
              support the ability to{" "}
              <strong>make CV online free without watermark</strong>, giving you
              professional documents ready to send to employers.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-zinc-900">
              Special Features for Modern Job Seekers
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-700">
              Looking for specific features? We offer{" "}
              <strong>free resume builder with photo</strong> options to add a
              professional headshot,{" "}
              <strong>free resume maker with cover letter</strong> capabilities
              to create complete application packages, and{" "}
              <strong>free one page resume builder</strong> templates for
              concise, impactful presentations. All templates come with a{" "}
              <strong>free simple resume template PDF</strong> format that's
              print-ready and looks great on any device.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-zinc-900">
              Optimized for Every Job Market
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-700">
              Our platform serves job seekers globally. We provide{" "}
              <strong>free resume builder India</strong> with templates
              following Indian hiring conventions,{" "}
              <strong>free CV maker for Indian jobs</strong> optimized for the
              Indian job market, and{" "}
              <strong>free resume format for Indian colleges</strong> suitable
              for entry-level candidates. No matter where you're located or what
              stage of your career you're at, FreeCVs helps you create a
              compelling resume.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-zinc-900">
              Why Choose FreeCVs?
            </h3>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li>
                ✓ <strong>Completely free</strong>—no hidden costs or premium
                memberships
              </li>
              <li>
                ✓ <strong>80+ professional templates</strong> across all
                industries
              </li>
              <li>
                ✓ <strong>No sign-up required</strong>—start creating instantly
              </li>
              <li>
                ✓ <strong>Unlimited downloads</strong> in PDF and Word formats
              </li>
              <li>
                ✓ <strong>ATS-friendly options</strong> to pass applicant
                tracking systems
              </li>
              <li>
                ✓ <strong>No watermarks</strong> on any exported file
              </li>
              <li>
                ✓ <strong>Import existing resumes</strong> for quick updates
              </li>
              <li>
                ✓ <strong>Mobile-friendly interface</strong> for on-the-go
                editing
              </li>
            </ul>

            <p className="mt-6 leading-relaxed text-zinc-700">
              Stop worrying about expensive resume builders and complicated
              software. With FreeCVs, you have access to all the tools you
              need to create a professional, ATS-friendly resume that gets
              results. Whether you're <strong>creating a free resume</strong>,
              building your <strong>free CV</strong>, or using our complete{" "}
              <strong>free resume CV builder</strong>, you're getting the same
              high-quality features that other platforms charge for.
            </p>

            <p className="mt-4 leading-relaxed text-zinc-700">
              Start today and take the first step toward your next job
              opportunity with FreeCVs—the free resume builder trusted by
              job seekers worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-100 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-xl font-bold sm:mb-8 sm:text-2xl">
            Browse by category
          </h2>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6"
              >
                <dt className="font-semibold text-zinc-900">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#1a122e] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-normal sm:text-4xl">
            Ready to land your dream job?
          </h2>
          <p className="mt-4 text-sm text-zinc-300 sm:text-base">
            Pick a template and build your resume in minutes.
          </p>
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
