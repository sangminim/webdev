import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { RoleToggle } from "@/components/role-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex-1">
          <MainNav />
        </div>
        <div className="flex items-center space-x-4">
          <RoleToggle />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

