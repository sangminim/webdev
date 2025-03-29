import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Baby, Brain, Activity } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Healthcare Services</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Comprehensive care for your entire family, from preventive services to specialized treatments.
        </p>
      </div>

      <Tabs defaultValue="primary" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="primary">Primary Care</TabsTrigger>
          <TabsTrigger value="pediatric">Pediatric</TabsTrigger>
          <TabsTrigger value="autism">Autism</TabsTrigger>
          <TabsTrigger value="cardiology">Cardiology</TabsTrigger>
        </TabsList>

        <TabsContent value="primary" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Primary Care Services</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Our primary care services focus on prevention, wellness, and the management of chronic conditions. We
                provide comprehensive care for patients of all ages.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Annual physical examinations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Preventive screenings and vaccinations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Management of chronic conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Acute illness diagnosis and treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Health education and counseling</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/login">Schedule Appointment</Link>
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Primary care services"
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pediatric" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Baby className="h-8 w-8 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Pediatric Cancer Services</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Our pediatric oncology team provides compassionate, state-of-the-art care for children with cancer, from
                diagnosis through treatment and survivorship.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Comprehensive cancer diagnosis and staging</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Personalized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Chemotherapy and radiation therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Supportive care and pain management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Long-term follow-up and survivorship programs</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/login">Schedule Appointment</Link>
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Pediatric cancer services"
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="autism" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Autism Services</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Our autism services provide comprehensive evaluation, diagnosis, and treatment for children and adults
                with autism spectrum disorders.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Comprehensive diagnostic evaluations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Applied Behavior Analysis (ABA) therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Speech and language therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Occupational therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Family support and education</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/login">Schedule Appointment</Link>
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Autism services"
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="cardiology" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Activity className="h-8 w-8 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Cardiology Services</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Our cardiology department offers comprehensive care for heart conditions, from prevention to diagnosis
                and treatment of complex cardiac issues.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Cardiac risk assessment and prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Electrocardiograms (ECG/EKG)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Echocardiograms and stress tests</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Cardiac catheterization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Management of heart disease and arrhythmias</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/login">Schedule Appointment</Link>
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Cardiology services"
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

