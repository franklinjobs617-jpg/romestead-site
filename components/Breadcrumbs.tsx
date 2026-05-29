import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ash">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-ember hover:text-ember-dark hover:underline transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-stone-light">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="text-ember hover:text-ember-dark hover:underline transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-parchment-light font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
