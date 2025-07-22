import { formatDate } from "@/lib/date-formater"
import { OrderResponse } from "../(pages)/order/page"
import { formatCurrencyInBTD } from "@/lib/currency-formater"
import { Card, CardContent } from "@/components/ui/card"

export default function OrderHeading({ selectedOrder }: {
    selectedOrder: OrderResponse[0]['order']
}) {
    return (<Card>
        <CardContent className="flex flex-wrap gap-4 pt-6">
            <div className="min-w-[180px]">
                <h3 className="font-semibold text-sm text-muted-foreground">ORDER ID</h3>
                <p className=" text-sm">{selectedOrder.id}</p>
            </div>
            <div className="min-w-[150px]">
                <h3 className=" text-sm text-muted-foreground">STATUS</h3>
                <div className="mt-1">{selectedOrder.status}</div>
            </div>
            <div className="min-w-[180px]">
                <h3 className="font-semibold text-sm text-muted-foreground">ORDER DATE</h3>
                <p className="text-sm">{formatDate(selectedOrder.createdAt)}</p>
            </div>
            <div className="min-w-[180px]">
                <h3 className="font-semibold text-sm text-muted-foreground">TOTAL AMOUNT</h3>
                <p className="font-semibold text-lg">{formatCurrencyInBTD(selectedOrder.totalPrice)}</p>
            </div>
            <div className="min-w-[150px]">
                <h3 className="font-semibold text-sm text-muted-foreground">CATEGORY</h3>
                <p className="text-sm">Wooden</p>
            </div>
            <div>
                <h3 className="font-semibold text-sm text-muted-foreground">MODEL</h3>
                <p className="font-semibold text-lg">001</p>
            </div>
        </CardContent>

    </Card>)
}