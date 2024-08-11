"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainNav() {
  const t = useTranslations("Header.Navbar");

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    if (window.scrollY >= 20) setIsActive(true);
    else setIsActive(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 640) setIsOpen(true);
    else setIsOpen(false);
  };

  useEffect(() => {
    handleResize();
    handleActive();

    window.addEventListener("scroll", handleActive);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleActive);
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 h-0">
      <div className="bg-foreground p-4 shadow-md shadow-gray-600 sm:hidden">
        <Bars3Icon
          onClick={() => setIsOpen((o) => !o)}
          className="size-8 cursor-pointer stroke-background"
        />
      </div>
      <ul
        className={`${isActive ? "shadow-md shadow-gray-600 sm:bg-foreground sm:text-background" : "sm:bg-transparent sm:text-foreground"} flex flex-col gap-7 bg-foreground pb-8 pt-3 uppercase text-background [transition:transform_500ms,border-radius_900ms,background-color_200ms] sm:flex-row sm:justify-center sm:gap-9 sm:pl-0 sm:pt-8 sm:[transition:transform_500ms,border-radius_900ms,background-color_0s] ltr:origin-top-left ltr:pl-8 rtl:origin-top-right rtl:pr-8 ${isOpen ? "scale-1 rounded-none" : "scale-0 ltr:[border-bottom-right-radius:30rem] rtl:[border-bottom-left-radius:30rem]"}`}
      >
        <li
          className={`transition-[opacity] delay-300 ${isOpen ? "opacity-1" : "opacity-0"}`}
        >
          <Link href="#header" className="nav-link">
            {t("home")}
          </Link>
        </li>
        <li
          className={`transition-[opacity] [transition-delay:340ms] ${isOpen ? "opacity-1" : "opacity-0"}`}
        >
          <Link href="#projects" className="nav-link">
            {t("projects")}
          </Link>
        </li>
        <li
          className={`transition-[opacity] [transition-delay:420ms] ${isOpen ? "opacity-1" : "opacity-0"}`}
        >
          <Link href="#about" className="nav-link">
            {t("about")}
          </Link>
        </li>
        <li
          className={`transition-[opacity] [transition-delay:460ms] ${isOpen ? "opacity-1" : "opacity-0"}`}
        >
          <Link href="#contact" className="nav-link">
            {t("contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
