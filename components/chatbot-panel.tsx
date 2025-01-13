"use client";

import { Card } from "@/components/ui/card";
import { Bot } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const themes = {
  blue: {
    background: "bg-blue-500",
    panel: "bg-blue-100/50",
    icon: "bg-blue-100 text-blue-500",
    inputBg: "bg-blue-50",
    inputBorder: "border-blue-200",
    messageBg: "bg-blue-500",
    messageText: "text-white",
    userMessageBg: "bg-blue-100",
    userMessageText: "text-gray-700",
    dots: "bg-blue-400",
    shadow: "shadow-blue-500/50",
  },
  dark: {
    background: "bg-gray-800",
    panel: "bg-gray-700",
    icon: "bg-yellow-400 text-gray-800",
    inputBg: "bg-gray-600",
    inputBorder: "border-gray-600",
    messageBg: "bg-yellow-400",
    messageText: "text-gray-900",
    userMessageBg: "bg-gray-600",
    userMessageText: "text-gray-100",
    dots: "bg-yellow-400",
    shadow: "shadow-gray-900/50",
  },
  orange: {
    background: "bg-orange-500",
    panel: "bg-orange-100/50",
    icon: "bg-orange-100 text-orange-500",
    inputBg: "bg-orange-50",
    inputBorder: "border-orange-200",
    messageBg: "bg-orange-500",
    messageText: "text-white",
    userMessageBg: "bg-orange-100",
    userMessageText: "text-gray-700",
    dots: "bg-orange-400",
    shadow: "shadow-orange-500/50",
  },
};

export function ChatbotPanel() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <Card className={`shadow-lg ${currentTheme.shadow}`}>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div
            className={`w-10 h-10 rounded-lg ${currentTheme.icon} flex items-center justify-center`}
          >
            <Bot className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold">Chatbot Interactive Panel</h2>
        </div>

        <div
          className={`rounded-3xl p-6 ${currentTheme.panel} transition-colors duration-300`}
        >
          <div className="space-y-4 mb-4">
            {/* User message */}
            <div className="flex items-start gap-2 max-w-[80%]">
              <div className={`rounded-2xl p-3 ${currentTheme.userMessageBg}`}>
                <p className={`text-sm ${currentTheme.userMessageText}`}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque
                </p>
              </div>
            </div>

            {/* Bot message */}
            <div className="flex items-start justify-end gap-2">
              <div
                className={`rounded-2xl p-3 max-w-[80%] ${currentTheme.messageBg}`}
              >
                <p className={`text-sm ${currentTheme.messageText}`}>
                  error sit voluptatem accusantium doloremque
                </p>
              </div>
            </div>

            {/* Typing indicator */}
            <div className="flex justify-end">
              <div className="flex gap-1">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${currentTheme.dots}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Input field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your Query"
              className={`w-full rounded-full py-3 px-4 pr-12 ${currentTheme.inputBg} ${currentTheme.inputBorder} border focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-300`}
            />
            <button
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${currentTheme.messageBg} transition-colors duration-300`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
