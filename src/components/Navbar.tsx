import { useState } from "react";
import { Menu, X } from "lucide-react";
import bsidesLogo from "@/assets/bsides-sri-lanka-logo.png";
import { REGISTER_URL, WRAP } from "@/lib/site";
import { cn } from "@/lib/utils";

type Tone = "soon" | "open" | "past";

interface NavTag {
  text: string;
  tone: Tone;
}

interface NavItem {
  label: string;
  href: string;
  /** Shown in the desktop nav and the mobile menu. */
  tag?: NavTag;
  /** Shown in the mobile menu only. */
  mobileTag?: NavTag;
}

const navItems: NavItem[] = [
  { label: "Call for Papers", href: "#cfp", tag: { text: "Soon", tone: "soon" } },
  { label: "Call for Volunteers", href: "#volunteers", tag: { text: "Open", tone: "open" } },
  { label: "Sponsors", href: "#sponsors", mobileTag: { text: "Open", tone: "open" } },
  { label: "About", href: "#about" },
  { label: "2025", href: "#archive", mobileTag: { text: "Past event", tone: "past" } },
];

const toneClass: Record<Tone, string> = {
  soon: "bg-primary/[0.14] text-primary",
  open: "bg-accent/[0.14] text-accent",
  past: "bg-white/[0.08] text-muted-foreground",
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 -mb-[72px] h-[72px] shrink-0 border-b border-white/[0.06] bg-black/[0.62] backdrop-blur-[14px]">
      <div className={cn(WRAP, "relative flex h-full items-center justify-between gap-4")}>
        <a href="#top" aria-label="BSides Sri Lanka, home" className="flex shrink-0 items-center">
          <img src={bsidesLogo} alt="BSides Sri Lanka" className="block h-[46px] w-auto" />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 min-[1001px]:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-9 items-center gap-2 whitespace-nowrap rounded-full px-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
            >
              <span>{item.label}</span>
              {item.tag && (
                <span
                  className={cn(
                    "rounded px-1.5 py-px font-mono text-[10px] font-semibold uppercase leading-normal tracking-[0.04em]",
                    toneClass[item.tag.tone],
                  )}
                >
                  {item.tag.text}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center justify-center whitespace-nowrap rounded-lg bg-foreground px-4 text-sm font-semibold text-black transition hover:-translate-y-px hover:bg-white min-[561px]:inline-flex"
          >
            Register interest
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-foreground min-[1001px]:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-t border-b-border border-t-white/[0.06] bg-black min-[1001px]:hidden"
        >
          <div className={cn(WRAP, "flex flex-col pb-6 pt-2")}>
            <span className="pb-1 pt-3 font-mono text-xs text-muted-foreground">~/bsides-lk $ ls</span>
            {navItems.map((item) => {
              const tag = item.tag ?? item.mobileTag;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-[54px] items-center justify-between gap-3 border-b border-white/[0.08] text-[17px] font-medium text-foreground"
                >
                  <span>{item.label}</span>
                  {tag && (
                    <span
                      className={cn(
                        "rounded px-[7px] py-0.5 font-mono text-[11px] font-semibold uppercase leading-normal tracking-[0.04em]",
                        toneClass[tag.tone],
                      )}
                    >
                      {tag.text}
                    </span>
                  )}
                </a>
              );
            })}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex min-h-[50px] items-center justify-center rounded-lg bg-foreground px-5 text-base font-semibold text-black transition-colors hover:bg-white"
            >
              Register interest
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
