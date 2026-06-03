'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/lib/site-data'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { MotionWrapper } from '@/components/layout/motion-wrapper'
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
        <MotionWrapper variant="fadeUp">
          <SectionHeading
            badge="Support"
            title="Frequently Asked Questions"
            subtitle="Quick answers about TallyBridge, plans, and getting started."
          />
        </MotionWrapper>
        <div className="space-y-4" id="faqAccordion">
          {faqItems.map((item, index) => {
            const isOpen = expandedFaq === index
            return (
              <div key={index} className="site-faq-item">
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
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: reduced ? 0 : 0.3 }}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--site-border)] bg-white"
                    >
                      <ChevronDown className="size-4 text-[var(--site-text-muted)]" aria-hidden />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[var(--site-border)] px-6 py-5 md:px-8 md:py-6">
                        <p className="site-body-sm leading-relaxed text-[var(--site-text-muted)]">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
