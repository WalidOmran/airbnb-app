
import logger from "@/utils/logger";
import ListingCard from "./ListingCard"
import useSearchPropertiesQuery from "@/customHooks/useSearchPropertiesQuery";
import ListingCardSkeleton from "./ListingCardSkeleton";
import PropertyCard from "../property/card/PropertyCard";
import PropertyCardSkeleton from "../property/card/PropertyCardSkeleton";


const ResultList = ({cityId}) => {
  const { data, isLoading, error } = useSearchPropertiesQuery(cityId);
  
  
if (isLoading) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8 py-10">
      {[...Array(8)].map((_, i) => (
        <PropertyCardSkeleton key={i} variant="grid" />
      ))}
    </div>
  );
}
 
  if (error) return (
    <div className="py-20 text-center">
      <p className="text-red-500 font-semibold">Oops! Something went wrong.</p>
      <p className="text-gray-400 text-sm">Please try refreshing the page.</p>
    </div>
  );

  if (!data || data.length === 0) return (
    <div className="py-20 text-center text-gray-500">
      No properties found in this city yet.
    </div>
  );

  return (
    <div 
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 pt-2 mb-10"
    // className="container over"
    >
       
       {data && data.map((item) => {
                return (
                    // <PropertyCard key={item.id}item={item} variant="row" />
                    <PropertyCard  key={item.id}item={item} variant="grid" />
                    
                ); 
            })}
        
    
       
    </div>
  )

}



export default ResultList
