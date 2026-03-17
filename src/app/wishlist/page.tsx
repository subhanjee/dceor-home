import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function WishlistPage() {
  return (
    <PageShell
      title="Wishlist"
      subtitle="Placeholder wishlist page to match the template navigation."
    >
      <div className="rounded-3xl border bg-background p-6">
        <div className="text-sm text-[color:var(--color-muted)]">
          Your wishlist is empty for now.
        </div>
        <div className="mt-4">
          <Link
            href="/shop"
            className="rounded-full border bg-background px-5 py-2 text-sm hover:bg-[color:var(--color-surface)]"
          >
            Browse products
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

