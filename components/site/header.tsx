'use client'

import { useEffect, useState } from 'react'
import { m, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks } from '@/lib/site-data'
import { siteConfig } from '@/lib/site-config'
import { siteLinks } from '@/lib/site-links'
import { navTransition, springGentle } from '@/lib/motion'
import { BrandLogo } from '@/components/site/brand-logo'
import { NavLinkMotion } from '@/components/motion/nav-link-motion'
import { SiteAnchor } from '@/components/site/site-anchor'
import { BrandButton } from '@/components/site/brand-button'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash)
    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const hash = href.includes('#') ? href.slice(href.indexOf('#')) : ''
    const isActive = hash ? activeHash === hash : false
    return (
      <SiteAnchor
        href={href}
        className={cn(
          'site-nav-link pointer-events-auto cursor-pointer rounded-lg px-3 py-2 text-[15px] font-medium transition-colors duration-200 min-h-[44px] inline-flex items-center',
          isActive
            ? 'bg-black/[0.04] text-[var(--site-text)]'
            : 'text-[var(--site-text-muted)] hover:bg-black/[0.04] hover:text-[var(--site-text)]',
        )}
      >
        <NavLinkMotion isActive={isActive}>{label}</NavLinkMotion>
      </SiteAnchor>
    )
  }

  return (
    <m.header
      className={cn(
        'site-navbar fixed top-0 right-0 left-0 z-50',
        scrolled ? 'site-glass-scrolled' : 'site-glass',
      )}
      initial={reduced ? false : { opacity: 0, y: -16 }}
      animate={{
        opacity: 1,
        y: 0,
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(20px) saturate(180%)',
      }}
      transition={navTransition}
    >
      <div className="site-container relative flex h-[72px] items-center">
        <m.div
          className="relative z-10 shrink-0"
          animate={{ scale: scrolled ? 0.96 : 1 }}
          transition={springGentle}
        >
          <BrandLogo size="sm" animated={!reduced} />
        </m.div>

        {/* True viewport center — not offset by wider right actions */}
        <nav
          className="site-navbar__nav pointer-events-none absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-4 md:flex md:gap-6 lg:gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="relative z-10 ml-auto flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteLinks.tel}
              className="site-nav-link hidden items-center gap-2 text-sm text-[var(--site-text-muted)] transition-colors hover:text-[var(--site-text)] xl:flex"
            >
              <Phone className="size-4" aria-hidden />
              {siteConfig.contact.phoneDisplay}
            </a>
            <SiteAnchor
              href={siteLinks.contact}
              className="site-nav-link inline-flex min-h-[44px] cursor-pointer items-center rounded-[var(--radius-btn)] px-5 py-2.5 text-sm font-medium text-[var(--site-text)] transition-colors hover:bg-black/[0.04]"
            >
              Login
            </SiteAnchor>
            <SiteAnchor href={siteLinks.contact} className="inline-flex cursor-pointer">
              <BrandButton type="button" className="!px-6 !py-2.5 !text-sm pointer-events-none">
                Get Started
              </BrandButton>
            </SiteAnchor>
          </div>

          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-[var(--radius-btn)] border border-[var(--site-border)] bg-white/90 shadow-[var(--shadow-sm)] lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden
            />
            <m.nav
              className="site-glass fixed top-0 right-0 z-50 flex h-full w-[min(320px,90vw)] flex-col p-6 pt-24 lg:hidden"
              initial={reduced ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile navigation"
            >
              <div className="mb-8 border-b border-[var(--site-border)] pb-6">
                <BrandLogo size="sm" />
              </div>
              {navLinks.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={reduced ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                <SiteAnchor
                  href={link.href}
                  className="site-nav-link block min-h-[48px] cursor-pointer rounded-[var(--radius-btn)] px-4 py-3.5 text-lg font-medium text-[var(--site-text)] hover:bg-black/[0.04]"
                  onClick={closeMenu}
                >
                  {link.label}
                </SiteAnchor>
                </m.div>
              ))}
              <div className="mt-auto flex flex-col gap-3 border-t border-[var(--site-border)] pt-6">
                <a href={siteLinks.tel} className="text-sm text-[var(--site-text-muted)]">
                  {siteConfig.contact.phoneDisplay}
                </a>
                <SiteAnchor
                  href={siteLinks.contact}
                  onClick={closeMenu}
                  className="site-nav-link flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-[var(--radius-btn)] border border-[var(--site-border)] py-3.5 font-semibold"
                >
                  Login
                </SiteAnchor>
                <SiteAnchor href={siteLinks.contact} onClick={closeMenu} className="block w-full cursor-pointer">
                  <BrandButton type="button" className="pointer-events-none w-full">
                    Get Started
                  </BrandButton>
                </SiteAnchor>
              </div>
            </m.nav>
          </>
        )}
      </AnimatePresence>
    </m.header>
  )
}
