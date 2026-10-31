import { MetadataRoute } from "next";
import { siteSEO } from "@/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "World777 - World 777 Online ID & Sports Exchange",
    short_name: "World777",
    description: siteSEO.description,
    start_url: "/",
    display: "standalone",
    background_color: "#252a30",
    theme_color: "#116e52",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
