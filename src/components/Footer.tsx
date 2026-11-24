import { Linkedin } from "lucide-react";
import bsidesLogo from "@/assets/bsides-sri-lanka-logo.png";
import { LINKEDIN_URL, WRAP } from "@/lib/site";
import { cn } from "@/lib/utils";

const footerLinks = [
  { label: "Call for Papers", href: "#cfp" },
  { label: "Call for Volunteers", href: "#volunteers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "About", href: "#about" },
  { label: "2025", href: "#archive" },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] bg-black">
      <div className={cn(WRAP, "flex flex-col gap-7 pb-9 pt-10")}>
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
          <img src={bsidesLogo} alt="BSides Sri Lanka" className="block h-[60px] w-auto" />
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm font-medium text-muted-foreground transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-white"
            >
              <Linkedin aria-hidden className="h-4 w-4" strokeWidth={1.5} />
              <span>LinkedIn</span>
            </a>
          </nav>
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-1.5 border-t border-white/[0.07] pt-5 font-mono text-xs text-muted-foreground">
          <span>© 2026 BSides Sri Lanka</span>
          <span>
            <span aria-hidden className="text-primary">
              {"// "}
            </span>
            built by the Sri Lankan security community
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
