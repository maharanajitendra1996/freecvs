import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, TRUST_STATS } from "@/data/testimonials";

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-zinc-200 text-zinc-200"}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="border-y border-zinc-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#5b4d8c]">Trusted by job seekers</p>
          <h2 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Loved by professionals worldwide
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Real stories from people who built their resume on ResumeForge and landed interviews faster.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-[#1a122e] sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="relative flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-indigo-100" aria-hidden />
              <StarRating rating={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {t.highlight && (
                <p className="mt-3 inline-flex w-fit rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  {t.highlight}
                </p>
              )}
              <footer className="mt-5 flex items-center gap-3 border-t border-zinc-200/80 pt-4">
                <Avatar name={t.name} color={t.avatarColor} />
                <div>
                  <cite className="not-italic font-semibold text-zinc-900">{t.name}</cite>
                  <p className="text-xs text-zinc-500">
                    {t.role} · {t.location}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-zinc-400">
          Reviews from ResumeForge users · Updated May 2026
        </p>
      </div>
    </section>
  );
}
