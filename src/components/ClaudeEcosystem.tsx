import React, { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import claudeIcon from "@/assets/claude-icon.png"
import lovableIcon from "@/assets/lovable-icon.png"
import supabaseIcon from "@/assets/supabase-icon.webp"
import githubIcon from "@/assets/github-icon.png"

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

function StripeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path
        d="M13.976 9.15c-2.172-.506-3.368-1.259-3.368-2.456 0-1.198 1.063-1.946 2.747-1.946 1.553 0 2.872.592 3.917 1.782l2.323-2.15C17.88 2.819 16.057 2 13.86 2 10.217 2 8 4.044 8 6.694c0 2.65 1.977 4.11 5.186 4.9C15.692 12.1 17 12.937 17 14.26c0 1.325-1.132 2.108-2.98 2.108-1.847 0-3.3-.71-4.418-2.044l-2.323 2.15c1.587 1.85 3.672 2.861 6.567 2.861C17.75 19.335 20 17.246 20 14.26c0-2.986-2.001-4.496-6.024-5.11z"
        fill="rgba(99,91,255,0.85)"
      />
    </svg>
  )
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" style={{ color: 'rgba(237,238,239,0.75)' }}>
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  )
}

function N8nIcon() {
  return (
    <span className="text-[11px] font-bold tracking-tighter" style={{ color: 'rgba(255,120,50,0.9)' }}>
      n8n
    </span>
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
  const stripeRef = useRef<HTMLDivElement>(null)
  const vercelRef = useRef<HTMLDivElement>(null)
  const n8nRef = useRef<HTMLDivElement>(null)

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
              <Circle ref={stripeRef} className="size-11">
                <StripeIcon />
              </Circle>
              <Circle ref={vercelRef} className="size-11">
                <VercelIcon />
              </Circle>
              <Circle ref={n8nRef} className="size-11">
                <N8nIcon />
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
