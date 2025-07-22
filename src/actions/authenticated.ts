import { cookies } from "next/headers";

export const getAuthenticatedUser = async () => {
  const serverCookies = await cookies();
  const userString = serverCookies.get("user")?.value;
  const tokenString = serverCookies.get("Authorization")?.value;
  const user = userString ? JSON.parse(userString) : null;

  if (!user) {
    return null;
  }

  return {
    ...user,
    token: tokenString,
  };
};
