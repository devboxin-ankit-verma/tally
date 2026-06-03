'use client'



import { SiteAnchor } from '@/components/site/site-anchor'

import { m, useReducedMotion } from 'framer-motion'

import { siteConfig } from '@/lib/site-config'

import { siteLinks } from '@/lib/site-links'

import { cn } from '@/lib/utils'

import { navTransition } from '@/lib/motion'

import { BrandMark } from '@/components/site/brand-mark'

import { SocialLinks } from '@/components/site/social-links'

import { AppStoreBadges } from '@/components/site/app-store-badges'



type BrandLogoProps = {

  className?: string

  variant?: 'light' | 'dark'

  showSubtitle?: boolean

  showSocial?: boolean

  showAppStores?: boolean

  animated?: boolean

  size?: 'sm' | 'md' | 'lg'

}



/** TallyBridge wordmark — clean, no decorative underline */

export function BrandLogo({

  className,

  variant = 'dark',

  showSubtitle = true,

  showSocial = false,

  showAppStores = false,

  animated = false,

  size = 'md',

}: BrandLogoProps) {

  const reduced = useReducedMotion()

  const isLight = variant === 'light'



  const markSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'



  const titleSizes = {

    sm: 'text-lg font-semibold leading-none tracking-tight',

    md: 'text-xl font-semibold leading-none tracking-tight md:text-2xl',

    lg: 'text-2xl font-semibold leading-none tracking-tight md:text-3xl',

  }



  const subtitleSizes = {

    sm: 'text-[10px] leading-snug',

    md: 'text-xs leading-snug',

    lg: 'text-sm leading-snug',

  }



  const content = (

    <div className={cn('inline-flex flex-col', className)}>

      <SiteAnchor

        href={siteLinks.home}

        className="site-brand-link site-navbar__brand group relative z-20 inline-flex cursor-pointer items-center gap-2.5 no-underline decoration-0 md:gap-3"

        aria-label={`${siteConfig.name} — ${siteConfig.subtitle}, go to homepage`}

      >

        <BrandMark size={markSize} priority={size === 'lg'} />

        <span className="flex flex-col">

          <span

            className={cn(

              'site-brand-title',

              titleSizes[size],

              'border-0 decoration-0',

              isLight ? 'text-white' : 'text-[var(--site-text)]',

            )}

          >

            {siteConfig.name}

          </span>

          {showSubtitle && (

            <span

              className={cn(

                subtitleSizes[size],

                'mt-1 font-normal',

                isLight ? 'text-white/60' : 'text-[var(--site-text-muted)]',

              )}

            >

              {siteConfig.subtitle}

            </span>

          )}

        </span>

      </SiteAnchor>

      {showSocial && (

        <SocialLinks iconSize="sm" variant="footer" className="mt-4" />

      )}

      {showAppStores && <AppStoreBadges className="mt-4" layout="column" />}

    </div>

  )



  if (!animated || reduced) return content



  return (

    <m.div

      initial={{ opacity: 0, y: -8 }}

      animate={{ opacity: 1, y: 0 }}

      transition={navTransition}

    >

      {content}

    </m.div>

  )

}

