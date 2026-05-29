import BlogLayout from "@/components/BlogLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import QuickAnswer from "@/components/QuickAnswer";
import Image from "next/image";

const breadcrumbs = [
  { label: "Guides", href: "/guides" },
  { label: "Multiplayer & Dedicated Server" },
];

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "how-multiplayer-works", label: "How Multiplayer Works" },
  { id: "co-op-guide", label: "Co-op Guide" },
  { id: "dedicated-server", label: "Dedicated Server Setup" },
  { id: "scaling-difficulty", label: "Scaling & Difficulty" },
  { id: "roles-specialization", label: "Role Specialization" },
  { id: "co-op-tips", label: "Co-op Tips" },
  { id: "faq", label: "FAQ" },
];

const trendingGuides = [
  { title: "Best Starting Class & Profession", href: "/guides/best-class-profession" },
  { title: "Steam Deck & Controller Guide", href: "/guides/steam-deck-controller" },
  { title: "Multiplayer & Dedicated Server", href: "/guides/multiplayer-dedicated-server" },
  { title: "Tips & Tricks for Beginners", href: "/guides/tips-tricks" },
];

export default function MultiplayerDedicatedServerGuide() {
  return (
    <BlogLayout
      breadcrumbs={breadcrumbs}
      toc={toc}
      trendingGuides={trendingGuides}
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-parchment-light leading-tight mb-4 font-cinzel">
        Romestead Multiplayer &amp; Co-op Guide: How to Play With Friends (2026)
      </h1>
      <p className="text-ash text-sm mb-6">
        Updated May 29, 2026 &middot; Early Access Build
      </p>

      {/* YouTube Embed */}
      <YouTubeEmbed
        videoId="83y6TcBdTR8"
        title="This New Base Building Survival RPG Has Massive Potential - Romestead"
      />

      {/* Intro */}
      <div className="prose-romestead">
        <p>
          Romestead is a <strong>1-8 player co-op survival colony builder</strong> set in a fallen
          Roman world. Playing with friends dramatically changes the experience  - tasks that feel
          like a grind solo become manageable with a team. In this guide, we cover how multiplayer
          works, how to set up sessions, role specialization strategies, and whether dedicated
          servers are available.
        </p>
      </div>

      {/* Quick Answer */}
      <div id="quick-answer">
        <QuickAnswer>
          <p>
            Romestead supports <strong>1-8 player online co-op</strong> in the Early Access build checked May 29, 2026. Sessions use <strong>peer-to-peer or hosted lobbies</strong>  - there is
            currently <strong>no official dedicated server software</strong>. The host player must
            be online for others to play. Difficulty scales with player count.
          </p>
        </QuickAnswer>
      </div>

      {/* How Multiplayer Works */}
      <div className="prose-romestead">
        <h2 id="how-multiplayer-works">How Multiplayer Works</h2>
        <p>
          Romestead&apos;s multiplayer is built around a shared world where all players contribute
          to the same settlement. Here is how it functions:
        </p>
        <ul>
          <li>
            <strong>Host creates the world.</strong> One player acts as the host and creates the
            game session. Other players join via Steam invite or direct connection.
          </li>
          <li>
            <strong>Shared settlement.</strong> All players work on the same colony. Buildings,
            resources, and NPCs are shared.
          </li>
          <li>
            <strong>Individual characters.</strong> Each player has their own character with their
            own inventory, stats, and equipped gear.
          </li>
          <li>
            <strong>Host must be online.</strong> When the host disconnects, the session ends for
            all players. There is no persistent world without the host.
          </li>
          <li>
            <strong>LAN play is supported.</strong> Players on the same local network can connect
            without internet.
          </li>
        </ul>

        <h2 id="co-op-guide">Co-op Guide: Getting Started</h2>
        <p>Follow these steps to start a co-op session:</p>
        <ol>
          <li>
            <strong>Host:</strong> Launch Romestead and select &quot;New Game&quot; or load an
            existing save.
          </li>
          <li>
            <strong>Host:</strong> Open the pause menu and look for the multiplayer/session
            options.
          </li>
          <li>
            <strong>Host:</strong> Invite friends via Steam overlay (Shift+Tab) or share the
            session code.
          </li>
          <li>
            <strong>Joiners:</strong> Accept the Steam invite or enter the session code to connect.
          </li>
          <li>
            <strong>Everyone spawns</strong> at the host&apos;s current location or the starting
            area.
          </li>
        </ol>
        <p>
          <strong>Important:</strong> All players must own a legitimate copy of the game on Steam.
          Pirated copies cannot connect to official multiplayer.
        </p>

        {/* Multiplayer Screenshot */}
        <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
          <Image
            src="/images/screenshots/transport-cart.webp"
            alt="Multiplayer session with multiple players in a settlement"
            width={800}
            height={450}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2 id="dedicated-server">Dedicated Server: Is It Available?</h2>
        <p>
          As of May 29, 2026, there is <strong>no official dedicated server software</strong> for
          Romestead. The developers at Beartwigs / Three Friends have not released server files or
          documentation for self-hosting.
        </p>
        <p>This means:</p>
        <ul>
          <li>
            <strong>No 24/7 servers.</strong> The world only exists when the host is playing.
          </li>
          <li>
            <strong>No server browser.</strong> You cannot browse public servers. All games are
            private or invite-only.
          </li>
          <li>
            <strong>No mods on servers.</strong> Without dedicated server files, server-side
            modding is not possible.
          </li>
        </ul>
        <p>
          <strong>Community workarounds:</strong> Some players use tools like{" "}
          <strong>Parsec</strong> or <strong>Steam Remote Play Together</strong> to share their
          screen with friends, though this is not true multiplayer. Others have explored virtual
          machine hosting to keep the host &quot;online&quot; 24/7, but this is not officially
          supported and may violate terms of service.
        </p>
        <p>
          Given the Early Access roadmap mentions improved multiplayer features, dedicated server
          support may arrive in a future update. Check the official Steam page and developer
          announcements for updates.
        </p>

        <h2 id="scaling-difficulty">Scaling & Difficulty</h2>
        <p>
          Romestead scales difficulty based on the number of players in a session. This affects:
        </p>
        <ul>
          <li>
            <strong>Enemy HP:</strong> Enemies have more health when more players are present.
            Solo players face baseline difficulty.
          </li>
          <li>
            <strong>Enemy count:</strong> More zombies and hostile creatures spawn during night
            phases with more players.
          </li>
          <li>
            <strong>Resource competition:</strong> More players means more resources consumed.
            Your food production must keep up with a larger workforce.
          </li>
        </ul>
        <p>
          <strong>Balance note:</strong> Some reviewers have noted that boss HP may not scale
          properly with player count. If boss fights feel too easy in co-op or too hard solo, this
          is likely an Early Access balance issue that may be addressed in future patches.
        </p>

        <h2 id="roles-specialization">Role Specialization in Co-op</h2>
        <p>
          One of the biggest advantages of co-op is <strong>role specialization</strong>. Instead
          of one player doing everything, you can divide responsibilities:
        </p>
      </div>

      {/* Roles Table */}
      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="table-header">
              <th className="text-left p-3 font-cinzel">Role</th>
              <th className="text-left p-3 font-cinzel">Responsibilities</th>
              <th className="text-left p-3 font-cinzel">Recommended Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="p-3 text-parchment-light font-semibold">Builder</td>
              <td className="p-3 text-parchment">Construction, layout planning, wall defense</td>
              <td className="p-3 text-parchment">Building, Mining</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment-light font-semibold">Gatherer</td>
              <td className="p-3 text-parchment">Resource collection, log hauling, cart management</td>
              <td className="p-3 text-parchment">Mining, Woodcutting</td>
            </tr>
            <tr className="table-row">
              <td className="p-3 text-parchment-light font-semibold">Fighter</td>
              <td className="p-3 text-parchment">Combat, boss fights, dungeon clearing</td>
              <td className="p-3 text-parchment">Melee, Ranged, Magic</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment-light font-semibold">Farmer</td>
              <td className="p-3 text-parchment">Crop management, food production, cooking</td>
              <td className="p-3 text-parchment">Farming, Cooking</td>
            </tr>
            <tr className="table-row">
              <td className="p-3 text-parchment-light font-semibold">Explorer</td>
              <td className="p-3 text-parchment">Map discovery, survivor recruitment, dungeon scouting</td>
              <td className="p-3 text-parchment">Exploration, Combat</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose-romestead">
        <p>
          In a full 8-player group, you can have dedicated roles. In smaller groups (2-4 players),
          each player will need to cover multiple roles. The <strong>Fighter</strong> role is the
          most important for progression, since defeating bosses unlocks new content for everyone.
        </p>

        <h2 id="co-op-tips">Co-op Tips</h2>
        <ul>
          <li>
            <strong>Communicate resource needs.</strong> Use voice chat or ping systems to
            coordinate who is gathering what. Duplicate effort wastes time.
          </li>
          <li>
            <strong>Build walls early.</strong> With more players, night attacks are more intense.
            Get your perimeter walls up before the first night cycle.
          </li>
          <li>
            <strong>Share gear drops.</strong> Dungeon loot and god rewards should go to the player
            who benefits most. A melee weapon goes to the Fighter, not the Farmer.
          </li>
          <li>
            <strong>Designate a cook.</strong> One player should focus on cooking food for the
            settlement. Raw food in storage does nothing for hungry citizens.
          </li>
          <li>
            <strong>Explore in pairs.</strong> When venturing into dangerous biomes, go with at
            least two players. One can fight while the other gathers.
          </li>
          <li>
            <strong>Mark the map.</strong> Use the in-game map marking tool to flag resource nodes,
            survivor camps, and dungeon entrances for your team.
          </li>
          <li>
            <strong>Split boss loot fairly.</strong> Boss drops are shared, but rare items should
            go to whoever needs them most for progression.
          </li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Q: Can I play Romestead with more than 8 players?</h3>
        <p>
          No. The maximum player count is <strong>8 players</strong> per session. This is a hard
          limit in the current Early Access build.
        </p>

        <h3>Q: Does progress save for non-host players?</h3>
        <p>
          Character progress (stats, inventory) may persist for joining players, but the{" "}
          <strong>world state is tied to the host&apos;s save file</strong>. If you want a
          persistent world, always join the same host.
        </p>

        <h3>Q: Is there PvP?</h3>
        <p>
          No. Romestead is <strong>PvE only</strong>. All players cooperate against the environment
          and enemy factions. There is no player-versus-player combat.
        </p>

        <h3>Q: Can I transfer my solo world to multiplayer?</h3>
        <p>
          Yes. The host can load any existing single-player save as a multiplayer session. Your
          buildings, citizens, and progress carry over. However, the world difficulty will scale up
          when other players join.
        </p>

        <h3>Q: What happens if the host disconnects?</h3>
        <p>
          The session ends for all players. The world saves on the host&apos;s machine. When the
          host restarts the session, other players can rejoin and resume from where they left off.
        </p>
      </div>
    </BlogLayout>
  );
}
