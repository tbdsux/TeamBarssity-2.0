import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/NavBar'

export default function Header() {
  const [mobile, setMobile] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      if (window.outerHeight >= 500) {
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
              : 'w-11/12 mx-auto flex items-center justify-center py-32 h-screen'
          }
        >
          <div className="text-center">
            <h1 className="md:font-bold underline mb-4 text-white text-4xl md:text-5xl lg:text-6xl font-cursive tracking-wider">
              Team Barssity
            </h1>
            <h1 className="font-black text-4xl lg:text-5xl tracking-wide text-white">
              Hi! @person
            </h1>
            <div className="mt-3 md:mt-6 text-white">
              <p className="font-light tracking-wide text-3xl">
                We are a Group built from friendship. <br />
                "Die with Memories, not Dreams".
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
