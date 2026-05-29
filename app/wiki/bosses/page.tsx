import BlogLayout from "@/components/BlogLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Romestead Bosses Guide - Locations, Drops, Fight Tips & Videos",
  description:
    "Romestead bosses guide with Guardian of Minerva, Pyzifax, Cyclops, locations, triggers, HP, loot drops, fight tips, videos, and FAQ.",
  alternates: {
    canonical: "/wiki/bosses",
  },
  openGraph: {
    title: "Romestead Bosses Guide - Locations, Drops, Fight Tips & Videos",
    description:
      "Find Romestead boss locations, triggers, HP, loot drops, fight plans, videos, and confirmed future boss previews.",
    url: "https://romesteadguide.top/wiki/bosses",
    type: "article",
    images: [
      {
        url: "/images/screenshots/boss-fight.webp",
        width: 1200,
        height: 630,
        alt: "Romestead boss fight guide",
      },
    ],
  },
};

const breadcrumbs = [
  { label: "Wiki", href: "/wiki" },
  { label: "Bosses" },
];

const toc = [
  { id: "overview", label: "Overview" },
  { id: "progression", label: "Progression Route" },
  { id: "current-bosses", label: "Current Bosses" },
  { id: "videos", label: "Videos" },
  { id: "loot", label: "Loot Targets" },
  { id: "future-bosses", label: "Future Bosses" },
  { id: "faq", label: "FAQ" },
];

const trendingGuides = [
  { title: "Weapons Guide", href: "/wiki/weapons" },
  { title: "Armor Sets", href: "/wiki/armor" },
  { title: "Tips & Tricks", href: "/guides/tips-tricks" },
  { title: "Best Class & Profession", href: "/guides/best-class-profession" },
];

const bosses = [
  {
    id: "guardian",
    name: "Guardian of Minerva",
    status: "Confirmed",
    biome: "Plains",
    hp: "225",
    element: "Nature",
    image: "/images/wiki/bosses/guardian-of-minerva.png",
    locationImage: "/images/wiki/bosses/guardian-of-minerva-s-nest.png",
    role: "First progression boss",
    trigger: "Find the nest in the Plains and break the egg.",
    find: "Watch for the sky-presence message and shadow direction. A Plains statue can point toward the nest when a nearby campfire is lit.",
    tactics: [
      "Treat dive bombs as the main danger: wait for the commitment, dodge, then punish.",
      "Do not stand still after a charged jump; reset distance before the shockwave.",
      "Bring a shield, cooked food, and either a spear or bow so you can fight while keeping space.",
      "The fight unlocks important early progression, so over-preparing is faster than corpse-running.",
    ],
    attacks: ["Dive Bomb", "Charged Jump", "Shockwave", "Lightning"],
    guaranteed: [
      "Coal",
      "Copper Bar",
      "Poisoned Arrow",
      "Quadrans",
      "Denarius",
      "Guardians Feather",
      "Guardians Talon",
      "Guardian's Eye",
    ],
    random: ["Feathered Hood", "Feathered Armor", "Feathered Boots"],
    source: "https://romestead.wiki.gg/wiki/Guardian_of_Minerva",
  },
  {
    id: "pyzifax",
    name: "Pyzifax",
    status: "Confirmed",
    biome: "Desert",
    hp: "500",
    element: "Unknown",
    image: "/images/wiki/bosses/pyzifax.png",
    locationImage: "/images/wiki/bosses/desert-satyr-s-base.png",
    role: "Desert boss",
    trigger: "Found in the Desert boss chain; the exact route is not fully documented yet.",
    find: "Use the Desert Satyr base image and desert progression as the clue. Treat this as a mid-game target after Plains progression.",
    tactics: [
      "Bring upgraded armor before entering the Desert chain.",
      "Carry ranged damage so you are not forced to trade into every attack.",
      "Farm this boss when you need banner, sapphire, tin, or one of the random relic-style drops.",
      "Do not assume a complete move list until more fight data is confirmed.",
    ],
    attacks: ["Unknown pattern", "Desert pressure", "Likely close-range threat"],
    guaranteed: ["Cape of Pyzifax Banner", "Sapphire", "Tin Bar"],
    random: [
      "Assassin's Scroll",
      "Fools' Gold",
      "Gardener's Gloves",
      "Locusta Legatus",
      "Physician's Cloak",
      "Scroll of Vulcan",
      "Grapes",
      "Wine",
      "Denarius",
      "Quadrans",
    ],
    source: "https://romestead.wiki.gg/wiki/Pyzifax",
  },
  {
    id: "eye",
    name: "The Eye / Cyclops",
    status: "Confirmed",
    biome: "Desert",
    hp: "10,000",
    element: "Unknown",
    image: "/images/wiki/bosses/cyclops.png",
    locationImage: "/images/wiki/bosses/high-temple-of-the-satyrs.png",
    role: "Second main progression boss",
    trigger: "Fight the Cyclops in the depths of The Eye dungeon during Virgil's Poem progression.",
    find: "The Eye dungeon is documented in the Desert region. Prepare before committing to a deep dungeon run.",
    tactics: [
      "This is not an early boss. The HP jump from Minerva to Cyclops is massive.",
      "Bring bronze-tier weapons, strong armor, and enough food for a long fight.",
      "Prioritize survival windows over greedy damage; long fights punish panic healing.",
      "Farm it for Tectonic set progression and Cyclops materials.",
    ],
    attacks: ["Dungeon boss pressure", "Large-hit punishment", "Long-fight attrition"],
    guaranteed: [
      "Granite Tooth",
      "Nail of the Cyclops",
      "Cyclops Shard",
      "Bronze Bar",
      "Linen",
      "Bonesplint",
      "Quadrans",
      "Denarius",
      "Signet of Demo Completion",
    ],
    random: ["Tectonic Helmet", "Tectonic Armor", "Tectonic Boots"],
    source: "https://romestead.wiki.gg/wiki/Cyclops",
  },
];

