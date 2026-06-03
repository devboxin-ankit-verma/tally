'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { trustBarItems } from '@/lib/site-data'
import { fadeIn, defaultTransition } from '@/lib/motion'

export function TrustBar() {
  const reduced = useReducedMotion()

  return (
    <section className="site-trust-bar py-5 md:py-6" aria-label="Trust indicators">
      <div className="site-container">
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:justify-between lg:gap-x-6"
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          transition={defaultTransition}
        >
          {trustBarItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm font-medium text-[var(--site-text-muted)] md:text-[15px]"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-[var(--site-brand)]/12">
                <Check className="size-3.5 text-[var(--site-brand-dark)]" strokeWidth={2.5} aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
