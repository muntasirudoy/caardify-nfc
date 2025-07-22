"use server";
import { api } from "@/lib/api-fetch";
import { EnvConfig } from "@/lib/env-config";

export const createOrderAction = async (data: FormData) => {
  try {
    const token = await api.getAuthorizationCookie();

    const response = await fetch(`${EnvConfig.API_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token?.value ?? ""}`,
      },
      body: data,
    });

    const parsedResponse = await response.json();

    if (response.status !== 201) {
      return parsedResponse;
    }
    console.log(parsedResponse);
  } catch (error) {
    console.error("Error adding product", error);
  }
};
