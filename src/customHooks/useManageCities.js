"use client";
import { cityService } from '@/services/cityService';
import { useEffect, useState } from 'react'
import { toast } from 'sonner';

const useManageCities = () => {
    const [cities, setCities] = useState([]);
    const [loadingCities, setLoadingCities] = useState(true);


    const fetchCities = async ()=> {

        setLoadingCities(true);
        try {
            const data = await cityService.getAll();
            const formattedData = data.map(city => ({
                id: city.id,       
                name: city.name,
                imageUrl: city.image_url,
                postalCode: city.postal_code,
                desc : city.desc,
                latitude: city.location.latitude,
                longitude: city.location.longitude
            }));
            setCities(formattedData);
        } catch (error) {
            console.error("Error fetching cities", error);
            toast.error("Error fetching cities");
        }finally {
            setLoadingCities(false);
        }
    }
    
    useEffect(()=> {
        fetchCities();
    },[]);
  return {cities , loadingCities}
}

export default useManageCities
