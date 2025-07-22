"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    MapPin,
    Clock,
    DollarSign,
    Users,
    Coffee,
    Heart,
    Zap,
    Award,
    BookOpen,
    Briefcase,
    ArrowRight,
    CheckCircle,
} from "lucide-react"
import { useEffect, useState } from "react"
import ApplicationModal from "./_components/application-modal"

interface JobPosition {
    id: number
    title: string
    department: string
    location: string
    type: string
    experience: string
    salary: string
    description: string
    requirements: string[]
    responsibilities: string[]
    posted: string
}

interface Benefit {
    icon: React.ReactNode
    title: string
    description: string
}

interface CompanyValue {
    title: string
    description: string
    icon: React.ReactNode
}

const jobPositions: JobPosition[] = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "San Francisco, CA",
        type: "Full-time",
        experience: "5+ years",
        salary: "$120k - $160k",
        description: "Join our frontend team to build beautiful, responsive web applications using modern technologies.",
        requirements: [
            "5+ years of React/Next.js experience",
            "Strong TypeScript skills",
            "Experience with modern CSS frameworks",
            "Knowledge of testing frameworks",
            "Git version control proficiency",
        ],
        responsibilities: [
            "Develop and maintain frontend applications",
            "Collaborate with design and backend teams",
            "Write clean, maintainable code",
            "Participate in code reviews",
            "Mentor junior developers",
        ],
        posted: "2 days ago",
    },
    {
        id: 2,
        title: "Backend Engineer",
        department: "Engineering",
        location: "New York, NY",
        type: "Full-time",
        experience: "3+ years",
        salary: "$110k - $140k",
        description: "Build scalable backend systems and APIs that power our applications.",
        requirements: [
            "3+ years of Node.js/Python experience",
            "Database design and optimization",
            "RESTful API development",
            "Cloud platform experience (AWS/GCP)",
            "Understanding of microservices",
        ],
        responsibilities: [
            "Design and implement backend services",
            "Optimize database performance",
            "Ensure system scalability and reliability",
            "Collaborate with frontend developers",
            "Monitor and troubleshoot production issues",
        ],
        posted: "1 week ago",
    },
    {
        id: 3,
        title: "UX/UI Designer",
        department: "Design",
        location: "Austin, TX",
        type: "Full-time",
        experience: "4+ years",
        salary: "$90k - $120k",
        description: "Create intuitive and beautiful user experiences for our software products.",
        requirements: [
            "4+ years of UX/UI design experience",
            "Proficiency in Figma and design tools",
            "User research and testing experience",
            "Strong portfolio of web/mobile designs",
            "Understanding of design systems",
        ],
        responsibilities: [
            "Design user interfaces and experiences",
            "Conduct user research and testing",
            "Create and maintain design systems",
            "Collaborate with product and engineering teams",
            "Present design concepts to stakeholders",
        ],
        posted: "3 days ago",
    },
    {
        id: 4,
        title: "DevOps Engineer",
        department: "Infrastructure",
        location: "Remote",
        type: "Full-time",
        experience: "4+ years",
        salary: "$115k - $145k",
        description: "Manage our cloud infrastructure and deployment pipelines for optimal performance.",
        requirements: [
            "4+ years of DevOps experience",
            "Docker and Kubernetes expertise",
            "CI/CD pipeline management",
            "Infrastructure as Code (Terraform)",
            "Monitoring and logging tools",
        ],
        responsibilities: [
            "Manage cloud infrastructure",
            "Implement CI/CD pipelines",
            "Monitor system performance",
            "Ensure security best practices",
            "Automate deployment processes",
        ],
        posted: "5 days ago",
    },
    {
        id: 5,
        title: "Product Manager",
        department: "Product",
        location: "Boston, MA",
        type: "Full-time",
        experience: "5+ years",
        salary: "$130k - $170k",
        description: "Lead product strategy and work with cross-functional teams to deliver exceptional products.",
        requirements: [
            "5+ years of product management experience",
            "Strong analytical and strategic thinking",
            "Experience with agile methodologies",
            "Excellent communication skills",
            "Technical background preferred",
        ],
        responsibilities: [
            "Define product roadmap and strategy",
            "Gather and prioritize requirements",
            "Work with engineering and design teams",
            "Analyze product metrics and user feedback",
            "Present to executives and stakeholders",
        ],
        posted: "1 day ago",
    },
    {
        id: 6,
        title: "Junior Developer",
        department: "Engineering",
        location: "Denver, CO",
        type: "Full-time",
        experience: "0-2 years",
        salary: "$70k - $90k",
        description: "Start your career with us and learn from experienced developers in a supportive environment.",
        requirements: [
            "Computer Science degree or equivalent",
            "Basic programming knowledge",
            "Eagerness to learn and grow",
            "Good problem-solving skills",
            "Team collaboration mindset",
        ],
        responsibilities: [
            "Write and maintain code under supervision",
            "Participate in code reviews",
            "Learn new technologies and frameworks",
            "Collaborate with senior developers",
            "Contribute to team projects",
        ],
        posted: "1 week ago",
    },
]

