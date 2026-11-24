import { blockTitleClass } from "@/components/SectionLabel";
import sponsorsImage from "@/assets/sponsors-2025.jpg";

/** The 2025 sponsors. The strip keeps its original white background so the logos stay true. */
const Sponsors = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
        <h3 className={blockTitleClass}>2025 sponsors</h3>
        <span className="font-mono text-[13px] text-muted-foreground">cat ./sponsors</span>
      </div>
      <div className="overflow-x-auto rounded-xl bg-white p-[clamp(14px,2.6vw,28px)]">
        <img
          src={sponsorsImage}
          alt="BSides Sri Lanka 2025 sponsors. Platinum Sponsor: OREL IT. Gold Sponsors: Dialog Enterprise and TrustVault. Strategic Partner: Sysco LABS. Silver Sponsor: eSec Forte. Cyber Warriors: HackerOne, The SecOps Group, SquareX, The XSSRat and PentesterLab."
          loading="lazy"
          decoding="async"
          className="mx-auto block aspect-[1080/178] h-auto w-full min-w-[640px] max-w-[1080px] object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default Sponsors;
