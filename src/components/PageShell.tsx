"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="text-sm text-[color:var(--color-muted)]">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          <span className="opacity-60">/</span> {title}
        </div>
        <h1 className="font-[var(--font-display)] text-3xl tracking-wide">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-2xl text-sm leading-6 text-[color:var(--color-muted)]">
            {subtitle}
          </p>
        ) : null}
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
      >
        {children}
      </motion.div>
    </main>
  );
}
