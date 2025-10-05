export const propertiesApiUrl = process.env.NODE_ENV === 'production'
  ? 'https://raw.githubusercontent.com/WalidOmran/airbnb-app/main/src/FakeDB/db.json'
  : 'http://localhost:9000/properties';

export const citiesApiUrl = process.env.NODE_ENV === 'production'
  ? 'https://raw.githubusercontent.com/WalidOmran/airbnb-app/main/src/FakeDB/db.json'
  : 'http://localhost:9000/cities';

export const initialFavoritesState = {
    items : []
};

