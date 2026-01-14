"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NAV_ITEMS } from "@/lib/constants"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    window.addEventListener("resize", handleResize)
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpen])

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-white">
        <div className="flex items-center justify-between fluid-header">
          <Logo />
          <DesktopLinks />
          <div className="flex items-center gap-[1.5vw] z-50">
            <div className="hidden md:block">
              <Button className="py-[clamp(0.625rem,0.5vw,0.75rem)]">
                Join Club
              </Button>
            </div>
            <Button
              className="md:hidden border-none p-1 transition-colors focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-white flex flex-col md:hidden min-h-dvh",
          "transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none",
        )}
      >
        <div className="flex flex-col h-full px-[clamp(1rem,2.5vw,2rem)] pt-[clamp(5rem,15vw,7rem)] pb-8">
          <nav className="flex flex-col gap-[5vw] overflow-y-auto items-center no-scrollbar flex-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "fluid-nav font-bold text-brand-navy hover:text-brand-lime transition-colors",
                  "transform transition-all duration-500 ",
                )}
                // style={{
                //   opacity: isOpen ? 1 : 0,
                //   transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                //   transitionDelay: `${100 + i * 50}ms`,
                // }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Button className="w-full">Join Club</Button>
          </div>
        </div>
      </div>
    </>
  )
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative justify-start  block w-[clamp(3.5rem,11vw,5rem)] z-50"
    >
      <div className="aspect-3/1 relative">
        <Image
          src="/assets/logo.svg"
          alt="SSA Hunter Valley"
          fill
          className="object-cover object-left"
          priority
          fetchPriority="high"
        />
      </div>
    </Link>
  )
}

const DesktopLinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-[2vw] xl:gap-[2.5vw]">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative fluid-nav hover:text-brand-lime transition-colors duration-200"
        >
          {item.label}
          <span className="absolute left-0 -bottom-1 h-px w-0 bg-brand-lime hover:bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  )
}
