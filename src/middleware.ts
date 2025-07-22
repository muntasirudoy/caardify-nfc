import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUser } from "./actions/authenticated";

const AUTHENTICATION_ROUTES = ["/auth/login", "/auth/signup"];
const PRIVATE_ROUTES = ["/dashboard", "/dashboard/user", "/dashboard/admin"];

export async function middleware(req: NextRequest) {
  console.log("Route Middleware", req.nextUrl.pathname);

  let authUser;
  try {
    authUser = await getAuthenticatedUser();
  } catch (error) {
    console.error("Error fetching authenticated user:", error);
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  const normalizedPath = req.nextUrl.pathname.replace(/\/$/, ""); // Normalize slashes

  // Redirect to login if accessing private routes without authentication
  if (
    !authUser &&
    PRIVATE_ROUTES.some((route) => normalizedPath.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Redirect authenticated users away from auth routes
  if (
    authUser &&
    AUTHENTICATION_ROUTES.some((route) => normalizedPath === route)
  ) {
    if (authUser.role === "admin") {
      return NextResponse.redirect(new URL("/dashboard/admin", req.url));
    } else {
      return NextResponse.redirect(new URL("/dashboard/user", req.url));
    }
  }

  // Default case: Proceed with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
