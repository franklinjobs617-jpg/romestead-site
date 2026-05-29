import BlogLayout from "@/components/BlogLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romestead Farming Guide - Crops, Food Storage, Bread & Farmstead",
  description:
    "Romestead farming guide covering farm land, seeds, wheat, flour, bread, cooked food, food storage, and Farmstead automation.",
  alternates: { canonical: "/wiki/farming" },
};

const breadcrumbs = [{ label: "Wiki", href: "/wiki" }, { label: "Farming" }];
const toc = [
  { id: "overview", label: "Overview" },
  { id: "food-chain", label: "Food Chain" },
  { id: "crops", label: "Crops & Seeds" },
  { id: "automation", label: "Farmstead" },
  { id: "mistakes", label: "Mistakes" },
];
const trendingGuides = [
  { title: "Building Guide", href: "/wiki/building" },
  { title: "Crafting Guide", href: "/wiki/crafting" },
  { title: "Items Database", href: "/wiki/items" },
  { title: "Tips & Tricks", href: "/guides/tips-tricks" },
];

const chain = [
  ["Plant", "Place Farm Land and plant seeds."],
  ["Harvest", "Collect wheat, fruit, herbs, or crop output when mature."],
  ["Process", "Use milling and production buildings for flour, bread, oil, wine, or other food chains."],
  ["Cook/store", "Store finished food, not raw ingredients, for citizen use."],
];

const seeds = ["Wheat Seeds", "Cabbage Seeds", "Aloe Seeds", "Mint Seeds", "Grape Seeds", "Olive Seeds", "Tree Sapling", "Apple Tree Sapling", "Apricot Tree Sapling", "Palm Tree Sapling", "Red Currant Bush Seed", "White Currant Bush Seed", "Blackberry Bush Seed"];
const foods = ["Bread", "Cooked Meat Cut", "Cooked Meat Haunch", "Cooked Small Game", "Cheese", "Fish", "Garum", "Honey", "Olives", "Wine", "Globi", "Libum", "Energy Potion", "Minor Health Potion"];

export default function FarmingPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <section className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
        <Image src="/images/screenshots/farming-field.webp" alt="Romestead farming field" width={1200} height={675} className="h-72 w-full object-cover opacity-90" priority />
        <div className="p-6 sm:p-8">
          <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-forest">Food Economy</p>
          <h1 className="mt-4 font-cinzel text-3xl font-extrabold text-parchment-light sm:text-5xl">
            Romestead Farming Guide: crops, food chains, and citizen survival
          </h1>
          <p className="mt-4 text-parchment leading-relaxed">
            Farming is not optional once the settlement grows. Citizens consume food, but they do not solve the whole cooking chain for you.
          </p>
        </div>
      </section>

      <div className="prose-romestead mt-10">
        <h2 id="overview">Overview</h2>
        <p>Food is a production chain, not a single item. Raw resources become useful only when they end as cooked or processed food in storage.</p>
      </div>

      <section id="food-chain" className="mt-10">
        <h2 className="font-cinzel text-2xl text-parchment-light">Food Chain</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          {chain.map(([title, text], index) => (
            <div key={title} className="border border-stone-medium bg-stone-dark p-4">
              <span className="font-cinzel text-2xl text-ember">{index + 1}</span>
              <h3 className="mt-3 font-cinzel text-lg text-parchment-light">{title}</h3>
              <p className="mt-2 text-sm text-ash">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="crops" className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-md border border-stone-medium bg-stone-dark p-5">
          <h2 className="font-cinzel text-2xl text-parchment-light">Seeds and Crops</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {seeds.map((item) => <span key={item} className="bg-obsidian/70 px-3 py-2 text-xs text-parchment">{item}</span>)}
          </div>
        </div>
        <div className="rounded-md border border-stone-medium bg-stone-dark p-5">
          <h2 className="font-cinzel text-2xl text-parchment-light">Food Outputs</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {foods.map((item) => <span key={item} className="bg-obsidian/70 px-3 py-2 text-xs text-parchment">{item}</span>)}
          </div>
        </div>
      </section>

      <section id="automation" className="mt-12 rounded-md border border-stone-medium bg-stone-dark p-6">
        <h2 className="font-cinzel text-2xl text-parchment-light">Farmstead Automation</h2>
        <p className="mt-3 text-sm leading-relaxed text-ash">
          Farmstead houses a farmer who farms nearby crops. Treat it as a mid-game labor upgrade, not as a replacement for early manual food planning.
        </p>
        <Image src="/images/screenshots/farming-mechanics.webp" alt="Romestead farming mechanics" width={1000} height={560} className="mt-5 rounded-md border border-stone-medium" />
      </section>

      <div className="prose-romestead mt-12">
        <h2 id="mistakes">Common Farming Mistakes</h2>
        <ul>
          <li><strong>Storing raw food:</strong> raw food sitting in storage does not solve citizen hunger.</li>
          <li><strong>Scaling citizens before farms:</strong> more citizens raise food pressure immediately.</li>
          <li><strong>Ignoring milling:</strong> wheat needs processing before bread becomes useful.</li>
          <li><strong>No buffer:</strong> keep extra cooked food before adding new houses.</li>
        </ul>
      </div>

      <Link href="/wiki/items" className="btn-primary mt-8 inline-block">Open Items Database</Link>
    </BlogLayout>
  );
}
