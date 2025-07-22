import { z } from "zod";

export const OrderSchema = z.object({
  address: z.string(),
  designation: z.string(),
  fullName: z.string(),
  discountId: z.string().optional(),
  username: z.string(),
  productId: z.string(),
  title: z.string(),
  about: z.string(),
  companyName: z.string(),
  companyURL: z.string(),
  companySlogan: z.string(),
  shipingAddress: z.string(),
  comments: z.string().optional(),
  // companyLogo: z.string().optional(),
  image: z.string().optional(),
  email: z
    .array(z.string().email({ message: "Invalid email address" }))
    .min(1, "At least one email is required"),
  phoneNumber: z
    .array(z.string().min(6, "Phone number too short"))
    .min(1, "At least one phone number is required"),
});

// export const OrderSchema = z.object({
//   discountId: z.string(),
//   username: z.string(),
//   productId: z.string(),
//   title: z.string(),
//   about:z.string(),
//   companyName:z.string(),
//   companyURL:z.string(),
//   companySlogan:z.string(),
//   shipingAddress: z.string(),

// });

export type Order = z.infer<typeof OrderSchema>;
