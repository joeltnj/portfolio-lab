// import { useState } from "react"

// function Navbar() {
//   const [open, setOpen] = useState(false)

//   return (
//     // <nav className="bg-gray-900 text-white px-6 py-4 md:px-10">
//     <nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 md:px-10">
//       <div className="flex items-center justify-between">
//         <h1 className="text-lg font-bold md:text-xl">
//           JoelTN
//         </h1>

//         {/* bouton mobile */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="text-2xl md:hidden"
//         >
//           ☰
//         </button>

//         {/* menu desktop */}
//         <ul className="hidden md:flex md:items-center md:gap-8 md:text-sm">
//           <li><a href="#about" className="hover:text-green-400">About</a></li>
//           <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
//           <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
//           <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
//         </ul>
//       </div>

//       {/* menu mobile ouvert */}
//       {open && (
//         <ul className="mt-4 flex flex-col gap-4 text-sm md:hidden">
//           <li><a href="#about">About</a></li>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       )}
//     </nav>
//   )
// }

// export default Navbar

import { useEffect, useRef, useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 px-6 py-4 text-white md:px-10">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold md:text-xl">JoelTN</h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
           {open ? "✕" : "☰"}
        </button>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          <li><a href="#about" className="hover:text-green-400">About</a></li>
          <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
        </ul>
      </div>

      <div
        ref={menuRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-xl border border-gray-800 bg-gray-950 p-4 shadow-lg">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="block hover:text-green-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setOpen(false)}
                className="block hover:text-green-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="block hover:text-green-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block hover:text-green-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar