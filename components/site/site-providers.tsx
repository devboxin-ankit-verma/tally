'use client'

import { Toaster } from '@/components/ui/sonner'

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-center" richColors />
    </>
  )
}
