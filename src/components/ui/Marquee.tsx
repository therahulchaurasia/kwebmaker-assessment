import { MARQUEE_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export default function Marquee() {
  return (
    <section className="w-full bg-white fluid-section-y overflow-hidden flex">
      <MarqueeTrack />
      <MarqueeTrack />
    </section>
  )
}

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 animate-marquee items-center">
      {MARQUEE_ITEMS.map((word, index) => {
        const isOutline = index % 2 !== 0

        return (
          <div key={index} className="flex items-center">
            <span
              className={cn(
                "font-black fluid-hero-title leading-none uppercase px-[clamp(1rem,2vw,2rem)]",
                isOutline ? "text-stroke-lime" : "text-brand-lime",
              )}
            >
              {word}
            </span>
            <span className="text-brand-lime fluid-hero-title">•</span>
          </div>
        )
      })}
    </div>
  )
}
