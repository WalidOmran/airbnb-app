import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

const CityItem = memo(({ item: { id , name, image_url } }) => {
  return (
      <Link href={`/city/${encodeURIComponent(id)}`} className='w-full h-full'   aria-label={`Explore city ${name}`}>
        <div className='overflow-hidden'>
          <div className='relative w-full h-48 bg-gray-200 overflow-hidden  hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out '>
            <Image src={image_url} alt={`Photo by ${name}`} fill className="object-cover object-center" priority />
          </div>
          <div className="p-2 text-center">
            <h3 className="text-2xl font-semibold">{name}</h3>
          </div>
        </div>
      </Link>
    
    
  )
})

export default CityItem
