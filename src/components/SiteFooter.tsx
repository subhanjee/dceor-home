import Link from "next/link";

const categories = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office", "Outdoor"];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-[color:var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-[var(--font-display)] text-lg tracking-wide">
            Decor haven home
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--color-muted)]">
            A clean, modern storefront theme inspired by the Pengu ecommerce
            layout. Swap in your real products, images, and copy when ready.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-[color:var(--color-brand)] px-4 py-2 text-sm text-[color:var(--color-brand-foreground)] hover:opacity-90"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="rounded-full border px-4 py-2 text-sm hover:bg-white/60"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Categories</div>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
            {categories.map((c) => (
              <li key={c}>
                <Link href="/shop" className="hover:text-foreground">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Newsletter</div>
          <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
            Subscribe and get 10% off your first purchase.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40"
              placeholder="Email address"
              type="email"
              name="email"
              autoComplete="email"
            />
            <button
              type="button"
              className="rounded-lg bg-[color:var(--color-brand)] px-4 py-2 text-sm text-[color:var(--color-brand-foreground)] hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-[color:var(--color-muted)] md:flex-row md:items-center md:justify-between">
          <div>Copyright © {new Date().getFullYear()} Decor haven home.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

