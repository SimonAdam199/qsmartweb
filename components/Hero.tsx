import SectionIcon from './SectionIcon'

export default function Hero(){
  return (
    <section className="section">
      <div className="container">
        <div className="hero-inner mx-auto max-w-6xl">
          <h1 className="section-title">For Founders, CTOs and Heads of Operations — deploy automation that reliably reduces cost and accelerates delivery</h1>
          <p className="mt-8">Q‑Smart is a specialist consultancy that turns automation into measurable business performance: fewer manual hours, lower operating costs, and faster time-to-value. We deliver production-grade AI workflows and Temporal orchestrations on Azure with clear KPIs and operational guarantees.</p>
          <p className="mt-4">Our company delivers AI-led automation and durable Temporal workflows on Azure for measurable cost reduction, predictable delivery, and reduced operational risk.</p>
          <p className="mt-4">If you own revenue, margins, or operations and want to see concrete automation outcomes — contact us and we’ll outline pragmatic steps to prove value quickly.</p>
          <div className="mt-12">
            <a href="/contact" className="btn">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
