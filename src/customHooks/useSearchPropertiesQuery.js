import { searchService } from "@/services/searchService";
import { useQuery } from "@tanstack/react-query";

const useSearchPropertiesQuery = (cityId) => {
  return useQuery({
    queryKey: ['properties', cityId], 
    queryFn: () => searchService.getPropertiesByCityId(cityId),
    enabled: !!cityId, 
    staleTime: 5 * 60 * 1000, 
  });
}

export default useSearchPropertiesQuery;