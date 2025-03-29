"use client"

import { useAuth } from "@/components/auth-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export function RoleToggle() {
  const { user, switchRole } = useAuth()

  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <Users className="mr-2 h-4 w-4" />
          {user.role === "patient" ? "Patient View" : "Staff View"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchRole("patient")}>Patient View</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchRole("staff")}>Staff View</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

