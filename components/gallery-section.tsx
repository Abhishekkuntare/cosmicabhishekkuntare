'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { artworks, categories } from '@/lib/mock-data'

const reels = [
  {
    id: 1,
    title: 'My Latest Artwork',
    category: 'Art Reel',
    thumbnail: '/reels/reel-1.png',
    url: 'https://www.instagram.com/p/Db5ccOjv2gf/',
  },
  {
    id: 2,
    title: 'Aura men sketch ',
    category: 'Aura Reel ',
    thumbnail: '/reels/reel-2.png',
    url: 'https://www.instagram.com/reel/Db5ZzcYvVoN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },

  {
    id: 3,
    title: '🙂❤️‍🩹',
    category: 'Alone is better ',
    thumbnail: '/reels/reel-3.png',
    url: 'https://www.instagram.com/reel/DbuT1tlMmPn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },

  {
    id: 4,
    title: 'My life',
    category: 'I love you mummy ❤️🫂 ',
    thumbnail: '/reels/reel-4.png',
    url: 'https://www.instagram.com/reel/DbvP6M4MHw6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },


]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArtworks =
    activeCategory === 'All'
      ? artworks
      : artworks.filter((art) => art.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">

        {/* ========================================================= */}
        {/* PORTFOLIO HEADER */}
        {/* ========================================================= */}

        <div className="mb-12 sm:mb-16 w-full max-w-full overflow-hidden">
          <div className="space-y-3">
            <h2
              className="
        text-[2.7rem]
        leading-[1.05]
        font-black
        text-charcoal
        mb-2
        tracking-[-0.04em]
        sm:text-5xl
        sm:leading-tight
        md:text-6xl
        lg:text-7xl
        lg:tracking-tight
      "
            >
              PORTFOLIO
            </h2>

            <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-gradient-to-r from-gold to-stone rounded-full" />
          </div>

          <p
            className="
      text-base
      sm:text-lg
      text-stone
      font-semibold
      max-w-2xl
      mt-5
      sm:mt-6
      leading-relaxed
    "
          >
            A collection of hand-drawn characters, illustrations, and artistic
            storytelling
          </p>
        </div>

        {/* ========================================================= */}
        {/* CATEGORY FILTER */}
        {/* ========================================================= */}

        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 font-bold text-sm transition-all duration-300 rounded-full border-2 ${activeCategory === category
                  ? 'bg-gold text-charcoal border-gold shadow-lg'
                  : 'border-gold/30 text-charcoal hover:border-gold hover:bg-gold/10'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* ========================================================= */}
        {/* GALLERY GRID */}
        {/* ========================================================= */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <Link href={`/artwork/${artwork.id}`}>
                <div className="relative h-64 sm:h-72 bg-sand overflow-hidden mb-4 rounded-xl border-3 border-gold/20 group-hover:border-gold transition-colors duration-300 shadow-md">

                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-4">
                    <div className="space-y-1">
                      <p className="text-cream font-bold text-sm">
                        Explore
                      </p>

                      <p className="text-cream/80 text-xs">
                        {artwork.category}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-gold transition-colors">
                    {artwork.title}
                  </h3>

                  <p className="text-xs text-stone font-semibold">
                    {artwork.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone text-lg">
              No artworks found in this category.
            </p>
          </div>
        )}

        {/* ========================================================= */}
        {/* INSTAGRAM REELS SECTION */}
        {/* ========================================================= */}

        <div className="mt-32" id="reels">

          {/* Reels Header */}
          <div className="mb-12">
            <div className="space-y-3">

              <div className="flex items-center gap-4">
                <h2 className="text-6xl sm:text-7xl font-black text-charcoal tracking-tight">
                  REELS
                </h2>

                <span className="text-3xl">
                  🎬
                </span>
              </div>

              <div className="w-20 h-2 bg-gradient-to-r from-gold to-stone rounded-full" />
            </div>

            <p className="text-lg text-stone font-semibold max-w-2xl mt-6">
              Watch my artwork come to life through sketches, creative
              processes, and artistic experiments.
            </p>
          </div>

          {/* Reels Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {reels.map((reel) => (
              <motion.a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >

                {/* Reel Card */}
                <div className="relative aspect-[9/16] bg-sand overflow-hidden rounded-2xl border-3 border-gold/20 group-hover:border-gold transition-all duration-300 shadow-md group-hover:shadow-xl">

                  {/* Thumbnail */}
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Instagram / Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">

                      <svg
                        className="w-7 h-7 text-charcoal ml-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>

                    </div>

                  </div>

                  {/* Bottom Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">

                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
                      {reel.category}
                    </p>

                    <h3 className="text-white text-lg font-black">
                      {reel.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-3">

                      {/* Instagram Icon */}
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                        />

                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                        />

                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="1"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>

                      <span className="text-white text-xs font-bold">
                        Watch on Instagram
                      </span>

                    </div>

                  </div>
                </div>

                {/* Reel Title Outside Card */}
                <div className="mt-3">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-gold transition-colors">
                    {reel.title}
                  </h3>

                  <p className="text-xs text-stone font-semibold mt-1">
                    {reel.category}
                  </p>
                </div>

              </motion.a>
            ))}
          </motion.div>

          {/* View Instagram Button */}
          <div className="flex justify-center mt-12">

            <a
              href="https://www.instagram.com/imcosmosabhishek/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3 bg-charcoal text-cream font-bold rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-lg hover:shadow-xl"
            >

              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              View More Reels

            </a>

          </div>

        </div>

      </div>
    </section>
  )
}