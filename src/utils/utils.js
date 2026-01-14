export const propertiesApiUrl = process.env.NODE_ENV === 'production'
  ? '/api/proxy/properties'
  : 'http://localhost:9000/properties';

export const apiUrl = '/api/proxy';


export const initialFavoritesState = {
    items : []
};



