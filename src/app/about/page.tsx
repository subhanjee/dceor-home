import { PageShell } from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      subtitle="About page placeholder. Add your real brand story here."
    >
      <div className="rounded-3xl border bg-background p-6 text-sm leading-7 text-[color:var(--color-muted)]">
        Decor haven home is a modern home decor storefront theme, rebuilt in
        Next.js + Tailwind with the same section hierarchy and feel as the
        original template. Replace this copy with your real business details.
      </div>
    </PageShell>
  );
}

