import BlogLayout from "@/components/BlogLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romestead Crafting Guide: Stations",
  description:
    "Romestead crafting guide with station roles, material chains, blacksmith, leatherworker, bakery, pottery, gear priorities, mistakes, and FAQ.",
  alternates: { canonical: "/wiki/crafting" },
  openGraph: {
    title: "Romestead Crafting Guide: Stations",
    description:
      "Convert raw resources into gear, food, defenses, and progression with clear crafting station priorities.",
    url: "https://romesteadguide.top/wiki/crafting",
    type: "article",
    images: [
      {
        url: "/images/screenshots/leather-worker-setup.webp",
        width: 1200,
        height: 630,
        alt: "Romestead crafting workplace guide",
      },
    ],
  },
};

const breadcrumbs = [{ label: "Wiki", href: "/wiki" }, { label: "Crafting" }];
const toc = [
  { id: "overview", label: "Quick Answer" },
  { id: "stations", label: "Stations" },
  { id: "chains", label: "Material Chains" },
  { id: "priorities", label: "Priorities" },
  { id: "routes", label: "Routes" },
  { id: "mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];
const trendingGuides = [
  { title: "Items Database", href: "/wiki/items" },
  { title: "Building Guide", href: "/wiki/building" },
  { title: "Weapons Guide", href: "/wiki/weapons" },
  { title: "Armor Sets", href: "/wiki/armor" },
];

const stations = [
  {
    name: "Blacksmith",
    role: "Metal weapons, shields, armor pieces, and furnace-based smelting.",
    priority: "Build when copper or bronze progression is ready.",
    image: "/images/screenshots/crafting-interior.webp",
  },
  {
    name: "Leatherworker",
    role: "Leather, hide, wool, and cloth-style gear for early survival.",
    priority: "Build early because armor reduces repeated death costs.",
    image: "/images/screenshots/leather-worker-setup.webp",
  },
  {
    name: "Bakery",
    role: "Turns grain chains into bread and useful food outputs.",
    priority: "Build once wheat and processing need to feed citizens reliably.",
    image: "/images/screenshots/farming-mechanics.webp",
  },
  {
    name: "Carpenter's Workshop",
    role: "Furniture, wood-based construction, and building upgrade support.",
    priority: "Build when settlement upgrades need more than raw lumber.",
    image: "/images/screenshots/starter-village.webp",
  },
  {
    name: "Pottery",
    role: "Clay-based goods, storage utility, and production support.",
    priority: "Build after core food and combat crafting are stable.",
    image: "/images/screenshots/transport-cart.webp",
  },
  {
    name: "Quarry",
    role: "Mineral access and construction material support.",
    priority: "Build when stone and mineral demand starts blocking expansion.",
    image: "/images/screenshots/village-overview.webp",
  },
];

const chains = [
  ["Copper Ore", "Blacksmith furnace", "Copper Bar", "Early weapons, armor, shields"],
  ["Bronze Bar", "Metal recipes", "Bronze gear", "Mid-tier weapons and stronger armor"],
  ["Leather + Cured Hide", "Leatherworker", "Leather gear", "Early survival and ranged or utility builds"],
  ["Wool / Linen", "Leatherworker", "Cloth-style gear", "Armor and specialty equipment"],
  ["Wheat", "Manual Mill / Bakery", "Flour / Bread", "Food storage and citizen stability"],
  ["Clay", "Pottery", "Utility goods", "Storage and production support"],
  ["Cyclops materials", "Advanced crafting", "Tectonic gear", "Late boss equipment"],
];

const priorities = [
  {
    stage: "Early survival",
    craft: "Shield, basic weapon, cooked food, leather gear",
    reason: "Reduces death loops while the settlement is still fragile.",
  },
  {
    stage: "Food stability",
    craft: "Flour, bread, food storage support",
    reason: "Crafting food is settlement survival, not side content.",
  },
  {
    stage: "Metal transition",
    craft: "Copper and bronze weapons, stronger armor, shields",
    reason: "Combat upgrades unlock safer biomes and boss attempts.",
  },
  {
    stage: "Infrastructure",
    craft: "Carts, roads, storage utility, building upgrade materials",
    reason: "Reduces hauling time and lets production scale cleanly.",
  },
  {
    stage: "Boss farming",
    craft: "Special weapons, Tectonic pieces, potion support",
    reason: "Boss drops should be turned into power, not left idle in storage.",
  },
];

const routes = [
  ["I keep dying", "Leatherworker - armor, Blacksmith - shield, cook food before leaving base.", "/wiki/armor"],
  ["I need boss prep", "Blacksmith weapons, potion food support, armor upgrades, ammo stock.", "/wiki/bosses"],
  ["My town is hungry", "Farm Land - wheat - mill - bakery - Food Storage.", "/wiki/farming"],
  ["My base expansion is slow", "Lumber Yard, Carpenter, Material Storage, roads, Wooden Cart.", "/wiki/building"],
  ["I have rare drops", "Check weapon, armor, and boss material routes before spending them.", "/wiki/items"],
];

const mistakes = [
  "Crafting every recipe once. The question is not what exists; it is what removes the next bottleneck.",
  "Smelting metal without a target. Bars are useful when they become gear or upgrades.",
  "Ignoring food crafting. Bread and cooked food are part of crafting because they keep workers alive.",
  "Leaving boss drops idle. Rare drops should push weapons, armor, or progression.",
  "Building stations before storage. A station without nearby inputs creates walking tax.",
];

const faqs = [
  {
    question: "Which crafting station should I build first?",
    answer:
      "Leatherworker is usually the safest early station because armor reduces death costs. Blacksmith becomes the next major station once copper or bronze progression is ready.",
  },
  {
    question: "Is food part of crafting in Romestead?",
    answer:
      "Yes. Wheat, flour, bread, cooked meat, and potions are crafting chains because they convert raw resources into survival and settlement stability.",
  },
  {
    question: "When should I smelt copper or bronze?",
    answer:
      "Smelt when the bars unlock a specific useful output: weapon, shield, armor, station upgrade, or progression item. Smelting without a target can hide the real bottleneck.",
  },
  {
    question: "What should I craft before bosses?",
    answer:
      "Bring upgraded armor, a reliable weapon, a shield or ranged option, cooked food, and potion support. Boss crafting is about reducing risk before the trigger, not reacting after death.",
  },
  {
    question: "How do I avoid wasting rare materials?",
    answer:
      "Check whether the rare material belongs to a weapon, armor, boss, or progression route before spending it. Boss drops and special shards should never be treated as common input.",
  },
  {
    question: "Why use this crafting guide instead of a recipe dump?",
    answer:
      "A recipe dump tells you what can be made. This page tells you what should be made first and why that craft changes survival, food, combat, or expansion.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Romestead Crafting Guide - Stations, Recipes, Materials & Priorities",
  description:
    "A Romestead crafting guide for station priorities, material chains, blacksmith, leatherworker, bakery, pottery, gear crafting, and boss prep.",
  author: { "@type": "Organization", name: "Romestead Guide" },
  publisher: { "@type": "Organization", name: "Romestead Guide" },
  mainEntityOfPage: "https://romesteadguide.top/wiki/crafting",
};

export default function CraftingPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
        <Image src="/images/screenshots/leather-worker-setup.webp" alt="Romestead crafting workplace" width={1200} height={675} className="h-72 w-full object-cover opacity-90" priority />
        <div className="p-6 sm:p-8">
          <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-ember">Production</p>
          <h1 className="mt-4 font-cinzel text-3xl font-extrabold text-parchment-light sm:text-5xl">
            Romestead Crafting Guide: stations, material chains, and what to craft first
          </h1>
          <p className="mt-4 text-parchment leading-relaxed">
            Crafting is the bridge between gathering and progress. Raw resources matter only when they become food, gear, defenses, or station upgrades.
          </p>
        </div>
      </section>

      <div id="overview" className="prose-romestead mt-10">
        <h2>Quick Answer</h2>
        <p>
          Craft to remove bottlenecks: leather gear if you are dying, bread if citizens are hungry, bronze weapons if fights are slow, and transport or storage if production is wasting time.
        </p>
      </div>

      <section id="stations" className="mt-10">
        <h2 className="font-cinzel text-2xl text-parchment-light">Crafting Stations</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {stations.map((station) => (
            <article key={station.name} className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
              <Image src={station.image} alt={`${station.name} in Romestead`} width={600} height={340} className="h-36 w-full object-cover opacity-80" />
              <div className="p-5">
                <h3 className="font-cinzel text-xl text-parchment-light">{station.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{station.role}</p>
                <p className="mt-3 border-l-2 border-ember/70 bg-obsidian/40 px-3 py-2 text-sm text-parchment">{station.priority}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="chains" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">Material Chains</h2>
        <div className="mt-4 overflow-x-auto border border-stone-medium">
          <table className="w-full min-w-[820px] text-sm">
            <thead>
              <tr className="table-header">
                <th className="p-3 text-left font-cinzel">Input</th>
                <th className="p-3 text-left font-cinzel">Station</th>
                <th className="p-3 text-left font-cinzel">Output</th>
                <th className="p-3 text-left font-cinzel">Use</th>
              </tr>
            </thead>
            <tbody>
              {chains.map(([input, station, output, use], index) => (
                <tr key={`${input}-${output}`} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
                  <td className="p-3 font-semibold text-parchment-light">{input}</td>
                  <td className="p-3 text-ash">{station}</td>
                  <td className="p-3 text-ember">{output}</td>
                  <td className="p-3 text-ash">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="priorities" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">Crafting Priorities</h2>
        <div className="mt-4 grid gap-4">
          {priorities.map((priority) => (
            <article key={priority.stage} className="grid gap-3 rounded-md border border-stone-medium bg-stone-dark p-5 md:grid-cols-[180px_1fr_1fr]">
              <h3 className="font-cinzel text-xl text-parchment-light">{priority.stage}</h3>
              <p className="text-sm leading-relaxed text-parchment">{priority.craft}</p>
              <p className="text-sm leading-relaxed text-ash">{priority.reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="routes" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">Craft by Problem</h2>
        <div className="mt-4 grid gap-3">
          {routes.map(([problem, route, href]) => (
            <Link key={problem} href={href} className="grid gap-2 border border-stone-medium bg-stone-dark p-4 transition-colors hover:border-ember sm:grid-cols-[180px_1fr_auto]">
              <span className="font-cinzel text-parchment-light">{problem}</span>
              <span className="text-sm text-ash">{route}</span>
              <span className="text-sm text-ember">Open -&gt;</span>
            </Link>
          ))}
        </div>
      </section>

      <div id="mistakes" className="prose-romestead mt-12">
        <h2>Common Crafting Mistakes</h2>
        <ul>
          {mistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </div>

      <section id="faq" className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">FAQ</h2>
        <div className="mt-5 divide-y divide-stone-medium overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 open:bg-obsidian/35">
              <summary className="cursor-pointer list-none font-cinzel text-lg text-parchment-light transition-colors group-open:text-ember">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ash">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/wiki/weapons" className="btn-primary">Weapons</Link>
        <Link href="/wiki/armor" className="btn-ghost">Armor</Link>
      </div>
    </BlogLayout>
  );
}
