"use client";
import React from "react";

import { logoutAction } from "@/actions/auth";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/aceternity/sidebar";
import { cn } from "@/lib/utils";
import {
  IconArrowLeft,
  IconBrandProducthunt,
  IconBrandTabler,
  IconMenuOrder,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LogoutButton } from "../../../logout-button";
const links = [
  {
    label: "Dashboard",
    href: "/",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Orders",
    href: "/dashboard/admin/order",
    icon: (
      <IconMenuOrder className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Products",
    href: "/dashboard/admin/product",
    icon: (
      <IconBrandProducthunt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Categories",
    href: "/dashboard/admin/category",
    icon: (
      <IconBrandProducthunt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Customers",
    href: "/dashboard/admin/customer",
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];
export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [openMobile, setOpenMobile] = React.useState(false);

  // Detect screen size once on mount
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarProps = isMobile
    ? {
        open: openMobile,
        setOpen: setOpenMobile,
      }
    : {
        open: true,
        setOpen: undefined, // no toggle on desktop
      };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar {...sidebarProps}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex relative flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
            <div className=" absolute bottom-0 w-full">
              <LogoutButton logout={logoutAction} />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      <Dashboard>{children}</Dashboard>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex justify-center space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        <Image src="/logos/black.png" width={180} height={100} alt="logo" className="w-auto h-auto"  priority/>
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        {children}
      </div>
    </div>
  );
};
