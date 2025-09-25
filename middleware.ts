import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname);
    const repos = await fetch('https://api.github.com/users/kostyniuk/repos');
    console.log('I can make API calls in middleware 🥳');
    const data = await repos.json();
    return NextResponse.next();
}

export const config = {
    matcher: '/middleware-test/:path*',
  }