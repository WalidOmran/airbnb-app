'use client';
import getDataForClient from "@/data/getDataForClient";
import { apiUrl } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";


const fetchCityProperties = async (city) => {
  const res = await  getDataForClient(`${apiUrl}/properties?city_id=${city}`);
  return res?.data ?? [];
};
const useGetCityProperties = (city) => {
    return useQuery({
        queryKey: ['cityProperties', city],
        queryFn: () => fetchCityProperties(city),
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        enabled: !!city, // only run if city is provided
        keepPreviousData: true,

    });
}
export default useGetCityProperties
