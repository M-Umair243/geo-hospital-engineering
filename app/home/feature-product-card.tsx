"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type FeaturedProduct = {
  title: string;
  image: string;
  desc: string;
  href: string;
};

const featuredProducts: FeaturedProduct[] = [
  {
    title: "Flatwork Laundry",
    image: "/featured/img-01.jpg",
    desc: "We provide high-quality flatwork laundry with fresh, clean, and neatly finished linens. Fast, consistent, and trusted by leading hospitality brands.",
    href: "/products/flatwork-laundry",
  },
  {
    title: "Tumble Dry",
    image: "/featured/imga-02.jpg",
    desc: "Our Tumble Dry service ensures your clothes come out soft, fresh, and perfectly dried with gentle heat care. Fast, safe, and ideal for all fabric types.",
    href: "/products/tumble-dry",
  },
  {
    title: "Hydro Laundry",
    image: "/featured/img-03.jpg",
    desc: "We provide high-quality flatwork laundry with fresh, clean, and neatly finished linens. Fast, consistent, and trusted by leading hospitality brands.",
    href: "/products/hydro-laundry",
  },
  {
    title: "Uniform Press Laundry",
    image: "/featured/img-04.jpg",
    desc: "We provide high-quality flatwork laundry with fresh, clean, and neatly finished linens. Fast, consistent, and trusted by leading hospitality brands.",
    href: "/products/uniform-press-laundry",
  },
  {
    title: "Hospital Waste Incinerator",
    image: "/featured/img-05.jpg",
    desc: "Designed to handle various types of waste, including infectious, pathological, sharps, and pharmaceutical waste.",
    href: "/products/hospital-waste-incinerator",
  },
];

const FeaturedProductCards = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Featured Range
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              A selection of highlighted products and equipment designed to give
              visitors a quick overview of your top offerings.
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

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {featuredProducts.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="relative flex h-60 items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 to-cyan-50/40 p-6">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cyan-100/60 blur-2xl transition-all duration-300 group-hover:bg-cyan-200/70" />

                <Image
                  alt={product.title}
                  src={product.image}
                  width={320}
                  height={220}
                  className="relative z-10 h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {product.desc}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-cyan-700">
                  View Product
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductCards;
