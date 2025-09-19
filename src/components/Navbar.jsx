import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800">
        <div className="text-yellow-400 font-bold text-lg">CRESCENTIS</div>
        <nav className="flex gap-6 text-gray-300 text-sm font-medium">
          {["Home", "About", "Services", "Pricing", "Contact"].map((item, i) => (
            <a
              key={i}
              href={
                item === "Home"
                  ? "/"
                  : item === "About"
                  ? "/about"
                  : item === "Contact"
                  ? "/contact"
                  : item === "Pricing"
                  ? "/pricing"
                  : item === "Services"
                  ? "/services"
                  : `#${item.toLowerCase()}`
              }
              className="relative group"
            >
              <span className="transition">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>

      {/* Add padding-top equal to navbar height so content is not hidden */}
      <div className="pt-20"></div>
    </div>
  )
}

export default Navbar
