const ContactHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-slate-50 via-white to-cyan-50/40 py-20">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
          Contact Us
        </span>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Get in touch for hospital equipment, product inquiries, and quotations
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Contact Geo Hospital Engineering for hospital furniture, medical
          equipment, bulk orders, and healthcare engineering solutions tailored
          to your requirements.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
