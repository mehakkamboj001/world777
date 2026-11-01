export interface SiteSEOConfig {
  siteName: string;
  brandTagline: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  canonicalUrl: string;
  keywords: string[];
  locale: string;
  themeColor: string;
  contactWhatsApp: string;
  contactTelegram: string;
  supportEmail: string;
}

export const siteSEO: SiteSEOConfig = {
  siteName: "World777",
  brandTagline: "Sports exchange, fantasy games and live casino",
  defaultTitle: "World777 Sports Exchange, Fantasy Games & Live Casino",
  titleTemplate: "%s | World777",
  description:
    "Explore World777 sports exchange, Fantasy Games, Live Casino and slots. Browse sports categories and Back and Lay guides. Adults 18+ only; play responsibly.",
  canonicalUrl: "https://www.world777.com.in/",
  keywords: [
    "world777",
    "world 777",
    "sports betting exchange",
    "fantasy games",
    "live casino",
  ],
  locale: "en_IN",
  themeColor: "#116e52",
  contactWhatsApp: "+917009784942",
  contactTelegram: "https://t.me/world777official",
  supportEmail: "contact@world777.com.in",
};

export const faqs = [
  {
    question: "What can I find on this World777 page?",
    answer:
      "This page groups sports exchange markets, Fantasy Games, Live Casino and slots. Game and market availability may change; review the information shown on the page.",
  },
  {
    question: "What do Back and Lay mean in an exchange market?",
    answer:
      "Back means selecting an outcome to happen; Lay means selecting an outcome not to happen. Review the market rules, odds and potential liability before taking part.",
  },
  {
    question: "Are the match odds on this page live?",
    answer:
      "The match rows shown here are example interface data and are not a live odds feed. Do not rely on them for current scores, prices or betting decisions.",
  },
  {
    question: "Which game categories are listed?",
    answer:
      "The page lists Fantasy Games, Live Casino and slots. The visible game cards are examples of categories and titles; availability can change.",
  },
  {
    question: "Who should use this site?",
    answer:
      "This site is intended for adults aged 18 or older. Laws differ by location; check the rules that apply where you live and do not participate if it is restricted.",
  },
];

// ─── Central WhatsApp helper ───────────────────────────────────────────────
// Change contactWhatsApp above to update ALL buttons across the site.
export function getWhatsAppUrl(message: string = "I NEED WORLD777 ID"): string {
  const clean = siteSEO.contactWhatsApp.replace(/[^0-9]/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

export function generateStructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSEO.siteName,
    alternateName: "World 777",
    url: siteSEO.canonicalUrl,
    description: siteSEO.description,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSEO.siteName,
    url: siteSEO.canonicalUrl,
    logo: `${siteSEO.canonicalUrl}icon.svg`,
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

  return { websiteSchema, organizationSchema, faqSchema };
}
