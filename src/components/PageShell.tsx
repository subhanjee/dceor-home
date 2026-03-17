import Link from "next/link";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-3">
        <div className="text-sm text-[color:var(--color-muted)]">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          <span className="opacity-60">/</span> {title}
        </div>
        <h1 className="font-[var(--font-display)] text-3xl tracking-wide">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-2xl text-sm leading-6 text-[color:var(--color-muted)]">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="mt-8">{children}</div>
    </main>
  );
}

