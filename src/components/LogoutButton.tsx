"use client";

import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const { logout, user } = useAuth();

  if (!user) return null;

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </button>
  );
}
