import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteProviders } from '@/components/site/site-providers'
import './globals.css'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TallyBridge',
  alternateName: 'Developerbox Ai Factory',
  url: 'https://developerbox.co.in',
  description:
    'TallyBridge — Tally on Phone. Access business data on mobile and web. Connect Tally with your phone for fast, secure sync on iOS and Android.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+91-9111333243',
    email: 'info@developerbox.co.in',
    availableLanguage: 'English',
  },
}

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://developerbox.co.in'),
  title: 'TallyBridge - Tally on Phone | Business Data on Mobile & Web',
  description:
    'TallyBridge by Developerbox Ai Factory. Access Business Data on mobile and web. Connect Tally and your phone for fast data sync on iOS and Android.',
  keywords: 'Tally on Phone, Tally on Mobile, TallyBridge, Tally ERP 9, Business Data Management, Developerbox',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://developerbox.co.in',
    title: 'TallyBridge - Tally on Phone',
    description:
      'TallyBridge by Developerbox Ai Factory. Connect Tally with your phone for fast, secure business data sync.',
    images: [
      {
        url: '/images/hero-tallybridge.png',
        width: 1200,
        height: 630,
        alt: 'TallyBridge Dashboard',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml', sizes: '32x32' },
    ],
    apple: '/icon.svg',
    shortcut: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteProviders>{children}</SiteProviders>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
