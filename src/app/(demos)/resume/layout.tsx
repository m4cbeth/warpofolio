import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="min-h-fit bg-gray-200 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            {children}
          </div>
      </body>
    </html>
  );
}
