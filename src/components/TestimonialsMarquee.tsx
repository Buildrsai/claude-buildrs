import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Thomas R.",
    username: "@thomasr",
    body: "J'ai lancé mon premier MVP en 4 jours. €340 de revenus le premier mois. Le chapitre Claude Code est une révélation.",
    img: "https://avatar.vercel.sh/thomasr",
  },
  {
    name: "Sophie M.",
    username: "@sophiem",
    body: "Non-développeuse depuis toujours. Le guide m'a prouvé que le VibeCoding c'est vraiment pour tout le monde.",
    img: "https://avatar.vercel.sh/sophiem",
  },
  {
    name: "Kevin D.",
    username: "@kevind",
    body: "Mon outil d'automatisation est live. €1 200 MRR au 2ème mois. Merci Alfred pour la méthode terrain.",
    img: "https://avatar.vercel.sh/kevind",
  },
  {
    name: "Laura C.",
    username: "@laurac",
    body: "Le CLAUDE.md a tout changé. Mon projet avance 3x plus vite. Je ne build plus jamais sans.",
    img: "https://avatar.vercel.sh/laurac",
  },
  {
    name: "Marc B.",
    username: "@marcb",
    body: "Supabase + Stripe + Vercel expliqués clairement. J'aurais jamais cru déployer en prod tout seul un jour.",
    img: "https://avatar.vercel.sh/marcb",
  },
  {
    name: "Camille T.",
    username: "@camillet",
    body: "Chapitre 7 sur Preview et GitHub. Déployer en 2 minutes sans friction. Une compétence qui change tout.",
    img: "https://avatar.vercel.sh/camillet",
  },
  {
    name: "Romain V.",
    username: "@romainv",
    body: "Le concept d'orchestrateur d'IA a changé ma façon de voir les choses. Je suis chef d'orchestre, pas dev.",
    img: "https://avatar.vercel.sh/romainv",
  },
  {
    name: "Julia P.",
    username: "@juliap",
    body: "VibeCoding c'est vraiment la compétence n°1 de 2026. Ce guide me l'a prouvé en 12 chapitres.",
    img: "https://avatar.vercel.sh/juliap",
  },
  {
    name: "Antoine L.",
    username: "@antoinel",
    body: "Gérant d'agence depuis 10 ans. Je n'aurais jamais pensé builder un SaaS seul. C'est maintenant fait.",
    img: "https://avatar.vercel.sh/antoinel",
  },
  {
    name: "Sarah K.",
    username: "@sarahk",
    body: "Le guide le plus complet sur Claude. Du setup jusqu'au déploiement, absolument tout est là.",
    img: "https://avatar.vercel.sh/sarahk",
  },
  {
    name: "Lucas F.",
    username: "@lucasf",
    body: "Premier client SaaS signé 6 jours après avoir terminé le guide. Le ROI est immédiat.",
    img: "https://avatar.vercel.sh/lucasf",
  },
  {
    name: "Emma D.",
    username: "@emmad",
    body: "Alfred prouve par l'exemple. Pas de bullshit, que du terrain. C'est rare et c'est exactement ce dont j'avais besoin.",
    img: "https://avatar.vercel.sh/emmad",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/[.08] bg-white/[.04] hover:bg-white/[.07]",
        "transition-colors duration-150"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground">
            {name}
          </figcaption>
          <p className="text-xs text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {body}
      </blockquote>
    </figure>
  )
}

export function TestimonialsMarquee() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Section header */}
      <div className="mb-16 max-w-lg">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Témoignages
        </p>
        <h2 className="mb-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Ils ont appliqué la méthode
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Des entrepreneurs non-techniques qui ont buildé leurs premiers actifs logiciels avec le VibeCoding.
        </p>
      </div>

      {/* Double-row horizontal marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Fades left / right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  )
}
