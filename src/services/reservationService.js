// src/services/reservationService.js
import { apiRequest } from "@/app/lib/apiClient";
import { BASE_URL } from "@/utils/utils";

export const reservationService = {
    getAll : async () => {
        // return await apiRequest(`${BASE_URL}/bookings?_expand=property`);
        return await apiRequest(`${BASE_URL}/bookings`);
    } ,
    // Get reservations by userId
    getUserReservations: async (userId) => {
        return await apiRequest(`${BASE_URL}/bookings?userId=${userId}&_expand=property`);
    },

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