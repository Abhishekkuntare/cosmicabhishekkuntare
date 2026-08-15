'use client'

import Link from 'next/link'
import NextImage from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, use } from 'react'
import { artworks } from '@/lib/mock-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface ArtworkPageProps {
  params: Promise<{ id: string }>
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const { id } = use(params)
  const artwork = artworks.find((art) => art.id === id)
  const [liked, setLiked] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  if (!artwork) {
    return (
      <>
        <Header />
        <main className="pt-24 min-h-screen bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-4xl font-black text-charcoal mb-4">Artwork Not Found</h1>
            <p className="text-stone mb-8">The artwork you&rsquo;re looking for doesn&rsquo;t exist.</p>
            <Link
              href="/#gallery"
              className="inline-block px-6 py-3 bg-gold text-charcoal font-bold hover:bg-stone hover:text-cream transition-all duration-300 rounded-full shadow-lg"
            >
              Back to Gallery
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy link:', error)
    }
  }
  // Get related artworks (same category)
  const relatedArtworks = artworks
    .filter((art) => art.category === artwork.category && art.id !== artwork.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="pt-16 bg-cream min-h-screen">
        {/* Hero Image Section with Actual Artwork */}
        <motion.section
          className="relative min-h-[500px] sm:min-h-[600px] py-12 bg-gradient-to-br from-gold/20 via-cream to-sand overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-10 left-5 w-20 h-20 rounded-full border-4 border-gold/20 opacity-30" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-stone/10 opacity-20" style={{ transform: 'rotate(45deg)' }} />

          {/* Main Artwork Image */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-full h-full max-w-2xl max-h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <NextImage
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title Badge Over Image */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-charcoal/80 backdrop-blur-sm px-6 py-4 rounded-2xl text-cream"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h1 className="text-3xl font-black">{artwork.title}</h1>
                <p className="text-gold font-bold text-sm mt-1">{artwork.category}</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <Link
                href="/#gallery"
                className="inline-flex items-center gap-2 text-gold hover:text-stone transition-colors font-bold text-lg group"
              >
                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Gallery</span>
              </Link>
            </motion.div>

            {/* Back Button and Details */}
            <div className="flex flex-col gap-12">
              {/* Title and Actions Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {/* Left: Details */}
                <div className="md:col-span-2 space-y-8">
                  <div className="space-y-2">
                    <p className="text-stone font-bold text-sm uppercase tracking-widest">Featured Artwork</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-gold to-stone rounded-full" />
                  </div>

                  {/* Description */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-black text-charcoal">About This Work</h2>
                    <p className="text-lg text-stone leading-relaxed font-medium">{artwork.description}</p>
                  </motion.div>

                  {/* Technical Details */}
                  <motion.div
                    className="bg-sand rounded-2xl border-2 border-gold/30 p-8 space-y-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <h2 className="text-2xl font-black text-charcoal flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-sm font-black text-gold">✓</span>
                      Technical Details
                    </h2>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs text-stone uppercase tracking-widest font-bold mb-3">Medium</p>
                        <p className="text-lg font-black text-charcoal">{artwork.medium}</p>
                      </div>
                      <div>
                        <p className="text-xs text-stone uppercase tracking-widest font-bold mb-3">Year</p>
                        <p className="text-lg font-black text-charcoal">{artwork.year}</p>
                      </div>
                      <div>
                        <p className="text-xs text-stone uppercase tracking-widest font-bold mb-3">Dimensions</p>
                        <p className="text-lg font-black text-charcoal">{artwork.dimensions}</p>
                      </div>
                      {artwork.price && (
                        <div>
                          <p className="text-xs text-stone uppercase tracking-widest font-bold mb-3">Price</p>
                          <p className="text-lg font-black text-gold">${artwork.price.toLocaleString()}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Right: Action Panel */}
                <motion.div
                  className="lg:sticky lg:top-24 h-fit space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={() => setLiked(!liked)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border-2 ${liked
                        ? 'bg-gold border-gold text-charcoal shadow-lg'
                        : 'border-gold bg-transparent text-charcoal hover:bg-gold/10'
                        }`}
                    >
                      <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
                      {liked ? 'Liked!' : 'Like Artwork'}
                    </motion.button>

                    <motion.button
                      onClick={handleShare}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-lg border-2 border-stone text-charcoal hover:bg-stone/10 transition-all duration-300"
                    >
                      <Share2 size={20} />
                      {copied ? 'Link Copied!' : 'Share Work'}
                    </motion.button>

                    <Link
                      href="/#commissions"
                      className="block w-full text-center px-6 py-4 bg-gold text-charcoal font-bold text-lg rounded-2xl hover:bg-stone hover:text-cream transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Commission Similar
                    </Link>
                  </div>

                  {/* Info Card */}
                  <motion.div
                    className="bg-sand rounded-2xl border-2 border-gold/30 p-6 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <p className="text-base text-stone leading-relaxed font-medium">
                      Interested in this artwork or a similar commission? Get in touch to discuss licensing, purchasing, or custom work.
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-block text-gold hover:text-stone transition-colors font-bold text-base group"
                    >
                      Contact About This Work <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Related Works Carousel */}
            {relatedArtworks.length > 0 && (
              <motion.div
                className="mt-24 pt-16 border-t-4 border-gold/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-12">
                  <h2 className="text-5xl font-black text-charcoal mb-3">More Artwork</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-gold to-stone rounded-full" />
                  <p className="text-stone font-semibold mt-4">Explore related pieces in {artwork.category}</p>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                  {/* Carousel */}
                  <div className="overflow-hidden">
                    <motion.div
                      className="flex gap-6"
                      animate={{ x: -carouselIndex * (100 + 24) }}
                      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    >
                      {relatedArtworks.map((relatedArt, idx) => (
                        <motion.div
                          key={relatedArt.id}
                          className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Link href={`/artwork/${relatedArt.id}`} className="group/card block">
                            <motion.div whileHover={{ y: -12 }} className="space-y-4">
                              {/* Image Card */}
                              <div className="relative h-72 rounded-2xl overflow-hidden border-3 border-gold/20 group-hover/card:border-gold transition-all duration-300 shadow-lg">
                                <NextImage
                                  src={relatedArt.image}
                                  alt={relatedArt.title}
                                  fill
                                  className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                  <div>
                                    <p className="text-cream font-bold text-lg">{relatedArt.title}</p>
                                    <p className="text-gold font-semibold text-sm">{relatedArt.category}</p>
                                  </div>
                                </div>
                              </div>
                              {/* Info */}
                              <div>
                                <h3 className="text-lg font-black text-charcoal group-hover/card:text-gold transition-colors">
                                  {relatedArt.title}
                                </h3>
                                <p className="text-stone font-semibold">{relatedArt.category}</p>
                              </div>
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Navigation Arrows */}
                  {relatedArtworks.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gold text-charcoal flex items-center justify-center font-bold shadow-lg hover:bg-stone hover:text-cream transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft size={24} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCarouselIndex(Math.min(relatedArtworks.length - 1, carouselIndex + 1))}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gold text-charcoal flex items-center justify-center font-bold shadow-lg hover:bg-stone hover:text-cream transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight size={24} />
                      </motion.button>
                    </>
                  )}

                  {/* Carousel Indicators */}
                  <div className="flex justify-center gap-2 mt-8">
                    {relatedArtworks.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === carouselIndex
                          ? 'w-8 bg-gold'
                          : 'w-2 bg-gold/30 hover:bg-gold/60'
                          }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
