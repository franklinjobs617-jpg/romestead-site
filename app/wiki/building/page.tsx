import BlogLayout from "@/components/BlogLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romestead Building Guide: Build Order",
  description:
    "Romestead building guide with exact settlement build order, citizen rules, workplace priorities, storage layout, defense planning, mistakes, and FAQ.",
  alternates: { canonical: "/wiki/building" },
  openGraph: {
    title: "Romestead Building Guide: Build Order",
    description:
      "Plan houses, workplaces, storage, roads, carts, walls, traps, and production buildings without creating food drain.",
    url: "https://romesteadguide.top/wiki/building",
    type: "article",
    images: [
      {
        url: "/images/screenshots/starter-village.webp",
        width: 1200,
        height: 630,
        alt: "Romestead settlement building guide",
      },
    ],
  },
};

const breadcrumbs = [{ label: "Wiki", href: "/wiki" }, { label: "Building" }];
const toc = [
  { id: "overview", label: "Quick Answer" },
  { id: "order", label: "Build Order" },
  { id: "citizens", label: "Citizens" },
  { id: "layout", label: "Layout Plan" },
  { id: "defense", label: "Defense" },
  { id: "mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];
const trendingGuides = [
  { title: "Crafting Guide", href: "/wiki/crafting" },
  { title: "Farming Guide", href: "/wiki/farming" },
  { title: "Items Database", href: "/wiki/items" },
  { title: "Tips & Tricks", href: "/guides/tips-tricks" },
];

const buildOrder = [
  ["1", "Empty House", "Only add housing when a job and food buffer already exist.", "Population"],
  ["2", "Material Storage", "Stops base materials from becoming scattered and unreadable.", "Logistics"],
  ["3", "Food Storage", "Keeps citizen food separate from construction materials.", "Survival"],
  ["4", "Lumber Yard", "Wood flow decides whether expansion feels smooth or stuck.", "Production"],
  ["5", "Leatherworker", "Early armor and survival gear reduce deaths before metal gear.", "Gear"],
  ["6", "Farm Land + Farmstead", "Turns settlement growth into a sustainable food economy.", "Food"],
  ["7", "Blacksmith", "Metal gear, shields, weapons, and upgrades push mid-game progress.", "Combat"],
  ["8", "Altar", "Offerings and god progression unlock powerful settlement direction.", "Progression"],
  ["9", "Roads + Wooden Cart", "Movement and hauling upgrades cut hidden travel tax.", "Efficiency"],
  ["10", "Walls + Traps", "Night attacks punish open storage and scattered citizens.", "Defense"],
];

const citizenRules = [
  ["House after job", "Build the workplace first, then add housing. A citizen without work is only a food drain."],
  ["Food before growth", "Keep a cooked-food buffer before adding a new citizen. Raw wheat is not the same as ready food."],
  ["Cluster jobs", "Put workers near the storage they need. Every long walk repeats hundreds of times."],
  ["One problem at a time", "If food, lumber, and defense are all failing, fix food first. Starvation collapses every other plan."],
];

const layoutZones = [
  {
    title: "Town Core",
    image: "/images/screenshots/village-overview.webp",
    points: ["Empty House", "Food Storage", "Market", "Altar"],
    note: "Keep citizens, food, and altar access close. This is the area you protect first.",
  },
  {
    title: "Industry Edge",
    image: "/images/screenshots/leather-worker-setup.webp",
    points: ["Lumber Yard", "Leatherworker", "Blacksmith", "Carpenter"],
    note: "Put loud production near material storage, not in the middle of farming lanes.",
  },
  {
    title: "Farm Belt",
    image: "/images/screenshots/farming-field.webp",
    points: ["Farm Land", "Farmstead", "Well", "Food routes"],
    note: "Farms need room. Do not trap them behind houses, walls, or workshop sprawl.",
  },
];

const defenseLayers = [
  ["Outer delay", "Wood or stone walls buy time; they do not win fights alone."],
  ["Controlled gates", "Use gates to decide where enemies enter instead of defending every side equally."],
  ["Trap lanes", "Coal traps and tight paths punish predictable night movement."],
  ["Ranged support", "Catapults and scorpios matter more when enemies are delayed in lanes."],
];

const mistakes = [
  "Building houses because space is empty. Empty space is cheaper than hungry citizens.",
  "Putting all storage in one pile. Mixed storage hides food shortages and material bottlenecks.",
  "Walling too early without gates and traps. A wall without a plan is just expensive delay.",
  "Ignoring roads and carts. Walking time is a production cost, even when the UI does not show it.",
  "Expanding farms after hunger starts. Food chains need a buffer before the warning appears.",
];

const faqs = [
  {
    question: "What should I build first in Romestead?",
    answer:
      "Start with housing only when you can give the citizen a job. The practical first route is Empty House, Material Storage, Food Storage, Lumber Yard, Leatherworker, then farming support.",
  },
  {
    question: "Why should I not spam houses?",
    answer:
      "Citizens consume food. If a new citizen does not immediately produce something useful, the house turns into a permanent food cost and makes the colony weaker.",
  },
  {
    question: "Where should storage go?",
    answer:
      "Material Storage belongs near workshops and construction routes. Food Storage belongs near houses, farms, and cooking. Splitting them makes shortages easier to see.",
  },
  {
    question: "When should I build walls?",
    answer:
      "Build walls after your core food and production loop works. Then wall the town core first, add gates, and layer traps or ranged defenses near predictable entry points.",
  },
  {
    question: "Are roads and carts worth it?",
    answer:
      "Yes. They reduce repeated travel waste. The bigger your settlement gets, the more roads and carts matter because hauling distance becomes a hidden production tax.",
  },
  {
    question: "What makes this page different from a raw wiki list?",
    answer:
      "This page orders buildings by player decisions: food safety, citizen timing, storage placement, defense timing, and production bottlenecks. A flat item list does not answer those questions.",
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
  headline: "Romestead Building Guide - Build Order, Storage, Citizens & Defense",
  description:
    "A Romestead settlement guide explaining what to build first, how to place storage, when to add citizens, and how to defend the core.",
  author: { "@type": "Organization", name: "Romestead Guide" },
  publisher: { "@type": "Organization", name: "Romestead Guide" },
  mainEntityOfPage: "https://romesteadguide.top/wiki/building",
};

export default function BuildingPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
        <Image src="/images/screenshots/starter-village.webp" alt="Romestead settlement buildings" width={1200} height={675} className="h-72 w-full object-cover opacity-85" priority />
        <div className="p-6 sm:p-8">
          <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-ember">Settlement Planning</p>
          <h1 className="mt-4 font-cinzel text-3xl font-extrabold text-parchment-light sm:text-5xl">
            Romestead Building Guide: build order, citizens, storage, and defense
          </h1>
          <p className="mt-4 text-parchment leading-relaxed">
            Buildings are not decoration. They decide food demand, worker output, crafting access, hauling distance, and night defense. Bad build order creates starvation and wasted walking time.
          </p>
          <p className="mt-3 text-xs text-ash">
            Raw reference checked May 29, 2026:{" "}
            <a href="https://romestead.wiki.gg/wiki/Items" target="_blank" rel="noopener noreferrer" className="text-ember underline underline-offset-2">
              Romestead wiki item and building entries
            </a>
            .
          </p>
        </div>
      </section>

      <div id="overview" className="prose-romestead mt-10">
        <h2>Quick Answer</h2>
        <p>
          The correct building logic is simple: feed people first, assign work second, expand third, defend fourth. If a new building does not solve food, storage, production, progression, transport, or defense, it is premature.
        </p>
      </div>

      <section id="order" className="mt-10">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Recommended Build Order</h2>
        <div className="mt-4 overflow-x-auto border border-stone-medium">
          <table className="w-full min-w-[820px] text-sm">
            <thead>
              <tr className="table-header">
                <th className="p-3 text-left font-cinzel">Step</th>
                <th className="p-3 text-left font-cinzel">Build</th>
                <th className="p-3 text-left font-cinzel">Reason</th>
                <th className="p-3 text-left font-cinzel">Role</th>
              </tr>
            </thead>
            <tbody>
              {buildOrder.map(([step, build, reason, role], index) => (
                <tr key={build} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
                  <td className="p-3 font-cinzel text-ember">{step}</td>
                  <td className="p-3 font-semibold text-parchment-light">{build}</td>
                  <td className="p-3 text-ash">{reason}</td>
                  <td className="p-3 text-parchment">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="citizens" className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Citizen Rules</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {citizenRules.map(([title, text]) => (
            <article key={title} className="border border-stone-medium bg-stone-dark p-5">
              <h3 className="font-cinzel text-xl text-parchment-light">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="layout" className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Layout Plan</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {layoutZones.map((zone) => (
            <article key={zone.title} className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
              <Image src={zone.image} alt={`${zone.title} in Romestead`} width={600} height={340} className="h-40 w-full object-cover opacity-85" />
              <div className="p-5">
                <h3 className="font-cinzel text-xl text-parchment-light">{zone.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{zone.note}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {zone.points.map((point) => (
                    <span key={point} className="bg-obsidian/70 px-3 py-2 text-xs text-parchment">{point}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="defense" className="mt-12 rounded-md border border-stone-medium bg-stone-dark p-6">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Defense Layers</h2>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          Defense works when it buys time and controls enemy movement. A single wall line is weaker than a layered plan.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {defenseLayers.map(([title, text]) => (
            <div key={title} className="border border-stone-medium bg-obsidian/45 p-4">
              <h3 className="font-cinzel text-lg text-parchment-light">{title}</h3>
              <p className="mt-2 text-sm text-ash">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div id="mistakes" className="prose-romestead mt-12">
        <h2>Common Building Mistakes</h2>
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

      <div className="mt-10 rounded-md border border-ember bg-stone-dark p-5">
        <h2 className="font-cinzel text-xl text-parchment-light">Next step</h2>
        <p className="mt-2 text-sm text-ash">
          Once the base loop works, improve food stability and convert materials into gear.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/wiki/farming" className="btn-primary">Farming</Link>
          <Link href="/wiki/crafting" className="btn-ghost">Crafting</Link>
        </div>
      </div>
    </BlogLayout>
  );
}
