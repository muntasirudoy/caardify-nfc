import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, ArrowLeftRight, CheckCircle2, Clock, FileWarning, ShieldAlert, Truck } from "lucide-react"

const PolicySection = ({
    icon,
    title,
    children,
}: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
    <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            {icon}
            {title}
        </h3>
        <div className="pl-7">{children}</div>
    </div>
)

function ReturnRefundPolicyPage() {
    return (
        <div className="container mx-auto py-8 px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Return and Refund Policy</CardTitle>
                    <CardDescription className="text-center">
                        At Caardify, we aim to ensure customer satisfaction with all of our products. However, as our NFC business
                        cards are personalized and customized, certain conditions apply to our Return and Refund process.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="refund" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="refund">Refund Policy</TabsTrigger>
                            <TabsTrigger value="return">Return Policy</TabsTrigger>
                        </TabsList>
                        <TabsContent value="refund">
                            <PolicySection icon={<CheckCircle2 className="h-5 w-5 text-green-500" />} title="Eligibility for Refund">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Once the card enters the printing process, refunds are no longer applicable.</li>
                                    <li>Once the product reaches the customer, no refund requests will be entertained.</li>
                                </ul>
                            </PolicySection>

                            <PolicySection icon={<Clock className="h-5 w-5 text-blue-500" />} title="Refund Approval and Timeline">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>If a refund request is approved, the payment will be made via bKash within 7 working days.</li>
                                    <li>An administrative fee of 5% will be deducted from the refund to cover operational costs.</li>
                                    <li>If a refund is related to a return, it will not be applicable.</li>
                                </ul>
                            </PolicySection>

                            <PolicySection icon={<AlertCircle className="h-5 w-5 text-yellow-500" />} title="Exceptions">
                                <p>
                                    Since we exclusively provide customized products, refunds are not applicable once the card enters the
                                    printing process. At this stage, your provided information is already integrated into the card, making
                                    it unusable for others.
                                </p>
                            </PolicySection>

                            <PolicySection
                                icon={<FileWarning className="h-5 w-5 text-purple-500" />}
                                title="Customer Acknowledgment Before Printing"
                            >
                                <p>
                                    After receiving your order, we will enhance your chosen or submitted design and send it to your email
                                    or mobile number for verification. You are required to carefully review the design and confirm it.
                                    Once you provide confirmation, we will proceed to prepare the product for the printing process.
                                </p>
                            </PolicySection>
                        </TabsContent>
                        <TabsContent value="return">
                            <PolicySection icon={<CheckCircle2 className="h-5 w-5 text-green-500" />} title="Eligibility for Return">
                                <p>Returns are only accepted if the product arrives damaged.</p>
                            </PolicySection>

                            <PolicySection
                                icon={<FileWarning className="h-5 w-5 text-yellow-500" />}
                                title="Proof Required for Return"
                            >
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        Customers must provide clear proof of the issue (e.g., video proof of unboxing showing the damaged
                                        or defective item).
                                    </li>
                                    <li>
                                        The unboxing video must start before the package is opened and clearly show the sealed package, the
                                        unboxing process, and the damaged or defective product. The sticker Must be visible.
                                    </li>
                                    <li>Without this video proof, return requests cannot be processed.</li>
                                </ul>
                            </PolicySection>

                            <PolicySection
                                icon={<ShieldAlert className="h-5 w-5 text-red-500" />}
                                title="Non-Returnable Products Clause"
                            >
                                <p>
                                    Products that show signs of intentional damage, misuse, or tampering are not eligible for return. This
                                    includes items damaged during unauthorized repair attempts.
                                </p>
                            </PolicySection>

                            <PolicySection icon={<Truck className="h-5 w-5 text-blue-500" />} title="Shipping for Returns">
                                <p>
                                    We will bear the cost of returning the item to Caardify if it matches the criteria which have written
                                    above.
                                </p>
                            </PolicySection>

                            <PolicySection
                                icon={<ArrowLeftRight className="h-5 w-5 text-purple-500" />}
                                title="Limited Replacement Policy"
                            >
                                <p>
                                    For damaged or defective products, we offer a one-time replacement only. Multiple replacements for the
                                    same product will not be provided.
                                </p>
                            </PolicySection>

                            <PolicySection icon={<Clock className="h-5 w-5 text-green-500" />} title="Timeline for Returns">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        Return requests must be raised within 7 days of receiving the product with proper valid proof.
                                    </li>
                                    <li>
                                        Once the return request is received and approved, the replacement process will begin within 3
                                        working days.
                                    </li>
                                    <li>You will receive your product again within 7-10 business days.</li>
                                </ul>
                            </PolicySection>

                            <PolicySection icon={<AlertCircle className="h-5 w-5 text-red-500" />} title="Misuse and Fraud Clause">
                                <p>
                                    Any misuse of the Return and Refund Policy, including false claims, may result in the refusal of
                                    future services and legal action.
                                </p>
                            </PolicySection>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}

export default ReturnRefundPolicyPage