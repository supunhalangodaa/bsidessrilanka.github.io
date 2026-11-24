const stats = [
  { value: "350+", label: "Attendees", description: "First ever BSides Sri Lanka" },
  { value: "10+", label: "Speakers", description: "Industry experts & researchers" },
  { value: "11+", label: "Sessions", description: "Talks, workshops & panels" },
  { value: "1st", label: "Edition", description: "Making history in Sri Lanka" },
];

/** 2025 by the numbers. */
const Stats = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-y-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1.5 border-l border-white/[0.12] py-1 pl-5 pr-4">
          <span className="text-[clamp(40px,5vw,68px)] font-semibold leading-none tracking-[-0.045em] text-foreground tabular-nums">
            {stat.value}
          </span>
          <span className="mt-1.5 font-mono text-xs uppercase tracking-[0.06em] text-primary">{stat.label}</span>
          <span className="text-sm leading-normal text-muted-foreground">{stat.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
