import { Users, Briefcase, Link, Banknote, Calendar, Leaf } from "lucide-react"

const features = [
    { icon: Users, title: "Customizable Profiles", description: "Include company name, logo, and designation" },
    { icon: Link, title: "Multiple Links", description: "Add personal and company websites" },
    { icon: Banknote, title: "Corporate Discounts", description: "Exclusive pricing for teams" },
    { icon: Calendar, title: "Event Ready", description: "Perfect for meetings and conferences" },
    { icon: Briefcase, title: "Professional Branding", description: "Reinforce your company image" },
    { icon: Leaf, title: "Eco-Friendly", description: "Paper-free networking solution" },
]

export default function FeatureCards() {
    return (
        <section id="features" className="py-20 px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Caardify?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, _index) => (
                    <div
                        key={feature.title}
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                    >
                        <feature.icon className="w-12 h-12 text-black mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

