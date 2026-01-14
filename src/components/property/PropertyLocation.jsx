'use client';
import { useEffect, useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const PropertyLocation = ({ property }) => {
  const [mounted, setMounted] = useState(false);

 
  const longitude = property?.location?.longitude || -0.09;
  const latitude = property?.location?.latitude || 51.505;

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-xl mt-8"></div>;
  }

  return (
    <div className="my-2 w-full"> 
      <p className="text-xl font-semibold">The location where you will stay</p>
      <p className="text-gray-600">{property.address}</p>
      
      <div className="w-full h-[400px] bg-gray-200 mt-6 rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <Map
          initialViewState={{
            longitude: longitude,
            latitude: latitude,
            zoom: 13
          }}
          style={{ width: '100%', height: '100%' }}
          
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
          
          <Marker longitude={longitude} latitude={latitude} color="#FF385C" />
          
         
          <NavigationControl position="top-right" />
        </Map>
      </div> 
    </div>
  );
};

export default PropertyLocation;