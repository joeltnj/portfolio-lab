function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl" datax-aos="zoom-in">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          About Me
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-sm leading-7 text-gray-400 md:text-base">
              I am a software developer transitioning into DevOps and Cloud
              engineering. I enjoy building web applications, containerizing
              them with Docker, and deploying them on servers.
            </p>

            <p className="mb-4 text-sm leading-7 text-gray-400 md:text-base">
              My current learning path focuses on Docker, Docker Swarm,
              CI/CD, cloud platforms, and modern deployment workflows.
            </p>

            <p className="text-sm leading-7 text-gray-400 md:text-base">
              I am building projects step by step to strengthen my skills in
              development, automation, infrastructure, and cloud engineering.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="mb-4 text-lg font-semibold text-green-400">
              Quick Facts
            </h3>

            <ul className="space-y-3 text-sm text-gray-300 md:text-base">
              <li>DevOps / Cloud Engineer (Junior)</li>
              <li>React, Python, Docker, Linux</li>
              <li>Learning Kubernetes, Azure, AWS</li>
              <li>Building real deployment projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About