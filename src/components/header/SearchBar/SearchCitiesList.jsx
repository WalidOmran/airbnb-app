"use client";
import useSearchQuery from "@/customHooks/useSearchQuery";
import CityItems from "./CityItems";
import NoResults from "./NoResults";

 const LIST_STYLES = {
        common: `
          w-full bg-white z-[999] overflow-y-auto overflow-x-hidden
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-track]:my-3 
          [&::-webkit-scrollbar-thumb]:bg-gray-200
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:border-[2px]
          [&::-webkit-scrollbar-thumb]:border-white
        `,
        desktop: `
          absolute top-full left-0 mt-3 
          rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] 
          border border-gray-100 max-h-[450px]
          animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-200
        `,
        mobile: `
          fixed inset-0 top-[73px] h-[calc(100vh-73px)]
          animate-in slide-in-from-bottom duration-300
        `
      };


const SearchCitiesList = ({ input, handleSelectCity, isMobile }) => {
  const { data, isLoading, error } = useSearchQuery();

  const filterCities = data?.filter(city =>
    city.name.toLowerCase().includes(input.toLowerCase())
  ) ?? [];

  const handleClick = (cityName) => {
    handleSelectCity(cityName); 
  };

   const containerClasses = `${LIST_STYLES.common} ${isMobile ? LIST_STYLES.mobile : LIST_STYLES.desktop}`;
  
  return (


    <ul className={containerClasses}>
    <div className={isMobile ? "" : "p-2"}>
      {isLoading && (
        <div className="flex items-center justify-center p-6 text-sm text-gray-400">
           <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
           Loading destinations...
        </div>
      )}
      
      {error && <p className="p-4 text-sm text-red-400">Failed to load cities.</p>}
      
      {!isLoading && !error && (
          <>
            {(input ? filterCities : (data ?? [])).length === 0 ? (
              <NoResults />
            ) : (
              <CityItems 
                citiesList={input ? filterCities : (data ?? [])} 
                onSelect={handleClick} 
                isMobile={isMobile}
              />
            )}
          </>
        )}
    </div>
  </ul>
    
  );
};

export default SearchCitiesList;





