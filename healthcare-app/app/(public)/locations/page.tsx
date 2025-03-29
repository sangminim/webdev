import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Clock } from "lucide-react"

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      name: "Salt Lake City Medical Center",
      address: "355 W 400 S, Salt Lake City, UT 84101",
      phone: "(801) 555-1234",
      hours: "Monday - Friday: 8am - 8pm, Saturday: 9am - 5pm, Sunday: Closed",
      city: "Salt Lake City",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.866902613812!2d-111.89824492346316!3d40.76019597138633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f50b3c1d6959%3A0xac8f23f6b6aa6a58!2s355%20W%20400%20S%2C%20Salt%20Lake%20City%2C%20UT%2084101!5e0!3m2!1sen!2sus!4v1711731234567!5m2!1sen!2sus",
    },
    {
      id: 2,
      name: "Provo Health Clinic",
      address: "135 E 200 N, Provo, UT 84606",
      phone: "(801) 555-5678",
      hours: "Monday - Friday: 9am - 6pm, Saturday - Sunday: Closed",
      city: "Provo",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.5468342675166!2d-111.65799492348225!3d40.23461197147868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9a8e7c4180c9%3A0x6b6c7c864c52c9c8!2s135%20E%20200%20N%2C%20Provo%2C%20UT%2084606!5e0!3m2!1sen!2sus!4v1711731234567!5m2!1sen!2sus",
    },
    {
      id: 3,
      name: "St. George Family Care",
      address: "188 E 300 S, St. George, UT 84770",
      phone: "(435) 555-9012",
      hours: "Monday - Friday: 8am - 7pm, Saturday: 9am - 3pm, Sunday: Closed",
      city: "St. George",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.1867642707013!2d-113.58062492359615!3d37.10384547988093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca5e1a7fe1d8f9%3A0x8f5e1c9e79e5b4c8!2s188%20E%20300%20S%2C%20St.%20George%2C%20UT%2084770!5e0!3m2!1sen!2sus!4v1711731234567!5m2!1sen!2sus",
    },
  ]

  const cities = [...new Set(locations.map((location) => location.city))]

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Locations</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Find a HealthCare Center location near you.
        </p>
      </div>

      <div className="mb-8">
        <Select>
          <SelectTrigger className="w-full sm:w-[300px]">
            <SelectValue placeholder="Filter by city" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cities</SelectItem>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <Card key={location.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{location.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${location.name}`}
                ></iframe>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{location.hours}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

