"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
      <Link
        href={href}
        aria-label={label}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/75 transition-colors hover:bg-[color:var(--color-brand)]/10 hover:text-[color:var(--color-brand)]"
      >
        {children}
        {typeof badge === "number" ? (
          <span className="absolute -right-0.5 -top-0.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[color:var(--color-brand)] px-1 text-[10px] font-bold tabular-nums text-[color:var(--color-brand-foreground)] shadow-sm">
            {badge > 9 ? "9+" : badge}
          </span>
        ) : null}
      </Link>
    </motion.div>
  );
}

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={[
        "relative rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors",
        active
          ? "bg-[color:var(--color-brand)]/12 text-[color:var(--color-brand)]"
          : "text-foreground/65 hover:bg-black/[0.04] hover:text-foreground",
      ].join(" ")}
    >
      {item.label}
    </Link>
  );
}

function pathMatches(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  const nav = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Pages", href: "/pages" },
      { label: "Blog", href: "/blog" },
      { label: "Contact us", href: "/contact" },
    ],
    [],
  );

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="border-b border-black/[0.06] bg-gradient-to-r from-[color:var(--color-brand)]/[0.06] via-transparent to-[color:var(--color-brand)]/[0.06] px-4 py-2 text-center text-[11px] font-medium tracking-wide text-foreground/70">
        <span className="inline-flex items-center gap-2">
          <span className="hidden h-1 w-1 rounded-full bg-[color:var(--color-brand)] sm:inline" aria-hidden />
          Free shipping on orders over $50 · Easy 30-day returns
          <span className="hidden h-1 w-1 rounded-full bg-[color:var(--color-brand)] sm:inline" aria-hidden />
        </span>
      </div>

      <div className="border-b border-black/[0.06] bg-background/85 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:py-4">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-brand)] to-[#d64545] text-[color:var(--color-brand-foreground)] shadow-lg shadow-[color:var(--color-brand)]/30 ring-2 ring-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
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
              <span className="font-[var(--font-display)] text-lg tracking-wide text-[#0b1a33] sm:text-xl">
                Decor haven home
              </span>
            </Link>
          </motion.div>

          <nav
            className="hidden items-center gap-0.5 rounded-full border border-black/[0.07] bg-black/[0.02] p-1 md:flex"
            aria-label="Primary"
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + i * 0.03, duration: 0.3 }}
              >
                <NavLink item={item} active={pathMatches(pathname, item.href)} />
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <motion.div
              className="hidden items-center rounded-full border border-black/[0.08] bg-white/60 p-1 shadow-sm shadow-black/[0.04] backdrop-blur-sm md:flex lg:gap-0.5"
              whileHover={{ boxShadow: "0 8px 28px rgba(15,23,42,0.08)" }}
            >
              <IconButton href="/cart" label="Cart" badge={2}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M21 21l-4.3-4.3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </IconButton>

              <IconButton href="/login" label="Account">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
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
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="hidden lg:block">
              <Link
                href="/shop"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--color-brand)] px-5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-foreground)] shadow-md shadow-[color:var(--color-brand)]/25 transition hover:brightness-95"
              >
                Shop now
              </Link>
            </motion.div>

            <motion.button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/80 text-foreground shadow-sm md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              whileTap={{ scale: 0.96 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.svg
                    key="close"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden
                  >
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden
                  >
                    <path
                      d="M4 7h16M4 12h16M4 17h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="border-b border-black/[0.06] bg-background/95 shadow-lg shadow-black/10 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="mx-auto max-w-6xl px-4 pb-5 pt-1">
              <div className="rounded-2xl border border-black/[0.06] bg-[color:var(--color-surface)]/80 p-2">
                <motion.div
                  className="grid gap-1"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.04 } },
                  }}
                >
                  {nav.map((item) => {
                    const active = pathMatches(pathname, item.href);
                    return (
                      <motion.div
                        key={item.href}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          href={item.href}
                          className={[
                            "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                            active
                              ? "bg-[color:var(--color-brand)]/12 text-[color:var(--color-brand)]"
                              : "text-foreground/85 hover:bg-white",
                          ].join(" ")}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/[0.06] pt-3">
                  <Link
                    href="/cart"
                    className="flex items-center justify-center rounded-xl border border-black/[0.08] bg-white py-3 text-sm font-semibold hover:bg-[color:var(--color-surface)]"
                    onClick={() => setOpen(false)}
                  >
                    Cart
                    <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[color:var(--color-brand)] px-1 text-[10px] font-bold text-[color:var(--color-brand-foreground)]">
                      2
                    </span>
                  </Link>
                  <Link
                    href="/login"
                    className="rounded-xl bg-[color:var(--color-brand)] py-3 text-center text-sm font-semibold text-[color:var(--color-brand-foreground)] shadow-md shadow-[color:var(--color-brand)]/20 hover:brightness-95"
                    onClick={() => setOpen(false)}
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
