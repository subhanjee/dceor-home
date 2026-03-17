"use client";

import Link from "next/link";
import { ProductCard, type Product } from "@/components/ProductCard";
import { PopularProducts } from "@/components/PopularProducts";
 
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HomeHero } from "@/components/HomeHero";

export default function Home() {
  const newArrival: Product[] = [
    { slug: "decorative-vase", title: "Decorative Vase", compareAt: 85.5, price: 70.3 },
    { slug: "table-lamp", title: "Table Lamp", compareAt: 150.2, price: 120.5 },
    { slug: "throw-pillow", title: "Throw Pillow Set", compareAt: 85.5, price: 70.3 },
    { slug: "wall-art", title: "Wall Art", compareAt: 100.5, price: 80.3 },
  ];

  const bestSeller: Product[] = [
    { slug: "vase-best", title: "Decorative Vase", compareAt: 850.5, price: 70.3, tag: "Best" },
    { slug: "lamp-best", title: "Table Lamp", compareAt: 150.5, price: 120.3, tag: "Best" },
    { slug: "pillow-best", title: "Throw Pillow Set", compareAt: 85.5, price: 60.3, tag: "Best" },
    { slug: "art-best", title: "Wall Art", compareAt: 100.5, price: 80.3, tag: "Best" },
  ];

  return (
    <main>
      <HomeHero />

      <div className="mx-auto max-w-6xl px-4">

      {/* New Arrival */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionTitle
            title="New Arraival"
            subtitle="Here is our new arraival products that you may like."
          />

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {newArrival.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </motion.section>

      {/* Fashion highlight block (template had 'fasion' section) */}
        <motion.section
          className="mt-16 overflow-hidden bg-[#f6f6f6]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-10">
            <div>
              <div className="font-[var(--font-display)] text-4xl tracking-wide text-[#0b1a33]">
                Stylish home decor
                <br />
                vase & lamp collection
              </div>
              <p className="mt-4 text-sm tracking-[0.35em] text-[#9ca3af]">
                Beautiful, Elegant and Modern
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-flex text-sm font-semibold text-[color:var(--color-brand)] underline underline-offset-4"
              >
                Shop Now
              </Link>
            </div>
            <div className="relative min-h-64 overflow-hidden bg-white">
              <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.10)_1px,transparent_0)] [background-size:22px_22px]" />
            </div>
          </div>
        </motion.section>

      {/* Popular products with tabs */}
        <PopularProducts />

      {/* Lookbook + Winter sale */}
      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden bg-[#f6f6f6] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.20)_1px,transparent_0)] [background-size:26px_26px]" />
          <div className="relative p-8">
            <div className="text-xs font-semibold tracking-widest text-[#6b7280]">
              LOOKBOOK 2024
            </div>
            <div className="mt-2 font-[var(--font-display)] text-3xl tracking-wide text-[#0b1a33]">
              Best home decor brand in the world
            </div>
            <div className="mt-6">
              <Link
                href="/shop"
                className="inline-flex h-11 items-center justify-center border border-black/15 bg-white/70 px-6 text-sm font-semibold text-[#0b1a33] hover:bg-white"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#f6f6f6] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(240,86,86,0.22),transparent_60%)]" />
          <div className="relative p-8">
            <div className="text-xs font-semibold tracking-widest text-[#6b7280]">
              WINTER SALE
            </div>
            <div className="mt-2 font-[var(--font-display)] text-3xl tracking-wide text-[#0b1a33]">
              UP TO 70% OFF
            </div>
            <div className="mt-6">
              <Link
                href="/shop"
                className="inline-flex h-11 items-center justify-center bg-[color:var(--color-brand)] px-7 text-sm font-semibold text-[color:var(--color-brand-foreground)] hover:brightness-95"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Seller */}
      <section className="mt-14">
        <SectionTitle
          title="Best Seller"
          subtitle="Top sale in this week and this season."
        />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {bestSeller.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="mt-14 pb-10">
        <SectionTitle
          title="Latest News"
          subtitle="Here is our top newses for your home decor guide."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              tag: "Decor",
              title: "Modern home styling trends",
              href: "/blog/modern-home-styling-trends",
            },
            {
              tag: "Trending",
              title: "Cozy living room ideas",
              href: "/blog/cozy-living-room-ideas",
            },
            {
              tag: "Lifestyle",
              title: "Top 10 bedroom decor tips",
              href: "/blog/top-10-bedroom-decor-tips",
            },
          ].map((post) => (
            <article
              key={post.href}
              className="bg-[#f6f6f6] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
            >
              <div className="text-xs font-semibold tracking-widest text-[#6b7280]">
                {post.tag}
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-7 text-[#0b1a33]">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                Etiam facisis urna dignissim dui quisque in mauris viverra.
                Nulla placerat suscipit integer enim.
              </p>
              <Link
                href={post.href}
                className="mt-5 inline-flex text-sm font-semibold text-[color:var(--color-brand)] hover:opacity-80"
              >
                Read More...
              </Link>
            </article>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
