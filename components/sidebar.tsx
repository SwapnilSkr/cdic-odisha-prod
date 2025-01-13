"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { BarChart, MessageSquare, LayoutDashboard, Settings, LogOut, X } from 'lucide-react'
import { themes } from "@/lib/themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/" },
  { name: "Timeline Trends", icon: BarChart, href: "/timeline" },
  { name: "Lorem Ipsum", icon: MessageSquare, href: "#" },
  // Add more menu items as needed
]

interface SidebarProps {
  isMobile?: boolean
  onClose?: () => void
}

export function Sidebar({ isMobile, onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme()
  const currentTheme = themes[theme]

  return (
    <div className={`flex h-full w-64 flex-col transition-colors duration-300 ${currentTheme.sidebar} ${isMobile ? '' : 'hidden md:flex'}`}>
      {isMobile && (
        <Button variant="ghost" className="absolute top-4 right-4 text-white" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      )}
      <div className="p-4">
        <h1 className={`text-2xl font-bold ${currentTheme.sidebarText}`}>CDIC</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={isMobile ? onClose : undefined}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${currentTheme.sidebarText} hover:bg-white/10`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 space-y-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`w-full justify-start ${currentTheme.sidebarText} hover:bg-white/10`}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {Object.entries(themes).map(([key, value]) => (
              <DropdownMenuItem
                key={key}
                onClick={() => {
                  setTheme(key as keyof typeof themes);
                  if (isMobile && onClose) {
                    onClose();
                  }
                }}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-2 ${value.primary}`} />
                  {value.name}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" className={`w-full justify-start ${currentTheme.sidebarText} hover:bg-white/10`}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

