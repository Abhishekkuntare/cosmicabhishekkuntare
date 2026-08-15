'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const FloatingShape = ({ delay, duration, children }: { delay: number; duration: number; children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ delay, duration, repeat: Infinity }}
      className="absolute pointer-events-none"
    >
      {children}
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-cream overflow-hidden">
      {/* Decorative floating elements */}
      <FloatingShape delay={0} duration={4}>
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full border-4 border-gold opacity-30" />
      </FloatingShape>
      <FloatingShape delay={0.2} duration={5}>
        <div className="absolute bottom-32 right-20 w-12 h-12 border-4 border-stone opacity-20" style={{ transform: 'rotate(45deg)' }} />
      </FloatingShape>
      <FloatingShape delay={0.4} duration={4.5}>
        <svg className="absolute top-40 right-10 w-20 h-20 text-gold/20" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L61 40 L92 40 L67 60 L78 90 L50 70 L22 90 L33 60 L8 40 L39 40 Z" />
        </svg>
      </FloatingShape>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Playful Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/20 border-2 border-gold text-stone font-bold text-sm">
              ✨ Creative Illustrations & Character Design
            </span>
          </motion.div>

          {/* Bold Headline with Multiple Lines */}
          {/* Bold Headline with Multiple Lines */}
          <div className="space-y-4 w-full max-w-full overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="
      text-[2.7rem]
      leading-[1.05]
      tracking-[-0.04em]
      font-black
      text-charcoal
      sm:text-5xl
      sm:leading-[1.05]
      md:text-6xl
      lg:text-8xl
      lg:leading-tight
      lg:tracking-tighter
    "
            >
              ART THAT{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gold/30 blur-lg -z-10" />
                BRINGS
              </span>{' '}
              <br />
              CHARACTERS{' '}
              <span className="text-gold">TO LIFE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="
      text-base
      sm:text-lg
      md:text-xl
      text-stone
      font-semibold
      max-w-2xl
      leading-relaxed
    "
            >
              Hand-drawn illustrations, character design, and artistic storytelling
              that captures imagination
            </motion.p>
          </div>

          {/* Featured Grid with Artistic Effects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          >
            {/* Main Featured - Artistic Border */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-gold to-stone opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative h-96 sm:h-[450px] bg-sand rounded-2xl overflow-hidden border-4 border-gold/30 group-hover:border-gold transition-colors duration-300 shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260802_135809.jpg-yrAg7MpwFrlSpQmAK88Z22ZnkdZc7H.jpeg"
                  alt="Featured artwork"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <p className="text-cream font-bold text-lg">Explore Featured Work</p>
                </div>
              </div>
            </motion.div>

            {/* Secondary Featured */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-3 bg-gradient-to-l from-stone to-gold opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative h-96 sm:h-[450px] bg-sand rounded-2xl overflow-hidden border-4 border-stone/30 group-hover:border-stone transition-colors duration-300 shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260728_161350.jpg-nDfwM4sj7JRVYsdGXcL8jvEMLdcPjE.jpeg"
                  alt="Featured artwork"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <p className="text-cream font-bold text-lg">View Character Design</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
