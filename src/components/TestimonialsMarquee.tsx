import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Mathieu",
    body: "J'utilisais Claude comme un ChatGPT glorifié. Depuis le guide, j'ai configuré mes Projects, mes Skills, mon CLAUDE.md — c'est un autre monde.",
    img: "https://avatar.vercel.sh/mathieu",
  },
  {
    name: "Camille",
    body: "Le chapitre sur Claude Code m'a fait passer de 'je regarde des tutos' à 'j'ai une app en prod'. En 3 jours.",
    img: "https://avatar.vercel.sh/camille",
  },
  {
    name: "Sébastien",
    body: "Je ne savais même pas que Claude avait une mémoire persistante. Le guide m'a ouvert les yeux sur 90% des features que je n'utilisais pas.",
    img: "https://avatar.vercel.sh/sebastien",
  },
  {
    name: "Laura",
    body: "Le passage sur les Skills et les SuperPowers, c'est ce qui manquait. Claude est passé de 'sympa' à 'indispensable' dans mon quotidien.",
    img: "https://avatar.vercel.sh/laura",
  },
  {
    name: "Julien",
    body: "Freelance dev depuis 5 ans. Claude Code a doublé ma productivité. Le guide explique exactement comment le configurer correctement.",
    img: "https://avatar.vercel.sh/julien",
  },
  {
    name: "Sarah",
    body: "Non-technique, zéro code. J'ai suivi le guide chapitre par chapitre et j'ai mon premier outil en ligne. Toujours du mal à y croire.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Romain",
    body: "Le concept d'orchestrateur d'IA a changé ma manière de bosser. Je ne code pas, je dirige. Et ça marche.",
    img: "https://avatar.vercel.sh/romain",
  },
  {
    name: "Inès",
    body: "J'ai lu des dizaines d'articles sur Claude. Ce guide est le seul qui va du setup jusqu'au déploiement, sans sauter d'étapes.",
    img: "https://avatar.vercel.sh/ines",
  },
  {
    name: "Thomas",
    body: "Haiku, Sonnet, Opus — je mélangeais tout. Le chapitre sur les modèles m'a fait économiser facilement 40% de tokens.",
    img: "https://avatar.vercel.sh/thomas",
  },
  {
    name: "Manon",
    body: "Le template CLAUDE.md en bonus vaut le détour à lui seul. Mes projets Claude sont 10x mieux structurés maintenant.",
    img: "https://avatar.vercel.sh/manon",
  },
  {
    name: "Antoine",
    body: "J'ai montré le guide à mon équipe. On utilise tous Claude Code maintenant. La productivité a explosé, c'est pas une façon de parler.",
    img: "https://avatar.vercel.sh/antoine",
  },
  {
    name: "Chloé",
    body: "Créatrice de contenu, pas dev. Grâce au guide j'ai automatisé 80% de ma production avec Claude. Le gain de temps est dingue.",
    img: "https://avatar.vercel.sh/chloe",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string
  name: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/[.08] bg-white/[.04] hover:bg-white/[.07]",
        "transition-colors duration-150"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="rounded-full"
          width="28"
          height="28"
          alt={name}
          src={img}
        />
        <figcaption className="text-sm font-medium text-foreground">
          {name}
        </figcaption>
      </div>
      <blockquote className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
        {body}
      </blockquote>
    </figure>
  )
}

export function TestimonialsMarquee() {
  return (
    <section className="py-16">
      {/* Double-row horizontal marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        {/* Fades left / right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  )
}
