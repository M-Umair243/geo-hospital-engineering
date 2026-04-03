const ContactMap = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Our Location
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Visit our office and factory
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            You can visit Geo Hospital Engineering for product discussions,
            project inquiries, and healthcare equipment solutions.
          </p>
        </div>

        <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3408.1438570027376!2d73.04783677560388!3d31.327399974302864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE5JzM4LjYiTiA3M8KwMDMnMDEuNSJF!5e0!3m2!1sen!2s!4v1773298149885!5m2!1sen!2s"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;