

import { NextResponse } from 'next/server'
import { auth } from '@/app/lib/auth'  // Test import

console.log('🚀 MANUAL MIDDLEWARE!');

export async function middleware(req) {
  console.log('🔍 MANUAL Path:', req.nextUrl.pathname)
  
  const session = await auth()  // Direct call
  
  if (req.nextUrl.pathname.startsWith('/profile') && !session) {
    console.log('🚫 MANUAL REDIRECT!')
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*']
}
