"use client";

import Link from "next/link";

type MainNavProps = {
  orientation?: "horizontal" | "vertical";
  onLinkClick?: () => void;
}

export function MainNav({ orientation = "horizontal", onLinkClick }: MainNavProps) {
  const baseLink = "hover:text-slate-900/80 dark:hover:text-slate-100/80";
  const isVertical = orientation === "vertical";
  return (
    <nav className={isVertical ? "flex flex-col text-lg items-center gap-3" : "flex text-md items-center gap-6"}>
      <Link href="/#home" className={baseLink} onClick={onLinkClick}>
        Home
      </Link>
      <a href="/services" className={baseLink} onClick={onLinkClick}>
        Services
      </a>
      <a href="#contact" className={baseLink} onClick={onLinkClick}>
        Contact
      </a>
      <a
        href="#contact"
        className="hidden sm:block rounded-md bg-slate-900 px-3 py-2 font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        onClick={onLinkClick}
      >
        Get a Free Site Audit
      </a>
    </nav>
  );
}


