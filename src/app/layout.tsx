import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { data } from '@/data/data'
import Head from 'next/head'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Cyntronex',
  description: [...data.header.tagLine].join(';'),
  other: {
    features: data.featureCards.features
      .map((feat) => feat.description)
      .join(';'),
    products: data.productsOffered.products
      .map((product) => product.description)
      .join(';'),
    services: data.servicesOffered.services
      .map((service) => service.desc)
      .join(';'),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
