import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, ChevronRight, Lock } from "lucide-react";
import SectionLabel, { sectionTitleClass } from "@/components/SectionLabel";
import { REGISTER_URL, VOLUNTEER_URL, WRAP } from "@/lib/site";
import { cn } from "@/lib/utils";

type LineTone = "warn" | "ok" | "note";

interface TerminalLine {
  tag: string;
  tone: LineTone;
  text: string;
}

const lineTagClass: Record<LineTone, string> = {
  warn: "text-primary",
  ok: "text-accent",
  note: "text-muted-foreground",
};

/** Small terminal block that shows what happens when you run a command today. */
const MiniTerminal = ({ command, lines, className }: { command: string; lines: TerminalLine[]; className?: string }) => (
  <div
    className={cn(
      "flex flex-col overflow-x-auto rounded-lg border border-white/[0.08] bg-black px-[18px] py-4 font-mono text-[13px] leading-[1.8]",
      className,
    )}
  >
    <div className="flex items-center gap-2.5 whitespace-nowrap">
      <ChevronRight aria-hidden className="h-[11px] w-[11px] shrink-0 text-primary" strokeWidth={3.2} />
      <span className="text-foreground">{command}</span>
    </div>
    {lines.map((line) => (
      <div key={line.tag} className="flex gap-3">
        <span className={cn("w-[4ch] shrink-0", lineTagClass[line.tone])}>{line.tag}</span>
        <span className={line.tone === "note" ? "text-muted-foreground" : "text-foreground"}>{line.text}</span>
      </div>
    ))}
  </div>
);

const StatusChip = ({ tone, children }: { tone: "soon" | "open"; children: ReactNode }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-[3px] text-xs font-medium leading-normal",
      tone === "open" ? "bg-accent/[0.14] text-accent" : "bg-primary/[0.14] text-primary",
    )}
  >
    <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", tone === "open" ? "bg-accent" : "bg-primary")} />
    <span>{children}</span>
  </span>
);

const cardClass =
  "scroll-mt-24 rounded-xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-[clamp(18px,2.4vw,28px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";

const cardTitleClass = "text-[clamp(24px,2.4vw,30px)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground";

const Involved = () => {
  return (
    <section id="involved" className="border-t border-white/[0.07]">
      <div className={cn(WRAP, "flex flex-col gap-[clamp(36px,4vw,56px)] py-[clamp(72px,9vw,128px)]")}>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
            <SectionLabel index="01">queue</SectionLabel>
            <h2 className={sectionTitleClass}>
              Get involved.
              <span className="block text-subtle">One open, one queued.</span>
            </h2>
          </div>
          <p className="flex-[0_1_380px] text-[17px] leading-[1.6] text-muted-foreground">
            The Call for Volunteers for 2027 is open now, and so are sponsorship enquiries. The Call for Papers isn't
            open yet.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-5">
            {/* Call for Papers: not open yet */}
            <article id="cfp" className={cn(cardClass, "flex flex-col gap-6")}>
              <MiniTerminal
                command="bsides cfp submit"
                lines={[
                  { tag: "warn", tone: "warn", text: "submissions aren't open yet" },
                  { tag: "hint", tone: "note", text: "formats and deadlines land here soon" },
                ]}
              />
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5">
                  <h3 className={cardTitleClass}>Call for Papers</h3>
                  <StatusChip tone="soon">Coming soon</StatusChip>
                </div>
                <p className="text-base leading-[1.6] text-muted-foreground">
                  Research, tooling, war stories, first-time talks. Submissions for 2027 aren't open yet.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-muted-foreground"
                >
                  <Lock aria-hidden className="h-[15px] w-[15px]" strokeWidth={1.5} />
                  <span>Submit a talk</span>
                </button>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-white"
                >
                  <span>Register interest</span>
                  <ArrowUpRight aria-hidden className="h-[15px] w-[15px] text-primary" strokeWidth={2} />
                </a>
              </div>
            </article>

            {/* Call for Volunteers: open */}
            <article id="volunteers" className={cn(cardClass, "flex flex-col gap-6")}>
              <MiniTerminal
                command="bsides crew join"
                lines={[
                  { tag: "ok", tone: "ok", text: "sign-ups are open" },
                  { tag: "next", tone: "note", text: "fill in the volunteer form" },
                ]}
              />
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5">
                  <h3 className={cardTitleClass}>Call for Volunteers</h3>
                  <StatusChip tone="open">Open</StatusChip>
                </div>
                <p className="text-base leading-[1.6] text-muted-foreground">
                  BSides is run by volunteers, start to finish. Sign-ups for the 2027 crew are open now.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={VOLUNTEER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-foreground px-[18px] text-sm font-semibold text-black transition hover:-translate-y-px hover:bg-white"
                >
                  <span>Join the crew</span>
                  <ArrowUpRight aria-hidden className="h-[15px] w-[15px]" strokeWidth={2} />
                </a>
                <span className="font-mono text-xs text-muted-foreground">opens the volunteer form</span>
              </div>
            </article>
          </div>

          {/* Sponsorship: open */}
          <div id="sponsors" className={cn(cardClass, "flex flex-wrap items-center gap-x-10 gap-y-6")}>
            <div className="flex min-w-0 flex-[1_1_340px] flex-col items-start gap-3">
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5">
                <h3 className={cardTitleClass}>Sponsor 2027</h3>
                <StatusChip tone="open">Open</StatusChip>
              </div>
              <p className="max-w-[440px] text-base leading-[1.6] text-muted-foreground">
                Interested in sponsoring BSides Sri Lanka 2027? Enquiries are open now.
              </p>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/[0.14] bg-white/[0.03] px-4 text-sm font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/[0.07]"
              >
                <span>Become a sponsor</span>
                <ArrowRight aria-hidden className="h-[15px] w-[15px]" strokeWidth={2} />
              </a>
            </div>
            <MiniTerminal
              className="min-w-0 flex-[1_1_340px]"
              command="bsides sponsor --year 2027"
              lines={[
                { tag: "ok", tone: "ok", text: "enquiries are open" },
                { tag: "next", tone: "note", text: "tell us about your company" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Involved;
