import MainNav from "@/components/main-nav";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header.Message");
  return (
    <header
      className="flex min-h-dvh flex-col items-center justify-center gap-8 bg-[url('/morteza.jpg')] bg-cover bg-center bg-no-repeat px-5"
      id="header"
    >
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
