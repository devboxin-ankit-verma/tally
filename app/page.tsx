import { SiteShell } from '@/components/layout/site-shell'
import { HeroSection } from '@/components/site/hero-section'
import { TrustBar } from '@/components/site/trust-bar'
import { FeaturesSection } from '@/components/site/features-section'
import { BenefitsSection } from '@/components/site/benefits-section'
import { WhyTallyBridgeSection } from '@/components/site/why-tallybridge-section'
import { PricingSection } from '@/components/site/pricing-section'
import { DemoCtaSection } from '@/components/site/demo-cta-section'
import { TestimonialsSection } from '@/components/site/testimonials-section'
import { FaqSection } from '@/components/site/faq-section'
import { ContactSection } from '@/components/site/contact-section'

export default function Page() {
  return (
    <SiteShell>
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustBar />
        <FeaturesSection />
        <BenefitsSection />
        <WhyTallyBridgeSection />
        <PricingSection />
        <DemoCtaSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
    </SiteShell>
  )
}
