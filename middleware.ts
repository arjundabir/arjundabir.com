import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.href.endsWith("/blog/drafts/new")) {
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
