import { MetadataRoute } from "next";
import { siteSEO } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: new URL("/sitemap.xml", siteSEO.canonicalUrl).toString(),
  };
}
