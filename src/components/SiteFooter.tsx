"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office", "Outdoor"];

const explore = [
  { label: "Shop all", href: "/shop" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const support = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const footerEase = [0.25, 0.1, 0.25, 1] as const;

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/80 text-foreground/70 shadow-sm transition-colors hover:border-[color:var(--color-brand)]/40 hover:bg-[color:var(--color-brand)]/8 hover:text-[color:var(--color-brand)]"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-20 border-t border-black/[0.06] bg-gradient-to-b from-[color:var(--color-surface)] via-[#f1f3f7] to-[#e8ecf2]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-brand)]/45 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.05)_1px,transparent_0)] [background-size:24px_24px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: footerEase }}
          >
            <div className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-brand)] to-[#d64545] text-[color:var(--color-brand-foreground)] shadow-lg shadow-[color:var(--color-brand)]/25 ring-2 ring-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
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
              <span className="font-[var(--font-display)] text-xl tracking-wide text-[#0b1a33]">
                Decor haven home
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)]">
              Thoughtful decor for everyday living — curated pieces, calm palettes, and finishes that feel as good as they look.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-foreground)] shadow-lg shadow-[color:var(--color-brand)]/25 transition hover:brightness-95"
                >
                  Shop the collection
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/90 px-5 py-2.5 text-sm font-semibold text-[#0b1a33] shadow-sm transition hover:border-black/25 hover:bg-white"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <SocialLink href="https://instagram.com" label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </SocialLink>
              <SocialLink href="https://pinterest.com" label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5-.1-.8-.1-2 0-2.9.2-1.7 1.3-7.2 1.3-7.2s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.6 2 1.7 2 2 0 3.5-2.1 3.5-5.2 0-2.7-1.9-4.6-4.7-4.6-3.2 0-5.1 2.4-5.1 4.9 0 1 .4 2 1 2.6.1.1.1.2.1.3l-.4 1.5c0 .2-.1.2-.3.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.2 6.7-6.2 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.4-1.2l-.6 2.4c-.2 1-1 2.3-1.4 3.1 1.1.3 2.2.5 3.4.5 5.5 0 10-4.5 10-10C22 6.5 17.5 2 12 2z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://facebook.com" label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.9c0-.9.3-1.6 1.7-1.6h1.7V4.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.8H7.5v3.3h2.8V22h3.2z" />
                </svg>
              </SocialLink>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: footerEase, delay: 0.05 }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b1a33]/70">
              Categories
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-[color:var(--color-muted)]">
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    href="/shop"
                    className="inline-block transition-colors hover:text-[color:var(--color-brand)]"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: footerEase, delay: 0.08 }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b1a33]/70">
              Explore
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-[color:var(--color-muted)]">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block transition-colors hover:text-[color:var(--color-brand)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: footerEase, delay: 0.1 }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b1a33]/70">
              Newsletter
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
              Subscribe for styling tips, new arrivals, and 10% off your first order.
            </p>
            <form
              className="mt-4 rounded-2xl border border-black/[0.08] bg-white/90 p-4 shadow-sm shadow-black/[0.04]"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                className="w-full rounded-xl border border-black/[0.08] bg-background px-3.5 py-2.5 text-sm outline-none transition-shadow placeholder:text-foreground/40 focus:ring-2 focus:ring-[color:var(--color-brand)]/35"
                placeholder="you@example.com"
                type="email"
                name="email"
                autoComplete="email"
              />
              <motion.button
                type="submit"
                className="mt-3 w-full rounded-xl bg-[color:var(--color-brand)] py-2.5 text-sm font-semibold text-[color:var(--color-brand-foreground)] shadow-md shadow-[color:var(--color-brand)]/20 transition hover:brightness-95"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Subscribe
              </motion.button>
              <p className="mt-2 text-[11px] leading-snug text-[color:var(--color-muted)]">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#0b1a33]/70">
              Support
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[color:var(--color-muted)]">
              {support.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[color:var(--color-brand)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative border-t border-black/[0.06] bg-black/[0.02]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Decor haven home. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of service
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
