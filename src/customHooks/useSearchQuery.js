"use client";
import { searchService } from "@/services/searchService";
import { useQuery } from "@tanstack/react-query";

const useSearchQuery = () => {

    const fetchCities = async ()=> await searchService.getCities();
    
    

  return useQuery({
    queryKey: ['cities'],
    queryFn: fetchCities,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}

export default useSearchQuery
