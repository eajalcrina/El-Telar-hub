import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { JetBrains_Mono } from 'next/font/google'
import { SITE } from '@/data/site'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const mluvka = localFont({
  src: [
    { path: '../public/fonts/Mluvka-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Mluvka-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-mluvka',
  display: 'swap',
})

const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  openGraph: { type: 'website', locale: 'es_PE', siteName: SITE.name, url: SITE.url },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = { themeColor: '#0D0D0D', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" className={`${mluvka.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
