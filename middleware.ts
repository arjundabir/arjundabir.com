import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.href.endsWith("/blog/drafts/new")) {
    // redirect user to the page with the current date for id
    const currentDate = new Date().toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    const formattedDate = currentDate.replaceAll("/", "");
    return NextResponse.redirect(
      new URL(`/blog/drafts/${formattedDate}`, request.url)
    );
  }
}
