import Image from "next/image"
import { SectionHeading } from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

const FEATURES = [
  "First venue in the world",
  "First venue in the world",
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
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/vector-bg-2.svg"
          alt="Wireframe Background"
          fill
          className="object-cover object-left opacity-70"
        />

        <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-white opacity-80" />
      </div>
      <div className="fluid-section relative z-10 w-full flex flex-col gap-[clamp(3rem,5vw,3.5rem)]">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <SectionHeading
              title="Key Features"
              textclassName="text-black font-black"
              dotclassName="bg-brand-lime"
            />
            <p className=" fluid-paragraph">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>

          <Button className="justify-self-start self-start bg-brand-lime text-white hover:bg-brand-navy hover:text-white transition-colors rounded-full font-semibold">
            Register Now
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(2rem,4vw,5rem)] gap-y-[clamp(1.5rem,2.5vw,2.5rem)]">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-brand-lime shrink-0 mt-1" />
              <p className="fluid-paragraph leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
