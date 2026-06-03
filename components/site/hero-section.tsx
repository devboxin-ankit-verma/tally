'use client'

import Image from 'next/image'
import { m, useReducedMotion } from 'framer-motion'
import { heroContent } from '@/lib/site-data'
import { siteConfig } from '@/lib/site-config'
import { externalLinkAttrs } from '@/lib/site-links'
import {
  heroLoadContainer,
  heroLoadItem,
  scaleIn,
  smoothEase,
  springGentle,
} from '@/lib/motion'
import { BrandButton } from '@/components/site/brand-button'
import SplitText from '@/components/motion/split-text'
import GradientText from '@/components/motion/gradient-text'
import { HeroParallax } from '@/components/motion/hero-parallax'

const heroGradientColors = ['#22c55e', '#4ade80', '#16a34a', '#22c55e', '#4ade80']

export function HeroSection() {
  const reduced = useReducedMotion()

  const badge = (
    <m.span
      className="site-badge w-fit"
      variants={heroLoadItem}
    >
      Tally on Phone · Mobile & Web
    </m.span>
  )

  const headline = (
    <h1
      className="site-h1 flex flex-wrap items-baseline gap-0 text-[var(--site-text)]"
      aria-label="Tally on Phone"
    >
      <SplitText
        text="Tally on "
        tag="span"
        className="inline text-inherit"
        splitType="chars"
        delay={60}
        duration={0.65}
        ease="power3.out"
        from={{ opacity: 0, y: 32 }}
        to={{ opacity: 1, y: 0 }}
        textAlign="left"
        immediate
      />
      <GradientText
        colors={heroGradientColors}
        animationSpeed={4}
        showBorder={false}
        staticGradient={!!reduced}
        className="align-baseline"
      >
        Phone
      </GradientText>
    </h1>
  )

  const description = (
    <m.p
      className="site-body mt-5 max-w-lg text-[var(--site-text-muted)]"
      variants={heroLoadItem}
    >
      {heroContent.description}
    </m.p>
  )

  const ctas = (
    <m.div
      className="flex w-full max-w-xs flex-col gap-3"
      variants={heroLoadItem}
    >
      <m.a
        href={siteConfig.apps.googlePlay}
        {...externalLinkAttrs}
        className="w-full"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={springGentle}
      >
        <BrandButton type="button" size="lg" className="pointer-events-none w-full">
          DOWNLOAD CONNECTOR →
        </BrandButton>
      </m.a>
    </m.div>
  )

  const subtitle = (
    <m.div
      className="flex flex-col gap-1 text-center max-w-xs"
      variants={heroLoadItem}
    >
      <p className="text-sm text-[var(--site-text-muted)]">
        Get Started To View Your Business Data
      </p>
      <p className="text-sm text-[var(--site-text-muted)]">
        Integrated with TallyPrime and Tally ERP9 *
      </p>
    </m.div>
  )

  const leftContent = (
    <div className="relative z-10 flex flex-col gap-7 lg:max-w-xl lg:gap-8">
      {badge}
      <div>
        {headline}
        {description}
      </div>
      {ctas}
      {subtitle}
    </div>
  )

  const rightImage = (
    <div className="site-hero-mockup-wrap">
      <m.div
        className="site-hero-mockup-glow"
        aria-hidden
        animate={reduced ? undefined : { opacity: [0.6, 0.9, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
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
            <div className="flex flex-col gap-7 lg:max-w-xl lg:gap-8">
              <span className="site-badge w-fit">Tally on Phone · Mobile & Web</span>
              <div>
                <h1 className="site-h1 text-[var(--site-text)]" aria-label="Tally on Phone">
                  Tally on{' '}
                  <GradientText
                    colors={heroGradientColors}
                    animationSpeed={4}
                    showBorder={false}
                    staticGradient
                    className="align-baseline"
                  >
                    Phone
                  </GradientText>
                </h1>
                <p className="site-body mt-5 max-w-lg text-[var(--site-text-muted)]">
                  {heroContent.description}
                </p>
              </div>
              <div className="flex w-full max-w-xs flex-col gap-3">
                <a href={siteConfig.apps.googlePlay} {...externalLinkAttrs} className="w-full">
                  <BrandButton type="button" size="lg" className="w-full">
                    DOWNLOAD CONNECTOR →
                  </BrandButton>
                </a>
              </div>
              <div className="flex flex-col gap-1 text-center max-w-xs">
                <p className="text-sm text-[var(--site-text-muted)]">
                  Get Started To View Your Business Data
                </p>
                <p className="text-sm text-[var(--site-text-muted)]">
                  Integrated with TallyPrime and Tally ERP9 *
                </p>
              </div>
            </div>
            {rightImage}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="site-hero pt-[88px] pb-14 md:pt-24 md:pb-16 lg:pb-0">
      <m.div
        className="site-hero-orb site-hero-orb-1"
        aria-hidden
        animate={{ y: [0, 24, 0], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <m.div
        className="site-hero-orb site-hero-orb-2"
        aria-hidden
        animate={{ y: [0, -18, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <div className="site-container relative w-full lg:py-10">
        <m.div
          className="site-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          initial="hidden"
          animate="visible"
          variants={heroLoadContainer}
        >
          <m.div variants={heroLoadItem}>{leftContent}</m.div>
          <m.div
            variants={scaleIn}
            transition={{ duration: 0.75, delay: 0.35, ease: smoothEase }}
            className="relative"
          >
            <HeroParallax className="w-full">{rightImage}</HeroParallax>
            <m.div
              className="lg:hidden"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {rightImage}
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
