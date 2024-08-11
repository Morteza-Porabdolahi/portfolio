import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AboutButtons({
  className,
  ...props
}: {
  className?: string;
}) {
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
        <Link href="#contact">hire me</Link>
      </Button>
      <Button className="uppercase" size="sm" variant="secondary" asChild>
        <Link href="">download cv</Link>
      </Button>
    </div>
  );
}
