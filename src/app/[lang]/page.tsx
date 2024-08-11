import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import { Locale } from "@/lib/types";

export default function HomePage({
  params,
}: Readonly<{ params: { lang: Locale } }>) {
  return (
    <>
      <Header />
      <main>
        <Projects lang={params.lang} />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
