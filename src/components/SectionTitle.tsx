"use client";

import { motion } from "framer-motion";

export function SectionTitle({
  title,
  subtitle,
  tone = "dark",
}: {
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div className="text-center">
      <motion.h2
        className={[
          "font-[var(--font-display)] text-3xl tracking-wide",
          isDark ? "text-[#0b1a33]" : "text-white",
        ].join(" ")}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className={["mt-2 text-sm", isDark ? "text-[#6b7280]" : "text-white/60"].join(" ")}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
      <motion.div
        className="mx-auto mt-4 h-0.5 w-16 bg-[color:var(--color-brand)]"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.12 }}
        style={{ transformOrigin: "50% 50%" }}
      />
    </div>
  );
}
