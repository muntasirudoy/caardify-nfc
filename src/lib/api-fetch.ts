import { cookies } from "next/headers";
import { EnvConfig } from "./env-config";
import { jwtDecode } from "jwt-decode";

class Api {
  public async get(path: string) {
    const token = await this.getAuthorizationCookie();

    const response = await fetch(`${EnvConfig.API_BASE_URL}/${path}`, {
      headers: {
        Authorization: `Bearer ${token?.value ?? ""}`,
      },
    });

    //   if (!response.ok) {
    //     throw new Error("Invalid token");
    //   }

    const parsedResponse = await response.json();

    return parsedResponse;
  }

  public async setUserCookie(user: string) {
    const token = await this.getAuthorizationCookie();
    console.log("Token:", user);
    (await cookies()).set({
      name: "user",
      value: user,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token?.value ?? "").exp! * 1000),
    });
  }

  public async setAuthCookieValue(token: string) {
    console.log("Token:", token);
    (await cookies()).set({
      name: "Authorization",
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }

  public async getAuthorizationCookie() {
    const serverCookies = await cookies();
    const token = serverCookies.get("Authorization");
    return token;
  }

  public async post<T extends Record<string, any>>(path: string, data: T) {
    const token = await this.getAuthorizationCookie();

    const response = await fetch(`${EnvConfig.API_BASE_URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value ?? ""}`,
      },
      body: JSON.stringify(data),
    });

    const parsedResponse = await response.json();

    //   if (!response.ok) {
    //     throw new Error(parsedResponse.error);
    //   }

    console.log(parsedResponse);
    // await this.setAuthCookieValue(parsedResponse.data.access_token);

    return parsedResponse;
  }
}

export const api = new Api();
