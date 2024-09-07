import { NextResponse } from "next/server";

const loggedIn = true;

export const middleware = (request) => {
  if (!loggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};
export const config = {
  matcher: "/dashboard",
};
