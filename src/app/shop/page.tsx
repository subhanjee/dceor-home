import { PageShell } from "@/components/PageShell";
import { ProductCard, type Product } from "@/components/ProductCard";

const products: Product[] = [
  { slug: "long-sleeve-tops", title: "Long Sleeve Tops", compareAt: 85.5, price: 70.3 },
  { slug: "white-wedding-shoe", title: "White Wedding Shoe", compareAt: 150.5, price: 120.3 },
  { slug: "long-chain-lockel", title: "Long Chain With Lockel", compareAt: 180.5, price: 150.3 },
  { slug: "winter-jacket", title: "Winter Jacket", compareAt: 100.5, price: 70.3 },
  { slug: "mens-sneakers", title: "Sneakers For Men", price: 50.6, tag: "40% Off" },
  { slug: "womens-sneakers", title: "Sneakers For Women", price: 25.6, tag: "50% Off" },
  { slug: "long-chain-sale", title: "Long Chain With Lockel", compareAt: 85.5, price: 60.3, tag: "Sale" },
  { slug: "winter-jacket-sale", title: "Winter Jacket", compareAt: 100.5, price: 80.3, tag: "Sale" },
];

export default function ShopPage() {
  return (
    <PageShell
      title="Shop"
      subtitle="Browse products with the same card layout and ‘Shop Now’ CTAs."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </PageShell>
  );
}

