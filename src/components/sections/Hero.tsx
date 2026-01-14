import { HeroBackground } from "@/components/ui/HeroBackground"
import { ChevronsLeft, MapPin, MoveDown } from "lucide-react"
import Link from "next/link"
import Button from "../ui/Button"

export default function Hero() {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white ">
        <HeroSideWidget />
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
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-lime to-transparent opacity-60 max-w-[clamp(35rem,50vw,40rem)] mx-auto" />
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

export function HeroSideWidget() {
  return (
    <div className="hidden lg:flex absolute right-0 bottom-10  z-20 flex-col items-end gap-[clamp(1rem,1.5vw,2rem)] pr-0">
      <div className="flex flex-col items-end gap-1 relative group cursor-pointer">
        <SIDETAB text="Weather"></SIDETAB>
        <div
          className="bg-transparent text-white backdrop-blur-xs shadow-2xl transition-transform
					my-[clamp(0.5rem,1vw,0.75rem)] 
          p-[clamp(1rem,1.5vw,1.5rem)]
        "
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-brand-lime -z-10"></div>
          <div className="flex flex-col gap-[clamp(0.5rem,1vw,0.75rem)]	">
            <div className="flex items-center gap-2 opacity-80 mb-1">
              <MapPin className="w-3 h-3" />
              <span className="font-bold fluid-paragraph">Hunter Valley</span>
            </div>

            <div className="flex items-center justify-between gap-[clamp(0.5rem,1vw,0.75rem)]	">
              <span className="font-black tracking-tighter leading-none fluid-hero-title">
                19°C
              </span>

              <div className="flex flex-col items-end text-right">
                <span className="font-bold fluid-paragraph">Weather</span>
                <span className="font-light fluid-paragraph">
                  Saturday, 8 pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SIDETAB text="Ongoing Matches" />

      <SIDETAB text="Score" />
    </div>
  )
}

const SIDETAB = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:-translate-x-2">
      <ChevronsLeft className="w-[clamp(1rem,1.2vw,1.5rem)] h-[clamp(1rem,1.2vw,1.5rem)] text-brand-lime animate-pulse group-hover:text-white" />
      <span className="text-white font-bold tracking-tight fluid-paragraph uppercase">
        {text}
      </span>
      <div className="w-[clamp(3rem,4vw,5rem)] h-px bg-white/40" />
    </div>
  )
}
