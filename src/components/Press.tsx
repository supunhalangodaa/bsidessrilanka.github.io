import { ArrowUpRight } from "lucide-react";
import { blockTitleClass } from "@/components/SectionLabel";

const pressReleases = [
  {
    publication: "Financial Times",
    title: "Sysco LABS supports Sri Lanka's inaugural BSides Cybersecurity Conference",
    url: "https://www.ft.lk/it-telecom-tech/Sysco-LABS-supports--Sri-Lanka-s-inaugural-BSides-Cybersecurity-Conference/50-779889",
  },
  {
    publication: "Daily Mirror",
    title: "Colombo to host global cybersecurity trailblazers",
    url: "https://www.dailymirror.lk/business-news/Colombo-to-host-global-cybersecurity-trailblazers/273-309679",
  },
  {
    publication: "LMD",
    title: "BSides Sri Lanka 2025",
    url: "https://lmd.lk/bsides-sri-lanka-2025/",
  },
  {
    publication: "HackerOne",
    title: "HackerOne Sponsors BSides Sri Lanka",
    url: "http://h1.community/events/details/hackerone-sponsored-conferences-events-presents-hackerone-sponsors-bsides-sri-lanka/",
  },
  {
    publication: "Lanka Talks",
    title: "Sysco LABS supports Sri Lanka's inaugural BSides Cybersecurity Conference",
    url: "https://www.lankatalks.com/post/sysco-labs-supports-sri-lanka-s-inaugural-bsides-cybersecurity-conference",
  },
  {
    publication: "Biz English",
    title: "BSides Sri Lanka 2025 celebrates a breakthrough cybersecurity gathering in Colombo",
    url: "https://bizenglish.adaderana.lk/bsides-sri-lanka-2025-celebrates-a-breakthrough-cybersecurity-gathering-in-colombo/",
  },
];

/** Media coverage of the 2025 edition. */
const Press = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 pb-3">
        <h3 className={blockTitleClass}>Press</h3>
        <span className="font-mono text-[13px] text-muted-foreground">grep -r "BSides Sri Lanka" ./press</span>
      </div>
      <div className="flex flex-col border-b border-white/[0.08]">
        {pressReleases.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border-t border-white/[0.08] px-3 py-[18px] text-foreground transition-colors hover:bg-white/[0.05]"
          >
            <span className="flex min-w-0 flex-auto flex-wrap items-baseline gap-x-6 gap-y-1">
              <span className="flex-[0_0_150px] font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
                {item.publication}
              </span>
              <span className="min-w-0 flex-[1_1_300px] text-[17px] font-medium leading-[1.45] text-foreground">
                {item.title}
              </span>
            </span>
            <ArrowUpRight aria-hidden className="h-[18px] w-[18px] shrink-0 text-primary" strokeWidth={1.8} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Press;
