"use client";

import Link from "next/link";
import { ReactElement } from "react";

type JWBadgeProps = {
  className: string;
}

export function JwBadge({className}: JWBadgeProps): ReactElement {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 font-semibold text-white dark:bg-white dark:text-slate-900">
        JW
      </div>
      <span className="sr-only">JW</span>
    </div>
  );
}


