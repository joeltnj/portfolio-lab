// function Hero() {
//   return (
//     <section className="min-h-screen flex items-center bg-gray-950 text-white px-6 md:px-12 lg:px-20">
//       <div className="max-w-3xl">
//         <p className="mb-2 text-sm text-green-400 md:text-base">
//           Hi, my name is
//         </p>

//         <h1 className="mb-3 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
//           Joel Tuzolana Nziazi
//         </h1>

//         <h2 className="mb-4 text-xl text-gray-400 md:text-3xl">
//           DevOps & Cloud Engineer
//         </h2>

//         <p className="max-w-md text-sm text-gray-400 md:max-w-2xl md:text-lg">
//           I build containerized applications and automate deployments
//           using Docker, CI/CD and cloud technologies.
//         </p>
//       </div>
//     </section>
//   )
// }

// export default Hero

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-gray-950 text-white px-6 md:px-12 lg:px-20 flex items-center">
      <div className="max-w-4xl">
        <p className="mb-3 text-sm text-green-400 md:text-base">Hi, my name is</p>

        <h1 className="mb-3 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">Joel Tuzolana Nziazi</h1>

        <h2 className="mb-6 text-2xl font-semibold text-gray-400 md:text-4xl">
          I build and deploy modern applications.
        </h2>

        <p className="max-w-2xl text-sm leading-7 text-gray-400 md:text-lg">
          I build containerized applications and automate deployments // using Docker, CI/CD and cloud technologies.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded border border-green-400 px-6 py-3 text-center text-green-400 transition hover:bg-green-400 hover:text-black"
          >
            View Projects
          </a>

          <a
            href="https://github.com/joeltn"
            target="_blank"
            rel="noreferrer"
            className="rounded border border-gray-700 px-6 py-3 text-center text-gray-300 transition hover:border-green-400 hover:text-green-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
