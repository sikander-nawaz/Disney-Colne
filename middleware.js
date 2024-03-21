import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export async function middleware(request) {
  const session = await getSession({ req: request });

  const protectedRoutes = ["/landingPage/page"]; // Protected routes
  const currentRoute = request.nextUrl.pathname;

  if (protectedRoutes.includes(currentRoute) && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Match all routes
};
