export default function SectionIcon({ name = 'home', className = '' }: { name?: string; className?: string }) {
  switch (name) {
    case 'services':
      return (
        <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6h.01M6 18h.01M18 6h.01M18 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'platform':
      return (
        <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" rx="1"/>
          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" rx="1"/>
          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" rx="1"/>
          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" rx="1"/>
        </svg>
      )
    case 'about':
      return (
        <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 20c1.333-3 4-5 6-5s4.667 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'contact':
      return (
        <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
  }
}
