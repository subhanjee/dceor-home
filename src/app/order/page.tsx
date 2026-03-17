import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function OrderPage() {
  return (
    <PageShell
      title="Order"
      subtitle="Order confirmation placeholder (matches the template pages list)."
    >
      <div className="rounded-3xl border bg-background p-6">
        <div className="text-sm font-semibold">Thanks for your order</div>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          When you connect checkout logic, this page can show order ID, items,
          shipping address, and tracking.
        </p>
        <div className="mt-5 flex gap-3">
          <Link
            href="/shop"
            className="rounded-full bg-[color:var(--color-brand)] px-5 py-2 text-sm font-medium text-[color:var(--color-brand-foreground)] hover:opacity-90"
          >
            Continue shopping
          </Link>
          <Link
            href="/"
            className="rounded-full border px-5 py-2 text-sm hover:bg-[color:var(--color-surface)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

