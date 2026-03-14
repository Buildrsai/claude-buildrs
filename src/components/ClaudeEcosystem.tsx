import React, { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"

/* ─── Icon Components ─── */

function ClaudeIcon() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Claude_AI_symbol.svg"
      alt="Claude"
      className="w-8 h-8 opacity-85"
    />
  )
}

function SupabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path
        d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.015.985 1.261 1.41 1.875.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.579L11.9 1.036z"
        fill="rgba(62,207,142,0.85)"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" style={{ color: 'rgba(237,238,239,0.7)' }}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LovableIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="rgba(255,100,100,0.8)"
      />
    </svg>
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
