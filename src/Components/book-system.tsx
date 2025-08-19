"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, CreditCard, Users } from "lucide-react"

interface Route {
  id: string
  from: string
  to: string
  company: string
  departure: string
  arrival: string
  price: number
  availableSeats: number
  totalSeats: number
}

export function BookingSystem() {
  const [searchFrom, setSearchFrom] = useState("")
  const [searchTo, setSearchTo] = useState("")
  const [selectedDate, setSelectedDate] = useState("")

  const routes: Route[] = [
    {
      id: "1",
      from: "Downtown",
      to: "Airport",
      company: "City Express",
      departure: "08:30 AM",
      arrival: "09:15 AM",
      price: 25,
      availableSeats: 7,
      totalSeats: 35,
    },
    {
      id: "2",
      from: "University",
      to: "Mall",
      company: "Metro Lines",
      departure: "10:00 AM",
      arrival: "10:45 AM",
      price: 18,
      availableSeats: 12,
      totalSeats: 30,
    },
    {
      id: "3",
      from: "Hospital",
      to: "Station",
      company: "Swift Transport",
      departure: "11:30 AM",
      arrival: "12:00 PM",
      price: 15,
      availableSeats: 3,
      totalSeats: 25,
    },
  ]

  const getAvailabilityColor = (available: number, total: number) => {
    const ratio = available / total
    if (ratio > 0.5) return "text-green-600"
    if (ratio > 0.2) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Book Your Journey
        </CardTitle>
        <CardDescription>Search and book tickets for available routes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search Form */}
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from">From</Label>
              <Select value={searchFrom} onValueChange={setSearchFrom}>
                <SelectTrigger>
                  <SelectValue placeholder="Select departure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="university">University</SelectItem>
                  <SelectItem value="hospital">Hospital</SelectItem>
                  <SelectItem value="airport">Airport</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="to">To</Label>
              <Select value={searchTo} onValueChange={setSearchTo}>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="airport">Airport</SelectItem>
                  <SelectItem value="mall">Mall</SelectItem>
                  <SelectItem value="station">Station</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Travel Date</Label>
            <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          </div>

          <Button className="w-full">Search Routes</Button>
        </div>

        {/* Available Routes */}
        <div className="space-y-4">
          <h3 className="font-semibold">Available Routes</h3>

          {routes.map((route) => (
            <div key={route.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">
                    {route.from} → {route.to}
                  </span>
                </div>
                <Badge variant="outline">{route.company}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {route.departure} - {route.arrival}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">${route.price}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className={`text-sm ${getAvailabilityColor(route.availableSeats, route.totalSeats)}`}>
                    {route.availableSeats} seats available
                  </span>
                </div>

                <Button size="sm" disabled={route.availableSeats === 0} className="min-w-[100px]">
                  {route.availableSeats === 0 ? "Sold Out" : "Book Now"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full bg-transparent">
            View My Bookings
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
