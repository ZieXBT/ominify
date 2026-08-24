import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

// Scrapers that crawl hard and send no real traffic. Every hit still bills
// as a Vercel edge request, so they are the cheapest thing to cut.
const BLOCKED_CRAWLERS = [
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "DataForSeoBot",
  "BLEXBot",
  "PetalBot",
  "Bytespider",
  "ImagesiftBot",
  "Barkrowler",
  "SerpstatBot",
  "ZoominfoBot",
  "magpie-crawler",
  "TurnitinBot",
  "VelenPublicWebCrawler",
  "SeekportBot",
  "Sogou web spider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /ewiai lives on ewiai.com from its own repo. The copy here is a
        // duplicate: no reason to let anything crawl it.
        disallow: ["/api/", "/ewiai", "/ewiai/"],
      },
      {
        userAgent: BLOCKED_CRAWLERS,
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
