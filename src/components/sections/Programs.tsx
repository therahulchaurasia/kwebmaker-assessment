import SectionHeader from "@/components/ui/SectionHeader"
import Card from "@/components/ui/Card"
import { PROGRAMS } from "@/lib/constants"

export default function Programs() {
  return (
    <section className="relative w-full fluid-section-y fluid-section-x">
      <div className="relative z-10 w-full flex flex-col gap-[clamp(3rem,5vw,3.5rem)]">
        <SectionHeader headingText="Programs" btnText="Register Now" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)]">
          {PROGRAMS.map((program) => (
            <Card
              key={program.id}
              variant="overlay"
              title={program.title}
              subtitle={program.subtitle}
              src={program.src}
              imageWrapperClassName="h-[clamp(28rem,50vw,30rem)]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
