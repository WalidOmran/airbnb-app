import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';



const ListingCard = ({
  title,
  description,
  img,
  total,
  price,
  star,
  location,
}) => {
  return (
    <div className='flex py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={img}
          fill
          className='rounded-2xl object-cover'
          alt='Listing-Card'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{location}</p>
          {/* <Heart className='h-7 cursor-pointer' /> */}
          <HeartIcon className="h-6 w-6 text-gray-500" />
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            {/* <Star className='h-5 text-red-400' /> */}
            <StarIcon className="h-6 w-6 text-yellow-400" />
            {star}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
            <p className='text-right font-extralight '>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
