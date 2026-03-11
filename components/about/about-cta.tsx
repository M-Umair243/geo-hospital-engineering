import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const AboutCta = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-slate-900 px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact Us
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Need hospital equipment or a custom quote?
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              Connect with Geo Hospital Engineering for product inquiries, bulk
              orders, and healthcare equipment solutions tailored to your needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
              >
                Contact Now
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
