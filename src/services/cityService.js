import { BASE_URL} from "@/utils/utils";
import { getData } from "@/data/getData";
import { apiRequest } from "@/app/lib/apiClient";

export const cityService = {
  // Get All cities
  getAll: async () => {
    return await apiRequest(`${BASE_URL}/cities`);
  },

  // Search by city name 
  getByName: async (name) => {
    if (!name) return null;
    const cities = await apiRequest(`${BASE_URL}/cities?name=${name}`);
    return Array.isArray(cities) && cities.length > 0 ? cities[0] : null;
  },

  // Get by id
  getById: async (id) => {
    return await apiRequest(`${BASE_URL}/cities/${id}`);
  },

  // Create a new city 
  create : async (cityData) => {
    return await apiRequest(`${BASE_URL}/cities`, {
      method: 'POST',
      body: JSON.stringify(cityData),
    });
  },
  // Update a city 
  update : async (id,cityData) => {
    return await apiRequest(`${BASE_URL}/cities/${id}`, {
      method: 'PUT',
      body: JSON.stringify(cityData),
    });
  },
  // Delete a city 
  delete : async (id) => {
    return await apiRequest(`${BASE_URL}/cities/${id}`, {
      method: 'DELETE',
    });
  }, 
};