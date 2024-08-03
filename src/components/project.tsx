import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

import { ProjectType } from "@/lib/types";


export default function Project({ project }: { project: ProjectType }) {
  return (
    <Card className="group w-full project-media">
      <CardHeader>
        <Image className="h-64 transition-all object-cover group-hover:scale-105 rounded" width={400} height={400} src={project.image} alt={project.name} />
      </CardHeader>
      <CardFooter className="flex flex-col gap-4 items-center" >
        <CardTitle>
          <a href={project.url} target="_blank" rel="noreferrer" className="underline min-[490px]:text-lg md:text-2xl hover:no-underline">{project.name}</a>
        </CardTitle>
        <CardDescription className="gap-5 text-center h-40 flex flex-col justify-between">
          <span className="block">
            {project.description}
          </span>
          <a target="_blank" rel="noreferrer" className="underline hover:no-underline" href={project.source_code_url}>Source code</a>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

