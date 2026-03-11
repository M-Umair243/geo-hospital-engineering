import React from "react";

const categories = [
  "Hospital Beds",
  "General Ward Furniture",
  "Patient Transportation",
  "General Purpose Trolleys",
  "Operation Theater Furniture",
  "Clinical Furniture",
  "Storage Cabinets",
  "Obstetric Furniture",
  "Paediatric Furniture",
  "Emergency Crash Trolleys",
  "Electro Medical Equipment",
];

const AboutCategories = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            What We Offer
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our product categories
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            We provide a broad range of hospital furniture, medical equipment,
            and healthcare support products designed for professional use.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCategories;
