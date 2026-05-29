import BlogLayout from "@/components/BlogLayout";
import Image from "next/image";

const breadcrumbs = [
  { label: "Wiki", href: "/wiki" },
  { label: "Biomes & Regions" },
];

const toc = [
  { id: "overview", label: "Overview" },
  { id: "plains", label: "Plains" },
  { id: "forest", label: "Forest" },
  { id: "desert", label: "Desert" },
  { id: "volcano", label: "Volcano" },
  { id: "swamp", label: "Swamp" },
  { id: "tips", label: "Exploration Tips" },
];

const trendingGuides = [
  { title: "Tips & Tricks", href: "/guides/tips-tricks" },
  { title: "Weapons Guide", href: "/wiki/weapons" },
  { title: "Boss Strategies", href: "/wiki/bosses" },
  { title: "Gods & Altars", href: "/wiki/gods" },
];

const biomes = [
  {
    name: "Plains",
    difficulty: "Easy",
    description: "The starter biome where every player spawns. Contains all basic resources needed to get started, along with the tutorial NPC.",
    characteristics: [
      "Player always spawns in the map center on a plains tile",
      "Multiple plains tiles spread across the map",
      "Contains the Guardian of Minerva's nest in a ruin",
      "Best location for your first settlement",
    ],
    resources: ["Stone", "Lumber", "Flint", "Clay", "Basic crops"],
    enemies: ["Guardian of Minerva (boss in ruin)"],
    image: "/images/screenshots/hero-settlement.webp",
  },
  {
    name: "Forest",
    difficulty: "Medium",
    description: "Dense woodland areas that border the plains. Claustrophobic and difficult to build in, but contains unique resources.",
    characteristics: [
      "Spreads throughout the map, not in one area",
      "Often borders plains biome on either side",
      "Difficult to build buildings inside due to density",
      "Certain buildings receive bonuses on forest tiles",
    ],
    resources: ["Rare trees", "Forest-specific materials"],
    enemies: ["Tougher wildlife", "Forest creatures"],
    image: "/images/screenshots/exploration-cave.webp",
  },
  {
    name: "Desert",
    difficulty: "Hard",
    description: "A harsh, arid region with scarce resources and powerful enemies. First major difficulty spike in the game.",
    characteristics: [
      "Confined to a specific area of the map",
      "Nearly always generated in the same general area",
      "Resources are much more scarce",
      "Certain buildings have limited or no functionality",
      "Introduces status effects",
    ],
    resources: ["Desert-specific rare materials"],
    enemies: ["Pyzifax (boss)", "The Eye/Cyclops (boss)", "Powerful desert creatures"],
    image: "/images/screenshots/night-zombies.webp",
  },
  {
    name: "Volcano",
    difficulty: "Very Hard",
    description: "An extremely hostile and dangerous region. Should not be approached unprepared.",
    characteristics: [
      "Extremely hostile environment",
      "Difficult to traverse",
      "New dangers and construction challenges",
      "Significantly higher difficulty than other biomes",
    ],
    resources: ["Volcanic materials", "Rare resources"],
    enemies: ["Powerful volcanic creatures"],
    image: "/images/screenshots/boss-fight.webp",
  },
  {
    name: "Swamp",
    difficulty: "Medium-Hard (Unfinished)",
    description: "An unfinished biome divided by a river. Features resources from other biomes with a high spawn rate of Wraiths.",
    characteristics: [
      "Divided into two areas connected by a river",
      "Features resources, materials, and creatures from other biomes",
      "High spawn rate of Wraiths",
      "Currently unfinished in Early Access",
    ],
    resources: ["Mixed resources from other biomes"],
    enemies: ["Wraiths (high spawn rate)", "Creatures from other biomes"],
    image: "/images/screenshots/farming-field.webp",
  },
];

