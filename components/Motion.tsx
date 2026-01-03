'use client'

import { useEffect } from 'react'

export default function Motion() {
  useEffect(() => {
    // gentle fade-in for sections
    const els = document.querySelectorAll('.section')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        const el = e.target as HTMLElement
        if (e.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          el.style.transition = 'opacity 420ms ease, transform 420ms ease'
        } else {
          el.style.opacity = '0'
          el.style.transform = 'translateY(12px)'
        }
      })
    }, { threshold: 0.12 })

    els.forEach((s) => io.observe(s))

    return () => io.disconnect()
  }, [])

  return null
}
