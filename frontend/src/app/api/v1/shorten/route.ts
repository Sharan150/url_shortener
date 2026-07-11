import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const backendUrl = (process.env.BACKEND_URL || 'http://localhost:8080').replace(/\/$/, '');
    
    console.log(`[Vercel API Proxy] Attempting to proxy request to: ${backendUrl}/api/v1/shorten`);
    
    const res = await fetch(`${backendUrl}/api/v1/shorten`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    
    if (!res.ok) {
      console.error(`[Vercel API Proxy] Backend returned status code: ${res.status}`);
      const errorText = await res.text();
      console.error(`[Vercel API Proxy] Backend error body: ${errorText}`);
      return NextResponse.json({ error: 'Backend error' }, { status: res.status });
    }
    
    const data = await res.json();
    console.log(`[Vercel API Proxy] Successfully received response from Backend.`);
    return NextResponse.json(data, { status: 201 });
    
  } catch (error: any) {
    console.error(`[Vercel API Proxy] Critical Exception during fetch: ${error.message}`);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
