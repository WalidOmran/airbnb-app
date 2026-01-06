import { sendResetEmail } from '@/app/lib/resend';
import { NextResponse } from 'next/server';


export async function POST(request) {
  try {
    const { email, token } = await request.json();
    
    await sendResetEmail(email, token);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}