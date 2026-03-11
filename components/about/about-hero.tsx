import React from "react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-slate-50 via-white to-cyan-50/40 py-20">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
          About Us
        </span>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Trusted Hospital Furniture, Medical Equipment & Engineering Solutions
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Geo Hospital Engineering is committed to supplying reliable hospital
          instruments, medical furniture, and healthcare equipment designed to
          support safer, more efficient, and professional medical environments.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
