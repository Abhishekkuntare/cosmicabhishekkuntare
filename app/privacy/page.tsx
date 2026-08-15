import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Abhishek Kuntare',
  description: 'Privacy Policy for Abhishek Kuntare | Artist & Illustrator',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-bold text-stone hover:text-gold transition-colors mb-12"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-gold mb-3">
            Legal
          </p>

          <h1 className="text-5xl sm:text-6xl font-black mb-4">
            Privacy Policy
          </h1>

          <div className="w-20 h-2 bg-gradient-to-r from-gold to-stone rounded-full" />

          <p className="text-stone mt-6">
            Last updated: August 15, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-stone leading-8">

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              1. Introduction
            </h2>

            <p>
              Welcome to the personal portfolio website of Abhishek Kuntare,
              Artist & Illustrator. This website showcases artwork,
              illustrations, creative projects, and related artistic content.
            </p>

            <p className="mt-4">
              Your privacy is important to us. This Privacy Policy explains
              what information may be collected when you visit this website
              and how that information may be used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              2. Information We Collect
            </h2>

            <p>
              This website is primarily a portfolio and does not intentionally
              collect sensitive personal information from visitors.
            </p>

            <p className="mt-4">
              If you contact us through an email address, social media
              platform, or another communication method, we may receive the
              information that you voluntarily provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              3. Analytics
            </h2>

            <p>
              This website may use Vercel Analytics to understand general
              website traffic and usage. Analytics may collect information
              such as page views, approximate visitor information, and
              interaction data.
            </p>

            <p className="mt-4">
              Analytics information is used to improve the performance,
              usability, and overall experience of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              4. External Links
            </h2>

            <p>
              This website may contain links to external platforms including
              Instagram, Pinterest, Linktree, and other websites.
            </p>

            <p className="mt-4">
              These external websites have their own privacy policies and
              terms. We are not responsible for the privacy practices or
              content of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              5. Cookies
            </h2>

            <p>
              This website may use technologies such as cookies or similar
              technologies where necessary for website functionality,
              analytics, or performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              6. Artwork and Content
            </h2>

            <p>
              Artwork, illustrations, images, logos, text, and other creative
              materials displayed on this website may be protected by
              applicable copyright and intellectual property laws.
            </p>

            <p className="mt-4">
              Information about the use of artwork is provided separately in
              the Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              7. Changes to This Policy
            </h2>

            <p>
              This Privacy Policy may be updated from time to time to reflect
              changes to the website, services, or applicable requirements.
              Any updates will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              8. Contact
            </h2>

            <p>
              If you have questions about this Privacy Policy, you can contact
              Abhishek Kuntare through the contact information provided on the
              website.
            </p>
          </section>

        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gold/20 flex gap-6 text-sm font-bold">
          <Link
            href="/terms"
            className="hover:text-gold transition-colors"
          >
            Terms & Conditions
          </Link>

          <Link
            href="/"
            className="hover:text-gold transition-colors"
          >
            Home
          </Link>
        </div>

      </div>
    </main>
  )
}