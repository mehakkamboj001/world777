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
  defaultTitle: "World777 | Sports Exchange, Fantasy Games & Live Casino",
  titleTemplate: "%s | World777",
  description:
    "Explore World777 sports exchange, Fantasy Games, Live Casino and slots. Learn about Back and Lay selections; match listings are illustrative. Adults 18+ only.",
  canonicalUrl: "https://world777.store/",
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
    question: "What can I find on the World777 homepage?",
    answer:
      "The homepage brings together sports exchange categories, example match listings, Fantasy Games, Live Casino and slots. The match data is illustrative, and game or market availability may change. Check the applicable rules and terms before participating.",
  },
  {
    question: "What do Back and Lay mean in a sports exchange?",
    answer:
      "Back means selecting an outcome that you expect to happen. Lay means selecting an outcome that you expect not to happen; a lay selection can involve liability if the outcome does happen. Review the odds, market rules and potential liability before making a selection.",
  },
  {
    question: "Are the scores and odds shown on the homepage live?",
    answer:
      "No. The match rows, scores and odds on this homepage are illustrative interface data, not a live feed. They may not reflect current events or prices and should not be used to make decisions.",
  },
  {
    question: "Which game categories does the homepage show?",
    answer:
      "The page has separate sections for Fantasy Games, Live Casino and slots. Game cards are examples of titles and categories; actual availability can change.",
  },
  {
    question: "Who should access gaming content on this site?",
    answer:
      "This site is intended for adults aged 18 or older. Laws and eligibility requirements vary by location. Check the rules that apply where you live and do not participate if it is restricted.",
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
