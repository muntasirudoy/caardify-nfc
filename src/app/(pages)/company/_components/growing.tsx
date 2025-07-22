import { GlobeIcon, HomeIcon, User } from "lucide-react";

export const Growing = () => {
    return <>
        <section className="py-32 px-4 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
            <div className="max-w-6xl mx-auto relative">
                <div className="text-center mb-20 fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-secondary">Growing Strong</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        From Feni to the world, we&apos;re expanding our reach every day
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 fade-in">
                        <StatusCard
                            icon={<HomeIcon />}
                            title="Headquarters"
                            description="Operating from our innovative home office in Feni, Bangladesh"
                        />
                        <StatusCard
                            icon={<GlobeIcon />}
                            title="Market Presence"
                            description="Serving businesses across Bangladesh, with plans for global expansion"
                        />
                        <StatusCard
                            icon={<User />}
                            title="Growing Community"
                            description="Join thousands of professionals already using Caardify"
                        />
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden group fade-in">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                            alt="Office Space"
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    </>
}
function StatusCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex gap-4 items-start group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2 font-secondary">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}