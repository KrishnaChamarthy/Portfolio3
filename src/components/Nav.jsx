import { Terminal } from "lucide-react";
import { navTabs, site } from "../constants";

function Nav() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
      <a
        className="flex items-center gap-2 text-sm font-semibold"
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        <Terminal size={18} />
        {site.brand}
      </a>
      <div className="hidden items-center gap-1 rounded-lg border border-ink/10 bg-white/70 p-1 shadow-sm sm:flex">
        {navTabs.map((tab) => (
          <a
            className="rounded-md px-3 py-2 text-xs font-semibold text-ink/65 transition hover:bg-paper hover:text-ink"
            href={`#${tab.split(".")[0]}`}
            target="_blank"
            rel="noreferrer"
            key={tab}
          >
            {tab}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
