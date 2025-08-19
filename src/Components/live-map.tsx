"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Zap } from "lucide-react"

export function LiveMap() {
  // Mock vehicle positions on map
  const vehicles = [
    { id: "1", x: 25, y: 30, status: "active", plate: "ABC-123" },
    { id: "2", x: 60, y: 45, status: "delayed", plate: "XYZ-789" },
    { id: "3", x: 80, y: 20, status: "arrived", plate: "DEF-456" },
    { id: "4", x: 40, y: 70, status: "active", plate: "GHI-012" },
  ]

  const getVehicleColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "delayed":
        return "bg-yellow-500"
      case "arrived":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="h-5 w-5" />
          Live GPS Map
        </CardTitle>
        <div className="flex gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Active
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            Delayed
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            Arrived
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-[500px] bg-slate-100 rounded-b-lg overflow-hidden">
          {/* Mock map background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
            {/* Mock roads */}
            <div className="absolute top-1/4 left-0 right-0 h-2 bg-gray-300"></div>
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300"></div>
            <div className="absolute top-3/4 left-0 right-0 h-2 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-1/4 w-2 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-2 bg-gray-300"></div>

            {/* Vehicle markers */}
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${vehicle.x}%`, top: `${vehicle.y}%` }}
              >
                <div
                  className={`w-4 h-4 rounded-full ${getVehicleColor(vehicle.status)} border-2 border-white shadow-lg animate-pulse`}
                ></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {vehicle.plate}
                </div>
              </div>
            ))}

            {/* Mock locations */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow">
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">Downtown</span>
            </div>

            <div className="absolute top-4 right-4 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Airport</span>
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow">
              <MapPin className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">University</span>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow">
              <MapPin className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium">Mall</span>
            </div>
          </div>

          {/* Map controls */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <Button size="sm" variant="secondary">
              <Zap className="h-4 w-4 mr-1" />
              Real-time
            </Button>
            <Button size="sm" variant="outline">
              Refresh
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
