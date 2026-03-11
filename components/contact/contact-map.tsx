const ContactMap = () => {
  return (
    <section className="py-16">
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="mb-8 max-w-2xl">
          {" "}
          <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {" "}
            Our Location{" "}
          </span>{" "}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {" "}
            Visit our office and factory{" "}
          </h2>{" "}
          <p className="mt-4 text-base leading-8 text-slate-600">
            {" "}
            You can visit Geo Hospital Engineering for product discussions,
            project inquiries, and healthcare equipment solutions.{" "}
          </p>{" "}
        </div>{" "}
        <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-sm">
          {" "}
          <div className="flex h-[420px] items-center justify-center text-center text-slate-500">
            {" "}
            <div className="max-w-md px-6">
              {" "}
              <h3 className="text-xl font-semibold text-slate-900">
                {" "}
                Google Map Embed Placeholder{" "}
              </h3>{" "}
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {" "}
                Replace this section with your Google Maps iframe or map embed
                for:{" "}
              </p>{" "}
              <p className="mt-2 font-medium text-slate-800">
                {" "}
                243 RB Roshanwali Jhal, Faisalabad, Pakistan{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default ContactMap;
