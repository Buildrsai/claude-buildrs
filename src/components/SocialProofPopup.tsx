import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download } from "lucide-react";

const ENTRIES = [
  { name: "Lucas", city: "Bordeaux" },
  { name: "Camille", city: "Lyon" },
  { name: "Théo", city: "Paris" },
  { name: "Léa", city: "Marseille" },
  { name: "Hugo", city: "Toulouse" },
  { name: "Manon", city: "Nantes" },
  { name: "Jules", city: "Lille" },
  { name: "Chloé", city: "Montpellier" },
  { name: "Raphaël", city: "Strasbourg" },
  { name: "Emma", city: "Rennes" },
  { name: "Nathan", city: "Nice" },
  { name: "Sarah", city: "Grenoble" },
  { name: "Maxime", city: "Angers" },
  { name: "Inès", city: "Dijon" },
  { name: "Antoine", city: "Rouen" },
  { name: "Clara", city: "Brest" },
  { name: "Tom", city: "Aix-en-Provence" },
  { name: "Jade", city: "Clermont-Ferrand" },
];

const TIMES = ["à l'instant", "il y a 2 min", "il y a 5 min", "il y a 8 min", "il y a 12 min"];

export function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [timeLabel, setTimeLabel] = useState(TIMES[0]);

  const showNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % ENTRIES.length);
    setTimeLabel(TIMES[Math.floor(Math.random() * TIMES.length)]);
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  }, []);

  useEffect(() => {
    const initialTimeout = setTimeout(showNext, 3000);
    const interval = setInterval(showNext, 6000);
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [showNext]);

  const entry = ENTRIES[index];

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-3 rounded-lg border border-border/60 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-md"
            style={{ maxWidth: "320px" }}
          >
            {/* Icon */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
              <Download size={14} className="text-foreground/70" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-medium text-foreground/90">
                <span className="font-semibold text-foreground">{entry.name}</span>{" "}
                de {entry.city}
              </p>
              <p className="text-[11px] text-muted-foreground">
                vient de télécharger le guide · {timeLabel}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
