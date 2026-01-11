export const propertiesApiUrl = process.env.NODE_ENV === 'production'
  ? 'https://airbnb-json-db.vercel.app'
  : 'http://localhost:9000/properties';



  export const apiUrl = process.env.NODE_ENV === 'production'
  ? 'https://airbnb-json-db.vercel.app'
  : 'http://localhost:9000';


export const initialFavoritesState = {
    items : []
};


