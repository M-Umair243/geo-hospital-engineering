import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { productsData } from "@/data/products-data";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about-us" },
  { title: "Products", href: "/products" },
  { title: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative mt-16 overflow-hidden bg-slate-950 text-slate-200">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1.2fr_0.9fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500 text-sm font-bold text-white shadow-lg">
                GH
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-white">
                  Geo Hospital Engineering
                </h2>
                <p className="text-sm text-slate-400">
                  Hospital Instruments & Engineering Solutions
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Supplying reliable hospital furniture, medical equipment, and
              engineering solutions with a focus on quality, durability, and
              practical healthcare use.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                <div>
                  <p className="font-medium text-white">
                    Head Office / Factory
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    243 RB Roshanwali Jhal Faisalabad Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-cyan-400" />
                <p className="text-sm text-slate-400">041-2344567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-cyan-400" />
                <p className="text-sm text-slate-400">
                  geohospitalengineering.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {productsData.map((category) => (
                <li key={category.id}>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: category.id },
                    }}
                    className="group inline-flex items-start gap-2 text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Get in Touch
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                Need a custom quote?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Contact us for hospital equipment inquiries, bulk orders, and
                project-based engineering solutions.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Geo Hospital Engineering. All rights reserved.</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-cyan-400"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
