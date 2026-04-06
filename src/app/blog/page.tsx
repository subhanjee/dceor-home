import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { AnimatedGridItem, AnimatedProductGrid } from "@/components/AnimatedProductGrid";

const posts = [
  {
    tag: "Fasion",
    title: "New season modern scarf",
    slug: "new-season-modern-scarf",
  },
  { tag: "Trending", title: "Summer Trending 2023", slug: "summer-trending-2023" },
  { tag: "Lifestyle", title: "Top 10 Curley Hairstyle", slug: "top-10-curley-hairstyle" },
];

export default function BlogIndexPage() {
  return (
    <PageShell title="Blog" subtitle="Template-style blog listing.">
      <AnimatedProductGrid className="grid gap-5 lg:grid-cols-3">
        {posts.map((p) => (
          <AnimatedGridItem key={p.slug}>
            <article className="rounded-3xl border bg-background p-6 transition-shadow hover:shadow-md">
              <div className="text-xs font-semibold tracking-widest text-[color:var(--color-muted)]">
                {p.tag}
              </div>
              <h2 className="mt-2 text-lg font-semibold leading-7">{p.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                Etiam facisis urna dignissim dui quisque in mauris viverra. Nulla
                placerat suscipit integer enim.
              </p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-[color:var(--color-brand)] hover:opacity-80"
              >
                Read More...
              </Link>
            </article>
          </AnimatedGridItem>
        ))}
      </AnimatedProductGrid>
    </PageShell>
  );
}

