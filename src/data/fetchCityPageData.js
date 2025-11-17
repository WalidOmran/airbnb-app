import { apiUrl } from "@/utils/utils";
import { getData } from "./getData";

export async function fetchCityPageData(cityId) {
    return Promise.all([
        getData(`${apiUrl}/properties/?limit=10`), 
        getData(`${apiUrl}/properties?city_id=${cityId}`),
        getData(`${apiUrl}/cities/${cityId}`),
    ])
}