import BlogLayout from "@/components/BlogLayout";
import Image from "next/image";

const breadcrumbs = [
  { label: "Wiki", href: "/wiki" },
  { label: "Weapons" },
];

const toc = [
  { id: "overview", label: "Overview" },
  { id: "quick-picks", label: "Quick Picks" },
  { id: "armory", label: "Armory Highlights" },
  { id: "stats", label: "Full Stats" },
  { id: "tips", label: "Combat Notes" },
];

const trendingGuides = [
  { title: "Armor Sets", href: "/wiki/armor" },
  { title: "Best Starting Class & Profession", href: "/guides/best-class-profession" },
  { title: "Tips & Tricks for Beginners", href: "/guides/tips-tricks" },
  { title: "Gods & Altars", href: "/wiki/gods" },
];

type Weapon = {
  name: string;
  category: string;
  role: string;
  damage: string;
  type: string;
  speed: string;
  alt: string;
  materials: string;
  value: string;
  image: string;
  description: string;
};

const weaponGroups: { id: string; title: string; summary: string; weapons: Weapon[] }[] = [
  {
    id: "gladius",
    title: "Gladius",
    summary: "Fast slashing swords for stable close-range pressure.",
    weapons: [
      {
        name: "Flint Gladius",
        category: "Gladius",
        role: "Starter sword",
        damage: "3-4",
        type: "Slashing",
        speed: "Fast",
        alt: "No",
        materials: "1 Wooden Stick, 3 Flint Shard",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/flint-gladius.png",
        description: "A basic sword that keeps several enemies at bay.",
      },
      {
        name: "Copper Gladius",
        category: "Gladius",
        role: "First metal sword",
        damage: "6-7",
        type: "Slashing",
        speed: "Fast",
        alt: "No",
        materials: "1 Wooden Stick, 2 Copper Bar",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/copper-gladius.png",
        description: "The first metal gladius and the clean early melee upgrade.",
      },
      {
        name: "Bronze Gladius",
        category: "Gladius",
        role: "Bronze sword",
        damage: "10-12",
        type: "Slashing",
        speed: "Fast",
        alt: "No",
        materials: "2 Bronze Bar, 1 Wooden Stick",
        value: "26 Quadrans",
        image: "/images/wiki/weapons/bronze-gladius.png",
        description: "Higher damage while keeping the same fast sword rhythm.",
      },
    ],
  },
  {
    id: "hasta",
    title: "Hasta",
    summary: "Spears keep enemies at distance and pair well with shields.",
    weapons: [
      {
        name: "Flint Hasta",
        category: "Hasta",
        role: "Starter spear",
        damage: "4-5",
        type: "Piercing",
        speed: "Fast",
        alt: "Charge release",
        materials: "4 Wooden Stick, 3 Flint Shard",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/flint-hasta.png",
        description: "Long reach, directional commitment, and strong shield synergy.",
      },
      {
        name: "Copper Hasta",
        category: "Hasta",
        role: "Metal spear",
        damage: "7-9",
        type: "Piercing",
        speed: "Fast",
        alt: "Charge release",
        materials: "2 Copper Bar, 2 Wooden Stick",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/copper-hasta.png",
        description: "The first metal spear with a clear damage jump.",
      },
      {
        name: "Bronze Hasta",
        category: "Hasta",
        role: "Bronze spear",
        damage: "12-14",
        type: "Piercing",
        speed: "Fast",
        alt: "Charge release",
        materials: "2 Bronze Bar, 2 Wooden Stick",
        value: "26 Quadrans",
        image: "/images/wiki/weapons/bronze-hasta.png",
        description: "Reliable piercing damage for disciplined defensive play.",
      },
    ],
  },
  {
    id: "shields",
    title: "Shields",
    summary: "Off-hand defense built around timed blocks and counter windows.",
    weapons: [
      {
        name: "Wooden Shield",
        category: "Shield",
        role: "Starter block",
        damage: "Blocking",
        type: "Blocking",
        speed: "Fast",
        alt: "Timed block bonus",
        materials: "4 Plank, 2 Wooden Stick",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/wooden-shield.png",
        description: "Perfect timing can stun enemies and open damage windows.",
      },
      {
        name: "Copper Shield",
        category: "Shield",
        role: "Metal block",
        damage: "Blocking",
        type: "Blocking",
        speed: "Fast",
        alt: "Timed block bonus",
        materials: "3 Copper Bar, 1 Wooden Stick",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/copper-shield.png",
        description: "The first metal shield and a practical early safety item.",
      },
      {
        name: "Bronze Shield",
        category: "Shield",
        role: "Stronger block",
        damage: "Blocking",
        type: "Blocking",
        speed: "Fast",
        alt: "Timed block bonus",
        materials: "3 Bronze Bar, 1 Wooden Stick",
        value: "26 Quadrans",
        image: "/images/wiki/weapons/bronze-shield.png",
        description: "More block strength for harder encounters.",
      },
      {
        name: "Aegis",
        category: "Shield",
        role: "Boss shield",
        damage: "Blocking",
        type: "Blocking",
        speed: "Fast",
        alt: "Petrify on perfect block",
        materials: "10 Bronze Bar, 1 Medusa's Head, 1 Sapphire, 1 Amethyst",
        value: "-",
        image: "/images/wiki/weapons/aegis.png",
        description: "A Medusa-head shield that can petrify enemies on perfect block.",
      },
    ],
  },
  {
    id: "daggers",
    title: "Daggers",
    summary: "Very fast piercing weapons for isolated targets.",
    weapons: [
      {
        name: "Copper Daggers",
        category: "Dagger",
        role: "Fast opener",
        damage: "2-4",
        type: "Piercing",
        speed: "Extremely fast",
        alt: "No",
        materials: "1 Copper Bar, 1 Wooden Stick",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/copper-daggers.png",
        description: "Low per-hit damage, high tempo, best into single targets.",
      },
      {
        name: "Bronze Daggers",
        category: "Dagger",
        role: "Fast upgrade",
        damage: "4-6",
        type: "Piercing",
        speed: "Extremely fast",
        alt: "No",
        materials: "1 Bronze Bar, 1 Wooden Stick",
        value: "-",
        image: "/images/wiki/weapons/bronze-daggers.png",
        description: "A direct dagger upgrade for rapid piercing pressure.",
      },
    ],
  },
  {
    id: "sledgehammers",
    title: "Sledgehammers",
    summary: "Heavy bludgeoning weapons with knockback utility.",
    weapons: [
      {
        name: "Flint Sledgehammer",
        category: "Sledgehammer",
        role: "Heavy starter",
        damage: "5-8",
        type: "Bludgeoning",
        speed: "Fast",
        alt: "Knockback",
        materials: "-",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/flint-sledgehammer.png",
        description: "Heavy hits with a right-click knockback that consumes energy.",
      },
      {
        name: "Copper Sledgehammer",
        category: "Sledgehammer",
        role: "Metal hammer",
        damage: "12-16",
        type: "Bludgeoning",
        speed: "Fast",
        alt: "Knockback",
        materials: "4 Copper Bar, 2 Wooden Stick",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/copper-sledgehammer.png",
        description: "The first metal hammer with a major damage increase.",
      },
      {
        name: "Bronze Sledgehammer",
        category: "Sledgehammer",
        role: "Bronze hammer",
        damage: "22-24",
        type: "Bludgeoning",
        speed: "Fast",
        alt: "Knockback",
        materials: "4 Bronze Bar, 2 Wooden Stick",
        value: "26 Quadrans",
        image: "/images/wiki/weapons/bronze-sledgehammer.png",
        description: "The strongest listed raw melee damage among craftable hammers.",
      },
    ],
  },
  {
    id: "pilum",
    title: "Pilum",
    summary: "One-use thrown spears for burst damage from the off-hand.",
    weapons: [
      {
        name: "Copper Pilum",
        category: "Pilum",
        role: "Throwing burst",
        damage: "15-20",
        type: "Piercing",
        speed: "Fast",
        alt: "None",
        materials: "5 Copper Pilum Head, 5 Stick",
        value: "50 Quadrans",
        image: "/images/wiki/weapons/copper-pilum.png",
        description: "A one-time off-hand throw for heavy opening damage.",
      },
      {
        name: "Bronze Pilum",
        category: "Pilum",
        role: "Throwing burst",
        damage: "20-25",
        type: "Piercing",
        speed: "Fast",
        alt: "None",
        materials: "5 Bronze Pilum Head, 5 Stick",
        value: "-",
        image: "/images/wiki/weapons/bronze-pilum.png",
        description: "A stronger one-use thrown spear.",
      },
      {
        name: "Iron Pilum",
        category: "Pilum",
        role: "Throwing burst",
        damage: "25-30",
        type: "Piercing",
        speed: "Fast",
        alt: "None",
        materials: "5 Iron Pilum Head, 5 Stick",
        value: "-",
        image: "/images/wiki/weapons/iron-pilum.png",
        description: "The highest listed pilum burst damage on the official wiki.",
      },
    ],
  },
  {
    id: "bows",
    title: "Bows and Arcuballistas",
    summary: "Ranged weapons split between slow charged bows and fast off-hand crossbows.",
    weapons: [
      {
        name: "Wooden Bow",
        category: "Bow",
        role: "Starter ranged",
        damage: "2-4",
        type: "Piercing",
        speed: "Very slow",
        alt: "Scatter shot",
        materials: "2 Wooden Stick, 1 Leather",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/wooden-bow.png",
        description: "Timed shots raise damage; the right-click fires a scatter shot.",
      },
      {
        name: "Arquites Bow",
        category: "Bow",
        role: "Copper bow",
        damage: "5-6",
        type: "Piercing",
        speed: "Very slow",
        alt: "Scatter shot",
        materials: "2 Copper Bar, 3 Wooden Stick",
        value: "-",
        image: "/images/wiki/weapons/arquites-bow.png",
        description: "Early ranged upgrade using copper bars.",
      },
      {
        name: "Feathered Bow",
        category: "Bow",
        role: "Boss material bow",
        damage: "8-10",
        type: "Piercing",
        speed: "Very slow",
        alt: "Scatter shot",
        materials: "2 Arquites Bow, 1 Guardians Talon, 2 Guardians Feather",
        value: "-",
        image: "/images/wiki/weapons/feathered-bow.png",
        description: "A special bow built from Guardian materials.",
      },
      {
        name: "Sagittarii Bow",
        category: "Bow",
        role: "Bronze bow",
        damage: "10-12",
        type: "Piercing",
        speed: "Very slow",
        alt: "Scatter shot",
        materials: "2 Bronze Bar, 4 Wooden Stick",
        value: "-",
        image: "/images/wiki/weapons/sagittarii-bow.png",
        description: "A stronger bow for dedicated ranged builds.",
      },
      {
        name: "Ballistarii Bow",
        category: "Bow",
        role: "Iron bow",
        damage: "14-16",
        type: "Piercing",
        speed: "Very slow",
        alt: "Scatter shot",
        materials: "2 Iron Bar, 4 Wooden Stick",
        value: "-",
        image: "/images/wiki/weapons/ballistarii-bow.png",
        description: "The highest listed bow damage in the official weapon table.",
      },
      {
        name: "Wooden Arcuballista",
        category: "Arcuballista",
        role: "Off-hand ranged",
        damage: "2-4",
        type: "Piercing",
        speed: "Fast",
        alt: "None",
        materials: "1 Wooden Stick, 1 Leather, 1 Wood Plank",
        value: "10 Quadrans",
        image: "/images/wiki/weapons/wooden-arcuballista.png",
        description: "A fast off-hand crossbow with low damage.",
      },
      {
        name: "Copper Arcuballista",
        category: "Arcuballista",
        role: "Off-hand ranged",
        damage: "5-7",
        type: "Piercing",
        speed: "Fast",
        alt: "None",
        materials: "1 Copper Bar, 2 Wooden Stick",
        value: "-",
        image: "/images/wiki/weapons/copper-arcuballista.png",
        description: "A compact ranged upgrade for off-hand use.",
      },
      {
        name: "Bronze Arcuballista",
        category: "Arcuballista",
        role: "Off-hand ranged",
        damage: "11-13",
        type: "Piercing",
        speed: "Fast",
        alt: "None",
        materials: "1 Bronze Bar, 2 Wooden Stick",
        value: "-",
        image: "/images/wiki/weapons/bronze-arcuballista.png",
        description: "Fast piercing damage from the off-hand slot.",
      },
      {
        name: "Tectonic Arcuballista",
        category: "Arcuballista",
        role: "Hybrid crossbow",
        damage: "16-18 + 2-4",
        type: "Piercing, Blunt",
        speed: "Fast",
        alt: "None",
        materials: "2 Cyclops Shard, 1 Nail of the Cyclops",
        value: "-",
        image: "/images/wiki/weapons/tectonic-arcuballista.png",
        description: "Adds blunt on-hit damage to fast piercing shots.",
      },
    ],
  },
];

