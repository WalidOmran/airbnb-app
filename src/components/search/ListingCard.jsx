'use client';
import Image from 'next/image';
import { HeartIcon as HeartSolid , StarIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import FavoriteButton from '../FavoriteButton';

const ListingCard = ({item}) => {

  
  return (
    <Link  href={`/Property/${item.id}`} className='relative z-8'>
    <div className='relative flex flex-col md:flex-row py-5 px-2 mb-5  cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out '>
      <div className='relative w-full md:w-1/4 h-48 md:h-52 bg-gray-100 rounded-lg overflow-hidden mt-3'>
        <Image
          src={item.images[0]}
          alt={`property photo - ${item.title}`}
          fill
          className='object-cover object-center rounded-xl'
          priority
        />
      </div>
      <div className='flex flex-col flex-grow pl-0 md:pl-5 mt-3 md:mt-0'>
        <div className='flex justify-between  absolute top-8 right-4 w-14 pr-2 md:top-3 md:right-5 rounded-lg '>
          <FavoriteButton item={item} />
        </div>
        <h4 className='text-xl font-semibold mt-1'>{item.title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{item.description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center text-yellow-500'>
            <StarIcon className="h-6 w-6" />
            {item.review.rating}
          </p>
          <div className='text-right'>
           <p className='text-gray-500'>
                <span className='text-2xl font-semibold text-red-500'>{item.price_per_night}$</span> 
                <span className='text-sm'> per-night</span>
           </p>
            <p className='text-sm font-extralight'>{item.total}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ListingCard;






















// 'use client';
// import Image from 'next/image';
// import { HeartIcon } from '@heroicons/react/24/outline';
// import { StarIcon } from '@heroicons/react/24/solid';



// const ListingCard = ({
//   title,
//   description,
//   img,
//   total,
//   price,
//   star,
//   location,
// }) => {
//   return (
//     <div className='flex py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
//       {/* <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
//         <Image
//           src={img}
//           fill
//           className='rounded-2xl object-cover'
//           alt='Listing-Card'
//         />
//       </div> */}
//       <div className='relative h-70 w-[30%] mt-3 bg-gray-100 rounded-lg'>
//                       <Image src={img} alt={`property photo - ${title}`} fill className='rounded-xl object-cover object-center ' priority />
//                   </div>
//       <div className='flex flex-col flex-grow pl-5'>
//         <div className='flex justify-between'>
//           <p>{location}</p>
//           {/* <Heart className='h-7 cursor-pointer' /> */}
//           <HeartIcon className="h-6 w-6 text-gray-500" />
//         </div>
//         <h4 className='text-xl'>{title}</h4>
//         <div className='border-b w-10 pt-2' />
//         <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
//         <div className='flex justify-between items-end pt-5'>
//           <p className='flex items-center'>
//             {/* <Star className='h-5 text-red-400' /> */}
//             <StarIcon className="h-6 w-6 text-yellow-400" />
//             {star}
//           </p>
//           <div>
//             <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
//             <p className='text-right font-extralight '>{total}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingCard;
