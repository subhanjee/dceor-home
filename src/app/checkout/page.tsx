import { PageShell } from "@/components/PageShell";

export default function CheckoutPage() {
  return (
    <PageShell
      title="Checkout"
      subtitle="Checkout layout placeholder. We can add address/payment steps next."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border bg-background p-6 lg:col-span-2">
          <div className="text-sm font-semibold">Billing details</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {["First name", "Last name", "Email", "Phone"].map((label) => (
              <label key={label} className="grid gap-2 text-sm">
                <span className="text-[color:var(--color-muted)]">{label}</span>
                <input className="rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40" />
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border bg-background p-6">
          <div className="text-sm font-semibold">Order summary</div>
          <div className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between border-t pt-2 font-semibold text-foreground">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>
          <button className="mt-5 w-full rounded-2xl bg-[color:var(--color-brand)] py-3 text-sm font-semibold text-[color:var(--color-brand-foreground)] hover:opacity-90">
            Place order
          </button>
        </div>
      </div>
    </PageShell>
  );
}

