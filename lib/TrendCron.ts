import dbConnect from "./dbConnection";
import Trend from "../models/Trend";

const HIKER_API_URL =
  "https://api.hikerapi.com/v1/hashtag/medias/top?name=odisha&amount=50";

export const fetchAndStoreTrends = async () => {
  try {
    await dbConnect();

    // Fetch data from the Hiker API
    const response = await fetch(HIKER_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-key": process.env.NEXT_PUBLIC_HIKER_API_KEY || "",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Hiker API: ${response.status}`);
    }

    const data = await response.json();

    // Transform the data
    const trends = data.map(
      (item: {
        user: { profile_pic_url: string };
        caption_text: string;
        location: { name: string };
      }) => ({
        image: item.user.profile_pic_url,
        text: item.caption_text,
        location: item.location?.name || "Unknown Location",
        createdAt: new Date(),
      })
    );

    // Delete old entries
    await Trend.deleteMany({});

    // Insert new entries
    await Trend.insertMany(trends);

    console.log("Trends data updated successfully!");
  } catch (error) {
    console.error("Error updating trends:", error);
  }
};
