import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { blockTitleClass } from "@/components/SectionLabel";

import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";
import event7 from "@/assets/gallery/event-7.jpg";
import event8 from "@/assets/gallery/event-8.jpg";
import event9 from "@/assets/gallery/event-9.jpg";
import event10 from "@/assets/gallery/event-10.jpg";
import event11 from "@/assets/gallery/event-11.jpg";
import event12 from "@/assets/gallery/event-12.jpg";

interface Shot {
  src: string;
  alt: string;
  portrait?: boolean;
}

const shots: Record<string, Shot> = {
  podium: { src: event1, alt: "Speaker presenting at BSides Sri Lanka 2025", portrait: true },
  pentest: { src: event2, alt: "Penetration testing talk at BSides", portrait: true },
  stage: { src: event3, alt: "Speaker on stage at BSides", portrait: true },
  panel: { src: event4, alt: "Panel discussion at BSides Sri Lanka", portrait: true },
  technical: { src: event5, alt: "Technical presentation at BSides" },
  booth: { src: event6, alt: "Sponsor booth at BSides event" },
  audience: { src: event7, alt: "Audience at BSides Sri Lanka 2025" },
  expert: { src: event8, alt: "Cybersecurity expert speaking at BSides" },
  hacker: { src: event9, alt: "Ethical hacker presentation at BSides" },
  workshop: { src: event10, alt: "Bug hunting workshop at BSides" },
  village: { src: event11, alt: "Hacking Village at BSides Sri Lanka" },
  networking: { src: event12, alt: "Networking at BSides Sri Lanka 2025" },
};

/**
 * Justified rows: every photo keeps its own aspect ratio and each row fills the width.
 * Each row is two pairs, so on phones a row splits into two shorter rows.
 */
const rows: [Shot, Shot][][] = [
  [
    [shots.audience, shots.hacker],
    [shots.podium, shots.stage],
  ],
  [
    [shots.workshop, shots.village],
    [shots.booth, shots.pentest],
  ],
  [
    [shots.technical, shots.networking],
    [shots.expert, shots.panel],
  ],
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Shot | null>(null);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
        <h3 className={blockTitleClass}>Snaps from 2025</h3>
        <span className="font-mono text-[13px] text-muted-foreground">ls ./snaps</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-2.5 min-[761px]:flex-row min-[761px]:items-start">
            {row.map((pair, pairIndex) => (
              <div key={pairIndex} className="flex items-start gap-2.5 min-[761px]:contents">
                {pair.map((shot) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setSelectedImage(shot)}
                    aria-label={`View photo: ${shot.alt}`}
                    className="group min-w-0 cursor-zoom-in overflow-hidden rounded-[10px] bg-secondary"
                    style={{
                      flex: `${shot.portrait ? 0.6667 : 1.5} 1 0px`,
                      aspectRatio: shot.portrait ? "2 / 3" : "3 / 2",
                    }}
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-cover transition-transform [transition-duration:400ms] group-hover:scale-[1.03]"
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="max-h-[95vh] max-w-[95vw] border-none bg-transparent p-0 shadow-none [&>button]:hidden"
        >
          <DialogTitle className="sr-only">{selectedImage?.alt ?? "Photo"}</DialogTitle>
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <button
                  type="button"
                  aria-label="Close photo"
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 z-10 rounded-full bg-background/80 p-2 text-foreground transition-colors hover:bg-background"
                >
                  <X aria-hidden className="h-6 w-6" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="mx-auto h-auto max-h-[90vh] w-auto max-w-full rounded-lg object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
