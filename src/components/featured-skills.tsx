import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function FeaturedSkills({
  className,
  ...props
}: {
  className?: string;
}) {
  const t = useTranslations("About.Skills");

  return (
    <div className={cn("mt-10 flex flex-col gap-7", className)} {...props}>
      <span className="block text-center text-xl text-gray-400 min-[865px]:mb-6 rtl:flex rtl:flex-row-reverse rtl:justify-center rtl:gap-2">
        {t("title.normal-part")} {""}
        <b>{t("title.bold-part")}</b>
      </span>
      <ul className="flex list-inside list-disc flex-wrap gap-6 text-gray-500 sm:justify-center">
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
  );
}
