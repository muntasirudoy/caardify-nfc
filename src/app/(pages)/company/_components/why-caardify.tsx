import { Card } from "@/components/ui/card";
import { LeafIcon, NetworkIcon, Wallet } from "lucide-react";

export const WhyCaardify = () => {
    return <>
        <section className="py-32 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-secondary">Why Choose Caardify?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Experience the future of networking with our innovative features
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
                    <FeatureCard
                        icon={<LeafIcon className="h-8 w-8" />}
                        title="Eco-Friendly"
                        description="Join our mission to reduce paper waste with digital business cards"
                    />
                    <FeatureCard
                        icon={<NetworkIcon className="h-8 w-8" />}
                        title="Smart Networking"
                        description="Connect instantly with a simple tap of your NFC-enabled card"
                    />
                    <FeatureCard
                        icon={<Wallet className="h-8 w-8" />}
                        title="Cost-Effective"
                        description="Save money while making a lasting impression with your contacts"
                    />
                </div>
            </div>
        </section>
    </>
}
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card className="p-8 text-center hover:scale-105 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center  w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-semibold font-secondary mb-4">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </Card>
    );
}