import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

import img from '../../public/p3.webp'


export default function Project() {
  return (
    <Card className="group w-full project-media">
      <CardHeader>
        <Image className="transition-all group-hover:scale-105 rounded shadow-sm shadow-foreground" src={img} alt="random image" placeholder="blur" />
      </CardHeader>
      <CardFooter className="flex flex-col gap-4 items-center" >
        <CardTitle>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="underline min-[490px]:text-lg md:text-2xl hover:no-underline">Project sample</a>
        </CardTitle>
        <CardDescription>Next js/ shadcnUI</CardDescription>
      </CardFooter>
    </Card>
  )
}

