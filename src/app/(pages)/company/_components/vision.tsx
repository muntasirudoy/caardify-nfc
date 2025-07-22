import Image from "next/image"

export const Vision = () => {
    return <div className="container">
        <div className="grid md:grid-cols-2 lg:gap-14 mb-12 lg:py-[150px]">
            <div className=" overflow-hidden">
                {/* Vision Section */}
                <p className="text-[#FF6B2C] font-medium mb-4">Discover Our Vision</p>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl font-secondary font-bold text-gray-900 mb-8 ">
                    Empowering Businesses with Innovative Technology
                </h1>
                <Image
                    src="/company/ab-02.jpg"
                    alt="Team members working on laptops"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                />
            </div>
            <div className="rounded-3xl overflow-hidden">
                <Image
                    src="/company/ab-01.webp"
                    alt="Collaboration session"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-gray-50 rounded-3xl p-8 text-center">
                        <p className="text-5xl font-bold text-[#FF6B2C] mb-2">94%</p>
                        <p className="text-gray-600">Happy Clients</p>
                    </div>
                    <div className="bg-gray-50 rounded-3xl p-8 text-center">
                        <p className="text-5xl font-bold text-[#FF6B2C] mb-2">20</p>
                        <p className="text-gray-600">Year of Experience</p>
                    </div>
                    <div className="bg-gray-50 rounded-3xl p-8 text-center">
                        <p className="text-5xl font-bold text-[#FF6B2C] mb-2">10k+</p>
                        <p className="text-gray-600">Completed Project</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}