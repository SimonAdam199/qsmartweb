import './globals.css'
import React from 'react'
import ClientTracker from '../components/ClientTracker'
import Motion from '../components/Motion'
import Header from '../components/Header'
import HeaderSizer from '../components/HeaderSizer'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Q-Smart  AI automation & Temporal on Azure — ROI-first engineering',
  description: 'Q‑Smart is a specialist consultancy delivering enterprise automation: AI-driven workflows and Temporal orchestration on Azure with measurable ROI and operational guarantees.',
  keywords: ['automation','AI','Temporal','Azure','ROI','enterprise','workflow','q-smart'],
  openGraph: {
  title: 'Q-Smart  Enterprise automation consultancy — AI & Temporal on Azure',
  description: 'Enterprise automation delivered by senior architects: production-ready AI workflows and durable Temporal orchestration on Azure.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
  <ClientTracker />
  <Motion />
  <Header />
  <HeaderSizer />
  <main className="site-main">
    <div className="container">{children}</div>
  </main>
  <Footer />
      </body>
    </html>
  )
}
