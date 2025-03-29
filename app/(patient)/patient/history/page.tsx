"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Printer, Search } from "lucide-react"

export default function MedicalHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const medicalHistory = [
    {
      id: 1,
      date: "March 15, 2025",
      provider: "Dr. Jane Smith",
      reason: "Annual Physical",
      notes: "All vitals normal. Recommended continued exercise and healthy diet.",
    },
    {
      id: 2,
      date: "February 10, 2025",
      provider: "Dr. Michael Johnson",
      reason: "Flu Symptoms",
      notes: "Diagnosed with influenza A. Prescribed Tamiflu and rest.",
    },
    {
      id: 3,
      date: "December 5, 2024",
      provider: "Dr. Sarah Williams",
      reason: "Sprained Ankle",
      notes: "Grade 2 sprain. RICE protocol recommended. Follow-up in 2 weeks.",
    },
    {
      id: 4,
      date: "October 20, 2024",
      provider: "Dr. Jane Smith",
      reason: "Routine Check-up",
      notes: "Blood work ordered. All other examinations normal.",
    },
    {
      id: 5,
      date: "August 3, 2024",
      provider: "Dr. Robert Davis",
      reason: "Allergic Reaction",
      notes: "Mild reaction to new medication. Switched to alternative.",
    },
  ]

  const filteredHistory = medicalHistory.filter(
    (record) =>
      record.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.date.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Medical History</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Records</CardTitle>
          <CardDescription>Search your medical history by date, provider, or reason for visit.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search medical records..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Export to PDF
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visit History</CardTitle>
          <CardDescription>A record of all your past visits and treatments.</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredHistory.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredHistory.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.provider}</TableCell>
                    <TableCell>{record.reason}</TableCell>
                    <TableCell>{record.notes}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No records found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

