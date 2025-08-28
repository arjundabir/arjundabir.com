import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/admin/session";

const protectedRoutes = ["/blog/drafts"];

export async function middleware(request: NextRequest) {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  if (isProtectedRoute && !session)
    return NextResponse.redirect(new URL("/", request.nextUrl));
  if (path.endsWith("/blog/drafts/new")) {
    // redirect user to the page with the current date for id
    const currentDate = new Date().toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    const [month, day, year] = currentDate.split("/");
    const formattedDate = `${month.padStart(2, "0")}${day.padStart(
      2,
      "0"
    )}${year}`;
    return NextResponse.redirect(
      new URL(`/blog/drafts/${formattedDate}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
