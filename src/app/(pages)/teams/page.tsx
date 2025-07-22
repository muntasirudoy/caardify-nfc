"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Facebook, Twitter, Github, Globe, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface TeamMember {
    id: number
    name: string
    position: string
    department: string
    image: string
    bio: string
    location: string
    skills: string[]
    social: {
        linkedin?: string
        facebook?: string
        twitter?: string
        github?: string
        website?: string
        email?: string
    }
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Chief Technology Officer",
        department: "Leadership",
        location: "San Francisco, CA",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Leading our technical vision with 15+ years of experience in software architecture and team leadership.",
        skills: ["Leadership", "Architecture", "Strategy"],
        social: {
            linkedin: "https://linkedin.com/in/sarahjohnson",
            twitter: "https://twitter.com/sarahjohnson",
            email: "sarah@company.com",
        },
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Senior Full Stack Developer",
        department: "Engineering",
        location: "New York, NY",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Passionate about creating scalable web applications and mentoring junior developers.",
        skills: ["React", "Node.js", "AWS"],
        social: {
            linkedin: "https://linkedin.com/in/michaelchen",
            github: "https://github.com/michaelchen",
            twitter: "https://twitter.com/michaelchen",
        },
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "UX/UI Designer",
        department: "Design",
        location: "Austin, TX",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Creating intuitive and beautiful user experiences that solve real-world problems.",
        skills: ["Figma", "User Research", "Prototyping"],
        social: {
            linkedin: "https://linkedin.com/in/emilyrodriguez",
            facebook: "https://facebook.com/emilyrodriguez",
            website: "https://emilydesigns.com",
        },
    },
    {
        id: 4,
        name: "David Kim",
        position: "DevOps Engineer",
        department: "Infrastructure",
        location: "Seattle, WA",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Ensuring our applications run smoothly with robust CI/CD pipelines and cloud infrastructure.",
        skills: ["Docker", "Kubernetes", "Terraform"],
        social: {
            linkedin: "https://linkedin.com/in/davidkim",
            github: "https://github.com/davidkim",
            email: "david@company.com",
        },
    },
    {
        id: 5,
        name: "Lisa Thompson",
        position: "Product Manager",
        department: "Product",
        location: "Boston, MA",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Bridging the gap between user needs and technical solutions to deliver exceptional products.",
        skills: ["Strategy", "Analytics", "Agile"],
        social: {
            linkedin: "https://linkedin.com/in/lisathompson",
            twitter: "https://twitter.com/lisathompson",
            facebook: "https://facebook.com/lisathompson",
        },
    },
    {
        id: 6,
        name: "James Wilson",
        position: "Mobile Developer",
        department: "Engineering",
        location: "Denver, CO",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Crafting native and cross-platform mobile experiences that users love.",
        skills: ["React Native", "Swift", "Kotlin"],
        social: {
            linkedin: "https://linkedin.com/in/jameswilson",
            github: "https://github.com/jameswilson",
            website: "https://jameswilson.dev",
        },
    },
]

const getSocialIcon = (platform: string) => {
    switch (platform) {
        case "linkedin":
            return <Linkedin className="h-4 w-4" />
        case "facebook":
            return <Facebook className="h-4 w-4" />
        case "twitter":
            return <Twitter className="h-4 w-4" />
        case "github":
            return <Github className="h-4 w-4" />
        case "website":
            return <Globe className="h-4 w-4" />
        case "email":
            return <Mail className="h-4 w-4" />
        default:
            return null
    }
}

