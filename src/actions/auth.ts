"use server";

import { redirect } from "next/navigation";
import { api } from "../lib/api-fetch";
import { cookies } from "next/headers";

export const signUpAction = async (_prevState: any, formData: FormData) => {
  const data = await api.post("auth/signup", {
    email_or_phone: formData.get("email_or_phone"),
    password: formData.get("password"),
  });
  return data;
};

// export const loginAction = async (_prevState: any, formData: FormData) => {
//   const response = await api.post("auth/login", {
//     email_or_phone: formData.get("email_or_phone"),
//     password: formData.get("password"),
//   });

//   await api.setAuthCookieValue(response?.data?.access_token);

//   const user = await api.get("auth/verify-token");

//   const userObject = {
//     ...user.data,
//   };

//   const userRole = user?.data?.role?.name;
//   let redirectPath = "/dashboard/user";

//   if (userRole === "Customer") {
//     userObject["role"] = "customer";
//   } else {
//     userObject["role"] = "admin";
//     redirectPath = "/dashboard/admin";
//   }

//   await api.setUserCookie(JSON.stringify(userObject));

//   redirect(redirectPath);
// };

export const logoutAction = async () => {
  "use server";

  const serverCookies = await cookies();
  serverCookies.delete("Authorization");
  serverCookies.delete("user");
  redirect("/auth/login");
};

export const loginAction = async (_prevState: any, formData: FormData) => {
  const response = await api.post("auth/login", {
    email_or_phone: formData.get("email_or_phone"),
    password: formData.get("password"),
  });

  await api.setAuthCookieValue(response?.data?.access_token);

  const user = await api.get("auth/verify-token");

  const userObject = {
    ...user.data,
  };

  const userRole = user?.data?.role?.name;
  let defaultRedirectPath = "/dashboard/user";

  if (userRole === "Customer") {
    userObject["role"] = "customer";
  } else {
    userObject["role"] = "admin";
    defaultRedirectPath = "/dashboard/admin";
  }

  await api.setUserCookie(JSON.stringify(userObject));

  redirect(defaultRedirectPath);
};
