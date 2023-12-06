'use client'

import 'react-calendar/dist/Calendar.css';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Erick Workdays</title>
      <body className='bg-[#2b253a]'>{children}</body>
    </html>
  )
}
