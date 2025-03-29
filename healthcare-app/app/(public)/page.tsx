import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MessageSquare, FileText, Heart, Brain, Baby, Activity } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Compassionate Care for Your Entire Family
              </h1>
              <p className="text-muted-foreground md:text-xl">
                At HealthCare Center, we provide comprehensive healthcare services with a focus on patient-centered
                care, cutting-edge treatments, and a commitment to your well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Healthcare professionals"
                className="rounded-lg object-cover w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Specialized Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a wide range of healthcare services to meet the needs of your entire family.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Primary Care</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive healthcare for patients of all ages, focusing on prevention and wellness.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Baby className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Pediatric Care</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized care for children, including cancer treatment and preventive services.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Brain className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Autism Services</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive evaluation, diagnosis, and treatment for autism spectrum disorders.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Activity className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Cardiology</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced cardiac care, from preventive services to treatment of complex heart conditions.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose HealthCare Center
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're committed to providing exceptional care with a patient-centered approach.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Easy Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Book appointments online or through our patient portal for your convenience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Direct Communication</h3>
              <p className="text-sm text-muted-foreground">
                Message your healthcare providers directly through our secure platform.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Medical Records Access</h3>
              <p className="text-sm text-muted-foreground">
                View your complete medical history and test results anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Experience Better Healthcare?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied patients who trust HealthCare Center with their health.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/login">Patient Login</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

