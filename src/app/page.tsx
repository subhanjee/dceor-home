"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProductCard, type Product } from "@/components/ProductCard";
import { PopularProducts } from "@/components/PopularProducts";
import { SectionTitle } from "@/components/SectionTitle";
import { HomeHero } from "@/components/HomeHero";
import {
  AnimatedGridItem,
  AnimatedProductGrid,
  FadeInWhenVisible,
} from "@/components/AnimatedProductGrid";
import { getDecorImageByKey } from "@/lib/decorImages";

const sectionEase = [0.25, 0.1, 0.25, 1] as const;

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

          <AnimatedProductGrid className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {newArrival.map((p) => (
              <AnimatedGridItem key={p.slug}>
                <ProductCard product={p} />
              </AnimatedGridItem>
            ))}
          </AnimatedProductGrid>
        </motion.section>

        <motion.section
          className="mt-16 overflow-hidden bg-[#f6f6f6]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-10">
            <FadeInWhenVisible>
              <div className="font-[var(--font-display)] text-4xl tracking-wide text-[#0b1a33]">
                Stylish home decor
                <br />
                vase & lamp collection
              </div>
              <p className="mt-4 text-sm tracking-[0.35em] text-[#9ca3af]">
                Beautiful, Elegant and Modern
              </p>
              <motion.div className="mt-6" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                <Link
                  href="/shop"
                  className="inline-flex text-sm font-semibold text-[color:var(--color-brand)] underline underline-offset-4"
                >
                  Shop Now
                </Link>
              </motion.div>
            </FadeInWhenVisible>
            <motion.div
              className="relative min-h-64 overflow-hidden bg-white"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: sectionEase }}
            >
              <Image
                src={getDecorImageByKey("home-highlight")}
                alt="Stylish home decor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </div>
        </motion.section>

        <PopularProducts />

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            className="relative overflow-hidden bg-[#f6f6f6] shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: sectionEase }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <Image
              src={getDecorImageByKey("lookbook-banner")}
              alt="Lookbook decor setup"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#f6f6f6]/75" />
            <div className="relative p-8">
              <div className="text-xs font-semibold tracking-widest text-[#6b7280]">
                LOOKBOOK 2024
              </div>
              <div className="mt-2 font-[var(--font-display)] text-3xl tracking-wide text-[#0b1a33]">
                Best home decor brand in the world
              </div>
              <div className="mt-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/shop"
                    className="inline-flex h-11 items-center justify-center border border-black/15 bg-white/70 px-6 text-sm font-semibold text-[#0b1a33] hover:bg-white"
                  >
                    View Collection
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden bg-[#f6f6f6] shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: sectionEase, delay: 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
          >
            <Image
              src={getDecorImageByKey("winter-sale-banner")}
              alt="Winter sale decor display"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(240,86,86,0.32),rgba(255,255,255,0.72)_70%)]" />
            <div className="relative p-8">
              <div className="text-xs font-semibold tracking-widest text-[#6b7280]">
                WINTER SALE
              </div>
              <div className="mt-2 font-[var(--font-display)] text-3xl tracking-wide text-[#0b1a33]">
                UP TO 70% OFF
              </div>
              <div className="mt-6">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/shop"
                    className="inline-flex h-11 items-center justify-center bg-[color:var(--color-brand)] px-7 text-sm font-semibold text-[color:var(--color-brand-foreground)] hover:brightness-95"
                  >
                    Shop Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          className="mt-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionTitle
            title="Best Seller"
            subtitle="Top sale in this week and this season."
          />

          <AnimatedProductGrid className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {bestSeller.map((p) => (
              <AnimatedGridItem key={p.slug}>
                <ProductCard product={p} />
              </AnimatedGridItem>
            ))}
          </AnimatedProductGrid>
        </motion.section>

        <motion.section
          className="mt-14 pb-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionTitle
            title="Latest News"
            subtitle="Here is our top newses for your home decor guide."
          />

          <motion.div
            className="mt-10 grid gap-6 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {[
              {
                tag: "Decor",
                title: "Modern home styling trends",
                href: "/blog/modern-home-styling-trends",
                image: getDecorImageByKey("blog-modern-home-styling-trends"),
              },
              {
                tag: "Trending",
                title: "Cozy living room ideas",
                href: "/blog/cozy-living-room-ideas",
                image: getDecorImageByKey("blog-cozy-living-room-ideas"),
              },
              {
                tag: "Lifestyle",
                title: "Top 10 bedroom decor tips",
                href: "/blog/top-10-bedroom-decor-tips",
                image: getDecorImageByKey("blog-top-10-bedroom-decor-tips"),
              },
            ].map((post) => (
              <motion.article
                key={post.href}
                className="bg-[#f6f6f6] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.48, ease: sectionEase },
                  },
                }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                <div className="relative mb-4 aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
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
                <motion.div className="mt-5 inline-block" whileHover={{ x: 3 }}>
                  <Link
                    href={post.href}
                    className="inline-flex text-sm font-semibold text-[color:var(--color-brand)] hover:opacity-80"
                  >
                    Read More...
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
