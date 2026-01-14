import { apiRequest } from "@/app/lib/apiClient";
import { BASE_URL } from "@/utils/utils";

export const propertyService = {
    // Get all properties
    getAll : () => {
        return apiRequest(`${BASE_URL}/properties`);
    },
    // Get properties with limit

    getWithinLimit: (limit) => {
        return apiRequest(`${BASE_URL}/properties/?limit=${limit}`);
    },
    // Get a propery by id
    getById :  (id) => {
        return apiRequest(`${BASE_URL}/properties/${id}`);
    },
    // Get properties by cityId
    getByCityId : (cityId)=> {
        return apiRequest(`${BASE_URL}/properties?city_id=${cityId}`)
    },
    // Create a new propery 
    create: (propertyData) => {
        return apiRequest(`${BASE_URL}/properties`, {
            method: 'POST',
            body: JSON.stringify(propertyData),
        });
    },

    // Update a propery 
    update :  (id,updatedData) => {

        return apiRequest(`${BASE_URL}/properties/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
        });
    },

    // Delete a propery 
    delete : async (id) => apiRequest(`${BASE_URL}/properties/${id}`, {
            method: 'DELETE',
        }),
        
    
    
}


