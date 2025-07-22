"use client"

import type React from "react"

import { Building2, ImageIcon, MapPin, Phone, Plus, ShoppingCart, Trash2, Upload, User, X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"

import type { Order } from "@/actions/schema/order"
import type { Product } from "@/actions/schema/product"
import { useFetch } from "@/hooks/use-fetch"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Summary from "./summary"

interface OrderResponse {
  data: {
    message: string
    bkashUrl: string
  }
}

type OrderFormValues = Omit<Order, "phoneNumber" | "email"> & {
  phoneNumber: { value: string }[]
  email: { value: string }[]
}

export const OrderForm = ({ product }: { product: Product }) => {
  const { postData } = useFetch()
  const queryClient = useQueryClient()
  const router = useRouter()
  console.log(product);

  const form = useForm<OrderFormValues>({
    defaultValues: {
      designation: "",
      discountId: "",
      fullName: "",
      title: "",
      about: "",
      companyName: "",
      companyURL: "",
      companySlogan: "",
      shipingAddress: "",
      address: "",
      email: [{ value: "" }],
      phoneNumber: [{ value: "" }],
      productId: product.id,
    },
  })

  const {
    register,
    control,
    handleSubmit,

    formState: { errors },
  } = form

  const {
    fields: emailFields,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({
    control,
    name: "email",
  })

  const {
    fields: phoneFields,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control,
    name: "phoneNumber",
  })

  const [uploadedImage, setUploadedImage] = useState<File | null>(null)
  const [uploadedLogo, setUploadedLogo] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [fileType, setFileType] = useState<string | null>(null);
  const mutation = useMutation<OrderResponse, unknown, FormData>((formData) => postData("/orders", formData), {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries(["orders"])
      if (data) {
        router.push(data.bkashUrl)
      }
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const handleSubmitOrder = (formData: OrderFormValues) => {
    const submitFormData = new FormData();

    // Required field
    submitFormData.append("productId", product.id);
    submitFormData.append("discountId", 'as');
    submitFormData.append("designation", 'as');
    submitFormData.append("comment", 'as');


    // Optional string fields
    const optionalFields: Record<string, string | undefined> = {
      // username: formData.username,

      fullName: formData.fullName,
      title: formData.title,
      about: formData.about,
      companyName: formData.companyName,
      companyUrl: formData.companyURL,
      // shippingAddress: formData.shipingAddress,
      companySlogan: formData.companySlogan,
      address: formData.address,

    };

    Object.entries(optionalFields).forEach(([key, value]) => {
      if (value?.trim()) {
        submitFormData.append(key, value);
      }
    });


    formData.phoneNumber.forEach((p) => {
      if (p.value.trim()) {
        submitFormData.append(`phoneNumber`, p.value.trim());
      }
    });


    formData.email.forEach((e) => {
      if (e.value.trim()) {
        submitFormData.append(`email`, e.value.trim());
      }
    });


    if (uploadedImage) {
      submitFormData.append("image", uploadedImage);
    }
    if (uploadedLogo) {
      submitFormData.append("companyLogoUrl", uploadedLogo);
    }

    mutation.mutate(submitFormData);
  };





  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "application/postscript", // .ai and .eps
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Please select a PNG, JPG, AI, or EPS file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      setUploadedImage(file);
      setFileType(file.type);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview("/img/placeholder.png");
      }
    }
  };
  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Please select a PNG, JPG, AI, or EPS file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      setUploadedLogo(file);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setLogoPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };
  const removeImage = () => {
    setUploadedImage(null)
    setImagePreview(null)
  }
  const removeLogo = () => {
    setUploadedLogo(null)
    setLogoPreview(null)
  }


  return (
    <div className="flex">
      <div className="hidden overflow-y-auto no-scrollbar h-[calc(100vh-70px)] lg:flex lg:w-1/2 bg-gradient-to-br from-black to-gray-800 p-8 flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-300 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-300 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 text-center text-white space-y-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Customize Your Card</h3>
            <p className="text-white/80 text-sm">Upload your own image or use the default design</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl max-w-sm mx-auto">
            {imagePreview ? (
              <div className="relative">
                <div className="w-full group max-h-[190px] rounded-xl overflow-hidden shadow-lg ">
                  <div className=" group-hover:bg-black/50 flex justify-center items-center rounded-lg absolute top-0 left-0 h-full w-full bg-transparent  hover:backdrop-blur-lg">
                    <Button className=" hidden group-hover:block" onClick={removeImage}><X /></Button>
                  </div>
                  <Image
                    src={imagePreview ?? product.imageUrlFront ?? product.imageUrlBack}
                    width={300}
                    height={185}
                    alt="Custom NFC Card"
                    className="w-full h-full object-contain origin-center"
                  />
                </div>
              </div>
            ) : (
              <div className=" space-y-4">
                {!imagePreview ? (
                  <div className="relative">
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg,.ai,.eps"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/30 border-dashed rounded-xl cursor-pointer hover:border-white/50 hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Upload className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-center">
                          <p className="text-white font-medium text-sm">Upload Custom Image</p>
                          <p className="text-white/70 text-xs">PNG, JPG up to 5MB</p>
                        </div>
                      </div>
                    </label>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Custom image uploaded</p>
                        <p className="text-white/70 text-xs">Your card will use this image</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={removeImage}
                      className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 p-0"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            )}

            {fileType == 'image/jpeg' && imagePreview && <>
              {
                logoPreview && logoPreview ? (
                  <div className="relative mt-3">
                    <div className="w-full group flex justify-center max-w-[150px]  max-h-[150px] rounded-xl overflow-hidden shadow-lg ">
                      <div className=" group-hover:bg-black/50 flex justify-center items-center rounded-lg absolute top-0 left-0 h-full w-full bg-transparent  hover:backdrop-blur-lg">
                        <Button className=" hidden group-hover:block" onClick={removeLogo}><X /></Button>
                      </div>
                      <Image
                        src={logoPreview}
                        width={150}
                        height={150}
                        alt="Custom NFC Card logo"
                        className="w-full h-full object-cover origin-center inline-block"
                      />
                    </div>
                  </div>
                ) : (
                  <div className=" space-y-4">
                    <div className="relative">
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg,.ai,.eps"
                        onChange={handleLogoUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/30 border-dashed rounded-xl cursor-pointer hover:border-white/50 hover:bg-white/5 transition-all duration-200"
                      >
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Upload className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-center">
                            <p className="text-white font-medium text-sm">Upload Custom Image</p>
                            <p className="text-white/70 text-xs">PNG, JPG up to 5MB</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                )
              }

            </>
            }



          </div>

        </div>
      </div>

      <div className="flex-1 lg:w-1/2 h-[calc(100vh-70px)] bg-slate-100 overflow-y-auto no-scrollbar">
        <div className="max-w-2xl mx-auto p-6 lg:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-black rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Order Your Card</h1>
                <p className="text-gray-600 text-sm">Create your personalized NFC business card</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(handleSubmitOrder)} className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="h-12 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20"
                      {...register("fullName", { required: "Full Name is required" })}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">
                      Job Title *
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., Startup Founder"
                      className="h-12 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20"
                      {...register("title", { required: "Title is required" })}
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">
                      Designation *
                    </Label>
                    <Input
                      id="designation"
                      placeholder="e.g., Software Engineer"
                      className="h-12 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20"
                      {...register("designation", { required: "Designation is required" })}
                    />
                    {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation.message}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="about" className="text-sm font-medium text-gray-700 mb-2 block">
                    About *
                  </Label>
                  <Textarea
                    id="about"
                    placeholder="Brief description about yourself"
                    className="border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20 min-h-[100px]"
                    {...register("about", { required: "About is required" })}
                  />
                  {errors.about && <p className="text-red-500 text-xs mt-1">{errors.about.message}</p>}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Contact Details</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium text-gray-700">Phone Numbers</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => appendPhone({ value: "" })}
                      className="h-8 px-3 text-xs rounded-lg border-gray-200 hover:bg-violet-50 hover:border-violet-300"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {phoneFields.map((field, index) => (
                      <div key={field.id} className="flex gap-2">
                        <Input
                          placeholder="Phone number"
                          className="h-11 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20"
                          {...register(`phoneNumber.${index}.value`)}
                        />
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => removePhone(index)}
                            className="h-11 w-11 rounded-xl border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium text-gray-700">Email Addresses</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => appendEmail({ value: "" })}
                      className="h-8 px-3 text-xs rounded-lg border-gray-200 hover:bg-violet-50 hover:border-violet-300"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {emailFields.map((field, index) => (
                      <div key={field.id} className="flex gap-2">
                        <Input
                          placeholder="Email address"
                          type="email"
                          className="h-11 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20"
                          {...register(`email.${index}.value`)}
                        />
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => removeEmail(index)}
                            className="h-11 w-11 rounded-xl border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Company Details</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Your company"
                      className="h-12 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20"
                      {...register("companyName")}
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyURL" className="text-sm font-medium text-gray-700 mb-2 block">
                      Website
                    </Label>
                    <Input
                      id="companyURL"
                      placeholder="https://example.com"
                      className="h-12 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20"
                      {...register("companyURL")}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="companySlogan" className="text-sm font-medium text-gray-700 mb-2 block">
                    Company Slogan
                  </Label>
                  <Input
                    id="companySlogan"
                    placeholder="Your tagline"
                    className="h-12 border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20"
                    {...register("companySlogan")}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Address Information</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Your business address"
                    className="border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20 min-h-[80px]"
                    {...register("address")}
                  />
                </div>

                <div>
                  <Label htmlFor="comments" className="text-sm font-medium text-gray-700 mb-2 block">
                    Comments
                  </Label>
                  <Textarea
                    id="comments"
                    placeholder="Comment (If any)"
                    className="border-gray-200 rounded-xl focus:border-violet-400 focus:ring-violet-400/20 min-h-[80px]"
                    {...register("comments")}
                  />
                </div>
              </div>
            </div>

            <Summary product={product} />

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-14 text-base font-semibold bg-gradient-to-br from-gray-500 to-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing Order...
                  </div>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Complete Order - {product.price + 60} tk.
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default OrderForm
