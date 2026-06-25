export default function Home() {
  return (
    <main className="bg-[#FAFAFA] text-[#18181B] min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-8">
          AI Infrastructure Security Auditing
        </div>

        <h1 className="text-6xl font-bold tracking-tight mb-8">
          Catch infrastructure mistakes
before they reach production.
        </h1>

        <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-10">
          Detect security risks, cloud misconfigurations and deployment issues
          in Terraform, Docker and Kubernetes before they reach production.
        </p>

        <div className="flex justify-center gap-4">
         <a
  href="https://tally.so/r/MePolA"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition inline-block"
>
  Join the Waitlist
</a>
<a
  href="https://tally.so/r/MePolA"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 px-8 py-4 rounded-xl font-semibold inline-block"
>
  Join Now
</a>
        </div>

        <div className="mt-12 text-zinc-500">
          Built for Developers, DevOps Engineers and CTOs.
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Infrastructure mistakes are expensive.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="font-bold text-xl mb-3">
              Security Risks
            </h3>

            <p className="text-zinc-600">
              Exposed ports, weak permissions and insecure defaults can become
              critical vulnerabilities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="font-bold text-xl mb-3">
              Cloud Costs
            </h3>

            <p className="text-zinc-600">
              Poor infrastructure decisions generate unnecessary cloud spending.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="font-bold text-xl mb-3">
              Downtime
            </h3>

            <p className="text-zinc-600">
              Small configuration errors can break production deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold text-center mb-12">
    How Devlo Works
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h3 className="font-bold text-xl mb-3">1. Upload</h3>
      <p className="text-zinc-600">
        Upload Terraform, Docker, Kubernetes, YAML or JSON files.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h3 className="font-bold text-xl mb-3">2. Analyze</h3>
      <p className="text-zinc-600">
        Devlo reviews security risks, misconfigurations and cloud costs.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h3 className="font-bold text-xl mb-3">3. Fix</h3>
      <p className="text-zinc-600">
        Receive clear recommendations before deployment.
      </p>
    </div>
  </div>
</section>
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Built for engineers who need answers.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-4">
                Upload Infrastructure Files
              </h3>

              <p className="text-zinc-600">
                Terraform, Docker, Kubernetes, YAML and JSON configurations.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-4">
                Receive an Audit
              </h3>

              <p className="text-zinc-600">
                Security findings, best practices and cloud optimization
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-10">
      Built on trusted standards
    </h2>

    <div className="grid md:grid-cols-4 gap-6">
      <div className="border rounded-xl p-6">CIS Benchmarks</div>
      <div className="border rounded-xl p-6">NIST Guidelines</div>
      <div className="border rounded-xl p-6">DevSecOps Best Practices</div>
      <div className="border rounded-xl p-6">Infrastructure as Code</div>
    </div>
  </div>
</section>
      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-2xl mb-2">Free</h3>
            <p className="text-zinc-600">
              Limited technical conversations.
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="font-bold text-2xl mb-2">Pro</h3>
            <p className="text-4xl font-bold mb-4">€14.99</p>
            <p>Infrastructure auditing and file analysis.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-2xl mb-2">Enterprise</h3>
            <p className="text-zinc-600">
              Private deployment and full compliance.
            </p>
          </div>
        </div>
      </section>
<section className="max-w-5xl mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold text-center mb-12">
    Frequently Asked Questions
  </h2>

  <div className="space-y-8">
    <div>
      <h3 className="font-bold text-xl">
        Does Devlo store my files?
      </h3>
      <p className="text-zinc-600">
        No. Files are processed temporarily and not retained.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-xl">
        Which formats are supported?
      </h3>
      <p className="text-zinc-600">
        Terraform, Docker, Kubernetes, YAML and JSON.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-xl">
        Is there an Enterprise version?
      </h3>
      <p className="text-zinc-600">
        Yes. Private deployments are available.
      </p>
    </div>
  </div>
</section>
      {/* Footer CTA */}
      <section className="bg-[#18181B] text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join the Devlo waitlist
        </h2>

        <p className="text-zinc-400 mb-8">
          Be among the first to access Devlo.
        </p>
<a
  href="https://tally.so/r/MePolA"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 px-8 py-4 rounded-xl font-semibold inline-block"
>
  Join Now
</a>
      </section>
    </main>
  );
}