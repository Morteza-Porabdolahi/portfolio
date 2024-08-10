import MainNav from "@/components/main-nav";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Header.Message");
  return (
    <header
      className="relative flex min-h-dvh flex-col items-center justify-center gap-8 px-5"
      id="header"
    >
      <Image
        src="/morteza.jpg"
        alt="Morteza's face"
        fill
        className="-z-10 object-cover"
      />
      <MainNav />
      <h1 className="flex flex-col items-center gap-2 text-center text-4xl font-thin lg:text-6xl">
        {t.rich("message", {
          name: (myName) => (
            <b className="text-3xl font-black lg:text-5xl">{myName}</b>
          ),
        })}
      </h1>
      <p className="text-center uppercase tracking-widest lg:text-lg">
        {t("description")}
      </p>
    </header>
  );
}
