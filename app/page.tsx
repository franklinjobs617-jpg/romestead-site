import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Combat Guides",
    description:
      "Weapon data, enemy weaknesses, boss tactics, dodge mechanics, heavy attacks, and scroll usage.",
    href: "/guides/tips-tricks",
    tag: "COMBAT",
    image: "/images/screenshots/combat-battle.webp",
  },
  {
    title: "Building & Settlements",
    description:
      "Settlement planning, building order, storage placement, wall defense, and citizen management.",
    href: "/wiki/building",
    tag: "BUILD",
    image: "/images/screenshots/village-overview.webp",
  },
  {
    title: "Farming & Food",
    description:
      "Crop planting, wheat-to-bread chain, millstone mechanics, food storage tips, and cooking priorities.",
    href: "/wiki/farming",
    tag: "FARM",
    image: "/images/screenshots/farming-field.webp",
  },
  {
    title: "World Exploration",
    description:
      "Biome tiers, dungeon traps, hidden chests, survivor camps, resource nodes, and map strategies.",
    href: "/wiki/biomes",
    tag: "EXPLORE",
    image: "/images/screenshots/exploration-cave.webp",
  },
  {
    title: "Multiplayer Co-op",
    description:
      "1-8 player co-op setup, role specialization, difficulty scaling, and team strategies.",
    href: "/guides/multiplayer-dedicated-server",
    tag: "CO-OP",
    image: "/images/screenshots/multiplayer-coop.webp",
  },
  {
    title: "Gods & Altars",
    description:
      "Offering preferences, talent tree unlocks, divine buffs, building unlocks, and altar progression.",
    href: "/wiki/gods",
    tag: "DIVINE",
    image: "/images/screenshots/god-altar.webp",
  },
];

const latestGuides = [
  {
    slug: "best-class-profession",
    title: "Best Class & Profession Guide",
    tag: "BEGINNER",
    image: "/images/screenshots/crafting-interior.webp",
  },
  {
    slug: "steam-deck-controller",
    title: "Steam Deck & Controller",
    tag: "TECHNICAL",
    image: "/images/screenshots/hero-settlement.webp",
  },
  {
    slug: "multiplayer-dedicated-server",
    title: "Multiplayer & Co-op",
    tag: "MULTIPLAYER",
    image: "/images/screenshots/multiplayer-coop.webp",
  },
  {
    slug: "tips-tricks",
    title: "Tips & Tricks",
    tag: "TIPS",
    image: "/images/screenshots/night-zombies.webp",
  },
];

const quickLinks = [
  { label: "Item Database", href: "/wiki/items", icon: "DB" },
  { label: "Crafting Recipes", href: "/wiki/crafting", icon: "CR" },
  { label: "Biome Guide", href: "/wiki/biomes", icon: "BG" },
  { label: "Boss Strategies", href: "/wiki/bosses", icon: "BS" },
];

const screenshots = [
  { src: "/images/screenshots/hero-settlement.webp", alt: "Roman settlement overview" },
  { src: "/images/screenshots/combat-battle.webp", alt: "Combat against undead enemies" },
  { src: "/images/screenshots/farming-field.webp", alt: "Farming and crop management" },
  { src: "/images/screenshots/exploration-cave.webp", alt: "Exploring dangerous caves" },
  { src: "/images/screenshots/night-zombies.webp", alt: "Night time zombie attacks" },
  { src: "/images/screenshots/god-altar.webp", alt: "God altar and offerings" },
];

