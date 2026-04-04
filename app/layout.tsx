import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Klenek Bisnes',
  description: 'Sesi Data Read + Zoom untuk diagnosis bisnes berdasarkan data jualan.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  )
}
