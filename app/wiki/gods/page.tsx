import BlogLayout from "@/components/BlogLayout";
import Image from "next/image";

const breadcrumbs = [
  { label: "Wiki", href: "/wiki" },
  { label: "Gods & Altars" },
];

const toc = [
  { id: "overview", label: "Overview" },
  { id: "minerva", label: "Minerva" },
  { id: "ceres", label: "Ceres" },
  { id: "diana", label: "Diana" },
  { id: "mars", label: "Mars" },
  { id: "mercury", label: "Mercury" },
  { id: "venus", label: "Venus" },
  { id: "vulcan", label: "Vulcan" },
  { id: "tips", label: "Tips" },
];

const trendingGuides = [
  { title: "Weapons Guide", href: "/wiki/weapons" },
  { title: "Armor Sets", href: "/wiki/armor" },
  { title: "Tips & Tricks", href: "/guides/tips-tricks" },
  { title: "Boss Strategies", href: "/wiki/bosses" },
];

// Gods data
const gods = [
  {
    name: "Minerva",
    domain: "Wisdom & Strategy",
    description: "The goddess of wisdom. Her worship tree is currently not fully documented.",
    tiers: [],
  },
  {
    name: "Ceres",
    domain: "Agriculture & Farming",
    description: "Goddess of harvest and agriculture. Essential for food production and farming efficiency.",
    tiers: [
      { tier: "Base", unlocks: ["Farmstead", "+25% Crop harvest", "Olive Oil Dolium"] },
      { tier: "I", unlocks: ["Farmstead Lv.2", "Bakery", "Watermill", "Garum Dolium"] },
      { tier: "II", unlocks: ["Bakery Lv.2"] },
      { tier: "IV", unlocks: ["Farmstead Lv.3", "Bakery Lv.3"] },
      { tier: "VI", unlocks: ["+50% Crop growth", "Blessing of Ceres (+25% Health)"] },
      { tier: "IX", unlocks: ["+10 Throwing damage"] },
    ],
  },
  {
    name: "Diana",
    domain: "Hunting & Ranged Combat",
    description: "Goddess of the hunt. Boosts ranged damage and unlocks leather/lumber upgrades.",
    tiers: [
      { tier: "Base", unlocks: ["+1 Ranged attack power"] },
      { tier: "I", unlocks: ["Lumber Yard Lv.2", "Leatherworker Lv.2"] },
      { tier: "II", unlocks: ["+10% Energy"] },
      { tier: "IV", unlocks: ["Lumber Yard Lv.3", "Leatherworker Lv.3", "+10% Ranged bonus", "Blessing of Diana (+10% Ranged)"] },
      { tier: "VI", unlocks: ["+10% Crit damage", "10% chance to not consume arrow"] },
      { tier: "IX", unlocks: ["Leatherworker Lv.4", "+10% Piercing damage", "+2 Energy regen"] },
    ],
  },
  {
    name: "Mars",
    domain: "War & Melee Combat",
    description: "God of war. Boosts melee damage, armor, and unlocks defensive structures.",
    tiers: [
      { tier: "Base", unlocks: ["Automatic Scorpio", "+1 Melee attack power", "+1 Armor"] },
      { tier: "I", unlocks: ["Scorpio Lv.2", "+3% Crit chance", "+10% Knockback resist"] },
      { tier: "II", unlocks: ["Scorpio Lv.3", "+10% Armor bonus"] },
      { tier: "IV", unlocks: ["Scorpio Lv.4", "Pottery Lv.2", "Blessing of Mars (+10% Melee)"] },
      { tier: "VI", unlocks: ["+2 Magic armor", "+10% Melee bonus"] },
      { tier: "IX", unlocks: ["+15% Necro damage", "+10% Slashing", "+10% Bludgeoning"] },
    ],
  },
  {
    name: "Mercury",
    domain: "Trade & Magic",
    description: "God of merchants and magic. Boosts magic damage and provides economic benefits.",
    tiers: [
      { tier: "Base", unlocks: ["+2% Crit chance"] },
      { tier: "I", unlocks: ["-5% Vendor prices", "+1 Lighting"] },
      { tier: "II", unlocks: ["Market Lv.2", "+2 Magic attack power", "+10% Melee bonus"] },
      { tier: "IV", unlocks: ["Market Lv.3", "+5% Road movement", "Blessing of Mercury (+10% Magic)"] },
      { tier: "VI", unlocks: ["+15% Water damage", "+15% Cosmo damage"] },
      { tier: "IX", unlocks: ["+10% Magic attack", "University Lv.2"] },
    ],
  },
  {
    name: "Venus",
    domain: "Love & Citizens",
    description: "Goddess of love. Improves citizen efficiency and provides utility bonuses.",
    tiers: [
      { tier: "Base", unlocks: ["+5% Attack speed", "+5 Energy"] },
      { tier: "I", unlocks: ["Big Tree Decoration", "+5% Piercing damage", "Wine Dolium"] },
      { tier: "II", unlocks: ["Big Tree Lv.2", "+10% Nature resist", "+10% Necro resist"] },
      { tier: "IV", unlocks: ["+1 Expertise for citizens", "Blessing of Venus (+10% Health/Energy)"] },
      { tier: "VI", unlocks: ["Big Tree Lv.3", "+10% Attack speed"] },
      { tier: "IX", unlocks: ["Monument", "+2 Efficiency for citizens"] },
    ],
  },
  {
    name: "Vulcan",
    domain: "Forging & Construction",
    description: "God of the forge. Unlocks mining, construction upgrades, and defensive walls.",
    tiers: [
      { tier: "Base", unlocks: ["+1 Armor", "+5% Fire resist", "Stone Wall"] },
      { tier: "I", unlocks: ["Quarry", "Concrete Wall"] },
      { tier: "II", unlocks: ["Blacksmith Lv.2", "Clay Pit Lv.2", "Quarry Lv.2", "Marble Wall"] },
      { tier: "IV", unlocks: ["Clay Pit Lv.3", "Quarry Lv.3", "Blessing of Vulcan (+15% Armor)"] },
      { tier: "VI", unlocks: ["Blacksmith Lv.3", "+10% Health"] },
      { tier: "IX", unlocks: ["Fire damage bonus", "Clay Pit Lv.4", "Quarry Lv.4", "+15% Fire resist"] },
    ],
  },
];

