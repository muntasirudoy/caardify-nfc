import { Product } from "@/actions/schema/product"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatCurrencyInBTD } from "@/lib/currency-formater"
import { Calculator, CreditCard, Info, Receipt, Truck } from "lucide-react"



export default function Summary({ product }: {
    product: Product
}) {
    const originalPrice = product.price

    const subtotal = originalPrice
    const shipping = 60
    const tax = 0
    const total = subtotal + shipping + tax


    return (
        <Card className="w-full ">
            <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                    <Receipt className="h-4 w-4" />
                    Order Summary
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">



                <div className="space-y-3">


                    {/* Subtotal */}
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                            <Calculator className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium text-foreground">Subtotal</span>
                        </div>
                        <span className="font-semibold text-foreground">{formatCurrencyInBTD(subtotal)}</span>
                    </div>

                    {/* Shipping */}
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                            <Truck className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium text-foreground">Shipping</span>
                            <Badge variant="outline" className="text-xs ml-1">
                                Standard
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-green-600">+</span>
                            <span className="font-semibold text-foreground">{formatCurrencyInBTD(shipping)}</span>
                        </div>
                    </div>

                    {/* Tax */}
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium text-foreground">Tax</span>
                            <Info className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-2">
                            {tax === 0 ? (
                                <Badge variant="secondary" className="text-xs">
                                    Tax Free
                                </Badge>
                            ) : (
                                <span className="font-semibold text-foreground">{formatCurrencyInBTD(tax)}</span>
                            )}
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Total Section */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                            <span className="font-bold text-lg text-foreground">Total Amount</span>
                        </div>
                        <span className="font-bold text-2xl text-primary">{formatCurrencyInBTD(total)}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground ml-5">
                        <span>Including all taxes and fees</span>

                    </div>
                </div>

                {/* Payment Info */}
                <div className="text-center pt-2 space-y-1">
                    <p className="text-xs text-muted-foreground">All prices are in Bangladeshi Taka (৳)</p>
                    <p className="text-xs text-muted-foreground">Secure payment processing</p>
                </div>
            </CardContent>
        </Card>
    )
}
