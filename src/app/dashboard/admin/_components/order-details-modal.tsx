import { Dialog, DialogContent } from "@/components/ui/dialog"
import { OrderResponse } from "../(pages)/order/page"
import OrderCardInfo from "./order-card-info"
import OrderComment from "./order-comments"
import OrderHeading from "./order-heading"
import OrderSummary from "./order-summary"
import ShippingAddress from "./shipping-address"


const OrderDialogModal = ({ isModalOpen, setIsModalOpen, selectedOrder }: {
    isModalOpen: any, setIsModalOpen: any, selectedOrder: OrderResponse[0]['order'] | null
}) => {
    return <>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-2xl max-h-screen bg-slate-100">

                {selectedOrder && (
                    <div className="space-y-6 overflow-y-auto no-scrollbar max-h-[500px]">

                        <OrderHeading selectedOrder={selectedOrder} />
                        <OrderCardInfo selectedOrder={selectedOrder} />
                        <OrderComment selectedOrder={selectedOrder} />
                        <ShippingAddress selectedOrder={selectedOrder} />
                        {/* <OrderCardAssets selectedOrder={selectedOrder} /> */}
                        <OrderSummary selectedOrder={selectedOrder} />
                    </div>
                )}
            </DialogContent>
        </Dialog>

    </>
}

export default OrderDialogModal