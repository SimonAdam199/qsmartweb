const sections = ['hero', 'services', 'technologies', 'about', 'contact']

export default function NavDots() {
  return (
    <nav aria-label="Section navigation" className="fixed right-6 top-1/2 -translate-y-1/2 space-y-3 z-50">
      {sections.map((s) => (
        <a key={s} href={`#${s}`} className="block w-3 h-3 rounded-full bg-slate-300 hover:bg-accent" aria-label={`Go to ${s}`}></a>
      ))}
    </nav>
  )
}
