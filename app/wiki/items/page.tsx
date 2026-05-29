import BlogLayout from "@/components/BlogLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romestead Items Database",
  description:
    "Romestead items database organized by use: building materials, food, seeds, crafting inputs, combat gear, worship items, currency, priority items, and FAQ.",
  alternates: { canonical: "/wiki/items" },
  openGraph: {
    title: "Romestead Items Database",
    description:
      "Find Romestead items by purpose, not alphabet soup: build, craft, feed, fight, trade, worship, and progress.",
    url: "https://romesteadguide.top/wiki/items",
    type: "article",
    images: [
      {
        url: "/images/screenshots/crafting-interior.webp",
        width: 1200,
        height: 630,
        alt: "Romestead item and crafting guide",
      },
    ],
  },
};

const breadcrumbs = [{ label: "Wiki", href: "/wiki" }, { label: "Items" }];
const toc = [
  { id: "overview", label: "Quick Answer" },
  { id: "categories", label: "Categories" },
  { id: "priority", label: "Priority Items" },
  { id: "progression", label: "Progression" },
  { id: "where-used", label: "Where Used" },
  { id: "faq", label: "FAQ" },
];
const trendingGuides = [
  { title: "Weapons Guide", href: "/wiki/weapons" },
  { title: "Armor Sets", href: "/wiki/armor" },
  { title: "Crafting Guide", href: "/wiki/crafting" },
  { title: "Farming Guide", href: "/wiki/farming" },
];

const categories = [
  {
    title: "Construction",
    examples: "Brick, Clay, Concrete, Marble, Stone, Lumber",
    use: "Used to expand the settlement, build infrastructure, and unlock production capacity.",
    link: "/wiki/building",
  },
  {
    title: "Buildings",
    examples: "Altar, Leatherworker, Lumber Yard, Farmstead, Blacksmith, Bakery, Quarry, Market",
    use: "Not just objects; they create population roles, recipes, offerings, and progression routes.",
    link: "/wiki/building",
  },
  {
    title: "Infrastructure",
    examples: "Food Storage, Farm Land, Road, Wooden Cart, Manual Mill, Well, Doliums",
    use: "Reduces friction in food, hauling, milling, movement, and settlement organization.",
    link: "/wiki/building",
  },
  {
    title: "Materials",
    examples: "Copper Bar, Bronze Bar, Iron Bar, Linen, Leather, Wool, Bonesplint, Cyclops Shard",
    use: "The backbone of crafting. These decide when weapon, armor, and tool upgrades become possible.",
    link: "/wiki/crafting",
  },
  {
    title: "Food",
    examples: "Bread, cooked meats, cheese, fish, garum, honey, wine, potions",
    use: "Keeps citizens alive and supports exploration, boss attempts, and offering routes.",
    link: "/wiki/farming",
  },
  {
    title: "Seeds",
    examples: "Wheat, cabbage, aloe, mint, grapes, olives, tree and bush seeds",
    use: "Turns food from looting into production. Wheat is the core early staple.",
    link: "/wiki/farming",
  },
  {
    title: "Accessories",
    examples: "Cloaks, torches, trinkets, rings, gloves, dice, relic-style items",
    use: "Utility, combat support, and build specialization. Keep the ones that change your route.",
    link: "/wiki/crafting",
  },
  {
    title: "Combat",
    examples: "Ammo, armor, tools, bows, crossbows, daggers, pilums, shields, sledgehammers, spears, swords",
    use: "Controls fight safety, boss readiness, and biome progression.",
    link: "/wiki/weapons",
  },
];

const priorities = [
  ["Wood Plank / Lumber / Stone", "Base construction and early expansion.", "Always useful; do not let this bottleneck stop core buildings."],
  ["Food Storage / Bread chain", "Citizen survival.", "A settlement with gear but no food still fails."],
  ["Copper Bar / Bronze Bar", "Weapon, shield, and armor progression.", "Convert ore when it unlocks the next combat tier."],
  ["Leather / Cured Hide", "Early armor and utility gear.", "High value before metal armor is stable."],
  ["Wheat / Flour / Bread", "Reliable food economy.", "Best early example of raw input becoming strategic output."],
  ["Denarius / Quadrans", "Economy, trading, and rewards.", "Track currency separately from craft materials."],
  ["Cyclops Shard / Nail of the Cyclops", "Late boss crafting and Tectonic gear.", "Do not spend these blindly; they represent boss-route progress."],
];

const progression = [
  {
    stage: "Early settlement",
    keep: "Wood, lumber, stone, food, wheat seeds, leather inputs",
    ignore: "Low-use duplicate trinkets until storage is stable",
  },
  {
    stage: "First gear push",
    keep: "Copper bars, shields, leather gear inputs, arrows, cooked food",
    ignore: "Decorative building materials that do not unlock production",
  },
  {
    stage: "Mid-game production",
    keep: "Bronze bars, linen, wool, pottery inputs, farm and bakery materials",
    ignore: "Raw food without a processing plan",
  },
  {
    stage: "Boss farming",
    keep: "Boss drops, special shards, rare armor pieces, potions, strong ammunition",
    ignore: "Common clutter that blocks high-value loot storage",
  },
];

const whereUsed = [
  ["Need to stop starvation", "Food, seeds, Food Storage, Farmstead", "/wiki/farming"],
  ["Need better weapons", "Bars, wood parts, ammo, boss materials", "/wiki/weapons"],
  ["Need stronger armor", "Leather, linen, wool, bars, boss drops", "/wiki/armor"],
  ["Need more citizens", "Housing, food buffer, workplace materials", "/wiki/building"],
  ["Need recipes", "Station inputs, processed materials, special drops", "/wiki/crafting"],
];

