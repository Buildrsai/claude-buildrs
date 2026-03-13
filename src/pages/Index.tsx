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
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src={buildrsLogo} alt="Buildrs" className="h-8 w-8" />
            <span className="text-sm font-medium text-foreground tracking-wide">Guide Claude</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:block cursor-pointer hover:text-foreground transition-colors">
              Se connecter
            </span>
            <Button variant="hero" size="sm">
              Accéder
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-32 pt-40">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-muted/30 blur-[120px]" />
        </div>

        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            {/* Logo pills */}
            <div className="mb-10 flex items-center gap-3 text-muted-foreground">
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <img src={claudeLogo} alt="Claude" className="h-4 w-4" />
                <span className="text-xs">Claude</span>
              </div>
              <span className="text-xs">×</span>
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <img src={buildrsLogo} alt="Buildrs" className="h-5 w-5" />
                <span className="text-xs">Buildrs</span>
              </div>
            </div>

            <h1 className="mb-8 text-5xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Maîtrise Claude<br />
              <span className="italic text-secondary-foreground">&amp; le VibeCoding</span>
            </h1>

            <p className="mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
              Comprends Claude, installe Claude Code et construis ton premier Micro-SaaS — sans savoir coder.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="hero" size="lg">
                Accéder gratuitement
                <ArrowRight size={16} />
              </Button>
              <Button variant="heroOutline" size="lg">
                Voir les chapitres
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <span>Par Alfred Cosni</span>
              <span className="h-3 w-px bg-border" />
              <span>12 chapitres</span>
              <span className="h-3 w-px bg-border" />
              <span>Mars 2026</span>
              <span className="h-3 w-px bg-border" />
              <span>100% gratuit</span>
            </div>
          </div>

          {/* Right side: decorative card stack */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-64 w-64 rounded-2xl border border-border/50 bg-card/50 rotate-6" />
              <div className="absolute -top-2 -left-2 h-64 w-64 rounded-2xl border border-border/50 bg-card/70 rotate-3" />
              <div className="relative h-64 w-64 rounded-2xl border border-border bg-card p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">GUIDE GRATUIT</p>
                  <p className="font-serif text-2xl text-foreground">12 chapitres</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={claudeLogo} alt="Claude" className="h-8 w-8 opacity-60" />
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Chapters grid */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 max-w-lg">
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Ce que tu vas apprendre
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            12 chapitres pour passer de débutant à builder autonome avec Claude AI et Claude Code.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.number} {...chapter} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            Guide Claude · by Buildrs — 100% gratuit
          </p>
          <Button variant="hero" size="sm">
            Accéder gratuitement <ArrowRight size={14} />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
