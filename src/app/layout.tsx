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
  metadataBase: new URL(siteSEO.canonicalUrl),
  title: {
    default: siteSEO.defaultTitle,
    template: siteSEO.titleTemplate,
  },
  description: siteSEO.description,
  keywords: siteSEO.keywords,
  authors: [{ name: "World777 Gaming Media Network", url: siteSEO.canonicalUrl }],
  creator: "World777 Exchange Team",
  publisher: "World777 International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteSEO.canonicalUrl,
    languages: {
      "en-IN": siteSEO.canonicalUrl,
      "hi-IN": `${siteSEO.canonicalUrl}/hi`,
    },
  },
  openGraph: {
    title: siteSEO.defaultTitle,
    description: siteSEO.description,
    url: siteSEO.canonicalUrl,
    siteName: siteSEO.siteName,
    images: [
      {
        url: siteSEO.ogImage,
        width: 1200,
        height: 630,
        alt: "World777 Sports Exchange & Live Casino Portal",
      },
    ],
    locale: siteSEO.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.description,
    images: [siteSEO.ogImage],
    creator: siteSEO.twitterHandle,
    site: siteSEO.twitterHandle,
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
  const { websiteSchema, organizationSchema, faqSchema, breadcrumbSchema } =
    generateStructuredData();

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070b14] text-slate-100 min-h-screen selection:bg-gold-500/30 selection:text-gold-300`}
      >
        {children}
      </body>
    </html>
  );
}
