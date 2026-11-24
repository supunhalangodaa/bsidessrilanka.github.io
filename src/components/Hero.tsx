import type { CSSProperties, ReactNode } from "react";
import { Check, ChevronRight, CornerDownLeft } from "lucide-react";
import { REGISTER_URL, WRAP } from "@/lib/site";
import { cn } from "@/lib/utils";

type PlanState = "done" | "todo" | "soon" | "open";

interface PlanItem {
  label: string;
  status: string;
  state: PlanState;
  /** In-page section this row jumps to. */
  href?: string;
}

/** The 2027 plan shown in the hero terminal. Update statuses here as things lock in. */
const plan: PlanItem[] = [
  { label: "Ship the 2025 edition", status: "done", state: "done", href: "#archive" },
  { label: "Lock the date", status: "TBA", state: "todo" },
  { label: "Lock the venue", status: "Colombo · TBA", state: "todo" },
  { label: "Call for Papers", status: "coming soon", state: "soon", href: "#cfp" },
  { label: "Call for Volunteers", status: "open", state: "open", href: "#volunteers" },
  { label: "Sponsorship enquiries", status: "open", state: "open", href: "#sponsors" },
];

const statusClass: Record<PlanState, string> = {
  done: "text-accent",
  todo: "text-muted-foreground",
  soon: "text-primary",
  open: "text-accent",
};

/** Terminal lines fade in one after another; shown immediately when motion is reduced. */
const LINE = "opacity-0 animate-term-line motion-reduce:animate-none motion-reduce:opacity-100";

