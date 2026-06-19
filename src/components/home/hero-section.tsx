import Link from "next/link";
import { Star, Mail, Phone, MapPin, Link2, Globe } from "lucide-react";

export function HeroSection({ templateCount }: { templateCount: number }) {
  return (
    <section className="relative overflow-hidden bg-[#f4f1ec]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20 xl:gap-16">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 sm:text-sm">
            Free online resume builder
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            Build a job-winning resume for free
          </h1>
          <div className="mt-6 space-y-1 text-base text-zinc-700 sm:text-lg">
            <p>Your resume is 100% free forever.</p>
            <p>Unlimited downloads. No hidden fees.</p>
            <p>Yes, really 🚀</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Link
              href="/templates"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1a122e] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-zinc-900/20 transition hover:bg-[#2d1f47] sm:w-auto"
            >
              Get started for free ✨
            </Link>
            {/* <Link
              href="/templates#import"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#1a122e]/20 bg-white px-8 py-3.5 text-base font-semibold text-[#1a122e] transition hover:bg-white/80 sm:w-auto"
            >
              Upload existing resume ↑
            </Link> */}
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            {templateCount} templates · Export to PDF · No sign-up
          </p>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-lg lg:mt-0 lg:max-w-none">
          <div className="relative mx-auto w-full max-w-md rotate-0 sm:max-w-lg lg:ml-auto lg:max-w-xl lg:rotate-1">
            <div className="overflow-hidden rounded-sm bg-white shadow-2xl shadow-zinc-900/15 ring-1 ring-zinc-900/5">
              <div className="flex min-h-[420px] sm:min-h-[480px]">
                <aside className="w-[38%] shrink-0 bg-[#2d3142] px-3 py-5 text-white sm:px-4 sm:py-6">
                  <div className="mx-auto h-14 w-14 overflow-hidden rounded-full bg-zinc-400 sm:h-16 sm:w-16">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-300 to-zinc-500 text-lg font-medium text-white">
                      BW
                    </div>
                  </div>
                  <h2 className="mt-3 text-center font-serif text-sm font-semibold leading-tight sm:text-base">
                    Brian T. Wayne
                  </h2>
                  <p className="mt-1 text-center text-[9px] uppercase tracking-wide text-zinc-300 sm:text-[10px]">
                    Senior Product Manager
                  </p>
                  <ul className="mt-4 space-y-2 text-[8px] text-zinc-300 sm:text-[9px]">
                    <li className="flex items-center gap-1.5">
                      <Mail className="h-2.5 w-2.5 shrink-0" />
                      <span className="truncate">brian@email.com</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Phone className="h-2.5 w-2.5 shrink-0" />
                      +1 415 555 0123
                    </li>
                    <li className="flex items-center gap-1.5">
                      <MapPin className="h-2.5 w-2.5 shrink-0" />
                      San Francisco, CA
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Link2 className="h-2.5 w-2.5 shrink-0" />
                      linkedin.com/in/brian
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Globe className="h-2.5 w-2.5 shrink-0" />
                      brianwayne.dev
                    </li>
                  </ul>
                  <div className="mt-5">
                    <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-400 sm:text-[9px]">Profile</p>
                    <p className="mt-1.5 text-[7px] leading-relaxed text-zinc-300 sm:text-[8px]">
                      Product leader with 8+ years driving growth at SaaS companies. Expert in roadmaps, analytics, and cross-functional teams.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-400">Languages</p>
                    <div className="mt-2 space-y-1.5">
                      {["English", "Spanish"].map((lang) => (
                        <div key={lang} className="flex items-center justify-between text-[7px] sm:text-[8px]">
                          <span>{lang}</span>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((d) => (
                              <span key={d} className="h-1.5 w-1.5 rounded-full bg-white/80" />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
                <main className="flex-1 px-3 py-5 sm:px-5 sm:py-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wide text-zinc-800 sm:text-[10px]">Work Experience</p>
                    <div className="mt-2 border-l-2 border-zinc-200 pl-2">
                      <p className="text-[9px] font-bold text-zinc-900 sm:text-[10px]">Senior Product Manager</p>
                      <p className="text-[8px] text-zinc-600">TechCorp · 2021 – Present</p>
                      <ul className="mt-1.5 list-disc space-y-0.5 pl-3 text-[7px] leading-snug text-zinc-600 sm:text-[8px]">
                        <li>Led product strategy for platform serving 2M+ users</li>
                        <li>Increased activation rate by 34% through onboarding redesign</li>
                        <li>Managed team of 6 PMs and designers</li>
                      </ul>
                    </div>
                    <div className="mt-3 border-l-2 border-zinc-200 pl-2">
                      <p className="text-[9px] font-bold text-zinc-900">Product Manager</p>
                      <p className="text-[8px] text-zinc-600">StartupXYZ · 2018 – 2021</p>
                      <ul className="mt-1 list-disc pl-3 text-[7px] text-zinc-600 sm:text-[8px]">
                        <li>Shipped MVP to $4M ARR in 18 months</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-[9px] font-bold uppercase tracking-wide text-zinc-800">Education</p>
                    <p className="mt-1.5 text-[8px] font-semibold text-zinc-900">B.S. Business Administration</p>
                    <p className="text-[8px] text-zinc-600">UC Berkeley · 2014 – 2018</p>
                  </div>
                </main>
              </div>
            </div>

            <div className="absolute -bottom-4 left-2 z-10 flex items-center gap-3 rounded-xl border border-zinc-100 bg-white px-4 py-3 shadow-lg sm:-bottom-6 sm:left-4">
              <div>
                <p className="text-sm font-semibold text-zinc-900">Andrew Irwin</p>
                <p className="text-xs text-zinc-500">Product Manager</p>
                <div className="mt-1 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#da552f] text-sm font-bold text-white">
                P
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
