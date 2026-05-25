import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "ResumeForge — Free Resume Templates | 80 Designs, Unlimited Downloads",
    template: "%s | ResumeForge",
  },
  description:
    "Create professional resumes with 80 free templates. Download unlimited PDF & DOC files. No sign-up required. No watermarks.",
  keywords: [
    "free resume templates",
    "resume builder",
    "CV maker",
    "download resume PDF",
    "ATS resume",
  ],
  openGraph: {
    title: "ResumeForge — Free Resume Builder",
    description: "80 free resume templates. Unlimited PDF & DOC downloads.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
