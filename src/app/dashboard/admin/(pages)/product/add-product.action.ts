
"use server";

import { revalidatePath } from "next/cache";
import { api } from "../../../../../lib/api-fetch";
import { EnvConfig } from "../../../../../lib/env-config";

export const addProductAction = async (formData: FormData) => {
  try {
    const token = await api.getAuthorizationCookie();

    const response = await fetch(`${EnvConfig.API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token?.value ?? ""}`,
      },
      body: formData,
    });

    const parsedResponse = await response.json();

    if (response.status !== 201) {
      throw new Error(parsedResponse?.message || "Failed to add product");
    }

    revalidatePath("/dashboard/admin/products");
    revalidatePath("/");

    return parsedResponse;
  } catch (error) {
    console.error("Error adding product", error);
    throw error;
  }
};
