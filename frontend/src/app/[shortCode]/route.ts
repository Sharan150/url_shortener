import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ shortCode: string }> }) {
  const { shortCode } = await params;
  const backendUrl = (process.env.BACKEND_URL || 'http://localhost:8080').replace(/\/$/, '');
  
  return NextResponse.redirect(`${backendUrl}/${shortCode}`, 302);
}