const faqs = [
  {
    question: "What items should I keep early in Romestead?",
    answer:
      "Keep wood, lumber, stone, food, wheat seeds, leather inputs, copper or bronze materials, arrows, and anything that unlocks a building or station recipe.",
  },
  {
    question: "What is the difference between materials and useful items?",
    answer:
      "A material is only useful when it unlocks a decision: building, crafting, feeding, fighting, trading, or worship. Hoarding every raw item creates storage clutter without progress.",
  },
  {
    question: "Should I sort items by alphabet or category?",
    answer:
      "Sort by category. Alphabetical lists are fine for lookup, but category sorting tells you whether an item belongs to food, building, combat, crafting, economy, or worship.",
  },
  {
    question: "Which item chain matters most for settlements?",
    answer:
      "Wheat to flour to bread matters early because it turns farming into repeatable citizen food. Wood and stone matter at the same time because they unlock the settlement loop.",
  },
  {
    question: "Which boss items are important?",
    answer:
      "Guardian items, Cyclops materials, and special boss drops matter because they connect to armor, weapons, and progression gear. Treat them as route items, not vendor trash.",
  },
  {
    question: "Why use this page instead of only the official wiki item list?",
    answer:
      "This page groups items by what the player is trying to do. That is faster than reading a flat list when the real question is food, gear, building, or boss readiness.",
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
  headline: "Romestead Items Database - Materials, Food, Seeds, Armor & Weapons",
  description:
    "A purpose-based Romestead item database that groups materials, food, seeds, gear, combat items, worship items, and priority progression items.",
  author: { "@type": "Organization", name: "Romestead Guide" },
  publisher: { "@type": "Organization", name: "Romestead Guide" },
  mainEntityOfPage: "https://romesteadguide.top/wiki/items",
};

export default function ItemsPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
        <Image src="/images/screenshots/crafting-interior.webp" alt="Romestead item and crafting interface" width={1200} height={675} className="h-72 w-full object-cover opacity-90" priority />
        <div className="p-6 sm:p-8">
          <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-gold">Database</p>
          <h1 className="mt-4 font-cinzel text-3xl font-extrabold text-parchment-light sm:text-5xl">
            Romestead Items Database: materials, food, seeds, gear, and priority items
          </h1>
          <p className="mt-4 text-parchment leading-relaxed">
            The useful way to read items is by job: build, craft, feed, fight, trade, worship, or progress. A flat list is slower than a purpose-based database.
          </p>
          <p className="mt-3 text-xs text-ash">
            Raw reference checked May 29, 2026:{" "}
            <a href="https://romestead.wiki.gg/wiki/Items" target="_blank" rel="noopener noreferrer" className="text-ember underline underline-offset-2">
              Romestead wiki Items page
            </a>
            .
          </p>
        </div>
      </section>

      <div id="overview" className="prose-romestead mt-10">
        <h2>Quick Answer</h2>
        <p>
          If an item does not build, craft, feed, fight, trade, worship, or unlock progression, it is low priority. Early storage should favor construction materials, processed food, crafting bars, leather inputs, seeds, and combat supplies.
        </p>
      </div>

      <section id="categories" className="mt-10 grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <article key={category.title} className="rounded-md border border-stone-medium bg-stone-dark p-5">
            <h2 className="font-cinzel text-xl text-parchment-light">{category.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ash">{category.use}</p>
            <p className="mt-3 text-xs leading-relaxed text-parchment">{category.examples}</p>
            <Link href={category.link} className="mt-4 inline-block text-xs font-semibold text-ember underline underline-offset-2">
              Open related guide
            </Link>
          </article>
        ))}
      </section>

      <section id="priority" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">Priority Items</h2>
        <div className="mt-4 overflow-x-auto border border-stone-medium">
          <table className="w-full min-w-[820px] text-sm">
            <thead>
              <tr className="table-header">
                <th className="p-3 text-left font-cinzel">Item Group</th>
                <th className="p-3 text-left font-cinzel">Why It Matters</th>
                <th className="p-3 text-left font-cinzel">Decision Rule</th>
              </tr>
            </thead>
            <tbody>
              {priorities.map(([item, reason, rule], index) => (
                <tr key={item} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
                  <td className="p-3 font-semibold text-parchment-light">{item}</td>
                  <td className="p-3 text-ash">{reason}</td>
                  <td className="p-3 text-parchment">{rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="progression" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">What to Keep by Progression Stage</h2>
        <div className="mt-4 grid gap-4">
          {progression.map((stage) => (
            <article key={stage.stage} className="grid gap-4 rounded-md border border-stone-medium bg-stone-dark p-5 md:grid-cols-[180px_1fr_1fr]">
              <h3 className="font-cinzel text-xl text-parchment-light">{stage.stage}</h3>
              <p className="text-sm leading-relaxed text-ash"><strong className="text-ember">Keep:</strong> {stage.keep}</p>
              <p className="text-sm leading-relaxed text-ash"><strong className="text-ember">Deprioritize:</strong> {stage.ignore}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="where-used" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">Find Items by Problem</h2>
        <div className="mt-4 grid gap-3">
          {whereUsed.map(([problem, items, href]) => (
            <Link key={problem} href={href} className="grid gap-2 border border-stone-medium bg-stone-dark p-4 transition-colors hover:border-ember sm:grid-cols-[220px_1fr_auto]">
              <span className="font-cinzel text-parchment-light">{problem}</span>
              <span className="text-sm text-ash">{items}</span>
              <span className="text-sm text-ember">Open -&gt;</span>
            </Link>
          ))}
        </div>
      </section>

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
    </BlogLayout>
  );
}
