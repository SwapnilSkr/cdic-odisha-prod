"use client";

import { Card } from "@/components/ui/card";
import { ChatbotPanel } from "@/components/chatbot-panel";
import { DigitalMediaUpdates } from "@/components/digital-media-updates";
import { InfoHeatMap } from "@/components/info-heat-map";
import { Timeline } from "@/components/timeline";
import { Trends } from "@/components/trends";
import { useTheme } from "@/components/theme-provider";
import { themes } from "@/lib/themes";

export default function Home() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="space-y-6 pt-4 md:pt-0">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          className={`${currentTheme.primary} p-6 shadow-lg transition-colors duration-300`}
        >
          <div className="space-y-2">
            <p className={`text-sm font-medium ${currentTheme.primaryText}`}>
              Total Posts:
            </p>
            <p className={`text-4xl font-bold ${currentTheme.primaryText}`}>
              1234
            </p>
          </div>
        </Card>
        <Card
          className={`${currentTheme.primary} p-6 shadow-lg transition-colors duration-300`}
        >
          <div className="space-y-2">
            <p className={`text-sm font-medium ${currentTheme.primaryText}`}>
              Fact Checks:
            </p>
            <p className={`text-4xl font-bold ${currentTheme.primaryText}`}>
              567
            </p>
          </div>
        </Card>
        <Card
          className={`bg-white p-6 shadow-lg transition-colors duration-300 ${
            theme === "dark"
              ? "shadow-black/20"
              : theme === "orange"
                ? "shadow-orange-400/20"
                : "shadow-blue-400/20"
          }`}
        >
          {/* Empty white box */}
        </Card>
        <Card
          className={`bg-white p-6 shadow-lg transition-colors duration-300 ${
            theme === "dark"
              ? "shadow-black/20"
              : theme === "orange"
                ? "shadow-orange-400/20"
                : "shadow-blue-400/20"
          }`}
        >
          {/* Empty white box */}
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Timeline />
        <Trends />
        <InfoHeatMap />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChatbotPanel />
        <DigitalMediaUpdates />
      </div>
    </div>
  );
}
