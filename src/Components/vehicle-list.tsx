"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car, Search, MapPin, Clock, Users, AlertCircle } from "lucide-react"

export function VehicleList() {
  const vehicles = [
    {
      id: "1",
      plateNumber: "ABC-123",
      company: "City Express",
      route: "Downtown → Airport",
      status: "active",
      passengers: 28,
      capacity: 35,
      eta: "15 mins",
      lastSeen: "2 mins ago",
    },
    {
      id: "2",
      plateNumber: "XYZ-789",
      company: "Metro Lines",
      route: "University → Mall",
      status: "delayed",
      passengers: 22,
      capacity: 30,
      eta: "25 mins",
      lastSeen: "1 min ago",
    },
    {
      id: "3",
      plateNumber: "DEF-456",
      company: "Swift Transport",
      route: "Hospital → Station",
      status: "arrived",
      passengers: 15,
      capacity: 25,
      eta: "Arrived",
      lastSeen: "30 secs ago",
    },
    {
      id: "4",
      plateNumber: "GHI-012",
      company: "City Express",
      route: "Mall → Downtown",
      status: "active",
      passengers: 31,
      capacity: 35,
      eta: "8 mins",
      lastSeen: "1 min ago",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Car className="h-4 w-4 text-green-600" />
      case "delayed":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case "arrived":
        return <MapPin className="h-4 w-4 text-blue-600" />
      default:
        return <Car className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "delayed":
        return "secondary"
      case "arrived":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-5 w-5" />
          Vehicle List
        </CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search vehicles..." className="pl-10" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3 overflow-y-auto max-h-[450px]">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="border rounded-lg p-3 space-y-2 hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getStatusIcon(vehicle.status)}
                <span className="font-semibold text-sm">{vehicle.plateNumber}</span>
              </div>
              <Badge variant={getStatusVariant(vehicle.status)} className="text-xs">
                {vehicle.status}
              </Badge>
            </div>

            <div className="space-y-1 text-xs text-muted-foreground">
              <div>{vehicle.company}</div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {vehicle.route}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {vehicle.passengers}/{vehicle.capacity}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  ETA: {vehicle.eta}
                </div>
              </div>
              <div className="text-xs">Last seen: {vehicle.lastSeen}</div>
            </div>

            <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
              Track Vehicle
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
