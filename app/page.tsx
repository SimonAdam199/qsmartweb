import React from 'react'
import Hero from '../components/Hero'
import SectionIcon from '../components/SectionIcon'

export const revalidate = 0

export default function Page(){
  return (
    <main className="site-main">
      <section className="section">
        <div className="container"><Hero /></div>
      </section>
    </main>
  )
}
