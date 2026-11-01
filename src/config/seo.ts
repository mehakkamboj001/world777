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

export const primaryKeywords = [
  "World777",
  "World 777",
  "World777 sports exchange",
  "World777 Fantasy Games",
  "World777 Live Casino",
  "World777 slots",
];

export const secondaryKeywords = [
  "sports exchange markets",
  "sports exchange guide",
  "cricket sports exchange",
  "football sports exchange",
  "tennis sports exchange",
  "Back and Lay meaning",
  "Back and Lay in sports exchange",
  "sports match markets",
  "Fantasy Games categories",
  "fantasy game listings",
  "instant-play game categories",
  "Live Casino games",
  "live casino categories",
  "casino table games",
  "slots game categories",
  "online slots games",
  "World777 homepage",
  "World777 sports categories",
  "World777 game categories",
  "sports exchange for beginners",
  "how sports exchange markets work",
  "how Back and Lay selections work",
  "responsible gaming information",
  "18+ gaming information",
];

export const siteSEO: SiteSEOConfig = {
  siteName: "World777",
  brandTagline: "Sports exchange, fantasy games and live casino",
  defaultTitle: "World777 | Sports Exchange, Fantasy Games & Live Casino",
  titleTemplate: "%s | World777",
  description:
    "Explore World777 sports exchange, Fantasy Games, Live Casino and slots. Learn about Back and Lay selections; match listings are illustrative. Adults 18+ only.",
  canonicalUrl: "https://world777.store/",
  keywords: [...primaryKeywords, ...secondaryKeywords],
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
    question: "Which sports categories are shown?",
    answer:
      "The page includes categories such as cricket, football and tennis, along with other sports. Category names and match rows are examples for browsing the interface; they are not confirmation of current fixtures or live markets.",
  },
  {
    question: "How do I browse Fantasy Games, Live Casino and slots?",
    answer:
      "Use the homepage sections and navigation links to browse Fantasy Games, Live Casino and slots. The cards illustrate game categories and titles. Availability, rules and terms can vary, so review the information shown for a game before participating.",
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