const futureBosses = [
  {
    name: "Giant Phoenix",
    image: "/images/wiki/bosses/boss-preview-phoenix.jpg",
    note: "Shown in trailer or screenshot material, not confirmed as a finished playable boss on the wiki.",
  },
  {
    name: "Robot",
    image: "/images/wiki/bosses/boss-preview-robot.jpg",
    note: "Preview-only status. Do not build a guide around it until release data exists.",
  },
  {
    name: "Talos",
    image: "/images/wiki/bosses/boss-preview-talos.jpg",
    note: "Listed as a potential future boss.",
  },
];

const progression = [
  {
    step: "1",
    title: "Plains signal",
    text: "Follow the sky-presence message, owl shadow, or campfire-lit statue clue toward Minerva's nest.",
  },
  {
    step: "2",
    title: "Break the egg",
    text: "The Guardian fight starts when the nest egg is destroyed. Do not trigger it while hungry or under-geared.",
  },
  {
    step: "3",
    title: "Move into Desert",
    text: "After early progression, Desert bosses become the next confirmed targets: Pyzifax and The Eye.",
  },
  {
    step: "4",
    title: "Farm targeted loot",
    text: "Repeated boss kills matter because random armor and relic-style drops are not guaranteed every run.",
  },
];

const faqs = [
  {
    question: "How many bosses are confirmed in Romestead right now?",
    answer:
      "The official Bosses page says the game currently features 5 bosses, but the public boss pages with concrete details currently cover Guardian of Minerva, Pyzifax, and The Eye / Cyclops. Preview-only bosses are separated from confirmed playable entries here.",
  },
  {
    question: "What is the first boss in Romestead?",
    answer:
      "Guardian of Minerva is the first boss. She is a giant owl boss in the Plains, and the fight starts after you find the nest and break the egg.",
  },
  {
    question: "How do you find Guardian of Minerva?",
    answer:
      "Watch for the sky-presence message and owl shadow direction. You can also activate a Plains statue by lighting a nearby campfire, which points toward the nest.",
  },
  {
    question: "What should I bring to the first boss fight?",
    answer:
      "Bring cooked food, a shield, a spear or bow, and early armor. The safest plan is to keep distance, dodge dive attacks, and punish after committed moves.",
  },
  {
    question: "What does Cyclops drop?",
    answer:
      "Cyclops can drop Granite Tooth, Nail of the Cyclops, Cyclops Shard, Bronze Bar, Linen, Bonesplint, currency, Signet of Demo Completion, and one Tectonic armor piece.",
  },
  {
    question: "Are Giant Phoenix, Robot, and Talos playable bosses?",
    answer:
      "They are labeled as potential future bosses shown in trailer or screenshot material. Do not treat them as confirmed playable fights until release data confirms them.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Romestead Bosses Guide - Locations, Drops, Fight Tips & Videos",
  description:
    "A Romestead bosses guide covering confirmed boss locations, triggers, HP, drops, fight tips, videos, and future boss previews.",
  author: {
    "@type": "Organization",
    name: "Romestead Guide",
  },
  publisher: {
    "@type": "Organization",
    name: "Romestead Guide",
  },
  mainEntityOfPage: "https://romesteadguide.top/wiki/bosses",
};

function BossCard({ boss }: { boss: (typeof bosses)[number] }) {
  return (
    <article id={boss.id} className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
      <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
        <div className="relative min-h-72 border-b border-stone-medium bg-obsidian/70 lg:border-b-0 lg:border-r">
          <Image
            src={boss.image}
            alt={boss.name}
            width={420}
            height={360}
            className="h-full w-full object-contain p-8"
            unoptimized
          />
          <div className="absolute left-4 top-4 bg-ember px-3 py-1 font-pixel text-[8px] uppercase tracking-widest text-obsidian">
            {boss.status}
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-stone-medium bg-obsidian/70 px-3 py-1 text-xs text-ash">{boss.biome}</span>
            <span className="border border-stone-medium bg-obsidian/70 px-3 py-1 text-xs text-ash">HP {boss.hp}</span>
            <span className="border border-stone-medium bg-obsidian/70 px-3 py-1 text-xs text-ash">{boss.element}</span>
          </div>
          <h2 className="mt-4 font-cinzel text-3xl font-bold text-parchment-light">{boss.name}</h2>
          <p className="mt-2 font-pixel text-[8px] uppercase tracking-widest text-ember">{boss.role}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="border border-stone-medium bg-obsidian/55 p-4">
              <h3 className="font-cinzel text-lg text-parchment-light">How to Start</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{boss.trigger}</p>
            </div>
            <div className="border border-stone-medium bg-obsidian/55 p-4">
              <h3 className="font-cinzel text-lg text-parchment-light">How to Find</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{boss.find}</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-cinzel text-lg text-parchment-light">Fight Plan</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-ash">
              {boss.tactics.map((item) => (
                <li key={item} className="border-l-2 border-ember/70 bg-obsidian/35 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function LootTable() {
  return (
    <div className="overflow-x-auto border border-stone-medium">
      <table className="min-w-[820px] w-full text-sm">
        <thead>
          <tr className="table-header">
            <th className="p-3 text-left font-cinzel">Boss</th>
            <th className="p-3 text-left font-cinzel">Guaranteed / Listed Drops</th>
            <th className="p-3 text-left font-cinzel">Random or One-of Drops</th>
            <th className="p-3 text-left font-cinzel">Why Farm</th>
          </tr>
        </thead>
        <tbody>
          {bosses.map((boss, index) => (
            <tr key={boss.name} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
              <td className="p-3 font-semibold text-parchment-light">{boss.name}</td>
              <td className="p-3 text-xs leading-relaxed text-ash">{boss.guaranteed.join(", ")}</td>
              <td className="p-3 text-xs leading-relaxed text-ash">{boss.random.join(", ")}</td>
              <td className="p-3 text-parchment">
                {boss.id === "guardian" && "Feathered armor and early progression materials"}
                {boss.id === "pyzifax" && "Sapphire, tin, banner, and utility drops"}
                {boss.id === "eye" && "Cyclops materials and Tectonic armor pieces"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BossesPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative overflow-hidden rounded-md border border-stone-medium bg-[radial-gradient(circle_at_top_right,rgba(192,57,43,0.24),transparent_34%),linear-gradient(135deg,rgba(26,26,26,0.98),rgba(13,13,13,0.98))]">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_280px] lg:items-center">
          <div>
            <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-ember">Romestead Boss Index</p>
            <h1 className="mt-4 font-cinzel text-3xl font-extrabold leading-tight text-parchment-light sm:text-5xl">
              Bosses: locations, triggers, fight plans, drops, and videos
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-parchment">
              Find every confirmed boss route in one place: where to go, what starts the fight, what to bring,
              what attacks to expect, and which loot is worth farming.
            </p>
            <p className="mt-4 text-xs text-ash">
              Data checked May 2026:{" "}
              <a href="https://romestead.wiki.gg/wiki/Bosses" target="_blank" rel="noopener noreferrer" className="text-ember underline underline-offset-2">
                official Bosses page
              </a>
              , Guardian of Minerva, Pyzifax, and Cyclops pages.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
            {bosses.map((boss) => (
              <a key={boss.id} href={`#${boss.id}`} className="border border-stone-medium bg-obsidian/60 p-3 text-center transition-colors hover:border-ember">
                <Image src={boss.image} alt="" width={96} height={96} className="mx-auto h-16 w-16 object-contain" unoptimized />
                <span className="mt-2 block text-xs text-parchment-light">{boss.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="prose-romestead mt-10">
        <h2 id="overview">Overview</h2>
        <p>
          Bosses are progression gates, loot targets, and build checks. The useful question is not simply
          &quot;what bosses exist?&quot; It is: &quot;what do I need before triggering this fight, and what reward justifies farming it?&quot;
        </p>
        <p>
          Confirmed fights and preview-only bosses are separated because unfinished trailer bosses should not be treated as playable content.
        </p>
      </div>

      <section id="progression" className="mt-10">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Progression Route</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {progression.map((item) => (
            <div key={item.step} className="border border-stone-medium bg-stone-dark p-5">
              <span className="flex h-10 w-10 items-center justify-center border border-ember/60 bg-obsidian font-cinzel text-ember">
                {item.step}
              </span>
              <h3 className="mt-4 font-cinzel text-xl text-parchment-light">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="current-bosses" className="mt-12 space-y-6">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Current Confirmed Bosses</h2>
        {bosses.map((boss) => (
          <BossCard key={boss.id} boss={boss} />
        ))}
      </section>

      <section id="videos" className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Video Reference</h2>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          The two embeds below cover finding Guardian of Minerva and seeing the fight pattern.
        </p>
        <YouTubeEmbed videoId="0af7ZiIeyMY" title="Finding Guardian of Minerva in Romestead" />
        <YouTubeEmbed videoId="00RxuTPTIkY" title="Battle against Guardian of Minerva in Romestead" />
      </section>

      <section id="loot" className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Loot Targets</h2>
        <p className="mt-2 mb-5 text-sm leading-relaxed text-ash">
          Boss drops are not all equal. Farm with a target: Feathered armor from Minerva, Pyzifax utility drops, and Tectonic pieces from Cyclops.
        </p>
        <LootTable />
      </section>

      <section className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Location Clues Gallery</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {bosses.map((boss) => (
            <div key={boss.locationImage} className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
              <div className="flex h-36 items-center justify-center bg-obsidian/60">
                <Image src={boss.locationImage} alt={`${boss.name} location clue`} width={180} height={180} className="h-28 w-28 object-contain" unoptimized />
              </div>
              <div className="p-4">
                <h3 className="font-cinzel text-lg text-parchment-light">{boss.name}</h3>
                <p className="mt-2 text-sm text-ash">{boss.find}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="future-bosses" className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Potential Future Bosses</h2>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          These are preview-only entries. They belong here for tracking, but they must stay clearly separated from playable fights.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {futureBosses.map((boss) => (
            <article key={boss.name} className="overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
              <Image src={boss.image} alt={boss.name} width={500} height={400} className="h-40 w-full object-cover opacity-80" unoptimized />
              <div className="p-4">
                <p className="font-pixel text-[8px] uppercase tracking-widest text-ash">Preview only</p>
                <h3 className="mt-2 font-cinzel text-xl text-parchment-light">{boss.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{boss.note}</p>
              </div>
            </article>
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
