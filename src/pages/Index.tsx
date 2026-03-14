import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import ChapterCard from "@/components/ChapterCard";
import { ClaudeEcosystem } from "@/components/ClaudeEcosystem";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
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
  Rocket,
  Briefcase,
  Target,
  Lightbulb,
} from "lucide-react";

/* ─── Animation presets ─── */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: EASE },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.08 },
});

/* ─── Chapters data — 3 blocs ─── */
const BLOCS = [
  {
    label: "Comprendre",
    chapters: [
      { number: "01", title: "Introduction", description: "Pourquoi Claude change la donne en 2026 — et pourquoi maintenant.", icon: Clock },
      { number: "02", title: "Claude AI vs Claude Code vs Cowork", description: "Trois produits, trois rôles — comment ils travaillent ensemble pour toi.", icon: LayoutGrid },
      { number: "03", title: "Les modèles", description: "Haiku, Sonnet 4.6, Opus 4.6 — lequel utiliser, quand, et sans cramer tes tokens.", icon: Layers },
      { number: "04", title: "Configuration & abonnements", description: "Le bon plan, les bons paramètres — setup optimal en 10 minutes.", icon: Settings },
    ],
  },
  {
    label: "Configurer",
    chapters: [
      { number: "05", title: "Prompts & Projects", description: "Comment donner des instructions que Claude comprend vraiment — et qu'il retient.", icon: MessageSquare },
      { number: "06", title: "Claude Code — Installation", description: "Local, VS Code ou Anti-Gravity — opérationnel en 20 min, pas une de plus.", icon: Code2 },
      { number: "07", title: "Preview & Workflow", description: "Prévisualise, pousse sur GitHub, déploie sur Vercel — sans friction.", icon: Eye },
      { number: "08", title: "Skills & SuperPowers", description: "Claude est livré nu. Avec les bons Skills, il devient ton stratège, ton designer, ton dev.", icon: Zap },
      { number: "09", title: "CLAUDE.md & Mémoire", description: "Fais en sorte que Claude se souvienne de tout — projet par projet, automatiquement.", icon: PenLine },
    ],
  },
  {
    label: "Exploiter",
    chapters: [
      { number: "10", title: "Le business derrière Claude", description: "Comment des entrepreneurs non-techniques génèrent du revenu avec cet écosystème.", icon: Monitor },
      { number: "11", title: "Builder son 1er MVP", description: "De l'idée au produit déployé — la méthode complète, étape par étape.", icon: CheckCircle2 },
      { number: "BONUS", title: "Ressources & Templates", description: "Mon CLAUDE.md template, mes prompts favoris et la checklist de lancement MVP.", icon: Gift, isBonus: true },
    ],
  },
];

/* ─── Pain points ─── */
const PAIN_POINTS = [
  { icon: Zap, text: "Tu paies l'abo Pro mais tu utilises Claude comme un ChatGPT amélioré" },
  { icon: LayoutGrid, text: "Tu ne sais pas quand utiliser Haiku, Sonnet 4.6 ou Opus 4.6" },
  { icon: Settings, text: "Tu n'as configuré aucun Skill, aucun connecteur, aucun CLAUDE.md" },
  { icon: Target, text: "Tu vois des gens builder des apps et tu te dis \"c'est pas pour moi\"" },
  { icon: Monitor, text: "Tu passes d'un outil IA à l'autre sans système et sans méthode" },
];

/* ─── Profiles ─── */
const PROFILES = [
  {
    icon: Rocket,
    title: "L'entrepreneur",
    description: "Tu veux un copilote qui gère ta stratégie, ton contenu et tes automatisations. Claude devient ton associé IA — disponible 24/7.",
  },
  {
    icon: Briefcase,
    title: "Le freelance",
    description: "Tu veux livrer plus vite, facturer plus cher, et te démarquer grâce à l'IA. Claude multiplie ta capacité de production.",
  },
  {
    icon: Target,
    title: "Le créateur de contenu",
    description: "Tu veux produire 10x plus de contenu sans sacrifier la qualité. Claude rédige, structure et adapte — à ton style.",
  },
  {
    icon: Lightbulb,
    title: "Le curieux du code",
    description: "Tu n'as jamais codé mais tu veux comprendre le VibeCoding. Ce guide te montre que builder un produit est à ta portée.",
  },
];

