import AboutTabs from "@/components/sections/AboutTabsAndDetails"
import CoachEvents from "@/components/sections/CoachEvents"
import FeaturesAndGlimpse from "@/components/sections/FeaturesAndGlimpse"
import Hero from "@/components/sections/Hero"
import VisionBanner from "@/components/sections/VisionBanner"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTabs />
      <VisionBanner />
      <FeaturesAndGlimpse />
      <CoachEvents />
    </>
  )
}
