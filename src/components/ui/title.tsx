import { cn } from "@/lib/utils";

export default function Title({
  className,
  text,
}: {
  className?: string;
  text: [string, string];
}) {
  return (
    <h2
      className={cn(
        "mb-10 text-center text-3xl font-thin rtl:flex rtl:flex-row-reverse rtl:justify-center rtl:gap-3",
        className,
      )}
    >
      {text[0]} <b className="font-black">{text[1]}</b>
    </h2>
  );
}
