'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Projects', href: '#gallery' },
    { label: 'Reels', href: '#reels' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-cream border-b-4 border-gold/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Circular Portrait */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/40 group-hover:border-gold transition-all duration-300 shadow-md group-hover:shadow-lg">
              <Image
                src="/images/logo-portrait.png"
                alt="Abhishek Kuntare - Artist Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-charcoal hover:text-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            {/* <div className="w-px h-6 bg-gold/20" /> */}
            {/* <Link
              href="/admin"
              className="text-sm font-bold text-stone hover:text-gold transition-colors"
            >
              Admin
            </Link> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gold/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-gold" /> : <Menu size={24} className="text-gold" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-gold/20 bg-cream">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-bold text-charcoal hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gold/20">
              {/* <Link
                href="/admin"
                className="block text-sm font-bold text-stone hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
