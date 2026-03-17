"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const styles = ["Modern", "Classic", "Minimalist", "Rustic"];
const materials = [
  { name: "Ceramic", className: "bg-white border-black/10" },
  { name: "Wood", className: "bg-amber-600" },
  { name: "Glass", className: "bg-blue-200" },
  { name: "Metal", className: "bg-gray-400" },
];

export function HomeHero() {
  const [activeStyle, setActiveStyle] = useState("Modern");
  const [activeMaterial, setActiveMaterial] = useState(materials[0]?.name ?? "Ceramic");
  const [slide, setSlide] = useState<0 | 1>(0);

  const activeMaterialDot = useMemo(
    () => materials.find((c) => c.name === activeMaterial) ?? materials[0],
    [activeMaterial],
  );

  const slides = useMemo(
    () => [
      { title: "Elegant Decorative Vase", price: "$85.60", off: "30% Off" as const },
      { title: "Modern Table Lamp", price: "$120.60", off: "25% Off" as const },
    ],
    [],
  );

  // autoplay
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s === 0 ? 1 : 0)), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mt-4">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden bg-[#F2F2F2] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <div className="grid min-h-[500px] items-center gap-10 px-6 py-10 lg:min-h-[950px] lg:grid-cols-2 lg:px-12 lg:py-14 xl:min-h-[1000px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h1 className="font-[var(--font-display)] text-[32px] leading-[1.15] tracking-wide text-[#060530] sm:text-[50px] lg:text-[60px] xl:text-[70px]">
              {slides[slide].title}
            </h1>
          <p className="mt-4 max-w-xl text-[18px] leading-8 text-[#525252]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
            vel, facilisis purus, turpis tincidunt vel. Aliquet egestas in nibh
            mattis.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-[#0b1a33]">Price :</div>
              <div className="mt-2 text-lg font-semibold text-[#0b1a33]">
                {slides[slide].price}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#0b1a33]">Material :</div>
              <div className="mt-2 flex items-center gap-2">
                {materials.map((c) => {
                  const active = c.name === activeMaterial;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      aria-label={c.name}
                      onClick={() => setActiveMaterial(c.name)}
                      className={[
                        "h-5 w-5 rounded-full border transition",
                        c.className,
                        active ? "ring-2 ring-[color:var(--color-brand)]" : "opacity-80",
                      ].join(" ")}
                    />
                  );
                })}
                <span className="ml-2 text-xs text-[#6b7280]">
                  {activeMaterialDot?.name}
                </span>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#0b1a33]">Style :</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {styles.map((s) => {
                  const active = s === activeStyle;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setActiveStyle(s)}
                      className={[
                        "h-9 px-3 rounded border text-sm font-medium transition",
                        active
                          ? "border-[color:var(--color-brand)] bg-white text-[#0b1a33]"
                          : "border-black/10 bg-white/70 text-[#0b1a33] hover:bg-white",
                      ].join(" ")}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="inline-flex h-12 min-w-28 items-center justify-center rounded-[10px] border border-black/15 bg-white/70 px-6 text-sm font-semibold text-[#0b1a33]">
              {slides[slide].off}
            </span>
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-[10px] bg-[color:var(--color-brand)] px-10 text-sm font-semibold text-[color:var(--color-brand-foreground)] shadow-sm transition hover:brightness-95"
            >
              Shop Now
            </Link>
          </div>
            <div className="mt-7 flex items-center gap-2">
              <button
                type="button"
                aria-label="Slide 1"
                onClick={() => setSlide(0)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  slide === 0 ? "bg-[color:var(--color-brand)]" : "bg-black/20",
                ].join(" ")}
              />
              <button
                type="button"
                aria-label="Slide 2"
                onClick={() => setSlide(1)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  slide === 1 ? "bg-[color:var(--color-brand)]" : "bg-black/20",
                ].join(" ")}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="relative lg:static"
        >
          <div className="pointer-events-none absolute -right-10 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[color:var(--color-brand)]/40 lg:right-[-24px] lg:top-[54%] xl:right-[-90px] xl:top-[58%]" />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full border border-[color:var(--color-brand)]/20 lg:right-[-140px]" />
          <div className="relative mx-auto aspect-[4/3] max-w-xl lg:absolute lg:right-[-24px] lg:top-[54%] lg:-translate-y-1/2 xl:right-[-90px] xl:top-[58%]">
            <Image
              src="/hero-vase.svg"
              alt="Hero"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

