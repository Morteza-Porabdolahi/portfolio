import Project from "./project";
import Section from "./ui/section";

export default function Projects() {
  return (
    <div id="projects">
      <Section>
        <h2 className="text-3xl font-thin text-center mb-16">Featured <b className="font-black">Projects</b></h2>
        <div className="flex flex-col flex-wrap gap-8">
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

