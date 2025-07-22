import { z } from "zod";

export const SingupInputsSchema = z.object({
  // username: z.string().min(3).max(20),
  email_mobile: z.string().min(10).max(11),
  // email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
});

export type SingupInputsDto = z.infer<typeof SingupInputsSchema>;
