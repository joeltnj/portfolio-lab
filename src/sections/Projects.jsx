function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-950 text-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-bold md:text-3xl">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* <div className="rounded-xl border border-gray-800 p-6 hover:border-green-400 transition"> */}
          <div className="rounded-xl border border-gray-800 p-6 hover:border-green-400 hover:-translate-y-1 transition duration-300">
            <h3 className="mb-3 text-xl font-semibold text-green-400">Invoice Generator Web App</h3>

            <p className="mb-4 text-sm leading-7 text-gray-400 md:text-base">
              Web application that allows users to fill in invoice data, store information in a database on a VPS, and
              generate PDF invoices.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <span>React</span>
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>PDF</span>
              <span>VPS</span>
            </div>
            <a href="#" className="inline-block mt-4 text-sm text-green-400 hover:underline">
              View Project →
            </a>
          </div>

          {/* <div className="rounded-xl border border-gray-800 p-6 hover:border-green-400 transition"> */}
          <div className="rounded-xl border border-gray-800 p-6 hover:border-green-400 hover:-translate-y-1 transition duration-300">
            <h3 className="mb-3 text-xl font-semibold text-green-400">Docker Swarm Voting App</h3>

            <p className="mb-4 text-sm leading-7 text-gray-400 md:text-base">
              Microservices application deployed on a Docker Swarm cluster with multiple services communicating through
              overlay networks.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <span>Docker</span>
              <span>Docker Swarm</span>
              <span>Redis</span>
              <span>PostgreSQL</span>
              <span>Microservices</span>
            </div>
            <a href="#" className="inline-block mt-4 text-sm text-green-400 hover:underline">
              View Project →
            </a>
          </div>

          {/* <div className="rounded-xl border border-gray-800 p-6 hover:border-green-400 transition"> */}
          <div className="rounded-xl border border-gray-800 p-6 hover:border-green-400 hover:-translate-y-1 transition duration-300">
            <h3 className="mb-3 text-xl font-semibold text-green-400">CI/CD Pipeline Lab</h3>

            <p className="mb-4 text-sm leading-7 text-gray-400 md:text-base">
              Automated build and delivery workflow using GitHub Actions, Docker image build, test steps, and registry
              publishing.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <span>GitHub Actions</span>
              <span>Docker</span>
              <span>Buildx</span>
              <span>CI/CD</span>
            </div>
            <a href="#" className="inline-block mt-4 text-sm text-green-400 hover:underline">
              View Project →
            </a>
          </div>

          {/* <div className="rounded-xl border border-gray-800 p-6 hover:border-green-400 transition"> */}
          <div className="rounded-xl border border-gray-800 p-6 hover:border-green-400 hover:-translate-y-1 transition duration-300">
            <h3 className="mb-3 text-xl font-semibold text-green-400">Kubernetes Deployment Lab</h3>

            <p className="mb-4 text-sm leading-7 text-gray-400 md:text-base">
              Learning project focused on deploying containerized applications with Kubernetes services, deployments,
              and ingress concepts.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <span>Kubernetes</span>
              <span>Containers</span>
              <span>Deployments</span>
              <span>Ingress</span>
            </div>
            <a href="#" className="inline-block mt-4 text-sm text-green-400 hover:underline">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
