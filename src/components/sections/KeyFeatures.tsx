import Image from "next/image"
import { SectionHeading } from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react" // Or use a custom SVG if you prefer

const FEATURES = [
  "First venue in the world",
  "First venue in the world", // Duplicate in design, kept for fidelity
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy in Asia Pacific",
  "First one stop tennis academy in Asia Pacific",
]

export default function KeyFeatures() {
  return (
    <section className="relative w-full fluid-section-y overflow-hidden	px-[clamp(2rem,4vw,5rem)]">
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/vector-bg-2.svg"
          alt="Wireframe Background"
          fill
          className="object-cover object-left opacity-40" // Lower opacity so text pops
        />
        {/* White fade to ensure text readability on the right side if needed */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-white opacity-80" />
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="fluid-section relative z-10 w-full flex flex-col gap-[clamp(3rem,5vw,4rem)]">
        {/* --- HEADER ROW --- 
            Mobile: Stacked
            Desktop: Title Left, Button Right
        */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <SectionHeading
              title="Key Features"
              textclassName="text-black font-black"
              dotclassName="bg-brand-lime"
            />
            <p className="text-brand-navy/70 text-[length:clamp(1rem,1.2vw,1.125rem)]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>

          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-navy hover:text-white transition-colors rounded-full font-semibold px-8 py-3 shrink-0">
            Register Now
          </Button>
        </div>

        {/* --- FEATURES GRID --- 
            Mobile: 1 Column
            Desktop: 2 Columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(2rem,4vw,5rem)] gap-y-[clamp(1.5rem,2.5vw,2.5rem)]">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              {/* Icon: Using a green arrow icon */}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-brand-lime shrink-0 mt-1" />

              {/* Text */}
              <p className="text-brand-navy/80 text-[length:clamp(0.95rem,1.1vw,1.1rem)] leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