const weapons = weaponGroups.flatMap((group) => group.weapons);

const quickPicks = [
  {
    label: "Safest starter",
    weapon: "Flint Hasta + Wooden Shield",
    reason: "Reach plus blocking gives more control than raw damage.",
  },
  {
    label: "Best early melee upgrade",
    weapon: "Copper Gladius",
    reason: "Cheap, fast, and immediately doubles starter sword damage.",
  },
  {
    label: "Highest burst",
    weapon: "Iron Pilum",
    reason: "25-30 piercing damage, but it is a one-use throw.",
  },
  {
    label: "Best control tool",
    weapon: "Aegis",
    reason: "Perfect blocks can petrify enemies.",
  },
];

const highlightedWeapons = [
  "Copper Gladius",
  "Flint Hasta",
  "Aegis",
  "Bronze Sledgehammer",
  "Iron Pilum",
  "Ballistarii Bow",
].map((name) => weapons.find((weapon) => weapon.name === name)!);

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-stone-medium bg-obsidian/50 px-4 py-3">
      <p className="font-pixel text-[8px] uppercase tracking-widest text-ash">{label}</p>
      <p className="mt-2 font-cinzel text-xl font-bold text-parchment-light">{value}</p>
    </div>
  );
}

function WeaponFamilyCard({ group }: { group: (typeof weaponGroups)[number] }) {
  const lead = group.weapons[group.weapons.length - 1];
  const damageTypes = Array.from(new Set(group.weapons.map((weapon) => weapon.type))).join(" / ");

  return (
    <a
      href={`#${group.id}`}
      className="group flex gap-4 rounded-md border border-stone-medium bg-stone-dark p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ember"
    >
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md border border-stone-medium bg-obsidian/70 p-2">
        <Image src={lead.image} alt="" width={96} height={96} className="h-16 w-16 object-contain" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-cinzel text-lg font-bold text-parchment-light group-hover:text-ember">{group.title}</h3>
          <span className="bg-obsidian/70 px-2 py-1 text-xs text-ash">{group.weapons.length}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ash">{group.summary}</p>
        <p className="mt-3 font-pixel text-[8px] uppercase tracking-widest text-ember">{damageTypes}</p>
      </div>
    </a>
  );
}

