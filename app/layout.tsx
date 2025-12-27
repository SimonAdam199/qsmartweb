import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Q-Smart — Cloud-native CMS & Automation',
  description: 'Q-Smart s.r.o. — CMS solutions, business process automation, AI systems, temporal orchestration on Azure.',
  keywords: ['Q-Smart','CMS','Azure','AI','Workflow','Temporal','Automation'],
  openGraph: {
    title: 'Q-Smart — Cloud-native CMS & Automation',
    description: 'Q-Smart s.r.o. — CMS solutions, business process automation, AI systems on Azure.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
