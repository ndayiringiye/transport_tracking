import { Navbar } from "../components/navbar"
import { LiveMap } from "../components/live-map"
import { VehicleList } from "../components/vehicle-list"

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Live Vehicle Tracking</h1>
            <p className="text-muted-foreground">Real-time GPS tracking of all vehicles across transport companies</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <LiveMap />
            </div>
            <div>
              <VehicleList />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
