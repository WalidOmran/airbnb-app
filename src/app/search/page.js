import Header from "@/components/header/Header";
import { format } from "date-fns";
import ResultHeading from "./ResultHeading";
import SearchFilters from "./SearchFilters";
import SearchResult from "@/components/search/SearchResult";
import getDataForServer from "@/data/getDataForServer";
import { apiUrl } from "@/utils/utils";
import { getData } from "@/data/getData";


const Search = async ({searchParams}) => {
    console.log(searchParams);
    const {location , startDate , endDate , numOfGuests} = searchParams;
    let formatedStartDate;
    let formatedEndDate;
    if(startDate && endDate) {
       formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
       formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
    }

const range = `${formatedStartDate} - ${formatedEndDate}`;


   const city = await getData(`${apiUrl}/cities?name=${location}`);
   const cityData = Array.isArray(city) && city.length > 0 ? city[0] : null;
   console.log("city : " + cityData);
  return (
    <>
        <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`}/> 
        <main>
            <section className="min-h-screen">
                <div className="container">
                    <ResultHeading range={range} numOfGuests={numOfGuests} location={location} />
                    <SearchFilters />
                   
                    
                    <SearchResult cityId={cityData.id} />
                  
                   
                    
                    
                </div>
            </section>
        
        </main>
    </>
  )
}

export default Search
