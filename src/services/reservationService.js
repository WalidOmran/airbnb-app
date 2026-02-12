import { apiRequest } from "@/app/lib/apiClient";
import { BASE_URL } from "@/utils/utils";
import { propertyService } from "./propertyService";

export const reservationService = {
    getAll : async () => {
        // return await apiRequest(`${BASE_URL}/bookings?_expand=property`);
        return await apiRequest(`${BASE_URL}/bookings`);
    } ,
   // Get reservations by userId
    getUserReservations: async (userId) => {
        const reservations = await apiRequest(`${BASE_URL}/bookings?userId=${userId}`);
        const properties = await propertyService.getAll();
        const fullReservations = reservations.map(reservation => ({
            ...reservation,
            property: properties.find(p => String(p.id) === String(reservation.propertyId)) || null
        }));

        return fullReservations
    },
    getByPropertyId: async (propertyId) => {
        if (!propertyId) {
            console.error("Property ID is required");
            return [];
        }
        return await apiRequest(`${BASE_URL}/bookings?propertyId=${propertyId}`);
    },

//     getUserReservations: async (userId) => {
    
//     return await apiRequest(`${BASE_URL}/bookings?userId=${userId}&_expand=property`);
// },

    

    // Create new reservation
    create: async (reservationData) => {
       
        if (!reservationData.userId || !reservationData.propertyId) {
            throw new Error("Missing userId or propertyId");
        }
        
        return await apiRequest(`${BASE_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reservationData)
        });
    },

   // Cansel a reservation
    delete: async (id) => {
        return await apiRequest(`${BASE_URL}/bookings/${id}`, {
            method: 'DELETE',
        });
    }
};