import { ArrowUpRight, ChevronRight, CornerDownLeft } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { REGISTER_URL, WRAP } from "@/lib/site";
import { cn } from "@/lib/utils";

const CTA = () => {
  return (
    <section id="register" className="relative overflow-hidden border-t border-white/[0.07]">
      {/* Glow rising from the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-[radial-gradient(ellipse_46%_78%_at_50%_100%,rgba(249,115,22,0.3),rgba(249,115,22,0.08)_48%,transparent_74%)]"
      />
      {/* Dot grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.11)_1px,transparent_1px)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_60%,#000000_0%,transparent_76%)]"
      />

      <div className={cn(WRAP, "relative flex flex-col items-center gap-5 py-[clamp(80px,10vw,144px)] text-center")}>
        <SectionLabel index="04">subscribe</SectionLabel>
        <h2 className="text-[clamp(36px,6vw,80px)] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground">
          Get on the list.
          <span className="block text-subtle">Hear it first.</span>
        </h2>
        <p className="max-w-[480px] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-muted-foreground">
          Dates and the Call for Papers are on the way. Register your interest now.
        </p>

        {/* The primary action, styled as a command prompt */}
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register your interest"
          className="mt-4 flex min-h-[60px] w-full max-w-[520px] items-center gap-3 rounded-xl border border-white/[0.16] bg-card pl-5 pr-2 font-mono text-[15px] text-foreground shadow-[0_0_0_4px_rgba(255,255,255,0.03),0_0_60px_rgba(249,115,22,0.12)] transition-[border-color,box-shadow] duration-200 hover:border-primary/65 hover:shadow-[0_0_0_4px_rgba(249,115,22,0.14),0_0_70px_rgba(249,115,22,0.22)]"
        >
          <ChevronRight aria-hidden className="h-[13px] w-[13px] shrink-0 text-primary" strokeWidth={3.2} />
          <span className="flex min-w-0 flex-auto items-center gap-1.5 overflow-hidden whitespace-nowrap text-left">
            <span>register --interest</span>
            <span aria-hidden className="block h-[17px] w-2 shrink-0 animate-blink bg-foreground motion-reduce:animate-none" />
          </span>
          <span className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-foreground px-3.5 font-sans text-sm font-semibold text-black">
            <span>Run</span>
            <CornerDownLeft aria-hidden className="h-[15px] w-[15px]" strokeWidth={2} />
          </span>
        </a>

        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-muted-foreground transition-colors hover:text-white"
        >
          <span>Or become a sponsor</span>
          <ArrowUpRight aria-hidden className="h-[15px] w-[15px] text-primary" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
};

export default CTA;