const valueCards = [
  {
    title: "Route first",
    text: "Guides explain the next useful action instead of leaving you with a flat database.",
  },
  {
    title: "No duplicate clutter",
    text: "Weapons, items, bosses, and buildings are grouped by player use, not repeated screenshots.",
  },
  {
    title: "Search-ready answers",
    text: "Pages include FAQ, tables, schema, and internal links so players and search engines find direct answers.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/screenshots/hero-settlement.webp"
            alt="Romestead settlement"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="animate-fade-in">
            <p className="mb-3 font-pixel text-[10px] uppercase tracking-[0.2em] text-ember sm:mb-4 sm:text-xs">
              Available now on Steam
            </p>
            <h1 className="mb-4 font-cinzel text-4xl font-bold tracking-wider text-parchment-light drop-shadow-2xl sm:mb-6 sm:text-6xl md:text-8xl">
              ROMESTEAD
            </h1>
            <p className="mb-4 font-cinzel text-lg text-ember sm:mb-6 sm:text-xl md:text-2xl">
              The Ultimate Guide &amp; Wiki
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-parchment sm:mb-10 sm:text-base md:text-lg">
              Survive the zombie apocalypse, rebuild the Roman Empire, and restore
              the gods. Use clear build routes, item priorities, crafting chains,
              boss plans, and settlement fixes instead of guessing.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/guides" className="btn-primary px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-lg">
                Browse Guides
              </Link>
              <Link href="/wiki" className="btn-ghost px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-lg">
                Open Wiki
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-8">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-parchment/30 p-1.5 sm:h-10 sm:w-6 sm:p-2">
            <div className="h-2 w-1 animate-scroll rounded-full bg-parchment/50 sm:h-3" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="mb-6 flex items-center justify-between sm:mb-10">
          <h2 className="font-cinzel text-2xl text-parchment-light sm:text-3xl">
            Latest Guides
          </h2>
          <Link
            href="/guides"
            className="group text-xs font-medium text-ember hover:text-ember-dark sm:text-sm"
          >
            View all <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {latestGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card group overflow-hidden p-0 transition-all hover:-translate-y-1 hover:border-ember"
            >
              <div className="relative h-28 w-full overflow-hidden sm:h-36">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-transparent to-transparent" />
              </div>
              <div className="p-3 sm:p-5">
                <span className="badge mb-2 inline-block text-[7px] sm:mb-3 sm:text-[8px]">
                  {guide.tag}
                </span>
                <h3 className="line-clamp-2 font-cinzel text-xs text-parchment-light transition-colors group-hover:text-ember sm:text-sm">
                  {guide.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone-dark py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-3 text-center font-cinzel text-2xl text-parchment-light sm:mb-4 sm:text-3xl">
            What We Cover
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-center text-sm text-ash sm:mb-14 sm:text-base">
            Everything you need to know about Romestead, from beginner basics to
            advanced strategies.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="card group cursor-pointer overflow-hidden p-0 transition-all hover:-translate-y-1 hover:border-ember"
              >
                <div className="relative h-36 w-full overflow-hidden sm:h-44">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-stone-dark/60 to-transparent" />
                  <span className="badge absolute left-3 top-3 text-[7px] sm:text-[8px]">
                    {feature.tag}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="mb-1.5 font-cinzel text-base text-parchment-light transition-colors group-hover:text-ember sm:mb-2 sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-ash sm:line-clamp-none sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-ember">
              Why Romestead Guide
            </p>
            <h2 className="mt-3 font-cinzel text-2xl text-parchment-light sm:text-3xl">
              Built for decisions, not copied item text
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ash sm:text-base">
              The official wiki is useful for raw facts. This site turns those facts into routes:
              what to build first, which materials matter, when to add citizens, what to farm before
              bosses, and which mistakes waste the most time.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {valueCards.map((card) => (
              <div key={card.title} className="border border-stone-medium bg-stone-dark p-4">
                <h3 className="font-cinzel text-lg text-parchment-light">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ash">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <h2 className="mb-3 text-center font-cinzel text-2xl text-parchment-light sm:mb-4 sm:text-3xl">
          Game Gallery
        </h2>
        <p className="mb-6 text-center text-sm text-ash sm:mb-10 sm:text-base">
          Screenshots from the live Romestead Early Access build
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.src}
              className="group relative aspect-video cursor-pointer overflow-hidden rounded-md border border-stone-medium transition-all hover:-translate-y-1 hover:border-ember"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-dark py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-6 text-center font-cinzel text-xl text-parchment-light sm:mb-8 sm:text-2xl">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card group text-center transition-all hover:-translate-y-1 hover:border-ember"
              >
                <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center border border-stone-medium bg-obsidian font-pixel text-[9px] text-ember">
                  {link.icon}
                </span>
                <span className="font-cinzel text-xs text-parchment transition-colors group-hover:text-ember sm:text-sm">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid grid-cols-3 gap-3 sm:gap-8">
          <div className="card p-3 text-center sm:p-6">
            <p className="mb-1 font-cinzel text-2xl text-ember sm:mb-2 sm:text-4xl">1-8</p>
            <p className="text-[10px] text-ash sm:text-sm">Player Co-op</p>
          </div>
          <div className="card p-3 text-center sm:p-6">
            <p className="mb-1 font-cinzel text-xl text-ember sm:mb-2 sm:text-4xl">Available Now</p>
            <p className="text-[10px] text-ash sm:text-sm">Released May 26, 2026 06:31 UTC</p>
          </div>
          <div className="card p-3 text-center sm:p-6">
            <p className="mb-1 font-cinzel text-lg text-ember sm:mb-2 sm:text-4xl">Mostly Positive</p>
            <p className="text-[10px] text-ash sm:text-sm">800+ Steam Reviews</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/screenshots/night-zombies.webp"
            alt="Night zombies"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-obsidian/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="mb-3 font-cinzel text-2xl text-parchment-light sm:mb-4 sm:text-3xl">
            New to Romestead?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-parchment sm:mb-8 sm:text-base">
            Start with the beginner guide. Learn the basics of survival, building,
            and progression in the fallen Roman world.
          </p>
          <Link href="/guides/tips-tricks" className="btn-primary px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-lg">
            Read the Beginner Guide
          </Link>
        </div>
      </section>
    </main>
  );
}
