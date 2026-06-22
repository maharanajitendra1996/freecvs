"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navLinks = [
  { href: "/templates", label: "Templates" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isEditor = pathname.startsWith("/editor");

  if (isEditor) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a122e] text-white sm:h-9 sm:w-9">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <span className="text-base tracking-tight sm:text-lg">
            Free<span className="text-[#5b4d8c]">CVs</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-[#1a122e]",
                pathname === link.href ? "text-[#1a122e]" : "text-zinc-600",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/templates"
            className="rounded-full bg-[#1a122e] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2d1f47]"
          >
            Get started free
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-zinc-700 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-base font-medium text-zinc-700"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/templates"
            className="mt-2 block rounded-full bg-[#1a122e] py-3.5 text-center text-base font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get started free ✨
          </Link>
        </div>
      )}
    </header>
  );
}
