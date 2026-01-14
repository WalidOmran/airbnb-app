import { getData } from "./getData";
import { propertyService } from "@/services/propertyService";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCityPageData(cityId) {
    return Promise.all([
        propertyService.getWithinLimit(10),
        propertyService.getByCityId(cityId),
        getData(`${BASE_URL}/cities/${cityId}`),
    ])
}