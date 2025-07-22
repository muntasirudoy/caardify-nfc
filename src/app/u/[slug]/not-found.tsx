"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function UserNotFound() {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", searchQuery)
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-background">
            <div className="w-full md:w-1/2 bg-muted flex items-center justify-center p-8">
                <motion.div
                    className="w-full max-w-md text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="relative w-32 h-32 mx-auto mb-4"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                    >
                        <div className="flex items-center justify-center w-32 h-32 bg-primary rounded-full">
                            <User className="w-16 h-16 text-primary-foreground" />
                        </div>
                    </motion.div>
                    <motion.h2
                        className="text-4xl font-bold text-primary"
                        animate={{
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    >
                        404
                    </motion.h2>
                    <p className="text-2xl mt-4">User Not Found</p>
                </motion.div>
            </div>
            <motion.div
                className="w-full md:w-1/2 flex flex-col justify-center p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Oops! User Not Found</h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    We couldn&apos;t find the user you&apos;re looking for. They might have changed their username or deleted their account.
                </p>
                <form onSubmit={handleSearch} className="mb-8">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                            type="text"
                            placeholder="Search for other users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow"
                        />
                        <Button type="submit" className="w-full sm:w-auto">
                            <Search className="w-4 h-4 mr-2" />
                            Search
                        </Button>
                    </div>
                </form>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                        <Link href="/">Go Home</Link>
                    </Button>
                    <Button asChild className="w-full sm:w-auto">
                        <Link href="/explore">Explore Users</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}

