import BlogLayout from "@/components/BlogLayout";
import Image from "next/image";

const breadcrumbs = [
  { label: "Wiki", href: "/wiki" },
  { label: "Armor" },
];

const toc = [
  { id: "overview", label: "Overview" },
  { id: "leather", label: "Leather Sets" },
  { id: "metal", label: "Metal Sets" },
  { id: "special", label: "Special Sets" },
  { id: "tips", label: "Armor Tips" },
];

const trendingGuides = [
  { title: "Weapons Guide", href: "/wiki/weapons" },
  { title: "Best Starting Class", href: "/guides/best-class-profession" },
  { title: "Boss Strategies", href: "/wiki/bosses" },
  { title: "Gods & Altars", href: "/wiki/gods" },
];

// Armor data organized by type
const armorSets = {
  starter: [
    { name: "Civilian Tunic", stats: "Appearance changes with profession", source: "Starting armor" },
    { name: "Sandals", stats: "-", source: "Starting armor" },
  ],
  leather: [
    { name: "Leather Hood", stats: "+3 Armor", materials: "2 Leather", source: "Leatherworker Lv.1" },
    { name: "Leather Armor", stats: "+3 Armor", materials: "4 Leather", source: "Leatherworker Lv.1" },
    { name: "Leather Sandals", stats: "+3 Armor", materials: "2 Leather", source: "Leatherworker Lv.1" },
  ],
  adventuring: [
    { name: "Adventuring Hat", stats: "+6% Movement, +10 Energy", materials: "15 Denarius", source: "Market (Plains)" },
    { name: "Adventuring Boots", stats: "+6% Movement, +10 Energy", materials: "15 Denarius", source: "Market (Plains)" },
  ],
  root: [
    { name: "Root Boots", stats: "+3 Armor, +5 Health, +50% Knockback resist", materials: "-", source: "Dungeon drop" },
  ],
  feathered: [
    { name: "Feathered Hood", stats: "+7 Armor, +5% Magic damage, +10 Health", materials: "-", source: "Guardian of Minerva" },
    { name: "Feathered Armor", stats: "+7 Armor, +4 Magic armor, +10 Health", materials: "-", source: "Guardian of Minerva" },
    { name: "Feathered Boots", stats: "+6 Armor, +6% Movement, +10 Health", materials: "-", source: "Guardian of Minerva" },
  ],
  thickLeather: [
    { name: "Thick Leather Hood", stats: "+5 Armor, +2% Ranged, +5 Health", materials: "2 Leather, 2 Cured Hide, 5 Copper Nails", source: "Leatherworker Lv.2" },
    { name: "Thick Leather Armor", stats: "+6 Armor, +2% Ranged, +5 Health", materials: "4 Leather, 2 Cured Hide, 5 Copper Nails", source: "Leatherworker Lv.2" },
    { name: "Thick Leather Sandals", stats: "+5 Armor, +2% Ranged, +5 Health", materials: "2 Leather, 1 Cured Hide, 5 Copper Nails", source: "Leatherworker Lv.2" },
  ],
  camillus: [
    { name: "Camillus Headpiece", stats: "+5 Armor, +2% Magic, +5 Health", materials: "2 Wool, 5 Copper Thread", source: "Leatherworker Lv.2" },
    { name: "Camillus Robes", stats: "+6 Armor, +2% Magic, +5 Health", materials: "2 Wool, 5 Copper Thread", source: "Leatherworker Lv.2" },
    { name: "Camillus Sandals", stats: "+5 Armor, +2% Magic, +5 Health", materials: "2 Wool, 5 Copper Thread", source: "Leatherworker Lv.2" },
  ],
  copper: [
    { name: "Copper Helmet", stats: "+6 Armor, +2% Melee, +5 Health", materials: "4 Copper Bar, 4 Leather", source: "Blacksmith Lv.1" },
    { name: "Copper Chestplate", stats: "+7 Armor, +2% Melee, +5 Health", materials: "6 Copper Bar, 5 Leather", source: "Blacksmith Lv.1" },
    { name: "Copper Greaves", stats: "+6 Armor, +2% Melee, +5 Health", materials: "5 Copper Bar, 4 Leather", source: "Blacksmith Lv.1" },
  ],
  druid: [
    { name: "Druid Hood", stats: "+6 Armor, +10% Nature damage, +10 Health, -5% Fire resist", materials: "1 Leather Hood, 2 Cured Hide", source: "Leatherworker Lv.3 (Dungeon recipe)" },
    { name: "Druid Robes", stats: "+7 Armor, +10% Nature damage, +10 Health, -5% Fire resist", materials: "1 Leather Armor, 4 Cured Hide", source: "Leatherworker Lv.3 (Dungeon recipe)" },
    { name: "Druid Sandals", stats: "+6 Armor, +10% Nature damage, +10 Health, -5% Fire resist", materials: "1 Leather Sandals, 2 Cured Hide", source: "Leatherworker Lv.3 (Dungeon recipe)" },
  ],
  wolf: [
    { name: "Wolf Cowl", stats: "+6 Armor, +10% Piercing, +10% Ranged, +10 Health", materials: "1 Leather Hood, 2 Cured Hide", source: "Leatherworker Lv.3 (Dungeon recipe)" },
  ],
  bearserker: [
    { name: "Bearserker Cowl", stats: "+8 Armor, +5% Bludgeoning resist, +10 Health", materials: "1 Thick Leather Hood, 2 Cured Hide", source: "Leatherworker Lv.3 (Dungeon recipe)" },
    { name: "Bearserker Furs", stats: "+9 Armor, +5% Slashing resist, +20 Health", materials: "1 Thick Leather Armor, 4 Cured Hide", source: "Leatherworker Lv.3 (Dungeon recipe)" },
    { name: "Bearserker Sandals", stats: "+8 Armor, +5% Piercing resist, +10 Health", materials: "1 Thick Leather Sandals, 2 Cured Hide", source: "Leatherworker Lv.3 (Dungeon recipe)" },
  ],
  bonesplint: [
    { name: "Bonesplint Cowl", stats: "+7 Armor, +3% Ranged, +10 Health", materials: "4 Bonesplint, 5 Bronze Nails", source: "Leatherworker Lv.4" },
    { name: "Bonesplint Armor", stats: "+8 Armor, +3% Ranged, +10 Health", materials: "6 Bonesplint, 5 Bronze Nails", source: "Leatherworker Lv.4" },
    { name: "Bonesplint Boots", stats: "+7 Armor, +3% Ranged, +10 Health", materials: "5 Bonesplint, 5 Bronze Nails", source: "Leatherworker Lv.4" },
  ],
  augur: [
    { name: "Augur Laurel", stats: "+7 Armor, +3% Magic, +10 Health", materials: "5 Linen, 5 Bronze Thread", source: "Leatherworker Lv.4" },
    { name: "Augur Robes", stats: "+8 Armor, +3% Magic, +10 Health", materials: "7 Linen, 5 Bronze Thread", source: "Leatherworker Lv.4" },
    { name: "Augur Sandals", stats: "+7 Armor, +3% Magic, +10 Health", materials: "6 Linen, 5 Bronze Thread", source: "Leatherworker Lv.4" },
  ],
  bronze: [
    { name: "Bronze Helmet", stats: "+8 Armor, +3% Melee, +10 Health", materials: "4 Bronze Bar, 2 Cured Hide", source: "Blacksmith Lv.2" },
    { name: "Bronze Chestplate", stats: "+9 Armor, +3% Melee, +10 Health", materials: "6 Bronze Bar, 3 Cured Hide", source: "Blacksmith Lv.2" },
    { name: "Bronze Greaves", stats: "+8 Armor, +3% Melee, +10 Health", materials: "5 Bronze Bar, 2 Cured Hide", source: "Blacksmith Lv.2" },
  ],
  tectonic: [
    { name: "Tectonic Helmet", stats: "+14 Armor, +15 Health, +4 Throwing power", materials: "2 Bronze Bar, 1 Cyclops Shard", source: "Blacksmith Lv.5 / Cyclops drop" },
    { name: "Tectonic Armor", stats: "+14 Armor, +15 Health, +20% Fire resist", materials: "2 Bronze Bar, 2 Cyclops Shard", source: "Blacksmith Lv.5 / Cyclops drop" },
    { name: "Tectonic Boots", stats: "+14 Armor, +15 Health, +20% Knockback resist", materials: "2 Bronze Bar, 1 Cyclops Shard", source: "Blacksmith Lv.5 / Cyclops drop" },
  ],
  firescale: [
    { name: "Firescale Cowl", stats: "+13 Armor, +4% Ranged, +15 Health", materials: "5 Firescale, 2 Cured Hide, 5 Iron Nails", source: "Leatherworker Lv.5" },
    { name: "Firescale Armor", stats: "+13 Armor, +4% Ranged, +15 Health", materials: "5 Firescale, 2 Cured Hide, 5 Iron Nails", source: "Leatherworker Lv.5" },
    { name: "Firescale Boots", stats: "+13 Armor, +4% Ranged, +15 Health", materials: "6 Firescale, 2 Cured Hide, 5 Iron Nails", source: "Leatherworker Lv.5" },
  ],
  legionary: [
    { name: "Legionary Helmet", stats: "+14 Armor, +4% Melee, +15 Health", materials: "4 Iron Bar, 2 Cured Hide", source: "Blacksmith Lv.5" },
    { name: "Legionary Chestplate", stats: "+14 Armor, +4% Melee, +15 Health", materials: "6 Iron Bar, 2 Cured Hide", source: "Blacksmith Lv.5" },
    { name: "Legionary Greaves", stats: "+14 Armor, +4% Melee, +15 Health", materials: "5 Iron Bar, 2 Cured Hide", source: "Blacksmith Lv.5" },
  ],
};

