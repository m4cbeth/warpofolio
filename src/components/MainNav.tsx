"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function MainNav() {
  return (
    <nav className="flex items-center gap-6 md:flex">
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
        className="hidden sm:block     rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
        Get a Free Site Audit
      </a>
    </nav>
  );
}


