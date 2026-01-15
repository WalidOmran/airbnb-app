import { propertyService } from "@/services/propertyService";
import { cityService } from "@/services/cityService";

export async function fetchCityPageData(cityId) {
    return Promise.all([
        await propertyService.getWithinLimit(10),
        await propertyService.getByCityId(cityId),
        await cityService.getById(cityId),
        
    ]);
}
