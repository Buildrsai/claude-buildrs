import { type LucideIcon } from "lucide-react";

interface ChapterCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isBonus?: boolean;
}

const ChapterCard = ({ number, title, description, icon: Icon, isBonus }: ChapterCardProps) => {
  return (
    <div className="group relative rounded-xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card">
      {isBonus && (
        <span
          className="mb-3 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
          style={{
            background: "rgba(218, 119, 86, 0.15)",
            color: "rgba(218, 119, 86, 0.9)",
            border: "1px solid rgba(218, 119, 86, 0.25)",
          }}
        >
          Bonus
        </span>
      )}
      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-secondary/50 text-muted-foreground transition-colors group-hover:text-foreground">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <p className="mb-1.5 font-sans text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{number}</p>
      <h3 className="mb-2 font-serif text-base font-medium text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground/90">{description}</p>
    </div>
  );
};

export default ChapterCard;
