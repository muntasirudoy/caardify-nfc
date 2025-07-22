"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, RefreshCw } from "lucide-react"
import { CategoriesProvider, useCategories } from "./category.provider"
import { AddCategoryButton } from "./add.category.button"
import { getCategoriesAction } from "./category.action"


export default function CategoriesPage() {

    return <CategoriesProvider action={getCategoriesAction}>
        <Categoriess />
    </CategoriesProvider>



}


function Categoriess() {
    const { categories, loading, refreshCategories, openEditModal } = useCategories()

    if (loading) {
        return (
            <div className="container mx-auto p-6">
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
            </div>
        )
    }
    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Categories</h1>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={refreshCategories}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Refresh
                    </Button>
                    <AddCategoryButton />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <Card key={category.id}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-lg">{category.name}</CardTitle>
                                <Badge variant={category.isActive ? "default" : "secondary"}>
                                    {category.isActive ? "Active" : "Inactive"}
                                </Badge>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="mt-2"
                                onClick={() => openEditModal(category)}
                            >
                                <Pencil className="w-4 h-4 mr-2" /> Edit
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Slug: {category.slug}</span>
                                <span>Order: {category.sortOrder}</span>
                            </div>
                        </CardContent>
                    </Card>

                ))}
            </div>

            {categories.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">No categories found</p>
                    <AddCategoryButton />
                </div>
            )}
        </div>
    )
}