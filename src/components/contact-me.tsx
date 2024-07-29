import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";
import Section from "./ui/section";
import Title from "./ui/title";

export default function ContactMe() {
  return (
    <div id="contact">
      <Section>
        <Title text={['Get', 'In Touch']} />
        <ContactForm />
        <ContactDetails />
      </Section>
    </div>
  )
}

