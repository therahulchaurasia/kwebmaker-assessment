import Button from "./Button"
import { SectionHeading } from "./SectionHeading"

type Props = {
  headingText: string
  btnText: string
}

export default function SectionHeader({ headingText, btnText }: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-start gap-4 max-w-2xl">
        <SectionHeading
          title={headingText}
          textclassName="text-black font-black"
          dotclassName="bg-brand-lime"
        />
        <p className=" fluid-paragraph">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>

      <Button className="justify-self-start self-start md:self-center md:justify-self-center bg-brand-lime text-white hover:bg-brand-navy hover:text-white transition-colors rounded-full font-semibold">
        {btnText}
      </Button>
    </div>
  )
}
