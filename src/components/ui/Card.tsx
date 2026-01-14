import { cn } from "@/lib/utils"
import Image from "next/image"

interface CardProps {
  id?: string | number
  title: string
  subtitle: string
  src: string
  variant?: "overlay" | "stacked"
  className?: string
  imageClassName?: string
  imageWrapperClassName?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function Card({
  title,
  subtitle,
  src,
  variant = "overlay",
  className,
  imageClassName,
  imageWrapperClassName,
  titleClassName,
  subtitleClassName,
}: CardProps) {
  return (
    <div className={cn("group flex flex-col gap-4", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl",
          imageWrapperClassName,
        )}
      >
        <Image
          src={src}
          alt={title}
          fill
          loading="lazy"
          priority={false}
          fetchPriority="low"
          className={cn(
            "object-cover object-top transition-transform duration-700 group-hover:scale-105",
            imageClassName,
          )}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {variant === "overlay" && (
          <>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 w-full p-[clamp(1.5rem,2vw,2rem)] flex flex-col items-center text-center z-20 gap-3">
              <h3
                className={cn(
                  "font-bold text-white fluid-heading-three",
                  titleClassName,
                )}
              >
                {title}
              </h3>
              <p
                className={cn(
                  "text-white/90 fluid-paragraph font-light",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            </div>
          </>
        )}
      </div>

      {variant === "stacked" && (
        <div className="flex flex-col items-start gap-3">
          <h3 className={cn("font-bold  fluid-heading-three", titleClassName)}>
            {title}
          </h3>
          <p
            className={cn(
              "font-light fluid-paragraph italic",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  )
}
