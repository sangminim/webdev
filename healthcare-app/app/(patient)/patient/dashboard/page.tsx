"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, FileText, MessageSquare, User } from "lucide-react"

export default function PatientDashboard() {
  const { user } = useAuth()

  // Mock data
  const nextAppointment = {
    date: "March 30, 2025",
    time: "10:30 AM",
    doctor: "Dr. Jane Smith",
    type: "Annual Physical",
    location: "Main Hospital",
  }

  const stats = [
    {
      title: "Total Visits",
      value: "12",
      icon: Calendar,
    },
    {
      title: "Active Conditions",
      value: "2",
      icon: FileText,
    },
    {
      title: "Unread Messages",
      value: "3",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}</h1>
        <Button asChild>
          <Link href="/patient/appointments">Schedule Appointment</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Next Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            {nextAppointment ? (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{nextAppointment.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-medium">{nextAppointment.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Provider:</span>
                  <span className="font-medium">{nextAppointment.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{nextAppointment.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">{nextAppointment.location}</span>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/patient/appointments">View Details</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-muted-foreground">No upcoming appointments</p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <Link href="/patient/appointments">Schedule Now</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-medium">Lab Results Available</p>
                <p className="text-sm text-muted-foreground">March 25, 2025</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-medium">Prescription Refilled</p>
                <p className="text-sm text-muted-foreground">March 20, 2025</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-medium">Appointment Completed</p>
                <p className="text-sm text-muted-foreground">March 15, 2025</p>
              </div>
            </div>
            <Button variant="link" className="mt-4 p-0" asChild>
              <Link href="/patient/history">View All Activity</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-4 flex flex-col" asChild>
                <Link href="/patient/messages">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  <span>Messages</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col" asChild>
                <Link href="/patient/history">
                  <FileText className="h-6 w-6 mb-2" />
                  <span>Medical Records</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col" asChild>
                <Link href="/patient/appointments">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span>Appointments</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col" asChild>
                <Link href="/patient/profile">
                  <User className="h-6 w-6 mb-2" />
                  <span>Profile</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

