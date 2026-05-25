import { SiteShell } from "@/components/layout/site-shell";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-lg px-4 py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-zinc-600">
          For support or privacy requests, email us at:
        </p>
        <p className="mt-4">
          <a href="mailto:support@resumeforge.app" className="font-medium text-indigo-600 hover:underline">
            support@resumeforge.app
          </a>
        </p>
        <p className="mt-6 text-sm text-zinc-500">We typically respond within 2 business days.</p>
      </div>
    </SiteShell>
  );
}
