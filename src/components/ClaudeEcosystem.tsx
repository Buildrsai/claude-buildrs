import React from "react" // ecosystem
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import claudeIcon from "@/assets/claude-icon.png"
import lovableIcon from "@/assets/lovable-icon.png"
import supabaseIcon from "@/assets/supabase-icon.webp"
import githubIcon from "@/assets/github-icon.png"
import perplexityIcon from "@/assets/perplexity-icon.png"
import figmaIcon from "@/assets/figma-icon.png"
import notebooklmIcon from "@/assets/notebooklm-icon.png"

/* ─── Icon Circle wrapper ─── */

function IconCircle({ src, alt, size = 24 }: { src: string; alt: string; size?: number }) {
  return (
    <div className="flex size-full items-center justify-center rounded-full border border-border/50 bg-card">
      <img src={src} alt={alt} className="object-contain" style={{ width: size, height: size }} />
    </div>
  )
}

/* ─── Main Section ─── */

export function ClaudeEcosystem() {
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
            <span className="italic text-secondary-foreground">C'est ton associé qui bosse H24.</span>
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground/90">
            Au-delà d'un écosystème, ce sont des agents IA qui bossent sur ton projet avec toi. Avec la super-intelligence de Claude, plus besoin d'être développeur. Fini les barrières techniques. Fini les barrières budgétaires.
          </p>

          <div className="space-y-4">
            {[
              {
                label: "Claude AI",
                desc: "Ta mémoire, ton contexte, ton intelligence — il comprend ton business et s'en souvient.",
              },
              {
                label: "Claude Code",
                desc: "Il construit et déploie tes apps — même si tu n'as jamais codé.",
              },
              {
                label: "Claude Cowork",
                desc: "Il exécute en arrière-plan — automatisations, workflows, tâches récurrentes.",
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

        {/* ── Right: Orbiting Circles Diagram ── */}
        <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl border border-border/40 bg-card/20">

          {/* Center — Claude */}
          <div className="z-10 flex size-16 items-center justify-center rounded-full border border-border/60 bg-card">
            <img src={claudeIcon} alt="Claude" className="w-9 h-9" />
          </div>

          {/* Outer orbit — Supabase, Lovable, GitHub */}
          <OrbitingCircles radius={130} duration={30} iconSize={42}>
            <IconCircle src={supabaseIcon} alt="Supabase" />
            <IconCircle src={lovableIcon} alt="Lovable" />
            <IconCircle src={githubIcon} alt="GitHub" />
          </OrbitingCircles>

          {/* Inner orbit (reverse) — Perplexity, Figma, NotebookLM */}
          <OrbitingCircles radius={75} duration={25} iconSize={38} reverse>
            <IconCircle src={perplexityIcon} alt="Perplexity" size={20} />
            <IconCircle src={figmaIcon} alt="Figma" size={20} />
            <IconCircle src={notebooklmIcon} alt="NotebookLM" size={20} />
          </OrbitingCircles>
        </div>

      </div>
    </section>
  )
}
