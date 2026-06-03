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

  const grid = (
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
      <div className="flex flex-col gap-4">
        <BrandLogo variant="light" size="md" />
        <p className="max-w-sm text-[15px] leading-relaxed text-white/80">
          {siteConfig.tagline}
        </p>
        <SocialLinks iconSize="sm" variant="footer" />
        <AppStoreBadges layout="column" />
      </div>

      <div>
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
          Important Links
        </h3>
        <ul className="space-y-3.5">
          {footerImportantLinks.map((link) => (
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
          grid
        ) : (
          <m.div variants={staggerContainer}>
            <m.div variants={staggerItem}>{grid}</m.div>
          </m.div>
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
