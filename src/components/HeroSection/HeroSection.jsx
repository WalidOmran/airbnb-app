import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
        <section className='relative min-w-full min-h-screen bg-gray-100 flex justify-center items-center'>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0000003d]  z-1">
            </div>
            <Image src={"/Hero-02.jpg"} alt="Hero Image" fill className="object-cover object-center z-0" />
            <div className='container  z-10'>
                <div className='text-center text-white'>
                    <h1 className="text-4xl md:text-5xl pb-6 overflow-hidden font-bold">Discover your perfect destination today.</h1>
                    <p className='text-lg'>Find the best places to stay and unforgettable travel experiences around the world.</p>
                    {/* <SearchBar placeholder="Where do you want to go?" /> */}
                    <Link href="/search" className='inline-block my-8 px-4 py-3 rounded-xl cursor-pointer hover:bg-white bg-red-400 hover:text-red-400 text-white hover:shadow-lg hover:scale-105 transition duration-200 ease-out animate-pulse hover:animate-none font-bold '>
                        Search Now 
                    </Link>
                </div>
            </div>
            
        </section>
  )
}

export default HeroSection
