export default function Trust() {
  return (
    <section className="max-w-6xl mx-auto section-panel dense layered">
      <div className="section-split">
        <div>
          <h2 className="section-heading">Trusted for mission-critical automation</h2>

          <p className="lead mt-4">When automation touches revenue, compliance, or customer experience, you require predictable delivery, robust error handling, and documented operations — not experiments.</p>

          <ul className="mt-6 space-y-4 text-left text-lg text-slate-700 mx-auto" style={{maxWidth: '56rem'}}>
            <li><strong>Proven delivery team:</strong> Senior architects with years delivering automation for regulated and high-availability environments. Engagements include transfer of operational runbooks and SRE playbooks.</li>
            <li><strong>Enterprise controls:</strong> Security, compliance, RBAC, and cost-control are baked into design. We deliver monitoring, alerts, and automated recovery from day one.</li>
            <li><strong>Operational certainty:</strong> Durable Temporal workflows, idempotent design, and robust error handling reduce manual recoveries and ongoing operational toil.</li>
            <li><strong>Outcome commitments:</strong> We define measurable SLAs and recovery objectives as part of delivery so leadership can rely on automation without surprise costs.</li>
          </ul>

        </div>

        <aside className="accent-block overlap">
          <h4 className="font-semibold">Operational guarantees</h4>
          <p className="mt-3 text-slate-700">We deliver runbooks, SLOs, and a staged cutover plan so teams inherit a system they can operate reliably.</p>
          <div className="mt-6">
            <a href="#contact" className="btn-primary">Book a free automation audit</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
