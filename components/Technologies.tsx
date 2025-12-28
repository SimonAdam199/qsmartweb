export default function Technologies() {
  return (
    <section className="max-w-6xl mx-auto section-panel asym-left dense layered">
      <div className="section-split asym-left">
        <aside className="accent-block overlap">
          <h4 className="font-semibold">Platform choices</h4>
          <p className="mt-3 text-slate-700">We select a concise stack that meets enterprise needs for observability, reliability, and cost control.</p>
          <div className="mt-6">
            <a href="#contact" className="btn-primary">Book a free automation audit</a>
          </div>
        </aside>

        <div>
          <div className="eyebrow">Platform</div>
          <h2 className="section-heading">Platform & tools — selected for enterprise reliability</h2>

          <p className="lead mt-4">We standardize on Azure and vetted tooling to deliver resilient, cost-aware systems with observable KPIs and auditable controls:</p>

          <ul className="mt-4 space-y-2 text-lg text-slate-700">
            <li><strong>Temporal.io</strong> — for reliable, observable long-running workflows that reduce failure costs.</li>
            <li><strong>Azure</strong> (AKS, Functions, Managed Services) — secure and compliant hosting for enterprise workloads.</li>
            <li><strong>AI & ML</strong> — embeddings, ranking, retrieval-augmented systems, and MLOps with a product-first lens.</li>
            <li><strong>Integrations</strong> — SAP, Salesforce, ERP/CRM systems to unlock automation value across the business.</li>
            <li><strong>Infra as Code</strong> — Terraform / Bicep, GitOps and CI/CD for repeatable, auditable delivery.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
