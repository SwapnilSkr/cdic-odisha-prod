"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { themes, type ThemeKey } from "@/lib/themes"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: ThemeKey
  setTheme: (theme: ThemeKey) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeKey>('blue')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeKey
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme)
    }
  }, [])

  const value = {
    theme,
    setTheme: (newTheme: ThemeKey) => {
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

