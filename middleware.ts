import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const protectedPrefixes = ["/dashboard", "/user", "/users", "/reports"];
  const token = request.cookies.get("token");
  const { pathname } = request.nextUrl;

  // Redirect logged-in user away from login
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Protect all selected route groups
  const isProtected = protectedPrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/dashboard/:path*",
    "/user/:path*",
    "/users/:path*",
    "/reports/:path*",
  ],
};