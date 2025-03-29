import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "The care I received at HealthCare Center was exceptional. The doctors took the time to listen to my concerns and developed a treatment plan that worked for me.",
      name: "Sarah Johnson",
      title: "Patient",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a parent of a child with autism, finding the right care was crucial. The autism services team has been incredible, providing comprehensive support for my son and our family.",
      name: "Michael Thompson",
      title: "Parent",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "After my heart attack, I was scared and uncertain about the future. The cardiology team not only provided excellent medical care but also emotional support throughout my recovery.",
      name: "Robert Davis",
      title: "Cardiac Patient",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The pediatric oncology team became like family during my daughter's cancer treatment. Their expertise and compassion made an incredibly difficult time more bearable.",
      name: "Jennifer Wilson",
      title: "Mother",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "I've been a patient at HealthCare Center for over a decade. The primary care team knows my history and provides personalized care that I truly value.",
      name: "David Martinez",
      title: "Long-term Patient",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Patient Testimonials</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Hear from our patients about their experiences with HealthCare Center.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Quote className="h-8 w-8 text-primary opacity-50" />
                    <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full overflow-hidden mb-2">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative" />
          </div>
        </Carousel>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <div className="grid gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Quote className="h-6 w-6 text-primary opacity-50" />
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    <div className="pt-2">
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