function ArmorTable({ title, data }: { title: string; data: { name: string; stats: string; materials?: string; source: string }[] }) {
  return (
    <div className="my-8 overflow-x-auto">
      <h3 className="font-cinzel text-xl text-parchment-light mb-4">{title}</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="table-header">
            <th className="text-left p-3 font-cinzel">Armor</th>
            <th className="text-left p-3 font-cinzel">Stats</th>
            <th className="text-left p-3 font-cinzel">Materials</th>
            <th className="text-left p-3 font-cinzel">Source</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.name} className={index % 2 === 0 ? "table-row" : "table-row table-row-alt"}>
              <td className="p-3 text-parchment-light font-semibold">{item.name}</td>
              <td className="p-3 text-ember">{item.stats}</td>
              <td className="p-3 text-ash text-xs">{item.materials || "-"}</td>
              <td className="p-3 text-parchment text-xs">{item.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArmorPage() {
  return (
    <BlogLayout
      breadcrumbs={breadcrumbs}
      toc={toc}
      trendingGuides={trendingGuides}
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-parchment-light leading-tight mb-4 font-cinzel">
        Romestead Armor Guide: All Armor Sets, Stats & Crafting
      </h1>
      <p className="text-ash text-sm mb-6">
        Updated May 2026 &middot; Early Access Build &middot; 48 armor pieces across 20 sets
      </p>

      <div className="prose-romestead">
        <h2 id="overview">Armor Overview</h2>
        <p>
          Romestead has <strong>48 armor pieces</strong> across <strong>20 distinct sets</strong>. Armor provides
          defensive stats and bonus effects like movement speed, damage bonuses, and health.
        </p>
        <p>
          Armor is crafted at the <strong>Leatherworker</strong> (for leather/cloth sets) or{" "}
          <strong>Blacksmith</strong> (for metal sets). Some sets require dungeon recipes or boss drops.
        </p>
        <ul>
          <li><strong>Leather sets</strong> — Good for ranged and magic builds</li>
          <li><strong>Metal sets</strong> — Best for melee builds with high armor</li>
          <li><strong>Special sets</strong> — Unique effects from dungeons and bosses</li>
        </ul>
      </div>

      {/* Starter */}
      <ArmorTable title="Starter Armor" data={armorSets.starter} />

      {/* Leather Sets */}
      <div id="leather">
        <h2 className="font-cinzel text-2xl text-parchment-light mt-12 mb-6">Leather Armor Sets</h2>
        <ArmorTable title="Leather Set (Leatherworker Lv.1)" data={armorSets.leather} />
        <ArmorTable title="Adventuring Set (Market)" data={armorSets.adventuring} />
        <ArmorTable title="Root Set (Dungeon Drop)" data={armorSets.root} />
        <ArmorTable title="Feathered Set (Boss Drop)" data={armorSets.feathered} />
        <ArmorTable title="Thick Leather Set (Leatherworker Lv.2)" data={armorSets.thickLeather} />
        <ArmorTable title="Camillus Set (Leatherworker Lv.2)" data={armorSets.camillus} />
        <ArmorTable title="Druid Set (Leatherworker Lv.3)" data={armorSets.druid} />
        <ArmorTable title="Wolf Set (Leatherworker Lv.3)" data={armorSets.wolf} />
        <ArmorTable title="Bearserker Set (Leatherworker Lv.3)" data={armorSets.bearserker} />
        <ArmorTable title="Bonesplint Set (Leatherworker Lv.4)" data={armorSets.bonesplint} />
        <ArmorTable title="Augur Set (Leatherworker Lv.4)" data={armorSets.augur} />
        <ArmorTable title="Firescale Set (Leatherworker Lv.5)" data={armorSets.firescale} />
      </div>

      {/* Metal Sets */}
      <div id="metal">
        <h2 className="font-cinzel text-2xl text-parchment-light mt-12 mb-6">Metal Armor Sets</h2>
        <ArmorTable title="Copper Set (Blacksmith Lv.1)" data={armorSets.copper} />
        <ArmorTable title="Bronze Set (Blacksmith Lv.2)" data={armorSets.bronze} />
        <ArmorTable title="Tectonic Set (Blacksmith Lv.5)" data={armorSets.tectonic} />
        <ArmorTable title="Legionary Set (Blacksmith Lv.5)" data={armorSets.legionary} />
      </div>

      <div className="prose-romestead">
        <h2 id="tips">Armor Tips</h2>
        <ul>
          <li><strong>Early game:</strong> Craft Leather Armor set first — cheap and provides decent protection</li>
          <li><strong>Melee builds:</strong> Rush Copper/Blacksmith armor for highest armor values</li>
          <li><strong>Ranged builds:</strong> Thick Leather → Bonesplint → Firescale path gives best ranged damage bonuses</li>
          <li><strong>Magic builds:</strong> Camillus → Augur → Flamines path for magic damage bonuses</li>
          <li><strong>Boss farming:</strong> Feathered Set drops from Guardian of Minerva — good mid-game set</li>
          <li><strong>End game:</strong> Tectonic/Legionary sets require rare materials from advanced areas</li>
        </ul>
      </div>
    </BlogLayout>
  );
}
