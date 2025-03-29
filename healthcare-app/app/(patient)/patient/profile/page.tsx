"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"

export default function ProfilePage() {
  const { toast } = useToast()
  const { user } = useAuth()

  // Mock profile data
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: user?.email || "",
    phone: "(555) 123-4567",
    dateOfBirth: "1985-06-15",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    emergencyContactName: "Jane Doe",
    emergencyContactPhone: "(555) 987-6543",
    emergencyContactRelationship: "Spouse",
  })

  // Mock insurance data
  const [insuranceData, setInsuranceData] = useState({
    provider: "Blue Cross Blue Shield",
    policyNumber: "BC1234567",
    groupNumber: "G9876543",
    primaryInsured: "Self",
    relationshipToPrimary: "Self",
    effectiveDate: "2023-01-01",
  })

  // Mock medical data
  const [medicalData, setMedicalData] = useState({
    allergies: "Penicillin, Peanuts",
    medications: "Lisinopril 10mg daily, Atorvastatin 20mg daily",
    medicalConditions: "Hypertension, High Cholesterol",
    surgeries: "Appendectomy (2010)",
    familyHistory: "Father: Heart Disease, Mother: Diabetes",
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInsuranceData((prev) => ({ ...prev, [name]: value }))
  }

  const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setMedicalData((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdateProfile = () => {
    // In a real app, this would be an API call
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    })
  }

  const handleUpdateInsurance = () => {
    // In a real app, this would be an API call
    toast({
      title: "Insurance Updated",
      description: "Your insurance information has been updated successfully.",
    })
  }

  const handleUpdateMedical = () => {
    // In a real app, this would be an API call
    toast({
      title: "Medical Information Updated",
      description: "Your medical information has been updated successfully.",
    })
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Profile</h1>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="medical">Medical Information</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and contact information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={profileData.firstName} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={profileData.lastName} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={profileData.phone} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" value={profileData.address} onChange={handleProfileChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={profileData.city} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" name="state" value={profileData.state} onChange={handleProfileChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input id="zipCode" name="zipCode" value={profileData.zipCode} onChange={handleProfileChange} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Emergency Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactName">Name</Label>
                    <Input
                      id="emergencyContactName"
                      name="emergencyContactName"
                      value={profileData.emergencyContactName}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactPhone">Phone</Label>
                    <Input
                      id="emergencyContactPhone"
                      name="emergencyContactPhone"
                      value={profileData.emergencyContactPhone}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactRelationship">Relationship</Label>
                    <Input
                      id="emergencyContactRelationship"
                      name="emergencyContactRelationship"
                      value={profileData.emergencyContactRelationship}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUpdateProfile}>Update Profile</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="insurance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Insurance Information</CardTitle>
              <CardDescription>Update your insurance details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="provider">Insurance Provider</Label>
                  <Input
                    id="provider"
                    name="provider"
                    value={insuranceData.provider}
                    onChange={handleInsuranceChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="policyNumber">Policy Number</Label>
                  <Input
                    id="policyNumber"
                    name="policyNumber"
                    value={insuranceData.policyNumber}
                    onChange={handleInsuranceChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="groupNumber">Group Number</Label>
                  <Input
                    id="groupNumber"
                    name="groupNumber"
                    value={insuranceData.groupNumber}
                    onChange={handleInsuranceChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="primaryInsured">Primary Insured</Label>
                  <Input
                    id="primaryInsured"
                    name="primaryInsured"
                    value={insuranceData.primaryInsured}
                    onChange={handleInsuranceChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relationshipToPrimary">Relationship to Primary</Label>
                  <Select
                    value={insuranceData.relationshipToPrimary}
                    onValueChange={(value) =>
                      setInsuranceData((prev) => ({
                        ...prev,
                        relationshipToPrimary: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Self">Self</SelectItem>
                      <SelectItem value="Spouse">Spouse</SelectItem>
                      <SelectItem value="Child">Child</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="effectiveDate">Effective Date</Label>
                  <Input
                    id="effectiveDate"
                    name="effectiveDate"
                    type="date"
                    value={insuranceData.effectiveDate}
                    onChange={handleInsuranceChange}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUpdateInsurance}>Update Insurance</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="medical" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Medical Information</CardTitle>
              <CardDescription>Update your medical history and conditions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies</Label>
                <Textarea
                  id="allergies"
                  name="allergies"
                  value={medicalData.allergies}
                  onChange={handleMedicalChange}
                  placeholder="List any allergies you have"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications">Current Medications</Label>
                <Textarea
                  id="medications"
                  name="medications"
                  value={medicalData.medications}
                  onChange={handleMedicalChange}
                  placeholder="List any medications you are currently taking"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medicalConditions">Medical Conditions</Label>
                <Textarea
                  id="medicalConditions"
                  name="medicalConditions"
                  value={medicalData.medicalConditions}
                  onChange={handleMedicalChange}
                  placeholder="List any medical conditions you have"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surgeries">Past Surgeries</Label>
                <Textarea
                  id="surgeries"
                  name="surgeries"
                  value={medicalData.surgeries}
                  onChange={handleMedicalChange}
                  placeholder="List any surgeries you've had"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="familyHistory">Family Medical History</Label>
                <Textarea
                  id="familyHistory"
                  name="familyHistory"
                  value={medicalData.familyHistory}
                  onChange={handleMedicalChange}
                  placeholder="List any relevant family medical history"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUpdateMedical}>Update Medical Information</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

