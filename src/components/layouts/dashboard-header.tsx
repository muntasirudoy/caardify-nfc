"use client";
import { ArrowDown } from "lucide-react";
import { useAuth } from "../providers/auth.provider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { SidebarTrigger } from "../ui/shadcn/sidebar";

export const DashboardHeader = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <div className="w-full sticky  z-[50]  top-0 h-[70px] bg-gray-50 border-b-[1px] ">
        <div className=" h-full flex  items-center justify-between px-4">
          <div className="  w-[60px] md:w-[60px] md:invisible md:block">
            <SidebarTrigger />
          </div>
          <div className=" flex  items-center h-full  gap-2 duration-300 ">
            <Popover>
              <PopoverTrigger
                asChild
                className=" bg-transparent hover:bg-transparent border-none shadow-none"
              >
                <Button className="bg-none hover:none border-none">
                  <Avatar className="h-[30px] w-[30px] cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="h-fit cursor-pointer text-left">
                    <Label className="text-gray-700 cursor-pointer font-secondary h-fit leading-[14px] block  p-0 text-[16px] m-0">
                      {user.name}
                    </Label>
                    <Label className="text-gray-600 cursor-pointer text-[12px] block leading-[12px] h-fit p-0  m-0">
                      Personale
                    </Label>
                  </div>
                  <ArrowDown size={16} className=" text-white ml-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[220px] mt-2 bg-white border-gray-200 border-[1px] rou">
                <div className="px-2 py-1.5 text-sm font-semibold font-secondary ">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-700">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-gray-700">
                      {user.email}
                    </p>
                  </div>
                  <Separator className=" bg-gray-600 mt-3" />
                  <div role="group" className=" text-gray-700 py-2">
                    <p className="py-1.5 hover:bg-white/10 rounded-md duration-300 cursor-pointer px-3">
                      Home
                    </p>
                    {user.role == "admin" && (
                      <p className="py-1.5 hover:bg-white/10 rounded-md duration-300 cursor-pointer px-3">
                        <Link href="/dashboard/admin">Admin</Link>
                      </p>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    );
  } else {
    return "User not found";
  }
};
