import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  sku: z.string(),
  modelNumber: z.string(),
  imageUrlFront: z.string().url(),
  imageUrlBack: z.string().url(),
});

export type Product = z.infer<typeof ProductSchema>;
