import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-red-500/30 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-lg border border-red-500/60 bg-gradient-to-br from-red-600 via-red-500 to-white shadow-[0_0_25px_rgba(239,68,68,0.7)]">
            <div className="absolute inset-[3px] rounded-[0.6rem] bg-black" />
            <div className="relative flex h-full w-full items-center justify-center text-xs font-semibold tracking-[0.18em] text-red-400">
              UI
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
              GHOST UI
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-xs font-medium tracking-[0.25em] text-neutral-400 sm:flex">
          <button className="relative uppercase transition hover:text-white">
            <Link href="/components">
              <span className="relative z-10">Components</span>
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 transition group-hover/navbar:opacity-100" />
            </Link>
          </button>
          <button className="relative uppercase transition hover:text-white">
            <Link href="/docs">
              <span className="relative z-10">Docs</span>
            </Link>
          </button>
        </nav>
      </div>
    </header>
  );
}


