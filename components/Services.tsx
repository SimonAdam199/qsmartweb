import SectionIcon from './SectionIcon'

export default function Services() {
  return (
    <article className="max-w-6xl mx-auto section-panel spacious grid gap-10 lg:grid-cols-3 items-start" id="services">
      <header className="lg:col-span-2">
        <div className="eyebrow">Services</div>
        <h2 className="section-heading"><span className="section-icon mr-3 inline-block align-middle"><SectionIcon name="services" /></span>Outcome-based offers for enterprise automation</h2>
        <p className="lead mt-4">Three targeted engagements delivered by senior architects and engineers — each scoped to produce measurable business outcomes and ready for enterprise operations.</p>
      </header>

      <div className="lg:col-span-2 space-y-8 text-lg text-slate-700">
        <section>
          <h3 className="font-semibold">1) Automation Audit & Roadmap — €3,000+</h3>
          <p className="mt-2 text-slate-700"><strong>Problem:</strong> Leadership suspects manual work and brittle processes are costing time and money but lacks a prioritized plan.</p>
          <p className="mt-2 text-slate-700"><strong>Plain solution:</strong> We run a focused 2–3 week audit with stakeholders, map the top processes, estimate ROI, and deliver a prioritized roadmap with clear success metrics and cost/benefit figures.</p>
          <p className="mt-2 text-sm text-slate-600">Outcome: a short, executable plan identifying highest-value automation opportunities, backed by quantified ROI and implementation milestones.</p>
        </section>

        <section>
          <h3 className="font-semibold">2) AI-enabled Process Automation Pilot — €10,000–€30,000</h3>
          <p className="mt-2 text-slate-700"><strong>Problem:</strong> A manual or semi-automated process consumes significant team time and causes errors.</p>
          <p className="mt-2 text-slate-700"><strong>Plain solution:</strong> We design and deliver a production-grade pilot that combines AI with automated workflows to remove manual steps, reduce error rates, and measure time saved.</p>
          <p className="mt-2 text-sm text-slate-600">Outcome: validated ROI, a hardened pilot deployed on Azure, and an operational plan to scale with estimated impact on headcount and costs.</p>
        </section>

        <section>
          <h3 className="font-semibold">3) Temporal Replatform & Operationalization — €25,000–€100,000+</h3>
          <p className="mt-2 text-slate-700"><strong>Problem:</strong> Critical long-running processes fail silently or need substantial manual recovery.</p>
          <p className="mt-2 text-slate-700"><strong>Plain solution:</strong> We replatform key processes onto Temporal, implement observability and retry patterns, and operationalize runbooks so workflows are durable and maintainable.</p>
          <p className="mt-2 text-sm text-slate-600">Outcome: materially lower failure/recovery costs, clearly defined SLAs, and an operational model your SRE team can run confidently.</p>
        </section>
      </div>

      <aside className="accent-block p-6 rounded-lg shadow-md bg-white text-black">
        <h4 className="font-semibold text-black">Why this approach?</h4>
        <p className="mt-3 text-black">We combine senior judgment with measurable pilots. This panel highlights the operational and assurance guarantees that enterprise stakeholders require.</p>
        <div className="mt-6">
          <a href="/contact" className="btn">Contact us to discuss outcomes</a>
        </div>
      </aside>
    </article>
  )
}
