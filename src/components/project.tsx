import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { ProjectType } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function Project({ project }: { project: ProjectType }) {
  const t = useTranslations("Projects");

  return (
    <Card className="project-media group w-full">
      <CardHeader>
        <Image
          className="h-64 rounded object-cover transition-all group-hover:scale-105"
          width={400}
          height={400}
          src={project.image}
          alt={project.name}
        />
      </CardHeader>
      <CardFooter className="flex flex-col items-center gap-6">
        <CardTitle>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline min-[490px]:text-lg md:text-2xl"
          >
            {project.name}
          </a>
        </CardTitle>
        <CardDescription className="flex h-40 flex-col justify-between gap-5 text-center">
          <span className="block">{project.description}</span>
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline"
            href={project.source_code_url}
          >
            {t("source_code")}
          </a>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
