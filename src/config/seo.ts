export interface SiteSEOConfig {
  siteName: string;
  brandTagline: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  canonicalUrl: string;
  keywords: string[];
  locale: string;
  ogImage: string;
  twitterHandle: string;
  themeColor: string;
  contactWhatsApp: string;
  contactTelegram: string;
  supportEmail: string;
  contactPhone: string;
}

export const siteSEO: SiteSEOConfig = {
  siteName: "World777",
  brandTagline: "World 777, World 777 Com, World 777 Online ID, World777 ID",
  defaultTitle: "World777, World 777, World 777 Com, World 777 Online ID, World777 ID",
  titleTemplate: "%s | World777 Online ID & Sports Exchange",
  description:
    "World 777 is India's premier online sports betting exchange and live casino platform. Obtain your World777 Online ID via WhatsApp in 2 minutes. Enjoy live back/lay cricket betting, Teen Patti, Live Roulette, Aviator, and 24x7 instant UPI withdrawals.",
  canonicalUrl: "https://www.world777.com.in",
  keywords: [
    "world777",
    "world 777",
    "world 777 com",
    "world 777 online id",
    "world777 id",
    "world777 com login",
    "world777 login",
    "world777 com id",
    "world 777 cricket id",
    "world777 app download",
    "online cricket id",
    "sports betting exchange",
    "cricket id online",
    "live casino india",
    "teen patti real cash",
    "aviator crash game",
    "back lay exchange",
    "ipl betting exchange",
    "instant withdrawal betting site",
    "whatsapp cricket id",
    "demo cricket id",
  ],
  locale: "en_IN",
  ogImage: "https://www.world777.com.in/og-image.jpg",
  twitterHandle: "@World777Online",
  themeColor: "#070b14",
  contactWhatsApp: "+919876543210",
  contactTelegram: "https://t.me/world777official",
  supportEmail: "contact@world777.com.in",
  contactPhone: "+91-987-654-3210",
};

export const faqs = [
  {
    question: "What is World777 and how does the Sports Exchange work?",
    answer:
      "World777 (World 777) is an advanced sports exchange and online gaming platform. Unlike standard bookmakers where you bet against the house, an exchange allows you to bet directly against other players with 'Back' (betting for an outcome) and 'Lay' (betting against an outcome) options, offering the best market odds with minimal commissions.",
  },
  {
    question: "How do I get my World 777 Online Cricket ID?",
    answer:
      "Getting your World 777 Online ID is quick and hassle-free. Simply tap the 'Get ID via WhatsApp' or 'Sign Up' button on our website. You will connect directly with our 24/7 verified customer care desk on WhatsApp, who will activate your unique username and secure password within 2 minutes.",
  },
  {
    question: "What is the minimum deposit and withdrawal limit on World777?",
    answer:
      "The minimum deposit starts at just ₹100, making it accessible for all sports fans. Withdrawals are processed 24/7 via automated UPI (Google Pay, PhonePe, Paytm) and IMPS NetBanking with no deductions and an average turnaround time under 90 seconds.",
  },
  {
    question: "Can I try games with a World777 Demo ID before depositing?",
    answer:
      "Yes! World777 offers free Demo IDs for both sports betting and live casino games. You can click 'Demo ID' in the header to explore the platform interface, back/lay odds movement, and live games with simulated practice balance.",
  },
  {
    question: "Which casino and fantasy games are available on World777?",
    answer:
      "World 777 hosts over 500+ premium games including Live Teen Patti 20-20, Andar Bahar, Hindi Live Roulette, Dragon Tiger, Baccarat, Aviator Crash, Ball By Ball Cricket, Card 32 Judgment, and high-payout Megaways slots.",
  },
  {
    question: "Is my personal data and funds secure with World777?",
    answer:
      "World777 utilizes end-to-end 256-bit SSL banking-grade encryption, strict zero-log privacy safeguards, and certified RNG (Random Number Generator) testing to ensure 100% fair play, secure transactions, and player privacy.",
  },
];

export function generateStructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSEO.siteName,
    alternateName: [
      "World 777",
      "World777",
      "World 777 Com",
      "World 777 Online ID",
      "World777 ID",
      "World777 Login",
      "World777 Com Login",
      "World777 Com ID",
    ],
    url: siteSEO.canonicalUrl,
    description: siteSEO.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteSEO.canonicalUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSEO.siteName,
    url: siteSEO.canonicalUrl,
    logo: `${siteSEO.canonicalUrl}/logo.png`,
    sameAs: [
      siteSEO.contactTelegram,
      "https://twitter.com/World777Online",
      "https://instagram.com/World777Official",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteSEO.contactPhone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteSEO.canonicalUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sports Exchange",
        item: `${siteSEO.canonicalUrl}/#exchange`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Live Casino",
        item: `${siteSEO.canonicalUrl}/#casino`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Fantasy Games",
        item: `${siteSEO.canonicalUrl}/#fantasy`,
      },
    ],
  };

  return { websiteSchema, organizationSchema, faqSchema, breadcrumbSchema };
}
