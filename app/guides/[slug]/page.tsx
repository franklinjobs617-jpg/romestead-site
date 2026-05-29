import Link from "next/link";

export default async function GuideSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // If this is the best-class-profession guide, it has its own dedicated page
  if (slug === "best-class-profession") {
    // This shouldn't be reached since there's a dedicated page,
    // but just in case, redirect to guides
    return null;
  }

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/guides"
          className="text-ember hover:text-ember-dark text-sm mb-6 inline-block"
        >
           - Back to Guides
        </Link>
        <h1 className="font-cinzel text-4xl text-parchment-light mb-4">
          {title}
        </h1>
        <p className="text-ash text-lg mb-8">
          This guide is coming soon. Content is being written based on gameplay
          research and community contributions.
        </p>
        <div className="card">
          <p className="text-parchment">
            Check back soon for a detailed {title.toLowerCase()} guide. In the
            meantime, check out our{" "}
            <Link
              href="/guides/best-class-profession"
              className="text-ember hover:text-ember-dark underline"
            >
              Best Class & Profession guide
            </Link>{" "}
            or browse the{" "}
            <Link href="/wiki" className="text-ember hover:text-ember-dark underline">
              Wiki
            </Link>{" "}
            for game data.
          </p>
        </div>
      </div>
    </main>
  );
}
