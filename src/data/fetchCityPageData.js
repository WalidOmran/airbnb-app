// import { BASE_URL } from "@/utils/utils";
// import { getData } from "./getData";
// import { propertyService } from "@/services/propertyService";

// export async function fetchCityPageData(cityName) {
//     return Promise.all([
//         propertyService.getWithinLimit(10),
//         // propertyService.getByCityId(cityId),
//         getData(`${BASE_URL}/cities/${cityName}`),
//     ])
// }

import { BASE_URL } from "@/utils/utils";
import { propertyService } from "@/services/propertyService";

export async function fetchCityPageData(cityName) {
    try {
        // 1. نجلب بيانات المدينة بالاسم
        const cityRes = await fetch(`${BASE_URL}/cities?name=${cityName}`);
        const cities = await cityRes.json();
        const cityItem = cities[0]; // نأخذ أول مدينة تطابق الاسم

        if (!cityItem) {
            console.error("City not found:", cityName);
            return [[], [], null]; 
        }

        // 2. الآن نجلب العقارات المرتبطة بالـ ID بتاع المدينة دي
        // ونجلب كل العقارات للاقتراحات في نفس الوقت
        const [allProperties, cityProperties] = await Promise.all([
            propertyService.getWithinLimit(8),
            propertyService.getByCityId(cityItem.id)
        ]);

        return [allProperties, cityProperties, cityItem];

    } catch (error) {
        console.error("Error fetching city page data:", error);
        return [[], [], null];
    }
}