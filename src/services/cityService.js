import { BASE_URL} from "@/utils/utils";
import { getData } from "@/data/getData";

export const cityService = {
  // Get All cities
  getAll: async () => {
    return await getData(`${BASE_URL}/cities`);
  },

  // Search by city name 
  getByName: async (name) => {
    if (!name) return null;
    const cities = await getData(`${BASE_URL}/cities?name=${name}`);
    return Array.isArray(cities) && cities.length > 0 ? cities[0] : null;
  },

  // Get by id
  getById: async (id) => {
    return await getData(`${BASE_URL}/cities/${id}`);
  }
};