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
        <span className="mb-3 inline-block rounded-md border border-border bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
          Bonus
        </span>
      )}
      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-secondary/50 text-muted-foreground transition-colors group-hover:text-foreground">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <p className="mb-1.5 font-sans text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{number}</p>
      <h3 className="mb-2 font-semibold text-base text-foreground">{title}</h3>
      <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default ChapterCard;
