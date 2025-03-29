"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="text-xl font-bold">HealthCare Center</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="mt-8 flex flex-col space-y-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
          {user ? (
            <Button
              variant="outline"
              onClick={() => {
                logout()
                setOpen(false)
              }}
            >
              Logout
            </Button>
          ) : (
            <Button asChild variant="default">
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            </Button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

