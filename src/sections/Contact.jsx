function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white px-6 py-16 md:px-12 lg:px-20 flex items-center"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact</h2>

        <p className="mb-8 text-gray-400">
          I'm currently learning and building DevOps and Cloud projects. If you would like to collaborate or discuss
          opportunities, feel free to reach out.
        </p>

        <div className="flex flex-col gap-4 text-gray-300">
          <a
            href="https://github.com/joeltn"
            className="border border-gray-700 px-4 py-2 rounded hover:border-green-400 transition"
          >
            Email
          </a>{" "}
          <a
            href="https://github.com/joeltn"
            className="border border-gray-700 px-4 py-2 rounded hover:border-green-400 transition"
          >
            GitHub{" "}
          </a>
          <a
            href="https://github.com/joeltn"
            className="border border-gray-700 px-4 py-2 rounded hover:border-green-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
