'use client';

import useAxiosQuery from "@/customHooks/useAxiosQuery";
import { apiUrl } from "@/utils/utils";
import Image from "next/image";


const SearchCitiesList = ({input,setInput,handleSubmit}) => {
    const { data, isLoading, error } = useAxiosQuery(`${apiUrl}/cities`);
    const filterCities = data?.filter(city =>
                city.name.toLowerCase().includes(input.toLowerCase())
                ) ?? [];

    const handleClick = (cityName) =>{
        setInput(cityName);
        console.log("input : " + input);
        // handleSubmit

    }

    const CityItems = ({ citiesList }) => {
    if (!citiesList || citiesList.length === 0) {
        return <p className="p-2 text-gray-500">No cities found</p>;
    }
    return citiesList.map(city => (
        <li key={city.id} className="flex gap-3 items-center p-2 cursor-pointer transition hover:bg-gray-100" role="button"
            onClick={() => handleClick(city.name)}>
        <div className="w-[80px] max-h-[50px] relative overflow-hidden">
            <Image 
            src={city.image_url} 
            alt={city.name} 
            width={80} 
            height={40} 
            className='object-cover rounded-lg w-full h-full'
            />
        </div>
        <div>
            <h3>{city.name}</h3>
            <p className="text-sm text-gray-600">{city.desc}</p>
        </div>
        </li>
    ));
    };

    
  return (
    <ul className='absolute  top-full left-5 w-full mt-3 p-1 bg-white rounded-lg shadow-sm  transform transition duration-300 ease-out'>
        {isLoading && <p>Loading cities...</p>}
        {error && <p>Failed to load cities.</p>}
        <CityItems citiesList={input ? filterCities : (data ?? [])} />
    </ul>
  )
}

export default SearchCitiesList
