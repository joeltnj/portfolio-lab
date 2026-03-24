import { FaDocker, FaReact, FaPython, FaLinux, FaGithub } from "react-icons/fa"
import { SiKubernetes, SiPostgresql } from "react-icons/si"

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 text-white px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-2xl font-bold md:text-3xl">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg border border-gray-800 p-4 text-center hover:border-green-400 transition">
            <FaDocker className="mx-auto mb-3 text-3xl text-green-400" />
            <p>Docker</p>
          </div>

          <div className="rounded-lg border border-gray-800 p-4 text-center hover:border-green-400 transition">
            <FaReact className="mx-auto mb-3 text-3xl text-green-400" />
            <p>React</p>
          </div>

          <div className="rounded-lg border border-gray-800 p-4 text-center hover:border-green-400 transition">
            <FaPython className="mx-auto mb-3 text-3xl text-green-400" />
            <p>Python</p>
          </div>

          <div className="rounded-lg border border-gray-800 p-4 text-center hover:border-green-400 transition">
            <FaLinux className="mx-auto mb-3 text-3xl text-green-400" />
            <p>Linux</p>
          </div>

          <div className="rounded-lg border border-gray-800 p-4 text-center hover:border-green-400 transition">
            <FaGithub className="mx-auto mb-3 text-3xl text-green-400" />
            <p>GitHub Actions</p>
          </div>

          <div className="rounded-lg border border-gray-800 p-4 text-center hover:border-green-400 transition">
            <SiPostgresql className="mx-auto mb-3 text-3xl text-green-400" />
            <p>PostgreSQL</p>
          </div>

          <div className="rounded-lg border border-gray-800 p-4 text-center hover:border-green-400 transition">
            <SiKubernetes className="mx-auto mb-3 text-3xl text-green-400" />
            <p>Kubernetes</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills