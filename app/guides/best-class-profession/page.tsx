import BlogLayout from "@/components/BlogLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import QuickAnswer from "@/components/QuickAnswer";
import Link from "next/link";
import Image from "next/image";

const breadcrumbs = [
  { label: "Guides", href: "/guides" },
  { label: "Best Class & Profession" },
];

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "starting-character", label: "Starting Character Creation" },
  { id: "profession-system", label: "Profession System Explained" },
  { id: "early-professions", label: "Early-Game Professions" },
  { id: "farmstead", label: "Mid-Game: Farmstead" },
  { id: "altar-progression", label: "Altar & Blueprint Progression" },
  { id: "advanced-tips", label: "Advanced Tips & Strategy" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const trendingGuides = [
  { title: "Best Starting Class & Profession", href: "/guides/best-class-profession" },
  { title: "Steam Deck & Controller Guide", href: "/guides/steam-deck-controller" },
  { title: "Multiplayer & Dedicated Server", href: "/guides/multiplayer-dedicated-server" },
  { title: "Tips & Tricks for Beginners", href: "/guides/tips-tricks" },
];

export default function BestClassProfessionGuide() {
  return (
    <BlogLayout
      breadcrumbs={breadcrumbs}
      toc={toc}
      trendingGuides={trendingGuides}
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-parchment-light leading-tight mb-4 font-cinzel">
        How to Choose the Best Class &amp; Profession in Romestead: Starting
        Builds, Citizen Jobs &amp; Workplaces
      </h1>
      <p className="text-ash text-sm mb-6">
        Updated May 29, 2026 &middot; Early Access Build
      </p>

      {/* YouTube Embed */}
      <YouTubeEmbed
        videoId="40AnkU__t54"
        title="Romestead Best Class & Profession Guide"
      />

      {/* Intro */}
      <div className="prose-romestead">
        <p>
          Romestead, developed by <strong>Beartwigs</strong> and published by{" "}
          <strong>Three Friends</strong>, launched into Early Access on May 26, 2026 at 06:31 UTC. This top-down pixel-art colony builder drops players into a
          fallen Roman world overrun by nightly zombie incursions. While the
          game&apos;s Steam trailer emphasizes bustling autonomous towns, the
          reality of its profession and citizen systems is far more hands-on  -           and often confusing for new players. In this guide, we break down
          exactly how starting character bonuses work, what each profession
          actually does, and how to build an efficient colony workforce based on
          the current Early Access build.
        </p>
      </div>

      {/* Quick Answer */}
      <div id="quick-answer">
        <QuickAnswer>
          <p>
            In Romestead&apos;s Early Access build checked May 29, 2026, starting class
            bonuses (e.g., +5 Melee) have minimal impact. Your true
            &quot;profession&quot; comes from workplace buildings like Lumberjack
            and Leather Worker, but citizens only generate resources passively  -             they do not hunt, gather, or cook.
          </p>
        </QuickAnswer>
      </div>

      {/* Character Creation Screenshot */}
      <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
        <Image
          src="/images/screenshots/character-creation.webp"
          alt="Character creation screen showing starting bonuses"
          width={800}
          height={450}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      {/* Detailed Walkthrough */}
      <div className="prose-romestead">
        <h2 id="starting-character">
          1. Starting Character Creation (The &quot;Class&quot; System)
        </h2>
        <p>
          When you first spawn into the world, Romestead allows you to customize
          your starting character with a novel bonus.
        </p>
        <ul>
          <li>
            <strong>Example bonus observed:</strong> +5 Melee.
          </li>
          <li>
            <strong>Our assessment:</strong> Based on extensive gameplay and
            reviewer testing, this starting bonus has negligible long-term impact
            on your overall power or progression. The game&apos;s balance is
            tied far more heavily to gear crafting and boss progression than to
            your initial stat allocation.
          </li>
          <li>
            <strong>Recommendation:</strong> Do not overthink min-maxing during
            character creation. Pick whatever sounds appealing and move on.
          </li>
        </ul>

        <h2 id="profession-system">
          2. How the Profession / Citizenry System Actually Works
        </h2>
        <p>
          Romestead&apos;s profession system is built around{" "}
          <strong>workplace buildings</strong>, not traditional RPG classes. Here
          is how the loop functions:
        </p>
        <ol>
          <li>Construct a house to attract a citizen.</li>
          <li>
            Build a specific workplace (e.g., Lumberjack Hut, Leather Worker
            Shop).
          </li>
          <li>
            The citizen will move into the house and &quot;work&quot; at the
            assigned building.
          </li>
          <li>You must provide food for every citizen, employed or not.</li>
        </ol>
        <p>
          <strong>Critical limitation (checked May 29, 2026):</strong> Citizens
          are <strong>passive resource generators</strong>, not autonomous NPCs.
          They do not:
        </p>
        <ul>
          <li>Physically chop trees or mine ore.</li>
          <li>Hunt wildlife for pelts.</li>
          <li>Pick up, move, or transfer items between storages.</li>
          <li>Cook raw food, even if ingredients are available.</li>
        </ul>

        <h2 id="early-professions">3. Early-Game Professions Breakdown</h2>

        <h3>Lumberjack</h3>
        <ul>
          <li>
            <strong>Unlock:</strong> Available from the start.
          </li>
          <li>
            <strong>Placement:</strong> Build near trees. You can plant tree
            seeds nearby to ensure a renewable source.
          </li>
          <li>
            <strong>Function:</strong> The citizen passively generates logs over
            time. They do not leave the building to chop wood.
          </li>
          <li>
            <strong>Bottleneck:</strong> While logs flow in, you will frequently
            need stones for upgrades, and the{" "}
            <strong>Quarry is not unlocked at this stage</strong>, creating a
            resource wall.
          </li>
        </ul>

        <h3>Leather Worker</h3>
        <ul>
          <li>
            <strong>Unlock:</strong> Part of the early-game tutorial path.
          </li>
          <li>
            <strong>Function:</strong> Acts as a specialized crafting bench.
            Queue recipes for leather gear (hat, chest, legs).
          </li>
          <li>
            <strong>Input required:</strong> You must manually bring{" "}
            <strong>pelts</strong> (e.g., bear pelts) to the shop.
          </li>
          <li>
            <strong>Time cost:</strong> Recipes take a long time to complete.
          </li>
          <li>
            <strong>Grind warning:</strong> The first set of leather gear
            requires approximately <strong>20 bear pelts</strong>, representing
            a significant early-game farming commitment.
          </li>
        </ul>

        <h3>Unemployed Citizens</h3>
        <ul>
          <li>
            If you build houses without corresponding workplaces, citizens will
            remain unemployed.
          </li>
          <li>They still consume food from your food storage.</li>
          <li>
            They provide <strong>zero benefit</strong> to your colony.
          </li>
        </ul>
      </div>

      {/* Settlement Overview Screenshot */}
      <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
        <Image
          src="/images/screenshots/starter-village.webp"
          alt="Lumberjack Hut and Leather Worker shop placement in settlement"
          width={800}
          height={450}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <div className="prose-romestead">
        <h2 id="farmstead">
          4. Mid-Game Profession Unlock: Farmstead
        </h2>
        <ul>
          <li>
            <strong>Unlock condition:</strong> Defeat the first region boss (the
            large bird) and progress through the altar/god questline.
          </li>
          <li>
            <strong>Function:</strong> Similar to the Lumberjack, but for
            agriculture. It auto-harvests crops in the surrounding area.
          </li>
          <li>
            <strong>Accessibility:</strong> Based on current pacing, this unlock
            takes <strong>several hours</strong> of gameplay to reach. The
            reviewer noted this as a major pacing issue in the Early Access
            build.
          </li>
        </ul>

        <h2 id="altar-progression">5. The Altar &amp; Blueprint Progression</h2>
        <ul>
          <li>
            Constructing an altar allows you to sacrifice offerings to a god.
          </li>
          <li>
            Many offerings are <strong>undiscovered</strong>, tempting players to
            experiment by feeding random resources into it.
          </li>
          <li>
            <strong>Important:</strong> The intended critical path is to{" "}
            <strong>fight the first boss</strong>, not grind altar recipes.
            Defeating the boss triggers new blueprints, buildings, and
            profession options.
          </li>
        </ul>

        <h2 id="advanced-tips">Advanced Tips &amp; Strategy</h2>

        <h3>Master Physical Transport Early</h3>
        <p>
          The game forces you to act as the colony&apos;s sole logistics worker.
          Do not expect citizens to help.
        </p>
        <ul>
          <li>
            <strong>Log chunks:</strong> Trees break into individual log chunks
            that you can only carry <strong>one at a time</strong> early on. You
            must manually haul each piece to your build site.
          </li>
          <li>
            <strong>Wood plank conversion:</strong> To save transport trips,
            place a log chunk back onto a tree stump and attack it to convert it
            directly into wood planks.
          </li>
          <li>
            <strong>Stick farming:</strong> To get sticks (used for arrows), pick
            up rocks and throw them at trees. Rocks bounce unpredictably, so find
            a rhythm where you can pick up and re-throw without repositioning.
          </li>
        </ul>

        <h3>Prioritize the Cart Technology</h3>
        <p>
          A <strong>cart</strong> unlocks later in the technology tree. Once
          available:
        </p>
        <ul>
          <li>It allows you to transport <strong>multiple logs at once</strong>.</li>
          <li>
            This is the single biggest quality-of-life upgrade for base
            building. Rush toward it to escape the &quot;one log at a time&quot;
            grind.
          </li>
        </ul>

        <h3>Food Management</h3>
        <ul>
          <li>
            Citizens eat from food storage, but they{" "}
            <strong>will not cook raw food</strong>.
          </li>
          <li>
            You must personally cook all ingredients before depositing them. Raw
            meat placed in storage will sit there unused while citizens starve.
          </li>
        </ul>

        <h3>Build Discipline</h3>
        <ul>
          <li>
            Only construct houses when you have a matching workplace ready.
          </li>
          <li>
            Every unemployed citizen is a pure food drain with no return.
          </li>
        </ul>

        <h3>Boss Kill = Profession Expansion</h3>
        <ul>
          <li>
            Defeating the first boss unlocks the next tier of blueprints and
            profession buildings.
          </li>
          <li>
            Early leather-worker gear, spears, crossbows, and a shield are all
            recommended for this fight.
          </li>
          <li>
            If melee combat feels inconsistent, the bow-and-arrow cheese
            strategy (charging shots for bonus damage) is a viable fallback.
          </li>
        </ul>
      </div>

      {/* Cart Transport Screenshot */}
      <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
        <Image
          src="/images/screenshots/transport-cart.webp"
          alt="Cart transport and citizen food supply management"
          width={800}
          height={450}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      {/* FAQ */}
      <div className="prose-romestead">
        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>
          Q: Does Romestead support dedicated servers for multiplayer?
        </h3>
        <p>
          As of the Early Access build checked May 29, 2026, Romestead supports{" "}
          <strong>1 to 8 player co-op</strong>. The reviewer confirmed the game
          scales from solo play up to eight players. However, there is currently{" "}
          <strong>
            no official dedicated server software or documentation
          </strong>{" "}
          from Beartwigs / Three Friends. Sessions appear to rely on
          peer-to-peer or basic hosted lobbies. For stable multiplayer, the host
          should have a reliable connection.
        </p>

        <h3>
          Q: Is Romestead playable on Steam Deck, and does it have full
          controller support?
        </h3>
        <p>
          Steam Deck certification and native controller support have{" "}
          <strong>not been officially detailed</strong> at Early Access launch.
          The game&apos;s UI relies heavily on precise mouse-driven inventory
          management and building placement, suggesting controller support may
          be limited or require Steam Input customization. We recommend checking
          the official Steam store page for verified Deck compatibility badges
          and controller configuration updates.
        </p>

        <h3>
          Q: Can you move buildings after placing them in Romestead?
        </h3>
        <p>
          In the current Early Access build checked May 29, 2026, there is{" "}
          <strong>no confirmed building relocation mechanic</strong>. Once a
          structure is placed, it appears to be permanent. The video footage
          shows buildings being constructed from scratch with no &quot;move&quot;
          or &quot;deconstruct&quot; option highlighted. Plan your colony layout
          carefully before committing rare resources like stone and planks.
        </p>
      </div>
    </BlogLayout>
  );
}
