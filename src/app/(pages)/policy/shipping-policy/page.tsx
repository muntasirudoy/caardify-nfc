import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, MapPin, Package, AlertTriangle, RefreshCcw, Shield, AlertCircle } from "lucide-react"
import type React from "react" // Import React

const PolicySection = ({
    icon,
    title,
    children,
}: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
    <Card className="mb-6">
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
    </Card>
)

function ShippingPolicyPage() {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Shipping Policy</h1>
            <p className="text-lg text-center mb-12 text-gray-600">
                At Caardify, we are committed to ensuring your orders are processed and delivered efficiently.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                <PolicySection icon={<Truck className="h-8 w-8 text-blue-500" />} title="Delivery Locations and Costs">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-semibold">Feni:</span> Delivery is completely free.
                        </li>
                        <li>
                            <span className="font-semibold">All over Bangladesh:</span> Delivery costs a flat 70 BDT.
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection icon={<Clock className="h-8 w-8 text-green-500" />} title="Delivery Timeframes">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-semibold">Feni:</span> Orders will be delivered within 5 business days.
                        </li>
                        <li>
                            <span className="font-semibold">Outside Feni:</span> Orders typically take 7–10 business days.
                        </li>
                        <li>We prioritize all customers equally, offering only standard delivery.</li>
                    </ul>
                </PolicySection>

                <PolicySection icon={<Package className="h-8 w-8 text-purple-500" />} title="Order Processing Times">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Orders are processed within 4–5 business days before being shipped.</li>
                        <li>Overall timeline from placing an order to receiving it is 7–10 business days.</li>
                    </ul>
                </PolicySection>

                <PolicySection icon={<MapPin className="h-8 w-8 text-red-500" />} title="Tracking Your Order">
                    <p>
                        Once your order is dispatched, we will send you a tracking link via SMS. You can use this link to monitor
                        your parcel in real-time.
                    </p>
                </PolicySection>

                <PolicySection icon={<AlertTriangle className="h-8 w-8 text-yellow-500" />} title="Damaged or Lost Items">
                    <p>
                        We work with Bangladesh&apos;s best delivery partners to minimize the chances of damage or loss. In rare cases
                        where this occurs:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Contact us immediately at support@caardify.com or 01854661111.</li>
                        <li>We will investigate and provide an appropriate resolution.</li>
                    </ul>
                </PolicySection>

                <PolicySection icon={<RefreshCcw className="h-8 w-8 text-orange-500" />} title="Refund Policy During Shipping">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Once a card enters the printing process, refunds cannot be processed.</li>
                        <li>For delivery issues due to courier error, contact us for evaluation.</li>
                    </ul>
                </PolicySection>

                <PolicySection icon={<Shield className="h-8 w-8 text-indigo-500" />} title="Responsibility During Shipping">
                    <p>
                        Caardify ensures secure packaging and uses reliable delivery partners. While transit responsibility lies
                        with the courier, we&apos;re committed to resolving any delivery issues.
                    </p>
                </PolicySection>

                <PolicySection icon={<AlertCircle className="h-8 w-8 text-pink-500" />} title="Unexpected Delays">
                    <p>
                        Unforeseen circumstances may delay deliveries. If your parcel takes longer than expected, please contact us
                        for support.
                    </p>
                </PolicySection>
            </div>
        </div>
    )
}
export default ShippingPolicyPage
