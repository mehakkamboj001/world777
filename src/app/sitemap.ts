import { MetadataRoute } from "next";
import { siteSEO } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteSEO.canonicalUrl }];
}
