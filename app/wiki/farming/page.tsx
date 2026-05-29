import BlogLayout from "@/components/BlogLayout";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Romestead Farming Guide: Bread & Crops",
  description:
    "Romestead farming guide with crop priorities, wheat to bread chain, food storage planning, Farmstead automation, citizen food rules, mistakes, and FAQ.",
  alternates: { canonical: "/wiki/farming" },
  openGraph: {
    title: "Romestead Farming Guide: Bread & Crops",
    description:
      "Learn how to keep citizens fed with crop planning, milling, bread production, cooked food buffers, and Farmstead automation.",
    url: "https://romesteadguide.top/wiki/farming",
    type: "article",
    images: [
      {
        url: "/images/screenshots/farming-field.webp",
        width: 1200,
        height: 630,
        alt: "Romestead farming guide",
      },
    ],
  },
};

const breadcrumbs = [{ label: "Wiki", href: "/wiki" }, { label: "Farming" }];
const toc = [
  { id: "overview", label: "Quick Answer" },
  { id: "food-chain", label: "Food Chain" },
  { id: "crops", label: "Crops" },
  { id: "planning", label: "Planning" },
  { id: "automation", label: "Farmstead" },
  { id: "mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];
const trendingGuides = [
  { title: "Building Guide", href: "/wiki/building" },
  { title: "Crafting Guide", href: "/wiki/crafting" },
  { title: "Items Database", href: "/wiki/items" },
  { title: "Tips & Tricks", href: "/guides/tips-tricks" },
];

const chain = [
  ["1", "Plant", "Place Farm Land and plant seeds where farmers can reach them quickly."],
  ["2", "Harvest", "Collect wheat, fruit, herbs, or crop output before expanding population."],
  ["3", "Process", "Use milling and production buildings for flour, bread, oil, wine, or other outputs."],
  ["4", "Store", "Put finished food near citizens. Raw ingredients alone do not stabilize the colony."],
  ["5", "Buffer", "Add citizens only after cooked or processed food is already ahead of demand."],
];

const cropGroups = [
  {
    title: "Staple Crops",
    items: ["Wheat Seeds", "Cabbage Seeds"],
    use: "Best early food backbone. Wheat matters because it leads into flour and bread.",
  },
  {
    title: "Herbs and Utility",
    items: ["Aloe Seeds", "Mint Seeds"],
    use: "Useful for potion-style progression and support items. Do not prioritize them before basic food is stable.",
  },
  {
    title: "Vineyard and Oil",
    items: ["Grape Seeds", "Olive Seeds"],
    use: "Useful for wine, olives, offerings, and broader food economy once the base is stable.",
  },
  {
    title: "Trees and Bushes",
    items: ["Tree Sapling", "Apple Tree Sapling", "Apricot Tree Sapling", "Palm Tree Sapling", "Currant and blackberry seeds"],
    use: "Longer-horizon food and resource support. Leave expansion room before planting.",
  },
];

const foodOutputs = [
  ["Bread", "Reliable settlement food once wheat, milling, and baking are connected."],
  ["Cooked meat", "Strong emergency food when hunting or combat creates raw meat."],
  ["Cheese / fish / garum", "Useful variety and trade-style food value depending on progression."],
  ["Wine / olives / honey", "Food, offerings, and economy support after early survival."],
  ["Potions", "Health and energy support for combat, bosses, and long travel."],
];

const planningRules = [
  ["Food Storage near people", "Citizens need accessible food. Do not hide all finished food beside far farms."],
  ["Farms need empty space", "A farm belt blocked by houses forces awkward expansion later."],
  ["Process before expansion", "Wheat in a chest is not bread. Fix the station chain before adding mouths."],
  ["Track the weak link", "If farms are full but food is low, the bottleneck is processing or storage, not seeds."],
];

const mistakes = [
  "Adding houses because the farm looks large. Food demand rises immediately; harvest and processing may lag.",
  "Treating raw wheat as a food solution. Wheat still needs the milling and bread chain.",
  "Putting farms behind walls without clear gates. Farmers waste time walking around your own defense.",
  "Planting every seed equally. Staple food beats variety until the colony is stable.",
  "Using Farmstead as a magic fix. Automation helps a working farm loop; it does not replace planning.",
];

const faqs = [
  {
    question: "What is the best early crop in Romestead?",
    answer:
      "Wheat is the safest early backbone because it leads into flour and bread. Cabbage helps, but wheat creates a stronger repeatable food chain.",
  },
  {
    question: "Why are my citizens still hungry when I have crops?",
    answer:
      "Crops are not always finished food. If raw ingredients are not processed, cooked, or placed into accessible Food Storage, citizens can still fall behind on food.",
  },
  {
    question: "When should I build a Farmstead?",
    answer:
      "Build Farmstead after you have farms worth automating and a layout where the farmer can reach crops quickly. It is a labor upgrade, not the first food solution.",
  },
  {
    question: "Where should farms go?",
    answer:
      "Put farms in a dedicated belt with room to expand, near water and food routes, but not so deep inside town that houses and workshops block growth.",
  },
  {
    question: "How much food should I store before adding citizens?",
    answer:
      "Keep a visible processed-food buffer first. The exact number depends on colony size, but the rule is fixed: add citizens after food is ahead, not after hunger starts.",
  },
  {
    question: "What makes this guide useful beyond the wiki?",
    answer:
      "The wiki lists items. This page explains the chain: crop, processing station, storage, citizen timing, and the mistakes that cause starvation.",
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
  headline: "Romestead Farming Guide - Crops, Bread, Food Storage & Farmstead",
  description:
    "A Romestead farming guide for crop priorities, wheat processing, bread production, Food Storage, Farmstead automation, and population timing.",
  author: { "@type": "Organization", name: "Romestead Guide" },
  publisher: { "@type": "Organization", name: "Romestead Guide" },
  mainEntityOfPage: "https://romesteadguide.top/wiki/farming",
};

export default function FarmingPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
        <Image src="/images/screenshots/farming-field.webp" alt="Romestead farming field" width={1200} height={675} className="h-72 w-full object-cover opacity-90" priority />
        <div className="p-6 sm:p-8">
          <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-forest">Food Economy</p>
          <h1 className="mt-4 font-cinzel text-3xl font-extrabold text-parchment-light sm:text-5xl">
            Romestead Farming Guide: crops, bread, food storage, and Farmstead
          </h1>
          <p className="mt-4 text-parchment leading-relaxed">
            Farming is not optional once the settlement grows. Citizens eat every day, and a colony that expands faster than its food chain collapses.
          </p>
        </div>
      </section>

      <div id="overview" className="prose-romestead mt-10">
        <h2>Quick Answer</h2>
        <p>
          Prioritize wheat, connect it to milling and bread, keep processed food in Food Storage, then add Farmstead automation after the manual chain already works. More citizens before more food is the wrong order.
        </p>
      </div>

      <section id="food-chain" className="mt-10">
        <h2 className="font-cinzel text-2xl text-parchment-light">Food Chain</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-5">
          {chain.map(([step, title, text]) => (
            <div key={title} className="border border-stone-medium bg-stone-dark p-4">
              <span className="font-cinzel text-2xl text-ember">{step}</span>
              <h3 className="mt-3 font-cinzel text-lg text-parchment-light">{title}</h3>
              <p className="mt-2 text-sm text-ash">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="crops" className="mt-12">
        <h2 className="font-cinzel text-2xl text-parchment-light">Crops and Seeds by Purpose</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {cropGroups.map((group) => (
            <article key={group.title} className="rounded-md border border-stone-medium bg-stone-dark p-5">
              <h3 className="font-cinzel text-xl text-parchment-light">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{group.use}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="bg-obsidian/70 px-3 py-2 text-xs text-parchment">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="planning" className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-md border border-stone-medium bg-stone-dark p-6">
          <h2 className="font-cinzel text-2xl text-parchment-light">Food Outputs to Track</h2>
          <div className="mt-4 overflow-x-auto border border-stone-medium">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="table-header">
                  <th className="p-3 text-left font-cinzel">Output</th>
                  <th className="p-3 text-left font-cinzel">Use</th>
                </tr>
              </thead>
              <tbody>
                {foodOutputs.map(([food, use], index) => (
                  <tr key={food} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
                    <td className="p-3 font-semibold text-parchment-light">{food}</td>
                    <td className="p-3 text-ash">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-md border border-stone-medium bg-stone-dark p-6">
          <h2 className="font-cinzel text-2xl text-parchment-light">Planning Rules</h2>
          <div className="mt-4 space-y-3">
            {planningRules.map(([title, text]) => (
              <div key={title} className="border border-stone-medium bg-obsidian/45 p-4">
                <h3 className="font-cinzel text-lg text-parchment-light">{title}</h3>
                <p className="mt-2 text-sm text-ash">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="automation" className="mt-12 rounded-md border border-stone-medium bg-stone-dark p-6">
        <h2 className="font-cinzel text-2xl text-parchment-light">Farmstead Automation</h2>
        <p className="mt-3 text-sm leading-relaxed text-ash">
          Farmstead houses a farmer who works nearby crops. Treat it as a mid-game labor upgrade. If farms are too far away, storage is misplaced, or processing is missing, automation only makes the broken loop run faster.
        </p>
        <Image src="/images/screenshots/farming-mechanics.webp" alt="Romestead farming mechanics" width={1000} height={560} className="mt-5 rounded-md border border-stone-medium" />
      </section>

      <div id="mistakes" className="prose-romestead mt-12">
        <h2>Common Farming Mistakes</h2>
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
        <Link href="/wiki/building" className="btn-primary">Building Guide</Link>
        <Link href="/wiki/items" className="btn-ghost">Open Items Database</Link>
      </div>
    </BlogLayout>
  );
}
