import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionAd } from "@/components/ads/section-ad";

export const metadata: Metadata = {
  title: "Contact FreeCVs | Get Help with Your Resume",
  description:
    "Get in touch with FreeCVs support. Have questions about our free resume builder? Contact us anytime.",
  keywords: ["contact", "support", "help", "resume builder help"],
  openGraph: {
    title: "Contact FreeCVs",
    description: "Reach out to the FreeCVs team. We're here to help!",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-lg px-4 py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-zinc-600">
          For support or privacy requests, email us at:
        </p>
        <p className="mt-4">
          <a
            href="mailto:hackerboy4658@gmail.com"
            className="font-medium text-indigo-600 hover:underline"
          >
            hackerboy4658@gmail.com
          </a>
        </p>
        <p className="mt-6 text-sm text-zinc-500">
          We typically respond within 2 business days.
        </p>
        <SectionAd />
      </div>
    </SiteShell>
  );
}
