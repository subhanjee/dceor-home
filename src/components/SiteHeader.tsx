"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type NavItem = { label: string; href: string };

function IconButton({
  href,
  label,
  children,
  badge,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-surface)] text-foreground/70 transition hover:text-foreground"
    >
      {children}
      {typeof badge === "number" ? (
        <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[color:var(--color-brand)] px-1 text-[11px] font-semibold text-[color:var(--color-brand-foreground)]">
          {badge}
        </span>
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const nav = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Pages", href: "/pages" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center px-4 py-5 md:grid-cols-3">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-brand)] text-[color:var(--color-brand-foreground)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3c-2 0-4.5 1.2-6.2 3.2C4.1 8.2 3.3 10.7 4 13.3c.8 3 3.3 5.5 6.2 6.1 1.2.3 2.4.3 3.6 0 2.9-.6 5.4-3.1 6.2-6.1.7-2.6 0-5.1-1.8-7.1C16.5 4.2 14 3 12 3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                opacity="0.35"
              />
              <path
                d="M9.2 10.2c.6-.9 1.6-1.4 2.8-1.4s2.2.5 2.8 1.4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M8.4 13.2c.9.9 2.2 1.5 3.6 1.5s2.7-.6 3.6-1.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-[var(--font-display)] text-xl tracking-wide">
            Decor haven home
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 text-xs font-semibold tracking-widest text-foreground/70 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <IconButton href="/cart" label="Cart" badge={2}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 7h14l-1.5 8.5a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.7L6 3H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
            </IconButton>

            <IconButton href="/shop" label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.3-4.3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>

            <IconButton href="/login" label="Account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 21a8 8 0 1 0-16 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-surface)] px-4 py-2 text-sm md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t bg-background md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid gap-3 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 hover:bg-[color:var(--color-surface)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <Link
                  href="/cart"
                  className="rounded-lg border px-3 py-2 text-center hover:bg-[color:var(--color-surface)]"
                  onClick={() => setOpen(false)}
                >
                  Cart
                </Link>
                <Link
                  href="/login"
                  className="rounded-lg bg-[color:var(--color-brand)] px-3 py-2 text-center text-[color:var(--color-brand-foreground)] hover:opacity-90"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

