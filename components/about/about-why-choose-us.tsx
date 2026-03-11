import React from "react";
import { BadgeCheck, Boxes, ShieldCheck, Users } from "lucide-react";

const reasons = [
  {
    title: "Quality-Focused",
    description:
      "We prioritize durable materials, practical design, and dependable performance.",
    icon: BadgeCheck,
  },
  {
    title: "Wide Product Range",
    description:
      "From hospital beds to electro-medical equipment, we offer complete healthcare solutions.",
    icon: Boxes,
  },
  {
    title: "Trusted Reliability",
    description:
      "Our products are selected to meet the real and demanding needs of medical environments.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Commitment",
    description:
      "We value trust, transparency, and long-term relationships with every client.",
    icon: Users,
  },
];

const AboutWhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for real healthcare needs
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            We focus on supplying healthcare institutions with products that are
            practical, durable, and trusted for continuous use.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
