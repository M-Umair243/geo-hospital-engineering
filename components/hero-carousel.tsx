"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Stethoscope, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "/hero/hero-1.jpg",
    title: "Reliable Hospital Instruments & Engineering Solutions",
    description:
      "High-quality medical tools, hospital equipment, and engineering support designed for modern healthcare environments.",
  },
  {
    id: 2,
    image: "/hero/hero-2.jpg",
    title: "Precision Tools Built for Clinical Excellence",
    description:
      "Explore durable surgical, diagnostic, and patient-care products for hospitals, clinics, and healthcare facilities.",
  },
  {
    id: 3,
    image: "/hero/hero-3.jpg",
    title: "Trusted Products for Safer Medical Environments",
    description:
      "Professional-grade instruments with dependable quality, clean design, and performance-focused reliability.",
  },
  {
    id: 4,
    image: "/hero/hero-4.jpg",
    title: "Supporting Healthcare with Modern Equipment",
    description:
      "From consultation to supply, we help healthcare spaces stay equipped with the right instruments and systems.",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[78vh] min-h-[560px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-900/45 to-slate-900/10" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

        <motion.div
          className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              key={activeSlide.id + "-content"}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="max-w-3xl"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md"
              >
                Trusted Medical Equipment Supplier
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {activeSlide.title}
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg"
              >
                {activeSlide.description}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-cyan-500 px-6 text-base font-semibold text-white hover:bg-cyan-400"
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2"
                  >
                    Explore Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/30 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-200"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-cyan-400" />
                  Quality Assured
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-cyan-400" />
                  Clinical Grade
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-cyan-400" />
                  Fast Delivery
                </div>
              </motion.div>
            </motion.div>

            <div className="relative hidden lg:flex lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid w-full max-w-md gap-4"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl"
                >
                  <p className="text-sm text-slate-200">Featured Category</p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Hospital Instruments
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Durable, precision-focused tools for surgical, diagnostic,
                    and patient-care use.
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-xl backdrop-blur-xl"
                  >
                    <p className="text-3xl font-bold">100+</p>
                    <p className="mt-1 text-sm text-slate-200">
                      Medical Products
                    </p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 6.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-xl backdrop-blur-xl"
                  >
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="mt-1 text-sm text-slate-200">
                      Support & Service
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/45 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
