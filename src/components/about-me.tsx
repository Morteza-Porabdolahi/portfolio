import Image from "next/image";
import { useTranslations } from "next-intl";

import Section from "./ui/section";
import Title from "./ui/title";
import FeaturedSkills from "./featured-skills";
import AboutButtons from "./about-buttons";

import img from "@/../public/morteza.jpg";

export default function AboutMe() {
  const t = useTranslations("About");

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
            <Title
              className="sm:mb-4"
              text={[t("title.normal-part"), t("title.bold-part")]}
            />
            <p className="text-center text-gray-500">
              {t.rich("description", {
                span: (chunks) => <span className="text-3xl">{chunks}</span>,
              })}
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
