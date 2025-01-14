import dbConnect from "@/lib/dbConnection";
import Timeline from "../../../models/Timeline";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const timelines = await Timeline.find().sort({ createdAt: -1 });

    return NextResponse.json(timelines);
  } catch (error) {
    console.error("Error fetching trends:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
