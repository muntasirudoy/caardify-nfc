"use server";
import { api } from "@/lib/api-fetch";
import { ProductSchema } from "./schema/product";
import { cookies } from "next/headers";
import { config } from "@/config";
// get all product
export const getProducts = async () => {
  const productsResponse = await api.get("products");
  return productsResponse?.data;
};
// get single product by id
export const getProductByProductId = async (id: string) => {
  const productsResponse = await api.get(`products/${id}`);
  return ProductSchema.safeParse(productsResponse?.data);
};

//Delete product by ID
export const deleteProductById = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("Authorization")?.value;
  if (!token) {
    throw new Error("Unauthorized. No token found.");
  }
  const res = await fetch(`${config.NEXT_PUBLIC_API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to delete product");
  }

  return await res.json();
};
