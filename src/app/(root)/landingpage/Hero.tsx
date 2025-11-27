import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-neutral-950 pt-20">
      {/* Glow grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(239,68,68,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(239,68,68,0.16)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-14 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-8">
        {/* Left column: copy */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-red-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
            Futuristic React UI Library
          </div>

          <div className="space-y-5">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Ship{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
                cinematic interfaces
              </span>{" "}
              with drop‑in components.
            </h1>
            <p className="max-w-xl text-balance text-sm text-neutral-300 sm:text-base">
              Ghost UI is a modern React component library tuned for AI dashboards,
              admin consoles and landing pages — so your product feels like a cockpit,
              not a template.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-red-500/70 bg-gradient-to-r from-red-600 via-red-500 to-red-400 px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-black shadow-[0_0_35px_rgba(248,113,113,0.8)]">
              <Link href='/components'>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(255,255,255,0.9),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
              <span className="relative">Browse Components</span>
              </Link>
            </button>
            <button className="relative inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-black/50 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-neutral-200 backdrop-blur transition hover:border-red-400/60 hover:text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_14px_rgba(248,113,113,0.9)]" />
              Live Playground
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-medium tracking-[0.24em] text-neutral-500 lg:justify-start">
            <span className="text-neutral-300">
              40+ COMPONENTS • 200+ VARIANTS • RED / BLACK / WHITE THEME
            </span>
          </div>
        </div>

        {/* Right column: animated ghost & UI cards */}
        <div className="flex-1">
          <div className="relative mx-auto flex max-w-md items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-6 rounded-[3rem] border border-red-500/40 bg-gradient-to-br from-red-500/15 via-black to-black shadow-[0_0_70px_rgba(248,113,113,0.7)] blur-sm" />

            {/* Floating ghost body */}
            <div className="relative h-64 w-40 animate-[float_6s_ease-in-out_infinite]">
              {/* Ghost silhouette */}
              <div className="absolute inset-x-0 top-2 mx-auto h-44 w-32 rounded-[999px] bg-gradient-to-b from-white via-neutral-100 to-neutral-800/70 shadow-[0_0_45px_rgba(248,250,252,0.7)]">
                {/* Face */}
                <div className="absolute inset-x-0 top-8 flex justify-center gap-5">
                  <span className="h-4 w-4 rounded-full bg-neutral-900 shadow-[0_0_18px_rgba(0,0,0,0.8)]" />
                  <span className="h-4 w-4 rounded-full bg-neutral-900 shadow-[0_0_18px_rgba(0,0,0,0.8)]" />
                </div>
                <div className="absolute inset-x-0 top-16 flex justify-center">
                  <span className="h-5 w-10 rounded-b-full bg-neutral-900/90 shadow-[0_12px_20px_rgba(0,0,0,0.7)]" />
                </div>
                {/* Ghost tail */}
                <div className="absolute inset-x-4 bottom-0 flex justify-between">
                  <span className="h-6 w-6 rounded-t-full bg-neutral-900/80" />
                  <span className="h-8 w-6 rounded-t-full bg-neutral-900/90" />
                  <span className="h-5 w-6 rounded-t-full bg-neutral-900/75" />
                </div>
                {/* Red aura */}
                <div className="pointer-events-none absolute -inset-4 rounded-[999px] border border-red-500/40 bg-[radial-gradient(circle_at_50%_0%,rgba(248,113,113,0.4),transparent_60%)] opacity-70" />
              </div>

              {/* Floating UI cards around the ghost */}
              <div className="pointer-events-none absolute -left-20 top-10 hidden h-20 w-32 -rotate-6 animate-[floatCard_7s_ease-in-out_infinite] rounded-2xl border border-red-500/50 bg-black/80 p-3 shadow-[0_0_30px_rgba(248,113,113,0.6)] sm:block">
                <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-red-300">
                  INPUT
                </div>
                <div className="mt-2 h-8 rounded-lg border border-neutral-800/80 bg-neutral-900/70" />
                <div className="mt-2 h-1.5 w-16 rounded-full bg-gradient-to-r from-red-500 via-red-400 to-white" />
              </div>

              <div className="pointer-events-none absolute -right-20 top-20 hidden h-24 w-32 rotate-3 animate-[floatCard_8s_ease-in-out_infinite_reverse] rounded-2xl border border-red-500/40 bg-black/85 p-3 shadow-[0_0_26px_rgba(248,113,113,0.6)] sm:block">
                <div className="flex items-center justify-between text-[9px] text-neutral-400">
                  <span className="font-semibold uppercase tracking-[0.26em]">
                    BUTTON
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
                </div>
                <div className="mt-3 flex gap-2">
                  <span className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-400 text-[9px] font-semibold uppercase tracking-[0.26em] text-black">
                    Primary
                  </span>
                  <span className="inline-flex flex-1 items-center justify-center rounded-full border border-neutral-700 text-[9px] font-medium uppercase tracking-[0.24em] text-neutral-200">
                    Ghost
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-4 left-1/2 w-32 -translate-x-1/2 animate-pulse rounded-full bg-red-500/40 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


