import { NextResponse } from "next/server";
import { fetchAndStoreTrends } from "@/lib/TrendCron";

export async function GET() {
  try {
    await fetchAndStoreTrends();

    return NextResponse.json({
      message: "Trends fetched and stored successfully",
    });
  } catch (error) {
    console.error("Error fetching trends:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
