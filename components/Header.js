import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/NavBar'

export default function Header() {
  const [mobile, setMobile] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      if (window.outerHeight >= 450) {
        setMobile(false)
      } else {
        setMobile(true)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <>
      {/* Main Showcase Section */}
      <div className="main-showcase">
        <Navbar />
        <div
          className={
            mobile
              ? 'w-11/12 mx-auto flex items-center justify-center h-full py-32'
              : 'w-11/12 mx-auto flex items-center justify-center h-full py-32 md:h-screen'
          }
        >
          <div className="text-center">
            <h1 className="font-black text-3xl lg:text-4xl tracking-wide text-white">
              Hi! @person
            </h1>
            <div className="mt-3 md:mt-6 text-white">
              <p className="font-light tracking-wide text-2xl">
                We are a Group built from friendship. "Die with Memories, not
                Dreams".
              </p>
              <p className="text-xl lg:text-2xl font-light tracking-wide">
                We are
                <br />
                <span className="font-bold underline text-3xl md:text-4xl font-cursive tracking-wide">
                  Team Barssity
                </span>
              </p>
            </div>
            <div className="mt-4 text-gray-300">
              <a
                href="#who-we-are"
                type="button"
                className="font-bold uppercase tracking-wide m-1 py-2 px-6 border-4 rounded-full border-persian-green hover:bg-persian-green"
              >
                <FontAwesomeIcon icon={faInfoCircle} /> Who we Are
              </a>
              <a
                href="#our-members"
                type="button"
                className="font-bold uppercase tracking-wide m-1 py-2 px-6 border-4 rounded-full border-persian-green bg-persian-green hover:text-white"
              >
                <FontAwesomeIcon icon={faUsers} /> Our Members
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
