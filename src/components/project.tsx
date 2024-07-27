import Image from "next/image";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

import img from '../../public/p3.webp'


export default function Project() {
  return (
    <Card className="group">
      <CardHeader>
        <Image className="transition-all group-hover:scale-105 rounded shadow-sm shadow-foreground" src={img} alt="random image" placeholder="blur" />
      </CardHeader>
      <CardFooter className="flex flex-col gap-4 items-center" >
        <CardTitle>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="underline hover:no-underline">Project sample</a>
        </CardTitle>
        <CardDescription>Next js/ shadcnUI</CardDescription>
      </CardFooter>
    </Card>
  )
}

