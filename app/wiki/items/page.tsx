import BlogLayout from "@/components/BlogLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romestead Items Database - Materials, Food, Seeds, Armor & Weapons",
  description:
    "Romestead items database organized by construction, materials, food, seeds, accessories, ammo, armor, tools, weapons, and worship items.",
  alternates: { canonical: "/wiki/items" },
};

const breadcrumbs = [{ label: "Wiki", href: "/wiki" }, { label: "Items" }];
const toc = [
  { id: "overview", label: "Overview" },
  { id: "categories", label: "Categories" },
  { id: "priority", label: "Priority Items" },
  { id: "links", label: "Related Pages" },
];
const trendingGuides = [
  { title: "Weapons Guide", href: "/wiki/weapons" },
  { title: "Armor Sets", href: "/wiki/armor" },
  { title: "Crafting Guide", href: "/wiki/crafting" },
  { title: "Farming Guide", href: "/wiki/farming" },
];

const categories = [
  ["Construction", "Brick, Clay, Concrete, Marble, Stone, Lumber"],
  ["Buildings", "Altar, Leatherworker, Lumber Yard, Farmstead, Blacksmith, Bakery, Quarry, Market"],
  ["Infrastructure", "Food Storage, Farm Land, Road, Wooden Cart, Manual Mill, Well, Doliums"],
  ["Materials", "Copper Bar, Bronze Bar, Iron Bar, Linen, Leather, Wool, Bonesplint, Cyclops Shard"],
  ["Food", "Bread, cooked meats, cheese, fish, garum, honey, wine, potions"],
  ["Seeds", "Wheat, cabbage, aloe, mint, grapes, olives, tree and bush seeds"],
  ["Accessories", "Cloaks, torches, trinkets, rings, gloves, dice, relic-style items"],
  ["Combat", "Ammo, armor, tools, bows, crossbows, daggers, pilums, shields, sledgehammers, spears, swords"],
];

const priorities = [
  ["Wood Plank / Lumber / Stone", "Base construction and early progression."],
  ["Copper Bar / Bronze Bar", "Weapon, armor, and workplace progression."],
  ["Leather / Cured Hide", "Early armor and leatherworker recipes."],
  ["Wheat / Flour / Bread", "Reliable settlement food chain."],
  ["Cyclops Shard / Nail of the Cyclops", "Late boss crafting and Tectonic gear."],
  ["Denarius / Quadrans", "Trading, buying, and reward tracking."],
];

export default function ItemsPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <section className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
        <Image src="/images/screenshots/crafting-interior.webp" alt="Romestead item and crafting interface" width={1200} height={675} className="h-72 w-full object-cover opacity-90" priority />
        <div className="p-6 sm:p-8">
          <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-gold">Database</p>
          <h1 className="mt-4 font-cinzel text-3xl font-extrabold text-parchment-light sm:text-5xl">
            Romestead Items Database
          </h1>
          <p className="mt-4 text-parchment leading-relaxed">
            The full item list is broad, so this page groups items by player use: building, production, farming, combat, worship, and economy.
          </p>
          <p className="mt-3 text-xs text-ash">Reference: <a href="https://romestead.wiki.gg/wiki/Items" target="_blank" rel="noopener noreferrer" className="text-ember underline">Romestead Items</a></p>
        </div>
      </section>

      <div className="prose-romestead mt-10">
        <h2 id="overview">Overview</h2>
        <p>Do not treat items as a flat alphabetical pile. The useful way to read items is by job: build, craft, feed, fight, trade, or worship.</p>
      </div>

      <section id="categories" className="mt-10 grid gap-4 sm:grid-cols-2">
        {categories.map(([title, text]) => (
          <article key={title} className="rounded-md border border-stone-medium bg-stone-dark p-5">
            <h2 className="font-cinzel text-xl text-parchment-light">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ash">{text}</p>
          </article>
        ))}
      </section>

      <section id="priority" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">Priority Items</h2>
        <div className="mt-4 overflow-x-auto border border-stone-medium">
          <table className="w-full min-w-[680px] text-sm">
            <thead><tr className="table-header"><th className="p-3 text-left font-cinzel">Item Group</th><th className="p-3 text-left font-cinzel">Why It Matters</th></tr></thead>
            <tbody>{priorities.map(([item, reason], index) => (
              <tr key={item} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
                <td className="p-3 font-semibold text-parchment-light">{item}</td>
                <td className="p-3 text-ash">{reason}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>

      <section id="links" className="mt-10 grid gap-4 sm:grid-cols-3">
        <Link href="/wiki/weapons" className="card">Weapons</Link>
        <Link href="/wiki/armor" className="card">Armor</Link>
        <Link href="/wiki/crafting" className="card">Crafting</Link>
      </section>
    </BlogLayout>
  );
}
