import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "What types of products do you supply?",
    answer:
      "We supply hospital beds, ward furniture, patient transportation equipment, general purpose trolleys, clinical furniture, storage cabinets, obstetric furniture, paediatric furniture, emergency crash trolleys, and electro medical equipment.",
  },
  {
    question: "Can I request a bulk order quotation?",
    answer:
      "Yes, you can contact us for bulk orders, project-based requirements, and customized quotations according to your needs.",
  },
  {
    question: "Do you help hospitals and clinics choose products?",
    answer:
      "Yes, we can guide clients in selecting suitable hospital equipment and furniture based on their requirements and usage needs.",
  },
  {
    question: "How can I contact your team quickly?",
    answer:
      "You can reach us through the contact form, phone number, or email listed on this page for product and quotation inquiries.",
  },
];
const ContactFaq = () => {
  return (
    <section className="bg-slate-50 py-16">
      {" "}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center">
          {" "}
          <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {" "}
            FAQs{" "}
          </span>{" "}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {" "}
            Frequently asked questions{" "}
          </h2>{" "}
          <p className="mt-4 text-base leading-8 text-slate-600">
            {" "}
            Here are some common questions about our products and services.{" "}
          </p>{" "}
        </div>{" "}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          {" "}
          <Accordion type="single" collapsible className="w-full">
            {" "}
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-slate-200"
              >
                {" "}
                <AccordionTrigger className="text-left text-base font-semibold text-slate-900">
                  {" "}
                  {faq.question}{" "}
                </AccordionTrigger>{" "}
                <AccordionContent className="text-sm leading-7 text-slate-600">
                  {" "}
                  {faq.answer}{" "}
                </AccordionContent>{" "}
              </AccordionItem>
            ))}{" "}
          </Accordion>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default ContactFaq;
