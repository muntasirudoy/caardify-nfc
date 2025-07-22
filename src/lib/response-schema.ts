import { z } from "zod";

export const AuthDataSchema = z.object({
  authToken: z.string(),
  data: z.object({
    access_token: z.string(),
    refresh_token: z.string(),
  }),
});

export const UserDataSchema = z.object({
  data: z.object({
    role_id: z.string(),
    role: z.object({
      name: z.string(),
    }),
  }),
});
export const SessionSchema = z.object({
  id_token: z.string(),
  authToken: z.string().optional(),
  refresh_token: z.string(),
  access_token: z.string(),
  roleId: z.string(),
  role: z.string(),
  user: z.object({
    name: z.string(),
    email: z.string(),
    image: z.string(),
  }),
  expires: z.string(),
});

// declare module "next-auth" {
//   interface Session {
//     id_token?: string;
//     authToken?: string;
//     refresh_token?: string;
//     access_token?: string;
//     roleId?: string;
//     role?: string;
//   }

//   interface User {
//     id_token?: string;
//     myToken?: string;
//     refresh_token?: string;
//     access_token?: string;
//     roleId?: string;
//     role?: string;
//   }
// }
