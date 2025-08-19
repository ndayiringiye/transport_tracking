import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Users, MapPin, TrendingUp } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Active Vehicles",
      value: "247",
      description: "Currently on routes",
      icon: Car,
      trend: "+12%",
    },
    {
      title: "Total Passengers",
      value: "1,834",
      description: "Today's bookings",
      icon: Users,
      trend: "+8%",
    },
    {
      title: "Routes Covered",
      value: "89",
      description: "Across all companies",
      icon: MapPin,
      trend: "+3%",
    },
    {
      title: "Revenue",
      value: "$24,580",
      description: "This month",
      icon: TrendingUp,
      trend: "+15%",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transport Management Dashboard</h1>
        <p className="text-muted-foreground">Real-time overview of your transport network and vehicle tracking</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

