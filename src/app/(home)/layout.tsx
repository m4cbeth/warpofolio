import { Footer } from "@/components/Footer";
import { StickyHeader } from "@/components/StickyHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-fit bg-gray-200 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <StickyHeader />
      {children}
      <Footer />
    </div>
  );
}
