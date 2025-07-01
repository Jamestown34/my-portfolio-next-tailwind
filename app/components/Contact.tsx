// app/components/Contact.tsx
import SectionHeader from './SectionHeader';
import ContactInfoContainer from './ContactInfoContainer';

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center items-center py-16 px-8">
      <SectionHeader
        p1="Get in Touch"
        title="Contact Me"
      />
      <div className="contact-info-upper-container flex flex-wrap justify-center rounded-3xl border border-gray-400 bg-bg-body2 my-8 p-2.5 w-full max-w-3xl">
        <ContactInfoContainer
          iconSrc="/images/email.png"
          altText="Email icon"
          href="mailto:chuksjames05@gmail.com"
          displayText="chuksjames05@gmail.com"
        />
        <ContactInfoContainer
          iconSrc="/images/linkedin.png"
          altText="LinkedIn icon"
          href="https://www.linkedin.com/in/atumonye-james-a81147267/"
          displayText="LinkedIn"
        />
      </div>
    </section>
  );
}
