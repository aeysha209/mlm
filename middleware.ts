import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get("token"); // get cookie

    // If user is logged in and visits login page → redirect to dashboard
    if (request.nextUrl.pathname.startsWith("/login") && token) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // If user is NOT logged in and visits dashboard → redirect to login
    if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Otherwise, continue
    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/dashboard"], // check both routes
};