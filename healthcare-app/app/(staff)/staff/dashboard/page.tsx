"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Calendar, MessageSquare, User, AlertTriangle } from "lucide-react"

export default function StaffDashboard() {
  const { user } = useAuth()

  // Mock data
  const todaysAppointments = [
    {
      id: 1,
      time: "9:00 AM",
      patient: "Sarah Johnson",
      reason: "Annual Physical",
      status: "Checked In",
      priority: "Normal",
    },
    {
      id: 2,
      time: "10:30 AM",
      patient: "Michael Thompson",
      reason: "Autism Evaluation",
      status: "Scheduled",
      priority: "High",
    },
    {
      id: 3,
      time: "11:15 AM",
      patient: "Robert Davis",
      reason: "Cardiology Follow-up",
      status: "Scheduled",
      priority: "Normal",
    },
    {
      id: 4,
      time: "1:00 PM",
      patient: "Jennifer Wilson",
      reason: "Pediatric Oncology",
      status: "Scheduled",
      priority: "High",
    },
    {
      id: 5,
      time: "2:30 PM",
      patient: "David Martinez",
      reason: "Medication Review",
      status: "Scheduled",
      priority: "Normal",
    },
  ]

  const alerts = [
    {
      id: 1,
      patient: "Jennifer Wilson",
      message: "Lab results require immediate review",
      time: "30 minutes ago",
      priority: "High",
    },
    {
      id: 2,
      patient: "Michael Thompson",
      message: "Missed medication dose reported",
      time: "2 hours ago",
      priority: "Medium",
    },
    {
      id: 3,
      patient: "Robert Davis",
      message: "Abnormal heart rate detected",
      time: "4 hours ago",
      priority: "High",
    },
  ]

  const stats = [
    {
      title: "Total Patients",
      value: "1,248",
      icon: User,
    },
    {
      title: "Appointments Today",
      value: "24",
      icon: Calendar,
    },
    {
      title: "Pending Messages",
      value: "12",
      icon: MessageSquare,
    },
    {
      title: "High Priority Cases",
      value: "5",
      icon: AlertTriangle,
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}</h1>
        <div className="flex space-x-2">
          <Button asChild>
            <Link href="/staff/appointments">Manage Appointments</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/staff/patients">Patient Lookup</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Today's Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todaysAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.patient}</TableCell>
                    <TableCell>{appointment.reason}</TableCell>
                    <TableCell>{appointment.status}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          appointment.priority === "High" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {appointment.priority}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" asChild>
                <Link href="/staff/appointments">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Patient Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${
                    alert.priority === "High" ? "border-red-200 bg-red-50" : "border-yellow-200 bg-yellow-50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{alert.patient}</h4>
                      <p className="text-sm mt-1">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        alert.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {alert.priority}
                    </span>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <Button variant="outline" size="sm" className="w-full">
                      View Patient
                    </Button>
                    <Button size="sm" className="w-full">
                      Respond
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View All Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

