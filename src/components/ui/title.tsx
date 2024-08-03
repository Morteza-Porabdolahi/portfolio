import { cn } from "@/lib/utils";

export default function Title({ className, text }: { className?: string, text: [string, string] }) {
  return (
    <h2 className={cn("text-3xl font-thin text-center mb-10", className)}>{text[0]} <b className="font-black">{text[1]}</b></h2>
  )
}

