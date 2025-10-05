import type { ReactNode } from "react";
import DemosNav from "@/components/DemosNav";

export default function DemosLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <DemosNav />
      {children}
    </div>
  );
}