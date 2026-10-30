import { MetadataRoute } from "next";
import { siteSEO } from "@/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "World777 - World 777 Online ID & Sports Exchange",
    short_name: "World777",
    description: siteSEO.description,
    start_url: "/",
    display: "standalone",
    background_color: "#06080e",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
