// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher(["/settings(.*)"])

// export default clerkMiddleware((auth, req)=>{
//     if(isProtectedRoute(req)) auth.protect();
// });

// export const config = {
//   matcher: [
//     "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"
//     // Skip Next.js internals and all static files, unless found in search params
//     // '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // // Always run for API routes
//     // '/(api|trpc)(.*)',
//   ],
// };
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(["/settings(.*)","/"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // all routes except static files/next internals
    "/(api|trpc)(.*)",        // all API routes
  ],
};
