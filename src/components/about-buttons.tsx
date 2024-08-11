import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutButtons({
  className,
  ...props
}: {
  className?: string;
}) {
  const t = useTranslations("About");

  return (
    <div
      className={cn("mt-12 flex gap-2 sm:justify-center", className)}
      {...props}
    >
      <Button
        className="uppercase hover:bg-amber-600"
        size="sm"
        variant="outline"
        asChild
      >
        <Link href="#contact">{t("hire_me")}</Link>
      </Button>
      <Button className="uppercase" size="sm" variant="secondary" asChild>
        <Link href="">{t("down_cv")}</Link>
      </Button>
    </div>
  );
}
