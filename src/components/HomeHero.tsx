"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const styles = ["Modern", "Classic", "Minimalist", "Rustic"];
const materials = [
  { name: "Ceramic", className: "bg-white border-black/10" },
  { name: "Wood", className: "bg-amber-600" },
  { name: "Glass", className: "bg-blue-200" },
  { name: "Metal", className: "bg-gray-400" },
];

const slideVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export function HomeHero() {
  const [activeStyle, setActiveStyle] = useState("Modern");
  const [activeMaterial, setActiveMaterial] = useState(materials[0]?.name ?? "Ceramic");
  const [slide, setSlide] = useState<0 | 1>(0);

  const activeMaterialDot = useMemo(
    () => materials.find((c) => c.name === activeMaterial) ?? materials[0],
    [activeMaterial],
  );

  const slides = useMemo(
    () =>
      [
        {
          kicker: "Curated ceramics",
          title: "Elegant Decorative Vase",
          blurb:
            "A sculptural accent with a soft glaze and balanced proportions — perfect for consoles, shelving, and dining styling.",
          price: "$85.60",
          off: "30% off",
          image: "/hero-vase.svg",
          imageClass: "object-contain object-bottom",
          glow: "from-[color:var(--color-brand)]/25 via-transparent to-amber-200/20",
        },
        {
          kicker: "Ambient lighting",
          title: "Modern Table Lamp",
          blurb:
            "Warm, controlled glow and a clean silhouette — designed for quiet evenings, reading nooks, and composed bedside tables.",
          price: "$120.60",
          off: "25% off",
          image: "/hero-model.svg",
          imageClass: "object-contain object-center",
          glow: "from-[color:var(--color-brand)]/30 via-transparent to-slate-300/25",
        },
      ] as const,
    [],
  );

  const s = slides[slide];

  useEffect(() => {
    const t = setInterval(() => setSlide((v) => (v === 0 ? 1 : 0)), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mt-4">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-[#f3f3f5] shadow-[0_24px_80px_rgba(15,23,42,0.18)] ring-1 ring-white/60">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.06)_1px,transparent_0)] [background-size:28px_28px]"
            aria-hidden
          />
          <div
            className={[
              "pointer-events-none absolute -right-1/4 top-0 h-[120%] w-[70%] rounded-full bg-gradient-to-br opacity-90 blur-3xl",
              s.glow,
            ].join(" ")}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[color:var(--color-brand)]/10 blur-3xl"
            aria-hidden
          />

          <div className="relative grid min-h-[520px] items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[min(92vh,880px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-11 lg:py-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slide + 1} of ${slides.length}`}
                className="relative z-10 max-w-xl lg:max-w-none"
                variants={slideVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.div variants={itemVariants}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/75 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0b1a33]/80 shadow-sm shadow-black/5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)] shadow-[0_0_0_4px_rgba(240,86,86,0.2)]" />
                    {s.kicker}
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="mt-5 font-[var(--font-display)] text-[2rem] leading-[1.12] tracking-tight text-[#060530] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.65rem]"
                >
                  <span className="bg-gradient-to-br from-[#060530] via-[#0b1a33] to-[#1e293b] bg-clip-text text-transparent">
                    {s.title}
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="mt-4 max-w-lg text-[17px] leading-relaxed text-[#475569] sm:text-[18px]"
                >
                  {s.blurb}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 grid gap-4 sm:grid-cols-3"
                >
                  <div className="rounded-2xl border border-black/[0.06] bg-white/70 p-4 shadow-sm shadow-black/[0.03] backdrop-blur-sm">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
                      Price
                    </div>
                    <div className="mt-2 text-xl font-semibold tabular-nums text-[#0b1a33]">{s.price}</div>
                  </div>
                  <div className="rounded-2xl border border-black/[0.06] bg-white/70 p-4 shadow-sm shadow-black/[0.03] backdrop-blur-sm">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
                      Material
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      {materials.map((c) => {
                        const active = c.name === activeMaterial;
                        return (
                          <motion.button
                            key={c.name}
                            type="button"
                            aria-label={c.name}
                            onClick={() => setActiveMaterial(c.name)}
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.92 }}
                            className={[
                              "h-5 w-5 rounded-full border shadow-sm transition-shadow",
                              c.className,
                              active
                                ? "ring-2 ring-[color:var(--color-brand)] ring-offset-2 ring-offset-white/80"
                                : "opacity-85 hover:opacity-100",
                            ].join(" ")}
                          />
                        );
                      })}
                      <span className="ml-1 text-xs font-medium text-[#64748b]">{activeMaterialDot?.name}</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/[0.06] bg-white/70 p-4 shadow-sm shadow-black/[0.03] backdrop-blur-sm sm:col-span-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
                      Style
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {styles.map((st) => {
                        const active = st === activeStyle;
                        return (
                          <motion.button
                            key={st}
                            type="button"
                            onClick={() => setActiveStyle(st)}
                            whileTap={{ scale: 0.97 }}
                            className={[
                              "rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors",
                              active
                                ? "border-[color:var(--color-brand)] bg-[color:var(--color-brand)]/10 text-[#0b1a33]"
                                : "border-black/10 bg-white/80 text-[#334155] hover:border-black/15",
                            ].join(" ")}
                          >
                            {st}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-12 items-center rounded-xl border border-[color:var(--color-brand)]/25 bg-[color:var(--color-brand)]/10 px-5 text-sm font-bold tracking-wide text-[#0b1a33]">
                    {s.off}
                  </span>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/shop"
                      className="inline-flex h-12 items-center justify-center rounded-xl bg-[color:var(--color-brand)] px-9 text-sm font-semibold text-[color:var(--color-brand-foreground)] shadow-lg shadow-[color:var(--color-brand)]/25 transition hover:brightness-95"
                    >
                      Shop now
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/shop"
                      className="inline-flex h-12 items-center justify-center rounded-xl border border-[#0b1a33]/15 bg-white/90 px-7 text-sm font-semibold text-[#0b1a33] shadow-sm backdrop-blur-sm transition hover:border-[#0b1a33]/25 hover:bg-white"
                    >
                      View collection
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    {[0, 1].map((i) => {
                      const active = slide === i;
                      return (
                        <motion.button
                          key={i}
                          type="button"
                          aria-label={`Show slide ${i + 1}`}
                          aria-current={active ? "true" : undefined}
                          onClick={() => setSlide(i as 0 | 1)}
                          className={[
                            "h-2 rounded-full",
                            active
                              ? "bg-[color:var(--color-brand)] shadow-[0_0_12px_rgba(240,86,86,0.45)]"
                              : "bg-black/20 hover:bg-black/30",
                          ].join(" ")}
                          animate={{ width: active ? 36 : 10 }}
                          transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        />
                      );
                    })}
                    <span className="ml-2 text-xs font-medium text-[#64748b]">
                      {slide + 1} / {slides.length}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748b]">
                    Free styling tips with every order · Easy 30-day returns
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="relative z-[1] flex min-h-[280px] items-center justify-center lg:min-h-[420px]">
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,520px)] w-[min(100vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--color-brand)]/30 lg:h-[520px] lg:w-[520px]"
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[min(110vw,600px)] w-[min(110vw,600px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--color-brand)]/15 lg:h-[600px] lg:w-[600px]"
                animate={{ rotate: [0, -2, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, scale: 0.94, x: 16 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: -12 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:absolute lg:right-[-5%] lg:top-1/2 lg:aspect-auto lg:h-[min(72vh,560px)] lg:w-[min(48vw,520px)] lg:max-w-none lg:-translate-y-1/2 xl:right-[-8%]"
                >
                  <motion.div
                    className="relative h-full min-h-[240px] w-full lg:min-h-0"
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      priority
                      className={["drop-shadow-[0_28px_60px_rgba(15,23,42,0.2)]", s.imageClass].join(" ")}
                      sizes="(max-width: 1024px) 90vw, 520px"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
