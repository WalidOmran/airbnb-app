export const propertiesApiUrl = process.env.NODE_ENV === 'production'
  ? '/api/proxy/properties'
  : 'http://localhost:9000/properties';

export const apiUrl = process.env.NODE_ENV === 'production'
  ? '/api/proxy'
  : 'http://localhost:9000';


export const initialFavoritesState = {
    items : []
};



