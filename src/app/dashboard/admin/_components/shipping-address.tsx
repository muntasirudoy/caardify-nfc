"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Truck } from "lucide-react"
import { OrderResponse } from "../(pages)/order/page"



export default function ShippingAddress({
    selectedOrder
}: {
    selectedOrder: OrderResponse[0]['order']
}) {


    return (
        <Card className="w-full ">
            <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Shipping Address
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div className="space-y-1 flex-1">
                            <p className="text-sm font-medium text-foreground">{selectedOrder.address}</p>
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