/* ─── Email capture component ─── */
function EmailCapture({
  email,
  setEmail,
  buttonText = "Recevoir le guide \u2192",
  onSubmit,
}: {
  email: string;
  setEmail: (v: string) => void;
  buttonText?: string;
  onSubmit: () => void;
}) {
  return (
    <div className="flex max-w-md overflow-hidden rounded-lg border border-border/60 bg-card/60 backdrop-blur-sm transition-colors focus-within:border-border">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ton email"
        className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
      <button
        onClick={onSubmit}
        className="shrink-0 bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        {buttonText}
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  INDEX — LP COMPLÈTE                                   */
/* ═══════════════════════════════════════════════════════ */

const Index = () => {
  const navigate = useNavigate();
  const [heroEmail, setHeroEmail] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");

  const handleEmailSubmit = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">

      {/* ─── HEADER ─── */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src={buildrsLogo} alt="Buildrs" className="h-8 w-8" />
            <span className="text-sm font-medium text-foreground tracking-wide">Claude SuperPowers</span>
            <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">by Buildrs</span>
          </div>
          <div className="flex items-center gap-4">
            <span
              onClick={() => navigate("/auth")}
              className="hidden text-sm text-muted-foreground sm:block cursor-pointer hover:text-foreground transition-colors"
            >
              Se connecter
            </span>
            <Button variant="hero" size="sm" onClick={() => navigate("/auth")}>
              Accéder
            </Button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 1 — HERO                                */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative mx-auto max-w-6xl px-6 pb-28 pt-40">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-muted/30 blur-[120px]" />
        </div>

        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            {/* Logo pills */}
            <motion.div {...fadeIn} className="mb-8 flex items-center gap-3 text-muted-foreground">
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <img src={claudeLogo} alt="Claude" className="h-5 w-5 rounded-sm" />
                <span className="text-xs">Claude</span>
              </div>
              <span className="text-xs">×</span>
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <img src={buildrsLogo} alt="Buildrs" className="h-5 w-5" />
                <span className="text-xs">Buildrs</span>
              </div>
            </motion.div>

            {/* Surtitre */}
            <motion.p
              {...stagger(0)}
              className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              Guide gratuit — 12 chapitres
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...stagger(1)}
              className="mb-8 text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Claude est l'outil le plus puissant de 2026.{" "}
              <span className="italic text-secondary-foreground">Tu l'utilises à 10%.</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              {...stagger(2)}
              className="mb-10 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              Ce guide gratuit t'installe l'écosystème complet — Claude AI, Claude Code, Cowork, Skills, connecteurs — pour en faire ton copilote business. Même si tu pars de zéro.
            </motion.p>

            {/* Email capture */}
            <motion.div {...stagger(3)}>
              <EmailCapture
                email={heroEmail}
                setEmail={setHeroEmail}
                onSubmit={handleEmailSubmit}
              />
            </motion.div>

            {/* Micro-infos */}
            <motion.div
              {...stagger(4)}
              className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:gap-6"
            >
              <span>Par Alfred Orsini</span>
              <span className="h-3 w-px bg-border" />
              <span>Mars 2026</span>
              <span className="h-3 w-px bg-border" />
              <span>100% gratuit</span>
            </motion.div>
          </div>

          {/* Right side: decorative card stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-64 w-64 rounded-2xl border border-border/50 bg-card/50 rotate-6" />
              <div className="absolute -top-2 -left-2 h-64 w-64 rounded-2xl border border-border/50 bg-card/70 rotate-3" />
              <div className="relative h-64 w-64 rounded-2xl border border-border bg-card p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">GUIDE GRATUIT</p>
                  <p className="font-serif text-2xl text-foreground">12 chapitres</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={claudeLogo} alt="Claude" className="h-8 w-8 rounded-sm" />
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 2 — IDENTIFICATION / AGITATION          */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 py-28 sm:py-36 text-center">
        <motion.p
          {...fadeUp}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Ça te parle ?
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="mx-auto mb-16 max-w-3xl font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
        >
          Tu utilises Claude tous les jours…{" "}
          <span className="italic text-secondary-foreground">mais tu sens que tu passes à côté.</span>
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              {...stagger(i)}
              className="group relative rounded-2xl border border-border/40 bg-card/30 p-6 text-left transition-colors duration-300 hover:border-border/70 hover:bg-card/60"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border/30 bg-background text-muted-foreground transition-colors group-hover:text-foreground">
                <point.icon size={18} strokeWidth={1.5} />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border/60" />
          <p className="max-w-lg font-serif text-xl italic leading-relaxed text-secondary-foreground/80 sm:text-2xl">
            Ce n'est pas un problème de compétence. C'est un problème de configuration.
          </p>
          <div className="h-px w-12 bg-border/60" />
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 3 — POURQUOI CLAUDE                     */}
      {/* ═══════════════════════════════════════════════ */}
      <ClaudeEcosystem />

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 4 — LES 12 CHAPITRES (3 blocs)          */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.div {...fadeUp} className="mb-16 max-w-lg">
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Ce que tu vas apprendre
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            12 chapitres pour passer de "je découvre Claude" à "Claude travaille pour mon business".
          </p>
        </motion.div>

        {BLOCS.map((bloc, blocIndex) => (
          <div key={bloc.label} className={blocIndex > 0 ? "mt-12" : ""}>
            {/* Bloc label */}
            <motion.div {...fadeIn} className="mb-5 flex items-center gap-3">
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "rgba(200, 120, 60, 0.85)" }}
              >
                Bloc {blocIndex + 1} — {bloc.label}
              </span>
              <div className="h-px flex-1 bg-border/30" />
            </motion.div>

            {/* Cards grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bloc.chapters.map((chapter, i) => (
                <motion.div key={chapter.number} {...stagger(i)}>
                  <ChapterCard {...chapter} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 5 — C'EST POUR TOI SI...                */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.div {...fadeUp} className="mb-16 max-w-lg">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            C'est pour toi si...
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Quel que soit ton niveau, Claude s'adapte.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PROFILES.map((profile, i) => (
            <motion.div
              key={profile.title}
              {...stagger(i)}
              className="group rounded-xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-secondary/50 text-muted-foreground transition-colors group-hover:text-foreground">
                <profile.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-serif text-lg font-medium text-foreground">
                {profile.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 6 — CTA FINAL                           */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <motion.h2
          {...fadeUp}
          className="mb-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          Prêt à débloquer{" "}
          <span className="italic text-secondary-foreground">100% de Claude ?</span>
        </motion.h2>

        <motion.p
          {...stagger(1)}
          className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          Accède gratuitement aux 12 chapitres et transforme Claude en machine de guerre pour ton activité.
        </motion.p>

        <motion.div {...stagger(2)} className="mx-auto max-w-md">
          <EmailCapture
            email={ctaEmail}
            setEmail={setCtaEmail}
            buttonText="Accéder au guide gratuit →"
            onSubmit={handleEmailSubmit}
          />
        </motion.div>

        <motion.p {...stagger(3)} className="mt-5 text-xs text-muted-foreground/60">
          100% gratuit · Pas de CB · Accès instantané
        </motion.p>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            Guide Claude · by Buildrs — 100% gratuit
          </p>
          <Button variant="hero" size="sm" onClick={() => navigate("/auth")}>
            Accéder gratuitement <ArrowRight size={14} />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
