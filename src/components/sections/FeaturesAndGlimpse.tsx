import { FEATURES, GLIMPSE_ITEMS } from "@/lib/constants"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import SectionHeader from "../ui/SectionHeader"
import { cn } from "@/lib/utils"

type Props = {}

function FeaturesAndGlimpse({}: Props) {
  return (
    <div id="wrapper" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 max-h-2/3">
        <Image
          src="/assets/wireframe.svg"
          alt="Wireframe Background"
          fill
          loading="lazy"
          priority={false}
          className="object-cover object-left opacity-70"
        />

        <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-white opacity-80" />
      </div>
      <KeyFeatures />
      <GlimpseSection />
    </div>
  )
}

export default FeaturesAndGlimpse

function KeyFeatures() {
  return (
    <section className="w-full relative fluid-section-y fluid-section-x overflow-hidden">
      <div className="relative z-10 w-full flex flex-col gap-[clamp(3rem,5vw,3.5rem)]">
        <SectionHeader headingText="Key Features" btnText="Register Now" />

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

function GlimpseSection() {
  return (
    <section className="relative overflow-hidden w-full fluid-section-y fluid-section-x">
      <div className="relative z-10 w-full flex flex-col gap-[clamp(3rem,5vw,3.5rem)]">
        <SectionHeader
          headingText="A Glimpse of Excellence"
          btnText="Register Now"
        />

        <div className="grid grid-cols-12 gap-[clamp(0.75rem,1vw,1rem)]">
          {GLIMPSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative h-[clamp(20rem,40vw,30rem)] overflow-hidden group",
                item.className,
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                priority={false}
                className={cn(
                  "object-cover transition-transform duration-700 rounded-lg group-hover:scale-105",
                  item.imageClassName,
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
