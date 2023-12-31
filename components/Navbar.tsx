"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import web_logo from "../app/assets/logo.png";
import Image from "next/image";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  {
    name: "Teens",
    href: "/Teens",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <div className="overflow-hidden rounded-lg md:h-[60px] h-[30px]">
            <Image
              src={web_logo}
              alt={"wellah.in"}
              height={60}
              className="h-full w-full object-cover object-center cursor-pointer bg-white"
              width={100}
              priority
            />
          </div>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((item, idx) => (
            <div key={idx}>
              {pathname === item.href ? (
                <Link
                  href={item.href}
                  className="text-lg font-semibold text-primary"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant="outline"
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-16 sm:w-16 md:w-20 md:h-20 rounded-none"
            onClick={handleCartClick}
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
