import React from "react";

const AboutIntro = () => {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Who We Are
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Geo Hospital Engineering is a trusted provider of hospital
            instruments, medical furniture, and healthcare support solutions. We
            serve hospitals, clinics, laboratories, and medical institutions
            with products that are practical, durable, and aligned with real
            healthcare needs.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We understand that healthcare spaces require equipment that is safe,
            efficient, and built for daily use. That is why we focus on quality,
            functionality, and long-term reliability in every category we offer.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">
            What We Stand For
          </h3>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h4 className="font-semibold text-slate-900">Quality</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Durable and dependable products for hospitals and healthcare
                facilities.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h4 className="font-semibold text-slate-900">Reliability</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Practical solutions designed for daily medical and clinical use.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h4 className="font-semibold text-slate-900">Commitment</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Long-term service and support for hospitals, clinics, and
                business clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
