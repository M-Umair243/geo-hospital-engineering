"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bed,
  FlaskConical,
  HeartPulse,
  Monitor,
  Pill,
  Scissors,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { useId } from "react";

type ProductItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const productsData: ProductItem[] = [
  {
    title: "Hospital Beds",
    description: "Comfortable and durable beds for modern patient care.",
    href: "/products/hospital-beds",
    icon: Bed,
  },
  {
    title: "Diagnostic Tools",
    description: "Reliable tools for examination and routine diagnosis.",
    href: "/products/diagnostic-tools",
    icon: Stethoscope,
  },
  {
    title: "Surgical Instruments",
    description: "Precision instruments for safe and efficient procedures.",
    href: "/products/surgical-instruments",
    icon: Scissors,
  },
  {
    title: "Patient Monitoring",
    description: "Advanced monitoring solutions for critical observation.",
    href: "/products/patient-monitoring",
    icon: Monitor,
  },
  {
    title: "Emergency Care",
    description: "Fast-response tools designed for urgent care settings.",
    href: "/products/emergency-care",
    icon: HeartPulse,
  },
  {
    title: "Laboratory Equipment",
    description: "Essential tools for testing, research, and lab workflow.",
    href: "/products/laboratory-equipment",
    icon: FlaskConical,
  },
  {
    title: "Medical Consumables",
    description: "Daily-use products for hospital and clinic operations.",
    href: "/products/medical-consumables",
    icon: Syringe,
  },
  {
    title: "Pharmaceutical Support",
    description: "Product ranges that support safe medicine handling.",
    href: "/products/pharmaceutical-support",
    icon: Pill,
  },
];

const ProductsCards = () => {
  const id = useId(); // Ensure unique IDs for accessibility if needed in the future
  return (
    <section className="bg-linear-to-bbg-linear-to-b from-white to-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Product Categories
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore Our Medical Product Range
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Browse our core hospital instruments and equipment categories.
              This layout is static for now, but it is structured so you can
              easily convert it to dynamic data later.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700 hover:shadow-md"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
          {productsData.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={`${id}-${product.title}`} // Unique key using useId and product title
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-cyan-100/60 blur-2xl transition-all duration-300 group-hover:bg-cyan-200/70" />

                <div className="relative">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-600">
                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-cyan-700">
                    Explore Category
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsCards;
