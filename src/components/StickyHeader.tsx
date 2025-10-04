"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { MainNav } from "@/components/MainNav";
import { JwBadge } from "@/components/jwBadge";
import Link from "next/link";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/85 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">

        {/* BADGE FOR MOBILE, WITH NAV DROPDOWN ON TAP */}
        <JwBadge className="block sm:hidden" />

        {/*  BADGE FOR NOT MOBILE, LINK TO #HOME */}
        <Link href="/#home">
        <JwBadge className="hidden sm:block " />        
        </Link>

        <div className="flex-1 flex justify-end pr-10">
          <MainNav />
        </div>
        <ThemeToggle />
        {/* <div className="hidden">
        </div> */}
      </div>
    </header>
  );
}
