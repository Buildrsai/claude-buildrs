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
    <div className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50">
      {isBonus && (
        <span className="mb-3 inline-block rounded-md bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
          BONUS
        </span>
      )}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
        <Icon size={20} />
      </div>
      <p className="mb-1 text-xs text-muted-foreground">{number}</p>
      <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>
      <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default ChapterCard;
