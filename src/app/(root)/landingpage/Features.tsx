const features = [
  {
    label: "01",
    title: "Futuristic by default",
    body: "Red / black / white aesthetic, glass panels and motion presets that make any dashboard or landing feel like a sci‑fi control room.",
  },
  {
    label: "02",
    title: "Composable primitives",
    body: "Build your own design system from headless, accessible primitives — or drop in complete sections when you need speed.",
  },
  {
    label: "03",
    title: "DX‑first API",
    body: "Typed props, sensible defaults and Tailwind‑friendly class slots keep your components ergonomic, not fragile.",
  },
];

export default function Features() {
  return (
    <section className="relative border-t border-red-500/20 bg-black/95 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.18),transparent_60%)] opacity-70" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex-1 space-y-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-red-400">
            COMPONENT SYSTEM
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Built to feel like an interface from{" "}
            <span className="bg-gradient-to-r from-red-500 via-red-300 to-white bg-clip-text text-transparent">
              the near future
            </span>
            .
          </h2>
          <p className="max-w-md text-sm text-neutral-300">
            Token‑aware spacing, motion and theming are wired in — so you can focus
            on logic while Ghost UI handles how it feels.
          </p>
        </div>

        <div className="flex-1 space-y-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-r from-neutral-950/90 via-black to-neutral-950/90 px-4 py-4 sm:px-5 sm:py-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(248,113,113,0.55),transparent_55%)]" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-red-500/60 bg-black/80 text-[10px] font-semibold uppercase tracking-[0.24em] text-red-300 shadow-[0_0_18px_rgba(248,113,113,0.7)]">
                  {f.label}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="text-xs text-neutral-300/95">{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


