import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'

const display = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
})

const body = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = 'https://la7casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'La7Casino — официальный сайт онлайн казино: играть, рабочее зеркало и бонусы',
  description:
    'La7Casino — надёжное онлайн казино. Играйте в слоты, рулетку и карточные игры на реальные деньги. Актуальное рабочее зеркало, быстрая регистрация, щедрые бонусы и моментальные выплаты.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title:
      'La7Casino — официальный сайт онлайн казино: играть, рабочее зеркало и бонусы',
    description:
      'Надёжное онлайн казино La7Casino: слоты, рулетка, карточные игры, рабочее зеркало, щедрые бонусы и быстрые выплаты. Играйте с любого устройства.',
    siteName: 'La7Casino',
    locale: 'ru_RU',
    images: [
      {
        url: '/images/hero-casino.png',
        width: 1024,
        height: 1024,
        alt: 'La7Casino — онлайн казино',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'La7Casino — официальный сайт онлайн казино: играть, рабочее зеркало и бонусы',
    description:
      'Надёжное онлайн казино La7Casino: слоты, рулетка, карточные игры, рабочее зеркало, щедрые бонусы и быстрые выплаты.',
    images: ['/images/hero-casino.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0e5a3a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="La7Casino" />
        <meta name="theme-color" content="#0e5a3a" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="keywords"
          content="la casino, la casino зеркало, la casino играть, la casino официальный, la casino официальный сайт, la казино, ля казино, ля казино зеркало, ля казино зеркало рабочее, ля казино играть, ля казино онлайн, ля казино официальный, ля казино официальный сайт"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
