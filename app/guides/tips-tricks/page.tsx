import BlogLayout from "@/components/BlogLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import QuickAnswer from "@/components/QuickAnswer";
import Link from "next/link";
import Image from "next/image";

const breadcrumbs = [
  { label: "Guides", href: "/guides" },
  { label: "Tips & Tricks" },
];

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "resource-tips", label: "Resource & Transport Tips" },
  { id: "building-tips", label: "Building & Settlement Tips" },
  { id: "combat-tips", label: "Combat Tips" },
  { id: "farming-tips", label: "Farming & Food Tips" },
  { id: "god-tips", label: "God & Altar Tips" },
  { id: "exploration-tips", label: "Exploration Tips" },
  { id: "common-mistakes", label: "Common Mistakes to Avoid" },
  { id: "faq", label: "FAQ" },
];

const trendingGuides = [
  { title: "Best Starting Class & Profession", href: "/guides/best-class-profession" },
  { title: "Steam Deck & Controller Guide", href: "/guides/steam-deck-controller" },
  { title: "Multiplayer & Dedicated Server", href: "/guides/multiplayer-dedicated-server" },
  { title: "Tips & Tricks for Beginners", href: "/guides/tips-tricks" },
];

export default function TipsTricksGuide() {
  return (
    <BlogLayout
      breadcrumbs={breadcrumbs}
      toc={toc}
      trendingGuides={trendingGuides}
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-parchment-light leading-tight mb-4 font-cinzel">
        Romestead Tips &amp; Tricks: Everything I Wish I Knew Before Playing (2026)
      </h1>
      <p className="text-ash text-sm mb-6">
        Updated May 2026 &middot; Early Access Build
      </p>

      {/* YouTube Embed */}
      <YouTubeEmbed
        videoId="40AnkU__t54"
        title="Romestead Tips and Tricks"
      />

      {/* Intro */}
      <div className="prose-romestead">
        <p>
          Romestead is a game that does <strong>not hold your hand</strong>. The Early Access build
          is full of hidden mechanics, unintuitive systems, and traps that will catch new players
          off guard. After spending dozens of hours across multiple playthroughs and reviewing
          feedback from the community, here are the most important tips and tricks that will save
          you time, resources, and frustration.
        </p>
      </div>

      {/* Quick Answer */}
      <div id="quick-answer">
        <QuickAnswer>
          <p>
            The single most important tip: <strong>do not build houses without matching
            workplaces</strong>. Unemployed citizens drain food and provide nothing. Also,{" "}
            <strong>rush the cart technology</strong> — it is the biggest quality-of-life upgrade
            in the game. And <strong>always cook food before storing it</strong>; citizens will not
            cook for themselves.
          </p>
        </QuickAnswer>
      </div>

      {/* Resource & Transport Tips */}
      <div className="prose-romestead">
        <h2 id="resource-tips">Resource &amp; Transport Tips</h2>

        <h3>Carry One Log at a Time — Then Get the Cart</h3>
        <p>
          In Romestead, logs and rocks are <strong>physical objects</strong>, not inventory items.
          You pick them up, carry them on your shoulder, and drop them at your build site. Early
          on, you can only carry <strong>one log at a time</strong>. This is the biggest time sink
          in the early game.
        </p>
        <p>
          <strong>The solution:</strong> Rush toward the <strong>cart technology</strong> in the
          tech tree. The cart lets you transport multiple logs at once. This single upgrade cuts
          your building time in half. Prioritize it over everything else.
        </p>

        <h3>Convert Logs to Planks on the Spot</h3>
        <p>
          Instead of carrying raw logs back to base, you can convert them to{" "}
          <strong>wood planks</strong> on the spot. Place a log chunk back onto a tree stump and
          attack it. The log converts directly into planks, which stack in your inventory. This
          saves multiple trips.
        </p>

        <h3>Stick Farming: Throw Rocks at Trees</h3>
        <p>
          Sticks are used for arrows and other crafting. To get sticks quickly, pick up{" "}
          <strong>rocks and throw them at trees</strong>. The impact knocks sticks loose. Find a
          rhythm where you can pick up and re-throw without repositioning — the rock bounces
          unpredictably, so staying in one spot helps.
        </p>

        <h3>Throw Flint on Rocks for Shards</h3>
        <p>
          Need flint shards? Pick up <strong>flint and throw it against a rock</strong>. The
          collision produces flint shards, which are used in early crafting recipes. This is faster
          than waiting for flint to spawn naturally.
        </p>

        <h3>Use the Cart for Long-Distance Hauling</h3>
        <p>
          Once you unlock the cart, load it up with resources before heading back to base. You can
          put multiple logs, rocks, and other heavy materials in it. The cart follows you as you
          move, making long-distance resource runs much more efficient.
        </p>

        {/* Transport Screenshot */}
        <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
          <Image
            src="/images/screenshots/farming-mechanics.webp"
            alt="Player carrying resources back to settlement"
            width={800}
            height={450}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2 id="building-tips">Building &amp; Settlement Tips</h2>

        <h3>Plan Your Layout Before Building</h3>
        <p>
          Buildings in Romestead are <strong>permanent once placed</strong>. There is no confirmed
          building relocation mechanic in the current Early Access build. Before placing a
          structure, consider:
        </p>
        <ul>
          <li>Proximity to resource nodes (trees, stone, ore)</li>
          <li>Space for future expansion</li>
          <li>Defensive positioning against night attacks</li>
          <li>Access to water and farmland</li>
        </ul>

        <h3>Build Walls Before the First Night</h3>
        <p>
          Zombies come out at night. If you are playing solo, being caught outside your settlement
          at night is dangerous. Get a <strong>basic perimeter wall</strong> up as early as
          possible. Even a simple wooden wall keeps your settlement safe while you sleep through
          the night.
        </p>

        <h3>Do Not Build Houses Without Workplaces</h3>
        <p>
          Every house attracts a citizen. Every citizen needs food. If you build a house without a
          matching workplace (Lumberjack, Leather Worker, etc.), that citizen is{" "}
          <strong>unemployed — eating your food for zero benefit</strong>. Only build houses when
          you have a workplace ready.
        </p>

        <h3>Citizens Are Passive — Do Everything Yourself</h3>
        <p>
          A critical misunderstanding: citizens in Romestead are{" "}
          <strong>passive resource generators</strong>, not autonomous workers. They do not:
        </p>
        <ul>
          <li>Chop trees or mine ore</li>
          <li>Hunt animals</li>
          <li>Move items between storages</li>
          <li>Cook raw food</li>
          <li>Build or repair structures</li>
        </ul>
        <p>
          A Lumberjack citizen simply <strong>generates logs over time</strong> while sitting in
          their hut. You still need to do everything else manually.
        </p>

        <h2 id="combat-tips">Combat Tips</h2>

        <h3>Dodge Rolling Is Your Best Friend</h3>
        <p>
          Romestead has a dodge roll mechanic (press Space). Use it liberally. Most enemy attacks
          have a wind-up animation — dodge through the attack, not away from it. This positions
          you behind the enemy for a counter-attack.
        </p>

        <h3>Heavy Attacks Deal More Damage</h3>
        <p>
          Hold the attack button to charge a <strong>heavy attack</strong>. These deal
          significantly more damage and can stagger enemies. Use them on tougher foes and bosses.
          The trade-off is the charge time, so learn enemy attack patterns to find safe openings.
        </p>

        <h3>Use Scrolls and Magic</h3>
        <p>
          Scrolls drop from enemies, dungeons, and chests. They provide powerful magic attacks like
          <strong> bolt</strong> (ranged damage) and <strong>ray of frost</strong> (slow effect).
          Save these for tough fights — they are consumables, so do not waste them on basic
          zombies.
        </p>

        <h3>The Boss Is Meant to Be Hard — Prepare Properly</h3>
        <p>
          The first boss (the giant bird) is a significant difficulty spike. Do not attempt it
          until you have:
        </p>
        <ul>
          <li>Full leather armor (hat, chest, legs)</li>
          <li>A spear or crossbow</li>
          <li>A shield (for blocking the dive attack)</li>
          <li>At least 100 arrows (for ranged cheese strategy)</li>
          <li>Cooked food for healing</li>
        </ul>
        <p>
          <strong>Cheese strategy:</strong> If melee feels inconsistent, use a bow with{" "}
          <strong>charged shots</strong>. Hold the attack button to charge the bow for bonus
          damage. You can beat the boss from range with ~150 arrows, though it takes patience.
        </p>

        {/* Boss Fight Screenshot */}
        <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
          <Image
            src="/images/screenshots/boss-strategy.webp"
            alt="Boss fight with the giant bird enemy"
            width={800}
            height={450}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2 id="farming-tips">Farming &amp; Food Tips</h2>

        <h3>Always Cook Food Before Storing It</h3>
        <p>
          Citizens eat from your food storage, but they <strong>will not cook raw food</strong>.
          If you place raw meat or unprocessed wheat in storage, it sits there while your citizens
          starve. Always cook ingredients into finished food (bread, cooked meat) before depositing
          them.
        </p>

        <h3>The Food Chain: Wheat → Flour → Bread</h3>
        <p>
          The basic food production chain works like this:
        </p>
        <ol>
          <li><strong>Plant wheat seeds</strong> in your farm area.</li>
          <li><strong>Harvest wheat</strong> when it grows.</li>
          <li><strong>Mill wheat</strong> at the millstone to get flour. You push the millstone
            around manually.</li>
          <li><strong>Bake bread</strong> at the bakery using flour.</li>
          <li><strong>Store bread</strong> in the food crate for citizens.</li>
        </ol>
        <p>
          Bread is also a decent offering to the gods, so keep some extra for altar sacrifices.
        </p>

        <h3>Use the Farmstead Citizen</h3>
        <p>
          After defeating the first boss and progressing the god questline, you unlock the{" "}
          <strong>Farmstead</strong> building. Assign a citizen to it and they will automatically
          harvest crops in the surrounding area. This is a huge time-saver once you have a large
          farm operation.
        </p>

        <h2 id="god-tips">God &amp; Altar Tips</h2>

        <h3>Do Not Waste Resources Experimenting with the Altar</h3>
        <p>
          The altar lets you sacrifice items to the gods. Many offerings are listed as{" "}
          <strong>&quot;undiscovered,&quot;</strong> tempting you to throw random resources at it.
          Do not do this. Most experiments will fail and waste valuable materials.
        </p>
        <p>
          <strong>Instead:</strong> Follow the main questline. Defeating bosses and progressing
          through god quests is the intended path. The altar rewards come naturally through
          progression, not random experimentation.
        </p>

        <h3>Each God Prefers Different Offerings</h3>
        <p>Here is what each god likes:</p>
      </div>

      {/* Gods Table */}
      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="table-header">
              <th className="text-left p-3 font-cinzel">God</th>
              <th className="text-left p-3 font-cinzel">Domain</th>
              <th className="text-left p-3 font-cinzel">Preferred Offerings</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="p-3 text-parchment-light font-semibold">Vulcan</td>
              <td className="p-3 text-parchment">Crafting &amp; Smithing</td>
              <td className="p-3 text-parchment">Crafted items, weapons, tools</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment-light font-semibold">Venus</td>
              <td className="p-3 text-parchment">Love &amp; Beauty</td>
              <td className="p-3 text-parchment">Gems, amulets, tokens of love</td>
            </tr>
            <tr className="table-row">
              <td className="p-3 text-parchment-light font-semibold">Mercury</td>
              <td className="p-3 text-parchment">Trade &amp; Commerce</td>
              <td className="p-3 text-parchment">Money, gold bars, trade goods</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment-light font-semibold">Mars</td>
              <td className="p-3 text-parchment">War &amp; Combat</td>
              <td className="p-3 text-parchment">Weapons, enemy trophies, battle spoils</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose-romestead">
        <h3>God Talent Trees Unlock Buildings and Buffs</h3>
        <p>
          Each god has a <strong>talent tree</strong> that you level up through offerings. As you
          progress, you unlock:
        </p>
        <ul>
          <li><strong>New buildings</strong> for your settlement</li>
          <li><strong>Damage resistance</strong> buffs for citizens</li>
          <li><strong>Combat bonuses</strong> for your character</li>
          <li><strong>New crafting recipes</strong> and technologies</li>
        </ul>
        <p>
          Focus on one god at a time to unlock their best rewards faster.
        </p>

        <h2 id="exploration-tips">Exploration Tips</h2>

        <h3>Mark Everything on Your Map</h3>
        <p>
          Romestead gives you <strong>map marking tools</strong>. Use them. Mark:
        </p>
        <ul>
          <li>Copper and iron ore nodes</li>
          <li>Survivor camps (for recruiting citizens)</li>
          <li>Dungeon entrances</li>
          <li>Resource-rich areas</li>
          <li>Dangerous zones to avoid early on</li>
        </ul>

        <h3>NPCs Will Steal Your Stuff</h3>
        <p>
          Small NPC creatures in the world will <strong>pick up and carry away items you leave on
          the ground</strong>. They will take anything — resources, gear, even animals. One player
          reported seeing an NPC pick up a squirrel and walk away with it on its head. If you drop
          items, pick them up quickly or store them in chests.
        </p>

        <h3>Break Everything for Hidden Chests</h3>
        <p>
          Almost every breakable object in the game has a chance to contain a{" "}
          <strong>hidden chest</strong>. Bushes, rocks, crates — smash them all. Chests contain
          random loot including gear, relics, and god offerings.
        </p>

        <h3>Relics Give Passive Bonuses</h3>
        <p>
          Relics are accessories you equip to your character for passive bonuses. Examples include:
        </p>
        <ul>
          <li><strong>Lucky Dice:</strong> Increased critical hit chance</li>
          <li><strong>Rudy Boots:</strong> Movement speed increase</li>
          <li>Various defense and attack bonuses</li>
        </ul>
        <p>
          Relics drop from dungeons, chests, and boss kills. They are often better than crafted
          gear in terms of unique effects.
        </p>

        <h3>Different Biomes = Different Tiers</h3>
        <p>
          The further you get from your starting area, the more dangerous and rewarding the world
          becomes. Each biome has its own:
        </p>
        <ul>
          <li><strong>Crafting tier</strong> — new resources and recipes</li>
          <li><strong>Enemy types</strong> — stronger and more varied</li>
          <li><strong>Atmosphere</strong> — from peaceful plains to dark, dangerous regions</li>
        </ul>
        <p>
          You need to explore to progress. Staying in the starting area will lock you out of
          higher-tier content.
        </p>

        <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
        <ul>
          <li>
            <strong>Building too many houses early.</strong> Each house = a citizen = food drain.
            Only build what you need.
          </li>
          <li>
            <strong>Ignoring the cart tech.</strong> Carrying one log at a time is miserable. Rush
            the cart.
          </li>
          <li>
            <strong>Fighting the boss unprepared.</strong> The first boss is a huge difficulty
            spike. Get full leather gear and 100+ arrows first.
          </li>
          <li>
            <strong>Wasting altar resources.</strong> Do not experiment with random offerings.
            Follow the questline.
          </li>
          <li>
            <strong>Storing raw food.</strong> Citizens cannot cook. Always store cooked food.
          </li>
          <li>
            <strong>Exploring at night solo.</strong> Zombies spawn constantly at night. Stay in
            your settlement or bring a friend.
          </li>
          <li>
            <strong>Ignoring dungeon traps.</strong> Some traps have no visual indicator and kill
            you instantly. Move carefully through dungeons.
          </li>
          <li>
            <strong>Leaving items on the ground.</strong> NPCs will steal them. Use storage
            chests.
          </li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Q: How do I move buildings in Romestead?</h3>
        <p>
          You <strong>cannot move buildings</strong> in the current Early Access build (May 2026).
          Once placed, structures are permanent. Plan your layout carefully before committing
          resources.
        </p>

        <h3>Q: How do I upgrade buildings?</h3>
        <p>
          Building upgrades are unlocked through the <strong>god talent trees</strong> and{" "}
          <strong>boss progression</strong>. Defeating bosses triggers new blueprints. Level up
          your gods through offerings to unlock additional building tiers and technologies.
        </p>

        <h3>Q: What is the best weapon early game?</h3>
        <p>
          The <strong>spear</strong> is a solid early weapon — good range and decent damage. The{" "}
          <strong>bow</strong> is essential for boss fights (charged shots). Avoid the rusty
          starting weapon as soon as possible; craft a copper-tier weapon at the blacksmith.
        </p>

        <h3>Q: How do I get more citizens?</h3>
        <p>
          Explore the world and find <strong>survivor camps</strong>. If you have an empty house
          available, you can recruit survivors to join your settlement. Mark their locations on
          your map so you can return when you have housing ready.
        </p>

        <h3>Q: Why are my citizens starving?</h3>
        <p>
          Check your food storage. If it contains <strong>raw food</strong>, citizens cannot eat it
          — they need cooked food. Also, unemployed citizens still consume food, so make sure every
          citizen has a job.
        </p>
      </div>
    </BlogLayout>
  );
}
