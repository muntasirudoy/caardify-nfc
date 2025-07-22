'use client'

import { CreditCard, Users, Mail, Calculator } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
    { name: "Home", href: "#hero", icon: CreditCard },
    { name: "Features", href: "#features", icon: Users },
    { name: "Calculator", href: "#calculator", icon: Calculator },
    { name: "Contact", href: "#contact", icon: Mail },
]

export default function FloatingNav() {

    const [activeSection, setActiveSection] = useState("hero")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 },
        )

        document.querySelectorAll("section[id]").forEach((section) => {
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])


    return (
        <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <ul className="flex space-x-2 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${activeSection === item.href.slice(1)
                                ? "bg-black text-white"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                        >
                            <item.icon size={20} />
                            <span className="sr-only">{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

