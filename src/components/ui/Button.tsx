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
        "border border-brand-lime rounded-full hover:bg-[#a3c400] hover:text-white transition-all duration-300 font-bold cursor-pointer text-fluid-nav",
        className,
      )}
      {...btnProps}
    >
      {children}
    </button>
  )
}

export default Button
