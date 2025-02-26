import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/home', '/agent-home', '/admin-home']
}
