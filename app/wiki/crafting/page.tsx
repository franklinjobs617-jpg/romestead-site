import BlogLayout from "@/components/BlogLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romestead Crafting Guide - Blacksmith, Leatherworker, Bakery & Recipes",
  description:
    "Romestead crafting guide covering blacksmith, leatherworker, carpenter, bakery, pottery, materials, recipes, and progression priorities.",
  alternates: { canonical: "/wiki/crafting" },
};

const breadcrumbs = [{ label: "Wiki", href: "/wiki" }, { label: "Crafting" }];
const toc = [
  { id: "overview", label: "Overview" },
  { id: "stations", label: "Stations" },
  { id: "chains", label: "Material Chains" },
  { id: "priorities", label: "Priorities" },
];
const trendingGuides = [
  { title: "Items Database", href: "/wiki/items" },
  { title: "Building Guide", href: "/wiki/building" },
  { title: "Weapons Guide", href: "/wiki/weapons" },
  { title: "Armor Sets", href: "/wiki/armor" },
];

const stations = [
  ["Blacksmith", "Crafts metal weapons and equipment; includes furnace use for smelting ores."],
  ["Leatherworker", "Crafts gear from leather, hides, wool, and cloth-style materials."],
  ["Carpenter's Workshop", "Crafts furniture and supports building upgrade progression."],
  ["Bakery", "Turns grains and processed food chains into bread and other food outputs."],
  ["Pottery", "Produces clay-based goods and storage/utility items."],
  ["Quarry", "Automates mineral access depending on biome and progression."],
];

const chains = [
  ["Copper Ore", "Blacksmith furnace", "Copper Bar", "Early weapons, armor, shields"],
  ["Bronze Bar", "Metal recipes", "Bronze gear", "Mid-tier weapons and armor"],
  ["Leather + Cured Hide", "Leatherworker", "Armor sets", "Early survival and ranged/magic paths"],
  ["Wheat", "Manual Mill / Bakery", "Flour / Bread", "Food storage and offerings"],
  ["Cyclops materials", "Advanced crafting", "Tectonic gear", "Late boss equipment"],
];

export default function CraftingPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <section className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
        <Image src="/images/screenshots/leather-worker-setup.webp" alt="Romestead crafting workplace" width={1200} height={675} className="h-72 w-full object-cover opacity-90" priority />
        <div className="p-6 sm:p-8">
          <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-ember">Production</p>
          <h1 className="mt-4 font-cinzel text-3xl font-extrabold text-parchment-light sm:text-5xl">
            Romestead Crafting Guide
          </h1>
          <p className="mt-4 text-parchment leading-relaxed">
            Crafting is the bridge between gathering and progression. Raw resources matter only when they become better tools, armor, food, defenses, or offerings.
          </p>
        </div>
      </section>

      <div className="prose-romestead mt-10">
        <h2 id="overview">Overview</h2>
        <p>First principle: every crafting chain has a bottleneck. Identify the station, input material, and output that moves progression forward.</p>
      </div>

      <section id="stations" className="mt-10 grid gap-4 sm:grid-cols-2">
        {stations.map(([name, text]) => (
          <article key={name} className="rounded-md border border-stone-medium bg-stone-dark p-5">
            <h2 className="font-cinzel text-xl text-parchment-light">{name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ash">{text}</p>
          </article>
        ))}
      </section>

      <section id="chains" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">Material Chains</h2>
        <div className="mt-4 overflow-x-auto border border-stone-medium">
          <table className="w-full min-w-[760px] text-sm">
            <thead><tr className="table-header"><th className="p-3 text-left font-cinzel">Input</th><th className="p-3 text-left font-cinzel">Station</th><th className="p-3 text-left font-cinzel">Output</th><th className="p-3 text-left font-cinzel">Use</th></tr></thead>
            <tbody>{chains.map(([input, station, output, use], index) => (
              <tr key={input} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
                <td className="p-3 text-parchment-light font-semibold">{input}</td>
                <td className="p-3 text-ash">{station}</td>
                <td className="p-3 text-ember">{output}</td>
                <td className="p-3 text-ash">{use}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>

      <div className="prose-romestead mt-12">
        <h2 id="priorities">Crafting Priorities</h2>
        <ul>
          <li><strong>Early:</strong> tools, shield, basic weapon, cooked food, leather gear.</li>
          <li><strong>Mid:</strong> blacksmith upgrades, bronze weapons, stronger armor, cart/infrastructure support.</li>
          <li><strong>Boss farming:</strong> use boss materials for special weapons, armor, and advanced equipment.</li>
          <li><strong>Do not hoard everything:</strong> convert materials when they solve the next bottleneck.</li>
        </ul>
      </div>

      <div className="mt-10 flex gap-3">
        <Link href="/wiki/weapons" className="btn-primary">Weapons</Link>
        <Link href="/wiki/armor" className="btn-ghost">Armor</Link>
      </div>
    </BlogLayout>
  );
}
