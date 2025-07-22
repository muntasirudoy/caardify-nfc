"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useCategories } from "../category/category.provider"
import { ImageUpload } from "./image-upload"
import { useProducts } from "./product.provider"


export function AddProductButton() {
  const { handleSubmit, register, modal, setModal, errors, imageFront, imageBack } = useProducts()
  const [sendEmptyDescription, _setSendEmptyDescription] = useState(false)
  const { categories, loading: categoriesLoading } = useCategories()

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name - Required */}
          <div className="space-y-2">
            <Label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input id="name" placeholder="Product Name" {...register("name", { required: "Name is required" })} />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          {/* Description - Optional */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Product Description"
              disabled={sendEmptyDescription}
              {...register("description")}
            />

          </div>

          {/* SKU - Required */}
          <div className="space-y-2">
            <Label htmlFor="sku">
              SKU <span className="text-red-500">*</span>
            </Label>
            <Input id="sku" placeholder="card-001" {...register("sku", { required: "SKU is required" })} />
            {errors.sku && <p className="text-sm text-red-500">{errors.sku.message}</p>}
          </div>

          {/* Model Number - Required */}
          <div className="space-y-2">
            <Label htmlFor="modelNumber">
              Model Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="modelNumber"
              placeholder="model-001"
              {...register("modelNumber", { required: "Model number is required" })}
            />
            {errors.modelNumber && <p className="text-sm text-red-500">{errors.modelNumber.message}</p>}
          </div>

          {/* Price - Required */}
          <div className="space-y-2">
            <Label htmlFor="price">
              Price <span className="text-red-500">*</span>
            </Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              placeholder="1000"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
                min: { value: 0, message: "Price must be positive" },
              })}
            />
            {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
          </div>

          {/* Category - Required */}
          <div className="space-y-2">
            <Label htmlFor="category">
              Category <span className="text-red-500">*</span>
            </Label>
            <select
              id="category"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("category", { required: "Category is required" })}
              disabled={categoriesLoading}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {categoriesLoading && <p className="text-sm text-gray-500">Loading categories...</p>}
            {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
          </div>

          {/* Initial Active Day Count - Required */}
          <div className="space-y-2">
            <Label htmlFor="initialActiveDayCount">
              Initial Active Day Count <span className="text-red-500">*</span>
            </Label>
            <Input
              id="initialActiveDayCount"
              type="number"
              min="0"
              step="1"
              placeholder="30"
              {...register("initialActiveDayCount", {
                required: "Initial active day count is required",
                valueAsNumber: true,
                min: { value: 0, message: "Count must be positive" },
              })}
            />
            <p className="text-sm text-gray-600">Initial active day count for the product</p>
            {errors.initialActiveDayCount && (
              <p className="text-sm text-red-500">{errors.initialActiveDayCount.message}</p>
            )}
          </div>

          {/* Front Image - Required */}
          <div className="space-y-2">
            <Label>
              Product Front Image <span className="text-red-500">*</span>
            </Label>
            <ImageUpload type="front" />
            <p className="text-sm text-gray-600">Product front image file</p>
            {!imageFront && <p className="text-sm text-red-500">Front image is required</p>}
          </div>

          {/* Back Image - Required */}
          <div className="space-y-2">
            <Label>
              Product Back Image <span className="text-red-500">*</span>
            </Label>
            <ImageUpload type="back" />
            <p className="text-sm text-gray-600">Product back image file</p>
            {!imageBack && <p className="text-sm text-red-500">Back image is required</p>}
          </div>

          <Button type="submit" className="w-full">
            Add Product
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
