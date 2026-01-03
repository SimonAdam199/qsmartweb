import SectionIcon from './SectionIcon'

export default function Technologies() {
  return (
    <section className="max-w-6xl mx-auto section-panel asym-left dense layered text-white" id="technologies">
      <div className="section-split asym-left">
        <div>
          <header>
            <div className="eyebrow">Platform</div>
            <h2 className="section-heading"><span className="section-icon mr-3 inline-block align-middle"><SectionIcon name="platform" /></span>Platform & tools — selected for enterprise reliability</h2>
            <p className="lead mt-4">We standardize on Azure and vetted tooling to deliver resilient, cost-aware systems with observable KPIs and auditable controls:</p>
          </header>

          <ul className="space-y-2 text-lg mt-16">
            <li><strong>Temporal.io</strong> — for reliable, observable long-running workflows that reduce failure costs.</li>
            <li><strong>Azure</strong> (AKS, Functions, Managed Services) — secure and compliant hosting for enterprise workloads.</li>
            <li><strong>AI & ML</strong> — embeddings, ranking, retrieval-augmented systems, and MLOps with a product-first lens.</li>
            <li><strong>Integrations</strong> — SAP, Salesforce, ERP/CRM systems to unlock automation value across the business.</li>
            <li><strong>Infra as Code</strong> — Terraform / Bicep, GitOps and CI/CD for repeatable, auditable delivery.</li>
          </ul>
        </div>

        <aside className="accent-block overlap bg-transparent border-none">
          <h4 className="font-semibold text-white">Platform choices</h4>
          <p className="mt-3">We select a concise stack that meets enterprise needs for observability, reliability, and cost control.</p>
          <div className="mt-14">
            <a href="#contact" className="btn">Contact us to discuss platform choices</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
