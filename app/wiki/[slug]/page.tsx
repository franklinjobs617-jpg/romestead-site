import Link from "next/link";

export default async function WikiSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/wiki"
          className="text-ember hover:text-ember-dark text-sm mb-6 inline-block"
        >
           - Back to Wiki
        </Link>
        <h1 className="font-cinzel text-4xl text-parchment-light mb-4">
          {title}
        </h1>
        <p className="text-ash text-lg mb-8">
          This page is coming soon. Content is being written based on gameplay
          research and community contributions.
        </p>
        <div className="card">
          <p className="text-parchment">
            Check back soon for detailed information about {title.toLowerCase()}
            . In the meantime, join the discussion on{" "}
            <a
              href="https://store.steampowered.com/app/1805320/Romestead/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ember hover:text-ember-dark underline"
            >
              Steam
            </a>{" "}
            or browse our{" "}
            <Link href="/guides" className="text-ember hover:text-ember-dark underline">
              guides
            </Link>{" "}
            for gameplay tips.
          </p>
        </div>
      </div>
    </main>
  );
}
