import { Github, Heart, Linkedin } from "lucide-react";
import Section from "./ui/section";

export default function Footer() {
  return (
    <footer className="mt-5">
      <Section>
        <p className="gap-2 justify-center text-gray-400 flex items-center">
          <span>
            Made with
          </span>
          <Heart className="size-5 fill-red-800 stroke-red-800" />
          <span>
            by
          </span>
          <a className="text-gray-500 underline hover:no-underline" href="https://github.com/Morteza-Porabdolahi" target="_blank" rel="noreferrer">Morteza</a>
        </p>
        <div className="flex flex-wrap gap-4 my-5 items-center justify-center">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/morteza-porabdolahi-2ba76a226/">
            <Linkedin className="transition-colors hover:text-amber-600" />
          </a>
          <a className="text-gray-500 underline hover:no-underline" href="https://github.com/Morteza-Porabdolahi" target="_blank" rel="noreferrer">
            <Github className="text-white hover:text-amber-600 transition-colors" />
          </a>
        </div>
      </Section>
    </footer>
  )
}

