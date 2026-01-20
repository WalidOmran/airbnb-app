import Image from "next/image";

const PropertyGallary = ({property}) => {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-6">
            {property?.images?.[0] && (
                <div className='relative h-70 w-[100%] mt-3 bg-gray-100 rounded-lg'>
                    <Image src={property.images[0]} alt={`property photo - ${property.title}`} fill className='rounded-xl object-cover object-center ' priority />
                </div>
            )}
            <div className="flex gap-4">
                {property?.images?.[1] && (
                    <div className='relative h-40 md:h-70 w-[100%] mt-3 bg-gray-100 rounded-lg'>
                        <Image src={property.images[1]} alt={`property photo - ${property.title}`} fill className='rounded-xl object-cover object-center ' priority />
                    </div>
                )}
                {property?.images?.[2] && (
                    <div className='relative h-40  md:h-70 w-[100%] mt-3 bg-gray-100 rounded-lg'>
                        <Image src={property.images[2]} alt={`property photo - ${property.title}`} fill className='rounded-xl object-cover object-center ' priority />
                    </div>
                )}
            </div>
        </div>
  )
}

export default PropertyGallary
