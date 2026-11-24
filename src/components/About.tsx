import SectionLabel, { sectionTitleClass } from "@/components/SectionLabel";
import { WRAP } from "@/lib/site";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Security research",
    description: "Deep dives into the latest vulnerabilities and defense strategies.",
  },
  {
    title: "Networking",
    description: "Connect with security professionals from across the region.",
  },
  {
    title: "Hands-on workshops",
    description: "Learn practical skills from industry practitioners.",
  },
  {
    title: "CTF challenges",
    description: "Test your skills in competitive hacking challenges.",
  },
];

const About = () => {
  return (
    <section id="about" className="border-t border-white/[0.07]">
      <div className={cn(WRAP, "flex flex-col gap-[clamp(40px,5vw,72px)] py-[clamp(72px,9vw,128px)]")}>
        <div className="flex flex-wrap items-start gap-x-16 gap-y-7">
          <div className="flex min-w-0 flex-[1.3_1_440px] flex-col gap-4">
            <SectionLabel index="02">readme</SectionLabel>
            <h2 className={sectionTitleClass}>
              Security by the community,
              <span className="block text-subtle">for the community.</span>
            </h2>
          </div>
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4 pt-[clamp(0px,3vw,36px)]">
            <p className="text-[17px] leading-[1.65] text-muted-foreground">
              BSides Sri Lanka brings together security researchers, practitioners, and enthusiasts in a
              community-driven conference that emphasizes learning and sharing.
            </p>
            <p className="text-[17px] leading-[1.65] text-muted-foreground">
              Unlike traditional conferences, BSides events are organized by volunteers and focus on creating an
              intimate environment for meaningful discussions and knowledge exchange.
            </p>
            <p className="mt-2 font-mono text-sm leading-[1.7] text-foreground">
              <span aria-hidden className="text-primary">
                #{" "}
              </span>
              “Every person with an idea, some skills, or just curiosity has something to contribute.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-y-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="flex flex-col gap-2.5 border-l border-white/[0.12] py-1 pl-5 pr-6">
              <span className="font-mono text-[13px] text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
