export const themes = {
  blue: {
    name: "Blue",
    sidebar: "bg-blue-500",
    sidebarText: "text-white",
    primary: "bg-blue-500",
    primaryText: "text-white",
    cardText: "text-blue-100",
    accent: "bg-blue-100",
    accentText: "text-blue-500",
    map: "fill-blue-100 text-blue-600",
    chat: "bg-blue-50/50 border-blue-200",
    chatBot: "bg-blue-100 text-blue-600",
    shadow: "shadow-blue-400/20",
  },
  dark: {
    name: "Dark",
    sidebar: "bg-gray-800",
    sidebarText: "text-yellow-400",
    primary: "bg-gray-700",
    primaryText: "text-yellow-400",
    cardText: "text-yellow-100",
    accent: "bg-gray-700",
    accentText: "text-yellow-400",
    map: "fill-gray-700 text-yellow-400",
    chat: "bg-gray-700/50 border-gray-600",
    chatBot: "bg-gray-700 text-yellow-400",
    shadow: "shadow-black/20",
  },
  orange: {
    name: "Orange",
    sidebar: "bg-orange-500",
    sidebarText: "text-white",
    primary: "bg-orange-500",
    primaryText: "text-white",
    cardText: "text-orange-100",
    accent: "bg-orange-100",
    accentText: "text-orange-500",
    map: "fill-orange-100 text-orange-600",
    chat: "bg-orange-50/50 border-orange-200",
    chatBot: "bg-orange-100 text-orange-600",
    shadow: "shadow-orange-400/20",
  },
};

export type ThemeKey = keyof typeof themes;
