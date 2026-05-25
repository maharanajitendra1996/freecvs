import { SiteShell } from "@/components/layout/site-shell";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <article className="prose prose-zinc mx-auto max-w-3xl px-4 py-12">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-zinc-500">Last updated: May 21, 2026</p>
        <p>
          ResumeForge (&quot;we&quot;, &quot;our&quot;) respects your privacy. This policy explains how we collect, use, and protect your information when you use our free resume builder.
        </p>
        <h2>Information we collect</h2>
        <ul>
          <li>Resume content: information you enter in the editor, stored locally in your browser.</li>
          <li>Usage data: pages visited and download actions for improving our service.</li>
        </ul>
        <h2>How we use your data</h2>
        <p>We use your data to provide resume editing and unlimited downloads. We do not sell your personal information.</p>
        <h2>Cookies</h2>
        <p>
          We use browser local storage to save your resume draft. No advertising cookies are used.
        </p>
        <h2>Data retention & deletion</h2>
        <p>Resume drafts stored in your browser can be cleared anytime via browser settings (local storage).</p>
        <h2>Contact</h2>
        <p>Questions? Visit our <a href="/contact">contact page</a>.</p>
      </article>
    </SiteShell>
  );
}
