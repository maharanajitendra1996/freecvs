import { Suspense } from "react";

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center">Loading templates...</div>}>{children}</Suspense>;
}
