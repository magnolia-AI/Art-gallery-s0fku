'use client'
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
const artworks = [
  {
    title: "Abstract Dreams",
    artist: "Jane Smith",
    image: "https://source.unsplash.com/random/800x600?abstract",
    description: "A vibrant exploration of color and form"
  },
  {
    title: "Urban Landscape",
    artist: "John Doe",
    image: "https://source.unsplash.com/random/800x600?city",
    description: "Contemporary view of city life"
  },
  {
    title: "Nature's Harmony",
    artist: "Maria Garcia",
    image: "https://source.unsplash.com/random/800x600?nature",
    description: "Inspired by natural elements"
  },
  {
    title: "Modern Expression",
    artist: "Alex Chen",
    image: "https://source.unsplash.com/random/800x600?modern",
    description: "A modern take on classical themes"
  },
  {
    title: "Sunset Reflections",
    artist: "Sarah Johnson",
    image: "https://source.unsplash.com/random/800x600?sunset",
    description: "Capturing the magic of dusk"
  },
  {
    title: "Ocean Dreams",
    artist: "Michael Brown",
    image: "https://source.unsplash.com/random/800x600?ocean",
    description: "Inspired by the sea"
  }
]
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Art Gallery
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Discover unique artworks from talented artists around the world
          </p>
        </div>
      </section>
      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <Card key={index} className="overflow-hidden">
              <AspectRatio ratio={4/3}>
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">by {artwork.artist}</p>
                <p className="mt-2">{artwork.description}</p>
                <Button className="w-full mt-4">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Interested in Our Collection?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us to learn more about our artworks or schedule a viewing.
          </p>
          <Button size="lg" className="px-8">
            Contact Gallery
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Art Gallery. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}