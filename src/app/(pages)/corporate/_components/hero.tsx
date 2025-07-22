import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        // <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        //     <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-gradient"></div>
        //     <div className="z-10 text-center p-8">
        //         <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Elevate Your Networking</h1>
        //         <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
        //             Caardify offers businesses a smarter way to network with NFC-powered digital cards. Make every connection
        //             effortless, impactful, and eco-friendly.
        //         </p>
        //         <Button asChild size="lg" className="animate-bounce-slow">
        //             <a href="#features">
        //                 Discover More
        //                 <ArrowDown className="ml-2" size={20} />
        //             </a>
        //         </Button>
        //     </div>
        // </section>
        <div className=" w-full h-[calc(100vh-300px)] lg:h-[calc(100vh-70px)] bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.03] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>



            <div className="z-10 text-center p-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Elevate Your Networking</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
                    Caardify offers businesses a smarter way to network with NFC-powered digital cards. Make every connection
                    effortless, impactful, and eco-friendly.
                </p>
                <Button>
                    <a href="#features" className=" flex">
                        Discover More
                        <ArrowDown className="ml-2" size={20} />
                    </a>
                </Button>
            </div>

        </div>

    )
}

