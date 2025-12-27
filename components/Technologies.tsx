export default function Technologies() {
  return (
    <div className="max-w-4xl p-8">
      <h2 className="text-3xl font-bold">Technologies</h2>
      <p className="mt-4 text-slate-700">We build cloud-native systems on Microsoft Azure and integrate with modern stacks:</p>
      <ul className="mt-4 space-y-2 text-lg text-slate-700">
        <li>Azure Kubernetes Service, Azure Functions</li>
        <li>Headless CMS (Strapi/Contentful/Custom)</li>
        <li>Temporal.io for workflow orchestration</li>
        <li>AI tooling: embeddings, model inference, and MLOps</li>
        <li>CI/CD, Infrastructure as Code (Terraform / Bicep)</li>
      </ul>
    </div>
  )
}
