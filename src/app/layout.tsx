import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://FreeCVs.com";
const logoUrl = `${siteUrl}/logo.png`;

export const metadata: Metadata = {
  title: {
    default: "Free Resume Builder & CV Maker | 80 Templates | FreeCVs",
    template: "%s | FreeCVs",
  },
  description:
    "Create a professional resume or CV with FreeCVs's free resume builder. Choose from 80 free templates, no watermark, no sign-up required. Download as PDF or DOC instantly.",
  keywords: [
    "free resume",
    "free CV",
    "free resume CV builder",
    "free resume builder",
    "free CV maker",
    "free resume templates",
    "free resume builder for students",
    "free CV maker for freshers",
    "free resume for college students",
    "free one page resume builder",
    "free ATS friendly resume builder",
    "ATS resume template",
    "free simple resume template PDF",
    "free resume builder for engineers",
    "free CV maker for nurses",
    "free resume for IT professionals",
    "free resume builder India",
    "free CV maker for Indian jobs",
    "free resume format for Indian colleges",
    "how to make free resume online",
    "where to make free CV",
    "best free resume builder 2025",
    "create free resume online PDF",
    "download free CV template editable",
    "make CV online free without watermark",
    "free resume builder with photo",
    "free resume maker with cover letter",
    "free resume editor online",
    "resume maker",
    "CV builder",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Free Resume Builder & CV Maker | 80+ Templates",
    description:
      "Build your professional resume or CV for free with 80+ templates. No watermarks, unlimited downloads. Download as PDF or Word instantly.",
    type: "website",
    url: siteUrl,
    siteName: "FreeCVs",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "FreeCVs - Free Resume and CV Builder",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Resume Builder & CV Maker | 80+ Templates",
    description:
      "Create your professional resume or CV for free with FreeCVs. 80+ templates, no watermarks, unlimited downloads.",
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FreeCVs",
    description:
      "Free resume builder and CV maker with 80+ professional templates",
    url: "https://FreeCVs.com",
    applicationCategory: "DesktopApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2500",
    },
    image: "https://FreeCVs.com/logo.png",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(sntof){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = sntof || {};
s.src = "\/\/tiny-ambition.com\/c.D\/9w6Abj2I5\/lmSDWuQa9RNtzGE\/2rMDTrQs3tMhyI0m3HMFTxY_xvNvDAcK3-";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`,
          }}
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
