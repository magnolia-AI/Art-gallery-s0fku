'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useRouter } from "next/navigation"
const artworks = [
  {
    id: "abstract-dreams",
    title: "Abstract Dreams",
    artist: "Jane Smith",
    image: "https://source.unsplash.com/random/800x600?abstract",
    description: "A vibrant exploration of color and form",
    fullDescription: "This piece represents the intersection of consciousness and imagination, where vibrant colors dance across the canvas in an intricate ballet of abstract forms. Created using a combination of acrylic and oil paints, this artwork invites viewers to explore their own interpretations and emotional responses.",
    medium: "Acrylic and Oil on Canvas",
    dimensions: "48\" x 36\"",
    year: "2023",
    price: "$2,800"
  },
  {
    id: "urban-landscape",
    title: "Urban Landscape",
    artist: "John Doe",
    image: "https://source.unsplash.com/random/800x600?city",
    description: "Contemporary view of city life",
    fullDescription: "An atmospheric portrayal of modern urban life, capturing the energy and complexity of city living. The piece combines architectural elements with human movement, creating a dynamic representation of contemporary existence.",
    medium: "Oil on Canvas",
    dimensions: "60\" x 40\"",
    year: "2023",
    price: "$3,200"
  },
  {
    id: "natures-harmony",
    title: "Nature's Harmony",
    artist: "Maria Garcia",
    image: "https://source.unsplash.com/random/800x600?nature",
    description: "Inspired by natural elements",
    fullDescription: "A serene composition that draws from the natural world, featuring organic forms and earthy tones. This piece celebrates the inherent beauty and balance found in nature.",
    medium: "Mixed Media",
    dimensions: "36\" x 48\"",
    year: "2023",
    price: "$2,500"
  },
  {
    id: "modern-expression",
    title: "Modern Expression",
    artist: "Alex Chen",
    image: "https://source.unsplash.com/random/800x600?modern",
    description: "A modern take on classical themes",
    fullDescription: "This contemporary piece reinterprets classical artistic themes through a modern lens, using bold geometrical shapes and striking color contrasts to create a powerful visual statement.",
    medium: "Acrylic on Canvas",
    dimensions: "40\" x 40\"",
    year: "2023",
    price: "$2,900"
  },
  {
    id: "sunset-reflections",
    title: "Sunset Reflections",
    artist: "Sarah Johnson",
    image: "https://source.unsplash.com/random/800x600?sunset",
    description: "Capturing the magic of dusk",
    fullDescription: "A mesmerizing capture of the day's end, where warm colors blend seamlessly to create a peaceful yet powerful scene. The artwork explores the transformative nature of light and shadow.",
    medium: "Oil on Canvas",
    dimensions: "54\" x 36\"",
    year: "2023",
    price: "$3,100"
  },
  {
    id: "ocean-dreams",
    title: "Ocean Dreams",
    artist: "Michael Brown",
    image: "https://source.unsplash.com/random/800x600?ocean",
    description: "Inspired by the sea",
    fullDescription: "An immersive exploration of marine themes, featuring layers of blue tones and flowing forms that evoke the movement and mystery of the ocean. This piece brings the calming presence of water into any space.",
    medium: "Mixed Media on Canvas",
    dimensions: "48\" x 48\"",
    year: "2023",
    price: "$3,400"
  }
]
export default function ArtworkPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const artwork = artworks.find(a => a.id === params.id)
  if (!artwork) {
    return (
      <div className="container mx-auto px-4 pt-32 text-center">
        <h1 className="text-2xl">Artwork not found</h1>
        <Button onClick={() => router.push('/')} className="mt-4">
          Return to Gallery
        </Button>
      </div>
    )
  }
  return (
    <main className="min-h-screen bg-background pt-32">
      <div className="container mx-auto px-4">
        <Button 
          variant="outline" 
          onClick={() => router.push('/')}
          className="mb-8"
        >
          ← Back to Gallery
        </Button>
                <div className="grid md:grid-cols-2 gap-12">
          <Card className="overflow-hidden">
            <AspectRatio ratio={4/3}>
              <img
                src={artwork.image}
                alt={artwork.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
                    <div>
            <h1 className="text-4xl font-bold mb-2">{artwork.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">by {artwork.artist}</p>
                        <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">About this piece</h2>
                <p className="text-muted-foreground">{artwork.fullDescription}</p>
              </div>
                            <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Medium</h3>
                  <p className="text-muted-foreground">{artwork.medium}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Dimensions</h3>
                  <p className="text-muted-foreground">{artwork.dimensions}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Year</h3>
                  <p className="text-muted-foreground">{artwork.year}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Price</h3>
                  <p className="text-muted-foreground">{artwork.price}</p>
                </div>
              </div>
                            <Button size="lg" className="w-full">
                Inquire About This Piece
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}