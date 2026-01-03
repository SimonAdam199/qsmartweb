"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/technologies', label: 'Platform' },
  { href: '/contact', label: 'Contact' },
]

export default function Header(){
  const pathname = usePathname() || '/'
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <header className="site-header">
      <div className="inner">
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <Link href="/" aria-label="Home">
            <Logo size={48} />
          </Link>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className={mounted && pathname===n.href ? 'active' : ''}>{n.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
