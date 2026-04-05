import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 400 }
        )
      }
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist!', data },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
