import GalleryModal from '../components/GalleryButtonModal'

export default function Gallery() {
  // add the filename of the image in here
  const images_list = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.JPG',
    'pic5.jpg',
    'pic6.JPG',
    'pic7.JPG',
    'pic8.JPG',
    'pic9.jpg',
    'pic10.jpg',
    'pic11.JPG',
    'pic12.JPG',
    'pic13.JPG',
    'pic14.JPG',
  ]

  return (
    <div className="py-8 w-full">
      <div className="text-center">
        <div className="w-11/12 mx-auto">
          <h1 className="text-3xl font-semibold tracking-wide mb-3 text-center text-black">
            Our Amazing Members
          </h1>
          <p className="text-xl font-light tracking-wide">
            Some photos with the members,
          </p>
          <div className="mt-2">
            <GalleryModal />
          </div>
        </div>

        {/* plot all the images */}
        <hr className="mt-3" />
        <div className="flex items-stretch justify-start xl:grid-cols-5 h-full overflow-x-scroll">
          {images_list.map((image) => (
            <img
              src={`/gallery/${image}`}
              alt=""
              className="w-1/2 md:w-1/3 xl:w-1/4 h-32 sm:h-40 lg:h-56 object-cover object-top"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
