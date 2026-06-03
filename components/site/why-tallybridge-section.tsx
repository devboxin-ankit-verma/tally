'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { whyTallyBridge } from '@/lib/site-data'
import { defaultViewport, staggerContainer, staggerItem, defaultTransition } from '@/lib/motion'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { MotionWrapper } from '@/components/layout/motion-wrapper'
import { IconBadge } from '@/components/site/icon-badge'

export function WhyTallyBridgeSection() {
  const reduced = useReducedMotion()

  return (
    <Section>
      <MotionWrapper variant="fadeUp">
        <SectionHeading
          badge="Value"
          title="Why TallyBridge"
          subtitle="Built for modern businesses that need Tally on phone — with automation, compliance, and control."
        />
      </MotionWrapper>
      <motion.div
        className="site-content grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        transition={defaultTransition}
      >
        {whyTallyBridge.map((item) => {
          const card = (
            <div className="site-card-glass flex h-full flex-col gap-4 p-6 lg:p-7">
              <IconBadge name={item.icon} />
              <h3 className="font-semibold tracking-tight text-[var(--site-text)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--site-text-muted)]">
                {item.description}
              </p>
            </div>
          )

          if (reduced) return <div key={item.title}>{card}</div>

          return (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {card}
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
