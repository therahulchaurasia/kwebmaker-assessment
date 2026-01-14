import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  className?: string
  textclassName?: string
  dotclassName?: string
}

export function SectionHeading({
  title,
  className,
  textclassName,
  dotclassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("relative inline-block w-fit", className)}>
      <h2
        className={cn(
          "font-bold leading-tight tracking-tight",
          "text-[clamp(1.5rem,2.5vw,2.25rem)]",
          textclassName,
        )}
      >
        {title}
      </h2>
      <span
        className={cn(
          "absolute -top-2 -right-4 rounded-full",
          "w-2.5 h-2.5",
          dotclassName,
        )}
      />
    </div>
  )
}
