import dbConnect from "./dbConnection";
import Timeline from "../models/Timeline";

const HIKER_API_URL =
  "https://api.hikerapi.com/v2/hashtag/medias/recent?name=odisha";

interface APIResponse {
  response: {
    sections: [
      {
        layout_type: string;
        layout_content: {
          one_by_two_item: {
            clips: {
              items: [
                {
                  media: {
                    caption: {
                      text: string;
                      created_at: string;
                      user: {
                        username: string;
                        full_name: string;
                        profile_pic_url: string;
                      };
                    };
                    location: {
                      city: string;
                    };
                    video_versions: [
                      {
                        url: string;
                      },
                    ];
                  };
                },
              ];
            };
          };
        };
      },
    ];
  };
}

export const fetchAndStoreTimeline = async () => {
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

    const data = (await response.json()) as APIResponse;

    // Transform the data
    const timeline =
      data.response.sections[0].layout_content.one_by_two_item.clips.items.map(
        (item) => {
          return {
            image: item.media.caption.user.profile_pic_url || "",
            text: item.media.caption.text || "",
            location: item.media.location
              ? item.media.location.city
              : "Unknown Location",
            videoUrl: item.media.video_versions[0].url || "",
          };
        }
      );
    // Delete old entries
    await Timeline.deleteMany({});

    // Insert new entries
    await Timeline.insertMany(timeline);

    console.log("Timeline data updated successfully!");
  } catch (error) {
    console.error("Error updating trends:", error);
  }
};
