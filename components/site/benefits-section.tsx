'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { benefitsGrid } from '@/lib/site-data'
import { defaultViewport, staggerContainer, staggerItem, defaultTransition } from '@/lib/motion'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { MotionWrapper } from '@/components/layout/motion-wrapper'
import { IconBadge } from '@/components/site/icon-badge'

export function BenefitsSection() {
  const reduced = useReducedMotion()

  return (
    <Section id="benefits" variant="muted">
      <MotionWrapper variant="fadeUp">
        <SectionHeading
          badge="At a glance"
          title="Why Businesses Choose TallyBridge"
          subtitle="Everything you need to run Tally from your phone — securely and efficiently."
        />
      </MotionWrapper>
      <motion.div
        className="site-content grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        transition={defaultTransition}
      >
        {benefitsGrid.map((item) => {
          const card = (
            <div className="site-card-luxury flex h-full flex-col gap-5 p-8 lg:p-9">
              <IconBadge name={item.icon} className="!size-14 !rounded-[16px]" />
              <h3 className="text-xl font-semibold tracking-tight text-[var(--site-text)]">
                {item.title}
              </h3>
              <p className="site-body-sm flex-1 text-[var(--site-text-muted)]">
                {item.description}
              </p>
            </div>
          )

          if (reduced) return <div key={item.title}>{card}</div>

          return (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35 }}
            >
              {card}
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
