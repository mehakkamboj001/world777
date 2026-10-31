import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteSEO, generateStructuredData } from "@/config/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: siteSEO.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  metadataBase: new URL(siteSEO.canonicalUrl),
  title: {
    default: siteSEO.defaultTitle,
    template: siteSEO.titleTemplate,
  },
  description: siteSEO.description,
  keywords: siteSEO.keywords,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: { canonical: siteSEO.canonicalUrl },
  openGraph: {
    title: siteSEO.defaultTitle,
    description: siteSEO.description,
    url: siteSEO.canonicalUrl,
    siteName: siteSEO.siteName,
    locale: siteSEO.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { websiteSchema, organizationSchema, faqSchema } = generateStructuredData();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1b2025] text-slate-100 min-h-screen selection:bg-emerald-700/40 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
