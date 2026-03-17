import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function LoginPage() {
  return (
    <PageShell
      title="Login"
      subtitle="Login placeholder. Next step: add real authentication."
    >
      <div className="mx-auto max-w-md rounded-3xl border bg-background p-6">
        <form className="grid gap-4">
          <label className="grid gap-2 text-sm">
            <span className="text-[color:var(--color-muted)]">Email</span>
            <input
              type="email"
              autoComplete="email"
              className="rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40"
            />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-[color:var(--color-muted)]">Password</span>
            <input
              type="password"
              autoComplete="current-password"
              className="rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]/40"
            />
          </label>
          <button
            type="button"
            className="mt-1 rounded-2xl bg-[color:var(--color-brand)] py-3 text-sm font-semibold text-[color:var(--color-brand-foreground)] hover:opacity-90"
          >
            Sign in
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-[color:var(--color-muted)]">
          <Link href="/contact" className="hover:text-foreground">
            Need help?
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