function BiomeCard({ biome }: { biome: typeof biomes[0] }) {
  const difficultyColor = {
    "Easy": "text-green-400",
    "Medium": "text-yellow-400",
    "Medium-Hard (Unfinished)": "text-orange-400",
    "Hard": "text-red-400",
    "Very Hard": "text-red-600",
  }[biome.difficulty] || "text-ash";

  return (
    <div className="my-8 card overflow-hidden p-0">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={biome.image}
          alt={`${biome.name} biome`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="font-cinzel text-2xl text-parchment-light">{biome.name}</h3>
          <span className={`text-sm font-semibold ${difficultyColor}`}>{biome.difficulty}</span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-parchment mb-4">{biome.description}</p>

        <h4 className="font-cinzel text-sm text-ember mb-2">Characteristics</h4>
        <ul className="list-disc pl-4 mb-4 space-y-1">
          {biome.characteristics.map((char) => (
            <li key={char} className="text-ash text-sm">{char}</li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-cinzel text-sm text-ember mb-2">Resources</h4>
            <ul className="list-disc pl-4 space-y-1">
              {biome.resources.map((res) => (
                <li key={res} className="text-ash text-sm">{res}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-cinzel text-sm text-ember mb-2">Enemies & Bosses</h4>
            <ul className="list-disc pl-4 space-y-1">
              {biome.enemies.map((enemy) => (
                <li key={enemy} className="text-ash text-sm">{enemy}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BiomesPage() {
  return (
    <BlogLayout
      breadcrumbs={breadcrumbs}
      toc={toc}
      trendingGuides={trendingGuides}
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-parchment-light leading-tight mb-4 font-cinzel">
        Romestead Biomes Guide: All Regions, Resources & Difficulty
      </h1>
      <p className="text-ash text-sm mb-6">
        Updated May 29, 2026 &middot; Early Access Build
      </p>

      <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
        <Image
          src="/images/screenshots/exploration-cave.webp"
          alt="Exploring biomes in Romestead"
          width={800}
          height={450}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <div className="prose-romestead">
        <h2 id="overview">Biome Overview</h2>
        <p>
          The world of Romestead is divided into <strong>5 distinct biomes</strong>, each with increasing
          difficulty and unique resources. Players always spawn in the <strong>Plains</strong> at the
          center of the map and must explore outward to find higher-tier content.
        </p>
        <p>
          Each biome has different <strong>resource availability</strong>, <strong>enemy types</strong>,
          and <strong>building restrictions</strong>. Some buildings work differently or not at all in
          certain biomes.
        </p>
        <ul>
          <li><strong>Plains</strong>  - Safe starter area, best for first base</li>
          <li><strong>Forest</strong>  - Dense, hard to build in, but has unique resources</li>
          <li><strong>Desert</strong>  - Scarce resources, powerful enemies, first big challenge</li>
          <li><strong>Volcano</strong>  - Extremely dangerous, end-game area</li>
          <li><strong>Swamp</strong>  - Unfinished in Early Access, high Wraith spawn rate</li>
        </ul>
      </div>

      {/* Each Biome */}
      {biomes.map((biome) => (
        <div key={biome.name} id={biome.name.toLowerCase().replace(/[^a-z]/g, '')}>
          <BiomeCard biome={biome} />
        </div>
      ))}

      <div className="prose-romestead">
        <h2 id="tips">Exploration Tips</h2>
        <ul>
          <li><strong>Start in Plains:</strong> Build your first base here  - it has all basic resources</li>
          <li><strong>Mark everything:</strong> Use map markers for resource nodes, survivor camps, and dungeon entrances</li>
          <li><strong>Explore in pairs:</strong> Dangerous biomes are safer with a friend</li>
          <li><strong>Bring supplies:</strong> Pack food, weapons, and building materials before venturing far</li>
          <li><strong>Watch for NPCs:</strong> Small creatures will steal items left on the ground</li>
          <li><strong>Break everything:</strong> Bushes, rocks, and crates can contain hidden chests</li>
          <li><strong>Avoid night travel:</strong> Zombies spawn constantly at night  - stay in your settlement</li>
        </ul>
      </div>
    </BlogLayout>
  );
}
