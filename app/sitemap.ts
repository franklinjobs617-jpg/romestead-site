import type { MetadataRoute } from "next";

const routes = [
  "",
  "/guides",
  "/guides/best-class-profession",
  "/guides/steam-deck-controller",
  "/guides/multiplayer-dedicated-server",
  "/guides/tips-tricks",
  "/wiki",
  "/wiki/weapons",
  "/wiki/armor",
  "/wiki/gods",
  "/wiki/biomes",
  "/wiki/bosses",
  "/wiki/building",
  "/wiki/farming",
  "/wiki/items",
  "/wiki/crafting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `https://romesteadguide.top${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/wiki") ? 0.8 : 0.7,
  }));
}
