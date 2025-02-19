import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPinIcon,
  PlaneIcon,
  HotelIcon,
  CarIcon,
  SearchIcon,
  StarIcon,
  GlobeIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <GlobeIcon className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">TravelEase</span>
          </Link>
          <nav className="flex gap-4 ml-auto sm:gap-6">
            <Link className="text-sm font-medium hover:text-primary" href="#">
              Destinations
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              Deals
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/hero-background.jpg')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none drop-shadow-md">
                  Discover Your Next Adventure
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl drop-shadow-md">
                  Explore the world's most beautiful destinations and create unforgettable memories.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <Card>
                  <CardContent className="p-3">
                    <Tabs defaultValue="flights" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="flights">Flights</TabsTrigger>
                        <TabsTrigger value="hotels">Hotels</TabsTrigger>
                        <TabsTrigger value="cars">Cars</TabsTrigger>
                      </TabsList>
                      <TabsContent value="flights">
                        <form className="flex mt-4 space-x-2">
                          <Input className="flex-1" placeholder="From" type="text" />
                          <Input className="flex-1" placeholder="To" type="text" />
                          <Button type="submit">
                            <SearchIcon className="w-4 h-4 mr-2" />
                            Search
                          </Button>
                        </form>
                      </TabsContent>
                      <TabsContent value="hotels">
                        <form className="flex mt-4 space-x-2">
                          <Input className="flex-1" placeholder="Where are you going?" type="text" />
                          <Button type="submit">
                            <SearchIcon className="w-4 h-4 mr-2" />
                            Search
                          </Button>
                        </form>
                      </TabsContent>
                      <TabsContent value="cars">
                        <form className="flex mt-4 space-x-2">
                          <Input className="flex-1" placeholder="Pick-up location" type="text" />
                          <Button type="submit">
                            <SearchIcon className="w-4 h-4 mr-2" />
                            Search
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">Popular Destinations</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                { name: "Paris", image: "/paris.jpg", rating: 4.8 },
                { name: "Bali", image: "/bali.jpg", rating: 4.9 },
                { name: "Tokyo", image: "/tokyo.jpg", rating: 4.7 },
              ].map((destination) => (
                <Card key={destination.name} className="overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <CardTitle>{destination.name}</CardTitle>
                    <div className="flex items-center mt-2">
                      <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-2 text-sm">{destination.rating}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Explore</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Journey Today</h2>
                  <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                    Book your dream vacation with ease. Our expert travel advisors are here to help you every step of
                    the way.
                  </p>
                </div>
                <div className="w-full max-w-sm mx-auto space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="flex-1 bg-primary-foreground text-primary"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button type="submit" variant="secondary">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs">Sign up for our newsletter to receive exclusive deals and travel tips.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">Why Choose TravelEase</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: PlaneIcon,
                  title: "Best Flight Deals",
                  description: "Find the most competitive prices for your flights.",
                },
                {
                  icon: HotelIcon,
                  title: "Top-rated Accommodations",
                  description: "Stay at the best hotels and resorts worldwide.",
                },
                {
                  icon: CarIcon,
                  title: "Easy Car Rentals",
                  description: "Rent a car with just a few clicks for your adventures.",
                },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="w-10 h-10 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 border-t">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-3 font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Safety Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Cancellation Options
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <PhoneIcon className="w-4 h-4 mr-2" /> +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MailIcon className="w-4 h-4 mr-2" /> support@travelease.com
                </li>
                <li className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2" /> 123 Travel St, Earth
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 text-center border-t">
            <p className="text-sm text-muted-foreground">© 2024 TravelEase Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

