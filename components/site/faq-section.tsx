'use client'

import { useState } from 'react'
import { m, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/lib/site-data'
import { Section } from '@/components/layout/section'
import { AnimatedSectionHeading } from '@/components/motion/animated-section-heading'
import { springGentle, staggerContainer, staggerItem } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)
  const reduced = useReducedMotion()

  /** Accordion: one panel open; opening another closes the previous */
  const toggleFaq = (index: number) => {
    setExpandedFaq(index)
  }

  return (
    <Section id="faq">
      <div className="site-content max-w-3xl">
        <AnimatedSectionHeading
          badge="Support"
          title="Frequently Asked Questions"
          subtitle="Quick answers about TallyBridge, plans, and getting started."
        />
        <m.div
          className="space-y-4"
          id="faqAccordion"
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {faqItems.map((item, index) => {
            const isOpen = expandedFaq === index
            return (
              <m.div key={index} variants={staggerItem} className="site-faq-item">
                <h3>
                  <button
                    type="button"
                    className={cn(
                      'flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors md:px-8 md:py-6',
                      isOpen ? 'bg-[var(--site-muted)]' : 'hover:bg-[var(--site-muted)]/50',
                    )}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="text-lg font-semibold text-[var(--site-text)] md:text-xl">
                      {item.q}
                    </span>
                    <m.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={reduced ? { duration: 0 } : springGentle}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--site-border)] bg-white"
                    >
                      <ChevronDown className="size-4 text-[var(--site-text-muted)]" aria-hidden />
                    </m.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={`faq-panel-${index}`}
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={reduced ? { duration: 0 } : springGentle}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[var(--site-border)] px-6 py-5 md:px-8 md:py-6">
                        <p className="site-body-sm leading-relaxed text-[var(--site-text-muted)]">
                          {item.a}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            )
          })}
        </m.div>
      </div>
    </Section>
  )
}
