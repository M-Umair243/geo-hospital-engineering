import React from "react";

const AboutMissionVision = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Our Mission
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Supporting healthcare with dependable solutions
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our mission is to provide reliable hospital instruments, furniture,
            and engineering solutions that help healthcare facilities operate
            more effectively, safely, and professionally. We aim to support
            patient care, improve workflow, and deliver products that meet the
            day-to-day demands of medical environments.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Our Vision
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Building better healthcare environments
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our vision is to become a leading name in hospital engineering and
            medical support solutions by offering quality-driven products,
            excellent service, and practical solutions for evolving healthcare
            needs. We aim to contribute to better medical environments through
            trust, consistency, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
