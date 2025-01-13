"use client"

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"
import { useTheme } from "@/components/theme-provider"
import { themes } from "@/lib/themes"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <header className={`md:hidden sticky top-0 z-50 w-full ${currentTheme.sidebar} p-4 transition-colors duration-300`}>
      <div className="flex items-center justify-between">
        <h1 className={`text-xl font-bold ${currentTheme.sidebarText}`}>CDIC</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className={`p-2 ${currentTheme.sidebarText}`}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar isMobile onClose={() => setIsOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

