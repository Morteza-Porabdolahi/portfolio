import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import MainNav from "@/components/main-nav";
import Projects from "@/components/projects";

export default function HomePage() {
  return (
    <>
      <header className="bg-[url('/morteza.jpg')] bg-no-repeat bg-cover bg-center px-5 flex flex-col gap-8 justify-center items-center min-h-dvh" id="header">
        <MainNav />
        <h1 className="text-4xl text-center font-thin flex flex-col gap-2 items-center">
          Hello I&apos;m <b className="text-3xl font-black">Morteza Porabdolahi</b>
        </h1>
        <p className="uppercase tracking-widest text-center">and this is my portfolio</p>
      </header>
      <Projects />
      <AboutMe />
      <ContactMe />
    </>
  );
}
