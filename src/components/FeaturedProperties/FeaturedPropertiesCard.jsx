"use client";
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon as HeartOutline  } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid , StarIcon } from "@heroicons/react/24/solid";
import { useFavoritesContext } from '@/context/FavoritesContext';

const FeaturedPropertiesCard = ({item ,totalSlides}) => {

    const {favoritesState,  handleAddFavorite , handleRemoveFavorite } = useFavoritesContext();
    const isFavorite= favoritesState?.items.some(fav => fav.id === item.id);
    
    return (
        <div className='relative mt-2 rounded-lg hover:scale-105 transform transition duration-300 ease-out bg-white ' role="group" aria-roledescription="slide" aria-label={`slide ${item.id} of ${totalSlides}`} tabIndex={0}>

            <div className='flex justify-between p-2 absolute top-1 right-1'>
                    {
                    isFavorite? 
                        <button  onClick={()=> handleRemoveFavorite(item)} className='bg-black rounded-full p-2 z-10 shadow-md hover:shadow-lg active:scale-90 transition duration-200 ease-out ' role="button" aria-label="Remove from favorites">
                            <HeartSolid className="h-6 w-6   cursor-pointer hover:scale-105 text-yellow-400 transform transition duration-200 ease-out" />
                        </button> 
                    :
                        <button  onClick={() => handleAddFavorite(item)} className='bg-white hover:bg-black rounded-full p-2 z-10 shadow-md hover:shadow-lg active:scale-90 transition duration-200 ease-out ' role="button" aria-label="Add to favorites">
                            <HeartOutline className="h-6 w-6 text-gray-400 cursor-pointer hover:scale-105 hover:text-yellow-400 transform transition duration-200 ease-out" />
                        </button>
                }
                    

                    
            </div>
            <Link  href={`/property-details/${item.id}`} className=''>
                <div className='w-full '>
                    <div className='relative h-70 w-[100%] bg-gray-100 rounded-lg'>
                        <Image src={item.images[0]} alt={`property photo - ${item.title}`} fill className='rounded-xl object-cover object-center ' priority />
                    </div>
                    <div className='flex justify-between  p-2'>
                        <h3 className='pt-1 text-sm'>{item.title}</h3>
                        <div className='min-w-1/2 text-right'>
                            <p className='text-gray-500'>
                                <span className='text-2xl font-semibold text-red-500'>{item.price_per_night}$</span> 
                                <span className='text-sm'> per-night</span>
                            </p>
                            <p className='flex items-center justify-end text-sm'>
                                <span className=''>{item.review.rating}</span> 
                                <span className='flex items-center ml-1'>
                                    <StarIcon className="h-4 w-4 text-yellow-400" />
                                </span>
                            </p>
                            
                        </div>
                    </div>
                        
                </div>
            </Link>
        </div>
       
        
    )
}

export default FeaturedPropertiesCard
