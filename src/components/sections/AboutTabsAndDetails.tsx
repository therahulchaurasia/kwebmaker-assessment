"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { SectionHeading } from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"
import { useState } from "react"
import { ABOUT_IMAGES, STATS, TABS_ARR } from "@/lib/constants"

export default function AboutTabsAndDetails() {
  const [activeTab, setActiveTab] = useState("About Us")
  return (
    <div className="fluid-section-y">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <DetailsAndImages activeTab={activeTab} />
    </div>
  )
}

type TabsProps = {
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <section className="relative w-full bg-white pb-[clamp(3rem,5vw,4.5rem)] flex flex-col items-center overflow-hidden">
      <div className="absolute top-0 left-0  w-full h-full opacity-50 pointer-events-none select-none">
        <Image
          src="/assets/vector.svg"
          alt="Decorative Vector"
          fill
          className="object-contain object-left opacity-60"
          loading="lazy"
          priority={false}
        />
      </div>

      <div className="relative z-10 flex flex-col fluid-section-x items-center max-w-3xl gap-[clamp(2.5rem,4vw,3.5rem)]">
        <h3 className="fluid-heading-three tracking-tight text-center ">
          To be the first venue in the world to have{" "}
          <span className="text-brand-lime font-bold">
            60 multi surface courts
          </span>{" "}
          at one location and establish first one stop tennis academy in the
          Asia Pacific producing grand slam champions.
        </h3>
        <div className="w-full flex justify-center gap-[clamp(1rem,4vw,4rem)]">
          {TABS_ARR.map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type DetailsAndImagesProps = {
  activeTab?: string
}

function DetailsAndImages({ activeTab }: DetailsAndImagesProps) {
  return (
    <section className="w-full px-[clamp(2rem,4vw,5rem)]">
      <div className="flex flex-col-reverse md:flex-row items-center gap-[clamp(1rem,5vw,5rem)]">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="flex flex-col items-center md:items-start gap-[clamp(1rem,1.5vw,1.5rem)]">
            <SectionHeading
              title={activeTab || "About Us"}
              className="hidden md:block"
              textclassName="text-black font-black"
              dotclassName="bg-brand-lime"
            />
            <p className="text-fluid-body text-brand-navy/80 leading-relaxed w-full text-center md:text-start md:max-w-lg">
              To be the first venue in the world to have 60 multi surface courts
              at one location and establish first one stop tennis academy in the
              Asia Pacific producing grand slam champions.
            </p>
            <StatsMap />
            <Button className="bg-brand-lime text-white hover:bg-brand-navy hover:text-white transition-colors rounded-full font-semibold">
              Read More
            </Button>
          </div>
        </div>
        <MasonryGrid />
      </div>
    </section>
  )
}

function StatsMap() {
  return (
    <div className="flex flex-wrap justify-center md:justify-between items-start gap-[clamp(1rem,2vw,2rem)] w-full md:max-w-lg">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center lg:items-center text-center lg:text-left"
        >
          <h3 className="fluid-heading-three font-bold text-brand-lime leading-none">
            {stat.value}
          </h3>
          <span className="text-sm font-medium text-brand-navy mt-1 capitalize">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}

function MasonryGrid() {
  return (
    <div className="w-full md:w-1/2 grid grid-cols-12 gap-[clamp(0.75rem,1vw,1rem)]">
      {ABOUT_IMAGES.map((img) => (
        <div
          key={img.id}
          className={cn(
            "relative h-[clamp(12rem,15vw,18rem)] overflow-hidden",
            img.className,
          )}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-110 transition-transform duration-700 rounded-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  )
}

interface TabButtonProps {
  label: string
  isActive?: boolean
  onClick: () => void
}

function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      className={cn(
        "relative pb-[clamp(0.5rem,1vw,0.75rem)] fluid-heading-three font-bold transition-all duration-300 border-none cursor-pointer group",
        isActive ? "" : "text-gray-300 hover:text-black",
      )}
      onClick={onClick}
    >
      {label}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-full h-0.5 bg-brand-lime transition-all duration-300",
          isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
        )}
      />
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-brand-lime hover:bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
    </button>
  )
}
