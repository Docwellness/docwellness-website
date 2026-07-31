import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/#get-started", label: "Get started" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-primary-light">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-brand-primary">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-sm text-white">
                DW
              </span>
              DocWellness
            </Link>
            <p className="mt-3 max-w-xs text-sm text-brand-text-secondary">
              Personalized nutrition coaching that connects you with real dieticians.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-brand-text">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-text-secondary hover:text-brand-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-6 text-sm text-brand-text-muted md:flex-row">
          <p>© {new Date().getFullYear()} DocWellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
