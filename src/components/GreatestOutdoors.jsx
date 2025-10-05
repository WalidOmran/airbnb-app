import Image from "next/image"
import Link from "next/link"

const GreatestOutdoors = () => {
  return (
    <section className="w-full mt-8 mb-20 ">
          <div className='container relative flex items-center  min-w-full h-[50vh] bg-gray-100'>
               <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#ffffff38]  z-1">
                </div>
                <Image
                    src={"/GreatestOutdoors-02.jpg"}
                    fill
                    className='  object-cover object-center  z-0'
                    alt='GreatestOutdoors-Img'
                />
            
                <section className='container relative z-3 py-3 text-white '>
                    <h3 className='text-3xl md:text-5xl  mb-6 font-bold'>The Greatest Outdoors</h3>
                    <p>Wishlists curated by Airbnb</p>
                    <Link
                        href='/Greatest-Outdoors'
                        className='max-w-40 text-sm px-3 py-3 rounded-lg mt-5 block text-white bg-gray-900 text-center font-semibold hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 ease-in-out'
                        aria-label="Explore Greatest Outdoors"
                        >
                        Get Inspired
                        <span className="sr-only"> - Click to explore our curated greatest outdoors wishlists</span>
                    </Link>

                </section>
            </div>
        </section>
  )
}

export default GreatestOutdoors
