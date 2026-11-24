import { blockTitleClass } from "@/components/SectionLabel";
import teamPhoto from "@/assets/team-photo.jpg";

/** The 2025 organizing committee. */
const Team = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
        <h3 className={blockTitleClass}>The team behind it</h3>
        <span className="font-mono text-[13px] text-muted-foreground">cat ./crew</span>
      </div>
      <figure className="overflow-hidden rounded-xl border border-white/[0.08] bg-secondary">
        <img
          src={teamPhoto}
          alt="The BSides Sri Lanka 2025 organizing team on stage"
          loading="lazy"
          decoding="async"
          className="block aspect-[1920/816] h-auto w-full object-cover"
        />
        <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-white/[0.08] bg-card px-[18px] py-3.5 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">BSides Sri Lanka 2025 Organizing Committee</span>
          <span>The volunteers who made 2025 possible.</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Team;
