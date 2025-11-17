"use client";
import { HeartIcon as HeartOutline  } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid , StarIcon } from "@heroicons/react/24/solid";
import { useFavoritesContext } from '@/context/FavoritesContext';

const FavoriteButton = ({item}) => {
    const {favoritesState,  handleAddFavorite , handleRemoveFavorite } = useFavoritesContext();
    const isFavorite= favoritesState?.items.some(fav => fav.id === item.id);
       
  return (
     <div className=' p-2'>
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
  )
}

export default FavoriteButton
