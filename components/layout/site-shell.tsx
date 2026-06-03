import { Header } from '@/components/site/header'
import { SiteFooter } from '@/components/site/footer'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'

type SiteShellProps = {
  children: React.ReactNode
}

/** Shared chrome — header, footer, WhatsApp on every page */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-app min-h-screen w-full overflow-x-hidden bg-white text-[var(--site-text)]">
      <Header />
      <WhatsAppFloat />
      {children}
      <SiteFooter />
    </div>
  )
}
