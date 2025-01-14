import { NextResponse } from "next/server";
import { fetchAndStoreTimeline } from "@/lib/TimelineCron";

export async function GET() {
  try {
    await fetchAndStoreTimeline();
    return NextResponse.json({
      message: "Timeline fetched and stored successfully",
    });
  } catch (error) {
    console.error("Error fetching timelines:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
