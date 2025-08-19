import { Navbar } from "@/components/navbar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { VehicleTracker } from "@/components/vehicle-tracker"
import { BookingSystem } from "@/components/booking-system"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          <DashboardOverview />
          <div className="grid lg:grid-cols-2 gap-8">
            <VehicleTracker />
            <BookingSystem />
          </div>
        </div>
      </main>
    </div>
  )
}
