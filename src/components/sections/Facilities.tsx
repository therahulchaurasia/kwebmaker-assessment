import Chip from "@/components/ui/Chip"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/utils"
import { Play } from "lucide-react"
import Image from "next/image"
import SectionHeader from "../ui/SectionHeader"

const FACILITIES = [
  {
    id: 1,
    title: "Tennis",
    image: "/assets/field.webp",
    chips: [{ label: "9 Clay Courts" }, { label: "4 Hard Courts" }],
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    title: "Accommodation",
    image: "/assets/club-drone-view.webp",
    chips: [{ label: "5 Star Hotel" }],
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    title: "Fitness",
    image: "/assets/player-exc.webp",
    chips: [{ label: "Gym" }, { label: "Fitness Room" }],
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    title: "Recovery",
    image: "/assets/club-drone-view.webp",
    chips: [{ label: "Spa" }, { label: "Pool" }, { label: "Massage" }],
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
] as const

export default function Facilities() {
  const rows = []
  for (let i = 0; i < FACILITIES.length; i += 2) {
    rows.push(FACILITIES.slice(i, i + 2))
  }
  return (
    <section className="relative w-full fluid-section-y overflow-x-clip">
      <div className="fluid-section-x w-full flex flex-col gap-[clamp(3rem,5vw,3.5rem)]">
        <SectionHeader
          headingText="Facilities"
          btnText="Explore More"
          btnClassname="hidden"
        />
        <div className="relative flex flex-col gap-[clamp(3rem,5vw,4rem)]">
          <Overlays />
          {rows.map((rowItems, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0

            return (
              <div
                key={rowIndex}
                className={cn(
                  "flex flex-col md:flex-row gap-[clamp(2rem,3.5vw,4rem)] w-full",
                  isEvenRow ? "justify-start" : "justify-end",
                )}
              >
                {rowItems.map((item) => (
                  <FacilityCard
                    key={item.id}
                    data={item}
                    isEvenRow={isEvenRow}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const Overlays = () => {
  return (
    <>
      <div className="hidden md:block absolute top-[20%] left-1/2 -translate-x-1/2 min-w-screen h-full md:h-1/2 bg-linear-to-br from-brand-navy to-brand-lime -z-10" />
      <div className="hidden md:block absolute min-w-screen top-[25%] right-0 translate-x-[5%] h-1/2 -z-10 opacity-30 mix-blend-overlay pointer-events-none select-none">
        <Image
          src="/assets/trophy-vector.svg"
          alt="Background Trophy"
          fill
          className="object-contain object-right"
        />
      </div>
    </>
  )
}

type FacilityCardProps = {
  data: (typeof FACILITIES)[number]
  isEvenRow: boolean
}
function FacilityCard({ data, isEvenRow }: FacilityCardProps) {
  return (
    <div className="flex flex-col gap-5 group w-full md:max-w-1/3">
      <div className="relative w-full h-[clamp(18rem,25vw,24rem)] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25rem"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-colors cursor-pointer">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center  transition-transform duration-300 group-hover:scale-110 shadow-2xl">
            <Play className="w-5 h-5 md:w-6 md:h-6 text-brand-navy fill-brand-navy" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3
          className={cn(
            "font-bold fluid-about-heading text-black",
            isEvenRow ? "md:text-white" : "text-black",
          )}
        >
          {data.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.chips.map((chip: any, i: number) => (
            <Chip
              key={i}
              label={chip.label}
              variant={isEvenRow ? "white" : "lime"}
            />
          ))}
        </div>

        <p
          className={cn(
            "leading-relaxed fluid-paragraph max-w-sm mt-1",
            isEvenRow ? "md:text-white" : "text-black",
          )}
        >
          {data.desc}
        </p>
      </div>
    </div>
  )
}
