import Image from "next/image";
import Link from "next/link";

const wikiCategories = [
  {
    title: "Weapons",
    description: "27 weapons grouped by combat role, damage type, recipes, and local item art.",
    href: "/wiki/weapons",
    tag: "ARMORY",
    count: "27 items",
    image: "/images/wiki/weapons/bronze-sledgehammer.png",
    accent: "from-ember/30",
  },
  {
    title: "Armor Sets",
    description: "48 armor pieces across leather, cloth, metal, boss, and dungeon sets.",
    href: "/wiki/armor",
    tag: "DEFENSE",
    count: "20 sets",
    image: "/images/screenshots/leather-worker-setup.webp",
    accent: "from-gold/25",
  },
  {
    title: "Gods & Altars",
    description: "Worship trees, altar unlocks, bonuses, and settlement progression.",
    href: "/wiki/gods",
    tag: "ALTARS",
    count: "7 gods",
    image: "/images/screenshots/god-altar.webp",
    accent: "from-spirit/25",
  },
  {
    title: "Biomes & Regions",
    description: "Resources, enemies, difficulty curve, and exploration priorities by region.",
    href: "/wiki/biomes",
    tag: "MAP",
    count: "5 regions",
    image: "/images/screenshots/exploration-cave.webp",
    accent: "from-forest/25",
  },
  {
    title: "Boss Strategies",
    description: "Boss weaknesses, fight rhythm, loot targets, and phase notes.",
    href: "/wiki/bosses",
    tag: "BOSSES",
    count: "Tactics",
    image: "/images/screenshots/boss-fight.webp",
    accent: "from-blood/25",
  },
  {
    title: "Building",
    description: "Settlement build order, houses, workplaces, storage, roads, carts, and defenses.",
    href: "/wiki/building",
    tag: "BUILD",
    count: "Planner",
    image: "/images/screenshots/starter-village.webp",
    accent: "from-gold/25",
  },
  {
    title: "Farming",
    description: "Food chains, seeds, farm land, bread, storage, and Farmstead automation.",
    href: "/wiki/farming",
    tag: "FOOD",
    count: "Chains",
    image: "/images/screenshots/farming-field.webp",
    accent: "from-forest/25",
  },
  {
    title: "Items Database",
    description: "Materials, food, seeds, armor, weapons, tools, accessories, and worship items.",
    href: "/wiki/items",
    tag: "ITEMS",
    count: "Index",
    image: "/images/screenshots/crafting-interior.webp",
    accent: "from-spirit/25",
  },
  {
    title: "Crafting",
    description: "Stations, material chains, blacksmithing, leatherworking, bakery, and upgrades.",
    href: "/wiki/crafting",
    tag: "CRAFT",
    count: "Stations",
    image: "/images/screenshots/leather-worker-setup.webp",
    accent: "from-ember/30",
  },
  {
    title: "Multiplayer",
    description: "Co-op roles, server setup, team economy, and shared base planning.",
    href: "/guides/multiplayer-dedicated-server",
    tag: "CO-OP",
    count: "Guide",
    image: "/images/screenshots/multiplayer-coop.webp",
    accent: "from-shadow/25",
  },
];

const featuredWeapons = [
  { name: "Bronze Sledgehammer", image: "/images/wiki/weapons/bronze-sledgehammer.png", stat: "22-24 blunt" },
  { name: "Aegis", image: "/images/wiki/weapons/aegis.png", stat: "Petrify block" },
  { name: "Iron Pilum", image: "/images/wiki/weapons/iron-pilum.png", stat: "25-30 throw" },
  { name: "Ballistarii Bow", image: "/images/wiki/weapons/ballistarii-bow.png", stat: "14-16 ranged" },
];

const recentUpdates = [
  { tag: "FIXED", text: "Weapons guide now uses 27 official entries, not the old incorrect 26 count.", href: "/wiki/weapons" },
  { tag: "MEDIA", text: "Weapon icons were downloaded locally and reduced to representative visual use.", href: "/wiki/weapons" },
  { tag: "DATA", text: "Armor guide tracks 48 armor pieces across 20 sets.", href: "/wiki/armor" },
];

