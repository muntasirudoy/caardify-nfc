import React from "react";
import { SidebarDemo } from "./_components/_ui/sidebar/admin-sidebar";
import { getAuthenticatedUser } from "../../../actions/authenticated";
import { redirect } from "next/navigation";

// function AdminDashboardHeader() {
//   return (
//     <div className=" bg-black py-5 flex justify-between">
//       <div>logo</div>
//       <div>menu</div>
//     </div>
//   );
// }
// function AdminDashboardFooter() {
//   return <></>;
// }
const AdminDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect("/auth/login");
  }
  if (user.role !== "admin") {
    redirect("/");
  }

  return (
    <>
      <SidebarDemo>{children}</SidebarDemo>
    </>
  );
};

export default AdminDashboardLayout;
