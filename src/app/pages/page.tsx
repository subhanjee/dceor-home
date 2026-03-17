import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const links: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Cart", href: "/cart" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Checkout", href: "/checkout" },
  { label: "Product (example)", href: "/product/white-wedding-shoe" },
  { label: "Order", href: "/order" },
  { label: "Login", href: "/login" },
  { label: "404 (not-found)", href: "/does-not-exist" },
];

export default function PagesHub() {
  return (
    <PageShell
      title="Pages"
      subtitle="A quick hub to match the template’s Pages dropdown."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-2xl border bg-background px-5 py-4 text-sm hover:bg-[color:var(--color-surface)]"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

