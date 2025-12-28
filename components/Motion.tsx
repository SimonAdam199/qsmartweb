'use client'

import { useEffect } from 'react'

export default function Motion() {
  useEffect(() => {
    // Smooth scroll snapping override for gentle transitions
    const container = document.querySelector('.slide-container') as HTMLElement | null
    if (container) container.style.scrollBehavior = 'smooth'

    // Intersection observer to fade/translate sections in
    const els = document.querySelectorAll('.slide')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        const el = e.target as HTMLElement
        if (e.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          el.style.transition = 'opacity 520ms cubic-bezier(.2,.9,.2,1), transform 520ms cubic-bezier(.2,.9,.2,1)'
        } else {
          el.style.opacity = '0.02'
          el.style.transform = 'translateY(16px)'
          el.style.transition = 'opacity 420ms ease, transform 420ms ease'
        }
      })
    }, { threshold: 0.15 })

    els.forEach((s) => io.observe(s))

    // Parallax for hero overlays
    const hero = document.querySelector('.hero-bg') as HTMLElement | null
    function onScroll() {
      const y = window.scrollY
      if (hero) {
        const before = hero.querySelector('::before')
        // Can't directly select pseudo-element; use transform on hero to simulate depth
        hero.style.backgroundPosition = `${8 - y * 0.02}% ${14 - y * 0.03}%`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
