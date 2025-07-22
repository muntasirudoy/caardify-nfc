"use server";

import { revalidatePath } from "next/cache";
import { CategoriesResponse } from "./category.schema";
import { api } from "@/lib/api-fetch";
import { EnvConfig } from "@/lib/env-config";

export const getCategoriesAction = async (): Promise<CategoriesResponse> => {
  try {
    const token = await api.getAuthorizationCookie();
    const response = await fetch(`${EnvConfig.API_BASE_URL}/categories`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.value ?? ""}`,
        "Content-Type": "application/json",
      },
      cache: "no-store", // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const addCategoryAction = async (formData: FormData) => {
  try {
    const token = await api.getAuthorizationCookie();

    // Convert FormData to JSON
    const categoryData = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      slug: formData.get("slug") as string,
      imageUrl: formData.get("imageUrl") as string,
      isActive: formData.get("isActive") === "true",
      sortOrder: formData.get("sortOrder") as string,
    };

    const response = await fetch(`${EnvConfig.API_BASE_URL}/categories`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token?.value ?? ""}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    });

    const parsedResponse = await response.json();

    if (response.status !== 201) {
      throw new Error(parsedResponse?.message || "Failed to add category");
    }

    revalidatePath("/dashboard/admin/categories");
    revalidatePath("/");
    return parsedResponse;
  } catch (error) {
    console.error("Error adding category", error);
    throw error;
  }
};
