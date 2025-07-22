"use client";

import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
// import { useState } from "react";

// import { Product } from "@/actions/schema/product";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
// import { useFetch } from "@/hooks/use-fetch";
import Image from "next/image";
// import { useQuery } from "react-query";
import { AuthButton } from "./auth-button";
import { DialogTitle } from "../ui/dialog";

export default function Header() {
  // const [products, setProducts] = useState([]);
  // const { fetchData } = useFetch();

  // const productQuary = useQuery("products", () => fetchData("/products"), {
  //   onSuccess: ({ data }) => {
  //     console.log(data);

  //     setProducts(data);
  //   },
  // });
  // const user = getAuthenticatedUser()

  // console.log(user);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Corporate", href: "/corporate" },
    { label: "Company", href: "/company" },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faq" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [_active, setActive] = React.useState<string | null>(null);
  return (
    <header className="sticky  top-0 z-50 w-full border-b bg-black py-2">
      <div className="container  mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logos/w-icon.png" alt="logo" width={40} height={40} />
          <span className="text-lg md:text-2xl font-bold font-primary text-white">
            Caardify
          </span>
        </Link>
        {/* desktop menu */}
        <div className=" hidden lg:block lg:ml-10">
          <Menu setActive={setActive}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.href}
                setActive={setActive}
                active=""
                item={item.label}
                link={item.href}
              />
            ))}
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        {/* <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className=" lg:hidden  bg-white">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="block lg:hidden"> <AuthButton /></div>
          </SheetContent>
        </Sheet> */}

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-white text-black"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] p-6 bg-white"
          >
            <div className="flex flex-col h-full justify-between">
              {/* NAVIGATION SECTION */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Navigation
                </h3>
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* FOOTER SECTION */}
              <div className="pt-6 border-t mt-6">
                <AuthButton />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:block">
          {" "}
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
