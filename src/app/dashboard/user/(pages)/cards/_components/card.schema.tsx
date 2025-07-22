import { z } from "zod";

const ProfileSchema = z.object({
    id: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    customerId: z.string(),
    cardId: z.string(),
    username: z.string(),
    fullName: z.string(),
    phoneNumber: z.string(),
    email: z.string().email(),
    designation: z.string(),
    attributes: z.any(),
    image:z.string()  // update image here
    

});

const CardSchema = z.object({
    id: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    customerId: z.string(),
    orderId: z.string(),
    cardImage: z.string().nullable(),
    status: z.enum(["active", "inactive", "pending", "paid", "expire"]),
    profile: ProfileSchema,



});

export const CardResponseSchema = z.object({
    data: z.array(CardSchema),
    message: z.string(),
    statusCode: z.number(),
});

export type CardResponse = z.infer<typeof CardResponseSchema>
export type UserCard = z.infer<typeof CardSchema>
export type Profile = z.infer<typeof ProfileSchema>
