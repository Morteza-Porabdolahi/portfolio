import { cn } from "@/lib/utils";

export default function FeaturedSkills({ className, ...props }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-7 mt-10", className)} {...props}>
      <span className="block text-gray-400 text-xl min-[865px]:mb-6 text-center"><b>Featured</b> Skills</span>
      <ul className="flex gap-6 text-gray-500 list-inside flex-wrap list-disc sm:justify-center">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SASS</li>
        <li>TailwindCSS</li>
        <li>Git</li>
        <li>Responsive Design</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Nextjs</li>
      </ul>
    </div>
  )
}

