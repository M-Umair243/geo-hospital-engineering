import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import ContactFormSection from "@/components/contact/contact-form-section";
import ContactMap from "@/components/contact/contact-map";
import ContactFaq from "@/components/contact/contact-faq";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
      <ContactFaq />
    </main>
  );
}
