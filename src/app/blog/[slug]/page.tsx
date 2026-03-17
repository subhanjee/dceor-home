import { PageShell } from "@/components/PageShell";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = decodeURIComponent(slug).replaceAll("-", " ");

  return (
    <PageShell title={title} subtitle="Placeholder blog post detail page.">
      <div className="prose max-w-none">
        <div className="rounded-3xl border bg-[color:var(--color-surface)] p-8">
          <p className="text-sm text-[color:var(--color-muted)]">
            By Decor haven home · {new Date().toLocaleDateString()}
          </p>
          <h2 className="mt-2 font-[var(--font-display)] text-3xl tracking-wide">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
            Etiam facisis urna dignissim dui quisque in mauris viverra. Nulla
            placerat suscipit integer enim. Replace this content with your real
            blog CMS or markdown posts.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

