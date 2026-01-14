import CoachEvents from "@/components/sections/CoachEvents"
import { HeroBackground } from "@/components/ui/HeroBackground"

export default function Home() {
  return (
    <>
      <section className="relative w-full min-h-dvh flex items-center pt-[clamp(5rem,10vw,8rem)] pb-[clamp(3rem,6vw,5rem)]">
        {/* INSERT BACKGROUND HERE */}
        <HeroBackground />
      </section>
      <CoachEvents />
    </>
  )
}
