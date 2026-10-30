import { MetadataRoute } from "next";
import { siteSEO } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: `${siteSEO.canonicalUrl}/sitemap.xml`,
  };
}