const benefits: Benefit[] = [
    {
        icon: <Heart className="h-6 w-6" />,
        title: "Health & Wellness",
        description: "Comprehensive health insurance, dental, vision, and wellness programs",
    },
    {
        icon: <Coffee className="h-6 w-6" />,
        title: "Work-Life Balance",
        description: "Flexible hours, remote work options, and unlimited PTO policy",
    },
    {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Learning & Development",
        description: "Annual learning budget, conference attendance, and skill development programs",
    },
    {
        icon: <DollarSign className="h-6 w-6" />,
        title: "Financial Benefits",
        description: "Competitive salary, equity options, 401(k) matching, and performance bonuses",
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Team Culture",
        description: "Regular team events, hackathons, and collaborative work environment",
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Innovation Time",
        description: "20% time for personal projects and innovation initiatives",
    },
]

const companyValues: CompanyValue[] = [
    {
        title: "Innovation First",
        description: "We embrace new technologies and creative solutions to solve complex problems.",
        icon: <Zap className="h-8 w-8" />,
    },
    {
        title: "Quality Excellence",
        description: "We maintain high standards in everything we do, from code to customer service.",
        icon: <Award className="h-8 w-8" />,
    },
    {
        title: "Team Collaboration",
        description: "We believe in the power of teamwork and open communication.",
        icon: <Users className="h-8 w-8" />,
    },
    {
        title: "Continuous Learning",
        description: "We invest in our people's growth and encourage lifelong learning.",
        icon: <BookOpen className="h-8 w-8" />,
    },
]

export default function CareerPage() {
    const [visibleSections, setVisibleSections] = useState<string[]>([])
    const [selectedJob, setSelectedJob] = useState<number | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedJobForApplication, setSelectedJobForApplication] = useState<JobPosition | null>(null)

    useEffect(() => {
        const sections = ["hero", "jobs", "benefits", "values", "cta"]
        sections.forEach((section, index) => {
            setTimeout(() => {
                setVisibleSections((prev) => [...prev, section])
            }, index * 200)
        })
    }, [])

    const handleApplyClick = (job: JobPosition) => {
        setSelectedJobForApplication(job)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedJobForApplication(null)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className={`py-20 transition-all duration-1000 ${visibleSections.includes("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight">Build Your Career</h1>
                    <div className="h-1 bg-black rounded-full w-32 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        Join our team of passionate professionals and help us create innovative software solutions that make a
                        difference. We`re looking for talented individuals who share our vision for excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-black hover:bg-gray-800 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
                        >
                            View Open Positions
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 bg-transparent"
                        >
                            Learn About Culture
                        </Button>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section
                className={`py-20 bg-gray-50 transition-all duration-1000 ${visibleSections.includes("jobs") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">Open Positions</h2>
                        <p className="text-gray-600 text-lg">Find your perfect role and join our growing team</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {jobPositions.map((job, index) => (
                            <Card
                                key={job.id}
                                className={`cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-xl border-2 hover:border-black ${selectedJob === job.id ? "border-black shadow-xl scale-105" : "border-gray-200"
                                    }`}
                                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-black mb-2">{job.title}</h3>
                                            <Badge className="bg-black text-white mb-2">{job.department}</Badge>
                                        </div>
                                        <span className="text-sm text-gray-500">{job.posted}</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-2" />
                                            {job.type}
                                        </div>
                                        <div className="flex items-center">
                                            <Briefcase className="h-4 w-4 mr-2" />
                                            {job.experience}
                                        </div>
                                        <div className="flex items-center">
                                            <DollarSign className="h-4 w-4 mr-2" />
                                            {job.salary}
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-4">{job.description}</p>

                                    {selectedJob === job.id && (
                                        <div className="animate-fade-in-down">
                                            <div className="border-t pt-4 mb-4">
                                                <h4 className="font-semibold text-black mb-2">Requirements:</h4>
                                                <ul className="space-y-1">
                                                    {job.requirements.map((req, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-black flex-shrink-0" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="border-t pt-4 mb-4">
                                                <h4 className="font-semibold text-black mb-2">Responsibilities:</h4>
                                                <ul className="space-y-1">
                                                    {job.responsibilities.map((resp, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-black flex-shrink-0" />
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    <Button
                                        className="w-full bg-black hover:bg-gray-800 text-white transform hover:scale-105 transition-all duration-300"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleApplyClick(job)
                                        }}
                                    >
                                        Apply Now
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section
                className={`py-20 transition-all duration-1000 ${visibleSections.includes("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">Why Work With Us</h2>
                        <p className="text-gray-600 text-lg">We offer comprehensive benefits and a supportive work environment</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl border-2 border-gray-100 hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 transition-all duration-300 hover:bg-black hover:text-white">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section
                className={`py-20 bg-gray-50 transition-all duration-1000 ${visibleSections.includes("values") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
                        <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {companyValues.map((value, index) => (
                            <div
                                key={index}
                                className="flex items-start p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6 transition-all duration-300 hover:bg-black hover:text-white">
                                    {value.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section
                className={`py-20 transition-all duration-1000 ${visibleSections.includes("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="container mx-auto px-4">
                    <div className="bg-black rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute top-0 left-0 w-full h-full"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
                                    backgroundSize: "50px 50px",
                                }}
                            ></div>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Take the next step in your career and become part of our innovative team. We`re excited to hear from
                                you!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-black hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-300"
                                >
                                    Submit Application
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 transform hover:scale-105 transition-all duration-300 bg-transparent"
                                >
                                    Schedule Interview
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} job={selectedJobForApplication} />

            <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    )
}
