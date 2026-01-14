import Image from "next/image"

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/hero-poster.jpg"
          alt="Background Texture"
          fill
          priority={true}
          fetchPriority="high"
          loading="eager"
          className="object-cover opacity-100"
        />
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-100"
      >
        <source src="/assets/hero/hero-bg.webm" type="video/webm" />
        <source src="/assets/hero/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-20 bg-black/40" />
    </div>
  )
}
