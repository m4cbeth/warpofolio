"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

type MainNavProps = {
  orientation?: "horizontal" | "vertical";
}

export function MainNav({ orientation = "horizontal" }: MainNavProps) {
  const baseLink = "text-sm hover:text-slate-900/80 dark:hover:text-slate-100/80";
  const isVertical = orientation === "vertical";
  return (
    <nav className={isVertical ? "flex flex-col items-start gap-3" : "flex items-center gap-6"}>
      <Link href="/#home" className={baseLink}>
        Home
      </Link>
      <a href="/services" className={baseLink}>
        Services
      </a>
      <a href="#contact" className={baseLink}>
        Contact
      </a>
      <a
        href="#contact"
        className="hidden sm:block rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Get a Free Site Audit
      </a>
    </nav>
  );
}


