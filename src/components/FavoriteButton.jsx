"use client";
import { HeartIcon as HeartOutline  } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid , StarIcon } from "@heroicons/react/24/solid";
import { useFavoritesContext } from '@/context/FavoritesContext';



const FavoriteButton = ({item}) => {
    const {favoritesState,  handleAddFavorite , handleRemoveFavorite } = useFavoritesContext();
    const isFavorite= favoritesState?.items.some(fav => fav.id === item.id);
    const toggleFavorite = () => {
        isFavorite ? handleRemoveFavorite(item) : handleAddFavorite(item);
    };
    
  return (
     <div className=' p-2'>
            
            <button 
            onClick={toggleFavorite} 
            className={`${isFavorite ? 'bg-black' : 'bg-white hover:bg-black'} rounded-full p-2 z-10 shadow-md hover:shadow-lg active:scale-90 transition duration-200 ease-out`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            {isFavorite ? (
                <HeartSolid className="h-6 w-6 cursor-pointer hover:scale-105 text-yellow-400 transform transition duration-200 ease-out" />
            ) : (
                <HeartOutline className="h-6 w-6 text-gray-400 cursor-pointer hover:scale-105 hover:text-yellow-400 transform transition duration-200 ease-out" />
            )}
        </button>
               
    </div>
  )
}

export default FavoriteButton
