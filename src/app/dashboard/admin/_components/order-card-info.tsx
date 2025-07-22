import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, User } from "lucide-react"
import { OrderResponse } from "../(pages)/order/page"



export default function OrderCardInfo({ selectedOrder }: { selectedOrder: OrderResponse[0]['order'] }) {
    return (
        <Card className="w-full">
            <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Customer Information
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Name Section */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-muted-foreground">Full Name</span>
                    </div>
                    <p className="font-semibold text-foreground pl-4">{selectedOrder?.fullName}</p>
                </div>

                <Separator />



                {/* Email Section */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Email {selectedOrder?.email.length > 1 && `(${selectedOrder.email.length})`}
                        </span>
                    </div>
                    <div className="space-y-2 pl-6">
                        {selectedOrder?.email?.map((email, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <a
                                    href={`mailto:${email}`}
                                    className="font-semibold  text-foreground hover:text-primary transition-colors hover:underline"
                                >
                                    {email}
                                </a>
                                {i === 0 && (
                                    <Badge variant="secondary" className="text-xs">
                                        Primary
                                    </Badge>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                <Separator />

                <div>
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Company Name
                        </span>
                    </div>
                    <div className="space-y-2 pl-6">
                        <div className="flex items-center gap-2">
                            <a
                                className="text-sm font-semibold  text-foreground hover:text-primary transition-colors hover:underline"
                            >
                                {selectedOrder?.companyName}
                            </a>
                        </div>
                    </div>
                </div>
                <Separator />
                <div>
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Company Slogan
                        </span>
                    </div>
                    <div className="space-y-2 pl-6">
                        <div className="flex items-center gap-2">
                            <a
                                className="text-sm font-semibold  text-foreground hover:text-primary transition-colors hover:underline"
                            >
                                {selectedOrder?.companySlogan}
                            </a>
                        </div>
                    </div>
                </div>
                <Separator />
                <div>
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Company Url
                        </span>
                    </div>
                    <div className="space-y-2 pl-6">
                        <div className="flex items-center gap-2">
                            <a
                                className="text-sm font-semibold  text-foreground hover:text-primary transition-colors hover:underline"
                            >
                                {selectedOrder?.companyUrl}
                            </a>
                        </div>
                    </div>
                </div>
                <Separator />

                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Phone {selectedOrder.phoneNumber.length > 1 && `(${selectedOrder.phoneNumber.length})`}
                        </span>
                    </div>
                    <div className="space-y-2 pl-6">
                        {selectedOrder.phoneNumber.map((phone, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <a
                                    href={`tel:${phone.replace(/\D/g, "")}`}
                                    className="text-sm font-semibold  text-foreground hover:text-primary transition-colors hover:underline"
                                >
                                    {phone}
                                </a>
                                {i === 0 && (
                                    <Badge variant="secondary" className="text-xs">
                                        Primary
                                    </Badge>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
