import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { cn } from "@/lib/utils"

const DUMMY_DESC =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."

export default function CoachEvents() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <BannerCard title="Coaches" description={DUMMY_DESC} href="/coaches">
        <>
          <Image
            src="/assets/coach.webp"
            alt="Tennis Coach"
            fill
            loading="lazy"
            priority={false}
            className="object-cover transition-transform duration-700 pointer-events-none"
          />
          <div
            className="absolute inset-0 bg-black/60 pointer-events-none"
            aria-hidden
          />
        </>
      </BannerCard>

      <BannerCard
        title="Events"
        description={DUMMY_DESC}
        href="/events"
        className="bg-brand-lime"
      >
        <div className="absolute right-0 translate-x-1/3 translate-y-1/9 bottom-0 w-full h-full opacity-30 pointer-events-none mix-blend-color-burn">
          <Image
            src="/assets/tennis-silhouette.png"
            alt="Player Silhouette"
            loading="lazy"
            priority={false}
            fill
            className="z-50 object-contain object-bottom right-0"
          />
        </div>
      </BannerCard>
    </section>
  )
}

interface BannerCardProps {
  title: string
  description: string
  href: string
  children: React.ReactNode
  className?: string
}

function BannerCard({
  title,
  description,
  href,
  children,
  className,
}: BannerCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full md:w-1/2 min-h-1/4 flex flex-col justify-center overflow-hidden",
        className,
      )}
    >
      {children}
      <div className="relative z-10 p-[clamp(2rem,5vw,4rem)] flex flex-col gap-[clamp(1rem,1.5vw,1.5rem)] items-start">
        <SectionHeading title={title} variant="white" />{" "}
        <p className="text-fluid-body text-gray-100 max-w-lg">{description}</p>
        <ArrowLink href={href} label="Read More" variant="light" />
      </div>
    </div>
  )
}

function ArrowLink({
  href,
  label,
  variant = "dark",
}: {
  href: string
  label: string
  variant?: "light" | "dark"
}) {
  return (
    <Link
      href={href}
      className={`group/link inline-flex items-center gap-2 text-fluid-label font-medium pb-1 transition-all duration-300
        ${variant === "light" ? "text-white " : "text-brand-navy"}`}
    >
      {label}
      <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" />
    </Link>
  )
}
