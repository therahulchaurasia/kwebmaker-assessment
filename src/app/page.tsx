import AboutTabs from "@/components/sections/AboutTabsAndDetails"
import CoachEvents from "@/components/sections/CoachEvents"
import Hero from "@/components/sections/Hero"
import KeyFeatures from "@/components/sections/KeyFeatures"
import VisionBanner from "@/components/sections/VisionBanner"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTabs />
      <VisionBanner />
      <KeyFeatures />
      <CoachEvents />
    </>
  )
}
