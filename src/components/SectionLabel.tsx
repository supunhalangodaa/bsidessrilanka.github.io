import type { ReactNode } from "react";

/** Shared type style for section headlines. */
export const sectionTitleClass =
  "text-[clamp(32px,4.6vw,60px)] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground";

/** Shared type style for the smaller headings inside the 2025 archive. */
export const blockTitleClass = "text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground";

/** Small mono label above a section headline, e.g. "[01] queue". */
const SectionLabel = ({ index, children }: { index: string; children: ReactNode }) => (
  <span className="font-mono text-[13px] text-muted-foreground">
    <span className="text-primary">[{index}]</span> {children}
  </span>
);

export default SectionLabel;
