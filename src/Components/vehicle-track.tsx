"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Users } from "lucide-react"

interface Vehicle {
  id: string
  plateNumber: string
  company: string
  route: string
  currentLocation: string
  destination: string
  status: "active" | "delayed" | "arrived" | "maintenance"
  passengers: number
  capacity: number
  estimatedArrival: string
  lastUpdate: string
}

export function VehicleTracker() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: "1",
      plateNumber: "ABC-123",
      company: "City Express",
      route: "Downtown → Airport",
      currentLocation: "Main Street Junction",
      destination: "International Airport",
      status: "active",
      passengers: 28,
      capacity: 35,
      estimatedArrival: "15 mins",
      lastUpdate: "2 mins ago",
    },
    {
      id: "2",
      plateNumber: "XYZ-789",
      company: "Metro Lines",
      route: "University → Mall",
      currentLocation: "University Campus",
      destination: "Shopping Mall",
      status: "delayed",
      passengers: 22,
      capacity: 30,
      estimatedArrival: "25 mins",
      lastUpdate: "1 min ago",
    },
    {
      id: "3",
      plateNumber: "DEF-456",
      company: "Swift Transport",
      route: "Hospital → Station",
      currentLocation: "Central Hospital",
      destination: "Train Station",
      status: "arrived",
      passengers: 15,
      capacity: 25,
      estimatedArrival: "Arrived",
      lastUpdate: "30 secs ago",
    },
  ])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev.map((vehicle) => ({
          ...vehicle,
          lastUpdate: Math.random() > 0.7 ? "Just now" : vehicle.lastUpdate,
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: Vehicle["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "delayed":
        return "bg-yellow-500"
      case "arrived":
        return "bg-blue-500"
      case "maintenance":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusVariant = (status: Vehicle["status"]) => {
    switch (status) {
      case "active":
        return "default"
      case "delayed":
        return "secondary"
      case "arrived":
        return "outline"
      case "maintenance":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="h-5 w-5" />
          Live Vehicle Tracking
        </CardTitle>
        <CardDescription>Real-time location and status of all vehicles</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(vehicle.status)}`} />
                <span className="font-semibold">{vehicle.plateNumber}</span>
                <Badge variant="outline" className="text-xs">
                  {vehicle.company}
                </Badge>
              </div>
              <Badge variant={getStatusVariant(vehicle.status)}>{vehicle.status}</Badge>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Route:</span>
                <span>{vehicle.route}</span>
              </div>

              <div className="flex items-center gap-2">
                <Navigation className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Current:</span>
                <span>{vehicle.currentLocation}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {vehicle.passengers}/{vehicle.capacity} passengers
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>ETA: {vehicle.estimatedArrival}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-xs text-muted-foreground">Last update: {vehicle.lastUpdate}</span>
                <Button size="sm" variant="outline">
                  View on Map
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-4 border-t">
          <Button className="w-full bg-transparent" variant="outline">
            View All Vehicles on Map
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
