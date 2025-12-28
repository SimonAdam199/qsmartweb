import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Technologies from '../components/Technologies'
import About from '../components/About'
import Trust from '../components/Trust'
import Contact from '../components/Contact'
import NavDots from '../components/NavDots'

export const revalidate = 0 // prefer static generation

export default function Page() {
  return (
    <main className="slide-container">
      <section id="hero" className="slide hero-bg flex items-center justify-center">
        <Hero />
      </section>

      <section id="services" className="slide flex items-center justify-center">
        <Services />
      </section>

      <section id="technologies" className="slide flex items-center justify-center bg-slate-50">
        <Technologies />
      </section>

      <section id="trust" className="slide flex items-center justify-center">
        <Trust />
      </section>

      <section id="about" className="slide flex items-center justify-center">
        <About />
      </section>

      <section id="contact" className="slide flex items-center justify-center bg-slate-50">
        <Contact />
      </section>

      <NavDots />
    </main>
  )
}
