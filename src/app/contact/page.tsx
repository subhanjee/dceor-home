import { PageShell } from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Contact page placeholder (matches the template navigation)."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border bg-background p-6">
          <div className="text-sm font-semibold">Send a message</div>
          <form className="mt-4 grid gap-3">
            <label className="grid gap-2 text-sm">
              <span className="text-[color:var(--color-muted)]">Name</span>
              <input className="rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40" />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-[color:var(--color-muted)]">Email</span>
              <input
                type="email"
                autoComplete="email"
                className="rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-[color:var(--color-muted)]">Message</span>
              <textarea className="min-h-28 rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40" />
            </label>
            <button
              type="button"
              className="mt-1 rounded-2xl bg-[color:var(--color-brand)] py-3 text-sm font-semibold text-[color:var(--color-brand-foreground)] hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="rounded-3xl border bg-[color:var(--color-surface)] p-6">
          <div className="text-sm font-semibold">Store info</div>
          <div className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
            <div>Decor haven home</div>
            <div>support@decorhavenhome.example</div>
            <div>Mon–Fri, 9am–6pm</div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

