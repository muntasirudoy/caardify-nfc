import { z } from "zod";

export const LoginInputsSchema = z.object({
  mobile_email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginInputsDto = z.infer<typeof LoginInputsSchema>;
