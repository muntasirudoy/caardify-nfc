"use client"

import { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useProducts } from "./product.provider"

interface ImageUploadProps {
    type: "front" | "back"
}

export function ImageUpload({ type }: ImageUploadProps) {
    const { handleImageUpload, imageFront, imageBack } = useProducts()
    const [preview, setPreview] = useState<string | null>(null)

    const currentImage = type === "front" ? imageFront : imageBack

    // Update preview when the image changes from context
    useEffect(() => {
        if (currentImage) {
            setPreview(URL.createObjectURL(currentImage))
        } else {
            setPreview(null)
        }
    }, [currentImage])

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const file = acceptedFiles[0]
            if (file) {
                handleImageUpload(file, type)
                setPreview(URL.createObjectURL(file))
            }
        },
        [handleImageUpload, type],
    )

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
        },
        multiple: false,
        maxSize: 5 * 1024 * 1024, // 5MB limit
    })

    const handleRemoveImage = () => {
        setPreview(null)
        // Pass null as File to clear the image
        handleImageUpload(null as any, type)
    }

    return (
        <div className="space-y-2">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors ${isDragActive ? "border-primary bg-primary/5" : "border-gray-300 hover:border-gray-400"
                    }`}
            >
                <input {...getInputProps()} />
                {preview ? (
                    <div className="relative">
                        <div className="relative w-full h-40 mb-2">
                            <Image
                                src={preview || "/placeholder.svg"}
                                alt={`${type} image preview`}
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">{currentImage?.name}</p>
                            <Button type="button" variant="ghost" size="sm" onClick={handleRemoveImage}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="py-8">
                        <div className="mx-auto w-12 h-12 mb-4 text-gray-400">
                            <svg
                                className="w-full h-full"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                            {isDragActive ? `Drop the ${type} image here` : `Drag & drop ${type} image here, or click to select`}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 5MB</p>
                    </div>
                )}
            </div>
        </div>
    )
}
