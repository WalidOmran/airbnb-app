import Header from "@/components/header/Header";
import { format } from "date-fns";
import ResultHeading from "./ResultHeading";
import SearchFilters from "./SearchFilters";
import SearchResult from "@/components/search/SearchResult";
import getDataForServer from "@/data/getDataForServer";
import { apiUrl } from "@/utils/utils";
import { getData } from "@/data/getData";
import { cityService } from "@/services/cityService";
import logger from "@/utils/logger";


const Search = async ({searchParams}) => {
    logger.log(searchParams);
    const {location , startDate , endDate , numOfGuests} = await searchParams;
    let formatedStartDate;
    let formatedEndDate;
    let range = "Anytime";
    if(startDate && endDate) {
        try {
            const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
            const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
            range = `${formatedStartDate} - ${formatedEndDate}`;
        } catch (err) {
            range = "Invalid dates";
        }
    }



   let cityData = null;
   if (location) {
       cityData = await cityService.getByName(location);
   }

  return (
    <>
        <Header placeholder={`${location || 'Anywhere'} | ${range} | ${numOfGuests} guests`}/> 
        <main>
            <section className="min-h-screen">
                <div className="container">
                    <ResultHeading range={range} numOfGuests={numOfGuests} location={location} />
                    <SearchFilters />
                   
                    
                    
                    {cityData ? (
                            <SearchResult cityId={cityData.id} />
                        ) : (
                            <div className="py-20 text-center">
                                <h3 className="text-xl font-bold">No results found for &quot;{location}&quot;</h3>
                                <p className="text-gray-500">Try searching for another city like London or Paris.</p>
                            </div>
                        )}
                   
                    
                    
                </div>
            </section>
        
        </main>
    </>
  )
}

export default Search
