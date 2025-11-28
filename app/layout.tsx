import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const dmSans = localFont({
  src: [
    {
      path: '../public/fonts/DMSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/DMSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/DMSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/DMSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/DMSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Softrinx - Premium Software Development Agency',
  description: 'Enterprise software solutions that drive results. Web apps, mobile apps, AI integration, and cloud infrastructure.',
  keywords: 'software development, web development, mobile apps, enterprise solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}
i      </body>
    </html>
  )
}