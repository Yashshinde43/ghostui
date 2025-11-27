import AIInput_01 from "@/components/ghostui/ai-input/ai-input-01";
import AIInput_02 from "@/components/ghostui/ai-input/ai-input-02";
import AIInput_03 from "@/components/ghostui/ai-input/ai-input-03";

export default function AIDemo() {
  return (
    <section className="relative border-y border-red-500/25 bg-gradient-to-b from-black via-neutral-950 to-black py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,113,113,0.25),transparent_55%)] opacity-80" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-red-400">
              LIVE PLAYGROUND
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Preview your{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-300 to-white bg-clip-text text-transparent">
                production UI
              </span>{" "}
              as you build.
            </h2>
            <p className="max-w-md text-sm text-neutral-300">
              These AI input panels are real Ghost UI components — wired with motion,
              focus states and theming, ready to drop into any Next.js project.
            </p>
            <div className="mt-4 space-y-1 text-[10px] font-mono text-neutral-400">
              <p>
                &gt; import: <span className="text-red-300">@/components/ghostui/ai-input</span>
              </p>
              <p>
                &gt; compose:{" "}
                <span className="text-red-300">&lt;AIInput_01 /&gt; + layout primitives</span>
              </p>
              <p>
                &gt; ship: <span className="text-emerald-400">futuristic form UX</span>
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="rounded-2xl border border-red-500/40 bg-black/80 p-4 shadow-[0_0_30px_rgba(248,113,113,0.6)] backdrop-blur">
              <AIInput_01 />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-500/30 bg-black/80 p-3 backdrop-blur">
                <AIInput_02 />
              </div>
              <div className="rounded-2xl border border-red-500/30 bg-black/80 p-3 backdrop-blur">
                <AIInput_03 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


