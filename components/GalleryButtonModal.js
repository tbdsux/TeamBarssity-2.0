import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

function GalleryButtonModal() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setToggler(!toggler)}
        className="hover:bg-gray-400 bg-gray-300 text-gray-800 py-2 px-8 rounded-md font-bold tracking-wide"
      >
        <FontAwesomeIcon icon={faImages} />
        <span className="ml-1" title="See pictures slideshow">
          Slide Show
        </span>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          '/gallery/pic1.jpg',
          '/gallery/pic2.jpg',
          '/gallery/pic3.jpg',
          '/gallery/pic4.JPG',
          '/gallery/pic5.jpg',
          '/gallery/pic6.JPG',
          '/gallery/pic7.JPG',
          '/gallery/pic8.JPG',
          '/gallery/pic9.jpg',
          '/gallery/pic10.jpg',
          '/gallery/pic11.JPG',
          '/gallery/pic12.JPG',
          '/gallery/pic13.JPG',
          '/gallery/pic14.JPG',
        ]}
      />
    </div>
  )
}

export default GalleryButtonModal
