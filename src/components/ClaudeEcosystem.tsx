import React, { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import claudeIcon from "@/assets/claude-icon.png"
import lovableIcon from "@/assets/lovable-icon.png"
import supabaseIcon from "@/assets/supabase-icon.webp"
import githubIcon from "@/assets/github-icon.png"
import perplexityIcon from "@/assets/perplexity-icon.png"
import figmaIcon from "@/assets/figma-icon.png"
import notebooklmIcon from "@/assets/notebooklm-icon.png"

/* ─── Icon Components ─── */

function ClaudeIcon() {
  return (
    <img
      src={claudeIcon}
      alt="Claude"
      className="w-8 h-8"
    />
  )
}

function SupabaseIcon() {
  return (
    <img
      src={supabaseIcon}
      alt="Supabase"
      className="w-6 h-6"
    />
  )
}

function GitHubIcon() {
  return (
    <img
      src={githubIcon}
      alt="GitHub"
      className="w-6 h-6"
    />
  )
}

function LovableIcon() {
  return (
    <img
      src={lovableIcon}
      alt="Lovable"
      className="w-6 h-6"
    />
  )
}

function PerplexityIcon() {
  return (
    <img
      src={perplexityIcon}
      alt="Perplexity"
      className="w-6 h-6"
    />
  )
}

function FigmaIcon() {
  return (
    <img
      src={figmaIcon}
      alt="Figma"
      className="w-6 h-6"
    />
  )
}

function NotebookLMIcon() {
  return (
    <img
      src={notebooklmIcon}
      alt="NotebookLM"
      className="w-6 h-6"
    />
  )
}

/* ─── Circle wrapper ─── */

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border bg-card",
        "border-border/50",
        className
      )}
    >
      {children}
    </div>
  )
)
Circle.displayName = "Circle"

/* ─── Beam color preset ─── */
const BEAM = {
  gradientStartColor: "rgba(255,255,255,0.65)",
  gradientStopColor: "rgba(255,255,255,0.08)",
  pathColor: "rgba(255,255,255,0.05)",
}

/* ─── Main Section ─── */

export function ClaudeEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Left column refs (inputs → Claude)
  const supabaseRef = useRef<HTMLDivElement>(null)
  const lovableRef = useRef<HTMLDivElement>(null)
  const githubRef = useRef<HTMLDivElement>(null)

  // Center
  const claudeRef = useRef<HTMLDivElement>(null)

  // Right column refs (Claude → outputs)
  const perplexityRef = useRef<HTMLDivElement>(null)
  const figmaRef = useRef<HTMLDivElement>(null)
  const notebooklmRef = useRef<HTMLDivElement>(null)

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* ── Left: Copy ── */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Pourquoi Claude
          </p>
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Claude n'est pas un outil.<br />
            <span className="italic text-secondary-foreground">C'est le cerveau de ton business.</span>
          </h2>
          <p className="mb-10 text-sm leading-relaxed text-muted-foreground">
            En 2026, Claude est devenu le moteur central de tout build sérieux. Pas juste un chat IA — un orchestrateur qui connecte ta stack entière, génère du code réel, déploie, et apprend de toi à chaque session.
          </p>

          <div className="space-y-5">
            {[
              {
                label: "Claude AI",
                desc: "Mémoire persistante, Projects, Skills. Le contexte qui ne se perd jamais.",
              },
              {
                label: "Claude Code",
                desc: "VibeCoding en action. Code, preview live, déploiement sans quitter le terminal.",
              },
              {
                label: "Claude.ai",
                desc: "Interface web collaborative. Artefacts, canvas, partage en temps réel.",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">{item.label}</span>
                  {" — "}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Animated Beam Diagram ── */}
        <div
          ref={containerRef}
          className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-card/20 p-8"
        >
          <div className="flex size-full max-w-xs flex-row items-stretch justify-between gap-8">

            {/* Left column — inputs */}
            <div className="flex flex-col justify-around">
              <Circle ref={supabaseRef} className="size-11">
                <SupabaseIcon />
              </Circle>
              <Circle ref={lovableRef} className="size-11">
                <LovableIcon />
              </Circle>
              <Circle ref={githubRef} className="size-11">
                <GitHubIcon />
              </Circle>
            </div>

            {/* Center — Claude */}
            <div className="flex flex-col justify-center">
              <Circle ref={claudeRef} className="size-16 border-border/70">
                <ClaudeIcon />
              </Circle>
            </div>

            {/* Right column — outputs */}
            <div className="flex flex-col justify-around">
              <Circle ref={perplexityRef} className="size-11">
                <PerplexityIcon />
              </Circle>
              <Circle ref={figmaRef} className="size-11">
                <FigmaIcon />
              </Circle>
              <Circle ref={notebooklmRef} className="size-11">
                <NotebookLMIcon />
              </Circle>
            </div>
          </div>

          {/* Beams: tools → Claude */}
          <AnimatedBeam containerRef={containerRef} fromRef={supabaseRef} toRef={claudeRef} {...BEAM} duration={3.2} />
          <AnimatedBeam containerRef={containerRef} fromRef={lovableRef} toRef={claudeRef} {...BEAM} duration={4.1} delay={0.8} />
          <AnimatedBeam containerRef={containerRef} fromRef={githubRef} toRef={claudeRef} {...BEAM} duration={5} delay={1.6} />

          {/* Beams: Claude → outputs */}
          <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={stripeRef} reverse {...BEAM} duration={3.6} delay={0.4} />
          <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={vercelRef} reverse {...BEAM} duration={4.4} delay={1.2} />
          <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={n8nRef} reverse {...BEAM} duration={5.2} delay={2} />
        </div>

      </div>
    </section>
  )
}
