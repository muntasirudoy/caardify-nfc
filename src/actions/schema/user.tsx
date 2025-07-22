import { z } from "zod";

export const UserSchema = z.object({
    id: z.string(),

    name: z.string(),
    email: z.string().email(),
    phone_number: z.string().optional(),
    role: z.string(),
    role_id: z.string(), // Ensures role_id is a string
    password: z.string(), // Ensures the password is a string
    token: z.string(), // Ensures the token is a string
    google_id: z.string().nullable(), // Accepts a string or null
    created_at: z.string().datetime(), // Ensures it's a valid ISO datetime string
    updated_at: z.string().datetime(), // Ensures it's a valid ISO datetime string
    permissions: z.array(z.string()), // Ensures it's an array of strings
});

export type User = z.infer<typeof UserSchema>