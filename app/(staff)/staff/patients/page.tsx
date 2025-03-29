"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, FileText, MessageSquare, Calendar } from "lucide-react"

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Mock data
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      dateOfBirth: "1985-06-15",
      phone: "(555) 123-4567",
      email: "sarah.johnson@example.com",
      lastVisit: "2025-03-15",
      upcomingAppointment: "2025-03-30",
      medicalConditions: ["Hypertension", "Asthma"],
      medications: ["Lisinopril", "Albuterol"],
      allergies: ["Penicillin"],
      notes: "Patient is managing conditions well with current medications.",
    },
    {
      id: 2,
      name: "Michael Thompson",
      dateOfBirth: "2018-09-22",
      phone: "(555) 987-6543",
      email: "michael.parent@example.com",
      lastVisit: "2025-02-10",
      upcomingAppointment: "2025-03-30",
      medicalConditions: ["Autism Spectrum Disorder"],
      medications: ["Risperidone"],
      allergies: ["None"],
      notes: "Showing improvement with current therapy regimen.",
    },
    {
      id: 3,
      name: "Robert Davis",
      dateOfBirth: "1962-03-08",
      phone: "(555) 456-7890",
      email: "robert.davis@example.com",
      lastVisit: "2025-03-15",
      upcomingAppointment: "2025-04-15",
      medicalConditions: ["Coronary Artery Disease", "Type 2 Diabetes"],
      medications: ["Metformin", "Atorvastatin", "Aspirin"],
      allergies: ["Sulfa drugs"],
      notes: "Recent cardiac stress test showed stable condition.",
    },
    {
      id: 4,
      name: "Jennifer Wilson",
      dateOfBirth: "2015-11-30",
      phone: "(555) 234-5678",
      email: "jennifer.parent@example.com",
      lastVisit: "2025-03-20",
      upcomingAppointment: "2025-04-05",
      medicalConditions: ["Acute Lymphoblastic Leukemia"],
      medications: ["Methotrexate", "Vincristine", "Prednisone"],
      allergies: ["None"],
      notes: "Currently in maintenance phase of treatment. Blood counts stable.",
    },
    {
      id: 5,
      name: "David Martinez",
      dateOfBirth: "1975-08-12",
      phone: "(555) 876-5432",
      email: "david.martinez@example.com",
      lastVisit: "2025-03-05",
      upcomingAppointment: "2025-06-10",
      medicalConditions: ["Hypertension", "Hyperlipidemia"],
      medications: ["Lisinopril", "Simvastatin"],
      allergies: ["Shellfish"],
      notes: "Blood pressure well-controlled with current medication.",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm),
  )

  const handleViewPatient = (patient: any) => {
    setSelectedPatient(patient)
    setIsDialogOpen(true)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Patient Lookup</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Patients</CardTitle>
          <CardDescription>Search for patients by name, email, or phone number.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search patients..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
          <CardDescription>View and manage patient information.</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredPatients.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Date of Birth</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Upcoming Appointment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>
                      {formatDate(patient.dateOfBirth)} ({calculateAge(patient.dateOfBirth)} yrs)
                    </TableCell>
                    <TableCell>
                      {patient.phone}
                      <br />
                      <span className="text-muted-foreground text-xs">{patient.email}</span>
                    </TableCell>
                    <TableCell>{formatDate(patient.lastVisit)}</TableCell>
                    <TableCell>
                      {patient.upcomingAppointment ? formatDate(patient.upcomingAppointment) : "None"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" onClick={() => handleViewPatient(patient)}>
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No patients found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedPatient && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Patient Details: {selectedPatient.name}</DialogTitle>
              <DialogDescription>
                Date of Birth: {formatDate(selectedPatient.dateOfBirth)} ({calculateAge(selectedPatient.dateOfBirth)}{" "}
                years old)
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Contact Information</h3>
                    <p className="text-sm">Phone: {selectedPatient.phone}</p>
                    <p className="text-sm">Email: {selectedPatient.email}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Appointments</h3>
                    <p className="text-sm">Last Visit: {formatDate(selectedPatient.lastVisit)}</p>
                    <p className="text-sm">
                      Upcoming:{" "}
                      {selectedPatient.upcomingAppointment ? formatDate(selectedPatient.upcomingAppointment) : "None"}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Medical Summary</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <h4 className="text-sm font-medium">Conditions</h4>
                      <ul className="text-sm list-disc list-inside">
                        {selectedPatient.medicalConditions.map((condition: string, index: number) => (
                          <li key={index}>{condition}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Medications</h4>
                      <ul className="text-sm list-disc list-inside">
                        {selectedPatient.medications.map((medication: string, index: number) => (
                          <li key={index}>{medication}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Appointment
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    Edit Record
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="medical" className="space-y-4 mt-4">
                <div>
                  <h3 className="font-medium">Medical Conditions</h3>
                  <ul className="mt-2 space-y-2">
                    {selectedPatient.medicalConditions.map((condition: string, index: number) => (
                      <li key={index} className="text-sm">
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Medications</h3>
                  <ul className="mt-2 space-y-2">
                    {selectedPatient.medications.map((medication: string, index: number) => (
                      <li key={index} className="text-sm">
                        {medication}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Allergies</h3>
                  <ul className="mt-2 space-y-2">
                    {selectedPatient.allergies.map((allergy: string, index: number) => (
                      <li key={index} className="text-sm">
                        {allergy}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="appointments" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Upcoming Appointments</h3>
                    {selectedPatient.upcomingAppointment ? (
                      <div className="mt-2 p-3 border rounded-md">
                        <p className="font-medium">{formatDate(selectedPatient.upcomingAppointment)}</p>
                        <p className="text-sm text-muted-foreground">Regular Check-up</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                          <Button size="sm" variant="destructive">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-2">No upcoming appointments.</p>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">Past Appointments</h3>
                    <div className="mt-2 space-y-2">
                      <div className="p-3 border rounded-md">
                        <p className="font-medium">{formatDate(selectedPatient.lastVisit)}</p>
                        <p className="text-sm text-muted-foreground">Annual Physical</p>
                        <Button size="sm" variant="link" className="p-0 h-auto mt-1">
                          View Notes
                        </Button>
                      </div>
                      <div className="p-3 border rounded-md">
                        <p className="font-medium">
                          {formatDate(
                            new Date(
                              new Date(selectedPatient.lastVisit).setMonth(
                                new Date(selectedPatient.lastVisit).getMonth() - 3,
                              ),
                            ),
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground">Follow-up</p>
                        <Button size="sm" variant="link" className="p-0 h-auto mt-1">
                          View Notes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="notes" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Clinical Notes</h3>
                      <Button size="sm">Add Note</Button>
                    </div>
                    <div className="mt-2 p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{formatDate(selectedPatient.lastVisit)}</p>
                          <p className="text-sm text-muted-foreground">Dr. Jane Smith</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                      <p className="mt-2 text-sm">{selectedPatient.notes}</p>
                    </div>
                    <div className="mt-2 p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">
                            {formatDate(
                              new Date(
                                new Date(selectedPatient.lastVisit).setMonth(
                                  new Date(selectedPatient.lastVisit).getMonth() - 3,
                                ),
                              ),
                            )}
                          </p>
                          <p className="text-sm text-muted-foreground">Dr. Robert Davis</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                      <p className="mt-2 text-sm">
                        Patient reports feeling better with current medication regimen. Vital signs stable.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

