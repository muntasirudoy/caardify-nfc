"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from "lucide-react"
import { useCategories } from "./category.provider"

export function AddCategoryButton() {
    const { handleSubmit, register, modal, setModal, errors, addCategory, selectedCategory } =
        useCategories();

    return (
        <Dialog open={modal} onOpenChange={setModal}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Category
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        {selectedCategory ? "Edit Category" : "Add New Category"}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(addCategory)} className="space-y-4">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="name"
                            placeholder="Category Name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label htmlFor="description">
                            Description <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="Category Description"
                            {...register("description", { required: "Description is required" })}
                        />
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description.message}</p>
                        )}
                    </div>

                    {/* Is Active */}
                    <div className="flex items-center space-x-2">
                        <Checkbox id="isActive" {...register("isActive")} defaultChecked />
                        <Label htmlFor="isActive">Active</Label>
                    </div>

                    <Button type="submit" className="w-full">
                        {selectedCategory ? "Update Category" : "Add Category"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

