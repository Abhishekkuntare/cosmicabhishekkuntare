import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import {
  Inter,
  IBM_Plex_Sans,
  Butcherman,
  Rubik_Spray_Paint,
  Nosifer,
} from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

const butcherman = Butcherman({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-butcherman',
})

const rubikSprayPaint = Rubik_Spray_Paint({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-rubik',
})

const nosifer = Nosifer({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Abhishek Kuntare | Artist & Illustrator',
  description:
    'Creative artist showcasing hand-drawn characters, illustrations, and character design artwork',
  generator: 'v0.app',

  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#fef3c7',
    },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${ibmPlexSans.variable}
        ${butcherman.variable}
        ${rubikSprayPaint.variable}
        ${nosifer.variable}
      `}
    >
      <body className="antialiased font-sans bg-cream text-charcoal">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}