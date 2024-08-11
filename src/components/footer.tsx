import { Github, Heart, Linkedin } from "lucide-react";
import Section from "./ui/section";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mt-5">
      <Section>
        <p className="flex items-center justify-center gap-2 text-gray-400">
          {t.rich("description", {
            i: () => <Heart className="size-5 fill-red-800 stroke-red-800" />,
          })}
        </p>
        <div className="my-8 flex flex-wrap items-center justify-center gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/morteza-porabdolahi-2ba76a226/"
          >
            <Linkedin className="transition-colors hover:text-amber-600" />
          </a>
          <a
            className="text-gray-500 underline hover:no-underline"
            href="https://github.com/Morteza-Porabdolahi"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="text-white transition-colors hover:text-amber-600" />
          </a>
        </div>
      </Section>
    </footer>
  );
}
