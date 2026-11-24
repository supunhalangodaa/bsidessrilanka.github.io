import Gallery from "@/components/Gallery";
import Press from "@/components/Press";
import SectionLabel, { sectionTitleClass } from "@/components/SectionLabel";
import Sponsors from "@/components/Sponsors";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import { WRAP } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Everything from the 2025 edition, kept as a past event. */
const Archive = () => {
  return (
    <section id="archive" className="border-t border-white/[0.07]">
      <div className={cn(WRAP, "flex flex-col gap-[clamp(48px,6vw,80px)] py-[clamp(72px,9vw,128px)]")}>
        <div className="flex flex-col gap-[clamp(36px,4vw,56px)]">
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
                <SectionLabel index="03">~/archive/2025</SectionLabel>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-[3px] text-xs font-medium leading-normal text-muted-foreground">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-subtle" />
                  <span>Past event</span>
                </span>
              </div>
              <h2 className={sectionTitleClass}>
                BSides Sri Lanka 2025.
                <span className="block text-subtle">Here's the log.</span>
              </h2>
            </div>
            <p className="flex-[0_1_380px] text-[17px] leading-[1.6] text-muted-foreground">
              Sri Lanka's first cybersecurity community conference, held in Colombo.
            </p>
          </div>
          <Stats />
        </div>

        <Gallery />
        <Team />
        <Sponsors />
        <Press />
      </div>
    </section>
  );
};

export default Archive;
