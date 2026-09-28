"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/docwellness-logo-icon.png"
            alt=""
            width={328}
            height={327}
            className="h-11 w-auto sm:h-12"
            priority
          />
          <Image
            src="/docwellness-logo-wordmark.png"
            alt="Docwellness"
            width={490}
            height={111}
            className="h-11 w-auto sm:h-12"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/#get-started"
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-brand-text" />
            <span className="block h-0.5 w-5 bg-brand-text" />
            <span className="block h-0.5 w-5 bg-brand-text" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-border bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-brand-text-secondary hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#get-started"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
