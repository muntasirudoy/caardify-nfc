import { Banknote, Code, Lightbulb, Zap } from 'lucide-react';
import React from 'react';



function VerticalTimeline() {
    return (
        <div className=" w-full  text-white py-16 px-4">
            <div className=" max-w-7xl mx-auto space-y-20">
                <h1 className="text-5xl font-secondary font-bold text-center  text-gray-600  bg-clip-text ">
                    The Journey Behind Caardify
                </h1>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
                    <JourneyItem
                        title="The Idea"
                        description="Realized the need for a smarter way to share information and reduce paper waste from traditional business cards."
                        icon={<Lightbulb className="w-8 h-8" />}
                        position="left"
                    />
                    <JourneyItem
                        title="The Solution"
                        description="Discovered NFC technology as the perfect solution for easier and sustainable networking."
                        icon={<Zap className="w-8 h-8" />}
                        position="right"
                    />
                    <JourneyItem
                        title="The Funding"
                        description="Used an investment from my sister, Plabi, to kickstart the business."
                        icon={<Banknote className="w-8 h-8" />}
                        position="left"
                    />
                    <JourneyItem
                        title="The Development"
                        description="Collaborated with my uncle, Muntasir Uday, a professional software developer, to build the Caardify website."
                        icon={<Code className="w-8 h-8" />}
                        position="right"
                    />
                </div>
            </div>
        </div>
    );
}


import type { ReactNode } from "react"

interface JourneyItemProps {
    title: string
    description: string
    icon: ReactNode
    position: "left" | "right"
}

function JourneyItem({ title, description, icon, position }: JourneyItemProps) {
    return (
        <div className={`flex ${position === "left" ? "flex-row" : "flex-row-reverse"} items-center w-full mb-16 `}>
            <div className={`w-5/12 ${position === "left" ? "text-right p-8 border-[1px] border-gray-400 rounded-2xl bg-white" : "text-left p-8 border-gray-400 rounded-2xl bg-white border-[1px]"}`}>
                <h3 className="text-2xl font-secondary font-bold mb-3  text-gray-600 bg-clip-text ">
                    {title}
                </h3>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="w-2/12 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-gray-700 rounded-full flex items-center justify-center z-10 shadow-lg shadow-primary/50">
                    {icon}
                </div>
            </div>
            <div className="w-5/12"></div>
        </div>
    )
}

export default VerticalTimeline;