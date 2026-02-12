/**
 * @layer Data Access Layer (Service Layer)
 * @description Handles API requests related to properties.
 * @functions
 * - getAll (List)
 * - getWithinLimit (List with limit)
 * - getById (Detail)
 * - getByCityId (List by city) 
 * - getPropertiesByHostId (List by host)
 * - create (Create new property)
 * - update (Update property)
 * - delete (Delete property)
 */



import { apiRequest } from "@/app/lib/apiClient";
import { BASE_URL } from "@/utils/utils";

export const propertyService = {
   
    getAll : () => {
        return apiRequest(`${BASE_URL}/properties`);
    },
    

    getWithinLimit: (limit) => {
        return apiRequest(`${BASE_URL}/properties?_limit=${limit}`);
    },
    
    getById :  (id) => {
        return apiRequest(`${BASE_URL}/properties/${id}`);
    },
  
    getByCityId : (cityId)=> {
        return apiRequest(`${BASE_URL}/properties?city_id=${cityId}`)
    },


    
    getByHostId: (hostId) => {
        return apiRequest(`${BASE_URL}/properties?host_id=${hostId}`);
    },

 
    create: (propertyData) => {
        return apiRequest(`${BASE_URL}/properties`, {
            method: 'POST',
            body: JSON.stringify(propertyData),
        });
    },

    
    update :  (id,updatedData) => {

        return apiRequest(`${BASE_URL}/properties/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedData),
        });
    },

     
    delete : async (id) => {
      return  apiRequest(`${BASE_URL}/properties/${id}`, { method: 'DELETE'});
    },
    
    
}


