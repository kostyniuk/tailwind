import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname);
    const repos = await fetch('https://api.github.com/users/kostyniuk/repos');
    console.log('I can make API calls in middleware 🥳');
    const data = (await repos.json()).map((repo: any) => repo.name);
    console.log(data);
    const response = NextResponse.next();
    response.headers.set('X-My-Custom-Header', 'my-value');
    return NextResponse.rewrite(
        new URL(`/middleware-test?repos=${encodeURIComponent(JSON.stringify(data))}`, request.url)
      );
}

export const config = {
    matcher: '/middleware-test/:path*',
  }