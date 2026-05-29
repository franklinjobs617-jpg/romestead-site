"use client";

interface TocItem {
  id: string;
  label: string;
}

export default function OnThisPage({ items }: { items: TocItem[] }) {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-stone-dark border border-stone-medium rounded-md p-5">
      <h3 className="text-sm font-bold text-parchment-light mb-3 uppercase tracking-wide font-cinzel">
        On This Page
      </h3>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className="text-ember hover:text-ember-dark hover:underline transition-colors text-left"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
