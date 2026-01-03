"use client"
import { useEffect } from 'react'

export default function HeaderSizer() {
  useEffect(() => {
    const setHeaderHeight = () => {
      // prefer finding an element with class 'site-header'; fall back to site-logo height
      const header = document.querySelector('.site-header') as HTMLElement | null
      const logo = document.querySelector('.site-logo img') as HTMLElement | null
      let height = 0
      if (header) {
        const rect = header.getBoundingClientRect()
        height = Math.round(rect.height)
      }
      // if header height is zero, use logo area
      if (!height && logo) {
        const rect = logo.getBoundingClientRect()
        height = Math.round(rect.height + 36) // include some top padding
      }

      if (height) document.documentElement.style.setProperty('--header-height', `${height}px`)
    }

    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)
    window.addEventListener('orientationchange', setHeaderHeight)
    // keep header height updated on scroll in case of dynamic changes
    window.addEventListener('scroll', setHeaderHeight)

    return () => {
      window.removeEventListener('resize', setHeaderHeight)
      window.removeEventListener('orientationchange', setHeaderHeight)
      window.removeEventListener('scroll', setHeaderHeight)
    }
  }, [])

  return null
}
