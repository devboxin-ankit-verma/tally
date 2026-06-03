'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/site-data'
import {
  fastTransition,
  defaultTransition,
  defaultViewport,
  staggerContainer,
  staggerItem,
} from '@/lib/motion'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { MotionWrapper } from '@/components/layout/motion-wrapper'
import { cn } from '@/lib/utils'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  rating,
  compact = false,
  className,
}: {
  quote: string
  author: string
  role: string
  rating: number
  compact?: boolean
  className?: string
}) {
  const reduced = useReducedMotion()

  const card = (
    <article
      className={cn(
        'site-testimonial-tile flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--site-border)] bg-white p-6 shadow-[var(--shadow-md)] transition-shadow duration-300 hover:shadow-[var(--shadow-lg)] md:p-7',
        compact && 'p-5 md:p-6',
        className,
      )}
    >
      <StarRating rating={rating} />
      <p
        className={cn(
          'mt-4 flex-1 leading-relaxed text-[var(--site-text-muted)]',
          compact ? 'text-sm' : 'text-base md:text-lg',
        )}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-[var(--site-border)] pt-5">
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--site-muted)] text-sm font-bold text-[var(--site-text)]"
          aria-hidden
        >
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-[var(--site-text)]">{author}</p>
          <p className="text-sm text-[var(--site-text-muted)]">{role}</p>
        </div>
      </footer>
    </article>
  )

  if (reduced || compact) return card

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {card}
    </motion.div>
  )
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()
  const current = testimonials[index]

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }, [])

  return (
    <Section variant="muted">
      <MotionWrapper variant="fadeUp">
        <SectionHeading
          badge="Social proof"
          title="What Our Customers Say"
          subtitle="Trusted by business owners who run Tally every day."
        />
      </MotionWrapper>

      <div className="site-content relative">
        <button
          type="button"
          onClick={prev}
          className="absolute top-1/2 -left-2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--site-border)] bg-white shadow-[var(--shadow-md)] transition-all hover:border-[var(--site-brand)] hover:text-[var(--site-brand)] md:-left-16"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute top-1/2 -right-2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--site-border)] bg-white shadow-[var(--shadow-md)] transition-all hover:border-[var(--site-brand)] hover:text-[var(--site-brand)] md:-right-16"
          aria-label="Next testimonial"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="site-testimonial-card px-6 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20">
          <Quote className="mx-auto mb-6 size-10 text-[var(--site-text)]/15" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.author}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={fastTransition}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <StarRating rating={current.rating} />
              </div>
              <p className="text-xl leading-relaxed font-medium text-[var(--site-text)] md:text-2xl md:leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-10">
                <div
                  className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full border-2 border-[var(--site-border)] bg-[var(--site-muted)] text-xl font-bold text-[var(--site-text)]"
                  aria-hidden
                >
                  {current.author.charAt(0)}
                </div>
                <p className="text-lg font-bold text-[var(--site-text)]">{current.author}</p>
                <p className="mt-1 text-sm text-[var(--site-text-muted)]">{current.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-10 bg-[var(--site-brand)]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Richer grid — all reviews */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          transition={defaultTransition}
        >
          {testimonials.map((item) => (
            <motion.div key={item.author} variants={staggerItem} className="h-full">
              <TestimonialCard {...item} compact />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
