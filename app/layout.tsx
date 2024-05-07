import localFont from 'next/font/local'
import './globals.css'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={localeFont.className}>{children}</body>
    </html>
  )
}
