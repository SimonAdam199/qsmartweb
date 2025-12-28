export default function Services() {
  return (
    <section className="max-w-6xl mx-auto section-panel spacious layered">
      <div className="section-split">
        <div>
          <div className="eyebrow">Services</div>
          <h2 className="section-heading">Outcome-based offers for enterprise automation</h2>

          <p className="lead mt-4">Three targeted engagements delivered by senior architects and engineers — each scoped to produce measurable business outcomes and ready for enterprise operations.</p>

          <div className="mt-8 space-y-8 text-lg text-slate-700">
            <div>
              <h3 className="font-semibold">1) Automation Audit & Roadmap — €3,000+</h3>
              <p className="mt-2"><strong>Problem:</strong> Leadership suspects manual work and brittle processes are costing time and money but lacks a prioritized plan.</p>
              <p className="mt-2"><strong>Plain solution:</strong> We run a focused 2–3 week audit with stakeholders, map the top processes, estimate ROI, and deliver a prioritized roadmap with clear success metrics and cost/benefit figures.</p>
              <p className="mt-2 text-sm text-slate-600">Outcome: a short, executable plan identifying highest-value automation opportunities, backed by quantified ROI and implementation milestones.</p>
            </div>

            <div>
              <h3 className="font-semibold">2) AI-enabled Process Automation Pilot — €10,000–€30,000</h3>
              <p className="mt-2"><strong>Problem:</strong> A manual or semi-automated process (invoicing, claims, lead enrichment, etc.) consumes significant team time and causes errors.</p>
              <p className="mt-2"><strong>Plain solution:</strong> We design and deliver a production-grade pilot that combines AI (classification, extraction, embeddings) with automated workflows to remove manual steps, reduce error rates, and measure time saved.</p>
              <p className="mt-2 text-sm text-slate-600">Outcome: validated ROI, a hardened pilot deployed on Azure, and an operational plan to scale with estimated impact on headcount and costs.</p>
            </div>

            <div>
              <h3 className="font-semibold">3) Temporal Replatform & Operationalization — €25,000–€100,000+</h3>
              <p className="mt-2"><strong>Problem:</strong> Critical long-running processes fail silently or need substantial manual recovery, causing outages and unpredictable costs.</p>
              <p className="mt-2"><strong>Plain solution:</strong> We replatform key processes onto Temporal, implement observability and retry patterns, and operationalize runbooks on Azure so workflows are durable, observable, and maintainable by your SRE/ops team.</p>
              <p className="mt-2 text-sm text-slate-600">Outcome: materially lower failure/recovery costs, clearly defined SLAs, and an operational model your SRE team can run confidently.</p>
            </div>
          </div>

          <p className="mt-8 text-slate-600">Q‑Smart s.r.o. is a specialist consulting partner for enterprise automation: engagements are staffed with senior architects, follow enterprise security and compliance standards on Azure, and deliver documented operational practices.</p>
        </div>

        <aside className="accent-block overlap">
          <h4 className="font-semibold">Why this approach?</h4>
          <p className="mt-3 text-slate-700">We combine senior judgment with measurable pilots. The left column focuses on decision-makers; this panel highlights the operational and assurance guarantees that enterprise stakeholders require.</p>
          <div className="mt-6">
            <a href="#contact" className="btn-primary">Book a free automation audit</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
