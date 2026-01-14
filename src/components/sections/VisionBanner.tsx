import Image from "next/image"

export default function VisionBanner() {
  return (
    <section className="relative w-full mx-auto fluid-section-y overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/section-bg.webp"
          alt="Background Pattern"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <div className="fluid-section-x relative z-10 w-full flex justify-center items-center text-center md:items-start md:text-left">
        <div className="flex flex-col gap-[clamp(1.5rem,3vw,2rem)]  max-w-[clamp(30rem,60vw,80rem)]">
          <h3 className="font-semibold  fluid-visionbanner-heading">
            &ldquo;We have created an environment ideal for building craft. Our
            goal is to be recognized as the best tennis performance centre in
            the world.&rdquo;
          </h3>
          <div className="w-full h-px bg-black" />
          <div className="flex flex-col gap-1">
            <span className="font-bold fluid-visionbanner-subtext ">
              John Doe
            </span>
            <span className="fluid-paragraph text-black/70">Chairman</span>
          </div>
        </div>
      </div>
    </section>
  )
}
