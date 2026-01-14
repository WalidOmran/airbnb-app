export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000';



export const propertiesApiUrl = `${BASE_URL}/properties`;
export const apiUrl = BASE_URL;


export const initialFavoritesState = {
    items : []
};
