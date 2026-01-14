import Image from "next/image"
import { LandPlot } from "lucide-react"
import { LOCATIONS } from "@/lib/constants"

export default function Launches() {
  return (
    <section className="w-full flex flex-col fluid-section-y md:flex-row">
      <div
        className=" bg-linear-to-br from-brand-navy to-brand-lime flex flex-col justify-center
				w-full md:w-[55%]
				px-[clamp(2rem,4vw,5rem)]
        py-[clamp(4rem,6vw,6rem)]
      "
      >
        <div className="flex flex-col gap-[clamp(2rem,3vw,3rem)] ">
          <div className="flex flex-col gap-[clamp(0.5rem,0.75vw,1rem)]">
            <h3 className="fluid-heading-three text-white uppercase font-light">
              Launching
            </h3>
            <h2 className="fluid-launches-title text-wrap text-white font-black leading-tight">
              Signature Slam Academy Hunter Valley
            </h2>

            <h3 className="text-white font-medium fluid-heading-three">
              SSA Connectivity
            </h3>
          </div>
          <div className="flex flex-col gap-[clamp(1rem,1.25vw,1.5rem)]">
            {LOCATIONS.map((loc, index) => (
              <div
                key={index}
                className="flex items-end text-white/90 fluid-paragraph"
              >
                <LandPlot size={18} className="mr-3" />
                <span className="shrink-0 max-w-[45%] md:max-w-[60%] truncate">
                  {loc.name}
                </span>
                <div className="block grow shrink mx-3 border-b-2 border-dotted border-white/40 mb-1.5" />
                <span className="opacity-100 shrink-0">{loc.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full min-h-100 md:min-h-full">
        <Image
          src="/assets/club-drone-view.webp"
          alt="Aerial view of Hunter Valley Resort"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
