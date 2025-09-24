"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/85 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 font-semibold text-white dark:bg-white dark:text-slate-900">
            JW
          </div>
          <span className="sr-only">JW</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/#home" className="text-sm hover:text-slate-900/80 dark:hover:text-slate-100/80">
            Home
          </Link>
          <a href="/services" className="text-sm hover:text-slate-900/80 dark:hover:text-slate-100/80">
            Services
          </a>
          <a href="#contact" className="text-sm hover:text-slate-900/80 dark:hover:text-slate-100/80">
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Book a Free Site Audit
          </a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
