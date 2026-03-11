"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavigationItem = {
  title: string;
  href: string;
};

const navigationData: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contacts",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl supports-backdrop-filter:bg-white/75">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-rfrom-transparent via-slate-900/70 to-transparent" />

      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-sm">
            GH
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Geo Hospital Engineering
            </h2>
            <p className="hidden text-xs text-slate-500 sm:block">
              Medical Instruments & Hospital Tools
            </p>
          </div>
        </Link>

        <nav className="hidden md:block">
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50/80 p-1 shadow-sm">
            {navigationData.map((nav) => {
              const isActive = pathname === nav.href;

              return (
                <Link
                  key={nav.href}
                  href={nav.href}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  {nav.title}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="h-11 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get Quotes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-xl border-slate-200 bg-white shadow-sm"
              >
                <MenuIcon className="h-5 w-5 text-slate-800" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-64 rounded-2xl border-slate-200 p-2 shadow-xl"
            >
              <DropdownMenuLabel className="px-3 py-2">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">
                    Geo Hospital Engineering
                  </span>
                  <span className="text-xs font-normal text-slate-500">
                    Navigation Menu
                  </span>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup className="space-y-1 p-1">
                {navigationData.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <DropdownMenuItem
                      key={item.href}
                      asChild
                      className={`rounded-xl px-3 py-3 focus:bg-slate-100 ${
                        isActive ? "bg-slate-100 text-slate-900" : ""
                      }`}
                    >
                      <Link
                        href={item.href}
                        className="flex w-full items-center justify-between text-sm font-medium"
                      >
                        {item.title}
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-slate-900" />
                        )}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <div className="p-2">
                <Button
                  asChild
                  className="h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Get Quotes
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
