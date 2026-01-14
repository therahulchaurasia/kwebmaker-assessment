import SectionHeader from "@/components/ui/SectionHeader"
import Card from "@/components/ui/Card"
import { PROFESSIONALS } from "@/lib/constants"

export default function Professionals() {
  return (
    <section className="relative w-full fluid-section-y fluid-section-x">
      <div className="relative z-10 w-full flex flex-col gap-[clamp(3rem,5vw,3.5rem)]">
        <SectionHeader
          headingText="Meet our professionals"
          btnText="View all"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)]">
          {PROFESSIONALS.map((professional) => (
            <Card
              key={professional.id}
              variant="stacked"
              title={professional.name}
              subtitle={professional.role}
              src={professional.src}
              imageWrapperClassName="h-[clamp(18rem,50vw,21rem)]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
