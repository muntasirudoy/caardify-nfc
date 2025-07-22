"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import OrderDialogModal from "./order-details-modal"
import { useState } from "react"
import { OrderResponse } from "../(pages)/order/page"
import { formatDate } from "@/lib/date-formater"
import { formatCurrencyInBTD } from "@/lib/currency-formater"

// const orders = [
//     {
//         id: "ORD-001",
//         customer: "Alice Johnson",
//         email: "alice@example.com",
//         date: "2024-01-15",
//         status: "delivered",
//         amount: "$124.99",
//     },
//     {
//         id: "ORD-002",
//         customer: "Bob Smith",
//         email: "bob@example.com",
//         date: "2024-01-14",
//         status: "shipped",
//         amount: "$89.50",
//     },
//     {
//         id: "ORD-003",
//         customer: "Carol Davis",
//         email: "carol@example.com",
//         date: "2024-01-14",
//         status: "processing",
//         amount: "$256.75",
//     },
//     {
//         id: "ORD-004",
//         customer: "David Wilson",
//         email: "david@example.com",
//         date: "2024-01-13",
//         status: "pending",
//         amount: "$45.20",
//     },
//     {
//         id: "ORD-005",
//         customer: "Emma Brown",
//         email: "emma@example.com",
//         date: "2024-01-13",
//         status: "delivered",
//         amount: "$178.30",
//     },
//     {
//         id: "ORD-006",
//         customer: "Frank Miller",
//         email: "frank@example.com",
//         date: "2024-01-12",
//         status: "cancelled",
//         amount: "$92.15",
//     },
//     {
//         id: "ORD-007",
//         customer: "Grace Lee",
//         email: "grace@example.com",
//         date: "2024-01-12",
//         status: "shipped",
//         amount: "$310.80",
//     },
//     {
//         id: "ORD-008",
//         customer: "Henry Taylor",
//         email: "henry@example.com",
//         date: "2024-01-11",
//         status: "processing",
//         amount: "$67.45",
//     },
// ]




export default function OrderTable({ res }: { res: OrderResponse }) {

    const [selectedOrder, setSelectedOrder] = useState<(typeof res[0]['order']) | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleViewDetails = (order: (typeof res[0]['order'])) => {
        setSelectedOrder(order)
        setIsModalOpen(true)
    }

    const getStatusBadge = (status: string) => {
        const statusConfig = {
            delivered: { variant: "default" as const, className: "bg-green-100 text-green-800 hover:bg-green-100" },
            shipped: { variant: "secondary" as const, className: "bg-blue-100 text-blue-800 hover:bg-blue-100" },
            processing: { variant: "outline" as const, className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
            pending: { variant: "outline" as const, className: "bg-orange-100 text-orange-800 hover:bg-orange-100" },
            cancelled: { variant: "destructive" as const, className: "bg-red-100 text-red-800 hover:bg-red-100" },
        }
        const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
        return (
            <Badge variant={config.variant} className={config.className}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
        )
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border h-[450px] !overflow-y-scroll ">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Order ID</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden md:table-cell">Email</TableHead>
                                <TableHead className="hidden sm:table-cell">Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="w-[70px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {res.map(({ order, user }, i) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">CRD-{100 + i}</TableCell>
                                    <TableCell>
                                        <div className="font-medium">{user.name}</div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell text-muted-foreground">{user.email}</TableCell>
                                    <TableCell className="hidden sm:table-cell">{formatDate(order.createdAt, {
                                        showTime: false
                                    })}</TableCell>
                                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                                    <TableCell className="text-right font-medium">{formatCurrencyInBTD(order.totalPrice)}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem onClick={() => handleViewDetails(order)}>
                                                    <Eye className="mr-2 h-4 w-4" />
                                                    View details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Edit className="mr-2 h-4 w-4" />
                                                    Edit order
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Cancel order
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <OrderDialogModal selectedOrder={selectedOrder} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </div>

            </CardContent>
        </Card >
    )
}

