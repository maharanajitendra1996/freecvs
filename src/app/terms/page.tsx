import { SiteShell } from "@/components/layout/site-shell";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <SiteShell>
      <article className="prose prose-zinc mx-auto max-w-3xl px-4 py-12">
        <h1>Terms of Service</h1>
        <p className="text-sm text-zinc-500">Last updated: May 21, 2026</p>
        <p>By using ResumeForge, you agree to these terms.</p>
        <h2>Free service</h2>
        <p>All 50 resume templates and unlimited PDF/DOC downloads are provided free of charge. We reserve the right to modify features with notice.</p>
        <h2>Your content</h2>
        <p>You retain ownership of resume content you create. You are responsible for accuracy of information in your resumes.</p>
        <h2>Acceptable use</h2>
        <p>You may not use the service for illegal purposes, spam, or attempts to disrupt our infrastructure.</p>
        <h2>Disclaimer</h2>
        <p>ResumeForge is provided &quot;as is&quot; without warranties. We are not responsible for hiring outcomes resulting from use of our templates.</p>
        <h2>Contact</h2>
        <p>See our <a href="/contact">contact page</a> for support.</p>
      </article>
    </SiteShell>
  );
}