export default function TeamSection() {
    const [visibleCards, setVisibleCards] = useState<number[]>([])
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            teamMembers.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleCards((prev) => [...prev, index])
                }, index * 150)
            })
        }, 300)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, black 2px, transparent 0)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 animate-fade-in tracking-tight">
                            Meet Our Team
                        </h1>
                        <div className="h-1 bg-black rounded-full transform scale-x-0 animate-scale-x animation-delay-800 mx-auto w-32"></div>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8 opacity-0 animate-fade-in-up animation-delay-1200">
                        Talented individuals working together to build exceptional software solutions. Each team member brings
                        unique expertise and dedication to our shared mission.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className={`transform transition-all duration-700 ${visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredCard(member.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative group cursor-pointer">
                                <div
                                    className={`bg-white rounded-2xl p-8 border-2 border-gray-100 transition-all duration-500 transform ${hoveredCard === member.id
                                        ? "shadow-2xl border-black -translate-y-2 scale-105"
                                        : "shadow-lg hover:shadow-xl"
                                        }`}
                                >
                                    {/* Profile Image */}
                                    <div className="relative mb-6">
                                        <div className="w-28 h-28 mx-auto relative">
                                            <div
                                                className={`absolute inset-0 rounded-full border-4 transition-all duration-500 ${hoveredCard === member.id ? "border-black rotate-180" : "border-gray-200 rotate-0"
                                                    }`}
                                            ></div>
                                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                                <Image
                                                    src={member.image || "/placeholder.svg"}
                                                    alt={member.name}
                                                    width={112}
                                                    height={112}
                                                    className={`w-full h-full object-cover transition-all duration-500 ${hoveredCard === member.id ? "scale-110 grayscale-0" : "scale-100 grayscale"
                                                        }`}
                                                />
                                            </div>
                                        </div>

                                        {/* Department Badge */}
                                        <div
                                            className={`absolute -top-2 -right-2 px-3 py-1 bg-black text-white rounded-full text-xs font-semibold shadow-lg transform transition-all duration-300 ${hoveredCard === member.id ? "scale-110 rotate-3" : "scale-100 rotate-0"
                                                }`}
                                        >
                                            {member.department}
                                        </div>
                                    </div>

                                    {/* Member Info */}
                                    <div className="text-center mb-6">
                                        <h3
                                            className={`text-2xl font-bold mb-2 transition-all duration-300 ${hoveredCard === member.id ? "text-black scale-105" : "text-gray-900"
                                                }`}
                                        >
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 font-medium mb-3">{member.position}</p>
                                        <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                                            <MapPin className="h-3 w-3 mr-1" />
                                            {member.location}
                                        </div>
                                        <p
                                            className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${hoveredCard === member.id ? "text-gray-800" : ""
                                                }`}
                                        >
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {member.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="outline"
                                                    className={`text-xs border-gray-300 text-gray-700 transition-all duration-300 transform ${hoveredCard === member.id
                                                        ? "bg-black text-white border-black scale-105"
                                                        : "bg-white hover:bg-gray-50"
                                                        }`}
                                                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center space-x-4">
                                        {Object.entries(member.social).map(([platform, url], socialIndex) => (
                                            <Link
                                                key={platform}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`p-3 rounded-full border-2 transition-all duration-300 transform ${hoveredCard === member.id
                                                    ? "bg-black text-white border-black scale-110 -translate-y-1"
                                                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:scale-105"
                                                    }`}
                                                style={{
                                                    transitionDelay: `${socialIndex * 50}ms`,
                                                }}
                                            >
                                                {getSocialIcon(platform)}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Animation Indicator */}
                                <div
                                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black rounded-full transition-all duration-500 ${hoveredCard === member.id ? "opacity-100 scale-100" : "opacity-0 scale-0"
                                        }`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-gray-50 rounded-3xl p-12 border-2 border-gray-100 relative overflow-hidden">
                        {/* Subtle Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div
                                className="absolute top-0 left-0 w-full h-full"
                                style={{
                                    backgroundImage: `linear-gradient(45deg, black 25%, transparent 25%), linear-gradient(-45deg, black 25%, transparent 25%)`,
                                    backgroundSize: "20px 20px",
                                    backgroundPosition: "0 0, 0 10px",
                                }}
                            ></div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-black mb-4">Join Our Growing Team</h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                                We`re always looking for passionate professionals who want to make a difference through innovative
                                technology and collaborative teamwork.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-black hover:bg-gray-800 text-white border-0 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3"
                                >
                                    View Open Positions
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 px-8 py-3 bg-transparent"
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scale-x 0.8s ease-out forwards;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
        </div>
    )
}
