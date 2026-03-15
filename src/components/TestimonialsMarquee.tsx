import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  { name: "Lucas", city: "Bordeaux" },
  { name: "Camille", city: "Lyon" },
  { name: "Théo", city: "Paris" },
  { name: "Léa", city: "Marseille" },
  { name: "Hugo", city: "Toulouse" },
  { name: "Manon", city: "Nantes" },
  { name: "Jules", city: "Lille" },
  { name: "Chloé", city: "Montpellier" },
  { name: "Raphaël", city: "Strasbourg" },
  { name: "Emma", city: "Rennes" },
  { name: "Nathan", city: "Nice" },
  { name: "Sarah", city: "Grenoble" },
  { name: "Maxime", city: "Angers" },
  { name: "Inès", city: "Dijon" },
  { name: "Antoine", city: "Rouen" },
  { name: "Clara", city: "Brest" },
  { name: "Tom", city: "Aix-en-Provence" },
  { name: "Jade", city: "Clermont-Ferrand" },
  { name: "Mathieu", city: "Montpellier" },
  { name: "Sébastien", city: "Nantes" },
  { name: "Laura", city: "Bordeaux" },
  { name: "Julien", city: "Lyon" },
  { name: "Romain", city: "Paris" },
  { name: "Thomas", city: "Toulouse" },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  name,
  city,
}: {
  name: string
  city: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/[.08] bg-white/[.04] hover:bg-white/[.07]",
        "transition-colors duration-150"
      )}
    >
      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium text-foreground">
          <span className="font-semibold">{name}</span> de {city}
        </p>
        <p className="text-[13px] text-muted-foreground">
          vient de télécharger le guide Claude SuperPowers
        </p>
      </div>
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
