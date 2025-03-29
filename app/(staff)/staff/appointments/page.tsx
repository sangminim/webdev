"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"
import { Edit, Trash2, Plus } from "lucide-react"

export default function AppointmentsPage() {
  const { toast } = useToast()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState<any | null>(null)

  // Mock data
  const appointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      time: "9:00 AM",
      duration: "30 minutes",
      type: "Annual Physical",
      provider: "Dr. Jane Smith",
      status: "Checked In",
      notes: "Patient is due for routine bloodwork.",
    },
    {
      id: 2,
      patient: "Michael Thompson",
      time: "10:30 AM",
      duration: "45 minutes",
      type: "Autism Evaluation",
      provider: "Dr. Jane Smith",
      status: "Scheduled",
      notes: "Follow-up on behavioral therapy progress.",
    },
    {
      id: 3,
      patient: "Robert Davis",
      time: "11:15 AM",
      duration: "30 minutes",
      type: "Cardiology Follow-up",
      provider: "Dr. Robert Davis",
      status: "Scheduled",
      notes: "Review recent echocardiogram results.",
    },
    {
      id: 4,
      patient: "Jennifer Wilson",
      time: "1:00 PM",
      duration: "60 minutes",
      type: "Pediatric Oncology",
      provider: "Dr. Michael Johnson",
      status: "Scheduled",
      notes: "Discuss next phase of treatment plan.",
    },
    {
      id: 5,
      patient: "David Martinez",
      time: "2:30 PM",
      duration: "30 minutes",
      type: "Medication Review",
      provider: "Dr. Jane Smith",
      status: "Scheduled",
      notes: "Evaluate effectiveness of current prescriptions.",
    },
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

  const handleEditAppointment = (appointment: any) => {
    setSelectedAppointment(appointment)
    setIsEditDialogOpen(true)
  }

  const handleSaveAppointment = () => {
    // In a real app, this would be an API call
    toast({
      title: "Appointment Updated",
      description: "The appointment has been updated successfully.",
    })
    setIsEditDialogOpen(false)
  }

  const handleAddAppointment = () => {
    // In a real app, this would be an API call
    toast({
      title: "Appointment Added",
      description: "The appointment has been added successfully.",
    })
    setIsAddDialogOpen(false)
  }

  const handleDeleteAppointment = () => {
    // In a real app, this would be an API call
    toast({
      title: "Appointment Cancelled",
      description: "The appointment has been cancelled successfully.",
    })
    setIsEditDialogOpen(false)
  }

  const formatDate = (date: Date | undefined) => {
    if (!date) return ""
    return format(date, "MMMM d, yyyy")
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Manage Appointments</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Appointment
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
            <CardDescription>View and manage appointments for a specific date.</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="border rounded-md" />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Appointments for {formatDate(selectedDate)}</CardTitle>
            <CardDescription>Manage patient appointments and schedules.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>
                      <div className="font-medium">{appointment.time}</div>
                      <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                    </TableCell>
                    <TableCell>{appointment.patient}</TableCell>
                    <TableCell>{appointment.type}</TableCell>
                    <TableCell>{appointment.provider}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          appointment.status === "Checked In"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditAppointment(appointment)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Add Appointment Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Appointment</DialogTitle>
            <DialogDescription>Schedule a new appointment for a patient.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <div className="col-span-3">
                <Input id="date" type="date" defaultValue={format(new Date(), "yyyy-MM-dd")} />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <div className="col-span-3">
                <Input id="time" type="time" defaultValue="09:00" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">
                Duration
              </Label>
              <div className="col-span-3">
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="patient" className="text-right">
                Patient
              </Label>
              <div className="col-span-3">
                <Input id="patient" placeholder="Search for patient..." />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <div className="col-span-3">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select appointment type" />
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="provider" className="text-right">
                Provider
              </Label>
              <div className="col-span-3">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.map((provider) => (
                      <SelectItem key={provider.id} value={provider.id}>
                        {provider.name} ({provider.specialty})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Notes
              </Label>
              <div className="col-span-3">
                <Textarea id="notes" placeholder="Add appointment notes..." />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAppointment}>Add Appointment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Appointment Dialog */}
      {selectedAppointment && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Appointment</DialogTitle>
              <DialogDescription>Update appointment details for {selectedAppointment.patient}.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-date" className="text-right">
                  Date
                </Label>
                <div className="col-span-3">
                  <Input id="edit-date" type="date" defaultValue={format(new Date(), "yyyy-MM-dd")} />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-time" className="text-right">
                  Time
                </Label>
                <div className="col-span-3">
                  <Input id="edit-time" defaultValue={selectedAppointment.time} />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-duration" className="text-right">
                  Duration
                </Label>
                <div className="col-span-3">
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue placeholder={selectedAppointment.duration} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-type" className="text-right">
                  Type
                </Label>
                <div className="col-span-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedAppointment.type} />
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
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-provider" className="text-right">
                  Provider
                </Label>
                <div className="col-span-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedAppointment.provider} />
                    </SelectTrigger>
                    <SelectContent>
                      {providers.map((provider) => (
                        <SelectItem key={provider.id} value={provider.id}>
                          {provider.name} ({provider.specialty})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>
                <div className="col-span-3">
                  <Select defaultValue={selectedAppointment.status}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedAppointment.status} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                      <SelectItem value="Checked In">Checked In</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                      <SelectItem value="No Show">No Show</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-notes" className="text-right">
                  Notes
                </Label>
                <div className="col-span-3">
                  <Textarea id="edit-notes" defaultValue={selectedAppointment.notes} />
                </div>
              </div>
            </div>
            <DialogFooter className="flex justify-between">
              <Button variant="destructive" onClick={handleDeleteAppointment}>
                Cancel Appointment
              </Button>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Close
                </Button>
                <Button onClick={handleSaveAppointment}>Save Changes</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

