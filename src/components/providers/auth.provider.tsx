"use client";
import { UserSchema } from "@/actions/schema/user";
import { createAxiosInstance } from "@/lib/api.config";
import { createContext, PropsWithChildren, useContext } from "react";
import { z } from "zod";
import { AxiosInstance } from "axios"
import { QueryClient, QueryClientProvider } from "react-query";
interface AuthContextProps {
  user: User,
  axiosInstance: AxiosInstance
}
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
type User = z.infer<typeof UserSchema>
interface AuthProviderProps extends PropsWithChildren {
  user: User;
}

export const AuthProvider = ({ children, user }: AuthProviderProps) => {
  // const authUser = UserSchema.parse(user)
  if (user?.token) {
    const axiosInstance = createAxiosInstance(() => user.token);
    const queryClient = new QueryClient();
    return <AuthContext.Provider value={{ user, axiosInstance }}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AuthContext.Provider>;
  } else {
    const axiosInstance = createAxiosInstance(() => null, true);
    const queryClient = new QueryClient();
    return <AuthContext.Provider value={{ user, axiosInstance }}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AuthContext.Provider>;
  }
};


export const useAuth = () => {
  const isAuthenticated = useContext(AuthContext);
  if (isAuthenticated === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return isAuthenticated;
};

