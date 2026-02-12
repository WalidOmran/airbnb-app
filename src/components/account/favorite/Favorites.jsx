
import useManageReservations from "@/customHooks/useManageReservations";
import SkeletonCard from "../SkeletonCard";

import PropertyCard from "@/components/property/card/PropertyCard";
import { useFavoritesContext } from "@/context/FavoritesContext";
import EmptyState from "../EmptyState";
const Favorites = () => {
  

     const {favoritesState} = useFavoritesContext();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6"> Saved Destinations</h2>
      
      {/* {isLoading && ( <SkeletonCard count={3} />)} */}

       {favoritesState.items.length === 0 && 
        <EmptyState
            type="favorites"
            title="Your wishlist is empty"
            description="Click the heart icon on properties you love to save them here for your next adventure."
            buttonText="Discover Homes"
          />
        }
      
    
      { favoritesState.items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10">
          {favoritesState.items.map((item) => (
            <PropertyCard 
              key={item.id} 
              item={item} 
              variant="grid" 
            />
          ))}
        </div>
      )}

   
    </div>
  )
}

export default Favorites
