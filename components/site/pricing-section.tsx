'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { pricingPlans } from '@/lib/site-data'
import { defaultViewport, staggerContainer, staggerItem, defaultTransition } from '@/lib/motion'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { MotionWrapper } from '@/components/layout/motion-wrapper'
import { BrandButton } from '@/components/site/brand-button'
import { cn } from '@/lib/utils'

export function PricingSection() {
  const reduced = useReducedMotion()

  return (
    <Section id="pricing" variant="muted">
      <MotionWrapper variant="fadeUp">
        <SectionHeading
          badge="Plans"
          title="Pricing"
          subtitle="Simple annual plans. Same features you trust — choose what fits your business."
        />
      </MotionWrapper>
      <motion.div
        className="site-content grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        transition={defaultTransition}
      >
        {pricingPlans.map((plan) => {
          const displayName = 'displayName' in plan ? plan.displayName : plan.name
          const card = (
            <div
              className={cn(
                'site-card-luxury flex h-full flex-col p-8 lg:p-10',
                plan.highlighted && 'site-pricing-highlight',
              )}
            >
              {plan.highlighted && 'badge' in plan && (
                <div className="mb-6">
                  <span className="inline-flex rounded-full bg-[var(--site-brand)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    {plan.badge}
                  </span>
                </div>
              )}
              <p className="text-sm font-medium text-[var(--site-text-muted)]">{plan.name} tier</p>
              <h5 className="site-h3 mt-1 text-[var(--site-text)]">{displayName}</h5>
              <div className="mt-6 mb-8">
                <span className="text-5xl font-extrabold tracking-tight text-[var(--site-text)]">
                  {plan.price}
                </span>
                <span className="mt-1 block text-[var(--site-text-muted)]">{plan.period}</span>
              </div>
              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[var(--site-text-muted)]"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--site-muted)] text-xs font-bold text-[var(--site-text)]">
                      ✓
                    </span>
                    <span className="site-body-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <BrandButton
                type="button"
                className={cn('w-full', plan.highlighted && '!shadow-[var(--shadow-glow)]')}
              >
                Buy Now
              </BrandButton>
            </div>
          )

          if (reduced) return <div key={plan.name}>{card}</div>

          return (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: plan.highlighted ? -8 : -6 }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              {card}
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
