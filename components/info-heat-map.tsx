"use client"

import { Card } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"
import { themes } from "@/lib/themes"

export function InfoHeatMap() {
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <Card className={`shadow-lg ${currentTheme.shadow}`}>
      <h2 className="text-xl font-semibold p-6 pb-4">Info heat map</h2>
      <div className="aspect-square relative bg-white rounded-lg overflow-hidden p-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 400 400"
            className={`w-full h-full ${currentTheme.map} transition-colors duration-300`}
          >
            <path
              d="M190.5,50.5c-1.9,0.2-3.8,0.5-5.7,0.7c-2.4,0.3-4.8,0.6-7.2,0.9
              c-2.4,0.3-4.8,0.6-7.2,0.9c-2.4,0.3-4.8,0.6-7.2,0.9c-2.4,0.3-4.8,0.6-7.2,0.9
              c-2.4,0.3-4.8,0.6-7.2,0.9c-2.4,0.3-4.8,0.6-7.2,0.9c-2.4,0.3-4.8,0.6-7.2,0.9"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-medium ${currentTheme.accentText}`}>Odisha</span>
          </div>
          <div className={`absolute w-2 h-2 rounded-full ${currentTheme.accentText}`} style={{ top: '30%', left: '40%' }} />
          <div className={`absolute w-2 h-2 rounded-full ${currentTheme.accentText}`} style={{ top: '50%', left: '60%' }} />
          <div className={`absolute w-2 h-2 rounded-full ${currentTheme.accentText}`} style={{ top: '70%', left: '45%' }} />
        </div>
      </div>
    </Card>
  )
}

