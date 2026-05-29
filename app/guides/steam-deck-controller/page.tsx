import BlogLayout from "@/components/BlogLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import QuickAnswer from "@/components/QuickAnswer";
import Link from "next/link";
import Image from "next/image";

const breadcrumbs = [
  { label: "Guides", href: "/guides" },
  { label: "Steam Deck & Controller" },
];

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "steam-deck-compatibility", label: "Steam Deck Compatibility" },
  { id: "controller-support", label: "Controller Support Status" },
  { id: "system-requirements", label: "System Requirements" },
  { id: "best-settings", label: "Best Steam Deck Settings" },
  { id: "controls-guide", label: "Controls & Keybindings" },
  { id: "performance-tips", label: "Performance Tips" },
  { id: "faq", label: "FAQ" },
];

const trendingGuides = [
  { title: "Best Starting Class & Profession", href: "/guides/best-class-profession" },
  { title: "Steam Deck & Controller Guide", href: "/guides/steam-deck-controller" },
  { title: "Multiplayer & Dedicated Server", href: "/guides/multiplayer-dedicated-server" },
  { title: "Tips & Tricks for Beginners", href: "/guides/tips-tricks" },
];

export default function SteamDeckControllerGuide() {
  return (
    <BlogLayout
      breadcrumbs={breadcrumbs}
      toc={toc}
      trendingGuides={trendingGuides}
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-parchment-light leading-tight mb-4 font-cinzel">
        Romestead on Steam Deck: Compatibility, Controller Support & Best Settings (2026)
      </h1>
      <p className="text-ash text-sm mb-6">
        Updated May 29, 2026 &middot; Early Access Build
      </p>

      {/* YouTube Embed */}
      <YouTubeEmbed
        videoId="yqX7OkvfsJo"
        title="Romestead Official Early Access Launch Trailer"
      />

      {/* Intro */}
      <div className="prose-romestead">
        <p>
          Romestead, the pixel-art survival colony builder by <strong>Beartwigs</strong> and{" "}
          <strong>Three Friends</strong>, launched into Early Access on May 26, 2026 at 06:31 UTC. Many players are
          asking: <strong>does Romestead work on Steam Deck?</strong> And does it have controller
          support? In this guide, we cover everything you need to know about playing Romestead on
          handheld devices, including compatibility status, recommended settings, and workarounds
          for the current build.
        </p>
      </div>

      {/* Quick Answer */}
      <div id="quick-answer">
        <QuickAnswer>
          <p>
            As of May 29, 2026, Romestead is <strong>not officially Steam Deck verified</strong>. The
            game&apos;s UI relies heavily on mouse-driven inventory management and precise building
            placement, making controller play challenging. However, it is{" "}
            <strong>playable with Steam Input customization</strong>. Native controller support has
            not been detailed by the developers but is expected during the Early Access phase.
          </p>
        </QuickAnswer>
      </div>

      {/* Steam Deck Compatibility */}
      <div className="prose-romestead">
        <h2 id="steam-deck-compatibility">Steam Deck Compatibility Status</h2>
        <p>
          Romestead does <strong>not currently have an official Steam Deck compatibility badge</strong>{" "}
          on the Steam store page. This means Valve has not yet tested and certified the game for
          Steam Deck play. Here is what we know:
        </p>
        <ul>
          <li>
            <strong>It launches and runs</strong> on Steam Deck. Players have reported getting the
            game to boot without major issues.
          </li>
          <li>
            <strong>Performance is generally acceptable</strong> for a 2D pixel-art game. The art
            style is not demanding on hardware.
          </li>
          <li>
            <strong>The UI is the main problem.</strong> Inventory management, building placement,
            and crafting menus are designed for mouse interaction. Small text and precise clicking
            are difficult on the Deck&apos;s touchscreen or trackpad.
          </li>
          <li>
            <strong>No official controller layout</strong> exists yet. You will need to use Steam
            Input to create or download a community layout.
          </li>
        </ul>
        <p>
          The developers at Beartwigs have mentioned that controller support and Steam Deck
          optimization are on their roadmap, but no specific timeline has been given. Given the
          estimated 1-2 year Early Access period, it may be some time before full support arrives.
        </p>

        <h2 id="controller-support">Controller Support Status</h2>
        <p>
          Native controller support is <strong>not implemented</strong> in the current Early Access
          build checked May 29, 2026. The game is built around mouse-and-keyboard input:
        </p>
        <ul>
          <li>
            <strong>Inventory:</strong> Drag-and-drop with mouse. No controller-friendly grid
            navigation.
          </li>
          <li>
            <strong>Building:</strong> Precise placement with mouse cursor. No snap-to-grid
            controller mode.
          </li>
          <li>
            <strong>Combat:</strong> This actually works decently with a controller since it is
            action-based (attack, dodge, heavy attack).
          </li>
          <li>
            <strong>Menus:</strong> Designed for mouse hover and click. No D-pad navigation
            support.
          </li>
        </ul>
        <p>
          <strong>Workaround:</strong> Use Steam Input to map the right trackpad to mouse movement
          and the triggers to mouse clicks. Community-shared layouts can be found in the Steam
          Input configuration menu. This makes the game playable, though not ideal.
        </p>

        {/* Steam Deck Screenshot - using settlement overview as placeholder */}
        <div className="my-8 rounded-md overflow-hidden border border-stone-medium">
          <Image
            src="/images/screenshots/starter-village.webp"
            alt="Romestead gameplay on Steam Deck"
            width={800}
            height={450}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2 id="system-requirements">System Requirements</h2>
        <p>
          Romestead is a lightweight 2D pixel-art game. Here are the official system requirements:
        </p>
      </div>

      {/* System Requirements Table */}
      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="table-header">
              <th className="text-left p-3 font-cinzel">Component</th>
              <th className="text-left p-3 font-cinzel">Minimum</th>
              <th className="text-left p-3 font-cinzel">Recommended</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="p-3 text-parchment-light font-semibold">OS</td>
              <td className="p-3 text-parchment">Windows 10</td>
              <td className="p-3 text-parchment">Windows 10/11</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment-light font-semibold">Processor</td>
              <td className="p-3 text-parchment">Intel i3 / AMD equivalent</td>
              <td className="p-3 text-parchment">Intel i5 / AMD Ryzen 5</td>
            </tr>
            <tr className="table-row">
              <td className="p-3 text-parchment-light font-semibold">Memory</td>
              <td className="p-3 text-parchment">4 GB RAM</td>
              <td className="p-3 text-parchment">8 GB RAM</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment-light font-semibold">Graphics</td>
              <td className="p-3 text-parchment">Integrated graphics</td>
              <td className="p-3 text-parchment">Dedicated GPU</td>
            </tr>
            <tr className="table-row">
              <td className="p-3 text-parchment-light font-semibold">Storage</td>
              <td className="p-3 text-parchment">2 GB available space</td>
              <td className="p-3 text-parchment">2 GB SSD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose-romestead">
        <p>
          The Steam Deck easily exceeds these requirements. Performance should not be an issue
          unless you have a very large settlement with many NPCs and objects on screen.
        </p>

        <h2 id="best-settings">Best Steam Deck Settings</h2>
        <p>
          If you are playing on Steam Deck, here are the recommended settings for the best
          experience:
        </p>
        <ul>
          <li>
            <strong>Resolution:</strong> Use the native 1280x800. The pixel art scales well.
          </li>
          <li>
            <strong>Frame Rate:</strong> Lock to 60 FPS. The game is not demanding enough to need
            30 FPS for battery savings.
          </li>
          <li>
            <strong>TDP:</strong> Set to 8-10W for extended battery life. The game does not need
            more power.
          </li>
          <li>
            <strong>Steam Input:</strong> Use the right trackpad as a mouse. Map left trigger to
            right-click (for picking up items) and right trigger to left-click (for attacking and
            interacting).
          </li>
          <li>
            <strong>Text Size:</strong> Unfortunately, there is no in-game text scaling option in
            the current build. You may need to use the Steam Deck magnifier (Steam + L1) for
            reading small text.
          </li>
        </ul>

        <h2 id="controls-guide">Controls & Keybindings</h2>
        <p>
          The default PC controls are as follows. For Steam Deck, you will need to map these to
          the controller:
        </p>
      </div>

      {/* Controls Table */}
      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="table-header">
              <th className="text-left p-3 font-cinzel">Action</th>
              <th className="text-left p-3 font-cinzel">PC Key</th>
              <th className="text-left p-3 font-cinzel">Suggested Deck Mapping</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="p-3 text-parchment">Move</td>
              <td className="p-3 text-parchment">WASD</td>
              <td className="p-3 text-parchment">Left Stick</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment">Attack / Interact</td>
              <td className="p-3 text-parchment">Left Click</td>
              <td className="p-3 text-parchment">Right Trigger</td>
            </tr>
            <tr className="table-row">
              <td className="p-3 text-parchment">Pick Up / Throw</td>
              <td className="p-3 text-parchment">Right Click</td>
              <td className="p-3 text-parchment">Left Trigger</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment">Dodge Roll</td>
              <td className="p-3 text-parchment">Space</td>
              <td className="p-3 text-parchment">A Button</td>
            </tr>
            <tr className="table-row">
              <td className="p-3 text-parchment">Inventory</td>
              <td className="p-3 text-parchment">E or Tab</td>
              <td className="p-3 text-parchment">Y Button</td>
            </tr>
            <tr className="table-row table-row-alt">
              <td className="p-3 text-parchment">Map</td>
              <td className="p-3 text-parchment">M</td>
              <td className="p-3 text-parchment">D-Pad Up</td>
            </tr>
            <tr className="table-row">
              <td className="p-3 text-parchment">Hotbar Select</td>
              <td className="p-3 text-parchment">1-9</td>
              <td className="p-3 text-parchment">Bumpers + D-Pad</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose-romestead">
        <h2 id="performance-tips">Performance Tips</h2>
        <p>
          While Romestead is not a demanding game, large settlements can cause frame drops. Here
          are some tips:
        </p>
        <ul>
          <li>
            <strong>Limit NPC count:</strong> Each citizen adds to the processing load. Do not
            build more houses than you need.
          </li>
          <li>
            <strong>Reduce ground clutter:</strong> Pick up dropped items around your settlement.
            Hundreds of items on the ground can impact performance.
          </li>
          <li>
            <strong>Avoid mega-structures:</strong> Extremely large buildings with many components
            can cause slowdowns.
          </li>
          <li>
            <strong>Restart periodically:</strong> Like many Early Access games, memory leaks can
            occur over long play sessions. Restart the game every few hours.
          </li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>Q: Is Romestead on Xbox or PlayStation?</h3>
        <p>
          As of May 29, 2026, Romestead is <strong>PC only (Steam)</strong>. There has been no official
          announcement regarding console ports. The developers have focused on the PC Early Access
          release first. Console releases, if they happen, would likely come after the full 1.0
          launch.
        </p>

        <h3>Q: Does Romestead support split screen?</h3>
        <p>
          No. Romestead does <strong>not support split screen</strong>. Multiplayer is online co-op
          only (1-8 players). Each player needs their own copy of the game and their own device.
        </p>

        <h3>Q: Can I play Romestead with a controller on PC?</h3>
        <p>
          Not natively. The current Early Access build does not have built-in controller support.
          You can use <strong>Steam Input</strong> or third-party tools like{" "}
          <strong>DS4Windows</strong> or <strong>reWASD</strong> to map controller inputs to
          mouse-and-keyboard, but the experience will be suboptimal for inventory-heavy tasks.
        </p>

        <h3>Q: When will controller support be added?</h3>
        <p>
          The developers have listed controller support on their Early Access roadmap, but no
          specific date has been given. Given the estimated 1-2 year Early Access period, it could
          arrive at any point during development.
        </p>
      </div>
    </BlogLayout>
  );
}
