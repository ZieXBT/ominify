import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || '';
    const pathname = request.nextUrl.pathname;

    // Define your EWIAI domain(s) here — update this when you add the custom domain
    const ewiaiDomains = ['ewiai.vercel.app']; // Add your custom domain too, e.g. 'ewiai.com', 'www.ewiai.com'

    const isEwiaiDomain = ewiaiDomains.some(domain => hostname.includes(domain));

    if (isEwiaiDomain) {
        // If user hits root on the EWIAI domain → rewrite to /ewiai
        if (pathname === '/') {
            return NextResponse.rewrite(new URL('/ewiai', request.url));
        }

        // If the path doesn't already start with /ewiai, rewrite it
        if (!pathname.startsWith('/ewiai') && !pathname.startsWith('/_next') && !pathname.startsWith('/api') && !pathname.includes('.')) {
            return NextResponse.rewrite(new URL(`/ewiai${pathname}`, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc.)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js)$).*)',
    ],
};
