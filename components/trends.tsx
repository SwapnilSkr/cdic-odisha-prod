"use client";

import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { themes } from "@/lib/themes";
import { useEffect, useState } from "react";
import Image from "next/image";

interface TrendItem {
  image: string;
  text: string;
  location: string;
  icon: React.ComponentType;
}

interface ApiResponseItem {
  image: string;
  text: string;
  location: string;
}

// Utility function to truncate captions to 10 words
const truncateCaption = (caption: string, wordLimit: number = 10): string => {
  const words = caption.split(" ");
  return words.length > wordLimit
    ? `${words.slice(0, wordLimit).join(" ")}...`
    : caption;
};

export function Trends() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const [trendItems, setTrendItems] = useState<TrendItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/trends"); // Fetch from your local API endpoint

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Transform the data to apply truncation and add the icon
        const transformedData: TrendItem[] = data.map(
          (item: ApiResponseItem) => ({
            image: item && item.image ? item.image : "/placeholder.svg",
            text: item && item.text ? truncateCaption(item.text) : "", // Apply truncation here
            location:
              item && item.location ? item.location : "Unknown Location",
            icon: Instagram, // Add the icon
          })
        );

        setTrendItems(transformedData);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      } finally {
        setLoading(false); // Set loading to false after the API call completes
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          <p className="text-gray-600 mt-4">Loading trends...</p>
        </div>
      </div>
    );
  }

  return (
    <Card className={`shadow-lg ${currentTheme.shadow}`}>
      <h2 className="text-xl font-semibold p-6 pb-4">Trends</h2>
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
          {trendItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 relative pr-4">
              {/* Image Container */}
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
              {/* Caption and Location */}
              <div className="flex-1">
                <p className="text-sm text-gray-600 break-all">{item.text}</p>
                <p className="text-xs text-gray-500 mt-1">📍 {item.location}</p>
              </div>
              {/* Icon */}
              <div
                className={`w-5 h-5 shrink-0 mt-1 ${
                  theme === "blue"
                    ? "text-blue-500"
                    : theme === "dark"
                      ? "text-yellow-400"
                      : "text-orange-500"
                }`}
              >
                <item.icon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
