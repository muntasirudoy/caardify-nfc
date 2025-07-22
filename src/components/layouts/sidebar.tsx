"use client";
import {
  Calendar,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
  X,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/shadcn/sidebar";
import Image from "next/image";
import { Button } from "../ui/button";
import { logoutAction } from "@/actions/auth";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "My Cards",
    url: "/dashboard/user/cards",
    icon: Inbox,
  },
  {
    title: "Orders",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Transections",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();
  return (
    <Sidebar
      collapsible="offcanvas"
      variant="sidebar"
      aria-labelledby="sidebar-label"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-5 ">
            {isMobile && (
              <button
                onClick={() => setOpenMobile(false)}
                className="absolute right-2 top-2 z-50 rounded-full p-1 text-muted-foreground hover:text-foreground focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            )}
            <Link href="/">
              <Image
                src="/logos/black.png"
                width="180"
                height="130"
                alt="logo"
                className="mx-auto w-auto h-auto"
                priority
              />
            </Link>

            <SidebarMenu className="mt-5 px-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-1">
                  <SidebarMenuButton
                    asChild
                    className=" text-[16px] font-secondary font-semibold h-[40px]"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={logoutAction}>
          {" "}
          <LogOut /> Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
