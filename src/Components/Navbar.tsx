import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, Menu } from "lucide-react"

const Navbar = () => {
  return (
    <div className="bg-slate-100 border-b">
      <nav className="flex justify-between py-3 items-center px-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-blue-800" />
          <h1 className="text-xl font-bold text-blue-800">TransportHub</h1>
        </div>
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-4">
            <Link href="/" className="text-sm font-medium hover:text-blue-800 hover:underline hover:underline-offset-2">
              Home
            </Link>
            <Link
              href="/tracking"
              className="text-sm font-medium hover:text-blue-800 hover:underline hover:underline-offset-2"
            >
              Live Tracking
            </Link>
            <Link
              href="/bookings"
              className="text-sm font-medium hover:text-blue-800 hover:underline hover:underline-offset-2"
            >
              My Bookings
            </Link>
            <Link
              href="/companies"
              className="text-sm font-medium hover:text-blue-800 hover:underline hover:underline-offset-2"
            >
              Companies
            </Link>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </div>
  )
}

export { Navbar }
