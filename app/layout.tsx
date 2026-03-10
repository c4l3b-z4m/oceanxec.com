import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ocean Xpress | Expertos en Aduana y Transporte Internacional en Ecuador',
  description:
    'Ocean Xpress es tu aliado en trámites de aduana, logística internacional y transporte de mercancía en Ecuador. Simplificamos tus importaciones.',
  keywords: [
    'aduana Ecuador',
    'transporte internacional',
    'logística Ecuador',
    'importaciones Ecuador',
    'Ocean Xpress',
    'freight forwarding',
  ],
}

export const viewport: Viewport = {
  themeColor: '#003366',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
