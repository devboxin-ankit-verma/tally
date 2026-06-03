'use client'

import { m, useReducedMotion } from 'framer-motion'
import { siteConfig } from '@/lib/site-config'
import { siteLinks, externalLinkAttrs } from '@/lib/site-links'
import { footerImportantLinks } from '@/lib/site-data'
import { BrandLogo } from '@/components/site/brand-logo'
import { SiteAnchor } from '@/components/site/site-anchor'
import { SocialLinks } from '@/components/site/social-links'
import { AppStoreBadges } from '@/components/site/app-store-badges'
import { ContactDetails } from '@/components/site/contact-details'
import { fadeUp, defaultViewport, staggerContainer, staggerItem } from '@/lib/motion'

export function SiteFooter() {
  const { developerbox } = siteConfig
  const reduced = useReducedMotion()

  // Organize footer links into two columns
  const column1Links = [
    { href: '/#features', label: 'Features' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#faq', label: 'FAQ' },
  ]

  const column2Links = [
    { href: '/about', label: 'Company' },
    { href: '/about', label: 'About' },
    { href: '/partner-with-us', label: 'Partner With Us' },
    { href: '/#contact', label: 'Contact' },
    { href: '/terms', label: 'Terms and Conditions' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
  ]

  const mainContent = (
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
      <div className="flex flex-col gap-4">
        <BrandLogo variant="light" size="md" />
        <p className="max-w-sm text-[15px] leading-relaxed text-white/80">
          {siteConfig.tagline}
        </p>
        <SocialLinks iconSize="sm" variant="footer" />
      </div>

      <div>
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
          Features
        </h3>
        <ul className="space-y-3.5">
          {column1Links.map((link) => (
            <li key={link.href}>
              <m.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <SiteAnchor
                  href={link.href}
                  className="inline-block cursor-pointer text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </SiteAnchor>
              </m.div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
          Company
        </h3>
        <ul className="space-y-3.5">
          {column2Links.map((link) => (
            <li key={link.href}>
              <m.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <SiteAnchor
                  href={link.href}
                  className="inline-block cursor-pointer text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </SiteAnchor>
              </m.div>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-footer-contact">
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
          Contact Details
        </h3>
        <ContactDetails variant="footer" />
      </div>
    </div>
  )

  const brandingSection = (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Grow Your Business</h2>
      <p className="text-lg text-white/80 mb-2">Experience Financial Data on Mobile</p>
      <p className="text-[15px] text-white/70 mb-6">Business made simpler for Business users.</p>
      <AppStoreBadges layout="row" />
      <div className="mt-6 pt-6 border-t border-white/10">
        <SocialLinks iconSize="sm" variant="footer" />
      </div>
    </div>
  )

  return (
    <footer className="site-footer-luxury text-white">
      <m.div
        className="site-container site-section-footer"
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeUp}
      >
        {reduced ? (
          <>
            {mainContent}
            {brandingSection}
          </>
        ) : (
          <>
            <m.div variants={staggerContainer}>
              <m.div variants={staggerItem}>{mainContent}</m.div>
            </m.div>
            <m.div variants={staggerItem}>{brandingSection}</m.div>
          </>
        )}
      </m.div>

      <div className="border-t border-white/[0.08]">
        <div className="site-container py-8 text-center">
          <p className="text-sm text-white/50">
            © TallyBridge. All Rights Reserved. · Powered by{' '}
            <a
              href={siteLinks.developerbox}
              {...externalLinkAttrs}
              className="text-white/70 transition-colors hover:text-white"
            >
              {developerbox.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
