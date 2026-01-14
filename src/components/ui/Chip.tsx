import { cn } from "@/lib/utils"

interface ChipProps {
  label: string
  variant?: "white" | "lime"
  className?: string
}

export default function Chip({
  label,
  variant = "white",
  className,
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full fluid-paragraph font-light tracking-wide bg-brand-lime text-black",
        variant === "white" && " md:bg-white text-black",
        className,
      )}
    >
      {label}
    </span>
  )
}
