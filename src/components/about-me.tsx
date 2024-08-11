import Image from "next/image";

import Section from "./ui/section";
import Title from "./ui/title";
import img from "@/../public/morteza.jpg";
import FeaturedSkills from "./featured-skills";
import AboutButtons from "./about-buttons";

export default function AboutMe() {
  return (
    <div id="about">
      <Section>
        <div className="sm:flex sm:gap-6 md:items-center">
          <Image
            placeholder="blur"
            src={img}
            alt="Image of morteza's face"
            className="mb-10 rounded-xl sm:mb-0 sm:w-64 md:w-96"
          />
          <div className="sm:py-3">
            <Title className="sm:mb-4" text={["About", "Me"]} />
            <p className="text-center text-gray-500">
              <span className="text-3xl">19</span> year old teen looking for new
              opportunities to embrace new challenges along the way. A Front-End
              developer who&apos;s in love with developing better looking
              websites and willing to write simple and optimized code :)
            </p>
            <FeaturedSkills className="hidden min-[865px]:block" />
            <AboutButtons className="hidden lg:flex" />
          </div>
        </div>
        <div>
          <FeaturedSkills className="min-[865px]:hidden" />
          <AboutButtons className="lg:hidden" />
        </div>
      </Section>
    </div>
  );
}
