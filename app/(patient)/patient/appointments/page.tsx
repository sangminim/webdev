"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"

export default function AppointmentsPage() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined)
  const [location, setLocation] = useState<string | undefined>(undefined)
  const [provider, setProvider] = useState<string | undefined>(undefined)
  const [appointmentType, setAppointmentType] = useState<string | undefined>(undefined)

  // Mock data
  const locations = [
    { id: "1", name: "Main Hospital" },
    { id: "2", name: "Downtown Clinic" },
    { id: "3", name: "Pediatric Center" },
    { id: "4", name: "Cardiology Specialists" },
  ]

  const providers = [
    { id: "1", name: "Dr. Jane Smith", specialty: "Primary Care" },
    { id: "2", name: "Dr. Michael Johnson", specialty: "Pediatrics" },
    { id: "3", name: "Dr. Sarah Williams", specialty: "Neurology" },
    { id: "4", name: "Dr. Robert Davis", specialty: "Cardiology" },
  ]

  const appointmentTypes = [
    { id: "1", name: "Annual Physical" },
    { id: "2", name: "Follow-up" },
    { id: "3", name: "Sick Visit" },
    { id: "4", name: "Specialist Consultation" },
    { id: "5", name: "Vaccination" },
  ]

  // Mock time slots - in a real app, these would be fetched based on the selected date
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ]

  // Mock upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      date: "March 30, 2025",
      time: "10:30 AM",
      provider: "Dr. Jane Smith",
      type: "Annual Physical",
      location: "Main Hospital",
    },
    {
      id: 2,
      date: "April 15, 2025",
      time: "2:00 PM",
      provider: "Dr. Robert Davis",
      type: "Cardiology Follow-up",
      location: "Cardiology Specialists",
    },
  ]

  // Mock past appointments
  const pastAppointments = [
    {
      id: 3,
      date: "March 15, 2025",
      time: "11:00 AM",
      provider: "Dr. Jane Smith",
      type: "Annual Physical",
      location: "Main Hospital",
      status: "Completed",
    },
    {
      id: 4,
      date: "February 10, 2025",
      time: "9:30 AM",
      provider: "Dr. Michael Johnson",
      type: "Sick Visit",
      location: "Downtown Clinic",
      status: "Completed",
    },
    {
      id: 5,
      date: "December 5, 2024",
      time: "3:00 PM",
      provider: "Dr. Sarah Williams",
      type: "Specialist Consultation",
      location: "Main Hospital",
      status: "Completed",
    },
  ]

  const handleScheduleAppointment = () => {
    if (!date || !timeSlot || !location || !provider || !appointmentType) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields to schedule your appointment.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would be an API call
    toast({
      title: "Appointment Scheduled",
      description: `Your appointment has been scheduled for ${format(date, "MMMM d, yyyy")} at ${timeSlot}.`,
    })

    // Reset form
    setDate(undefined)
    setTimeSlot(undefined)
    setLocation(undefined)
    setProvider(undefined)
    setAppointmentType(undefined)
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Appointments</h1>

      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Schedule an Appointment</CardTitle>
              <CardDescription>Select your preferred date, time, location, and provider.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="font-medium">Select Date</div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="border rounded-md"
                    disabled={(date) => {
                      // Disable weekends and past dates
                      const day = date.getDay()
                      return day === 0 || day === 6 || date < new Date(new Date().setHours(0, 0, 0, 0))
                    }}
                  />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="font-medium">Select Time</div>
                    <Select value={timeSlot} onValueChange={setTimeSlot} disabled={!date}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Select Location</div>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc.id} value={loc.id}>
                            {loc.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Select Provider</div>
                    <Select value={provider} onValueChange={setProvider}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select provider" />
                      </SelectTrigger>
                      <SelectContent>
                        {providers.map((prov) => (
                          <SelectItem key={prov.id} value={prov.id}>
                            {prov.name} ({prov.specialty})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Appointment Type</div>
                    <Select value={appointmentType} onValueChange={setAppointmentType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {appointmentTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleScheduleAppointment}>Schedule Appointment</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled appointments.</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                              <span className="font-medium">{appointment.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-primary" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {appointment.provider} • {appointment.type}
                            </div>
                            <div className="text-sm text-muted-foreground">{appointment.location}</div>
                          </div>
                          <div className="flex space-x-2 mt-4 md:mt-0">
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button variant="destructive" size="sm">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No upcoming appointments.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => document.querySelector('[data-value="schedule"]')?.click()}
                  >
                    Schedule an Appointment
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Past Appointments</CardTitle>
              <CardDescription>Your appointment history.</CardDescription>
            </CardHeader>
            <CardContent>
              {pastAppointments.length > 0 ? (
                <div className="space-y-4">
                  {pastAppointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                              <span className="font-medium">{appointment.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-primary" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {appointment.provider} • {appointment.type}
                            </div>
                            <div className="text-sm text-muted-foreground">{appointment.location}</div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No past appointments.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

