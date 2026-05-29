import Image from "next/image";
import Link from "next/link";

const guides = [
  {
    slug: "best-class-profession",
    title: "Best Class & Profession",
    fullTitle: "How to Choose the Best Class & Profession in Romestead",
    description:
      "Starting bonuses, citizen jobs, workplace buildings, and the fastest way to avoid a useless food-draining colony.",
    date: "May 2026",
    tag: "BEGINNER",
    readTime: "9 min",
    image: "/images/screenshots/village-overview.webp",
    focus: ["Character creation", "Citizen jobs", "Workplace order"],
  },
  {
    slug: "steam-deck-controller",
    title: "Steam Deck & Controller",
    fullTitle: "Romestead on Steam Deck: Compatibility, Controller & Best Settings",
    description:
      "Compatibility status, controller expectations, system requirements, and practical handheld settings.",
    date: "May 2026",
    tag: "TECHNICAL",
    readTime: "5 min",
    image: "/images/screenshots/starter-village.webp",
    focus: ["Steam Deck", "Controls", "Settings"],
  },
  {
    slug: "multiplayer-dedicated-server",
    title: "Multiplayer & Co-op",
    fullTitle: "Romestead Multiplayer & Co-op Guide: How to Play With Friends",
    description:
      "Co-op setup, dedicated server reality, scaling, role specialization, and shared settlement planning.",
    date: "May 2026",
    tag: "MULTIPLAYER",
    readTime: "7 min",
    image: "/images/screenshots/multiplayer-coop.webp",
    focus: ["1-8 players", "Roles", "Server limits"],
  },
  {
    slug: "tips-tricks",
    title: "Tips & Tricks",
    fullTitle: "Romestead Tips & Tricks: Everything I Wish I Knew Before Playing",
    description:
      "Resource transport, cart priority, building layout, combat prep, farming chains, and common mistakes.",
    date: "May 2026",
    tag: "TIPS",
    readTime: "12 min",
    image: "/images/screenshots/transport-cart.webp",
    focus: ["Cart rush", "Food chain", "Boss prep"],
  },
];

const pathSteps = [
  {
    label: "Start",
    title: "Pick any class",
    text: "The starting bonus is weaker than gear, buildings, and resource flow.",
  },
  {
    label: "Build",
    title: "Workplaces before houses",
    text: "Every unemployed citizen eats food and produces nothing.",
  },
  {
    label: "Rush",
    title: "Get cart logistics",
    text: "One-log hauling is the early-game bottleneck. Cart tech fixes it.",
  },
  {
    label: "Fight",
    title: "Prepare for first boss",
    text: "Leather gear, shield, ranged damage, and cooked food change the fight.",
  },
];

const featured = guides[0];

export default function GuidesPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-stone-medium bg-[radial-gradient(circle_at_75%_10%,rgba(230,126,34,0.18),transparent_30%),linear-gradient(180deg,#12100d_0%,#0d0d0d_82%)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-pixel text-[9px] uppercase tracking-[0.32em] text-ember">Romestead Field Manual</p>
              <h1 className="mt-5 font-cinzel text-4xl font-black leading-tight text-parchment-light sm:text-6xl">
                Guides built for survival decisions.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ash sm:text-lg">
                Stop reading generic walkthrough blocks. These guides answer the real problems:
                what to build first, what wastes time, when to fight, and how to keep the colony alive.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {pathSteps.map((step, index) => (
                <div key={step.label} className="border border-stone-medium bg-stone-dark/90 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center border border-ember/60 bg-obsidian font-cinzel text-ember">
                      {index + 1}
                    </span>
                    <p className="font-pixel text-[8px] uppercase tracking-widest text-ash">{step.label}</p>
                  </div>
                  <h2 className="mt-4 font-cinzel text-lg text-parchment-light">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href={`/guides/${featured.slug}`}
          className="group grid overflow-hidden rounded-md border border-ember bg-stone-dark shadow-glow-ember transition-all duration-200 hover:-translate-y-1 lg:grid-cols-[1fr_420px]"
        >
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-ember px-3 py-1 font-pixel text-[8px] uppercase tracking-widest text-obsidian">
                Featured
              </span>
              <span className="text-xs text-ash">{featured.date}</span>
              <span className="text-xs text-ash">{featured.readTime}</span>
            </div>
            <h2 className="mt-5 max-w-3xl font-cinzel text-2xl font-bold text-parchment-light transition-colors group-hover:text-ember sm:text-3xl">
              {featured.fullTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ash">{featured.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.focus.map((item) => (
                <span key={item} className="border border-stone-medium bg-obsidian/70 px-3 py-2 text-xs text-parchment">
                  {item}
                </span>
              ))}
            </div>
            <span className="mt-7 inline-block text-sm font-semibold text-ember">Read guide -&gt;</span>
          </div>
          <div className="relative min-h-64 overflow-hidden border-t border-stone-medium lg:border-l lg:border-t-0">
            <Image
              src={featured.image}
              alt={featured.fullTitle}
              width={700}
              height={460}
              className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-95"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/70 via-transparent to-transparent" />
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-pixel text-[8px] uppercase tracking-widest text-ember">Library</p>
            <h2 className="mt-2 font-cinzel text-3xl font-bold text-parchment-light">All Guides</h2>
          </div>
          <p className="max-w-md text-sm text-ash">
            Pick by problem, not by article order.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group overflow-hidden rounded-md border border-stone-medium bg-stone-dark transition-all duration-200 hover:-translate-y-1 hover:border-ember"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={guide.image}
                  alt=""
                  width={620}
                  height={320}
                  className="h-full w-full object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-stone-dark/35 to-transparent" />
                <span className="absolute left-4 top-4 bg-obsidian/80 px-3 py-1 font-pixel text-[8px] uppercase tracking-widest text-parchment-light">
                  {guide.tag}
                </span>
                <span className="absolute right-4 top-4 border border-stone-medium bg-obsidian/80 px-3 py-1 text-xs text-ash">
                  {guide.readTime}
                </span>
                <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center border border-ember/60 bg-obsidian font-cinzel text-ember">
                  {index + 1}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-xs text-ash">{guide.date}</span>
                </div>
                <h3 className="font-cinzel text-xl text-parchment-light transition-colors group-hover:text-ember">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{guide.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.focus.map((item) => (
                    <span key={item} className="bg-obsidian/70 px-2.5 py-1.5 text-xs text-parchment">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 rounded-md border border-stone-medium bg-[linear-gradient(135deg,rgba(230,126,34,0.14),rgba(26,26,26,0.92))] p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h2 className="font-cinzel text-2xl text-parchment-light">Need raw stats instead?</h2>
            <p className="mt-2 text-sm leading-relaxed text-ash">
              Guides explain decisions. Wiki pages list exact weapons, armor, gods, biomes, and crafting data.
            </p>
          </div>
          <Link href="/wiki" className="btn-primary text-center">
            Open Wiki
          </Link>
        </div>
      </section>
    </main>
  );
}
