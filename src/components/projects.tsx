import Project from "./project";
import Section from "./ui/section";
import Title from "./ui/title";

import { Locale, ProjectType } from "@/lib/types";

export default async function Projects({ lang }: { lang: Locale }) {
  const projects: ProjectType[] = (await import(`../data/data-${lang}.json`))
    .default;

  return (
    <div id="projects">
      <Section>
        <Title text={["Featured", "Projects"]} />
        <div className="flex flex-wrap justify-between gap-6">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
