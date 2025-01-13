"use client";

import { Card } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import { themes } from "@/lib/themes";

const timelineItems = [
  {
    image: "/placeholder.svg?height=60&width=60",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    image: "/placeholder.svg?height=60&width=60",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna",
  },
  {
    image: "/placeholder.svg?height=60&width=60",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  },
  {
    image: "/placeholder.svg?height=60&width=60",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna",
  },
];

export function Timeline() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

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
              <div
                className={`w-[60px] h-[60px] shrink-0 rounded-lg ${currentTheme.accent} overflow-hidden`}
              >
                <div className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-gray-600 flex-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
