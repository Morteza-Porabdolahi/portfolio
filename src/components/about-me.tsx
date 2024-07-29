import Image from "next/image";

import Section from "./ui/section";
import Title from "./ui/title";
import img from '@/../public/morteza.jpg'
import { Button } from "./ui/button";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div id="about">
      <Section>
        <Image placeholder="blur" src={img} alt="Image of morteza's face" className="mb-10 rounded-xl" />
        <Title text={["About", "Me"]} />
        <p className="text-gray-500 text-center"><span className="text-3xl">19</span> year old teen looking for new opportunities to embrace new challenges along the way. A Front-End developer who&apos;s in love with developing better looking websites and willing to write simple and optimized code :)</p>
        <div className="flex flex-col gap-7 mt-10">
          <span className="block text-gray-400 text-xl text-center"><b>Featured</b> Skills</span>
          <ul className="flex gap-6 text-gray-500 list-inside flex-wrap list-disc">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>TailwindCSS</li>
            <li>Git</li>
            <li>Responsive Design</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Nextjs</li>
          </ul>
        </div>
        <div className="flex gap-2 mt-12">
          <Button className="uppercase hover:bg-amber-600" size="sm" variant="outline" asChild>
            <Link href="#contact">hire me</Link>
          </Button>
          <Button className="uppercase" size="sm" variant="secondary" asChild>
            <Link href="">download cv</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}

