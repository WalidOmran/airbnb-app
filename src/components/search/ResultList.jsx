import useAxiosQuery from "@/customHooks/useAxiosQuery";
import ListingCard from "./ListingCard"
import { apiUrl } from "@/utils/utils";

const ResultList = ({cityId}) => {
    const { data, isLoading, error } = useAxiosQuery(`${apiUrl}/properties?city_id=${cityId}`);
  return (
    <>
    
       {
        data && data.map((item) => (
            console.log(item),
            <ListingCard 
            item={item}
            key={item.id}
            id={item.id}    
            title={item.title}
            description={item.description}
            img={item.images[0]}
            price={item.price_per_night}
            star={item.review.rating}
            />
        ) )
       }
        
    
       
    </>
  )
}



export default ResultList
