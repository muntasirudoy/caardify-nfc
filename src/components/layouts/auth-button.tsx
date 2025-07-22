import { ArrowDown } from "lucide-react";
import { useAuth } from "../providers/auth.provider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { logoutAction } from "@/actions/auth";
export const AuthButton = () => {
    const { user } = useAuth()

    if (user?.name) {
        return <div className="cursor-pointer">
            <div className=" flex items-center gap-2 duration-300 hover:bg-white/10 py-2 h-[45px] rounded-lg ">
                <Popover >
                    <PopoverTrigger asChild className=" bg-black lg:bg-transparent " >
                        <Button className="bg-none p-7 lg:p-2">
                            <Avatar className="h-[30px] w-[30px] cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="h-fit cursor-pointer text-left">
                                <Label className="text-white cursor-pointer font-secondary h-fit leading-[14px] block  p-0 text-[16px] m-0">{user.name}</Label>
                                <Label className="text-gray-300 cursor-pointer text-[12px] block leading-[12px] h-fit p-0  m-0">Personale</Label>
                            </div>
                            <ArrowDown size={16} className=" text-white ml-5" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[220px] mt-2 bg-black border-gray-600 border-[1px] rou">
                        <div className="px-2 py-1.5 text-sm font-normal ">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none text-gray-100">{user.name}</p>
                                <p className="text-xs leading-none text-gray-100">{user.email}</p>
                            </div>
                            <Separator className=" bg-gray-600 mt-3" />
                            <div role="group" className=" text-gray-100 py-2">
                                <Link href={`/u/${user.name}`}>
                                    <p className="py-1.5 hover:bg-white/10 rounded-md duration-300 cursor-pointer px-3">Profile</p>
                                </Link>
                                <Link href="/dashboard/user">
                                    <p className="py-1.5 hover:bg-white/10 rounded-md duration-300 cursor-pointer px-3">Dashboard</p>
                                </Link>
                                {user.role == 'admin' &&
                                    <Link href="/dashboard/admin">
                                        <p className="py-1.5 hover:bg-white/10 rounded-md duration-300 cursor-pointer px-3">Admin</p>
                                    </Link>
                                }
                                {/* <p className="py-1.5 hover:bg-white/10 rounded-md duration-300 cursor-pointer px-3">Billing</p> */}
                            </div>
                            <Separator className=" bg-gray-600" />
                            <p className="py-1.5 hover:bg-white/10 rounded-md duration-300 cursor-pointer px-3 text-gray-200 mt-3" onClick={logoutAction} > Logout</p>

                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    }
    return <> <div className="ml-auto flex items-center space-x-4">
        <Link href={'/auth/login'}>
            <Button variant="outline">

                Login
            </Button>
        </Link>
        <Link href="/auth/signup">
            <Button>Signup</Button>
        </Link>
    </div> </>
}

