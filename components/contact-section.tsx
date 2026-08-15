'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MessageSquare } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

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
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
            Get in Touch
          </h2>
          <p className="text-stone max-w-2xl mx-auto">
            Interested in commissioning work or collaborating? I&rsquo;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div className="flex gap-4" variants={itemVariants}>
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-charcoal mb-1">Email</p>
                <a href="mailto:hello@alexandrivers.com" className="text-stone hover:text-gold transition-colors">
                  hello@alexandrivers.com
                </a>
              </div>
            </motion.div>

            <motion.div className="flex gap-4" variants={itemVariants}>
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-lg flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-charcoal mb-1">Response Time</p>
                <p className="text-stone">Typically within 24-48 hours</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="font-serif font-bold text-charcoal mb-4">Follow My Work</p>
              <div className="flex gap-4">
                <a href="#" className="text-gold hover:text-charcoal transition-colors">
                  <Mail size={24} />
                </a>
                <a href="#" className="text-gold hover:text-charcoal transition-colors">
                  <Send size={24} />
                </a>
                <a href="#" className="text-gold hover:text-charcoal transition-colors">
                  <MessageSquare size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sand bg-cream text-charcoal placeholder-stone/50 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sand bg-cream text-charcoal placeholder-stone/50 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sand bg-cream text-charcoal placeholder-stone/50 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Inquiry subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-sand bg-cream text-charcoal placeholder-stone/50 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-charcoal text-cream font-medium hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
