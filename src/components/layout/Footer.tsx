import {
  ADDRESS,
  CONTACT_LINKS,
  NAV_ITEMS,
  SOCIAL_LINKS,
} from "@/lib/constants"
import { Facebook, Instagram, X, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-[clamp(3rem,5vw,5rem)] flex flex-col">
      <div className="fluid-section-x w-full max-w-screen mx-auto pb-[clamp(2rem,4vw,3rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_9fr] gap-x-[clamp(2rem,4vw,5rem)] gap-y-[clamp(1rem,4vw,3rem)]">
          <Logo />
          <LinksSection />
        </div>
      </div>
      <LowerHalf />
    </footer>
  )
}

const Logo = () => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center h-full">
      <div className="relative w-[clamp(6rem,15vw,10rem)] justify-self-center self-center aspect-square">
        <Image
          src="/assets/logo.svg"
          alt="SSA Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

const LinksSection = () => {
  const FooterNAV = [...NAV_ITEMS, { label: "FAQs", href: "/faqs" }]
  return (
    <div className="w-full flex flex-col">
      <nav className="flex flex-wrap w-full mb-[clamp(2rem,3vw,3rem)] gap-y-[clamp(1rem,2vw,2rem)]">
        {FooterNAV.map((item) => (
          <div
            key={item.href}
            className="w-1/3 md:w-1/6 flex justify-center md:justify-start"
          >
            <Link
              href={item.href}
              className="fluid-footer-subtext group relative text-center text-brand-navy hover:text-brand-lime transition-colors font-medium"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-brand-lime hover:bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        ))}
      </nav>
      <hr className="border-gray-300 w-full mb-[clamp(2rem,3vw,3rem)]" />
      <LinksSectionHalf />
    </div>
  )
}

const LinksSectionHalf = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  md:items-start md:justify-start lg:items-start gap-[clamp(2.5rem,6vw,6rem)]">
      <div className="flex flex-col text-center md:text-start items-center gap-[clamp(1.5rem,1.5vw,1.5rem)]">
        <h3 className="fluid-footer-title font-bold text-brand-lime inline-block pb-[clamp(0.25rem,0.5vw,0.5rem)] w-fit">
          Signature Slam Academy
        </h3>

        <address className="not-italic flex flex-col gap-[clamp(1rem,2vw,1.5rem)] text-brand-navy">
          <p className="fluid-footer-subtext font-medium">{ADDRESS}</p>
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex justify-center md:justify-start gap-[clamp(0.75rem,1vw,1rem)] hover:text-brand-lime transition-colors group"
            >
              <Icon className="hidden md:block w-[clamp(1.25rem,1.5vw,1.5rem)] h-[clamp(1.25rem,1.5vw,1.5rem)] text-brand-lime  transition-transform group-hover:scale-110" />
              <span className="fluid-footer-subtext font-medium">{label}</span>
            </Link>
          ))}
        </address>
        <div className="flex md:hidden items-center gap-[clamp(1.5rem,1.5vw,2rem)] text-brand-navy">
          {SOCIAL_LINKS.map((item) => (
            <SocialIcon
              href={item.href}
              icon={<item.icon />}
              key={item.label}
              aria-label={item.label}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:flex  flex-col gap-[clamp(1.5rem,1.5vw,1.5rem)]">
        <h4 className="block fluid-footer-title font-bold text-brand-lime">
          Connect with us
        </h4>

        <div className="flex items-center gap-[clamp(1.5rem,1.5vw,2rem)] text-brand-navy">
          {SOCIAL_LINKS.map((item) => (
            <SocialIcon
              href={item.href}
              icon={<item.icon />}
              key={item.label}
              aria-label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const LowerHalf = () => {
  return (
    <div className="relative w-full text-white py-[clamp(0.688rem,0.5vw,1rem)] fluid-section-x flex flex-col md:flex-row items-center justify-between font-medium bg-gradient-brand gap-[clamp(0.5rem,1vw,1rem)] fluid-footer-subtext">
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <Link href="/terms" className="hover:underline ">
          Terms And Conditions
        </Link>
      </div>

      <div className="w-full md:w-auto text-center ">
        <span className=" whitespace-nowrap">
          © {new Date().getFullYear()} All Rights Reserved
        </span>
      </div>

      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <Link href="/privacy" className="hover:underline ">
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-brand-navy hover:text-brand-lime transition-colors transform hover:scale-110 duration-200"
    >
      {icon}
    </Link>
  )
}
