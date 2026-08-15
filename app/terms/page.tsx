import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions | Abhishek Kuntare',
  description: 'Terms & Conditions for Abhishek Kuntare | Artist & Illustrator',
}

export default function TermsPage() {
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
            Terms & Conditions
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
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing and using this website, you agree to comply with
              these Terms & Conditions. If you do not agree with these terms,
              please discontinue use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              2. Website Purpose
            </h2>

            <p>
              This website is the personal portfolio of Abhishek Kuntare,
              Artist & Illustrator. It is intended to showcase artwork,
              illustrations, creative projects, reels, and related content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              3. Intellectual Property
            </h2>

            <p>
              Unless otherwise stated, all artwork, illustrations, character
              designs, photographs, graphics, logos, written content, and
              other original materials displayed on this website belong to
              Abhishek Kuntare or are used with appropriate permission.
            </p>

            <p className="mt-4">
              These materials may not be copied, reproduced, modified,
              redistributed, sold, or used commercially without prior
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              4. Personal and Non-Commercial Use
            </h2>

            <p>
              Visitors may view the artwork for personal and informational
              purposes. Downloading, reproducing, tracing, editing, or
              republishing artwork without permission is not permitted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              5. Third-Party Websites
            </h2>

            <p>
              The website may provide links to third-party services such as
              Instagram, Pinterest, Linktree, and other external platforms.
            </p>

            <p className="mt-4">
              These websites are operated independently and may have their own
              terms, policies, and practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              6. Accuracy of Information
            </h2>

            <p>
              Reasonable efforts are made to keep the information on this
              website accurate and up to date. However, information,
              artwork, project descriptions, and other content may change
              without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              7. Website Availability
            </h2>

            <p>
              We do not guarantee that the website will always be available,
              uninterrupted, or completely free from technical issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              8. Limitation of Liability
            </h2>

            <p>
              To the extent permitted by applicable law, Abhishek Kuntare will
              not be responsible for losses or damages resulting from the use
              of, or inability to use, this website or its content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              9. Changes to These Terms
            </h2>

            <p>
              These Terms & Conditions may be updated from time to time.
              Updated terms will be published on this page with a revised
              date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-charcoal mb-4">
              10. Contact
            </h2>

            <p>
              For questions regarding these Terms & Conditions or requests
              concerning artwork usage, please contact Abhishek Kuntare using
              the contact information available on this website.
            </p>
          </section>

        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gold/20 flex gap-6 text-sm font-bold">
          <Link
            href="/privacy"
            className="hover:text-gold transition-colors"
          >
            Privacy Policy
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