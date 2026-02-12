import { apiRequestByAxios } from "@/app/lib/apiClient";
import { BASE_URL } from "@/utils/utils";


export const searchService = {
    getCities: async () => {
        return await apiRequestByAxios(`${BASE_URL}/cities`,{},true);
      },
      getPropertiesByCityId : async(cityId)=> {
        return await apiRequestByAxios(`${BASE_URL}/properties?city_id=${cityId}`,{},true);
      }

}