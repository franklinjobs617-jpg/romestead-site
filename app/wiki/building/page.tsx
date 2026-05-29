import BlogLayout from "@/components/BlogLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romestead Building Guide - Houses, Workplaces, Storage & Defense",
  description:
    "Romestead building guide covering houses, workplaces, storage, roads, carts, defenses, altar progression, and building order.",
  alternates: { canonical: "/wiki/building" },
};

const breadcrumbs = [{ label: "Wiki", href: "/wiki" }, { label: "Building" }];
const toc = [
  { id: "overview", label: "Overview" },
  { id: "order", label: "Build Order" },
  { id: "buildings", label: "Building Types" },
  { id: "tips", label: "Layout Tips" },
];
const trendingGuides = [
  { title: "Crafting Guide", href: "/wiki/crafting" },
  { title: "Farming Guide", href: "/wiki/farming" },
  { title: "Items Database", href: "/wiki/items" },
  { title: "Tips & Tricks", href: "/guides/tips-tricks" },
];

const buildOrder = [
  ["Shelter", "Empty House", "Only build housing when a workplace is ready; unemployed citizens consume food."],
  ["Storage", "Material Storage + Food Storage", "Separate building resources from cooked food so logistics stay readable."],
  ["Production", "Lumber Yard + Leatherworker", "Early colony growth depends on lumber flow and leather gear."],
  ["Progression", "Altar", "Offerings and god progression unlock major settlement upgrades."],
  ["Industry", "Blacksmith + Carpenter", "Metal gear and building upgrades become the mid-game spine."],
  ["Defense", "Walls + traps + catapults", "Night attacks punish open layouts and scattered storage."],
];

const buildingGroups = [
  {
    title: "Core Settlement",
    items: ["Empty House", "Insula", "Material Storage", "Food Storage", "Altar"],
    note: "Population, storage, and god progression. This is the base layer before specialized industry.",
  },
  {
    title: "Workplaces",
    items: ["Lumber Yard", "Leatherworker", "Blacksmith", "Farmstead", "Bakery", "Quarry", "Market", "Pottery"],
    note: "Most workplaces use one citizen slot. Build workplaces before adding extra citizens.",
  },
  {
    title: "Infrastructure",
    items: ["Road", "Wooden Cart", "Manual Mill", "Well", "Doliums", "Farm Land"],
    note: "These reduce friction: movement, hauling, milling, water, storage, and food production.",
  },
  {
    title: "Defense",
    items: ["Wood Wall", "Wood Gate", "Stone Wall", "Coal Trap", "Stationary Catapult", "Automatic Scorpio"],
    note: "Use layers. A single wall line is weaker than gates, traps, and protected firing angles.",
  },
];

export default function BuildingPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <section className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
        <Image src="/images/screenshots/starter-village.webp" alt="Romestead settlement buildings" width={1200} height={675} className="h-72 w-full object-cover opacity-85" priority />
        <div className="p-6 sm:p-8">
          <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-ember">Settlement Planning</p>
          <h1 className="mt-4 font-cinzel text-3xl font-extrabold text-parchment-light sm:text-5xl">
            Romestead Building Guide: what to build first and why
          </h1>
          <p className="mt-4 text-parchment leading-relaxed">
            Buildings are not decoration. They control citizens, production, food demand, crafting access, storage, and defense.
            Bad build order creates food drain and wasted walking time.
          </p>
          <p className="mt-3 text-xs text-ash">
            Reference: <a href="https://romestead.wiki.gg/wiki/Items" target="_blank" rel="noopener noreferrer" className="text-ember underline">Romestead Items and building entries</a>
          </p>
        </div>
      </section>

      <div className="prose-romestead mt-10">
        <h2 id="overview">Overview</h2>
        <p>First principle: every settlement building either stores, produces, protects, transports, or unlocks. If a building does none of those for your current problem, it is probably premature.</p>
      </div>

      <section id="order" className="mt-10">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Recommended Build Order</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {buildOrder.map(([stage, title, text], index) => (
            <div key={title} className="border border-stone-medium bg-stone-dark p-5">
              <span className="font-pixel text-[8px] uppercase tracking-widest text-ember">{index + 1}. {stage}</span>
              <h3 className="mt-3 font-cinzel text-xl text-parchment-light">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="buildings" className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Building Types</h2>
        <div className="mt-4 grid gap-4">
          {buildingGroups.map((group) => (
            <article key={group.title} className="rounded-md border border-stone-medium bg-stone-dark p-5">
              <h3 className="font-cinzel text-xl text-parchment-light">{group.title}</h3>
              <p className="mt-2 text-sm text-ash">{group.note}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <span key={item} className="bg-obsidian/70 px-3 py-2 text-xs text-parchment">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="prose-romestead mt-12">
        <h2 id="tips">Layout Tips</h2>
        <ul>
          <li><strong>Do not spam houses:</strong> citizens without jobs still eat.</li>
          <li><strong>Cluster storage near production:</strong> storage distance becomes invisible tax on every run.</li>
          <li><strong>Leave expansion lanes:</strong> roads, carts, walls, and future workshops need space.</li>
          <li><strong>Protect food storage:</strong> losing food breaks the colony faster than losing decoration.</li>
        </ul>
      </div>

      <div className="mt-10 rounded-md border border-ember bg-stone-dark p-5">
        <h2 className="font-cinzel text-xl text-parchment-light">Next step</h2>
        <p className="mt-2 text-sm text-ash">After your basic settlement works, move into crafting chains and farming.</p>
        <div className="mt-4 flex gap-3">
          <Link href="/wiki/crafting" className="btn-primary">Crafting</Link>
          <Link href="/wiki/farming" className="btn-ghost">Farming</Link>
        </div>
      </div>
    </BlogLayout>
  );
}
