import { z } from "zod";

export const UserAttribleSchema = z.object({
  name: z.string(),
  designation: z.string(),
  school: z.string(),
  company: z.string(),
  about: z.string(),
  emails: z.array(z.string()),
  phones: z.array(z.string()),
  address: z.string(),
});

const UserProfileSchema = z.object({
  id: z.string(),
  cardId: z.string(),
  customerId: z.string(),
  template: z.string(),
  fullName: z.string(),
  title: z.string(),
  email: z
    .string()
    .array()
    .or(z.string().transform((val) => [val])), // handle both string and string[]
  phone: z
    .string()
    .array()
    .or(z.string().transform((val) => [val])),
  username: z.string(),
  website: z
    .string()
    .array()
    .or(z.string().transform((val) => [val])),
  address: z.string(),
  about: z.string(),
  companyName: z.string(),
  companySlogan: z.string(),
  companyUrl: z.string(),
  isPrivate: z
    .union([z.boolean(), z.string()])
    .transform((val) => val === true || val === "true"),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  attributes: z
    .string()
    .transform((val) => JSON.parse(val))
    .pipe(
      z.object({
        cardImage: z.string().url().optional(),
        fullName: z.string(),
        phoneNumber: z.array(z.string()),
        email: z.array(z.string()),
        designation: z.string(),
        about: z.string(),
        companyName: z.string(),
        companyUrl: z.string(),
        companySlogan: z.string(),
        comment: z.string(),
        companyLogoUrl: z.string().optional(),
        address: z.string(),
        title: z.string(),
        image: z.string().url().optional(),
      })
    ),
});

const UserCardSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  customerId: z.string(),
  orderId: z.string(),
  cardImage: z.string().nullable().optional(),
  status: z.string(),
});

export const UserSchema = z.object({
  profiles: UserProfileSchema,
  cards: UserCardSchema,
});

export type UserSchemaType = z.infer<typeof UserSchema>;
export type UserAttribleSchemaType = z.infer<typeof UserAttribleSchema>;
