import Project from "./project";
import Section from "./ui/section";
import Title from "./ui/title";

export default function Projects() {
  return (
    <div id="projects">
      <Section>
        <Title text={["Featured", "Projects"]} />
        <div className="flex flex-wrap gap-6 justify-between">
          {
            Array.from({ length: 4 }).map((_, i) => ({ id: i + 1 })).map(({ id }) => (
              <Project key={id} />
            ))
          }
        </div>
      </Section>
    </div>
  )
}

