import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { GallerySection } from '@/components/gallery-section'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <GallerySection />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
