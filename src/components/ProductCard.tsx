"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getDecorImageByKey } from "@/lib/decorImages";

export type Product = {
  slug: string;
  title: string;
  price: number;
  compareAt?: number;
  tag?: string;
  image?: string;
};

function formatUSD(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function ProductCard({ product }: { product: Product }) {
  const img = product.image ?? getDecorImageByKey(product.slug);
  return (
    <motion.div
      className="group"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-[#f3f3f3]">
        {product.tag ? (
          <div className="absolute left-4 top-4 z-10 rounded border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold">
            {product.tag}
          </div>
        ) : null}

        <motion.button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-foreground/60 shadow-sm hover:text-[color:var(--color-brand)]"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s-7-4.4-9.3-8.6C.9 8.7 3.3 6 6.2 6c1.7 0 3.1.8 3.8 2 0 0 .8-2 4-2 2.9 0 5.3 2.7 3.5 6.4C19 16.6 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        <Image
          src={img}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 320px"
        />
        <div className="pointer-events-none absolute inset-0 ring-0 ring-black/10 transition group-hover:ring-1" />
      </div>

      <div className="mt-4 text-center">
        <Link
          href={`/product/${product.slug}`}
          className="text-base font-semibold tracking-wide text-foreground hover:text-[color:var(--color-brand)]"
        >
          {product.title}
        </Link>
        <div className="mt-2 text-sm">
          {product.compareAt ? (
            <>
              <span className="mr-3 text-foreground/60 line-through">
                {formatUSD(product.compareAt)}
              </span>
              <span className="font-semibold text-[color:var(--color-brand)]">
                {formatUSD(product.price)}
              </span>
            </>
          ) : (
            <span className="font-semibold text-[color:var(--color-brand)]">
              {formatUSD(product.price)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
