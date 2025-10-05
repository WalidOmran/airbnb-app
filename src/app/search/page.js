import Header from "@/components/header/Header";
import { format } from "date-fns";
import ResultHeading from "./ResultHeading";
import SearchFilters from "./SearchFilters";
import ListingCard from "@/components/search/ListingCard";

const SearchResult = ({searchParams}) => {
    console.log(searchParams);
    const {location , startDate , endDate , numOfGuests} = searchParams;
    let formatedStartDate;
    let formatedEndDate;
    if(startDate && endDate) {
       formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
       formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
    }

const range = `${formatedStartDate} - ${formatedEndDate}`;
const listings = [
  {
    id: 1,
    img: "https://source.unsplash.com/800x600/?apartment",
    title: "Modern Loft in Downtown",
    location: "New York, NY",
    description: "A stylish and modern loft located in the heart of downtown.",
    price: "$120/night",
    total: "$480 total",
    star: 4.8
  },
  {
    id: 2,
    img: "https://source.unsplash.com/800x600/?house",
    title: "Cozy Country House",
    location: "Asheville, NC",
    description: "Enjoy nature in this cozy country escape with mountain views.",
    price: "$90/night",
    total: "$360 total",
    star: 4.5
  },
  {
    id: 3,
    img: "https://source.unsplash.com/800x600/?beach-house",
    title: "Beachfront Bungalow",
    location: "Malibu, CA",
    description: "Wake up to ocean views in this beautiful beachfront home.",
    price: "$200/night",
    total: "$800 total",
    star: 4.9
  },
  {
    id: 4,
    img: "https://source.unsplash.com/800x600/?villa",
    title: "Luxury Villa with Pool",
    location: "Miami, FL",
    description: "Spacious villa with private pool and modern amenities.",
    price: "$350/night",
    total: "$1400 total",
    star: 5.0
  },
  {
    id: 5,
    img: "https://source.unsplash.com/800x600/?cabin",
    title: "Rustic Cabin in the Woods",
    location: "Lake Tahoe, CA",
    description: "Disconnect and relax in this peaceful wooden cabin.",
    price: "$110/night",
    total: "$440 total",
    star: 4.6
  }
];

  return (
    <>
        <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`}/> 
        <main>
            <section className="min-h-screen">
                <div className="container">
                    <ResultHeading range={range} numOfGuests={numOfGuests} location={location} />
                    <SearchFilters />

                    {
                        // listings.map((listing) => {
                        //     return(
                        //         <ListingCard
                        //             key={listing.id}
                        //             img={listing.img}
                        //             title={listing.title}
                        //             location={listing.location}
                        //             description={listing.description}
                        //             price={listing.price}
                        //             total={listing.total}
                        //             star={listing.star}
                        //         />
                        //     )
                        // })
                    }
                    
                </div>
            </section>
        
        </main>
    </>
  )
}

export default SearchResult
