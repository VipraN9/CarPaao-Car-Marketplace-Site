import { relative } from 'path'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata= {
  title: 'CarPaao',
  description: 'Discover the Best Car for you & get it delivered at the earliest.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
