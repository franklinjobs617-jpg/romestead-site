import Link from "next/link";

interface GuideLink {
  title: string;
  href: string;
}

export default function TrendingGuides({
  guides,
}: {
  guides: GuideLink[];
}) {
  return (
    <div className="bg-stone-dark border border-stone-medium rounded-md p-5">
      <h3 className="text-base font-bold text-parchment-light mb-4 pb-3 border-b border-stone-medium font-cinzel">
        Trending Guides
      </h3>
      <ul className="space-y-3">
        {guides.map((guide, index) => (
          <li key={index}>
            <Link href={guide.href} className="flex items-start group">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-ember mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm text-parchment group-hover:text-ember transition-colors">
                {guide.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
