'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { heroContent } from '@/lib/site-data'
import { siteConfig } from '@/lib/site-config'
import { externalLinkAttrs } from '@/lib/site-links'
import {
  defaultViewport,
  staggerContainer,
  staggerItem,
  scaleIn,
  defaultTransition,
} from '@/lib/motion'
import { BrandButton } from '@/components/site/brand-button'

export function HeroSection() {
  const reduced = useReducedMotion()

  const leftContent = (
    <div className="relative z-10 flex flex-col gap-7 lg:max-w-xl lg:gap-8">
      <span className="site-badge w-fit">Tally on Phone · Mobile & Web</span>
      <div>
        <h1 className="site-h1 text-[var(--site-text)]">
          Tally on Phone
        </h1>
        <p className="site-body mt-5 max-w-lg text-[var(--site-text-muted)]">
          {heroContent.description}
        </p>
      </div>
      <div className="flex w-full max-w-xs flex-col gap-3">
        <a href={siteConfig.apps.googlePlay} {...externalLinkAttrs} className="w-full">
          <BrandButton type="button" size="lg" className="w-full">
            {heroContent.androidCta}
          </BrandButton>
        </a>
        <a href={siteConfig.apps.macAppStore} {...externalLinkAttrs} className="w-full">
          <BrandButton type="button" variant="outline" size="lg" className="w-full">
            {heroContent.macCta}
          </BrandButton>
        </a>
      </div>
      <p className="text-sm text-[var(--site-text-muted)]">
        Available on {heroContent.platforms.join(' · ')}
      </p>
    </div>
  )

  const rightImage = (
    <div className="site-hero-mockup-wrap">
      <div className="site-hero-mockup-glow" aria-hidden />
      <div className="site-hero-mockup">
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          width={heroContent.image.width}
          height={heroContent.image.height}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  )

  if (reduced) {
    return (
      <section className="site-hero pt-[88px] pb-14 md:pt-24 md:pb-16">
        <div className="site-container">
          <div className="site-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {leftContent}
            {rightImage}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="site-hero pt-[88px] pb-14 md:pt-24 md:pb-16 lg:pb-0">
      <div className="site-hero-orb site-hero-orb-1" aria-hidden />
      <div className="site-hero-orb site-hero-orb-2" aria-hidden />
      <div className="site-container relative w-full lg:py-10">
        <motion.div
          className="site-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ ...defaultViewport, once: true }}
          variants={staggerContainer}
          transition={defaultTransition}
        >
          <motion.div variants={staggerItem}>{leftContent}</motion.div>
          <motion.div variants={scaleIn} transition={{ ...defaultTransition, delay: 0.1 }}>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.35 }}>
              {rightImage}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
