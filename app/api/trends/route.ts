import dbConnect from "@/lib/dbConnection";
import Trend from "../../../models/Trend";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const trends = await Trend.find().sort({ createdAt: -1 });

    return NextResponse.json(trends);
  } catch (error) {
    console.error("Error fetching trends:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
