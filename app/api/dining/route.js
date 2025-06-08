import { NextResponse } from 'next/server';
import { hotelData } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: hotelData.dining
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch dining information'
    }, { status: 500 });
  }
}