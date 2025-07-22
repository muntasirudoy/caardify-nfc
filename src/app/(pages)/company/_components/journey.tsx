
"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Journey() {


    const journeySteps = [
        {
            title: "The Spark",
            content:
                "Witnessing the inefficiency and waste of traditional business cards, I envisioned a smarter, more sustainable way to connect.",
            icon: "💡",
        },
        {
            title: "NFC Revolution",
            content:
                "Discovering NFC technology opened up a world of possibilities for seamless, eco-friendly networking solutions.",
            icon: "🔍",
        },
        {
            title: "Family Backing",
            content:
                "With unwavering support from my sister Plabi, I was able to transform my vision into a tangible business plan.",
            icon: "👨‍👩‍👧‍👦",
        },
        {
            title: "Tech Synergy",
            content:
                "Collaborating with my uncle, a software expert, we built Caardify to revolutionize how professionals connect.",
            icon: "💻",
        },
    ]

    return (
        <div className={`min-h-screen bg-red-400`}>
            <div className="bg-background text-foreground">
                <main className="container py-12">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4 font-secondary">The Caardify Story</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            From a simple idea to revolutionizing business networking in Bangladesh
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 h-1/2 top-[550px] w-[1px] bg-border transform -translate-x-1/2"></div>

                        <motion.div
                            className="relative z-10 bg-background rounded-full border-4 border-primary w-48 h-48 mx-auto mb-12 overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image
                                src="/"
                                alt="Plabon - Founder & CEO"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h2 className="text-4xl font-secondary font-bold mb-2">Plabon</h2>
                            <p className="text-xl text-muted-foreground mb-4">Founder & CEO</p>
                            <div className="flex justify-center gap-4 mb-6">
                                <Button variant="outline" size="sm">
                                    <Linkedin className="mr-2 h-4 w-4" />
                                    LinkedIn
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Twitter className="mr-2 h-4 w-4" />
                                    Twitter
                                </Button>
                            </div>
                            <p className="text-lg max-w-2xl mx-auto">
                                &quot;I&apos;ve always been passionate about connecting people and making business networking more efficient and
                                sustainable. This is the story of how Caardify came to be.&quot;
                            </p>
                        </motion.div>
                        <div className=" max-w-5xl mx-auto py-7">

                            {journeySteps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    className={`flex items-center gap-8 mb-10 ${index % 2 === 0 ? "flex-row-reverse " : " "}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                                >
                                    <div className={`w-1/2 border-[1px] p-6 hover:shadow-xl duration-300  rounded-[15px] `}>
                                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.content}</p>
                                    </div>
                                    <div className="relative z-10 bg-secondary rounded-full p-5 flex items-center justify-center text-2xl">
                                        {step.icon}
                                    </div>
                                    <div className="w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="relative z-10 text-center mt-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            <Button size="lg" className="group">
                                Join Our Journey
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    )
}
