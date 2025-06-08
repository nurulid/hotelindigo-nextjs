import { NextResponse } from "next/server";
import { hotelData } from "@/lib/data";

export async function GET() {
  try {
    return NextResponse.json(hotelData.accommodations);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch accommodations",
      },
      { status: 500 }
    );
  }
}
