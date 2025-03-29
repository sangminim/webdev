"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserCircle } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const publicRoutes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/locations", label: "Locations" },
    { href: "/contact", label: "Contact" },
  ]

  const patientRoutes = [
    { href: "/patient/dashboard", label: "Dashboard" },
    { href: "/patient/history", label: "Medical History" },
    { href: "/patient/appointments", label: "Appointments" },
    { href: "/patient/messages", label: "Messages" },
    { href: "/patient/profile", label: "Profile" },
  ]

  const staffRoutes = [
    { href: "/staff/dashboard", label: "Dashboard" },
    { href: "/staff/patients", label: "Patient Lookup" },
    { href: "/staff/appointments", label: "Manage Appointments" },
  ]

  const routes = user ? (user.role === "staff" ? staffRoutes : patientRoutes) : publicRoutes

  return (
    <div className="flex items-center w-full">
      <Link href="/" className="flex items-center space-x-2 mr-8">
        <span className="text-xl font-bold text-primary">HealthCare Center</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-8 flex-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === route.href ? "text-primary" : "text-muted-foreground",
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center ml-auto">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="font-medium">{user.name}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild variant="default" size="sm">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  )
}

