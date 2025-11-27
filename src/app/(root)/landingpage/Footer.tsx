export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/95">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-[11px] text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_14px_rgba(248,113,113,0.9)]" />
          <span>Design system stable · Components versioned</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="uppercase tracking-[0.26em]">
            © {new Date().getFullYear()} Ghost UI
          </span>
          <span className="hidden h-px w-8 bg-neutral-800 sm:block" />
          <span className="uppercase tracking-[0.26em] text-neutral-400">
            Crafted for builders of the future
          </span>
        </div>
      </div>
    </footer>
  );
}


