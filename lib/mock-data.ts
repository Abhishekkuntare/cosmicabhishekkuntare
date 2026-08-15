export interface Artwork {
  id: string
  title: string
  category: string
  image: string
  description: string
  year: number
  medium: string
  dimensions: string
  price?: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar?: string
}

export const artworks: Artwork[] = [
  {
    id: 'artwork-1',
    title: 'Joyful Character',
    category: 'Character',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260802_135809.jpg-yrAg7MpwFrlSpQmAK88Z22ZnkdZc7H.jpeg',
    description: 'A vibrant character study with expressive features and personality.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-2',
    title: 'Robot Friend',
    category: 'Character',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260728_161350.jpg-nDfwM4sj7JRVYsdGXcL8jvEMLdcPjE.jpeg',
    description: 'A charming robot character with simple geometric forms and personality.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-3',
    title: 'Expressive Face Study',
    category: 'Portrait',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260727_201334.jpg-i0HTquT774lHOB9xGl7JhZALLB6Y1I.jpeg',
    description: 'A minimalist yet expressive face exploring emotional depth.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-4',
    title: 'Thoughtful Portrait',
    category: 'Portrait',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260802_135747.jpg-4ArpSON7Mv9bShlm2wBWRNKF73hmDf.jpeg',
    description: 'A detailed character sketch capturing introspection and expression.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-5',
    title: 'Little Dino Buddy',
    category: 'Character',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260727_200902.jpg-iq7EUh66O9t3Hta9uBJS5ED7vFkQbe.jpeg',
    description: 'A cute and charming creature character with personality.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-6',
    title: 'Fisher in the Boat',
    category: 'Illustration',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260727_201318.jpg-yFqu28xLEPWn0NhESoVjDl9csuaK0e.jpeg',
    description: 'A narrative illustration exploring solitude and peaceful moments.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-7',
    title: 'Box Mystery',
    category: 'Character',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260727_201037.jpg-cJDRLYvvN5WyaATjUK5hTTkpUhsH9y.jpeg',
    description: 'A whimsical character design playing with negative space.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-8',
    title: 'Character Study',
    category: 'Portrait',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260802_135715.jpg-JMACvQ5o5PU2Z7auBTibq01QQmbirM.jpeg',
    description: 'An expressive portrait of a character with unique features.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-9',
    title: 'Abstract Energy',
    category: 'Abstract',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260727_201003.jpg-MMa2ghUbm0NT2hEcWcxbBwdIvixEOu.jpeg',
    description: 'Spiraling lines creating a sense of movement and energy.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-10',
    title: 'Graceful Figure',
    category: 'Portrait',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260729_145756.jpg-ngsntyeTNHH7hHLdV2oDccjaIbcIGc.jpeg',
    description: 'A figure study exploring form and movement with minimalist lines.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-11',
    title: 'Covered In Thoughts',
    category: 'Portrait',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260731_010133.jpg-GP59H5OImfFCM78viJAzAc2P0brEnR.jpeg',
    description: 'A figure wrapped in intricate line work symbolizing complex emotions.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-12',
    title: 'Ghost Buddy',
    category: 'Character',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260729_145811.jpg-tWXu49xKOMnLsGOotPuo5TIuX0Vnsp.jpeg',
    description: 'A playful ghost character with a warm, friendly presence.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-13',
    title: 'Happy Vehicle',
    category: 'Character',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260728_161402.jpg-e1qD6hP9tyGjzcmUH8CfEJa0E1zxD6.jpeg',
    description: 'A whimsical character-like car with expressive features.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-14',
    title: 'Distinguished Gentleman',
    category: 'Portrait',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260731_005954.jpg-Tn8tQCDCcNd6wGeavRxUCUyRQnpErj.jpeg',
    description: 'A character portrait with expressive features and style.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-15',
    title: 'Dapper Fellow',
    category: 'Character',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260731_010017.jpg-6thvBIx5eumFA7egq70xYSQJxzyZgh.jpeg',
    description: 'A character with personality and distinctive style elements.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
  {
    id: 'artwork-16',
    title: 'Box Head Wonder',
    category: 'Character',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260727_201015.jpg-RJtXwaVwpITJSUI4IGXAygIEPyMR6X.jpeg',
    description: 'A minimalist character design with geometric simplicity.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },{
    id: 'artwork-17',
    title: 'Cristiano Ronaldo ',
    category: 'Character',
    image: '/images/artwork-18.jpeg',
    description: 'Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Saudi Pro League club Al Nassr and captains the Portugal national team. Widely regarded as one of the greatest footballers of all time, Ronaldo has won five Ballon d\'Or awards, four European Golden Shoes, and has been named to the UEFA Team of the Year 15 times.',
    year: 2026,
    medium: 'Ink Drawing',
    dimensions: 'Sketchbook',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Chen',
    role: 'Creative Director, Lumina Studio',
    content: 'Alexandra\'s work has been transformative for our projects. Her unique perspective and technical excellence are unparalleled.',
  },
  {
    id: 'testimonial-2',
    name: 'Marcus Johnson',
    role: 'CEO, Forward Collective',
    content: 'Working with Alexandra elevated our brand identity. Her attention to detail and innovative approach is truly exceptional.',
  },
  {
    id: 'testimonial-3',
    name: 'Elena Rodriguez',
    role: 'Curator, Contemporary Art Initiative',
    content: 'An extraordinary artist whose work pushes boundaries and challenges conventions. Highly recommended.',
  },
]

export const categories = ['All', 'Character', 'Portrait', 'Illustration', 'Abstract']
