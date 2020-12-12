import React from 'react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="bg-bland fixed w-full z-50">
      <nav className="w-11/12 mx-auto py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-auto items-center flex flex-row justify-between">
          <div className="w-auto flex items-center justify-center">
            <div className="flex items-center">
              <img src="/logo.png" className="h-10 w-10 object-cover" />{' '}
              <h1 className="font-cursive ml-1 text-white tracking-wide text-xl font">
                Team Barssity
              </h1>
            </div>
          </div>
          {/* mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => {
              setOpen(!open)
            }}
          >
            <img src="/burger.svg" alt="" className="h-8 w-8" />
          </button>
        </div>

        <div className="flex items-center">
          <ul
            className={
              open
                ? 'flex flex-col sm:flex-row mt-2 md:mt-0 text-center'
                : 'hidden'
            }
          >
            <li className="px-4 py-1 md:py-0">
              <a
                href="#who-we-are"
                className="text-gray-600 tracking-widest uppercase hover:text-persian-green"
              >
                About Us
              </a>
            </li>
            <li className="px-4 py-1 md:py-0">
              <a
                href="#our-members"
                className="text-gray-600 tracking-widest uppercase hover:text-persian-green"
              >
                Our Members
              </a>
            </li>
            <li className="px-4 py-1 md:py-0">
              <a
                href="#contact-us"
                className="text-gray-600 tracking-widest uppercase hover:text-persian-green"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <button
            className="hidden md:block ml-2"
            onClick={() => {
              setOpen(!open)
            }}
          >
            <img src="/burger.svg" alt="" className="h-8 w-8" />
          </button>
        </div>
      </nav>
    </div>
  )
}
