export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <a href="https://www.q-smart.eu/" aria-label="Q‑Smart website" className="site-logo" target="_blank" rel="noopener noreferrer">
      <img src="/images/qsmart_logo.png" alt="Q‑Smart" style={{ height: size, width: 'auto', display: 'block' }} />
    </a>
  )
}