function WeaponCard({ weapon }: { weapon: Weapon }) {
  return (
    <article className="group relative overflow-hidden rounded-md border border-stone-medium bg-stone-dark p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ember hover:shadow-glow-ember">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ember via-gold to-transparent opacity-70" />
      <div className="flex gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md border border-stone-medium bg-obsidian/70 p-2">
          <Image
            src={weapon.image}
            alt={weapon.name}
            width={96}
            height={96}
            className="h-full w-full object-contain image-render-auto"
          />
        </div>
        <div className="min-w-0">
          <p className="font-pixel text-[8px] uppercase tracking-widest text-ember">{weapon.role}</p>
          <h3 className="mt-2 font-cinzel text-lg font-bold text-parchment-light">{weapon.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ash">{weapon.description}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-obsidian/60 p-2">
          <span className="block text-ash">Damage</span>
          <strong className="text-ember">{weapon.damage}</strong>
        </div>
        <div className="bg-obsidian/60 p-2">
          <span className="block text-ash">Type</span>
          <strong className="text-parchment-light">{weapon.type}</strong>
        </div>
        <div className="bg-obsidian/60 p-2">
          <span className="block text-ash">Speed</span>
          <strong className="text-parchment-light">{weapon.speed}</strong>
        </div>
      </div>
    </article>
  );
}

function WeaponTable({ group }: { group: (typeof weaponGroups)[number] }) {
  return (
    <section id={group.id} className="mt-10">
      <div className="mb-4 flex flex-col gap-2 border-l-2 border-ember pl-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-cinzel text-2xl font-bold text-parchment-light">{group.title}</h3>
          <p className="text-sm text-ash">{group.summary}</p>
        </div>
        <span className="font-pixel text-[8px] uppercase tracking-widest text-ash">
          {group.weapons.length} entries
        </span>
      </div>
      <div className="overflow-x-auto border border-stone-medium">
        <table className="min-w-[860px] w-full text-sm">
          <thead>
            <tr className="table-header">
              <th className="p-3 text-left font-cinzel">Weapon</th>
              <th className="p-3 text-left font-cinzel">Damage</th>
              <th className="p-3 text-left font-cinzel">Type</th>
              <th className="p-3 text-left font-cinzel">Speed</th>
              <th className="p-3 text-left font-cinzel">Alt</th>
              <th className="p-3 text-left font-cinzel">Recipe</th>
            </tr>
          </thead>
          <tbody>
            {group.weapons.map((weapon, index) => (
              <tr key={weapon.name} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-obsidian/70">
                      <Image src={weapon.image} alt="" width={40} height={40} className="h-8 w-8 object-contain" />
                    </span>
                    <span className="font-semibold text-parchment-light">{weapon.name}</span>
                  </div>
                </td>
                <td className="p-3 font-semibold text-ember">{weapon.damage}</td>
                <td className="p-3 text-parchment">{weapon.type}</td>
                <td className="p-3 text-parchment">{weapon.speed}</td>
                <td className="p-3 text-ash">{weapon.alt}</td>
                <td className="p-3 text-xs text-ash">{weapon.materials}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function WeaponsPage() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs} toc={toc} trendingGuides={trendingGuides}>
      <section className="relative overflow-hidden rounded-md border border-stone-medium bg-[radial-gradient(circle_at_top_left,rgba(230,126,34,0.18),transparent_34%),linear-gradient(135deg,rgba(26,26,26,0.96),rgba(13,13,13,0.98))] p-6 sm:p-8">
        <p className="font-pixel text-[9px] uppercase tracking-[0.28em] text-ember">Romestead Wiki</p>
        <h1 className="mt-4 max-w-3xl font-cinzel text-3xl font-extrabold leading-tight text-parchment-light sm:text-5xl">
          Weapons Guide: stats, recipes, roles, and item icons
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-parchment">
          A rebuilt weapon database using the official Romestead Wiki table as the source, with local item art downloaded for faster browsing.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatPill label="Weapons" value={`${weapons.length}`} />
          <StatPill label="Categories" value={`${weaponGroups.length}`} />
          <StatPill label="Fastest" value="Daggers" />
          <StatPill label="Top burst" value="Iron Pilum" />
        </div>
        <p className="mt-5 text-xs text-ash">
          Source checked May 29, 2026:{" "}
          <a
            href="https://romestead.wiki.gg/wiki/Weapons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ember underline underline-offset-2"
          >
            romestead.wiki.gg/wiki/Weapons
          </a>
        </p>
      </section>

      <div className="prose-romestead mt-10">
        <h2 id="overview">Weapon Overview</h2>
        <p>
          Romestead weapons split by job: swords are stable melee tools, spears control space, shields turn timing into defense,
          daggers trade damage for speed, sledgehammers hit hard, pilums deliver one-use burst, and bows or arcuballistas cover ranged play.
        </p>
        <p>
          The key decision is not raw damage alone. A weapon matters only if its range, attack timing, damage type, and crafting cost match the fight.
        </p>
      </div>

      <section id="quick-picks" className="mt-10">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Quick Picks</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {quickPicks.map((pick) => (
            <div key={pick.label} className="border border-stone-medium bg-stone-dark p-5">
              <p className="font-pixel text-[8px] uppercase tracking-widest text-ember">{pick.label}</p>
              <h3 className="mt-2 font-cinzel text-xl text-parchment-light">{pick.weapon}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{pick.reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="armory" className="mt-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Armory Highlights</h2>
            <p className="mt-2 text-sm text-ash">
              Large cards use representative weapons only. Full tier-by-tier icons stay in the stat tables below.
            </p>
          </div>
          <span className="hidden font-pixel text-[8px] uppercase tracking-widest text-ash sm:inline">
            Reduced visual repetition
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlightedWeapons.map((weapon) => (
            <WeaponCard key={weapon.name} weapon={weapon} />
          ))}
        </div>
        <div className="mt-8">
          <h3 className="font-cinzel text-xl font-bold text-parchment-light">Weapon Classes</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {weaponGroups.map((group) => (
              <WeaponFamilyCard key={group.id} group={group} />
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="mt-12">
        <h2 className="font-cinzel text-2xl font-bold text-parchment-light">Full Stats and Recipes</h2>
        {weaponGroups.map((group) => (
          <WeaponTable key={group.id} group={group} />
        ))}
      </section>

      <div className="prose-romestead mt-12">
        <h2 id="tips">Combat Notes</h2>
        <ul>
          <li>
            <strong>Do not chase highest number blindly:</strong> pilums hit hard, but they are one-use weapons.
          </li>
          <li>
            <strong>Shield timing is real power:</strong> timed blocks create stun or petrify windows, depending on the shield.
          </li>
          <li>
            <strong>Spears reward spacing:</strong> hasta attacks lock direction, so they work best when you control enemy approach.
          </li>
          <li>
            <strong>Bows are timing weapons:</strong> slow speed is offset by stronger shots and scatter-shot utility.
          </li>
        </ul>
      </div>
    </BlogLayout>
  );
}
