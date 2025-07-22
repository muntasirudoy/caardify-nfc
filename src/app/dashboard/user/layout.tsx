import { SidebarProvider } from "@/components/ui/shadcn/sidebar";

import React from "react";
import { getAuthenticatedUser } from "../../../actions/authenticated";
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/layouts/sidebar";
import { DashboardHeader } from "@/components/layouts/dashboard-header";

const UserDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect("/auth/login");
  }
  // if (user.role !== "customer") {
  //   redirect("/");
  // }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <DashboardHeader />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default UserDashboardLayout;
