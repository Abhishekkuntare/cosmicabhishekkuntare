'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Target, Lightbulb, Rocket } from 'lucide-react'
import { testimonials } from '@/lib/mock-data'

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Art',
      description: 'Every stroke carries emotion and purpose'
    },
    {
      icon: Target,
      title: 'Dedication to Detail',
      description: 'Precision in every line and expression'
    },
    {
      icon: Lightbulb,
      title: 'Creativity in Every Stroke',
      description: 'Innovation through artistic exploration'
    },
    {
      icon: Rocket,
      title: 'Imagination That Inspires',
      description: 'Ideas that push creative boundaries'
    }
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-black text-charcoal mb-3">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-stone rounded-full" />
        </motion.div>

        {/* About Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Artist Portrait Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30">
              <Image
                src="/images/artist-portrait.png"
                alt="Abhishek Kuntare - Artist Portrait"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-4 border-gold/20 opacity-30" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-stone/20 opacity-20" style={{ transform: 'rotate(45deg)' }} />
          </motion.div>

          {/* Right: About Description */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-gold">Caricature Artist | Illustrator | Visual Storyteller</h3>
              <p className="text-xl text-stone font-semibold leading-relaxed">
                I turn faces and ideas into fun, expressive, and unforgettable art.
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-charcoal leading-relaxed font-medium">
              My journey as an artist has been driven by a passion to capture the essence of personalities and bring them to life through illustration. Each piece tells a story, blending technical skill with creative expression to create art that resonates and inspires.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    className="flex gap-3 items-start p-4 rounded-xl bg-sand border-2 border-gold/20 hover:border-gold hover:bg-gold/5 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-charcoal text-sm">{value.title}</p>
                      <p className="text-xs text-stone">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.div
              className="pt-6 border-t-2 border-gold/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-sm text-stone font-semibold mb-4">Let&apos;s create something amazing together!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-gold text-charcoal font-bold rounded-full hover:bg-stone hover:text-cream transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Open to Commissions
                </a>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 border-2 border-gold text-charcoal font-bold rounded-full hover:bg-gold/10 transition-all duration-300 text-center"
                >
                  Collaborations
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mantra Section */}
        <motion.div
          className="p-8 rounded-2xl bg-gradient-to-r from-gold/10 to-stone/10 border-2 border-gold/30 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-black text-gold mb-2">🎨</p>
              <p className="font-bold text-charcoal">Eat</p>
            </div>
            <div>
              <p className="text-2xl font-black text-stone mb-2">😴</p>
              <p className="font-bold text-charcoal">Sleep</p>
            </div>
            <div>
              <p className="text-2xl font-black text-gold mb-2">✏️</p>
              <p className="font-bold text-charcoal">Sketch</p>
            </div>
            <div>
              <p className="text-2xl font-black text-stone mb-2">🔄</p>
              <p className="font-bold text-charcoal">Repeat</p>
            </div>
          </div>
          <p className="text-center text-lg font-black text-charcoal mt-6">
            <span className="text-gold">Art</span> is my <span className="text-stone">❤️ Therapy</span>
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-black text-charcoal text-center mb-3">Client Love</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-stone rounded-full mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="p-8 rounded-2xl bg-sand border-2 border-gold/20 hover:border-gold hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-charcoal leading-relaxed mb-6 font-medium">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="border-t border-gold/20 pt-4">
                  <p className="font-black text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-stone font-semibold">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
