import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { href: "/templates", label: "Resume Templates" },
    { href: "/templates?category=ats-friendly", label: "ATS-Friendly" },
    { href: "/templates?category=student", label: "Student Resumes" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
              <Image
                src="/logo.png"
                alt="FreeCVs Logo"
                width={32}
                height={32}
              />
              FreeCVs
            </Link>
            <p className="mt-3 text-sm text-zinc-500">
              50 free professional resume templates. Unlimited PDF & DOC downloads. No watermarks.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-zinc-500 hover:text-indigo-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} FreeCVs. All rights reserved. All templates are free forever.
        </div>
      </div>
    </footer>
  );
}
