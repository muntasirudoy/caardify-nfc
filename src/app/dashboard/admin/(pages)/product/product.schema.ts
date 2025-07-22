import { z } from "zod";

export const CreateProductSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().optional(),
  price: z.string().min(1, { message: "Price is required" }),
  sku: z.string().min(1, { message: "SKU is required" }),
  modelNumber: z.string().min(1, { message: "SKU is required" }),
  category: z.string().min(1, { message: "SKU is required" }),
  initialActiveDayCount: z.number().min(1, { message: "SKU is required" }),
});

export type CreateProduct = z.infer<typeof CreateProductSchema>;
