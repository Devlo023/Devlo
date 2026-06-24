export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Audit your infrastructure before deployment.
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Detect security risks, misconfigurations and cloud cost issues in
          Terraform, Docker and Kubernetes before they reach production.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold">
          Join the waitlist
        </button>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">
          Infrastructure mistakes are expensive.
        </h2>

        <p className="text-gray-600">
          A single misconfigured security group, exposed container or insecure
          Kubernetes deployment can lead to downtime, security incidents and
          unnecessary cloud costs.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">
          Built for engineers who need answers.
        </h2>

        <p className="text-gray-600">
          Upload Terraform, Docker, Kubernetes, YAML or JSON files and receive
          a technical audit focused on security, best practices and cost
          optimization.
        </p>
      </section>
    </main>
  );
}