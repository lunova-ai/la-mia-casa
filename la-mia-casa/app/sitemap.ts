import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://la-mia-casa.app" },
    { url: "https://la-mia-casa.app/speisekarte" },
    { url: "https://la-mia-casa.app/team" },
    { url: "https://la-mia-casa.app/kontakt" },
  ];
}
