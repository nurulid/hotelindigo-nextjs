import { NextResponse } from "next/server";
import { hotelData } from "@/lib/data";

export async function GET() {
  try {
    return NextResponse.json(hotelData.exclusiveOffers);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch exclusiveOffers",
      },
      { status: 500 }
    );
  }
}
