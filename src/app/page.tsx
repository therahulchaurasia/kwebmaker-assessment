import AboutTabs from "@/components/sections/AboutTabsAndDetails"
import CoachEvents from "@/components/sections/CoachEvents"
import Facilities from "@/components/sections/Facilities"
import FeaturesAndGlimpse from "@/components/sections/FeaturesAndGlimpse"
import Hero from "@/components/sections/Hero"
import Launches from "@/components/sections/Launches"
import Professionals from "@/components/sections/Professionals"
import Programs from "@/components/sections/Programs"
import VisionBanner from "@/components/sections/VisionBanner"
import Marquee from "@/components/ui/Marquee"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTabs />
      <VisionBanner />
      <FeaturesAndGlimpse />
      <Programs />
      <Marquee />
      <Launches />
      <Professionals />
      <Facilities />
      <CoachEvents />
    </>
  )
}
