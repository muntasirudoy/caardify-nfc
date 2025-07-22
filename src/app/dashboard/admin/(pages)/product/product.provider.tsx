"use client"

import { createContext, type PropsWithChildren, useContext, useState } from "react"
import { useForm } from "react-hook-form"
import type { CreateProduct } from "./product.schema"
import { toast } from "sonner"


import { useFetch } from "@/hooks/use-fetch"
import { useMutation } from "react-query"


interface ProductsContextType {
  products?: CreateProduct[]
  modal: boolean
  setModal: any
  addProduct: (product: Omit<CreateProduct, "id">) => void
  deleteProduct: (id: string) => void
  errors: any
  register: any
  handleSubmit: any
  handleImageUpload: (file: File | null, type: "front" | "back") => void
  imageFront: File | null
  imageBack: File | null
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

interface ProductsProviderProps extends PropsWithChildren {
  action: (data: any) => Promise<void | any>
}

export function ProductsProvider({ children }: ProductsProviderProps) {

  const [modal, setModal] = useState(false)
  const [imageFront, setImageFront] = useState<File | null>(null)
  const [imageBack, setImageBack] = useState<File | null>(null)
  const { postData } = useFetch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateProduct>()

  const submitProduct = useMutation(
    (data: FormData) => postData("/products", data),
    {
      onSuccess: () => {
        toast.success("Product added successfully")
        reset()
        setImageFront(null)
        setImageBack(null)
        setModal(false)
      },
      onError: (error: any) => {
        console.error("Error adding product:", error)
        const errorMessage = error instanceof Error ? error.message : "Error adding product"
        toast.error(errorMessage)
      },
    }
  )


  const addProduct = async (product: Omit<CreateProduct, "id">) => {

    // Validate required images
    if (!imageFront) {
      toast.error("Front image is required")
      return
    }
    if (!imageBack) {
      toast.error("Back image is required")
      return
    }

    const formData = new FormData()

    // Add all required fields
    formData.append("name", product.name)
    formData.append("price", product.price.toString())
    formData.append("sku", product.sku)
    formData.append("modelNumber", product.modelNumber)
    formData.append("category", product.category)
    formData.append("initialActiveDayCount", product.initialActiveDayCount.toString())

    // Add optional description
    if (product.description) {
      formData.append("description", product.description)
    }

    // Add required images
    formData.append("imageFront", imageFront)
    formData.append("imageBack", imageBack)

    try {

      submitProduct.mutate(formData)
      // Reset form and images on success
      reset()
      setImageFront(null)
      setImageBack(null)
      setModal(false)
      toast.success("Product added successfully")
    } catch (error) {
      console.error("Error adding product:", error)
      const errorMessage = error instanceof Error ? error.message : "Error adding product"
      toast.error(errorMessage)
    }
  }

  const deleteProduct = (_id: string) => {
    try {
      // TODO: Implement delete functionality
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }

  const handleImageUpload = (file: File | null, type: "front" | "back") => {
    if (type === "front") {
      setImageFront(file)
    } else {
      setImageBack(file)
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        addProduct,
        deleteProduct,
        errors,
        register,
        handleSubmit: handleSubmit(addProduct),
        handleImageUpload,
        modal,
        setModal,
        imageFront,
        imageBack,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider")
  }
  return context
}
