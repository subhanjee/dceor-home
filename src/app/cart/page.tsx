import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function CartPage() {
  return (
    <PageShell
      title="Cart"
      subtitle="Placeholder cart UI. Next step: wire this to real cart state."
    >
      <div className="rounded-3xl border bg-background p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold">Your cart is empty</div>
            <div className="mt-1 text-sm text-[color:var(--color-muted)]">
              Add products from the shop to see them here.
            </div>
          </div>
          <Link
            href="/shop"
            className="rounded-full bg-[color:var(--color-brand)] px-5 py-2 text-sm font-medium text-[color:var(--color-brand-foreground)] hover:opacity-90"
          >
            Go to shop
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

