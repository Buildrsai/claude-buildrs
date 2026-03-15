import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  { name: "Lucas", city: "Bordeaux", img: "https://avatar.vercel.sh/lucas" },
  { name: "Camille", city: "Lyon", img: "https://avatar.vercel.sh/camille" },
  { name: "Théo", city: "Paris", img: "https://avatar.vercel.sh/theo" },
  { name: "Léa", city: "Marseille", img: "https://avatar.vercel.sh/lea" },
  { name: "Hugo", city: "Toulouse", img: "https://avatar.vercel.sh/hugo" },
  { name: "Manon", city: "Nantes", img: "https://avatar.vercel.sh/manon" },
  { name: "Jules", city: "Lille", img: "https://avatar.vercel.sh/jules" },
  { name: "Chloé", city: "Montpellier", img: "https://avatar.vercel.sh/chloe" },
  { name: "Raphaël", city: "Strasbourg", img: "https://avatar.vercel.sh/raphael" },
  { name: "Emma", city: "Rennes", img: "https://avatar.vercel.sh/emma" },
  { name: "Nathan", city: "Nice", img: "https://avatar.vercel.sh/nathan" },
  { name: "Sarah", city: "Grenoble", img: "https://avatar.vercel.sh/sarah" },
  { name: "Maxime", city: "Angers", img: "https://avatar.vercel.sh/maxime" },
  { name: "Inès", city: "Dijon", img: "https://avatar.vercel.sh/ines" },
  { name: "Antoine", city: "Rouen", img: "https://avatar.vercel.sh/antoine" },
  { name: "Clara", city: "Brest", img: "https://avatar.vercel.sh/clara" },
  { name: "Tom", city: "Aix-en-Provence", img: "https://avatar.vercel.sh/tom" },
  { name: "Jade", city: "Clermont-Ferrand", img: "https://avatar.vercel.sh/jade" },
  { name: "Mathieu", city: "Montpellier", img: "https://avatar.vercel.sh/mathieu" },
  { name: "Sébastien", city: "Nantes", img: "https://avatar.vercel.sh/sebastien" },
  { name: "Laura", city: "Bordeaux", img: "https://avatar.vercel.sh/laura" },
  { name: "Julien", city: "Lyon", img: "https://avatar.vercel.sh/julien" },
  { name: "Romain", city: "Paris", img: "https://avatar.vercel.sh/romain" },
  { name: "Thomas", city: "Toulouse", img: "https://avatar.vercel.sh/thomas" },
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
