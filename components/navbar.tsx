import { MenuIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
type NavigationItem = {
  title: string;
  href: string;
}[];
const navigationData: NavigationItem = [
  {
    title: "Home",
    href: "/home",
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
  return (
    <header className="bg-background sticky top-0 z-50 shadow border-b border-gray-200">
      <div className="w-full flex items-center justify-between gap-8 px-4 py-3 sm:px-6">
        <h2>Geo Hospital Engineering</h2>
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          {navigationData.map((nav, index) => (
            <div key={index} className="hover:text-primary max-md:hidden">
              <Link href={nav.href}>{nav.title}</Link>
            </div>
          ))}
        </div>
        <Button className="max-md:hidden">Get Quotes</Button>
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <Button>Get Quotes</Button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
