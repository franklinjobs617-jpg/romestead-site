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
      "Settlement planning, building recipes, permanent placement warnings, wall defense, and citizen management.",
    href: "/wiki/building",
    tag: "BUILD",
    image: "/images/screenshots/village-overview.webp",
  },
  {
    title: "Farming & Food",
    description:
      "Crop planting, wheat-to-bread chain, millstone mechanics, food storage tips, and cooking guides.",
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
  { label: "Item Database", href: "/wiki/items", icon: "📦" },
  { label: "Crafting Recipes", href: "/wiki/crafting", icon: "⚒️" },
  { label: "Biome Guide", href: "/wiki/biomes", icon: "🗺️" },
  { label: "Boss Strategies", href: "/wiki/bosses", icon: "⚔️" },
];

const screenshots = [
  { src: "/images/screenshots/hero-settlement.webp", alt: "Roman settlement overview" },
  { src: "/images/screenshots/combat-battle.webp", alt: "Combat against undead enemies" },
  { src: "/images/screenshots/farming-field.webp", alt: "Farming and crop management" },
  { src: "/images/screenshots/exploration-cave.webp", alt: "Exploring dangerous caves" },
  { src: "/images/screenshots/night-zombies.webp", alt: "Night time zombie attacks" },
  { src: "/images/screenshots/god-altar.webp", alt: "God altar and offerings" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
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

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <p className="font-pixel text-ember text-[10px] sm:text-xs mb-3 sm:mb-4 tracking-[0.2em] uppercase">
              Early Access 2026
            </p>
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-8xl font-bold text-parchment-light mb-4 sm:mb-6 tracking-wider drop-shadow-2xl">
              ROMESTEAD
            </h1>
            <p className="font-cinzel text-lg sm:text-xl md:text-2xl text-ember mb-4 sm:mb-6">
              The Ultimate Guide &amp; Wiki
            </p>
            <p className="text-parchment text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
              Survive the zombie apocalypse, rebuild the Roman Empire, and restore
              the gods. Your complete resource for guides, item data, crafting
              recipes, boss strategies, and more.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
              <Link href="/guides" className="btn-primary text-sm sm:text-lg px-5 sm:px-8 py-3 sm:py-4">
                Browse Guides
              </Link>
              <Link href="/wiki" className="btn-ghost text-sm sm:text-lg px-5 sm:px-8 py-3 sm:py-4">
                Open Wiki
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-parchment/30 rounded-full flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-1 h-2 sm:h-3 bg-parchment/50 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Latest Guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <h2 className="font-cinzel text-2xl sm:text-3xl text-parchment-light">
            Latest Guides
          </h2>
          <Link
            href="/guides"
            className="text-ember hover:text-ember-dark text-xs sm:text-sm font-medium group"
          >
            View all <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {latestGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card group hover:border-ember transition-all overflow-hidden p-0 hover:-translate-y-1"
            >
              <div className="relative h-28 sm:h-36 w-full overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-transparent to-transparent" />
              </div>
              <div className="p-3 sm:p-5">
                <span className="badge mb-2 sm:mb-3 inline-block text-[7px] sm:text-[8px]">
                  {guide.tag}
                </span>
                <h3 className="font-cinzel text-xs sm:text-sm text-parchment-light group-hover:text-ember transition-colors line-clamp-2">
                  {guide.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* What We Cover */}
      <section className="bg-stone-dark py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-cinzel text-2xl sm:text-3xl text-center text-parchment-light mb-3 sm:mb-4">
            What We Cover
          </h2>
          <p className="text-ash text-center mb-8 sm:mb-14 max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to know about Romestead, from beginner basics to
            advanced strategies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="card group cursor-pointer hover:border-ember transition-all overflow-hidden p-0 hover:-translate-y-1"
              >
                <div className="relative h-36 sm:h-44 w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-stone-dark/60 to-transparent" />
                  <span className="absolute top-3 left-3 badge text-[7px] sm:text-[8px]">
                    {feature.tag}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-cinzel text-base sm:text-xl text-parchment-light mb-1.5 sm:mb-2 group-hover:text-ember transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-ash text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h2 className="font-cinzel text-2xl sm:text-3xl text-center text-parchment-light mb-3 sm:mb-4">
          Game Gallery
        </h2>
        <p className="text-ash text-center mb-6 sm:mb-10 text-sm sm:text-base">
          Screenshots from Romestead Early Access
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-md overflow-hidden border border-stone-medium hover:border-ember transition-all group cursor-pointer hover:-translate-y-1"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-stone-dark py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-cinzel text-xl sm:text-2xl text-parchment-light mb-6 sm:mb-8 text-center">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card text-center hover:border-ember transition-all group hover:-translate-y-1"
              >
                <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">{link.icon}</span>
                <span className="font-cinzel text-parchment text-xs sm:text-sm group-hover:text-ember transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Game Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-3 gap-3 sm:gap-8">
          <div className="text-center card p-3 sm:p-6">
            <p className="font-cinzel text-2xl sm:text-4xl text-ember mb-1 sm:mb-2">1-8</p>
            <p className="text-ash text-[10px] sm:text-sm">Player Co-op</p>
          </div>
          <div className="text-center card p-3 sm:p-6">
            <p className="font-cinzel text-xl sm:text-4xl text-ember mb-1 sm:mb-2">Early Access</p>
            <p className="text-ash text-[10px] sm:text-sm">May 2026</p>
          </div>
          <div className="text-center card p-3 sm:p-6">
            <p className="font-cinzel text-lg sm:text-4xl text-ember mb-1 sm:mb-2">Mostly Positive</p>
            <p className="text-ash text-[10px] sm:text-sm">800+ Steam Reviews</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
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
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-cinzel text-2xl sm:text-3xl text-parchment-light mb-3 sm:mb-4">
            New to Romestead?
          </h2>
          <p className="text-parchment mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Start with our beginner guide. Learn the basics of survival, building,
            and progression in the fallen Roman world.
          </p>
          <Link href="/guides/tips-tricks" className="btn-primary text-sm sm:text-lg px-5 sm:px-8 py-3 sm:py-4">
            Read the Beginner Guide
          </Link>
        </div>
      </section>
    </main>
  );
}
