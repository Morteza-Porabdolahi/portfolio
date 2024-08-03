import Project from "./project";
import Section from "./ui/section";
import Title from "./ui/title";
import projects from '../data/data.json'

export default function Projects() {
  return (
    <div id="projects">
      <Section>
        <Title text={["Featured", "Projects"]} />
        <div className="flex flex-wrap gap-6 justify-between">
          {
            projects.map(({ id, ...project }) => (
              <Project key={id} project={project}/>
            ))
          }
        </div>
      </Section>
    </div>
  )
}

