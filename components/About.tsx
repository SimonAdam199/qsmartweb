import SectionIcon from './SectionIcon'

export default function About() {
  return (
  <section className="max-w-5xl mx-auto section-panel airy layered" id="about">
      <div className="text-center">
    <h2 className="section-heading"><span className="section-icon mr-3 inline-block align-middle"><SectionIcon name="about" /></span>About QSmart</h2>

        <p className="lead mt-4">
          Q‑Smart is a specialist consultancy that turns automation into measurable business performance: fewer manual hours, lower operating costs, and faster time-to-value. We deliver production-grade AI workflows and Temporal orchestrations on Azure with clear KPIs and operational guarantees.
        </p>

        <p className="mt-8 text-slate-600">If you own revenue, margins, or operations and want to see concrete automation outcomes — contact us and we’ll outline pragmatic steps to prove value quickly.</p>
      </div>
    </section>
  )
}