function GodCard({ god }: { god: typeof gods[0] }) {
  return (
    <div className="my-8 card">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="font-cinzel text-2xl text-ember">{god.name}</h3>
        <span className="badge text-[10px]">{god.domain}</span>
      </div>
      <p className="text-ash text-sm mb-4">{god.description}</p>

      {god.tiers.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="table-header">
                <th className="text-left p-2 font-cinzel w-16">Tier</th>
                <th className="text-left p-2 font-cinzel">Unlocks & Bonuses</th>
              </tr>
            </thead>
            <tbody>
              {god.tiers.map((tier, index) => (
                <tr key={tier.tier} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
                  <td className="p-2 text-ember font-semibold">{tier.tier}</td>
                  <td className="p-2 text-parchment">
                    <ul className="list-disc pl-4 space-y-1">
                      {tier.unlocks.map((unlock) => (
                        <li key={unlock} className="text-xs">{unlock}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {god.tiers.length === 0 && (
        <p className="text-ash text-sm italic">Worship tree not yet documented on the wiki.</p>
      )}
    </div>
  );
}

export default function GodsPage() {
  return (
    <BlogLayout
      breadcrumbs={breadcrumbs}
      toc={toc}
      trendingGuides={trendingGuides}
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-parchment-light leading-tight mb-4 font-cinzel">
        Romestead Gods & Altars Guide: All 7 Gods, Offerings & Worship Rewards
      </h1>
      <p className="text-ash text-sm mb-6">
        Updated May 2026 &middot; Early Access Build
      </p>

      <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
        <Image
          src="/images/screenshots/god-altar.webp"
          alt="God altar in Romestead"
          width={800}
          height={450}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <div className="prose-romestead">
        <h2 id="overview">Worship System Overview</h2>
        <p>
          Romestead features <strong>7 Roman gods</strong> that players can worship through altars. Each god
          has a <strong>tiered upgrade tree</strong> that unlocks new buildings, crafting stations, and
          stat bonuses for all players.
        </p>
        <p>
          To worship a god, you must <strong>build an Altar</strong> and offer items or complete quests.
          Each god has different preferences, though the exact offerings are still being documented.
        </p>
        <ul>
          <li><strong>Only one Blessing can be active at a time</strong> — choose wisely based on your playstyle</li>
          <li><strong>Worship points</strong> are spent to unlock tiers (costs increase: 1, 2, 3 points per tier)</li>
          <li><strong>All bonuses apply to all players</strong> in multiplayer sessions</li>
        </ul>
      </div>

      {/* Each God */}
      <div id="minerva">
        <GodCard god={gods[0]} />
      </div>
      <div id="ceres">
        <GodCard god={gods[1]} />
      </div>
      <div id="diana">
        <GodCard god={gods[2]} />
      </div>
      <div id="mars">
        <GodCard god={gods[3]} />
      </div>
      <div id="mercury">
        <GodCard god={gods[4]} />
      </div>
      <div id="venus">
        <GodCard god={gods[5]} />
      </div>
      <div id="vulcan">
        <GodCard god={gods[6]} />
      </div>

      <div className="prose-romestead">
        <h2 id="tips">Worship Tips</h2>
        <ul>
          <li><strong>Early game:</strong> Worship Vulcan first to unlock Quarry (essential for stone)</li>
          <li><strong>Farming focus:</strong> Ceres is essential — unlocks Farmstead, Bakery, and crop bonuses</li>
          <li><strong>Ranged builds:</strong> Diana provides the best ranged damage bonuses</li>
          <li><strong>Melee builds:</strong> Mars gives melee damage, crit chance, and armor</li>
          <li><strong>Magic builds:</strong> Mercury is the best choice for magic damage</li>
          <li><strong>Multiplayer:</strong> Coordinate which Blessing is active — only one can be active at a time</li>
          <li><strong>Don&apos;t waste offerings:</strong> Follow the questline rather than experimenting with random items</li>
        </ul>
      </div>
    </BlogLayout>
  );
}
