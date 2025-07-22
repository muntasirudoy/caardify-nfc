import { Button } from "@/components/ui/button";
import { HomeIcon, LeafIcon, Share2, SparklesIcon, Users, ZapIcon } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
    return <>
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            <div className="absolute inset-0 w-full">
                <Image src='/banner/mission.jpg' width={400} height={400} alt="banner" className="w-full opacity-5  h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/40" />
            <div className="max-w-6xl mx-auto text-center z-10 space-y-8">
                <div className="space-y-4 fade-in">
                    <h1 className="text-6xl font-primary md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-gray-500 to-gray-700 animate-gradient">
                        Connect Smarter
                    </h1>
                    <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        Transform your networking experience with Caardify&apos;s NFC business cards
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in">
                    <Button size="lg" className="text-lg group hover:scale-105 transition-transform">
                        Get Your Card
                        <ZapIcon className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg group hover:scale-105 transition-transform">
                        See How It Works
                        <SparklesIcon className="ml-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                    </Button>
                </div>
                <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto fade-in">
                    <StatsCard title="Users" value="1000+" icon={<Users className="h-6 w-6" />} />
                    <StatsCard title="Connections" value="5000+" icon={<Share2 className="h-6 w-6" />} />
                    <StatsCard title="Trees Saved" value="100+" icon={<LeafIcon className="h-6 w-6" />} />
                    <StatsCard title="Cities" value="10+" icon={<HomeIcon className="h-6 w-6" />} />
                </div>
            </div>
        </section>

    </>
}
function StatsCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
    return (
        <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {icon}
            </div>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-sm text-muted-foreground">{title}</div>
        </div>
    );
}