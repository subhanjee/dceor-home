"use client";

import { useMemo, useState } from "react";
import { Product, ProductCard } from "@/components/ProductCard";

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
    <section className="mt-16">
      <div className="text-center">
        <h2 className="font-[var(--font-display)] text-3xl tracking-wide text-[#0b1a33]">
          Popular Products
        </h2>
        <p className="mt-2 text-sm text-[#6b7280]">
          Here is our new arraival products that you may like.
        </p>
        <div className="mx-auto mt-4 h-0.5 w-16 bg-[color:var(--color-brand)]" />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-7 text-sm">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={[
                "relative pb-1 text-sm transition",
                isActive
                  ? "text-[color:var(--color-brand)]"
                  : "text-foreground/70 hover:text-foreground",
              ].join(" ")}
            >
              {t}
              <span
                className={[
                  "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[color:var(--color-brand)] transition",
                  isActive ? "scale-x-100" : "",
                ].join(" ")}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}

