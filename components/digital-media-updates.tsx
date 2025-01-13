"use client"

import { Card } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"
import { themes } from "@/lib/themes"

export function DigitalMediaUpdates() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <Card className={`shadow-lg ${currentTheme.shadow}`}>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Digital Media Updates</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </Card>
  )
}

