"use client"
import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  className?: string
}

function Button({ className, children, ...btnProps }: ButtonProps) {
  return (
    <button
      className={cn(
        "fluid-nav border border-brand-lime rounded-full hover:bg-brand-lime hover:text-white transition-all duration-300 font-bold cursor-pointer px-[clamp(1.5rem,2.5vw,3rem)] py-[clamp(0.625rem,0.5vw,0.75rem)]",
        className,
      )}
      {...btnProps}
    >
      {children}
    </button>
  )
}

export default Button
