import { HeroBackground } from "@/components/ui/HeroBackground"
import { ChevronDown, Move3D, MoveDown } from "lucide-react" // Icons for the widget
import Link from "next/link"
import Button from "../ui/Button"

export default function Hero() {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white ">
        <div className="flex flex-col items-center text-center gap-8 w-full max-w-4xl mx-auto">
          <HeroHeadingAndSubheading />
          <AdoptNurtureDeliver />
          <CTABtn />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <MoveDown className=" text-brand-lime drop-shadow-md" />
        </div>
      </div>
    </section>
  )
}

const HeroHeadingAndSubheading = () => {
  return (
    <div>
      <div className="mb-[clamp(0.625rem,1vw,0.875rem)]">
        <span className="text-fluid-widget uppercase tracking-[0.4em] font-bold">
          SSA Hunter Valley
        </span>
      </div>
      <h1 className="fluid-hero-title font-light uppercase drop-shadow-lg tracking-wide">
        Grow Your Game With The <br />
        <span className="inline-block font-extrabold border-b-2 border-white pt-[clamp(0.25rem,0.5vw,0.75rem)] pb-[clamp(0.75rem,0.6vw,1.1rem)]">
          Professionals
        </span>
      </h1>
    </div>
  )
}

const AdoptNurtureDeliver = () => {
  return (
    <div className="w-full relative py-[clamp(0.5rem,1vw,0.75rem)]  flex justify-center items-center">
      <div className="absolute inset-0 bg-linear-to-r from-[#CDED4E00] via-[#D2F24F] to-[#D2F24F/10] opacity-60 max-w-[clamp(35rem,50vw,40rem)] mx-auto" />
      <div className="relative z-10 flex items-center gap-[clamp(0.875rem,1.3vw,1.5rem)] text-fluid-widget font-light uppercase text-white shadow-black drop-shadow-md">
        <span className="tracking-[clamp(0.2em,1vw,0.4em)] mr-[-0.4em]">
          Adopt
        </span>
        <span className="w-2 h-2 rounded-full bg-white" />
        <span className="tracking-[clamp(0.2em,1vw,0.4em)] mr-[-0.4em]">
          Nurture
        </span>
        <span className="w-2 h-2 rounded-full bg-white" />
        <span className="tracking-[clamp(0.2em,1vw,0.4em)] mr-[-0.4em]">
          Deliver
        </span>
      </div>
    </div>
  )
}

const CTABtn = () => {
  return (
    <div>
      <Link href="/register" tabIndex={-1}>
        <Button className="fluid-footer-subtext font-light ">
          Register Now
        </Button>
      </Link>
    </div>
  )
}
