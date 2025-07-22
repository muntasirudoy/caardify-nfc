"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, File, FileImage, FileText, Palette } from "lucide-react"


const selectedOrder = {
    fullName: "John Smith",
    email: ["john.smith@example.com", "j.smith@company.com"],
    phoneNumber: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    customerAssets: [
        {
            id: 1,
            name: "logo-design.ai",
            type: "ai",
            size: "2.4 MB",
            uploadedAt: "2024-01-15",
            url: "/placeholder-file.ai",
        },
    ],
}

const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
        case "ai":
            return <Palette className="h-4 w-4 text-purple-500" />
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
            return <FileImage className="h-4 w-4 text-green-500" />
        case "pdf":
            return <FileText className="h-4 w-4 text-red-500" />
        default:
            return <File className="h-4 w-4 text-gray-500" />
    }
}

const getFileTypeColor = (fileType: string) => {
    switch (fileType.toLowerCase()) {
        case "ai":
            return "bg-purple-100 text-purple-700 border-purple-200"
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
            return "bg-green-100 text-green-700 border-green-200"
        case "pdf":
            return "bg-red-100 text-red-700 border-red-200"
        default:
            return "bg-gray-100 text-gray-700 border-gray-200"
    }
}

const handleDownload = (asset: (typeof selectedOrder.customerAssets)[0]) => {

    console.log(`Downloading ${asset.name}`)

    const link = document.createElement("a")
    link.href = asset.url
    link.download = asset.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

export default function OrderCardAssets() {


    return (
        <Card className="w-full">

            <CardContent className="space-y-4 pt-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Customer Assets ({selectedOrder.customerAssets.length})
                        </span>
                    </div>
                    <div className="space-y-2">
                        {selectedOrder.customerAssets.map((asset) => (
                            <div
                                key={asset.id}
                                className="flex items-center justify-between p-2 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    {getFileIcon(asset.type)}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-foreground truncate">{asset.name}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className={`text-xs px-2 py-0.5 rounded-full border ${getFileTypeColor(asset.type)}`}>
                                                {asset.type.toUpperCase()}
                                            </span>
                                            <span className="text-xs text-muted-foreground">{asset.size}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => handleDownload(asset)} className="ml-2 h-8 w-8 p-0">
                                    <Download className="h-3 w-3" />
                                    <span className="sr-only">Download {asset.name}</span>
                                </Button>
                            </div>
                        ))}
                    </div>


                    {selectedOrder.customerAssets.length > 1 && (
                        <div className=" pt-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                onClick={() => {
                                    selectedOrder.customerAssets.forEach((asset) => {
                                        setTimeout(() => handleDownload(asset), 100)
                                    })
                                }}
                            >
                                <Download className="h-3 w-3 mr-2" />
                                Download All Assets
                            </Button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
