import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <PageShell
      title="Product"
      subtitle="This is a placeholder product detail page. Replace with real data fetching later."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden rounded-3xl border bg-[color:var(--color-surface)]">
          <div className="h-full w-full opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.18)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>

        <div>
          <div className="text-xs font-semibold tracking-widest text-[color:var(--color-muted)]">
            DECOR HAVEN HOME
          </div>
          <h2 className="mt-2 font-[var(--font-display)] text-3xl tracking-wide">
            {decodeURIComponent(slug).replaceAll("-", " ")}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            ultrices lectus lobortis, dolor et tempus porta.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-[color:var(--color-brand)] px-6 py-2.5 text-sm font-medium text-[color:var(--color-brand-foreground)] hover:opacity-90">
              Add to cart
            </button>
            <Link
              href="/cart"
              className="rounded-full border px-6 py-2.5 text-sm hover:bg-[color:var(--color-surface)]"
            >
              View cart
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border bg-background p-5">
            <div className="text-sm font-semibold">Share with :</div>
            <div className="mt-3 flex gap-2 text-sm text-[color:var(--color-muted)]">
              <span className="rounded-full border px-3 py-1">Facebook</span>
              <span className="rounded-full border px-3 py-1">X</span>
              <span className="rounded-full border px-3 py-1">Pinterest</span>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

