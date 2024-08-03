import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";
import Section from "./ui/section";

export default function ContactMe() {
  return (
    <div id="contact">
      <Section>
        <div className="md:flex md:gap-10">
          <ContactForm />
          <ContactDetails />
        </div>
      </Section>
    </div>
  )
}

