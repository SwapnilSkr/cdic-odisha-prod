"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import { themes } from "@/lib/themes";
import Image from "next/image";

interface TimelineItem {
  image: string;
  text: string;
  location: string;
}

const truncateCaption = (caption: string, wordLimit: number = 10): string => {
  const words = caption.split(" ");
  return words.length > wordLimit
    ? `${words.slice(0, wordLimit).join(" ")}...`
    : caption;
};

export function Timeline() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const response = await fetch("/api/timelines");

        if (!response.ok) {
          throw new Error(`Error fetching timelines: ${response.status}`);
        }

        const transformedData: TimelineItem[] = (await response.json()).map(
          (item: TimelineItem) => ({
            image: item.image || "/placeholder.svg",
            text: truncateCaption(item.text),
            location: item.location || "Unknown Location",
          })
        );
        setTimelineItems(transformedData);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeline();
  }, []);

  console.log("timelineItems", timelineItems);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          <p className="text-gray-600 mt-4">Loading timeline...</p>
        </div>
      </div>
    );
  }

  return (
    <Card className={`shadow-lg ${currentTheme.shadow}`}>
      <h2 className="text-xl font-semibold p-6 pb-4">Timeline</h2>
      <div
        className="max-h-[400px] overflow-y-auto scrollbar-thin"
        style={
          {
            "--scrollbar-color":
              theme === "blue"
                ? "#1E90FF"
                : theme === "dark"
                  ? "#FFD700"
                  : "#FF6B00",
            "--scrollbar-bg": "transparent",
          } as React.CSSProperties
        }
      >
        <div className="space-y-4 p-6 pt-2">
          {timelineItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 relative pr-4">
              {/* Image */}
              <div
                className={`w-[60px] h-[60px] shrink-0 rounded-lg ${currentTheme.accent} overflow-hidden`}
              >
                <Image
                  width={60}
                  height={60}
                  src={item.image || "/placeholder.svg"}
                  alt={`Profile of ${item.location}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text and Location */}
              <div className="flex-1">
                <p className="text-sm text-gray-600 break-all">{item.text}</p>
                <p className="text-xs text-gray-500 mt-1">📍 {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
