'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronDown } from 'lucide-react'

export function CommissionsSection() {
  const [expandedStep, setExpandedStep] = useState(0)

  const commissionSteps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We discuss your vision, style preferences, dimensions, and budget.',
      details:
        'During our first conversation, I&rsquo;ll learn about your project goals, aesthetic preferences, and any specific requirements you have in mind.',
    },
    {
      number: 2,
      title: 'Proposal & Quotation',
      description: 'I&rsquo;ll provide a detailed proposal with timeline and pricing.',
      details:
        'Based on our discussion, I&rsquo;ll create a comprehensive proposal outlining the scope, timeline, revisions included, and total cost.',
    },
    {
      number: 3,
      title: 'Design Concepts',
      description: 'I&rsquo;ll develop 2-3 initial concept sketches for your approval.',
      details:
        'I&rsquo;ll present multiple design directions for your consideration. You can provide feedback and request revisions to refine the concepts.',
    },
    {
      number: 4,
      title: 'Refinement & Revisions',
      description: 'Work together to perfect the chosen design direction.',
      details:
        'Once you&rsquo;ve selected a concept, I&rsquo;ll create detailed artwork with unlimited revisions until you&rsquo;re completely satisfied.',
    },
    {
      number: 5,
      title: 'Final Delivery',
      description: 'Receive high-resolution files in your preferred formats.',
      details:
        'You&rsquo;ll receive the completed artwork in multiple formats (PNG, JPEG, original file) with full rights to use as agreed.',
    },
  ]

  const commissionTypes = [
    {
      title: 'Editorial Illustration',
      description: 'Custom illustrations for publications, articles, and editorial projects.',
      price: 'From $1,200',
    },
    {
      title: 'Conceptual Art',
      description: 'Original conceptual artwork for branding, marketing, or personal collections.',
      price: 'From $1,500',
    },
    {
      title: 'Character Design',
      description: 'Professional character design for games, animation, and media projects.',
      price: 'From $2,000',
    },
    {
      title: 'Album Artwork',
      description: 'Custom artwork for music releases, singles, and album covers.',
      price: 'From $1,800',
    },
    {
      title: 'Brand Identity',
      description: 'Visual art for logos, brand guidelines, and identity systems.',
      price: 'From $2,500',
    },
    {
      title: 'Personal Commission',
      description: 'Custom artwork for personal collections and special projects.',
      price: 'From $900',
    },
  ]

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
    <section id="commissions" className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
            Commission Your Own
          </h2>
          <p className="text-stone max-w-2xl mx-auto">
            Let&rsquo;s create something uniquely tailored to your vision. Here&rsquo;s how the process works.
          </p>
        </motion.div>

        {/* Commission Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-8 text-center">
            Our Process
          </h3>

          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {commissionSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="border border-sand bg-white rounded-lg overflow-hidden"
                variants={itemVariants}
              >
                <button
                  onClick={() => setExpandedStep(expandedStep === index ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-serif font-bold text-charcoal">
                      {step.number}
                    </div>
                    <div className="text-left">
                      <p className="font-serif font-bold text-charcoal">{step.title}</p>
                      <p className="text-sm text-stone">{step.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedStep === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-charcoal" />
                  </motion.div>
                </button>

                {expandedStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 border-t border-sand bg-muted/30"
                  >
                    <p className="text-charcoal/80 leading-relaxed">{step.details}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Commission Types */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-8 text-center">
            Commission Types & Pricing
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {commissionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="border border-sand bg-white p-6 hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex gap-3 mb-4">
                  <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-1" />
                  <h4 className="font-serif font-bold text-charcoal">{type.title}</h4>
                </div>
                <p className="text-sm text-stone mb-4 leading-relaxed">{type.description}</p>
                <p className="text-lg font-serif font-bold text-gold">{type.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-stone mb-6">Ready to start your commission? Let&rsquo;s talk!</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-charcoal text-cream font-medium hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
