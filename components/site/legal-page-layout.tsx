import Link from 'next/link'
import { Section } from '@/components/layout/section'
import { siteConfig } from '@/lib/site-config'
import { siteLinks } from '@/lib/site-links'

type LegalPageLayoutProps = {
  badge: string
  title: string
  intro: string
  sections: readonly { heading: string; paragraphs: readonly string[] }[]
}

export function LegalPageLayout({ badge, title, intro, sections }: LegalPageLayoutProps) {
  return (
    <main className="site-page-main overflow-x-hidden">
      <Section>
        <div className="site-content mx-auto max-w-3xl">
          <span className="site-badge mb-5 inline-flex">{badge}</span>
          <h1 className="site-h2 site-heading text-[var(--site-text)]">{title}</h1>
          <p className="site-body mt-5 text-[var(--site-text-muted)]">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="site-h3 mb-4 text-[var(--site-text)]">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="site-body-sm leading-relaxed text-[var(--site-text-muted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="site-body-sm mt-14 border-t border-[var(--site-border)] pt-8 text-[var(--site-text-muted)]">
            Questions?{' '}
            <Link href={siteLinks.contact} className="font-medium text-[var(--site-text)]">
              Contact us
            </Link>{' '}
            or email{' '}
            <a href={siteLinks.mailto} className="font-medium text-[var(--site-text)]">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </main>
  )
}
