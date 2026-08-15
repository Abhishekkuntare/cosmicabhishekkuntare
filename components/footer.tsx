import Link from 'next/link'
import { Mail, Send, MessageSquare } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-gold/30">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col leading-none">
              <h3 className="text-3xl font-black text-gold">AK</h3>
              <p className="text-xs text-gold/60 font-bold tracking-widest">KUNTARE</p>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Creating extraordinary hand-drawn character design and illustrated artwork that brings imagination to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-black text-sm uppercase tracking-widest mb-4 text-gold">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#gallery" className="text-cream/70 hover:text-gold transition-colors font-semibold">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#reels" className="text-cream/70 hover:text-gold transition-colors font-semibold">
                  Reels
                </Link>
              </li> <li>
                <Link href="#about" className="text-cream/70 hover:text-gold transition-colors font-semibold">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-cream/70 hover:text-gold transition-colors font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="font-black text-sm uppercase tracking-widest mb-4 text-gold">Connect</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/imcosmosabhishek/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 rounded-full"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://linktr.ee/abhishekkuntare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 rounded-full"
                aria-label="Linktree"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M11 2h2v7.17l3.59-3.58L18 7l-5 5v2h3v2h-3v6h-2v-6H8v-2h3v-2L6 7l1.41-1.41L11 9.17V2z" />
                  <path d="M5 12H3v2h2v-2zm16 0h-2v2h2v-2z" />
                </svg>
              </a>
              <a
                href="https://pin.it/1nNkScT6j"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gold/30 flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 rounded-full"
                aria-label="Pinterest"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.63 7.86 6.35 9.34-.09-.79-.17-2.01.035-2.88l1.22-5.17s-.31-.62-.31-1.54c0-1.44.835-2.51 1.875-2.51.885 0 1.312.664 1.312 1.46 0 .89-.567 2.22-.86 3.45-.245 1.03.518 1.87 1.534 1.87 1.842 0 3.259-1.94 3.259-4.74 0-2.48-1.782-4.22-4.327-4.22-2.948 0-4.679 2.21-4.679 4.49 0 .89.343 1.85.772 2.37.085.1.097.19.071.29l-.286 1.17c-.046.19-.15.23-.347.14-1.294-.6-2.103-2.48-2.103-3.99 0-3.25 2.36-6.23 6.806-6.23 3.573 0 6.35 2.55 6.35 5.96 0 3.55-2.237 6.41-5.345 6.41-1.044 0-2.026-.543-2.363-1.185l-.642 2.45c-.232.897-.861 2.02-1.282 2.705.964.298 1.98.458 3.033.458 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>
              &copy; {currentYear} Abhishek Kuntare. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-gold transition-colors font-semibold"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="hover:text-gold transition-colors font-semibold"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
