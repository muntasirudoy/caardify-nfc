"use client";

import { LogOut } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface LogoutButtonProps {
  logout: () => Promise<void>;
}
export const LogoutButton = ({ logout }: LogoutButtonProps) => {
  return (
    <Button
      className=" w-full"
      onClick={async () => {
        await logout();
      }}
    >
      <LogOut />  Logout
    </Button>
  );
};
