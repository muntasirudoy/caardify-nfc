import { Button } from "@/components/ui/button"
import { HeartIcon, SmartphoneIcon } from "lucide-react"

export const Promise = () => {
    return (<>

        <section className="py-32 px-4 bg-gradient-to-b from-background to-secondary/20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="max-w-3xl mx-auto fade-in">
                    <HeartIcon className="h-16 w-16 mx-auto text-primary mb-8 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 font-secondary">Our Promise to You</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        At Caardify, you&apos;re more than just a customer—you&apos;re part of a community that values progress, creativity, and the environment. Together, we&apos;re building a future where technology connects people, ideas, and opportunities like never before.
                    </p>
                    <Button size="lg" className="text-lg group hover:scale-105 transition-transform">
                        Join Our Community
                        <SmartphoneIcon className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>

    </>)
}