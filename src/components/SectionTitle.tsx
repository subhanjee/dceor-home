export function SectionTitle({
  title,
  subtitle,
  tone = "dark",
}: {
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div className="text-center">
      <h2
        className={[
          "font-[var(--font-display)] text-3xl tracking-wide",
          isDark ? "text-[#0b1a33]" : "text-white",
        ].join(" ")}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={["mt-2 text-sm", isDark ? "text-[#6b7280]" : "text-white/60"].join(" ")}>
          {subtitle}
        </p>
      ) : null}
      <div className="mx-auto mt-4 h-0.5 w-16 bg-[color:var(--color-brand)]" />
    </div>
  );
}

