'use client'

import { Button } from "@/components/ui/button"
import { Bookmark, User } from "lucide-react"

export const GoldActions = () => {
    return <div className=" w-full flex px-4 gap-4 -mt-2">
        <Button size="lg" className=" flex-1 bg-[#0f121d] rounded-full"> <Bookmark /> Save </Button>
        <Button size="lg" className=" flex-1 bg-[#0f121d] rounded-full"> <User /> Connect </Button>
    </div>
}