import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

function Gallery() {
    // if toggler is updated when lightbox is closed it will open it
    // if toggler is updated when lightbox is opened it will close it
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <button onClick={() => setToggler(!toggler)} className="bg-white text-gray-800 py-4 px-8 rounded uppercase font-bold tracking-wide" >
            <FontAwesomeIcon icon={faImages} />
            <span className="ml-1">Gallery</span>
            </button>
            <FsLightbox
                toggler={toggler}
                sources={[
                    '/gallery/pic1.jpg',
                    '/gallery/pic2.jpg',
                    '/gallery/pic3.jpg',
                    '/gallery/pic4.jpg',
                    '/gallery/pic5.jpg',
                    '/gallery/pic6.jpg',
                ]}
            />
        </>
    );
}

export default Gallery