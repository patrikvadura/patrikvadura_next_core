import React from 'react'
import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import localFont from 'next/font/local'
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'
import Lines from '@/components/dark/common/Lines'
import ProgressScroll from '@/app/components/ProgressScroll'
import Cursor from '@/app/components/Cursor'
import LoadingScreen from '@/app/components/Loader'
import './globals.css'

import '@/public/dark/assets/css/plugins.css'
import '@/public/dark/assets/css/satoshi.css'
import '@/public/dark/assets/css/style.css'

const localeFont = localFont({
  src: [
    {
      path: './fonts/PPTelegraf-Ultralight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/PPTelegraf-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PPTelegraf-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/PPTelegraf-Black.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  openGraph: {
    images: ['/assets/openGraph.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtmID: string | undefined = process.env.NEXT_PUBLIC_GTM

  return (
    <html lang="cs-CZ" className="scroll-smooth" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </Head>

      <Script
        id="Google Analytics"
        data-category="analytics"
        data-service="Google Analytics"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmID}');
                      `,
        }}
        strategy="lazyOnload"
      />

      <body className={localeFont.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmID}`}
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>

        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />

        <div id="smooth-wrapper">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  )
}
