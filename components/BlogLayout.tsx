import Breadcrumbs from "./Breadcrumbs";
import OnThisPage from "./OnThisPage";
import TrendingGuides from "./TrendingGuides";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface TocItem {
  id: string;
  label: string;
}

interface GuideLink {
  title: string;
  href: string;
}

interface BlogLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
  toc: TocItem[];
  trendingGuides: GuideLink[];
}

export default function BlogLayout({
  breadcrumbs,
  children,
  toc,
  trendingGuides,
}: BlogLayoutProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <header className="border-b border-stone-medium">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content (Left 2/3) */}
          <article className="lg:col-span-2">{children}</article>

          {/* Sidebar (Right 1/3) */}
          <aside className="lg:col-span-1 space-y-6">
            <TrendingGuides guides={trendingGuides} />
            <OnThisPage items={toc} />
          </aside>
        </div>
      </main>
    </>
  );
}
