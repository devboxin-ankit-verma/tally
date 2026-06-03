'use client'

import { useReducedMotion } from 'framer-motion'
import { featureShowcase } from '@/lib/site-data'
import { Section } from '@/components/layout/section'
import { SectionHeading } from '@/components/layout/section-heading'
import { FeatureRow } from '@/components/site/feature-row'
import { useFeaturesHeadingGsap } from '@/hooks/use-features-heading-gsap'

export function FeaturesSection() {
  const reducedMotion = useReducedMotion() ?? false
  const headingRef = useFeaturesHeadingGsap(reducedMotion)

  return (
    <Section id="features">
      <div className="site-features-panel">
        <div ref={headingRef} className="site-features-panel__heading">
          <SectionHeading
            staggerMarks
            badge="Capabilities"
            title="Powerful Features"
            subtitle="Everything you need to manage Tally from your phone — designed for speed, compliance, and growth."
          />
        </div>
        <div className="site-features-panel__list flex flex-col site-feature-gap">
        {featureShowcase.map((feature, index) => (
          <FeatureRow
            key={feature.title}
            label={feature.label}
            title={feature.title}
            description={feature.description}
            benefits={feature.benefits}
            cta={feature.cta}
            image={feature.image}
            alt={feature.alt}
            imageLeft={index % 2 === 0}
          />
        ))}
        </div>
      </div>
    </Section>
  )
}
