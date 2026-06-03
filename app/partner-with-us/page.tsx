import type { Metadata } from 'next'
import { SiteShell } from '@/components/layout/site-shell'
import { LegalPageLayout } from '@/components/site/legal-page-layout'
import { partnerPage } from '@/lib/site-pages'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Partner With Us | ${siteConfig.name}`,
  description: `Join TallyBridge as a partner — reseller, integrator, or technology partner. Grow your business with our support and resources.`,
}

export default function PartnerPage() {
  return (
    <SiteShell>
      <LegalPageLayout
        badge={partnerPage.badge}
        title={partnerPage.title}
        intro={partnerPage.intro}
        sections={partnerPage.sections}
      />
    </SiteShell>
  )
}
