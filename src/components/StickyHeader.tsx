"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { MainNav } from "@/components/MainNav";
import { JwBadge } from "@/components/JWBadge";
import { UserProfile } from "@/components/UserProfile";
import Link from "next/link";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";


export function StickyHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isAuthenticated } = useAuth();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/85 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">

        {/* BADGE FOR MOBILE, WITH NAV DROPDOWN ON TAP */}
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <button type="button" aria-label="Open menu">
              <JwBadge className="block sm:hidden" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-2">
            {/* Render MainNav vertically inside dropdown */}
            <MainNav orientation="vertical" onLinkClick={() => setMenuOpen(false)} />
          </DropdownMenuContent>
        </DropdownMenu>

        {/*  BADGE FOR NOT MOBILE, LINK TO #HOME */}
        <Link href="/#home">
        <JwBadge className="hidden sm:block " />        
        </Link>

        {/* MAIN NAV */}
        <div className="flex-1 hidden sm:flex justify-end pr-10">
          <MainNav />
        </div>
        {/* EMPTY SPACER DIV FOR SM SCREENS TO MAKE NAV LINKS ALIGN TO THE RIGHT */}
        <div className="flex-1 sm:hidden"></div>

        {/* USER PROFILE */}
        <div className="flex items-center mr-5">
        {isAuthenticated && <UserProfile />}
        {!isAuthenticated && <Link href="/login">Login</Link>}
          {/* {JSON.stringify(user)} */}
        </div>
        {/* THEME TOGGLE */}
        <ThemeToggle />

      </div>
    </header>
  );
}
