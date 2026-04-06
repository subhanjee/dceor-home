"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office", "Outdoor"];

const footerEase = [0.25, 0.1, 0.25, 1] as const;

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-[color:var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: footerEase }}
        >
          <div className="font-[var(--font-display)] text-lg tracking-wide">
            Decor haven home
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--color-muted)]">
            A clean, modern storefront theme inspired by the Pengu ecommerce
            layout. Swap in your real products, images, and copy when ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/shop"
                className="inline-block rounded-full bg-[color:var(--color-brand)] px-4 py-2 text-sm text-[color:var(--color-brand-foreground)] hover:opacity-90"
              >
                Shop Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full border px-4 py-2 text-sm hover:bg-white/60"
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: footerEase, delay: 0.06 }}
        >
          <div className="text-sm font-semibold">Categories</div>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
            {categories.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <Link href="/shop" className="transition-colors hover:text-foreground">
                  {c}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: footerEase, delay: 0.1 }}
        >
          <div className="text-sm font-semibold">Newsletter</div>
          <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
            Subscribe and get 10% off your first purchase.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[color:var(--color-brand)]/40"
              placeholder="Email address"
              type="email"
              name="email"
              autoComplete="email"
            />
            <motion.button
              type="button"
              className="shrink-0 rounded-lg bg-[color:var(--color-brand)] px-4 py-2 text-sm text-[color:var(--color-brand-foreground)] hover:opacity-90"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="border-t"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-[color:var(--color-muted)] md:flex-row md:items-center md:justify-between">
          <div>Copyright © {new Date().getFullYear()} Decor haven home.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
