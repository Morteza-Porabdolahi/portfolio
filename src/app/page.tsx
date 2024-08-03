import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
