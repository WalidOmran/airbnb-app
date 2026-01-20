import { apiRequest } from "@/app/lib/apiClient";
import { BASE_URL } from "@/utils/utils";


export const favoriteService = {
    // Get all favorites by userId
    getAll: async (userId) => {
        return await apiRequest(`${BASE_URL}/favorites?userId=${userId}`);
    },

    // Add a new item to favorites
    add: async (item) => {
 
        const customId = `fav_${item.userId}_${item.id}`; 
        const newItem = { 
            ...item,
            propertyId: item.id,
             id: customId 
            };
   
        
        return  await apiRequest(`${BASE_URL}/favorites`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
        
    },

    // Delete a item from favorites
    
    delete: async (propertyId, userId) => {
        const recordIdToDelete = `fav_${String(userId)}_${String(propertyId)}`;
    //   
        return await apiRequest(`${BASE_URL}/favorites/${recordIdToDelete}`, {
            method: 'DELETE',
        });

       
    }
};