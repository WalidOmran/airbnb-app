import useAxiosQuery from "@/customHooks/useAxiosQuery";
import logger from "@/utils/logger";
import ListingCard from "./ListingCard"
import {  BASE_URL } from "@/utils/utils";

const ResultList = ({cityId}) => {
    const { data, isLoading, error } = useAxiosQuery(`${BASE_URL}/properties?city_id=${cityId}`);
  return (
    <>
       
       {data && data.map((item) => {
                logger.log(item);
                return (
                    <ListingCard
                        item={item}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        img={item.images ? item.images[0] : ""}
                        price={item.price_per_night}
                        star={item.review?.rating} 
                    />
                ); 
            })}
        
    
       
    </>
  )

}



export default ResultList
