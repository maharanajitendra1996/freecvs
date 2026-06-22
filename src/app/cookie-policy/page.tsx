import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Cookie Policy | FreeCVs",
  description:
    "FreeCVs cookie policy. Learn about cookies and tracking used on our free resume builder.",
  robots: { index: false },
};

export default function CookiePolicyPage() {
  return (
    <SiteShell>
      <article className="prose prose-zinc mx-auto max-w-3xl px-4 py-12">
        <h1>Cookie Policy</h1>
        <p>
          FreeCVs uses browser local storage to save your editor draft. No
          login cookies are used.
        </p>
        <h2>Managing cookies</h2>
        <p>
          You can disable cookies in your browser settings. Some features may
          not work without essential cookies.
        </p>
      </article>
    </SiteShell>
  );
}
