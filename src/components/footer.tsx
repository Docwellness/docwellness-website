import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/recipes", label: "Recipes" },
      { href: "/#get-started", label: "Get started" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/support", label: "Support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/health-disclaimer", label: "Health disclaimer" },
      { href: "/delete-account", label: "Delete account" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-primary-light">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/docwellness-logo-icon.png"
                alt=""
                width={328}
                height={327}
                className="h-9 w-auto"
              />
              <Image
                src="/docwellness-logo-wordmark.png"
                alt="Docwellness"
                width={490}
                height={111}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-brand-text-secondary">
              Personalized nutrition coaching with a dietician who actually knows your plan.
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
          <p>© {new Date().getFullYear()} Docwellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