export default function WikiPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-stone-medium bg-[radial-gradient(circle_at_20%_0%,rgba(230,126,34,0.16),transparent_32%),linear-gradient(180deg,#12100d_0%,#0d0d0d_78%)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="font-pixel text-[9px] uppercase tracking-[0.32em] text-ember">Romestead Knowledge Base</p>
            <h1 className="mt-5 max-w-3xl font-cinzel text-4xl font-black leading-tight text-parchment-light sm:text-6xl">
              Wiki that works like an armory, not a text dump.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ash sm:text-lg">
              Fast lookup for weapons, armor, gods, biomes, bosses, and co-op systems. The page is built for decisions:
              what to craft, where to go, and what matters next.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
              <div className="border border-stone-medium bg-obsidian/60 p-4">
                <p className="font-pixel text-[8px] uppercase text-ash">Weapons</p>
                <p className="mt-2 font-cinzel text-2xl font-bold text-parchment-light">27</p>
              </div>
              <div className="border border-stone-medium bg-obsidian/60 p-4">
                <p className="font-pixel text-[8px] uppercase text-ash">Armor</p>
                <p className="mt-2 font-cinzel text-2xl font-bold text-parchment-light">48</p>
              </div>
              <div className="border border-stone-medium bg-obsidian/60 p-4">
                <p className="font-pixel text-[8px] uppercase text-ash">Regions</p>
                <p className="mt-2 font-cinzel text-2xl font-bold text-parchment-light">5</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-md border border-stone-medium bg-stone-dark p-5 shadow-strong">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(230,126,34,0.18),transparent_44%)]" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-pixel text-[8px] uppercase tracking-widest text-ember">Featured armory</p>
                <Link href="/wiki/weapons" className="text-sm font-semibold text-ember hover:text-ember-dark">
                  Open weapons
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {featuredWeapons.map((weapon) => (
                  <div key={weapon.name} className="border border-stone-medium bg-obsidian/65 p-4">
                    <div className="flex h-20 items-center justify-center">
                      <Image src={weapon.image} alt={weapon.name} width={88} height={88} className="h-16 w-16 object-contain" />
                    </div>
                    <h2 className="mt-3 font-cinzel text-base text-parchment-light">{weapon.name}</h2>
                    <p className="mt-1 text-xs uppercase tracking-wide text-ash">{weapon.stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-pixel text-[8px] uppercase tracking-widest text-ember">Index</p>
            <h2 className="mt-2 font-cinzel text-3xl font-bold text-parchment-light">Browse Wiki Sections</h2>
          </div>
          <p className="max-w-md text-sm text-ash">
            Cards now show real game context instead of empty labels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {wikiCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group overflow-hidden rounded-md border border-stone-medium bg-stone-dark transition-all duration-200 hover:-translate-y-1 hover:border-ember hover:shadow-glow-ember"
            >
              <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${category.accent} to-transparent`}>
                <Image
                  src={category.image}
                  alt=""
                  width={420}
                  height={240}
                  className="h-full w-full object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-stone-dark/40 to-transparent" />
                <span className="absolute left-4 top-4 bg-obsidian/80 px-3 py-1 font-pixel text-[8px] uppercase tracking-widest text-parchment-light">
                  {category.tag}
                </span>
                <span className="absolute bottom-4 right-4 border border-stone-medium bg-obsidian/80 px-3 py-1 text-xs text-ash">
                  {category.count}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-cinzel text-xl text-parchment-light transition-colors group-hover:text-ember">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-cinzel text-3xl text-parchment-light">Recent Updates</h2>
        <div className="mt-6 divide-y divide-stone-medium overflow-hidden rounded-md border border-stone-medium bg-stone-dark">
          {recentUpdates.map((update) => (
            <Link key={update.text} href={update.href} className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-stone-medium/40">
              <div className="min-w-0">
                <span className="mr-3 inline-block bg-stone-medium px-3 py-1 font-pixel text-[8px] uppercase text-parchment-light">
                  {update.tag}
                </span>
                <span className="text-parchment">{update.text}</span>
              </div>
              <span className="text-ember">-&gt;</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