const delay = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` });

const Prompt = () => <ChevronRight aria-hidden className="h-3 w-3 shrink-0 text-primary" strokeWidth={3.2} />;

const PlanIcon = ({ state }: { state: PlanState }) => {
  if (state === "done") {
    return <Check aria-hidden className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.6} />;
  }
  if (state === "open") {
    return (
      <span aria-hidden className="flex w-3.5 shrink-0 items-center justify-center">
        <span className="relative block h-2 w-2 rounded-full bg-accent">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent motion-reduce:animate-none" />
        </span>
      </span>
    );
  }
  return (
    <svg
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className="shrink-0 text-subtle"
    >
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
};

const PlanRow = ({ item, style }: { item: PlanItem; style: CSSProperties }) => {
  const rowClass = cn(LINE, "flex flex-wrap items-center gap-x-3 rounded-md px-2.5 py-1");
  const content: ReactNode = (
    <>
      <PlanIcon state={item.state} />
      <span className={cn(item.state === "done" && "text-muted-foreground line-through")}>{item.label}</span>
      <span
        aria-hidden
        className="hidden h-px min-w-5 flex-[1_1_20px] bg-[linear-gradient(90deg,#333333_50%,transparent_50%)] bg-[length:6px_1px] min-[561px]:block"
      />
      <span className={cn("ml-auto", statusClass[item.state])}>{item.status}</span>
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} style={style} className={cn(rowClass, "text-foreground transition-colors hover:bg-white/[0.05]")}>
        {content}
      </a>
    );
  }
  return (
    <div style={style} className={rowClass}>
      {content}
    </div>
  );
};

const AgentTerminal = () => (
  <div className="relative mt-[clamp(40px,5vw,64px)] w-full max-w-[940px]">
    {/* Glow rising from behind the window */}
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-x-[8%] -bottom-[70px] h-[62%] bg-[radial-gradient(ellipse_58%_72%_at_50%_100%,rgba(249,115,22,0.5),rgba(249,115,22,0.14)_46%,transparent_72%)] blur-[28px]"
    />
    <div className="relative overflow-hidden rounded-xl border border-white/[0.11] bg-card text-left shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_120px_rgba(249,115,22,0.1),inset_0_1px_0_rgba(255,255,255,0.06)]">
      {/* Title bar */}
      <div className="flex h-11 items-center gap-3 border-b border-white/[0.08] bg-white/[0.02] px-4">
        <span aria-hidden className="flex shrink-0 gap-[7px]">
          <span className="h-[11px] w-[11px] rounded-full bg-[#333333]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#333333]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#333333]" />
        </span>
        <span className="min-w-0 flex-1 truncate text-center font-mono text-xs text-muted-foreground">
          agent · bsides-lk · plan
        </span>
        <span aria-hidden className="w-[47px] shrink-0" />
      </div>

      {/* Session */}
      <div className="flex flex-col gap-0.5 p-[clamp(18px,2.4vw,28px)] font-mono text-[clamp(12px,1.05vw,14px)] leading-[1.75] text-foreground">
        <div className="flex items-center gap-2.5 whitespace-nowrap">
          <Prompt />
          <span className="inline-block w-0 animate-term-type overflow-hidden whitespace-nowrap align-bottom motion-reduce:w-auto motion-reduce:animate-none">
            bsides plan --year 2027
          </span>
        </div>

        <div style={delay(1.7)} className={cn(LINE, "mt-3.5 flex flex-wrap items-center gap-x-2.5")}>
          <span aria-hidden className="mx-0.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span>read</span>
          <span className="text-muted-foreground">archive/2025.log</span>
        </div>
        <div style={delay(1.95)} className={cn(LINE, "flex gap-2.5 pl-[22px] text-muted-foreground")}>
          <span aria-hidden>└</span>
          <span>350+ attendees · 10+ speakers · 11+ sessions</span>
        </div>

        <div style={delay(2.3)} className={cn(LINE, "mt-2.5 flex items-center gap-2.5")}>
          <span
            aria-hidden
            className="h-2.5 w-2.5 shrink-0 animate-[spin_0.8s_linear_infinite] rounded-full border-2 border-primary border-r-transparent motion-reduce:animate-none"
          />
          <span className="shimmer-text">Planning BSides Sri Lanka 2027</span>
        </div>

        <div className="ml-1.5 mt-1.5 flex flex-col gap-0.5 border-l border-white/10 pl-4">
          {plan.map((item, index) => (
            <PlanRow key={item.label} item={item} style={delay(2.6 + index * 0.2)} />
          ))}
        </div>

        <div aria-hidden style={delay(4)} className={cn(LINE, "mt-3.5 flex min-h-6 items-center gap-2.5")}>
          <Prompt />
          <span className="block h-4 w-2 animate-blink bg-foreground motion-reduce:animate-none" />
        </div>
      </div>

      {/* Status line */}
      <div
        aria-hidden
        className="flex min-h-[30px] items-center justify-between gap-3 overflow-hidden whitespace-nowrap border-t border-white/[0.08] bg-[#050505] px-3 font-mono text-[11px] text-muted-foreground"
      >
        <span className="flex items-center gap-3.5">
          <span className="rounded-[3px] bg-primary px-2 py-px font-bold text-black">bsides-lk</span>
          <span className="text-foreground">0:plan*</span>
          <span>1:cfp</span>
          <span>2:crew</span>
          <span className="hidden min-[561px]:inline">3:sponsors</span>
        </span>
        <span className="hidden min-[561px]:inline">Colombo, LK · UTC+5:30</span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section id="top" className="relative shrink-0 overflow-hidden">
      {/* Dot grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.17)_1px,transparent_1px)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_72%_58%_at_50%_26%,#000000_0%,transparent_76%)]"
      />

      <div
        className={cn(
          WRAP,
          "relative flex flex-col items-center pb-[clamp(72px,9vw,120px)] pt-[clamp(116px,11vw,160px)] text-center",
        )}
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 rounded-full border border-white/10 bg-white/[0.03] py-[5px] pl-[5px] pr-3.5 text-[13px] leading-normal text-muted-foreground">
          <span className="inline-flex items-center gap-[7px] rounded-full bg-primary px-2.5 py-[3px] font-mono text-[11px] font-bold uppercase tracking-[0.04em] text-black">
            <span aria-hidden className="relative block h-1.5 w-1.5 rounded-full bg-black">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-black motion-reduce:animate-none" />
            </span>
            <span>Coming soon</span>
          </span>
          <span>2027 edition in planning</span>
        </div>

        <h1 className="mt-7 text-[clamp(38px,7.2vw,96px)] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground">
          <span className="block">BSides Sri Lanka</span>
          <span className="block text-subtle">
            <span className="text-foreground">2027</span> is loading
            <span
              aria-hidden
              className="ml-[0.1em] inline-block h-[0.78em] w-[0.46em] translate-y-[0.06em] animate-blink bg-primary motion-reduce:animate-none"
            />
          </span>
        </h1>

        <p className="mt-6 max-w-[560px] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-muted-foreground">
          Sri Lanka's community-run security conference is planning its next edition. No date or venue yet. Register
          your interest to hear when they land.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-foreground px-5 text-[15px] font-semibold text-black transition hover:-translate-y-px hover:bg-white"
          >
            <span>Register interest</span>
            <CornerDownLeft aria-hidden className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href="#archive"
            className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-lg border border-white/[0.14] bg-white/[0.03] px-5 text-[15px] font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/[0.07]"
          >
            See the 2025 edition
          </a>
        </div>

        <AgentTerminal />
      </div>
    </section>
  );
};

export default Hero;
