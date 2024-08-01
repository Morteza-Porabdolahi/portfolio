"use client"

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    if (window.scrollY >= 20) setIsActive(true)
    else setIsActive(false)
  }

  const handleResize = () => {
    if (window.innerWidth >= 640) setIsOpen(true)
    else setIsOpen(false);
  }

  useEffect(() => {
    handleResize();
    handleActive();

    window.addEventListener('scroll', handleActive)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleActive)
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="h-0 fixed z-10 top-0 left-0 right-0">
      <div className="bg-foreground shadow-md shadow-gray-600 p-4 sm:hidden">
        <Bars3Icon onClick={() => setIsOpen(o => !o)} className="size-8 stroke-background cursor-pointer" />
      </div>
      <ul className={`${isActive ? 'sm:bg-foreground sm:text-background shadow-md shadow-gray-600' : 'sm:text-foreground sm:bg-transparent'} flex flex-col sm:flex-row gap-7 uppercase bg-foreground origin-top-left [transition:transform_500ms,border-radius_900ms,background-color_200ms] text-background pl-8 pb-8 pt-3 sm:pt-8 sm:justify-center sm:pl-0 sm:[transition:transform_500ms,border-radius_900ms,background-color_0s] sm:gap-9 ${isOpen ? 'scale-1 rounded-none' : 'scale-0 [border-bottom-right-radius:30rem]'}`}>
        <li className={`transition-[opacity] delay-300 ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
          <Link href="#header" className="nav-link">Home</Link>
        </li>
        <li className={`transition-[opacity] [transition-delay:340ms] ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
          <Link href="#projects" className="nav-link">Projects</Link>
        </li>
        <li className={`transition-[opacity] [transition-delay:420ms] ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
          <Link href="#about" className="nav-link">About</Link>
        </li>
        <li className={`transition-[opacity] [transition-delay:460ms] ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
          <Link href="#contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

