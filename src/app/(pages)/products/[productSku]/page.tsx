import axios from "axios";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { z } from "zod";
import { OrderButton } from "./order-button";

const getProductDetailsBySku = async (sku: string) => {
  if (!sku) {
    return notFound();
  }

  const { data } = await axios.get(
    `https://api.caardify.com/v1/products/sku/${sku}`,
  );
  if (!data) {
    throw new Error("Failed to load product details.");
  }
  return data;
};

const ProductDetailsSchema = z.object({
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  name: z.string(),
  modelNumber: z.string(),
  sku: z.string(),
  price: z.number(),
  description: z.string().optional().nullable(),
  imageUrlFront: z.string().optional().nullable(),
  imageUrlBack: z.string().optional().nullable(),
});

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productSku: string }>;
}) {
  const { productSku } = await params;
  const data = await getProductDetailsBySku(productSku);

  const parsedProduct = ProductDetailsSchema.safeParse(data?.data);

  if (!parsedProduct?.success) {
    console.error(parsedProduct.error);
    return (
      <div>
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 inter-var">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary font-secondary">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary font-secondary">
          All Products
        </Link>
        <span>/</span>
        <span className="text-foreground font-secondary">
          {parsedProduct.data.name}
        </span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={data.data.imageUrlFront || "/placeholder.svg"}
              alt="Metal NFC Business Card"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold font-secondary">
              {parsedProduct.data.name}
            </h1>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-bold font-secondary">
                BDT ৳{parsedProduct.data.price}
              </span>
              {/*
              <span className="text-lg text-muted-foreground line-through">
                Tk 7,000.00
              </span>
                 */}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center space-x-4 font-secondary">
              <Check className="h-5 w-5 text-muted-foreground" />
              <span>
                Tap to share—no app needed! Works with almost every smartphone.
              </span>
            </div>
            <div className="flex items-center space-x-4 font-secondary">
              <Check className="h-5 w-5 text-muted-foreground" />
              <span>Fully customizable with your design or templates.</span>
            </div>
            <div className="flex items-center space-x-4 font-secondary">
              <Check className="h-5 w-5 text-muted-foreground" />
              <span>Digital Caardify profile with contact & social links.</span>
            </div>
            <div className="flex items-center space-x-4 font-secondary">
              <Check className="h-5 w-5 text-muted-foreground" />
              <span>One-time card purchase + only 9 BDT/month.</span>
            </div>
            <div className="flex items-center space-x-4 font-secondary">
              <Check className="h-5 w-5" />
              <span>Eco-friendly, and reduces paper waste.</span>
            </div>
            <div className="flex items-center space-x-4 font-secondary">
              <Check className="h-5 w-5" />
              <span>70 BDT delivery all over Bangladesh, free in Feni!</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="flex justify-between items-center mt-6">
                <OrderButton productId={parsedProduct.data.id} />
              </div>
            </div>
          </div>

          <Separator />

          {/* 
             
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Customize With Your Logo</h2>
            <p className="text-muted-foreground">
              You can customize your metal digital business card with your own
              logo and it is very easy to do that this digital to your phone.
            </p>
          </div>
            */}
        </div>
      </div>
    </div>
  );
}

//
// <div className="flex space-x-4 overflow-auto pb-2">
//   {images.map((image, index) => (
//     <button
//       key={index}
//       onClick={() => setSelectedImage(index)}
//       className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 ${
//         selectedImage === index ? "border-primary" : "border-border"
//       }`}
//     >
//       <Image
//         src={image || "/placeholder.svg"}
//         alt={`Product thumbnail ${index + 1}`}
//         fill
//         className="object-cover"
//       />
//     </button>
//   ))}
// </div>
