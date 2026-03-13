import { Button } from "@/components/ui/button";
import ChapterCard from "@/components/ChapterCard";
import claudeLogo from "@/assets/claude-logo.png";
import buildrsLogo from "@/assets/buildrs-logo.png";
import {
  Clock,
  LayoutGrid,
  Layers,
  Settings,
  MessageSquare,
  Code2,
  Eye,
  Zap,
  PenLine,
  Monitor,
  CheckCircle2,
  Gift,
  ArrowRight,
} from "lucide-react";

const chapters = [
  { number: "01", title: "Introduction", description: "Pourquoi Claude en 2026, VibeCoding, les chiffres qui prouvent la méthode.", icon: Clock },
  { number: "02", title: "Claude AI vs Claude Code", description: "Les deux produits, leurs rôles, comment ils s'articulent.", icon: LayoutGrid },
  { number: "03", title: "Les modèles", description: "Haiku, Sonnet, Opus — lequel choisir, quand, et pourquoi.", icon: Layers },
  { number: "04", title: "Configuration & abonnements", description: "Plans, paramètres clés, extension navigateur — le setup optimal.", icon: Settings },
  { number: "05", title: "Prompts & Projects", description: "Structurer ses instructions, activer la mémoire persistante.", icon: MessageSquare },
  { number: "06", title: "Claude Code — Installation", description: "Setup local, CLI, intégration IDE — opérationnel en 20 min.", icon: Code2 },
  { number: "07", title: "Preview & Workflow cloud", description: "La feature révolutionnaire, GitHub, Vercel — builder sans friction.", icon: Eye },
  { number: "08", title: "Skills & Superpowers", description: "Créer, configurer et les meilleurs skills disponibles.", icon: Zap },
  { number: "09", title: "CLAUDE.md & Mémoire", description: "Faire en sorte que Claude se souvienne de tout, partout.", icon: PenLine },
  { number: "10", title: "Stack Micro-SaaS complète", description: "Supabase, Stripe, Cloudflare — la stack qui génère du MRR.", icon: Monitor },
  { number: "11", title: "Builder son 1er MVP", description: "Workflow complet de l'idée au déploiement, étape par étape.", icon: CheckCircle2 },
  { number: "BONUS", title: "Ressources & Templates", description: "Mon CLAUDE.md template, mes prompts favoris et la checklist de lancement MVP.", icon: Gift, isBonus: true },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-foreground">Guide Claude</span>
            <span className="text-xs text-muted-foreground">by Buildrs</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
              Se connecter
            </Button>
            <Button variant="hero" size="sm" className="text-xs">
              Accéder <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </header>

      {/* Logos bar */}
      <div className="flex items-center justify-center gap-3 pt-24 text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <img src={claudeLogo} alt="Claude" className="h-5 w-5" />
          <span className="text-xs">Claude</span>
        </div>
        <span className="text-xs">×</span>
        <div className="flex items-center gap-1.5">
          <img src={buildrsLogo} alt="Buildrs" className="h-5 w-5" />
          <span className="text-xs">Buildrs</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-10 text-center">
        <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="text-xs font-medium text-primary">✦ GUIDE GRATUIT · 12 CHAPITRES</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Maîtrise Claude
          <br />
          <span className="text-primary">&</span> le VibeCoding
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          Comprends Claude, installe Claude Code et construis ton premier Micro-SaaS — sans savoir coder.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="hero" size="lg">
            Accéder gratuitement <ArrowRight size={16} />
          </Button>
          <Button variant="heroOutline" size="lg">
            Voir les chapitres
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>Par Alfred Cosni</span>
          <span className="hidden sm:inline">·</span>
          <span>12 chapitres</span>
          <span className="hidden sm:inline">·</span>
          <span>Mars 2026</span>
          <span className="hidden sm:inline">·</span>
          <span>100% gratuit</span>
        </div>
      </section>

      {/* Chapters grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Ce que tu vas apprendre
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.number} {...chapter} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            Guide Claude · by Buildrs — 100% gratuit, 12 chapitres
          </p>
          <Button variant="hero" size="sm" className="text-xs">
            Accéder gratuitement <ArrowRight size={14} />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
