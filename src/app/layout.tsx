import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Calgary Web Dev + SEO for Advisors | JW";
const siteDescription =
  "Fix your website, Win more clients. I modernize, optimize, and turn traffic into booked calls for Calgary financial advisors.";
const siteUrl = "https://www.jarenwhitehouse.com/";
const ogImage = "https://www.jarenwhitehouse.com/brain-digital.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jaren Whitehouse Web Development & SEO",
  url: siteUrl,
  image: ogImage,
  telephone: "+0-403-000-0000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "City",
    name: "Calgary",
  },
  sameAs: [
    "https://www.linkedin.com/in/jaren-whitehouse/",
    // "https://www.youtube.com/@example",
  ],
  priceRange: "$$",
  serviceType: ["Web Development", "SEO", "Copywriting", "Digital Marketing", "Google Ads Managment", "Google Business Profile Optimization"],
  description:
    "Webdev/SEO/copywriter helping Calgary financial advisors modernize, optimize, and convert website traffic into booked calls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics gaId="G-RPDGXS3WCB"  />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <ThemeProvider>
          <div className="min-h-fit bg-gray-200 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
