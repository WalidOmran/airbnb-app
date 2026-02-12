import { apiRequest } from "@/app/lib/apiClient"


export const mapService = {
    getByLocation : async (lng , lat) => {
        return await apiRequest(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,{ headers: { 'User-Agent': 'PropertyApp/1.0' } });
    }
}