"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Product, ProductCard } from "@/components/ProductCard";
import { AnimatedGridItem, AnimatedProductGrid } from "@/components/AnimatedProductGrid";

const allProducts: Record<string, Product[]> = {
  "All Products": [
    { slug: "decorative-vase", title: "Decorative Vase", compareAt: 85.5, price: 70.3 },
    { slug: "table-lamp", title: "Table Lamp", compareAt: 150.5, price: 120.3 },
    { slug: "throw-pillow", title: "Throw Pillow Set", compareAt: 180.5, price: 150.3 },
    { slug: "wall-art", title: "Wall Art", compareAt: 100.5, price: 70.3 },
  ],
  "Living Room": [
    { slug: "sofa-cushion", title: "Sofa Cushion", price: 50.6, tag: "30% Off" },
    { slug: "coffee-table", title: "Coffee Table", compareAt: 100.5, price: 80.3 },
    { slug: "floor-lamp", title: "Floor Lamp", compareAt: 85.5, price: 70.3 },
    { slug: "wall-shelf", title: "Wall Shelf", compareAt: 150.5, price: 130.3 },
  ],
  "Bedroom": [
    { slug: "bedside-lamp", title: "Bedside Lamp", price: 25.6, tag: "25% Off" },
    { slug: "bedding-set", title: "Bedding Set", compareAt: 120.5, price: 100.3 },
    { slug: "nightstand", title: "Nightstand", compareAt: 100.5, price: 70.3 },
    { slug: "curtains", title: "Curtains", compareAt: 85.5, price: 70.3 },
  ],
  "Kitchen": [
    { slug: "kitchen-utensils", title: "Kitchen Utensils Set", compareAt: 40, price: 29.9 },
    { slug: "dining-table", title: "Dining Table", compareAt: 55, price: 39.9 },
    { slug: "bar-stools", title: "Bar Stools", compareAt: 75, price: 59.9 },
    { slug: "kitchen-decor", title: "Kitchen Decor", compareAt: 25, price: 16.9 },
  ],
  "Sales": [
    { slug: "vase-sale", title: "Decorative Vase", compareAt: 100.5, price: 80.3, tag: "Sale" },
    { slug: "lamp-sale", title: "Table Lamp", compareAt: 85.5, price: 60.3, tag: "Sale" },
    { slug: "pillow-sale", title: "Throw Pillow", compareAt: 150.5, price: 120.3, tag: "Sale" },
    { slug: "art-sale", title: "Wall Art", compareAt: 85.5, price: 70.3, tag: "Sale" },
  ],
  "Offers": [
    { slug: "bundle-offer", title: "Decor Bundle", compareAt: 99, price: 69, tag: "Offer" },
    { slug: "season-offer", title: "Season Special", compareAt: 120, price: 89, tag: "Offer" },
    { slug: "new-arrival-offer", title: "New Arrival Offer", compareAt: 75, price: 55, tag: "Offer" },
    { slug: "member-offer", title: "Member Exclusive", compareAt: 60, price: 45, tag: "Offer" },
  ],
};

export function PopularProducts() {
  const tabs = useMemo(() => Object.keys(allProducts), []);
  const [active, setActive] = useState(tabs[0] ?? "All Products");

  const products = allProducts[active] ?? allProducts["All Products"];

  return (
    <motion.section
      className="mt-16"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="text-center">
        <motion.h2
          className="font-[var(--font-display)] text-3xl tracking-wide text-[#0b1a33]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Popular Products
        </motion.h2>
        <motion.p
          className="mt-2 text-sm text-[#6b7280]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          Here is our new arraival products that you may like.
        </motion.p>
        <motion.div
          className="mx-auto mt-4 h-0.5 w-16 bg-[color:var(--color-brand)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-7 text-sm">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <motion.button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={[
                "relative pb-1 text-sm transition-colors",
                isActive
                  ? "text-[color:var(--color-brand)]"
                  : "text-foreground/70 hover:text-foreground",
              ].join(" ")}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {t}
              <span
                className={[
                  "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left bg-[color:var(--color-brand)] transition-transform duration-200",
                  isActive ? "scale-x-100" : "scale-x-0",
                ].join(" ")}
              />
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <AnimatedProductGrid className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <AnimatedGridItem key={p.slug}>
                <ProductCard product={p} />
              </AnimatedGridItem>
            ))}
          </AnimatedProductGrid>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
